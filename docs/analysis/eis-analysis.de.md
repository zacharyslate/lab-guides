---
title: EIS-Datenanalyse
description: So werten Sie Impedanzspektren der EIS-Zelle aus — Export aus VersaStudio, Validierung, Ersatzschaltbilder, DRT und Leitfähigkeit — mit EIS Studio.
translation: machine
---

# EIS-Datenanalyse

Die Auswertung erfolgt in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**, einer freien Open-Source-Anwendung, die im Webbrowser auf Ihrem eigenen Rechner läuft (Ihre Daten werden nicht hochgeladen). Sie liest Dateien gängiger Potentiostaten, führt einen Kramers–Kronig-Gültigkeitstest durch, fittet Ersatzschaltbilder (R-, C-, L-, CPE-, Warburg-, Gerischer- und Transmission-Line-Elemente), berechnet eine regularisierte Verteilung der Relaxationszeiten (DRT) mit Peakintegration und berechnet die Ionenleitfähigkeit aus Dicke und Fläche mit Fehlerfortpflanzung.

<div class="inst-grid" markdown>

[**Tutorial** <span>Erste Auswertung Schritt für Schritt</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[**Messen** <span>Hinweise zum Versuchsaufbau</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[**Theorie** <span>Schaltungen, DRT, Validierung</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[**Installation** <span>Lokal ausführen</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## Arbeitsablauf für die EIS-Zelle

1. **Kalibrierte Daten aus VersaStudio exportieren** — Data ▸ Export To ▸ ZView (`.z`), oder aus der Graph View kopieren. Die rohen EIS-Spalten in `.par`-Dateien sind laut VersaStudio-Handbuch (Anhang 3) **unkalibriert**.
2. **Validieren** Sie jedes Spektrum mit dem Kramers–Kronig-Test. Verwerfen Sie Hochfrequenzpunkte, die ihn nicht bestehen (Kabelartefakte), und notieren Sie, wie viele Sie verworfen haben.
3. **Fitten** Sie ein Ersatzschaltbild oder berechnen Sie die **DRT**. Schließen Sie den niederfrequenten Beitrag der blockierenden Elektroden vom Elektrolytwiderstand aus.
4. **Leitfähigkeit** — geben Sie Dicke und Durchmesser des Presslings ein: σ = *L* / (R · *A*).
5. **Aktivierungsenergie** — fitten Sie log₁₀ σ gegen 1000/T über die Temperaturreihe; E<sub>a</sub> = −19,14 × Steigung kJ mol⁻¹ (siehe [Seite der EIS-Zelle](../cells/eis-cell.md#from-spectrum-to-conductivity)). Geben Sie an, ob Sie σ oder σT gefittet haben.

!!! note "Was Sie angeben sollten"
    Masse, Dicke und Durchmesser des Presslings; Pressdruck auf den Pressling (nicht nur den Manometerwert); Temperatur und Equilibrierzeit; Frequenzbereich, Amplitude und Punkte pro Dekade; verwendete Schaltung bzw. DRT-Einstellungen; und die Fit-Residuen.
