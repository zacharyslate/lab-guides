/*
 * Instrument booking page.
 * Live mode: talks to the Google Apps Script web app in BOOKING_CONFIG.apiUrl.
 * Demo mode (no apiUrl): stores bookings in this browser's localStorage only.
 */
(function () {
  "use strict";
  var ui = function (k) { return window.ui ? window.ui(k) : k; };
  var CFG = window.BOOKING_CONFIG || { resources: [] };
  var LIVE = !!CFG.apiUrl;
  var DEMO_KEY = "lab-booking-demo-v1";
  var HOURS = 24, ROW_REM = 1.6;

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function ymd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function monday(d) { var x = new Date(d); x.setHours(0, 0, 0, 0); var wd = (x.getDay() + 6) % 7; x.setDate(x.getDate() - wd); return x; }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function localeTag() { var l = window.uiLang ? window.uiLang() : "en"; return { zh: "zh-CN", ja: "ja-JP", ko: "ko-KR" }[l] || l; }

  function demoLoad() { try { return JSON.parse(localStorage.getItem(DEMO_KEY) || "[]"); } catch (e) { return []; } }
  function demoSave(list) { try { localStorage.setItem(DEMO_KEY, JSON.stringify(list)); } catch (e) { /* storage blocked */ } }

  function api(method, params, body) {
    var url = CFG.apiUrl + "?" + Object.keys(params).map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]); }).join("&");
    var opt = { method: method, redirect: "follow" };
    if (body) { opt.body = JSON.stringify(body); opt.headers = { "Content-Type": "text/plain;charset=utf-8" }; }
    return fetch(url, opt).then(function (r) { return r.json(); });
  }

  function init(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";
    var resources = CFG.resources.slice();
    var weekStart = monday(new Date());
    var state = { res: null, ch: 1 };

    root.innerHTML =
      (LIVE ? "" : "<div class='bk-note demo'>" + esc(ui("bkDemo")) + "</div>") +
      "<div class='bk-row'>" +
        "<label>" + esc(ui("bkInstrument")) + "<select id='bk-res'></select></label>" +
        "<label id='bk-chl' hidden>Channel<select id='bk-ch'></select></label>" +
      "</div>" +
      "<div class='bk-note' id='bk-rules' style='background:var(--md-code-bg-color)'></div>" +
      "<div class='bk-nav'><button type='button' id='bk-prev'>" + esc(ui("bkPrevWeek")) + "</button>" +
        "<button type='button' id='bk-today'>" + esc(ui("bkToday")) + "</button>" +
        "<button type='button' id='bk-next'>" + esc(ui("bkNextWeek")) + "</button><span class='wk' id='bk-wk'></span></div>" +
      "<div class='bk-week'><div class='bk-grid' id='bk-grid'></div></div>" +
      "<h3 id='bk-form-h'>" + esc(ui("bkSubmit")) + "</h3>" +
      "<form id='bk-form' autocomplete='on'>" +
        "<div class='bk-row'>" +
          "<label>" + esc(ui("bkDate")) + "<input type='date' id='bk-d1' required></label>" +
          "<label>" + esc(ui("bkStart")) + "<input type='time' id='bk-t1' step='900' required></label>" +
          "<label>" + esc(ui("bkEndDate")) + "<input type='date' id='bk-d2' required></label>" +
          "<label>" + esc(ui("bkEnd")) + "<input type='time' id='bk-t2' step='900' required></label>" +
        "</div><div class='bk-row'>" +
          "<label>" + esc(ui("bkName")) + "<input type='text' id='bk-name' required maxlength='80'></label>" +
          "<label>" + esc(ui("bkEmail")) + "<input type='email' id='bk-email' required maxlength='120'></label>" +
          "<label>" + esc(ui("bkGroup")) + "<input type='text' id='bk-group' required maxlength='80'></label>" +
        "</div><div class='bk-row'>" +
          "<label>" + esc(ui("bkPurpose")) + "<textarea id='bk-purpose' required maxlength='300'></textarea></label>" +
        "</div><div class='bk-row'>" +
          "<label style='flex-direction:row;align-items:center;gap:.4rem'><input type='checkbox' id='bk-trained' style='min-width:0'> " + esc(ui("bkTraining")) + "</label>" +
        "</div><button type='submit' class='primary'>" + esc(ui("bkSubmit")) + "</button>" +
      "</form><div id='bk-msg'></div>";

    var $ = function (id) { return root.querySelector("#" + id); };

    function fillResources() {
      $("bk-res").innerHTML = resources.map(function (r) { return "<option value='" + esc(r.id) + "'>" + esc(r.name) + "</option>"; }).join("");
      var want = (location.hash.match(/res=([\w-]+)/) || [])[1];
      state.res = resources.filter(function (r) { return r.id === want; })[0] || resources[0];
      $("bk-res").value = state.res ? state.res.id : "";
      onResource();
    }
    function resKey() { return state.res.channels ? state.res.id + "-ch" + state.ch : state.res.id; }
    function resLabel() { return state.res.name + (state.res.channels ? " · CH " + state.ch : ""); }

    function onResource() {
      var r = state.res; if (!r) return;
      if (r.channels) {
        $("bk-chl").hidden = false;
        var opts = ""; for (var i = 1; i <= r.channels; i++) opts += "<option value='" + i + "'>CH " + i + "</option>";
        $("bk-ch").innerHTML = opts; state.ch = Math.min(state.ch, r.channels); $("bk-ch").value = String(state.ch);
      } else { $("bk-chl").hidden = true; }
      $("bk-rules").innerHTML = "<strong>" + esc(ui("bkRules")) + ":</strong> " + esc(r.rules || "") +
        (r.maxHours ? " · max " + r.maxHours + " " + esc(ui("bkHours")) : "");
      load();
    }

    function load() {
      var from = weekStart, to = addDays(weekStart, 7);
      var lt = localeTag();
      $("bk-wk").textContent = from.toLocaleDateString(lt, { day: "numeric", month: "short" }) + " – " + addDays(to, -1).toLocaleDateString(lt, { day: "numeric", month: "short", year: "numeric" });
      drawGrid([]);
      if (!LIVE) {
        var key = resKey();
        drawGrid(demoLoad().filter(function (b) { return b.resource === key && new Date(b.end) > from && new Date(b.start) < to; }));
        return;
      }
      msg(ui("bkLoading"), "");
      api("GET", { action: "list", resource: resKey(), from: from.toISOString(), to: to.toISOString() })
        .then(function (res) { msg("", ""); drawGrid(res.events || []); })
        .catch(function () { msg(ui("bkError"), "err"); });
    }

    function drawGrid(events) {
      var g = $("bk-grid"), html = "<div></div>", today = ymd(new Date()), lt = localeTag();
      for (var d = 0; d < 7; d++) {
        var day = addDays(weekStart, d);
        html += "<div class='h" + (ymd(day) === today ? " today" : "") + "'>" + esc(day.toLocaleDateString(lt, { weekday: "short", day: "numeric" })) + "</div>";
      }
      html += "<div>";
      for (var h = 0; h < HOURS; h++) html += "<div class='bk-tl'>" + pad(h) + ":00</div>";
      html += "</div>";
      for (d = 0; d < 7; d++) {
        var ds = addDays(weekStart, d), de = addDays(weekStart, d + 1);
        html += "<div class='bk-col' data-day='" + ymd(ds) + "'>";
        for (h = 0; h < HOURS; h++) html += "<div class='bk-hour' data-h='" + h + "'></div>";
        events.forEach(function (ev) {
          var s = new Date(ev.start), e = new Date(ev.end);
          if (e <= ds || s >= de) return;
          var a = Math.max(s, ds), b = Math.min(e, de);
          var top = (a - ds) / 3600000 * ROW_REM, ht = Math.max(0.6, (b - a) / 3600000 * ROW_REM);
          var t = pad(s.getHours()) + ":" + pad(s.getMinutes()) + "–" + pad(e.getHours()) + ":" + pad(e.getMinutes());
          html += "<div class='bk-ev" + (ev.mine ? " mine" : "") + "' style='top:" + top + "rem;height:" + ht + "rem' title='" + esc(t + " " + (ev.label || "")) + "'>" +
            esc(t) + "<br>" + esc(ev.label || "") +
            (!LIVE && ev.id ? " <a href='#' data-del='" + esc(ev.id) + "' style='color:inherit;text-decoration:underline'>" + esc(ui("bkCancelDemo")) + "</a>" : "") + "</div>";
        });
        html += "</div>";
      }
      g.innerHTML = html;
    }

    function msg(text, kind) { $("bk-msg").innerHTML = text ? "<div class='bk-note " + (kind || "") + "'>" + esc(text) + "</div>" : ""; }

    function submit(ev) {
      ev.preventDefault();
      var s = new Date($("bk-d1").value + "T" + $("bk-t1").value);
      var e = new Date($("bk-d2").value + "T" + $("bk-t2").value);
      var b = {
        action: "book", resource: resKey(), resourceLabel: resLabel(),
        start: s.toISOString(), end: e.toISOString(),
        name: $("bk-name").value.trim(), email: $("bk-email").value.trim().toLowerCase(),
        group: $("bk-group").value.trim(), purpose: $("bk-purpose").value.trim(),
        trained: $("bk-trained").checked, lang: window.uiLang ? window.uiLang() : "en"
      };
      if (isNaN(s) || isNaN(e) || e <= s || !b.name || !b.email || !b.group || !b.purpose) return msg(ui("bkInvalid"), "err");
      if (s < new Date()) return msg(ui("bkPast"), "err");
      if (state.res.maxHours && (e - s) / 3600000 > state.res.maxHours) return msg(ui("bkTooLong") + " " + state.res.maxHours + " " + ui("bkHours"), "err");
      var dom = b.email.split("@")[1] || "";
      if (CFG.allowedDomains && CFG.allowedDomains.length && !CFG.allowedDomains.some(function (d) { return dom === d || dom.slice(-(d.length + 1)) === "." + d; })) return msg(ui("bkDomain"), "err");
      if (!b.trained) return msg(ui("bkNeedTraining"), "err");

      if (!LIVE) {
        var list = demoLoad();
        var clash = list.some(function (x) { return x.resource === b.resource && new Date(x.start) < e && new Date(x.end) > s; });
        if (clash) return msg(ui("bkConflict"), "err");
        list.push({ id: String(Date.now()), resource: b.resource, start: b.start, end: b.end, label: b.name.split(/\s+/).map(function (w) { return w[0]; }).join("") + " · " + b.group, mine: true });
        demoSave(list); msg(ui("bkOkDemo"), "ok");
        weekStart = monday(s); load(); return;
      }
      msg(ui("bkLoading"), "");
      api("POST", { action: "book" }, b).then(function (res) {
        if (res.ok) { msg(res.message || ui("bkOk"), "ok"); weekStart = monday(s); load(); }
        else msg(res.error === "conflict" ? ui("bkConflict") : (res.message || ui("bkError")), "err");
      }).catch(function () { msg(ui("bkError"), "err"); });
    }

    $("bk-res").addEventListener("change", function () { state.res = resources.filter(function (r) { return r.id === $("bk-res").value; })[0]; onResource(); });
    $("bk-ch").addEventListener("change", function () { state.ch = parseInt($("bk-ch").value, 10) || 1; load(); });
    $("bk-prev").addEventListener("click", function () { weekStart = addDays(weekStart, -7); load(); });
    $("bk-next").addEventListener("click", function () { weekStart = addDays(weekStart, 7); load(); });
    $("bk-today").addEventListener("click", function () { weekStart = monday(new Date()); load(); });
    $("bk-form").addEventListener("submit", submit);
    $("bk-grid").addEventListener("click", function (e) {
      var del = e.target.getAttribute && e.target.getAttribute("data-del");
      if (del) { e.preventDefault(); demoSave(demoLoad().filter(function (x) { return x.id !== del; })); load(); return; }
      var cell = e.target.closest && e.target.closest(".bk-hour");
      if (!cell) return;
      var day = cell.parentNode.getAttribute("data-day"), h = parseInt(cell.getAttribute("data-h"), 10);
      $("bk-d1").value = day; $("bk-t1").value = pad(h) + ":00";
      $("bk-d2").value = day; $("bk-t2").value = pad(Math.min(h + 1, 23)) + (h + 1 > 23 ? ":45" : ":00");
      $("bk-form-h").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    var td = new Date(); td.setMinutes(0, 0, 0); td.setHours(td.getHours() + 1);
    $("bk-d1").value = ymd(td); $("bk-t1").value = pad(td.getHours()) + ":00";
    var te = new Date(td.getTime() + 3600000);
    $("bk-d2").value = ymd(te); $("bk-t2").value = pad(te.getHours()) + ":00";

    if (LIVE) {
      api("GET", { action: "config" }).then(function (res) {
        if (res && res.resources && res.resources.length) resources = res.resources;
        fillResources();
      }).catch(function () { fillResources(); msg(ui("bkError"), "err"); });
    } else fillResources();
  }

  function boot() { document.querySelectorAll("#booking-app").forEach(init); }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(boot);
  else if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
