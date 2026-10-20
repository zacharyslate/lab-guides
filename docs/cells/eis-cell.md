---
title: AC impedance (EIS) cell
description: Pressing a solid-electrolyte pellet, assembling the polycarbonate impedance cell and measuring ionic conductivity on the PMC-2000.
---

# AC impedance (EIS) cell

This cell measures the **ionic conductivity** of a sulfide or halide solid-electrolyte pellet between two blocking stainless-steel electrodes. Do steps 1–9 inside the glovebox.

<div class="facts" markdown>

| | |
|---|---|
| **Parts** | 2 stainless-steel plates · 2 stainless-steel current collectors (one long, one small) · 2 silicone gaskets · polycarbonate cell body · 2 insulators · small M4 screws · long 4 mm screws · electrolyte pellet |
| **Dies** | Ø 6 mm (20–30 mg powder) or Ø 10 mm (80–100 mg powder) |
| **Instrument** | [PARSTAT MC · PMC-2000 with VersaStudio](../instruments/potentiostat.md) |
| **Analysis** | [EIS data analysis](../analysis/eis-analysis.md) with [EIS Studio](https://zacharyslate.github.io/eis-studio/) |

</div>

## Demonstration

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tare the die.** Put the small pressing arm into the bottom of the die, place the die on the balance and tare (zero) it.
2. **Add the powder.** Carefully transfer the electrolyte powder into the die: **20–30 mg** for the Ø 6 mm die, **80–100 mg** for the Ø 10 mm die. Record the mass.
3. **Insert the long arm** on top of the powder.
4. **Press the pellet.** Place the die in the centre of the press and apply **4 MPa (gauge)** for **1 min**.
5. **Release the pellet.** Invert the die on the steel saddle and use the press to push the die off the pressing arms. The pellet comes out into the saddle.
6. **Load the cell.** Put the long current collector in the bottom of the polycarbonate cell, transfer the pellet into the bore, and insert the small current collector on top. **Each current collector needs its silicone gasket.**
7. **Densify.** Put the loaded cell in the centre of the press and apply pressure slowly: **18 MPa (gauge) for the Ø 10 mm cell** or **7.5 MPa (gauge) for the Ø 6 mm cell**, for **3 min**.
8. **Build the full cell.** Add the steel plates, insulators and screws as in the drawing.
9. **Square it up.** The gap between the outer steel plates must be the same on every side (**D1 = D2**). Tighten all nuts **hand-tight** only.
10. **Connect the potentiostat.** Use a two-terminal connection: **WE (green) + SE (grey)** to one plate, **CE (red) + RE (white)** to the other. The cell is symmetric, so polarity does not matter.
11. **Equilibrate and measure.** Let the cell reach a constant temperature for **at least 45 min**, then run potentiostatic EIS (one sweep takes about 30 s – 1 min).
12. **Repeat at each temperature**: 40, 60, 80, 100 and 120 °C, waiting at least 45 min at each step.

</div>

## The press and pressure conversion { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Riken Seiki foot pump with its 0–100 MPa gauge: the gauge shows the oil pressure, not the pressure on your pellet](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Riken Seiki foot pump with its 0–100 MPa gauge: the gauge shows the oil pressure, not the pressure on your pellet</figcaption>
</figure>

<figure markdown>
![CDM-5M press: the cylinder on top pushes the ram down onto the die or cell, which sits on the base plate](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>CDM-5M press: the cylinder on top pushes the ram down onto the die or cell, which sits on the base plate</figcaption>
</figure>

</div>

The gauge on the foot pump reads the **oil pressure** in the cylinder. The force comes from that pressure acting on the cylinder's piston, the **40 mm shaft**; the 45 mm head only passes the force on to the punch. The pressure in your pellet is that force divided by the pellet area:

<div class="formula" markdown>

*F* = *P*<sub>g</sub> × π *d*² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>p</sub> = *F* / (π *D*² / 4) = *P*<sub>g</sub> × (*d* / *D*)² &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>g</sub> = *P*<sub>p</sub> × (*D* / *d*)²

</div>

*d* = shaft diameter (40 mm), *D* = die (pellet) diameter. With *d* = 40 mm, **1 MPa on the gauge = 1.26 kN (0.13 t)**.

| Die Ø | Pellet area | Pellet ÷ gauge | 4 MPa gauge (pellet forming) | Lab setting for the cell |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 7.5 MPa gauge → **333 MPa** (9.4 kN) |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 18 MPa gauge → **288 MPa** (22.6 kN) |

**Backwards:** to press a Ø 10 mm pellet at 375 MPa, set the gauge to 375 × (10/40)² = **23.4 MPa**; for Ø 6 mm, 375 × (6/40)² = **8.4 MPa**.

<div class="bk press-calc">
<div class="bk-row">
<label>Shaft Ø (mm)<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>Die Ø (mm)<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>Gauge (MPa)<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>Pellet pressure (MPa)<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>Force<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "Before you rely on the numbers"
    - The piston diameter of our cylinder is **40 mm** (confirmed). For another press or cylinder, enter its piston diameter in the calculator.
    - Friction in the cylinder and die and the accuracy of the gauge are not included. In papers, report the pellet pressure together with the gauge reading, the shaft and die diameters and the press model.
    - Never exceed the rated pressure on the pump label or the rated load of the die.

## Measurement settings (VersaStudio, Potentiostatic EIS)

| Group | Setting | Value |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0.1 Hz or 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | Logarithmic, **10 points per decade** |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | **None** (required for EIS — VersaStudio manual §4.4.2.2) |

## From spectrum to conductivity

1. **Fit** the spectrum with an equivalent circuit or a distribution of relaxation times (DRT). The fit residuals must not show a pattern, except at the lowest frequencies where the blocking electrodes polarise. In DRT, each peak corresponds to one process; the electrode-polarisation contribution is **excluded** from the electrolyte resistance.
2. **Total resistance:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (bulk and grain-boundary contributions identified in your fit).
3. **Measure the pellet** thickness *L* (after densification) and area *A*.
4. **Ionic conductivity:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — in S cm⁻¹ with *L* in cm, *A* in cm², R in Ω.
5. **Activation energy:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Plot log₁₀ σ against 1000/T (T in K). The slope *m* gives **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹**.

!!! note "Activation energy"
    State in reports whether you fitted σ or σT against 1/T — the two conventions give slightly different E<sub>a</sub>.

All of the fitting, DRT and conductivity steps can be done in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — see [EIS data analysis](../analysis/eis-analysis.md).

## Electronic conductivity (DC polarisation)

1. Apply a constant potential (chronoamperometry) to the same blocking cell; the current decays from its starting value to a steady state.
2. Record the steady-state current *I* and repeat at several potentials inside the working window of the electrolyte (e.g. 2–4 V for sulfides).
3. Plot V against I; the slope is the electronic resistance *R*. Then σ<sub>e</sub> = *L* / (*R* · *A*).

Targets used in the group: separator electrolytes σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ and σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; electrode binders σ<sub>ion</sub> > 10⁻³ S cm⁻¹ with high electronic conductivity.

## Points to check before you publish numbers

!!! note "Gauge pressure is not pellet pressure"
    "4 MPa", "7.5 MPa" and "18 MPa" are **gauge (oil) pressures**. With the 40 mm shaft, 18 MPa gauge on a Ø 10 mm pellet is ≈ **288 MPa**, and 7.5 MPa gauge on a Ø 6 mm pellet is ≈ **333 MPa** — see [The press and pressure conversion](#press). Report the pellet pressure (and the gauge reading, shaft and die diameters) in papers so others can reproduce it.

!!! note "Polycarbonate at 120 °C"
    Polycarbonate softens near its glass transition (≈ 145 °C) and creeps under load well before that. At 100–120 °C under stack pressure the bore and gaskets can deform, changing contact and thickness. Check the cell after high-temperature runs and re-measure the pellet thickness; a heating-and-cooling run that retraces itself is a good test.

!!! note "High-frequency limit"
    The PMC-2000 is specified to 7 MHz, but above ~1 MHz cable inductance and stray capacitance distort the spectrum of low-resistance pellets. Run a Kramers–Kronig check (EIS Studio does this) and discard the high-frequency points that fail it.
