# Review notes — open questions for the lab

Found while turning the lab documents and manuals into guides (19 October 2026). Each item is also flagged on the relevant page.

## Errors in the source documents

| # | Where | Problem | Fix used on the site |
|---|---|---|---|
| 1 | *AC EIS Cell* slides, activation energy | "Slope (m) = 2.313 × Ea" — the constant is ln 10 = 2.303, and R and the ×1000 of the 1000/T axis are missing | E<sub>a</sub> = −2.303 · R · 1000 · m = −19.14 · m kJ mol⁻¹ |
| 2 | *AC EIS Cell* slides, conductivity | The fraction is ambiguous in the slide text ("A × Rtotal / L") | σ = L / (R · A) |
| 3 | *AC EIS Cell* slides, EIS parameters | "Number of points 30" and "Points per decade 10" are inconsistent (3 MHz → 0.1 Hz = 7.5 decades ≈ 75 points) | 10 points per decade |
| 4 | Hobersal furnace guide (ES) | 166 min written as "2 horas 36 minutos (02:36)" | 02:46 (matches the hand-written correction) |

## Conflicts between lab documents

| # | Topic | Document A | Document B |
|---|---|---|---|
| 5 | Antechamber cycle | Glovebox slides: full vacuum ≥ 5 min before releasing | Guía MBraun EasyLab: 3 × (vacuum, 15 min hold, argon), or 45 min in active mode |

## Procedures that conflict with the manufacturer

| # | Topic | Problem |
|---|---|---|
| 6 | 75Li₂S–25P₂S₅ milling: 510 rpm, 24 h | Fritsch rates the Pulverisette 7 classic line for 8 h shifts at 30 % duty cycle, not continuous operation. A milling/pause program changes the thermal history, so the synthesis must be re-validated |
| 7 | Solid-state cells on CT-4008/CT-5008 | At 0.1 C the micro cell needs ≈ 57 µA, below the lowest range of these units (0.2 mA / 0.12 mA) and smaller than their accuracy. Only the CT-9008 is suitable |
| 8 | VersaStudio EIS export | The VersaStudio manual says EIS data in the raw `.par` file are uncalibrated; export via ZView/Graph View for analysis. **Check whether EIS Studio's `.par` reader applies the calibration** |

## Missing information

| # | Where | Missing |
|---|---|---|
| 9 | Cathode composite procedure | Bath temperature, set pressure, drying time, any post-drying heat treatment |
| 10 | Solid-state battery | Stacking order of Li and In foils; whether the re-tare happens before the cathode is added |
| 11 | Press | Ram diameter (to convert gauge pressure to pellet pressure for publications) |
| 12 | Glovebox | Whether circulation is paused while using open solvents; list of chemicals allowed in the box |
| 13 | Booking rules | No per-booking time limit (decided 2026-10-19); still open: no-show rule, number of PMC-2000 channels |
| 14 | Manuals | Link to the lab-drive folder with the manuals |
| 15 | References | ✔ Confirmed correct by Zach (2026-10-20); "to be confirmed" notice removed |
| 16 | Cora 5001 | Excitation wavelength(s) of the lab's unit |
| 17 | Rotavapor flask | Only the text of the *Rotovapor* slides could be read. The guide assumes a round-bottom flask + separate stopcock adapter joined with grease and a Keck clip in the glovebox — confirm, or say if the flask has a built-in valve |
| 18 | Glovebox panel | The lab photo (2026-10-20) shows the circ LED dark although it should always be on — check whether circulation was off or the LED is faulty (the old slides say the LED "does not function well"). The functions of the **Min.set / Max.set** knobs (box-pressure limits) come from their labels, not from a manual; "purge only when the lab manager asks" is a lab-rule assumption — confirm both |
| 19 | Rotavapor set-up | From the lab photos (2026-10-20): (a) the **SET / ◄ ▼ ▲** procedure for the Nahita oil bath and the **Set soft key + knob** procedure for the V-850 are the usual ones for these controllers, not taken from their manuals (not in the project) — confirm on the instruments; (b) the 180 °C limit comes from the lab slides — confirm it applies to the Nahita bath; (c) what are the red blocks under the lift for (immersion stop?); (d) is 2.0 °C the standard chiller set point? |

## Things that need a decision

- **Personal e-mail addresses** in the lab sheets (ball-mill sheet) are not published on the public site. Decide what contact to show.
- **Translations** (es, it, de, fr, tr, zh, ja, ko — all 22 pages) are first-pass machine translations made with the English text as the source. They need a native speaker, ideally a lab member who uses the instrument, before they are marked `translation: reviewed`. Start with the safety pages and the glovebox, rotavapor, furnace and ball-mill guides. Terms to check first: the glovebox/antechamber words, the rotavapor stopcock/joint words, and "gauge pressure" vs "pellet pressure" (the distinction matters for the numbers).
- **Polycarbonate EIS cell at 100–120 °C** — check for creep/deformation (Tg ≈ 145 °C).
