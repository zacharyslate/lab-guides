---
title: PARSTAT MC · PMC-2000 mit VersaStudio
description: Einen Kanal auswählen, ein potentiostatisches EIS-Experiment einrichten, ausführen und kalibrierte Daten in VersaStudio mit dem PARSTAT MC PMC-2000 exportieren.
translation: machine
---

# PARSTAT MC · PMC-2000 mit VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | EIS, DC-Polarisation (elektronische Leitfähigkeit), CV, Batteriezyklierung bei kleinen Strömen |
| **PMC-2000-Kanal** | ±30 V Compliance, ±1 A, EIS **10 µHz – 7 MHz**, kleinster Strombereich 4 nA, Differenzelektrometer ≥ 10 MHz |
| **Software** | VersaStudio (Windows) — Datendateien `.par` (+ `.par.psbd`, wenn binäres Speichern aktiv ist) |
| **Zelle** | [AC-Impedanzzelle](../cells/eis-cell.md) — siehe deren Vorführung für die Hardware |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#potentiostat) |

</div>

## Farben der Zellkabel (PMC-2000-Kabel)

| Farbe | Leitung | Zwei-Elektroden-Zelle (EIS-Zelle, Batterie) |
|---|---|---|
| Grün | WE — Arbeitselektrode | zusammen mit Grau an **eine** Elektrode |
| Grau | SE — Sense | mit Grün |
| Rot | CE — Gegenelektrode | zusammen mit Weiß an die **andere** Elektrode |
| Weiß | RE — Referenz | mit Rot |
| Gelb / Blau | E2+ / E2− (6. Leitung) | nicht verwendet |
| Schwarz | GND | nicht verwendet — darf andere Leitungen nicht berühren |

Bei **niederohmigen Zellen oder Strömen über 100 mA** schließen Sie jede Leitung einzeln an der Klemme an, statt sie aufeinanderzustecken („Piggy-back“), um Spannungsfehler durch Kontaktwiderstand zu vermeiden (PMC-2000-Handbuch, §3).

## Vorführung — Software

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. **Start.** Der PARSTAT MC sollte vor jeder Kalibrierung mindestens 10 min eingeschaltet sein. Öffnen Sie **VersaStudio** (Start ▸ VersaStudio). Bei mehreren Kanälen öffnet es mit **No Instrument** ausgewählt.
2. **Wählen Sie Ihren Kanal.** Tools ▸ **Select Instrument** und Doppelklick auf Ihren Kanal. Rechtsklick ▸ *Locate Instrument* lässt die LED des Kanals blinken, damit Sie prüfen können, dass es der mit Ihrer Zelle verbundene ist. Mit **DATA** markierte Kanäle werden von jemand anderem benutzt — nicht auswählen.
3. **Überprüfung (im Zweifel).** Experiment ▸ Load Setup ▸ *Impedance Checkout* misst die **interne 1-kΩ-Dummyzelle**. Alle Punkte sollten 1000 Ω ± 20 Ω ergeben.
4. **Neues Experiment.** Experiment ▸ **New** ▸ *Select an Action* ▸ Impedance ▸ **Potentiostatic EIS** ▸ OK, und benennen Sie die Datendatei.
5. **Geben Sie die Parameter ein** in *Experiment Properties* (Werte für die EIS-Zelle auf der [Seite der EIS-Zelle](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)). Drücken Sie nach jedem Wert **Enter** — ein eingetippter, aber nicht bestätigter Wert wird nicht gespeichert. Tragen Sie Probenname, Dicke und Fläche des Presslings als Kommentare unter *Common* ein.
6. **Erweiterte Eigenschaften.** *Cell to Use* = **External**, Strombereich, Elektrometermodus (Single-ended für eine Zwei-Elektroden-Zelle; differenziell für Vier-Elektroden-Zellen), *Leave Cell On* = No.
7. **Filter.** Tools ▸ Options ▸ Instrument: **Notch filter = None** für EIS (erforderlich). Lassen Sie *EIS filters* auf Normal, sofern Sie keinen Grund zur Änderung haben.
8. **Vor dem Start speichern.** Experiment ▸ Save, damit die Daten während des Experiments auf die Festplatte geschrieben werden.
9. **Starten** (▶). Das Nyquist-Diagramm baut sich auf. **■** stoppt; **⏭** springt zum nächsten Segment.
10. **Kalibrierte Daten exportieren.** Data ▸ Export To ▸ **ZView (.z)** für EIS-Aktionen, oder Graph View ▸ *Copy Data as Text*. **Analysieren Sie nicht die rohen EIS-Spalten der `.par`-Datei** — VersaStudio speichert sie unkalibriert (Softwarehandbuch, Anhang 3).
11. **Geben Sie den Kanal frei.** Schließen Sie Ihr Experiment und wechseln Sie zurück zu *No Instrument*, damit die nächste Person den Kanal auswählen kann. Hinterlassen Sie die Kabel ordentlich.

</div>

## DC-Experimente an Batterien

- Setzen Sie den Strombereich bei Batterien und anderen Energiespeicherzellen **zuerst auf 2 A** (oder nutzen Sie die Aktion *Auto Current Range Setup* ab 2 A). Ein Start in einem empfindlichen Bereich mit „Auto“ kann ihn überlasten und beschädigen (Softwarehandbuch, Hinweis zu Current Range).
- **Leave Cell On** ist gefährlich zwischen einer potentiostatischen und einer galvanostatischen Aktion, zwischen einer EIS- und einer DC-Aktion oder zwischen galvanostatischen Aktionen in unterschiedlichen Strombereichen: Das Umschalten kann Stromspitzen in Ihre Zelle schicken.
- Setzen Sie Spannungs- und Strom-**Sicherheitsgrenzen** unter *Common* — sie stoppen die gesamte Sequenz bei Überschreitung.

## Hinweise zur Softwarekonfiguration (Labor-PC)

- Windows-Energieplan: nie in den Ruhezustand, Ein/Aus-Taste ohne Funktion, Schnellstart aus — sonst können lange Experimente Daten verlieren (Softwarehandbuch, §3.3).
- Nach einem Software-Update fordert VersaStudio eventuell ein Firmware-Update an: Lassen Sie es ohne Unterbrechung abschließen und führen Sie dann an jedem Kanal *Calibrate for best DC accuracy* aus.
