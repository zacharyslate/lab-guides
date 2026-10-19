# Booking backend — setup (Google Calendar + Apps Script)

The website is static (GitHub Pages), so bookings are stored in **Google Calendars** owned by a lab Google account, through a small **Google Apps Script** web app (`apps-script/Code.gs`). The booking page talks to it; until it is connected the page runs in **demo mode** (bookings saved only in the visitor's browser).

## What it does

- One calendar per instrument (cyclers and potentiostat: one calendar per unit; each channel is tagged on the event).
- Checks overlaps **under a lock**, so two people cannot book the same slot at the same moment.
- Booking rules: institutional e-mail domain, training checkbox, no past bookings, max duration per instrument, 15-minute grid, max 90 days ahead.
- **E-mail confirmation**: a booking stays *pending* for 30 min and is deleted if not confirmed. This proves the person owns the e-mail address; without it anyone could book in someone else's name.
- Confirm/cancel links open a page with a button; the change only happens when the button is pressed, so e-mail security scanners that pre-open links cannot confirm or cancel bookings.
- The public calendar shows initials and group only.

## Set-up (about 30 minutes)

1. **Use a lab account**, not a personal one (e.g. a shared lab Google account). It will own the calendars and send the e-mails.
2. **Create the calendars** in Google Calendar ▸ *Other calendars* ▸ *+* ▸ *Create new calendar*: one for each entry in `CONFIG.RESOURCES` (e.g. "Glovebox", "Rotavapor", "PMC-2000", "CT-9008", …). For each, copy **Settings ▸ Integrate calendar ▸ Calendar ID**.
3. **Create the script**: go to <https://script.google.com> ▸ *New project*. Paste `Code.gs`. In *Project settings* tick *Show "appsscript.json"* and paste `appsscript.json`.
4. **Edit `CONFIG`** at the top of `Code.gs`:
    - paste each `calendarId`;
    - set `ALLOWED_DOMAINS`, `MANAGER_EMAIL`, `SITE_URL`;
    - set the real `maxHours` and `rules` for each instrument and the real number of `channels` (the values in the file are **placeholders**).
5. **Check**: select the function `checkCalendars` and press *Run*. Authorise when asked. The log must show `OK` for every instrument.
6. **Install the clean-up trigger**: run `installTrigger` once.
7. **Deploy**: *Deploy ▸ New deployment ▸ Web app*. *Execute as*: **Me**. *Who has access*: **Anyone** (or *Anyone within your organisation* if the institute uses Google Workspace — then only colleagues signed in with the institute account can open it). Copy the **Web app URL** (ends in `/exec`).
8. **Connect the website**: put the URL in `docs/assets/js/booking-config.js` → `apiUrl: "https://script.google.com/macros/s/…/exec"`, and copy the same `resources` rules there (used only in demo mode). Commit and push.
9. **Test**: make a booking, confirm it from the e-mail, check it appears in Google Calendar and on the site, then cancel it.

When you change `Code.gs` later, use *Deploy ▸ Manage deployments ▸ Edit ▸ New version* so the URL stays the same.

## Limits to know

- **E-mail quota**: Apps Script can send a limited number of e-mails per day (lower for free Gmail accounts than for Google Workspace accounts). Each booking sends one e-mail (two if `MANAGER_EMAIL` is set). Check the current quota at <https://developers.google.com/apps-script/guides/services/quotas>.
- **The domain check is not authentication.** It only filters typos and outsiders; the e-mail confirmation is what ties a booking to a real mailbox. For stronger control, restrict the web app to your Workspace domain (step 7).
- **Response time**: each request takes about 1–3 s because Apps Script starts on demand.
- **Lab rules** (no-show policy, maximum durations, who may book overnight) are lab decisions: the values in the files are only placeholders.
