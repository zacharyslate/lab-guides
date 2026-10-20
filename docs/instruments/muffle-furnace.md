---
title: Hobersal muffle furnace
description: Programming a ramp–hold–cool cycle on the Hobersal muffle furnace (Fuji Electric PXF4 programmer, type K thermocouple).
---

# Hobersal muffle furnace (Fuji Electric PXF4 programmer)

<div class="facts" markdown>

| | |
|---|---|
| **What it is for** | Calcination and annealing **in air** (oxides, crucibles, glassware cleaning) |
| **Limits** | Maximum 1200 °C. **Lab working limits: up to 1100 °C for a few hours, 1000 °C for runs of 24 h or more** |
| **Controller** | Fuji Electric PXF4, type K thermocouple; up to 8 ramp/soak segments |
| **Manuals** | [Manuals and references](../manuals.md#furnace) |

</div>

!!! danger "Safety and sample rules"
    - The furnace atmosphere is **air**. Sulfide, halide and other air-sensitive samples must be **sealed** (e.g. in an evacuated quartz ampoule) — never put an open sulfide sample in the furnace.
    - Use heat-resistant gloves, tongs and a face shield to load or unload anything hot. Open the door only below the temperature agreed in the lab rules.
    - Never heat sealed containers beyond what they are rated for, and never heat flammable or toxic-releasing materials.

## Demonstration — example: 850 °C for 30 min, heating 5 °C/min, cooling 2 °C/min

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. **Know the limits.** Maximum 1200 °C; in this lab, no more than 1100 °C (a few hours) or 1000 °C (24 h or more).
2. **Switch the furnace on** with the switch on the right. The display shows **PV** (temperature inside the furnace) and **SV** (set point).
3. **Set SV to 20 °C** with ▲ / ▼. Ramp times are calculated from this starting value.
4. **Open the programme menu.** Hold **SEL** until **CH 1** appears, then press ▼ twice to reach **CH 3** (the ramp/soak programme).
5. **Pattern.** Press SEL: **PtN** must be **0** (if not, press SEL and set it to 0).
6. **Time units.** Press ▼: **tCMU** must read **HHMM** (hours:minutes).
7. **First target temperature.** Press ▼ to **SV-1**, press SEL (the value blinks), set **850** with ◀ ▲ ▼ and press SEL.
8. **Heating time.** Press ▼ to **tM1r** (ramp time). For 5 °C/min from 20 °C to 850 °C: (850 − 20) / 5 = 166 min = **02:46**. Set it and press SEL.
9. **Hold time.** Press ▼ to **tM1S** (soak time) and set **00:30**.
10. **Cooling.** Press ▼ to **SV-2** and set **20**; then **tM2r** = (850 − 20) / 2 = 415 min = **06:55**; then **tM2S** = **00:00**.
11. **Unused segments.** Check that SV-3 … SV-8 are **0** and their times **00:00**, then press the return key (⮌) to leave the menu.
12. **Load the sample** (in its crucible or sealed ampoule) and close the door.
13. **Run.** Press SEL: **StbY** must be **off**. Press ▼ to **ProG**, press SEL and change **off → Run**, press SEL. Return to the main display — it shows **Run** at the bottom left.
14. **Stop.** A finished programme stops by itself; then switch the furnace off. To stop early: hold SEL, ▼ to **ProG**, change **Run → off**, press SEL, and return to the main display.

</div>

## Ramp-time calculator

The PXF4 asks for ramp **times**, not rates. Enter your values:

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>Start (°C)<input type="number" id="rc-a" value="20"></label>
<label>Target (°C)<input type="number" id="rc-b" value="850"></label>
<label>Rate (°C/min)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>Ramp time (HH:MM)<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! note "Programme accuracy"
    The ramp is calculated from SV = 20 °C. If the furnace is still warm when you start, the real heating rate in the first segment will be different from the nominal one. Record the PV at the start of each run.
