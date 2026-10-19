---
title: PARSTAT MC · PMC-2000 with VersaStudio
description: Selecting a channel, setting up a potentiostatic EIS experiment, running it and exporting calibrated data in VersaStudio on the PARSTAT MC PMC-2000.
---

# PARSTAT MC · PMC-2000 with VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| **What it is for** | EIS, DC polarisation (electronic conductivity), CV, battery cycling at small currents |
| **PMC-2000 channel** | ±30 V compliance, ±1 A, EIS **10 µHz – 7 MHz**, lowest current range 4 nA, differential electrometers ≥ 10 MHz |
| **Software** | VersaStudio (Windows) — data files `.par` (+ `.par.psbd` when binary saving is on) |
| **Cell** | [AC impedance cell](../cells/eis-cell.md) — watch its demonstration for the hardware side |
| **Manuals** | [Manuals and references](../manuals.md#potentiostat) |

</div>

## Cell-lead colours (PMC-2000 cable)

| Colour | Lead | Two-terminal cell (EIS cell, battery) |
|---|---|---|
| Green | WE — working | together with grey to **one** electrode |
| Grey | SE — sense | with green |
| Red | CE — counter | together with white to the **other** electrode |
| White | RE — reference | with red |
| Yellow / blue | E2+ / E2− (6th wire) | not used |
| Black | GND | not used — keep it from touching other leads |

For **low-impedance cells or currents above 100 mA**, connect each lead to the terminal separately instead of plugging one lead into the other ("piggy-back"), to avoid voltage offsets from contact resistance (PMC-2000 manual §3).

## Demonstration — software

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. **Start up.** The PARSTAT MC should be on for at least 10 min before any calibration. Open **VersaStudio** (Start ▸ VersaStudio). With several channels, it opens with **No Instrument** selected.
2. **Select your channel.** Tools ▸ **Select Instrument** and double-click your channel. Right-click ▸ *Locate Instrument* flashes the channel's LED so you can check it is the one wired to your cell. Channels tagged **DATA** are in use by someone else — do not select them.
3. **Checkout (when in doubt).** Experiment ▸ Load Setup ▸ *Impedance Checkout* runs on the **internal 1 kΩ dummy cell**. All points should be 1000 Ω ± 20 Ω.
4. **New experiment.** Experiment ▸ **New** ▸ *Select an Action* ▸ Impedance ▸ **Potentiostatic EIS** ▸ OK, and give the data file a name.
5. **Enter the parameters** in *Experiment Properties* (values for the EIS cell are on the [EIS cell page](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)). Press **Enter** after every value — a value that is typed but not confirmed is not stored. Add the sample name, pellet thickness and area as comments in *Common*.
6. **Advanced properties.** *Cell to Use* = **External**, current range, electrometer mode (single-ended for a two-terminal cell; differential for four-terminal cells), *Leave Cell On* = No.
7. **Filters.** Tools ▸ Options ▸ Instrument: **Notch filter = None** for EIS (required). Leave *EIS filters* at Normal unless you know why to change them.
8. **Save before you run.** Experiment ▸ Save, so data are written to disk while the experiment runs.
9. **Run** (▶). The Nyquist plot builds up. **■** stops; **⏭** skips to the next segment.
10. **Export calibrated data.** Data ▸ Export To ▸ **ZView (.z)** for EIS actions, or Graph View ▸ *Copy Data as Text*. **Do not analyse the raw EIS columns of the `.par` file** — VersaStudio stores them uncalibrated (software manual, Appendix 3).
11. **Release the channel.** Close your experiment and go back to *No Instrument* so the next user can select the channel. Leave the cell leads tidy.

</div>

## Running DC experiments on batteries

- Set the current range to **2 A first** (or use the *Auto Current Range Setup* action starting at 2 A) for batteries and other energy-storage cells. Starting on a sensitive range with "Auto" can overload and damage it (software manual, Current Range caution).
- **Leave Cell On** is dangerous between a potentiostatic and a galvanostatic action, between an EIS and a DC action, or between galvanostatic actions on different current ranges: the switch can send current spikes into your cell.
- Set voltage and current **safety limits** in *Common* — they stop the whole sequence if exceeded.

## Software setup notes (lab computer)

- Windows power plan: never sleep, power button does nothing, fast start-up off — otherwise long experiments can lose data (software manual §3.3).
- After a software update VersaStudio may ask to update the firmware: let it finish without interruption, then run *Calibrate for best DC accuracy* on every channel.
