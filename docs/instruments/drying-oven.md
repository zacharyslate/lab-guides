---
title: Argolab drying oven
description: Using the Argolab (Giorgio Bormac) TCN/TCF Plus drying oven — PROG 0 for a simple set-point, multi-step programs, and what may and may not go inside.
---

# Argolab drying oven (TCN / TCF Plus series)

<div class="facts" markdown>

| | |
|---|---|
| **What it is for** | Drying glassware, tools and air-stable powders; drying cell parts before they go into the glovebox antechamber |
| **Range** | Up to +300 °C (TCN-50/115/200 and TCF Plus models; TCN-30 Plus: +200 °C). Check the model plate on the lab's oven |
| **Controller** | Microprocessor: up to 7 programs × 10 steps (temperature, time, fan speed on forced-air models) plus **PROG 0**, a single-step program |
| **Manual** | *Ovens and Incubators — User manual* (Giorgio Bormac, rev. 0, 31.05.2021) — [Manuals](../manuals.md#oven) |

</div>

!!! danger "What must never go in the oven"
    - **Flammable solvents** or anything wet with them, explosive materials, or air/solvent mixtures (fire and explosion risk).
    - Materials that release **toxic or flammable gases** when heated or decomposed — this includes **sulfide electrolytes** (H₂S).
    - Do not put anything under the oven, do not cover the vents, and do not touch the air intake at the back while it runs (hot).

## Demonstration

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. **Check what you are drying.** Only glassware, tools and air-stable, non-flammable materials (see the box above).
2. **Switch on** with the ON/OFF key. If the oven beeps and shows **end**, the previous user's cycle finished before it was switched off; press any key to silence it.
3. **Recall a program.** In standby, press **SET/PROG** briefly: "PROG" and its number flash. Choose the program with ▲ / ▼ and confirm with SET/PROG.
4. **Simple set-point (PROG 0).** Select PROG 0 and **hold SET/PROG** until only the number flashes, then press SET/PROG again to edit. Set the temperature with ▲ / ▼ and **SHIFT** (moves between digits), confirm, then set the timer. **Timer 00:00 = run until you press START/STOP.**
5. **Multi-step programs (1–7).** Each step has a temperature, a time and — on forced-air ovens — a fan speed (H/M/L). To finish after step *n*, set the time of step *n* + 1 to **00:00**.
6. **Load** your items on the shelves, leaving space for air to circulate, and close the door.
7. **Start** with **START/STOP**. The display shows the chamber temperature.
8. **Stop** with **START/STOP** when you are done. Use heat-resistant gloves to remove hot items, and switch the oven off if nobody else is using it.

</div>

!!! note "Glassware for the glovebox"
    Items dried here pick up moisture again within minutes in room air. Take them from the oven straight into the glovebox antechamber while still warm, and cycle the antechamber as described in the [glovebox guide](glovebox.md).

!!! info "Password-protected settings"
    Delay start, program repetition, sample-protection temperature limit, over-temperature alarm and temperature offsets are in a password-protected submenu. Only the lab manager changes these.
