---
title: Anton Paar Cora 5001
description: Ein Raman-Spektrum einer versiegelten Probe mit dem faseroptischen Cora-5001-Spektrometer messen und es zur In-situ-Überwachung im Monowave 400 R einsetzen.
translation: machine
---

# Anton Paar Cora 5001 Raman-Spektrometer

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Raman-Spektren von Pulvern, Flüssigkeiten und Reaktionsmischungen; In-situ-Reaktionsüberwachung im [Monowave 400 R](monowave.md) |
| **Laborversion** | **Cora 5001 Fiber**: Laser und Raman-Signal laufen über eine Fasersonde. Prüfen Sie die Anregungswellenlänge auf dem Typenschild (532, 785 oder 1064 nm, oder Dual) |
| **Laser** | **Klasse 3B** mit Fasersonde — auch wenn die Sonde in ihrer Dockingstation steckt |
| **Einweisung** | Erforderlich, einschließlich Laserschutzunterweisung |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#cora) |

</div>

!!! danger "Laser Klasse 3B"
    - Blicken Sie nie in die Sondenspitze oder ein Faserende und richten Sie die Sonde nie auf Personen oder spiegelnde Oberflächen.
    - Tragen Sie eine Laserschutzbrille für die verwendete Wellenlänge, wann immer die Sonde nicht eingehaust ist.
    - Öffnen der Probenkammer oder des Faseranschlusses, Drücken von **Stop** an der Sonde oder Auslösen der Verriegelung schaltet den Laser sofort ab.

## Vorführung { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. **Einschalten** am Schalter auf der Rückseite. Warten Sie etwa **15 min** auf den Temperaturausgleich; Sie können während des Aufwärmens messen, aber die Einstellungen sind bis zum Ende gesperrt.
2. **Melden Sie sich** mit Ihrem Benutzerkonto **an**.
3. **Probe vorbereiten.** Luftempfindliche Pulver kommen in ein **versiegeltes Glasvial, befüllt in der Glovebox**. Klopfen Sie das Vial leicht auf den Tisch, um das Pulver zu verdichten und Lufteinschlüsse zu entfernen.
4. **Dockingstation beladen.** Lösen Sie die Feststellschraube und schieben Sie die Sonde bis zum hinteren Anschlag zurück. Setzen Sie den Vialhalter mit Ihrem Vial in die Station und schließen Sie den Deckel.
5. **Laser freigeben.** Drücken Sie **Enable** an der Sonde (oder die Rücksetztaste der Geräteverriegelung). Die LED **Ready** leuchtet.
6. **Fokussieren.** Öffnen Sie **Adjust Focus** und tippen Sie auf **Start** für ein Live-Spektrum. Schieben Sie die Sonde zur Probe, bis das Signal maximal ist, **ziehen Sie die Feststellschraube fest** und tippen Sie auf **Stop**. Der Fokus liegt wenige Millimeter vor der Sondenspitze.
7. **Messung einrichten.** Menu ▸ **Single Measurement**: Probenname eingeben, Wellenlänge (Dual-Laser-Geräte) und Laserleistung wählen (532 nm: an = 50 mW; 785/1064 nm: 0–450 mW, mindestens 50 mW empfohlen). **Auto Exposure** (max. 10 s) ist ein guter erster Versuch.
8. **Erweiterte Einstellungen (optional).** Untergrund aufnehmen (entfernt Raumlicht), N Spektren mitteln, um Rauschen zu verringern, Entfernung kosmischer Strahlen (erfordert N ≥ 3; bei fluoreszierenden Proben ausschalten) und Basislinienkorrektur für Fluoreszenz.
9. **Messen.** Tippen Sie auf **Measure**. Das Spektrum erscheint und wird unter dem Probennamen gespeichert; die Software weist auf mögliche Qualitätsprobleme hin.
10. **Speichern und exportieren.** Exportieren oder drucken Sie das Spektrum oder verwenden Sie **Save as method**, um dieselben Einstellungen später zu wiederholen. **Stop** an der Sonde bricht die Messung ab und sperrt den Laser.
11. **Beenden.** Entnehmen Sie Ihre Probe und schalten Sie das Gerät am rückseitigen Schalter aus (Daten werden beim Ausschalten gespeichert).

</div>

## Tipps für Batteriematerialien

- **Verwenden Sie die geringste Laserleistung, die ein brauchbares Signal liefert.** Dunkle Proben (kohlenstoffhaltige Komposite, NMC) absorbieren stark und können sich lokal erwärmen oder zersetzen, besonders bei 532 nm. Nehmen Sie zwei Spektren nacheinander an derselben Stelle auf: Unterscheiden sie sich, reduzieren Sie die Leistung.
- **Glas liefert Signal.** Nehmen Sie das leere Vial mit *genau* denselben Einstellungen auf (Fokus, Leistung, Belichtung — Auto Exposure aus) und verwenden Sie es als **eigenen Blindwert** zur Subtraktion.
- **Fluoreszenz** ergibt einen breiten, ansteigenden Untergrund; eine längere Wellenlänge (785 oder 1064 nm) verringert sie.
- **Inhomogene Proben:** an mehreren Stellen messen.
- Schirmen Sie Sondenspitze und Probe gegen Raumlicht ab; Leuchtstofflampen erzeugen scharfe Linien, die wie Raman-Banden aussehen.

## In-situ-Raman im Monowave 400 R

Ist die Sonde in der Führungsschiene des Monowave 400 R montiert, folgen Sie der [Monowave-Anleitung](monowave.md): Stellen Sie die Sondenposition für die Vialgröße **bei gesperrtem Laser** ein, starten Sie die Raman-Messung erst, wenn sich der Drehdeckel geschlossen hat, und stoppen Sie die Raman-Messung und sperren Sie den Laser, **bevor** Sie den Mikrowellenlauf stoppen. Verwenden Sie für eine Reaktion eine **Zeitreihe** (siehe Cora-Referenzhandbuch) und normieren Sie auf eine Bande, die sich nicht ändert, z. B. eine Lösungsmittelbande.
