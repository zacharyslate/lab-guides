---
title: Anton Paar Cora 5001
description: Measuring a Raman spectrum of a sealed sample with the Cora 5001 fibre-probe spectrometer, and using it for in-situ monitoring in the Monowave 400 R.
---

# Anton Paar Cora 5001 Raman spectrometer

<div class="facts" markdown>

| | |
|---|---|
| **What it is for** | Raman spectra of powders, liquids and reaction mixtures; in-situ monitoring of reactions in the [Monowave 400 R](monowave.md) |
| **Version in the lab** | **Cora 5001 Fiber**: the laser and the Raman signal travel through a fibre probe. Check the label for the excitation wavelength (532, 785 or 1064 nm, or dual) |
| **Laser** | **Class 3B** with the fibre probe — even when the probe sits in its docking station |
| **Training** | Required, including the laser-safety briefing |
| **Manuals** | [Manuals and references](../manuals.md#cora) |

</div>

!!! danger "Laser class 3B"
    - Never look into the probe tip or a fibre end, and never point the probe at people or reflective surfaces.
    - Wear the laser-protection glasses provided for the wavelength in use whenever the probe is not enclosed.
    - Opening the sample chamber or fibre port, pressing **Stop** on the probe, or triggering the interlock switches the laser off immediately.

## Our set-up

<figure markdown>
![Our Monowave 400 R (left) and Cora 5001 (right). The compressed-air regulator is on the left; laser safety glasses are kept next to the Cora.](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>Our Monowave 400 R (left) and Cora 5001 (right). The compressed-air regulator is on the left; laser safety glasses are kept next to the Cora.</figcaption>
</figure>

## Demonstration

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. **Switch on** with the switch on the rear panel. Allow about **15 min** for temperature equilibration; you can measure during warm-up, but adjustments are blocked until it is finished.
2. **Log in** with your user account.
3. **Prepare the sample.** Air-sensitive powders go into a **sealed glass vial filled in the glovebox**. Tap the vial gently on the bench to compact the powder and remove air pockets.
4. **Load the docking station.** Loosen the fixing screw and slide the probe back to the rear stop. Put the vial holder with your vial in the docking station and close the lid.
5. **Enable the laser.** Press **Enable** on the probe (or the interlock reset button on the instrument). The **Ready** LED lights up.
6. **Focus.** Open **Adjust Focus** and tap **Start** for a live spectrum. Slide the probe towards the sample until the signal is at its maximum, **tighten the fixing screw**, then tap **Stop**. The focus is a few millimetres in front of the probe tip.
7. **Set up the measurement.** Menu ▸ **Single Measurement**: enter a sample name, choose the wavelength (dual-laser units) and the laser power (532 nm: on = 50 mW; 785/1064 nm: 0–450 mW, at least 50 mW recommended). **Auto Exposure** (max. 10 s) is a good first guess.
8. **Advanced settings (optional).** Acquire a background (removes ambient light), average N spectra to reduce noise, cosmic-spike removal (needs N ≥ 3; switch it off for fluorescent samples) and baseline correction for fluorescence.
9. **Measure.** Tap **Measure**. The spectrum appears and is stored under the sample name; the software points out possible quality issues.
10. **Save and export.** Export or print the spectrum, or **Save as method** to repeat the same settings later. Pressing **Stop** on the probe interrupts the measurement and disables the laser.
11. **Finish.** Remove your sample and switch the instrument off with the rear switch (data are saved on shutdown).

</div>

## Tips for battery materials

- **Use the least laser power that gives a usable signal.** Dark samples (carbon-containing composites, NMC) absorb strongly and can heat or decompose locally, especially at 532 nm. Record two spectra in a row at the same spot: if they differ, lower the power.
- **Glass contributes signal.** Record the empty vial with *exactly* the same settings (focus, power, exposure — switch Auto Exposure off) and use it as a **custom blank** to subtract.
- **Fluorescence** gives a broad, rising background; a longer wavelength (785 or 1064 nm) reduces it.
- **Inhomogeneous samples:** measure several spots.
- Shield the probe tip and sample from room light; fluorescent lamps produce narrow lines that look like Raman peaks.

## In-situ Raman in the Monowave 400 R

When the probe is mounted on the Monowave 400 R slide, follow the [Monowave guide](monowave.md): set the probe position for the vial size **with the laser disarmed**, start the Raman measurement only after the swivelling cover has closed, and stop the Raman measurement and disarm the laser **before** stopping the microwave run. For a reaction, use a **time series** (see the Cora reference guide) and normalise to a band that does not change, such as a solvent band.
