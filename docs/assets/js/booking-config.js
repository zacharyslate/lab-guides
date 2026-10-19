/*
 * Booking configuration.
 *
 * apiUrl: the Web-app URL of the Google Apps Script in /booking/apps-script
 *         (ends in /exec). Leave empty to run the page in DEMO mode, where
 *         bookings are stored only in the visitor's own browser.
 *
 * When apiUrl is set, the list of instruments and their rules is loaded from
 * the script (the script is the single source of truth). The list below is
 * used only in demo mode — keep it in step with CONFIG.RESOURCES in Code.gs.
 *
 * maxHours (optional): limits one booking to N hours; leave it out for no limit.
 */
window.BOOKING_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbz5LXzAuJrNgAk19J012gC4QdQisWbTEF7ke5mLAC9pWh4Opf3L1EnZweuJwLaqk-0CoQ/exec",
  allowedDomains: ["csic.es", "uam.es", "estudiante.uam.es"],
  slotMinutes: 15,
  resources: [
    { id: "glovebox", name: "MBraun EasyLab glovebox", rules: "Leave the antechamber under vacuum and the box in ECO mode." },
    { id: "rotavapor", name: "Büchi Rotavapor R-210", rules: "Book the glovebox too if you need to load or unload an air-sensitive flask." },
    { id: "pmc", name: "PARSTAT MC · PMC-2000", channels: 2, rules: "Book one channel. Temperature series: include the 45 min equilibration at each step." },
    { id: "ct9008", name: "Neware CT-9008 (µA cells)", channels: 8, rules: "Book one channel per cell for the full test length. Micro solid-state cells only." },
    { id: "ct5008", name: "Neware CT-5008", channels: 8, rules: "Book one channel per cell for the full test length." },
    { id: "ct4008", name: "Neware CT-4008Q", channels: 8, rules: "Book one channel per cell. Not for cells discharged below 2 V." },
    { id: "ct4008t", name: "Neware CT-4008T", channels: 8, rules: "Book one channel per cell. Minimum current 5 mA." },
    { id: "monowave", name: "Anton Paar Monowave 400 R", rules: "Include cooling time. Book the Cora 5001 as well for in-situ Raman." },
    { id: "cora", name: "Anton Paar Cora 5001", rules: "Laser-safety briefing required." },
    { id: "ballmill", name: "Fritsch Pulverisette 7", rules: "Book the whole program including pauses." },
    { id: "kf", name: "Mettler Toledo C20S Karl Fischer", rules: "Measure the 1 % water standard first." },
    { id: "furnace", name: "Hobersal muffle furnace", rules: "Book the whole program including cooling. Lab limit 1100 °C (h) / 1000 °C (≥ 24 h)." },
    { id: "oven", name: "Argolab drying oven", rules: "Shared oven: label your items. No solvents." }
  ]
};
