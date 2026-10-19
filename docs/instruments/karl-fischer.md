---
title: Mettler Toledo C20S Karl Fischer coulometer
description: Measuring water content of solvents with the Mettler Toledo C20S coulometric Karl Fischer titrator, including a check with a 1 % water standard.
---

# Mettler Toledo C20S coulometric Karl Fischer titrator

<div class="facts" markdown>

| | |
|---|---|
| **What it is for** | Trace water in liquids — e.g. checking that ethanol, acetonitrile or THF are dry enough for liquid-phase electrolyte synthesis |
| **Principle** | Iodine is generated electrochemically at the generator electrode and reacts with water; the charge needed gives the water mass |
| **Cell** | Generator electrode (with or without diaphragm, **blue plug**), double-platinum indicator electrode, drying tube, septum, magnetic stirrer |
| **Training** | Required |
| **Manuals** | [Manuals and references](../manuals.md#karl-fischer) |

</div>

!!! danger "Safety"
    KF reagents contain methanol or other alcohols, iodine, SO₂ and a base: toxic and flammable. Wear gloves and glasses, fill and empty the cell in a fume hood, and dispose of spent reagent in the waste container the lab specifies for KF reagent.

## Demonstration

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. **Check the cell.** The cell is filled with reagent, both electrodes are connected (generator = **blue plug**), the drying tube contains fresh desiccant and every stopper and joint is firmly seated — leaks let room moisture in.
2. **Switch the titrator on.**
3. **Prepare the method (first time only).** Methods ▸ New ▸ Standard method template ▸ **KF Coul** ▸ Sample: set *Entry type* to **Weight** ▸ OK ▸ Save. On the Start screen tap **AddToHome** to make a shortcut (tick *Immediate start*).
4. **Pretitration.** Tap your shortcut. The titrator removes the water already in the reagent; the stirrer must be running. Wait while the drift decreases.
5. **Standby.** When the drift is low and stable the titrator switches to **Standby** and **Start sample** becomes active.
6. **Prepare the sample syringe.** Fill a syringe with the sample (or with the **1 % KF water standard** to check the system), put it on the balance and **tare**.
7. **Inject.** Tap **Start sample**, push the needle through the septum so the tip is under the reagent surface — not touching the electrodes — and inject (0.5–1.0 mL of the 1 % standard).
8. **Back-weigh.** Put the syringe back on the balance and enter the **sample mass** shown (the negative value without the sign). The titration runs.
9. **Read the result** (R1, water content). The 1 % standard should give ≈ 10 mg g⁻¹ within its certificate tolerance; if not, check the reagent and the drift before measuring samples.
10. **Stop.** Tap **Stop analysis** to stop the current analysis, or **More ▸ End series** to end the series.

</div>

## Good practice

- Measure the **standard first** each day, then your samples. Measure each sample at least in triplicate.
- Rinse the syringe with the sample before filling it; use a dry, closed syringe.
- Replace the reagent when the drift stays high, the result of the standard drifts, or the cell is getting full.
- Generator electrode care: empty, rinse with methanol, wipe with a lint-free cloth and dry for several hours at 70–80 °C (manual §7).

!!! warning "Do not inject sulfide samples"
    Sulfides, H₂S and thiols react with iodine and give **falsely high** water values; they also consume the reagent. Use this titrator for **solvents and liquids**. Water in sulfide electrolyte powders cannot be measured by direct injection — discuss alternatives with the lab manager.
