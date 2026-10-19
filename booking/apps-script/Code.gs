/**
 * Lab instrument booking — Google Apps Script backend.
 *
 * Stores each booking as an event in a Google Calendar (one calendar per
 * instrument, or per cycler unit), checks for overlaps under a lock, and uses
 * an e-mail confirmation step so a booking only becomes final when the person
 * who owns the e-mail address confirms it.
 *
 * Deploy: see ../README.md. Web app settings:
 *   Execute as: Me (the lab account that owns the calendars)
 *   Who has access: Anyone   (or "Anyone within <your Workspace domain>")
 */

var CONFIG = {
  TIMEZONE: 'Europe/Madrid',
  // Only these e-mail domains may book (sub-domains are accepted too).
  ALLOWED_DOMAINS: ['csic.es', 'uam.es', 'estudiante.uam.es'],
  // Unconfirmed bookings are deleted after this many minutes.
  PENDING_MINUTES: 30,
  // Bookings must start and end on this grid.
  SLOT_MINUTES: 15,
  // How far ahead people may book.
  MAX_DAYS_AHEAD: 90,
  // Lab manager: receives a copy of every confirmed booking (leave '' to disable).
  MANAGER_EMAIL: '',
  // The public site, used in e-mails.
  SITE_URL: 'https://example.github.io/instrument-guides/',
  /*
   * calendarId: open Google Calendar ▸ Settings ▸ the instrument calendar ▸
   * "Integrate calendar" ▸ Calendar ID (looks like ...@group.calendar.google.com).
   * maxHours values are placeholders — set the real lab rules.
   */
  RESOURCES: [
    { id: 'glovebox', name: 'MBraun EasyLab glovebox', calendarId: '', maxHours: 4, rules: 'Max 4 h per booking during working hours. Leave the antechamber under vacuum and the box in ECO mode.' },
    { id: 'rotavapor', name: 'Büchi Rotavapor R-210', calendarId: '', maxHours: 6, rules: 'Book the glovebox too if you need to load or unload an air-sensitive flask.' },
    { id: 'pmc', name: 'PARSTAT MC · PMC-2000', calendarId: '', channels: 2, maxHours: 72, rules: 'Book one channel. Temperature series: include the 45 min equilibration at each step.' },
    { id: 'ct9008', name: 'Neware CT-9008 (µA cells)', calendarId: '', channels: 8, maxHours: 720, rules: 'Book one channel per cell for the full test length. Micro solid-state cells only.' },
    { id: 'ct5008', name: 'Neware CT-5008', calendarId: '', channels: 8, maxHours: 720, rules: 'Book one channel per cell for the full test length.' },
    { id: 'ct4008', name: 'Neware CT-4008Q', calendarId: '', channels: 8, maxHours: 720, rules: 'Book one channel per cell. Not for cells discharged below 2 V.' },
    { id: 'ct4008t', name: 'Neware CT-4008T', calendarId: '', channels: 8, maxHours: 720, rules: 'Book one channel per cell. Minimum current 5 mA.' },
    { id: 'monowave', name: 'Anton Paar Monowave 400 R', calendarId: '', maxHours: 12, rules: 'Include cooling time. Book the Cora 5001 as well for in-situ Raman.' },
    { id: 'cora', name: 'Anton Paar Cora 5001', calendarId: '', maxHours: 8, rules: 'Laser-safety briefing required.' },
    { id: 'ballmill', name: 'Fritsch Pulverisette 7', calendarId: '', maxHours: 72, rules: 'Book the whole program including pauses.' },
    { id: 'kf', name: 'Mettler Toledo C20S Karl Fischer', calendarId: '', maxHours: 3, rules: 'Measure the 1 % water standard first.' },
    { id: 'furnace', name: 'Hobersal muffle furnace', calendarId: '', maxHours: 72, rules: 'Book the whole program including cooling. Lab limit 1100 °C (h) / 1000 °C (≥ 24 h).' },
    { id: 'oven', name: 'Argolab drying oven', calendarId: '', maxHours: 72, rules: 'Shared oven: label your items. No solvents.' }
  ]
};

/* ------------------------------------------------------------------ */

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.action === 'config') return json_({ ok: true, resources: publicResources_() });
    if (p.action === 'list') return json_(listBookings_(p.resource, p.from, p.to));
    // E-mail links only show a button; the change happens on POST, so mail
    // scanners that pre-open links cannot confirm or cancel bookings.
    if (p.action === 'confirm' || p.action === 'cancel') return actionPage_(p.action, p.cal, p.id, p.token);
    return json_({ ok: false, error: 'unknown_action' });
  } catch (err) {
    return json_({ ok: false, error: 'server', message: String(err) });
  }
}

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    if (p.action === 'confirm') return page_(confirmBooking_(p.cal, p.id, p.token));
    if (p.action === 'cancel') return page_(cancelBooking_(p.cal, p.id, p.token));
    var b = JSON.parse(e.postData.contents);
    if (b.action !== 'book') return json_({ ok: false, error: 'unknown_action' });
    return json_(createBooking_(b));
  } catch (err) {
    return json_({ ok: false, error: 'server', message: String(err) });
  }
}

/* ---------------- resources ---------------- */

function publicResources_() {
  return CONFIG.RESOURCES.map(function (r) {
    return { id: r.id, name: r.name, channels: r.channels || 0, maxHours: r.maxHours, rules: r.rules };
  });
}

// resource keys look like "glovebox" or "ct9008-ch3"
function resolve_(key) {
  var m = /^([a-z0-9]+)(?:-ch(\d+))?$/.exec(String(key || ''));
  if (!m) throw new Error('bad resource');
  var r = CONFIG.RESOURCES.filter(function (x) { return x.id === m[1]; })[0];
  if (!r) throw new Error('unknown resource');
  var ch = m[2] ? parseInt(m[2], 10) : 0;
  if (r.channels && !(ch >= 1 && ch <= r.channels)) throw new Error('bad channel');
  if (!r.channels && ch) throw new Error('bad channel');
  if (!r.calendarId) throw new Error('calendar not configured for ' + r.id);
  var cal = CalendarApp.getCalendarById(r.calendarId);
  if (!cal) throw new Error('calendar not found for ' + r.id);
  return { res: r, ch: ch, key: m[0], cal: cal };
}

function eventsFor_(cal, key, from, to) {
  return cal.getEvents(from, to).filter(function (ev) {
    return ev.getTag('resource') === key;
  });
}

/* ---------------- list ---------------- */

function listBookings_(key, fromIso, toIso) {
  var R = resolve_(key);
  var from = new Date(fromIso), to = new Date(toIso);
  if (isNaN(from) || isNaN(to) || to <= from || (to - from) > 45 * 864e5) throw new Error('bad range');
  var events = eventsFor_(R.cal, R.key, from, to).map(function (ev) {
    var pending = ev.getTag('status') === 'pending';
    return {
      start: ev.getStartTime().toISOString(),
      end: ev.getEndTime().toISOString(),
      label: (pending ? '(pending) ' : '') + (ev.getTag('label') || 'booked')
    };
  });
  return { ok: true, events: events };
}

/* ---------------- create ---------------- */

function createBooking_(b) {
  var R = resolve_(b.resource);
  var start = new Date(b.start), end = new Date(b.end), now = new Date();
  var name = clean_(b.name, 80), email = clean_(b.email, 120).toLowerCase();
  var group = clean_(b.group, 80), purpose = clean_(b.purpose, 300);

  if (isNaN(start) || isNaN(end) || end <= start) return fail_('invalid', 'End must be after start.');
  if (!name || !email || !group || !purpose) return fail_('invalid', 'All fields are required.');
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail_('invalid', 'Invalid e-mail.');
  if (!domainOk_(email)) return fail_('domain', 'Use your institutional e-mail address.');
  if (b.trained !== true) return fail_('training', 'Training confirmation is required.');
  if (start < now) return fail_('past', 'You cannot book in the past.');
  if ((start - now) / 864e5 > CONFIG.MAX_DAYS_AHEAD) return fail_('too_far', 'Bookings open ' + CONFIG.MAX_DAYS_AHEAD + ' days ahead.');
  if ((end - start) / 36e5 > R.res.maxHours) return fail_('too_long', 'Maximum ' + R.res.maxHours + ' h for this instrument.');
  var slot = CONFIG.SLOT_MINUTES * 60000;
  if (start.getTime() % slot || end.getTime() % slot) return fail_('invalid', 'Use ' + CONFIG.SLOT_MINUTES + '-minute steps.');

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return fail_('busy', 'The booking service is busy, try again.');
  try {
    purgePending_(R.cal);
    if (eventsFor_(R.cal, R.key, start, end).length) return fail_('conflict', 'That slot overlaps an existing booking.');
    var label = initials_(name) + ' · ' + group;
    var resLabel = R.res.name + (R.ch ? ' · CH ' + R.ch : '');
    var token = Utilities.getUuid();
    var ev = R.cal.createEvent('[pending] ' + resLabel + ' — ' + label, start, end, {
      description: 'Name: ' + name + '\nE-mail: ' + email + '\nGroup: ' + group + '\nPurpose: ' + purpose
    });
    ev.setTag('resource', R.key);
    ev.setTag('status', 'pending');
    ev.setTag('token', token);
    ev.setTag('label', label);
    ev.setTag('created', String(now.getTime()));
    ev.setTag('email', email);

    var base = ScriptApp.getService().getUrl();
    var q = '&cal=' + encodeURIComponent(R.res.id) + '&id=' + encodeURIComponent(ev.getId()) + '&token=' + token;
    MailApp.sendEmail({
      to: email,
      subject: 'Confirm your booking: ' + resLabel + ', ' + fmt_(start),
      body: 'Hello ' + name + ',\n\nPlease confirm your booking within ' + CONFIG.PENDING_MINUTES + ' minutes:\n' +
        resLabel + '\n' + fmt_(start) + ' – ' + fmt_(end) + '\n\nConfirm: ' + base + '?action=confirm' + q +
        '\nCancel:  ' + base + '?action=cancel' + q + '\n\nUnconfirmed bookings are released automatically.\n' + CONFIG.SITE_URL
    });
    return { ok: true, message: 'Almost done: check your e-mail and click the confirmation link within ' + CONFIG.PENDING_MINUTES + ' minutes.' };
  } finally {
    lock.releaseLock();
  }
}

/* ---------------- confirm / cancel ---------------- */

function findEvent_(calKey, id, token) {
  var r = CONFIG.RESOURCES.filter(function (x) { return x.id === calKey; })[0];
  if (!r || !r.calendarId) return null;
  var ev = CalendarApp.getCalendarById(r.calendarId).getEventById(id);
  if (!ev || !token || ev.getTag('token') !== token) return null;
  return ev;
}

function confirmBooking_(calKey, id, token) {
  var ev = findEvent_(calKey, id, token);
  if (!ev) return 'This booking was not found. It may have expired or been cancelled.';
  if (ev.getTag('status') === 'confirmed') return 'This booking is already confirmed.';
  ev.setTag('status', 'confirmed');
  ev.setTitle(ev.getTitle().replace(/^\[pending\] /, ''));
  if (CONFIG.MANAGER_EMAIL) {
    MailApp.sendEmail(CONFIG.MANAGER_EMAIL, 'Booking confirmed: ' + ev.getTitle(),
      fmt_(ev.getStartTime()) + ' – ' + fmt_(ev.getEndTime()) + '\n\n' + ev.getDescription());
  }
  return 'Booking confirmed: ' + ev.getTitle() + ', ' + fmt_(ev.getStartTime()) + ' – ' + fmt_(ev.getEndTime()) +
    '. Keep the e-mail: its cancel link stays valid.';
}

function cancelBooking_(calKey, id, token) {
  var ev = findEvent_(calKey, id, token);
  if (!ev) return 'This booking was not found. It may already have been cancelled.';
  var t = ev.getTitle();
  ev.deleteEvent();
  return 'Booking cancelled: ' + t + '.';
}

/* ---------------- housekeeping ---------------- */

// Removes unconfirmed bookings older than PENDING_MINUTES. Also runs on a
// time-driven trigger (install with installTrigger()).
function purgePending_(cal) {
  var now = Date.now(), limit = CONFIG.PENDING_MINUTES * 60000;
  cal.getEvents(new Date(now - 864e5), new Date(now + CONFIG.MAX_DAYS_AHEAD * 864e5)).forEach(function (ev) {
    if (ev.getTag('status') === 'pending' && now - Number(ev.getTag('created') || 0) > limit) ev.deleteEvent();
  });
}

function purgeAllPending() {
  CONFIG.RESOURCES.forEach(function (r) {
    if (!r.calendarId) return;
    var cal = CalendarApp.getCalendarById(r.calendarId);
    if (cal) purgePending_(cal);
  });
}

// Run once from the editor to clean up unconfirmed bookings every 15 min.
function installTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'purgeAllPending') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('purgeAllPending').timeBased().everyMinutes(15).create();
}

// Run once from the editor to check that every calendarId is valid.
function checkCalendars() {
  CONFIG.RESOURCES.forEach(function (r) {
    var ok = r.calendarId && CalendarApp.getCalendarById(r.calendarId);
    Logger.log((ok ? 'OK      ' : 'MISSING ') + r.id + ' ' + (r.calendarId || '(no calendarId)'));
  });
}

/* ---------------- helpers ---------------- */

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function page_(text) {
  var html = '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<body style="font-family:sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;line-height:1.5">' +
    '<h2>Lab instrument booking</h2><p>' + escapeHtml_(text) + '</p><p><a href="' + CONFIG.SITE_URL + 'booking/">Back to the booking page</a></p></body>';
  return HtmlService.createHtmlOutput(html).setTitle('Lab instrument booking');
}
function actionPage_(action, cal, id, token) {
  var label = action === 'confirm' ? 'Confirm this booking' : 'Cancel this booking';
  var html = '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<body style="font-family:sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;line-height:1.5">' +
    '<h2>Lab instrument booking</h2>' +
    '<form method="post" target="_top" action="' + ScriptApp.getService().getUrl() + '">' +
    '<input type="hidden" name="action" value="' + escapeHtml_(action) + '">' +
    '<input type="hidden" name="cal" value="' + escapeHtml_(cal || '') + '">' +
    '<input type="hidden" name="id" value="' + escapeHtml_(id || '') + '">' +
    '<input type="hidden" name="token" value="' + escapeHtml_(token || '') + '">' +
    '<button type="submit" style="font-size:1.1rem;padding:.6rem 1.2rem">' + label + '</button></form></body>';
  return HtmlService.createHtmlOutput(html).setTitle('Lab instrument booking');
}
function fail_(code, message) { return { ok: false, error: code, message: message }; }
function clean_(s, n) { return String(s == null ? '' : s).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, n); }
function initials_(name) { return name.split(/\s+/).filter(String).map(function (w) { return w.charAt(0).toUpperCase(); }).join(''); }
function domainOk_(email) {
  var dom = email.split('@')[1] || '';
  return CONFIG.ALLOWED_DOMAINS.some(function (d) { return dom === d || dom.slice(-(d.length + 1)) === '.' + d; });
}
function fmt_(d) { return Utilities.formatDate(d, CONFIG.TIMEZONE, 'EEE d MMM yyyy HH:mm'); }
function escapeHtml_(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
