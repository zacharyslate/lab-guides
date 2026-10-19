---
title: EIS data analysis
description: How to analyse impedance spectra from the EIS cell — export from VersaStudio, validation, equivalent circuits, DRT and conductivity — using EIS Studio.
---

# EIS data analysis

Analysis is done in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**, a free, open-source application that runs in your web browser on your own computer (your data are not uploaded). It reads files from common potentiostats, runs a Kramers–Kronig validity check, fits equivalent circuits (R, C, L, CPE, Warburg, Gerischer, transmission-line elements), computes a regularised distribution of relaxation times (DRT) with peak integration, and calculates ionic conductivity from thickness and area with propagated uncertainty.

<div class="inst-grid" markdown>

[**Tutorial** <span>Step-by-step first analysis</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[**Measuring** <span>Experimental set-up guidance</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[**Theory** <span>Circuits, DRT, validation</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[**Install** <span>Running it locally</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## Workflow for the EIS cell

1. **Export calibrated data from VersaStudio** — Data ▸ Export To ▸ ZView (`.z`), or copy from the Graph View. The raw EIS columns inside `.par` files are **uncalibrated** according to the VersaStudio manual (Appendix 3).
2. **Validate** each spectrum with the Kramers–Kronig test. Drop high-frequency points that fail (cable artefacts) and note how many you dropped.
3. **Fit** an equivalent circuit, or compute the **DRT**. Exclude the low-frequency blocking-electrode contribution from the electrolyte resistance.
4. **Conductivity** — enter the pellet thickness and diameter: σ = *L* / (R · *A*).
5. **Activation energy** — fit log₁₀ σ vs 1000/T across the temperature series; E<sub>a</sub> = −19.14 × slope kJ mol⁻¹ (see the [EIS cell page](../cells/eis-cell.md#from-spectrum-to-conductivity)). Report whether you fitted σ or σT.

!!! note "What to report"
    Pellet mass, thickness and diameter; pressing pressure on the pellet (not only the gauge reading); temperature and equilibration time; frequency range, amplitude and points per decade; the circuit or DRT settings used; and the fit residuals.
