---
title: Neware battery cyclers
description: Choosing the right Neware cycler and current range for a cell, writing a step file in BTS, starting a channel and exporting data.
---

# Neware battery cyclers (CT-4008, CT-4008T, CT-5008, CT-9008)

## Which cycler for which cell?

The cycler must be able to **set and measure** your current accurately. Accuracy is quoted as a percentage of the **full scale of the range**, so a small current on a large range is inaccurate.

| Unit | Voltage | Current ranges | Accuracy (current) | Good for |
|---|---|---|---|---|
| **CT-9008-5V6A-F** | −5 to +5 V | 0.1–180 µA · 180 µA–6 mA · 6–180 mA · 0.18–6 A | ±36 nA · ±1.2 µA · ±36 µA · ±1.2 mA | **Solid-state micro cells, coin cells at low C-rate** |
| CT-5008-5V12A-TF | −3 to +5 V | 0.12–120 mA · 0.12–1.2 A · 1.2–12 A | ±0.02 % FS (±24 µA on the lowest range) | Coin and pouch cells from ~1 mA upwards |
| CT-4008Q-5V12A-S1 | 25 mV–5 V (min. discharge 2 V with the universal holder) | 0.2–100 mA · 0.1–0.5 A · 0.5–6 A · 6–12 A | ±0.02 % FS | Larger cells; **not** for cells discharged below 2 V |
| CT-4008T-5V12A-S1-F | −1 to 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0.05 % FS | Cells needing ≥ 5 mA |

<small>From the Neware specification sheets in the lab files. FS = full scale.</small>

### Choosing the current

1. Estimate the capacity: *Q* (mAh) = active mass (g) × expected specific capacity (mAh g⁻¹).
2. Current for a C-rate *n*: *I* = *n* × *Q* (mA for *Q* in mAh).
3. Pick the unit and range whose lowest range **contains** *I* with an error you can accept (aim for < 1 % of *I*).

*Example:* the [solid-state test battery](../cells/solid-state-battery.md) holds ≈ 0.57 mAh → 0.1 C ≈ 57 µA → **CT-9008, range 1** (error ±36 nA ≈ 0.06 %). On a CT-4008/5008 the same current is below the lowest range and the accuracy (±20–24 µA) is about 40 % of the current.

## Our set-up { #our-set-up }

<div class="photo-grid" markdown>

<figure markdown>
![Neware cyclers below the potentiostat. The channel numbers are printed on the front of each unit. The units have different current ranges (table above), so check the model label on the unit before you start a channel.](../assets/img/rack-neware.jpg){ loading=lazy }
<figcaption>Neware cyclers below the potentiostat. The channel numbers are printed on the front of each unit. The units have different current ranges (table above), so check the model label on the unit before you start a channel.</figcaption>
</figure>

<figure markdown>
![The instrument rack: the PARSTAT MC potentiostat at the top, the Neware battery cyclers below. Cell leads hang on both sides of the rack.](../assets/img/rack-overview.jpg){ loading=lazy }
<figcaption>The instrument rack: the PARSTAT MC potentiostat at the top, the Neware battery cyclers below. Cell leads hang on both sides of the rack.</figcaption>
</figure>

</div>

## Demonstration — BTS software

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. **Pick the unit** in the device list (here the CT-9008 for a micro cell) and find a free channel. Book the channel first on the [booking page](../booking.md).
2. **Connect the cell** to the channel (4-wire Kelvin clips: both red to the positive electrode, both black to the negative). The channel tile shows the open-circuit voltage; wait until it is stable.
3. **Right-click the channel ▸ Single start.**
4. **Write or load the step file.** Typical: *Rest* (OCV) → *CC charge* (current, upper cut-off voltage) → *Rest* → *CC discharge* (current, lower cut-off voltage) → *Cycle* back to step 2, *N* times → *End*. Set **protection limits** (upper and lower voltage) slightly outside your cut-offs. Step names differ slightly between BTS versions (e.g. CC_Chg / CCC, CC_DChg / CCD).
5. **Fill in the test information**: a unique name/barcode (your initials, cell type, date, number), the **active mass** so capacities are reported in mAh g⁻¹, and the step file. Press **Start**.
6. **Check it started**: the tile turns to *working* and shows the step, voltage and current. Check the first minutes — a wrong sign or a voltage at the limit means a wiring or step error.
7. **View data**: right-click ▸ View data opens **BTSDA**, where you plot V vs t, capacity vs cycle, and **export to Excel**.
8. **Finish**: the test ends at *End*, or right-click ▸ **Single stop**. Disconnect the cell and release your booking.

</div>

!!! warning "Before you start a channel"
    - Never start a channel that someone else has booked or that shows *working* / *pause*.
    - Enter voltages in BTS **versus your counter electrode**. With a Li–In anode, subtract ≈ 0.6 V from limits quoted versus Li⁺/Li.
    - Solid-state cells need stack pressure throughout the test — do not loosen the cell between steps.
