---
title: Anton Paar Monowave 400 R
description: Eine Mikrowellensynthese im geschlossenen Vial am Monowave 400 R durchführen, optional mit In-situ-Raman-Überwachung über das Cora 5001.
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Flüssigphasensynthese in geschlossenen Vials mit Magnetrührung unter Temperatur- und Druckkontrolle, z. B. Lösungswege zu Sulfidelektrolyten |
| **Grenzen** | Bis **300 °C** und **30 bar**; ein 850-W-Magnetron; Rühren bis 1200 rpm |
| **Besonderheit** | Die „R“-Version nimmt eine **faseroptische Raman-Sonde des Cora 5001** für In-situ-Spektren während der Reaktion auf (Laser Klasse 3B) |
| **Benötigt** | Druckluft mit **5,5–6 bar** für korrekte Druckmessung und Vialabdichtung |
| **Einweisung** | Erforderlich. Laserschutzunterweisung für Raman-Messungen erforderlich |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#monowave) |

</div>

### Reaktionsvials

| Vial | Volumen | Füllvolumen | T max. | p max. | Zeit max. |
|---|---|---|---|---|---|
| G4 (Glas) | 4 mL | 0,5–2 mL | 250 °C | 30 bar | 100 h |
| **G10** (Glas) | 10 mL | **2–6 mL** | 300 °C | 30 bar | 100 h |
| **G30** (Glas) | 30 mL | **6–20 mL** | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10 (SiC) | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck (SiC) | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>Aus der Reference Guide des Monowave 400 R (E07IB012EN-C), Tabelle 1. Für Raman-Experimente gelten die kürzeren Zeitgrenzen aus deren Anhang C. G4- und SiC-Vials können **nicht** mit der Raman-Sonde verwendet werden.</small>

!!! danger "Bevor Sie beginnen"
    - **Laser Klasse 3B.** Deaktivieren Sie die Raman-Sonde (Stop-Taste an der Sonde), bevor Sie die Führungsschiene oder die Sonde bewegen, und blicken Sie nie in Sonde oder Faser.
    - Wählen Sie immer den **tatsächlich verwendeten Vialtyp**. Ein falscher Vialtyp liefert falsche Temperatur-/Druckwerte und kann das Vial bersten lassen.
    - Halten Sie das Mindestfüllvolumen ein: Der IR-Sensor misst die Vialwand ~1 cm über dem Boden.
    - Wenn Sie nicht wissen, wie sich Ihre Reaktion verhält, beginnen Sie mit kleinen Mengen und maximaler Verdünnung.
    - Das Gerät ist **nicht säurebeständig**; korrosive Reagenzien verkürzen seine Lebensdauer (Kurzanleitung).
    - Luftempfindliche Reaktionen: Vial **in der Glovebox** befüllen und verschließen. Entlüftet ein Vial, trägt das Abgas Reaktionsdämpfe mit (in der Sulfidchemie möglicherweise H₂S) — die Abluft muss in die Absaugung gehen.

## Unser Aufbau { #our-set-up }

<figure markdown>
![Unser Monowave 400 R (links) und Cora 5001 (rechts). Der Druckluftregler ist links; Laserschutzbrillen liegen neben dem Cora.](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>Unser Monowave 400 R (links) und Cora 5001 (rechts). Der Druckluftregler ist links; Laserschutzbrillen liegen neben dem Cora.</figcaption>
</figure>

## Vorführung { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. **Prüfen Sie die Druckluft.** Die Versorgung muss vor dem Start 5,5–6 bar betragen.
2. **Befüllen Sie das Vial.** Geben Sie einen passenden Rührfisch in ein G10- (2–6 mL) oder G30-Vial (6–20 mL) und fügen Sie die Reaktionsmischung hinzu.
3. **Verschließen Sie das Vial.** Legen Sie das Septum mit der **PTFE-Seite zur Reaktionsmischung** in die Schnappkappe und drücken Sie die Kappe auf, bis sie sich beim Zusammendrücken des Randes nicht mehr löst. Silikonseptum: Läufe unter 4 h. PTFE-Scheibe + PTFE-Septum: Läufe über 4 h (das PTFE-Septum ist ein Einwegteil).
4. **Programmieren Sie das Experiment.** Tippen Sie am Touchscreen auf **Task List**, tippen Sie auf die letzte Zeile, benennen Sie das Experiment, wählen Sie **Standard** und legen Sie die Schritte fest (Aufheizen, Halten, Abkühlen). Die Abkühltemperatur (30–70 °C) sollte etwa 10 °C unter dem Siedepunkt Ihres Lösungsmittels liegen. **Wählen Sie den verwendeten Vialtyp** und tippen Sie auf OK.
5. **Positionieren Sie die Raman-Sonde.** Bei **deaktiviertem** Laser bewegen Sie die Führungsschiene in die Position **G10** (innerste) oder **G30** (mittlere) oder auf **idle** (äußerste), wenn Sie kein Raman aufnehmen. Prüfen Sie, dass ein leeres, offenes Vial Ihrer Größe widerstandslos in den Hohlraum passt.
6. **Setzen Sie das Vial ein.** G4-, G10- und C10-Vials benötigen den **Adapterring** (Polyimidseite nach oben) auf dem Hohlraumeinsatz; G30-Vials werden direkt eingesetzt.
7. **Starten.** Tippen Sie auf **Start**. Mit eingesetztem Blindstopfen (ohne Ruby-Thermometer) startet der Lauf und der Drehdeckel schließt sich.
8. **Starten Sie die Raman-Messung** am Cora 5001 erst, **nachdem sich der Deckel geschlossen hat** (siehe [Cora-5001-Anleitung](cora.md)).
9. **Überwachen** Sie Temperatur, Druck, Leistung und Rühren auf dem Hauptbildschirm. Ein laufendes Experiment können Sie durch Antippen seiner Widgets bearbeiten.
10. **Stoppen.** Am Ende — oder zum vorzeitigen Stoppen — **stoppen Sie zuerst die Raman-Messung und deaktivieren den Laser**, dann (zum vorzeitigen Stoppen) tippen Sie auf **Stop → Yes**. Das Gerät kühlt das Vial ab und öffnet den Deckel, sobald es sicher ist.
11. **Vial entnehmen und öffnen.** Entnehmen Sie das Vial vorsichtig. Öffnen Sie es mit dem Verschlusswerkzeug wie mit einem Flaschenöffner (vorsichtig, wenn ein Tauchrohr eingebaut ist).
12. **Daten exportieren.** Menu ▸ Data Memory ▸ Browse Results ▸ auswählen ▸ Export auf USB (.pdf, .csv, .xls, .raw, .png). Das Gerät speichert bis zu 1000 Ergebnisse.

</div>

## Gut zu wissen

- **Temperatursensoren.** Der eingebaute IR-Sensor (±5 °C) misst die Vialwand. Das optionale faseroptische Ruby-Thermometer (±2 °C) misst in der Mischung und ist besser für exotherme Reaktionen oder schwach absorbierende Lösungsmittel — kann aber **nicht zusammen mit der Raman-Sonde** und nicht bei Läufen über 4 h verwendet werden.
- **Schwach absorbierende Lösungsmittel** (z. B. Toluol, Hexan) heizen sich schlecht auf; das Gerät kann die Leistung reduzieren und die Solltemperatur nie erreichen. Stark absorbierende Lösungsmittel in G4-Vials können überschießen: Leistung begrenzen oder „Heat to temperature in time“ verwenden.
- **Ohne Raman:** Sonde auf idle stellen und den unveränderten Hohlraumeinsatz einsetzen, damit ein Vialbruch die Sonde nicht beschädigen kann.

## Verwandtes

- In-situ-Raman während der Flüssigphasensynthese von Sulfidelektrolyten: siehe [Referenzen](../references.md#group-publications).
