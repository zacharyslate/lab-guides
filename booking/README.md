# Booking backend — setup (Google Calendar + Apps Script)

The website is static (GitHub Pages), so bookings are stored in **Google Calendars** owned by a lab Google account, through a small **Google Apps Script** web app (`apps-script/Code.gs`). The booking page talks to it; until it is connected the page runs in **demo mode** (bookings saved only in the visitor's browser).

## What it does

- One calendar per instrument (cyclers and potentiostat: one calendar per unit; each channel is tagged on the event).
- Checks overlaps **under a lock**, so two people cannot book the same slot at the same moment.
- Booking rules: institutional e-mail domain, training checkbox, no past bookings, no overlaps, 15-minute grid, max 90 days ahead (optional `maxHours` per instrument).
- **No e-mail confirmation** (lab decision, 2026-10-19): a booking is final as soon as it is saved. The page keeps a private cancel token in the booker's browser, so the same browser can cancel it; the lab manager can delete any event directly in Google Calendar. Trade-off: nothing proves the e-mail address belongs to the person who typed it.
- If `MANAGER_EMAIL` is set, the lab manager gets an e-mail for each new booking.
- The public calendar shows initials and group only.

## Set-up (about 30 minutes)

1. **Use a lab account**, not a personal one (e.g. a shared lab Google account). It will own the calendars and send the e-mails.
2. **Create the script**: go to <https://script.google.com> ▸ *New project*. Paste `Code.gs`. In *Project settings* tick *Show "appsscript.json"* and paste `appsscript.json`.
3. **Edit `CONFIG`** at the top of `Code.gs`: set `ALLOWED_DOMAINS`, `MANAGER_EMAIL`, and the `rules` and number of `channels` for each instrument. There is no time limit per booking unless you add `maxHours: N` to an instrument.
4. **Create the calendars**: select the function `setupCalendars` and press *Run*. Authorise when asked (Calendar, send e-mail, triggers). It creates one calendar per instrument, named "Lab booking · …", and remembers their IDs. To use calendars you already have, paste their IDs into `calendarId` instead.
5. **E-mail permission** (only needed if you set `MANAGER_EMAIL`): run `authorizeEmail` and tick *Send email as you* on Google's consent screen.
6. **Check**: run `checkCalendars`. The log must show `OK` for every instrument.
7. **Install the clean-up trigger**: run `installTrigger` once.
8. **Deploy**: *Deploy ▸ New deployment ▸ Web app*. *Execute as*: **Me**. *Who has access*: **Anyone** (or *Anyone within your organisation* if the institute uses Google Workspace — then only colleagues signed in with the institute account can open it). Copy the **Web app URL** (ends in `/exec`).
9. **Connect the website**: put the URL in `docs/assets/js/booking-config.js` → `apiUrl: "https://script.google.com/macros/s/…/exec"`, and copy the same `resources` rules there (used only in demo mode). Commit and push.
10. **Test**: make a booking, check it appears in Google Calendar and on the site, then cancel it from the list under the form.

When you change `Code.gs` later, use *Deploy ▸ Manage deployments ▸ Edit ▸ New version* so the URL stays the same.

## Limits to know

- **E-mail quota**: Apps Script can send a limited number of e-mails per day (lower for free Gmail accounts than for Google Workspace accounts). Bookings send no e-mail unless `MANAGER_EMAIL` is set (then one per booking). Check the current quota at <https://developers.google.com/apps-script/guides/services/quotas>.
- **The domain check is not authentication.** It only filters typos and outsiders: anyone can type a colleague's address. Without e-mail confirmation, abuse has to be handled by the lab manager in Google Calendar. For stronger control, restrict the web app to your Workspace domain (step 8).
- **Response time**: each request takes about 1–3 s because Apps Script starts on demand.
- **Lab rules** (no-show policy, maximum durations, who may book overnight) are lab decisions: the values in the files are only placeholders.
