---
title: Mettler Toledo C20S Karl-Fischer-Coulometer
description: Den Wassergehalt von Lösungsmitteln mit dem coulometrischen Karl-Fischer-Titrator Mettler Toledo C20S messen, einschließlich einer Prüfung mit einem 1-%-Wasserstandard.
translation: machine
---

# Mettler Toledo C20S coulometrischer Karl-Fischer-Titrator

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Spurenwasser in Flüssigkeiten — z. B. prüfen, ob Ethanol, Acetonitril oder THF trocken genug für die Flüssigphasensynthese von Elektrolyten sind |
| **Prinzip** | Iod wird an der Generatorelektrode elektrochemisch erzeugt und reagiert mit Wasser; die benötigte Ladung ergibt die Wassermasse |
| **Zelle** | Generatorelektrode (mit oder ohne Diaphragma, **blauer Stecker**), Doppelplatin-Indikatorelektrode, Trockenrohr, Septum, Magnetrührer |
| **Einweisung** | Erforderlich |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#karl-fischer) |

</div>

!!! danger "Sicherheit"
    KF-Reagenzien enthalten Methanol oder andere Alkohole, Iod, SO₂ und eine Base: giftig und brennbar. Tragen Sie Handschuhe und Schutzbrille, befüllen und leeren Sie die Zelle im Abzug und entsorgen Sie verbrauchtes Reagenz in dem Abfallbehälter, den das Labor für KF-Reagenz vorsieht.

## Vorführung { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. **Zelle prüfen.** Die Zelle ist mit Reagenz gefüllt, beide Elektroden sind angeschlossen (Generator = **blauer Stecker**), das Trockenrohr enthält frisches Trockenmittel und alle Stopfen und Schliffe sitzen fest — Undichtigkeiten lassen Raumfeuchte eindringen.
2. **Titrator einschalten.**
3. **Methode vorbereiten (nur beim ersten Mal).** Methods ▸ New ▸ Standard method template ▸ **KF Coul** ▸ Sample: *Entry type* auf **Weight** setzen ▸ OK ▸ Save. Tippen Sie auf dem Startbildschirm auf **AddToHome**, um eine Verknüpfung anzulegen (*Immediate start* aktivieren).
4. **Vortitration.** Tippen Sie auf Ihre Verknüpfung. Der Titrator entfernt das bereits im Reagenz enthaltene Wasser; der Rührer muss laufen. Warten Sie, während die Drift abnimmt.
5. **Standby.** Ist die Drift niedrig und stabil, wechselt der Titrator in **Standby** und **Start sample** wird aktiv.
6. **Probenspritze vorbereiten.** Füllen Sie eine Spritze mit der Probe (oder mit dem **1-%-KF-Wasserstandard** zur Systemprüfung), legen Sie sie auf die Waage und **tarieren** Sie.
7. **Injizieren.** Tippen Sie auf **Start sample**, stechen Sie die Nadel so durch das Septum, dass die Spitze unter der Reagenzoberfläche liegt — ohne die Elektroden zu berühren — und injizieren Sie (0,5–1,0 mL des 1-%-Standards).
8. **Rückwägen.** Legen Sie die Spritze zurück auf die Waage und geben Sie die angezeigte **Probenmasse** ein (den negativen Wert ohne Vorzeichen). Die Titration läuft.
9. **Ergebnis ablesen** (R1, Wassergehalt). Der 1-%-Standard sollte ≈ 10 mg g⁻¹ innerhalb der Zertifikatstoleranz ergeben; falls nicht, prüfen Sie Reagenz und Drift, bevor Sie Proben messen.
10. **Stoppen.** Tippen Sie auf **Stop analysis**, um die aktuelle Analyse zu stoppen, oder auf **More ▸ End series**, um die Serie zu beenden.

</div>

## Gute Praxis

- Messen Sie jeden Tag **zuerst den Standard**, dann Ihre Proben. Messen Sie jede Probe mindestens dreifach.
- Spülen Sie die Spritze vor dem Befüllen mit der Probe; verwenden Sie eine trockene, verschlossene Spritze.
- Wechseln Sie das Reagenz, wenn die Drift hoch bleibt, das Ergebnis des Standards wegdriftet oder die Zelle voll wird.
- Pflege der Generatorelektrode: leeren, mit Methanol spülen, mit einem fusselfreien Tuch abwischen und mehrere Stunden bei 70–80 °C trocknen (Handbuch §7).

!!! warning "Keine sulfidhaltigen Proben injizieren"
    Sulfide, H₂S und Thiole reagieren mit Iod und ergeben **falsch hohe** Wasserwerte; außerdem verbrauchen sie das Reagenz. Verwenden Sie diesen Titrator für **Lösungsmittel und Flüssigkeiten**. Wasser in Sulfidelektrolytpulvern lässt sich nicht durch Direktinjektion messen — besprechen Sie Alternativen mit der Laborleitung.
