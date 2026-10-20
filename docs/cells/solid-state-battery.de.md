---
title: Festkörper-Testbatterie
description: Eine Festkörper-Mikrotestbatterie im Labor bauen (Zweischicht-Pressling aus Kathode/Elektrolyt mit Indium- oder Li–In-Anode) und sie am Neware CT-9008 zyklieren.
translation: machine
---

# Festkörper-Testbatterie

Eine Mikrotestbatterie in derselben Polycarbonatzelle wie für die [EIS](eis-cell.md): ein **Zweischicht-Pressling** (Festelektrolyt + Kompositkathode) mit einer Metallanode auf der anderen Seite. Die Schritte 1–11 werden in der **Glovebox** durchgeführt.

<div class="facts" markdown>

| | |
|---|---|
| **Elektrolytschicht** | 100 mg in der Ø-10-mm-Matrize |
| **Kathodenschicht** | 10 mg Kompositkathode (z. B. aus dem [Kathodenverfahren](../procedures/cathode-composite.md)) |
| **Anode** | Li-Folie Ø 6,0 mm × 0,25 mm (poliert) und In-Folie Ø 8,0 mm × 0,3 mm. **Lithiierte Kathoden (z. B. NMC): kein Li — nur In-Folie Ø 8,0 mm × 0,1 mm** |
| **Zyklierer** | [Neware CT-9008 (5 V, 6 mA)](../instruments/battery-cyclers.md) — der einzige Zyklierer im Labor mit ausreichend kleinen Strombereichen für diese Zelle |

</div>

## Vorführung { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Matrize tarieren.** Setzen Sie den kurzen Pressstempel unten in die Ø-10-mm-Matrize und tarieren Sie sie auf der Waage (auf null).
2. **100 mg Elektrolyt zugeben** und die genaue Masse notieren.
3. **Elektrolytschicht pressen.** Langen Stempel einsetzen und mit **4 MPa (Manometer) für 1 min** pressen.
4. **Kathode zugeben.** Entfernen Sie den langen Stempel von Hand und verteilen Sie **10 mg Kompositkathode** gleichmäßig über die gesamte Elektrolytoberfläche. Notieren Sie die Masse (Matrize mit Pressling vorher tarieren).
5. **Zweischicht pressen.** Langen Stempel wieder einsetzen und erneut mit **4 MPa (Manometer) für 1 min** pressen.
6. **Zweischicht-Pressling entnehmen**, indem Sie die Matrize auf dem Stahlsattel umdrehen und die Matrize in der Presse von den Stempeln drücken.
7. **Beladen und verdichten.** Setzen Sie den Zweischicht-Pressling in die Polycarbonatzelle, mit dem **langen Stromableiter unten** und einer Silikondichtung auf jedem Ableiter. Zentrieren Sie die Zelle in der Presse und üben Sie **18 MPa (Manometer) langsam für 3 min** aus.
8. **Elektrolyt freilegen.** Entfernen Sie den kurzen Stromableiter. Die **Elektrolytseite** der Zweischicht muss nach oben zeigen (die Kathodenseite liegt auf dem langen Ableiter).
9. **Anode vorbereiten.** Befestigen Sie das Anodenmetall am kurzen Stromableiter (Maße in der Tabelle oben).
10. **Anode hinzufügen.** Drehen Sie den Zellkörper um, schieben Sie ihn auf den kurzen Stromableiter mit der Anode und pressen Sie die Batterie mit **4 MPa (Manometer) für 2 min**.
11. **Komplette Zelle aufbauen** mit Platten, Isolatoren und Schrauben. Gleichen Sie den Abstand auf allen Seiten an (**D1 = D2**) und ziehen Sie die Muttern **handfest** an. Die Batterie ist bereit für eine OCV-Messung.
12. **Zyklierer anschließen.** Nehmen Sie die Zelle aus der Glovebox und schließen Sie sie an einen CT-9008-Kanal an: **Plus (rot) an die Kathodenseite** (langer Ableiter), **Minus (schwarz) an die Anodenseite**. Prüfen Sie, dass die Leerlaufspannung stabil ist.
13. **Test programmieren und starten** in BTS: Ruhe bei OCV, dann Konstantstrom-Laden und -Entladen zwischen Ihren Spannungsgrenzen, wiederholt für die benötigte Zyklenzahl. Siehe [Batteriezyklierer](../instruments/battery-cyclers.md#choosing-the-current).

</div>

## Strom und Spannungsgrenzen wählen

- **Kapazitätsabschätzung.** Mit 10 mg Komposit bei 38 Gew.-% NMC-111 (114 mg NMC in 300 mg Komposit) enthält die Zelle ≈ 3,8 mg NMC. Bei einer typischen praktischen Kapazität von ~150 mAh g⁻¹ sind das ≈ 0,57 mAh, also **0,1 C ≈ 57 µA** und **0,05 C ≈ 28 µA**. Verwenden Sie Ihre gemessene Kathodenmasse und die für Ihr Material erwartete Kapazität.
- **Welcher Kanal.** Bei diesen Strömen funktioniert nur der **CT-9008** einwandfrei (Strombereich 1: 0,1–180 µA, Genauigkeit ±36 nA). Die Geräte CT-4008 und CT-5008 beginnen bei 0,2 mA bzw. 0,12 mA — oberhalb von 0,1 C für diese Zelle — und ihre Genauigkeit beträgt ±0,02 % eines Endwerts von 100 mA bzw. 120 mA (±20–24 µA), so groß wie der Strom selbst.
- **Spannung.** Die Li–In-Anode liegt bei ≈ 0,6 V gegen Li⁺/Li; ein gegen Li⁺/Li angegebenes Kathodenfenster muss bei der Eingabe in BTS um ≈ 0,6 V nach unten verschoben werden.

!!! note "Manometerdruck"
    Alle Drücke sind **Manometer**werte der Hydraulikpresse. Pelletdruck = Manometer × (40 mm / Werkzeug-Ø)²: bei einem Ø-10-mm-Werkzeug ergeben 4 MPa am Manometer ≈ 64 MPa und 18 MPa ≈ 288 MPa. Siehe [Die Presse und die Druckumrechnung](eis-cell.md#press) mit Rechner.
