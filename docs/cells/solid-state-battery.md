---
title: Solid-state test battery
description: Building a laboratory all-solid-state micro test battery (bilayer cathode/electrolyte pellet with an indium or Li–In anode) and cycling it on the Neware CT-9008.
---

# Solid-state test battery

A micro test battery in the same polycarbonate cell used for [EIS](eis-cell.md): a **bilayer pellet** (solid electrolyte + composite cathode) with a metal anode on the other side. Steps 1–11 are done in the **glovebox**.

<div class="facts" markdown>

| | |
|---|---|
| **Electrolyte layer** | 100 mg in the Ø 10 mm die |
| **Cathode layer** | 10 mg composite cathode (e.g. from the [cathode procedure](../procedures/cathode-composite.md)) |
| **Anode** | Li foil Ø 6.0 mm × 0.25 mm (polished) and In foil Ø 8.0 mm × 0.3 mm. **Lithiated cathodes (e.g. NMC): no Li — In foil Ø 8.0 mm × 0.1 mm only** |
| **Cycler** | [Neware CT-9008 (5 V, 6 mA)](../instruments/battery-cyclers.md) — the only cycler in the lab with current ranges low enough for this cell |

</div>

## Demonstration

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tare the die.** Put the small pressing arm into the bottom of the Ø 10 mm die and tare (zero) it on the balance.
2. **Add 100 mg of electrolyte** and record the exact mass.
3. **Press the electrolyte layer.** Insert the long arm and press at **4 MPa (gauge) for 1 min**.
4. **Add the cathode.** Remove the long arm by hand and spread **10 mg of composite cathode** evenly over the whole electrolyte surface. Record the mass (tare the die with the pellet first).
5. **Press the bilayer.** Put the long arm back and press again at **4 MPa (gauge) for 1 min**.
6. **Release the bilayer pellet** by inverting the die on the steel saddle and pushing the die off the arms in the press.
7. **Load and densify.** Put the bilayer pellet into the polycarbonate cell with the **long current collector in the bottom** and a silicone gasket on each collector. Centre the cell in the press and apply **18 MPa (gauge) slowly, for 3 min**.
8. **Expose the electrolyte.** Remove the small current collector. The **electrolyte side** of the bilayer must face up (the cathode side sits on the long collector).
9. **Prepare the anode.** Attach the anode metal to the small current collector (sizes in the table above).
10. **Add the anode.** Invert the cell body, slide it onto the small current collector carrying the anode, and press the battery at **4 MPa (gauge) for 2 min**.
11. **Build the full cell** with plates, insulators and screws. Make the gap even on all sides (**D1 = D2**) and tighten the nuts **hand-tight**. The battery is ready for an OCV measurement.
12. **Connect the cycler.** Take the cell out of the glovebox and connect it to a CT-9008 channel: **positive (red) to the cathode side** (long collector), **negative (black) to the anode side**. Check that the open-circuit voltage is stable.
13. **Program and start the test** in BTS: rest at OCV, then constant-current charge and discharge between your voltage limits, repeated for the number of cycles you need. See [battery cyclers](../instruments/battery-cyclers.md#choosing-the-current).

</div>

## Choosing current and voltage limits

- **Capacity estimate.** With 10 mg of composite at 38 wt % NMC-111 (114 mg NMC in 300 mg composite) the cell holds ≈ 3.8 mg of NMC. At a typical practical capacity of ~150 mAh g⁻¹ this is ≈ 0.57 mAh, so **0.1 C ≈ 57 µA** and **0.05 C ≈ 28 µA**. Use your measured cathode mass and the capacity you expect for your material.
- **Which channel.** At these currents only the **CT-9008** works properly (current range 1: 0.1–180 µA, accuracy ±36 nA). The CT-4008 and CT-5008 units start at 0.2 mA and 0.12 mA respectively — above 0.1 C for this cell — and their accuracy is ±0.02 % of a 100 mA or 120 mA full scale (±20–24 µA), as large as the current itself.
- **Voltage.** The Li–In anode sits at ≈ 0.6 V vs Li⁺/Li, so a cathode window quoted vs Li⁺/Li must be shifted down by ≈ 0.6 V when entered in BTS.

!!! note "Gauge pressure"
    All pressures are **gauge** readings of the hydraulic press. Pellet pressure = gauge × (40 mm / die Ø)²: for a Ø 10 mm die, 4 MPa gauge ≈ 64 MPa and 18 MPa gauge ≈ 288 MPa. See [The press and pressure conversion](eis-cell.md#press), which has a calculator.
