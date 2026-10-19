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

!!! question "Inconsistency in the lab slides"
    The lab slides list both *"Number of points: 30"* and *"Points per decade: 10"*. They cannot both hold: from 3 MHz to 0.1 Hz is 7.5 decades, i.e. ≈ 75 points at 10 points/decade (≈ 65 points to 1 Hz). This guide uses 10 points per decade. Please confirm.

## From spectrum to conductivity

1. **Fit** the spectrum with an equivalent circuit or a distribution of relaxation times (DRT). The fit residuals must not show a pattern, except at the lowest frequencies where the blocking electrodes polarise. In DRT, each peak corresponds to one process; the electrode-polarisation contribution is **excluded** from the electrolyte resistance.
2. **Total resistance:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (bulk and grain-boundary contributions identified in your fit).
3. **Measure the pellet** thickness *L* (after densification) and area *A*.
4. **Ionic conductivity:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — in S cm⁻¹ with *L* in cm, *A* in cm², R in Ω.
5. **Activation energy:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Plot log₁₀ σ against 1000/T (T in K). The slope *m* gives **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹**.

!!! warning "Correction to the lab slides"
    The slides state *"slope = 2.313 × E<sub>a</sub>"*. The constant is ln 10 = **2.303**, and the relation must include R and the factor 1000 from the 1000/T axis: E<sub>a</sub> [kJ mol⁻¹] = −2.303 · 8.314 · m = **−19.14 m**. Also state in reports whether you fit σ or σT against 1/T — the two conventions give slightly different E<sub>a</sub>.

All of the fitting, DRT and conductivity steps can be done in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — see [EIS data analysis](../analysis/eis-analysis.md).

## Electronic conductivity (DC polarisation)

1. Apply a constant potential (chronoamperometry) to the same blocking cell; the current decays from its starting value to a steady state.
2. Record the steady-state current *I* and repeat at several potentials inside the working window of the electrolyte (e.g. 2–4 V for sulfides).
3. Plot V against I; the slope is the electronic resistance *R*. Then σ<sub>e</sub> = *L* / (*R* · *A*).

Targets used in the group: separator electrolytes σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ and σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; electrode binders σ<sub>ion</sub> > 10⁻³ S cm⁻¹ with high electronic conductivity.

## Points to check before you publish numbers

!!! note "Gauge pressure is not pellet pressure"
    "4 MPa" and "18 MPa" are **gauge (hydraulic) pressures**. The pressure on the pellet is *P*<sub>pellet</sub> = *P*<sub>gauge</sub> × (*A*<sub>ram</sub> / *A*<sub>die</sub>), which is many times larger for a Ø 6–10 mm die. Report the pellet pressure (and the press model and ram diameter) in papers so others can reproduce it.

!!! note "Polycarbonate at 120 °C"
    Polycarbonate softens near its glass transition (≈ 145 °C) and creeps under load well before that. At 100–120 °C under stack pressure the bore and gaskets can deform, changing contact and thickness. Check the cell after high-temperature runs and re-measure the pellet thickness; a heating-and-cooling run that retraces itself is a good test.

!!! note "High-frequency limit"
    The PMC-2000 is specified to 7 MHz, but above ~1 MHz cable inductance and stray capacitance distort the spectrum of low-resistance pellets. Run a Kramers–Kronig check (EIS Studio does this) and discard the high-frequency points that fail it.
