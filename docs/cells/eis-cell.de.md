---
title: AC-Impedanzzelle (EIS)
description: Einen Festelektrolyt-Pressling pressen, die Impedanzzelle aus Polycarbonat montieren und die Ionenleitfähigkeit am PMC-2000 messen.
translation: machine
---

# AC-Impedanzzelle (EIS)

Diese Zelle misst die **Ionenleitfähigkeit** eines Sulfid- oder Halogenid-Festelektrolyt-Presslings zwischen zwei blockierenden Edelstahlelektroden. Führen Sie die Schritte 1–9 in der Glovebox durch.

<div class="facts" markdown>

| | |
|---|---|
| **Teile** | 2 Edelstahlplatten · 2 Edelstahl-Stromableiter (ein langer, ein kurzer) · 2 Silikondichtungen · Zellkörper aus Polycarbonat · 2 Isolatoren · kurze M4-Schrauben · lange 4-mm-Schrauben · Elektrolyt-Pressling |
| **Matrizen** | Ø 6 mm (20–30 mg Pulver) oder Ø 10 mm (80–100 mg Pulver) |
| **Gerät** | [PARSTAT MC · PMC-2000 mit VersaStudio](../instruments/potentiostat.md) |
| **Auswertung** | [EIS-Datenanalyse](../analysis/eis-analysis.md) mit [EIS Studio](https://zacharyslate.github.io/eis-studio/) |

</div>

## Vorführung { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Matrize tarieren.** Setzen Sie den kurzen Pressstempel unten in die Matrize, stellen Sie die Matrize auf die Waage und tarieren Sie (auf null).
2. **Pulver zugeben.** Geben Sie das Elektrolytpulver vorsichtig in die Matrize: **20–30 mg** für die Ø-6-mm-Matrize, **80–100 mg** für die Ø-10-mm-Matrize. Notieren Sie die Masse.
3. **Langen Stempel einsetzen** auf das Pulver.
4. **Pressling pressen.** Stellen Sie die Matrize mittig in die Presse und üben Sie **4 MPa (Manometer)** für **1 min** aus.
5. **Pressling entnehmen.** Drehen Sie die Matrize auf dem Stahlsattel um und drücken Sie die Matrize mit der Presse von den Stempeln. Der Pressling fällt in den Sattel.
6. **Zelle beladen.** Setzen Sie den langen Stromableiter unten in die Polycarbonatzelle, überführen Sie den Pressling in die Bohrung und setzen Sie den kurzen Stromableiter oben ein. **Jeder Stromableiter braucht seine Silikondichtung.**
7. **Verdichten.** Stellen Sie die beladene Zelle mittig in die Presse und erhöhen Sie den Druck langsam: **18 MPa (Manometer) für die Ø-10-mm-Zelle** oder **7,5 MPa (Manometer) für die Ø-6-mm-Zelle**, für **3 min**.
8. **Komplette Zelle aufbauen.** Fügen Sie Stahlplatten, Isolatoren und Schrauben wie in der Zeichnung hinzu.
9. **Ausrichten.** Der Abstand zwischen den äußeren Stahlplatten muss auf allen Seiten gleich sein (**D1 = D2**). Ziehen Sie alle Muttern nur **handfest** an.
10. **Potentiostat anschließen.** Verwenden Sie eine Zwei-Elektroden-Verbindung: **WE (grün) + SE (grau)** an eine Platte, **CE (rot) + RE (weiß)** an die andere. Die Zelle ist symmetrisch, die Polarität spielt keine Rolle.
11. **Equilibrieren und messen.** Lassen Sie die Zelle **mindestens 45 min** eine konstante Temperatur erreichen und führen Sie dann potentiostatische EIS durch (ein Durchlauf dauert etwa 30 s – 1 min).
12. **Bei jeder Temperatur wiederholen**: 40, 60, 80, 100 und 120 °C, mit mindestens 45 min Wartezeit pro Stufe.

</div>

## Messeinstellungen (VersaStudio, Potentiostatic EIS) { #measurement-settings-versastudio-potentiostatic-eis }

| Gruppe | Einstellung | Wert |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0,1 Hz oder 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | Logarithmisch, **10 Punkte pro Dekade** |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | **None** (für EIS erforderlich — VersaStudio-Handbuch §4.4.2.2) |

!!! question "Widerspruch in den Laborfolien"
    Die Laborfolien nennen sowohl *„Number of points: 30“* als auch *„Points per decade: 10“*. Beides kann nicht gleichzeitig gelten: Von 3 MHz bis 0,1 Hz sind es 7,5 Dekaden, also ≈ 75 Punkte bei 10 Punkten/Dekade (≈ 65 Punkte bis 1 Hz). Diese Anleitung verwendet 10 Punkte pro Dekade. Bitte bestätigen.

## Vom Spektrum zur Leitfähigkeit { #from-spectrum-to-conductivity }

1. **Fitten** Sie das Spektrum mit einem Ersatzschaltbild oder einer Verteilung der Relaxationszeiten (DRT). Die Fit-Residuen dürfen kein Muster zeigen, außer bei den niedrigsten Frequenzen, wo die blockierenden Elektroden polarisieren. In der DRT entspricht jeder Peak einem Prozess; der Beitrag der Elektrodenpolarisation wird vom Elektrolytwiderstand **ausgeschlossen**.
2. **Gesamtwiderstand:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (in Ihrem Fit identifizierte Volumen- und Korngrenzenbeiträge).
3. **Pressling vermessen**: Dicke *L* (nach dem Verdichten) und Fläche *A*.
4. **Ionenleitfähigkeit:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — in S cm⁻¹ mit *L* in cm, *A* in cm² und R in Ω.
5. **Aktivierungsenergie:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Tragen Sie log₁₀ σ gegen 1000/T auf (T in K). Die Steigung *m* ergibt **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! warning "Korrektur der Laborfolien"
    Die Folien geben *„slope = 2.313 × E<sub>a</sub>“* an. Die Konstante ist ln 10 = **2,303**, und die Beziehung muss R und den Faktor 1000 aus der 1000/T-Achse enthalten: E<sub>a</sub> [kJ mol⁻¹] = −2,303 · 8,314 · m = **−19,14 m**. Geben Sie in Berichten außerdem an, ob Sie σ oder σT gegen 1/T gefittet haben — die beiden Konventionen ergeben leicht unterschiedliche E<sub>a</sub>.

Alle Schritte zu Fit, DRT und Leitfähigkeit lassen sich in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** durchführen — siehe [EIS-Datenanalyse](../analysis/eis-analysis.md).

## Elektronische Leitfähigkeit (DC-Polarisation)

1. Legen Sie an dieselbe blockierende Zelle ein konstantes Potential an (Chronoamperometrie); der Strom fällt vom Anfangswert auf einen stationären Wert ab.
2. Notieren Sie den stationären Strom *I* und wiederholen Sie bei mehreren Potentialen innerhalb des Arbeitsfensters des Elektrolyten (z. B. 2–4 V für Sulfide).
3. Tragen Sie V gegen I auf; die Steigung ist der elektronische Widerstand *R*. Dann gilt σ<sub>e</sub> = *L* / (*R* · *A*).

In der Gruppe verwendete Zielwerte: Separator-Elektrolyte σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ und σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; Elektrodenbinder σ<sub>ion</sub> > 10⁻³ S cm⁻¹ mit hoher elektronischer Leitfähigkeit.

## Was Sie vor der Veröffentlichung von Werten prüfen sollten { #points-to-check-before-you-publish-numbers }

!!! note "Manometerdruck ist nicht der Druck auf den Pressling"
    „4 MPa“ und „18 MPa“ sind **Manometer-(Hydraulik-)Drücke**. Der Druck auf den Pressling ist *P*<sub>Pressling</sub> = *P*<sub>Manometer</sub> × (*A*<sub>Kolben</sub> / *A*<sub>Matrize</sub>), bei einer Ø-6–10-mm-Matrize um ein Vielfaches höher. Geben Sie in Veröffentlichungen den Druck auf den Pressling (sowie Pressenmodell und Kolbendurchmesser) an, damit andere ihn reproduzieren können.

!!! note "Polycarbonat bei 120 °C"
    Polycarbonat erweicht nahe seinem Glasübergang (≈ 145 °C) und kriecht unter Last schon deutlich früher. Bei 100–120 °C unter Stapeldruck können sich Bohrung und Dichtungen verformen, wodurch sich Kontakt und Dicke ändern. Prüfen Sie die Zelle nach Hochtemperaturläufen und messen Sie die Presslingsdicke erneut; ein Heiz-/Kühllauf, der sich selbst nachzeichnet, ist ein guter Test.

!!! note "Hochfrequenzgrenze"
    Der PMC-2000 ist bis 7 MHz spezifiziert, aber oberhalb von ~1 MHz verzerren Kabelinduktivität und Streukapazität das Spektrum niederohmiger Presslinge. Führen Sie einen Kramers–Kronig-Test durch (EIS Studio bietet ihn an) und verwerfen Sie die Hochfrequenzpunkte, die ihn nicht bestehen.
