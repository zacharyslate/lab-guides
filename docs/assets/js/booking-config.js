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
 * maxHours values are PLACEHOLDERS: the lab manager must set the real rules.
 */
window.BOOKING_CONFIG = {
  apiUrl: "",
  allowedDomains: ["csic.es", "uam.es", "estudiante.uam.es"],
  slotMinutes: 15,
  resources: [
    { id: "glovebox", name: "MBraun EasyLab glovebox", maxHours: 4, rules: "Max 4 h per booking during working hours. Leave the antechamber under vacuum and the box in ECO mode." },
    { id: "rotavapor", name: "Büchi Rotavapor R-210", maxHours: 6, rules: "Book the glovebox too if you need to load or unload an air-sensitive flask." },
    { id: "pmc", name: "PARSTAT MC · PMC-2000", channels: 2, maxHours: 72, rules: "Book one channel. Temperature series: include the 45 min equilibration at each step." },
    { id: "ct9008", name: "Neware CT-9008 (µA cells)", channels: 8, maxHours: 720, rules: "Book one channel per cell for the full test length. Micro solid-state cells only." },
    { id: "ct5008", name: "Neware CT-5008", channels: 8, maxHours: 720, rules: "Book one channel per cell for the full test length." },
    { id: "ct4008", name: "Neware CT-4008Q", channels: 8, maxHours: 720, rules: "Book one channel per cell. Not for cells discharged below 2 V." },
    { id: "ct4008t", name: "Neware CT-4008T", channels: 8, maxHours: 720, rules: "Book one channel per cell. Minimum current 5 mA." },
    { id: "monowave", name: "Anton Paar Monowave 400 R", maxHours: 12, rules: "Include cooling time. Book the Cora 5001 as well for in-situ Raman." },
    { id: "cora", name: "Anton Paar Cora 5001", maxHours: 8, rules: "Laser-safety briefing required." },
    { id: "ballmill", name: "Fritsch Pulverisette 7", maxHours: 72, rules: "Book the whole program including pauses." },
    { id: "kf", name: "Mettler Toledo C20S Karl Fischer", maxHours: 3, rules: "Measure the 1 % water standard first." },
    { id: "furnace", name: "Hobersal muffle furnace", maxHours: 72, rules: "Book the whole program including cooling. Lab limit 1100 °C (h) / 1000 °C (≥ 24 h)." },
    { id: "oven", name: "Argolab drying oven", maxHours: 72, rules: "Shared oven: label your items. No solvents." }
  ]
};
