---
title: MBraun EasyLab glovebox
description: How to start the MBraun EasyLab glovebox, move material in and out through the antechamber, and leave it safely.
---

# MBraun EasyLab glovebox

<div class="facts" markdown>

| | |
|---|---|
| **What it is for** | Handling air- and moisture-sensitive materials (sulfide electrolytes, Li metal, Li₂S, P₂S₅) under argon |
| **Atmosphere** | Argon, purified by a Cu catalyst and molecular sieve; O₂ and H₂O sensors read 0–1000 ppm and 0–500 ppm |
| **Training** | Required. Pass the glovebox exam before booking |
| **Book it** | [Book an instrument](../booking.md) |
| **Manuals** | [Manuals and references](../manuals.md#glovebox) |

</div>

!!! danger "Before you start"
    - Wear a lab coat, safety glasses and **nitrile gloves over the butyl box gloves** whenever you handle chemicals inside.
    - Never put an open container of solvent into the antechamber under vacuum. Closed solvent bottles need the half-vacuum procedure (step 9).
    - If the O₂ or H₂O reading is high, stop and tell the lab manager. Do not open sensitive materials.

## Control panel { #control-panel }

![The EasyLab control panel in our lab](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| Element | What it does |
|---|---|
| **pressure mbar** (top display) | Box pressure above the room, in mbar. Normally a small overpressure: in ECO mode the box is held at +2 to +6 mbar. During regeneration it still shows the box pressure. |
| **O₂ ppm** and **H₂O ppm** | Oxygen and water in the argon. During regeneration they show the stage and the minutes left instead. |
| **Min.set** / **Max.set** knobs | Lower and upper limits of the box-pressure control. **Do not change them.** |
| **circ** | Circulation of argon through the purifier. Must **always be on (LED lit)**, except during regeneration. If the LED is dark, check that the circulation pistons are UP and tell the lab manager. |
| **reg** / **reg abort** | Start / stop catalyst regeneration (reg abort only works in the first stages). Lab manager only. |
| **pump** | Vacuum pump. Must be on to evacuate the antechamber. |
| **ana** | O₂ and H₂O analysers. Leave on. |
| **light** | Box lighting. |
| **purge** | Flushes the box with argon to lower O₂/H₂O. Only when the lab manager asks. |
| **eco** | Standby: the pump runs only when the box needs argon, the light switches off, pressure +2 to +6 mbar. Leave the box in ECO after use. |

!!! tip "What a normal working state looks like"
    Pressure a few mbar (here 2.7), O₂ and H₂O below 1 ppm (here 0.5), and the **circ**, **pump**, **ana** and **light** LEDs on. In this photo the **circ** LED is dark: if you see that, check the circulation pistons and tell the lab manager.

## Demonstration

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. **Check the box as you find it.** It should be in **ECO** mode, with both antechamber doors closed, the antechamber under full vacuum (gauge ≈ −94 kPa) and every valve closed. Read the O₂ and H₂O values on the sensor display.
2. **Wake the box up.** Press **ECO** once to leave ECO mode and **PUMP** once. You can switch the **LIGHT** on or off at any time.
3. **Check circulation.** Argon must always circulate through the catalyst (except during regeneration): the **CIRC** LED must be on. Also check the pistons of the magnetic circulation valves on top of the catalyst: they must be **UP**. If the LED is off or the pistons are down, tell the lab manager before you open any sensitive material.
4. **Bring the antechamber to argon.** Slowly open the **argon (refill) valve**, which connects the antechamber to the main chamber. Watch the gauge rise from −94 kPa to 0 kPa, then close the valve.
5. **Load your items.** Open the **outer door**, put your items in the antechamber and close the outer door. Leave containers of liquid closed; powders and solids can be open or loosely capped.
6. **Evacuate (cycle 1).** Check both doors and the argon valve are closed. Slowly open the **vacuum valve** until the gauge reads −94 kPa, keep it under vacuum for **15 min**, then close the valve.
7. **Refill with argon.** Slowly open the argon valve until the gauge returns to 0 kPa, then close it.
8. **Repeat** the evacuate–hold–refill cycle until you have done **3 cycles** in total. Porous or bulky items (fibres, paper, foams) are better left under vacuum overnight, followed by a full cycle.
9. **Special case — sealed solvent bottles.** A closed bottle can burst under full vacuum. Evacuate only to **half vacuum** (≈ −47 kPa), wait several minutes, refill, and repeat **at least 10 times**.
10. **Move the items in.** After the last refill (gauge at 0 kPa, both valves closed), put your hands into the gloves, open the **inner door**, bring the items into the main chamber and close the inner door.
11. **Work comfortably.** The box controls its own pressure. If the gloves feel too tight or too loose, use the **foot pedals** to raise (+) or lower (−) the chamber pressure.
12. **Finish your session.** Clean up spills, wipe the gloves with **ethanol only**, close the inner and outer doors and evacuate the antechamber with the vacuum valve open for **at least 5 min**.
13. **Leave it as you found it.** Close the vacuum valve (gauge stays at ≈ −94 kPa), check every valve is closed, press **ECO** once and confirm the circulation pistons are **UP**.

</div>

## Taking material out

1. If the antechamber is under vacuum, refill it slowly with argon to 0 kPa and close the argon valve.
2. Open the inner door, put the items in, close the inner door.
3. Open the outer door, take the items out, close the outer door.
4. Evacuate the antechamber, purge it once with argon, then evacuate it again and leave it under vacuum with all valves closed.

## Things that damage the box

!!! warning "Catalyst poisons"
    The copper catalyst is **irreversibly poisoned by sulfur compounds and acids**, and the molecular sieve also adsorbs H₂S and solvent vapours once the activated-carbon filter is saturated (lab guide *Guía MBraun EasyLab*, rev. 07-2022). Sulfide electrolytes (Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄) release H₂S with traces of moisture. Keep sulfide containers closed when not in use, never leave sulfide powders open overnight, and record which chemicals you use in the box so a loss of O₂ capacity can be traced.

!!! note "Solvents"
    Volatile solvents (ethanol, acetonitrile, THF…) load the activated-carbon filter and can drift the sensors. Use the smallest volume you can and keep bottles capped. Ask the lab manager whether circulation should be paused while you work with open solvents — the lab procedures do not currently say.

## Regeneration and sensors (lab manager only)

Catalyst/sieve regeneration (16 stages, about 960 min, Ar/H₂ forming gas at ~15 L/min) and H₂O-sensor maintenance (re-coating with 85 % H₃PO₄ every ~2000 h) are done only by the lab manager, following the lab guide.

!!! question "To confirm with the lab manager"
    The two lab documents disagree on the antechamber cycle. The English start-up slides say *"a full vacuum for at least 5 min before releasing the pressure"*; the Spanish lab guide says **3 cycles of vacuum with a 15 min hold** (or 45 min in "active" mode). This guide uses the stricter 3 × 15 min cycle. Please confirm which one is the lab rule.

## Manuals

- Lab guide: *Guía MBraun EasyLab* (Spanish, rev. 07-2022) — lab copy.
- Lab slides: *MBraun EasyLab Glovebox — Operation start guide* — lab copy.
- Manufacturer: [MBraun EASYlab product page](https://shop.mbraun.de/ENU/28934/EASYlab.html).
