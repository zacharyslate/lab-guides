---
title: Argolab-Trockenschrank
description: Bedienung des Argolab-Trockenschranks (Giorgio Bormac) der Serie TCN/TCF Plus — PROG 0 für einen einfachen Sollwert, mehrstufige Programme und was hinein darf und was nicht.
translation: machine
---

# Argolab-Trockenschrank (Serie TCN / TCF Plus)

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Trocknen von Glasgeräten, Werkzeugen und luftstabilen Pulvern; Trocknen von Zellteilen, bevor sie in die Glovebox-Schleuse kommen |
| **Bereich** | Bis +300 °C (Modelle TCN-50/115/200 und TCF Plus; TCN-30 Plus: +200 °C). Prüfen Sie das Typenschild am Laborschrank |
| **Regler** | Mikroprozessor: bis zu 7 Programme × 10 Schritte (Temperatur, Zeit, Lüfterdrehzahl bei Umluftmodellen) plus **PROG 0**, ein einstufiges Programm |
| **Handbuch** | *Ovens and Incubators — User manual* (Giorgio Bormac, Rev. 0, 31.05.2021) — [Handbücher](../manuals.md#oven) |

</div>

!!! danger "Was niemals in den Trockenschrank darf"
    - **Brennbare Lösungsmittel** oder damit benetzte Gegenstände, explosive Stoffe oder Luft/Lösungsmittel-Gemische (Brand- und Explosionsgefahr).
    - Materialien, die beim Erhitzen oder Zersetzen **giftige oder brennbare Gase** freisetzen — dazu gehören **Sulfidelektrolyte** (H₂S).
    - Stellen Sie nichts unter den Schrank, decken Sie die Lüftungsöffnungen nicht ab und berühren Sie den Lufteinlass auf der Rückseite während des Betriebs nicht (heiß).

## Vorführung { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. **Prüfen Sie, was Sie trocknen.** Nur Glasgeräte, Werkzeuge und luftstabile, nicht brennbare Materialien (siehe Kasten oben).
2. **Einschalten** mit der Taste ON/OFF. Piept der Schrank und zeigt **end**, ist der Zyklus des vorherigen Nutzers vor dem Ausschalten abgelaufen; drücken Sie eine beliebige Taste, um den Ton abzuschalten.
3. **Programm aufrufen.** Drücken Sie im Standby kurz **SET/PROG**: „PROG“ und seine Nummer blinken. Wählen Sie das Programm mit ▲ / ▼ und bestätigen Sie mit SET/PROG.
4. **Einfacher Sollwert (PROG 0).** Wählen Sie PROG 0 und **halten Sie SET/PROG**, bis nur noch die Nummer blinkt, und drücken Sie SET/PROG erneut zum Bearbeiten. Stellen Sie die Temperatur mit ▲ / ▼ und **SHIFT** (wechselt zwischen den Ziffern) ein, bestätigen Sie und stellen Sie den Timer ein. **Timer 00:00 = läuft, bis Sie START/STOP drücken.**
5. **Mehrstufige Programme (1–7).** Jeder Schritt hat eine Temperatur, eine Zeit und — bei Umluftschränken — eine Lüfterdrehzahl (H/M/L). Um nach Schritt *n* zu enden, setzen Sie die Zeit von Schritt *n* + 1 auf **00:00**.
6. **Beladen** Sie die Einschübe so, dass Luft zirkulieren kann, und schließen Sie die Tür.
7. **Starten** mit **START/STOP**. Die Anzeige zeigt die Kammertemperatur.
8. **Stoppen** mit **START/STOP**, wenn Sie fertig sind. Entnehmen Sie heiße Gegenstände mit hitzebeständigen Handschuhen und schalten Sie den Schrank aus, wenn ihn niemand sonst benutzt.

</div>

!!! note "Glasgeräte für die Glovebox"
    Hier getrocknete Gegenstände nehmen an Raumluft innerhalb von Minuten wieder Feuchtigkeit auf. Bringen Sie sie noch warm direkt vom Schrank in die Glovebox-Schleuse und fahren Sie die Schleusenzyklen wie in der [Glovebox-Anleitung](glovebox.md) beschrieben.

!!! info "Passwortgeschützte Einstellungen"
    Startverzögerung, Programmwiederholung, Probenschutz-Temperaturgrenze, Übertemperaturalarm und Temperatur-Offsets liegen in einem passwortgeschützten Untermenü. Nur die Laborleitung ändert diese.
