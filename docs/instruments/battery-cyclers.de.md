---
title: Neware-Batteriezyklierer
description: Den passenden Neware-Zyklierer und Strombereich für eine Zelle wählen, eine Schrittdatei in BTS schreiben, einen Kanal starten und Daten exportieren.
translation: machine
---

# Neware-Batteriezyklierer (CT-4008, CT-4008T, CT-5008, CT-9008)

## Welcher Zyklierer für welche Zelle?

Der Zyklierer muss Ihren Strom genau **einprägen und messen** können. Die Genauigkeit wird in Prozent des **Messbereichsendwerts** angegeben; ein kleiner Strom in einem großen Bereich ist daher ungenau.

| Gerät | Spannung | Strombereiche | Genauigkeit (Strom) | Geeignet für |
|---|---|---|---|---|
| **CT-9008-5V6A-F** | −5 bis +5 V | 0,1–180 µA · 180 µA–6 mA · 6–180 mA · 0,18–6 A | ±36 nA · ±1,2 µA · ±36 µA · ±1,2 mA | **Festkörper-Mikrozellen, Knopfzellen bei niedriger C-Rate** |
| CT-5008-5V12A-TF | −3 bis +5 V | 0,12–120 mA · 0,12–1,2 A · 1,2–12 A | ±0,02 % v. E. (±24 µA im kleinsten Bereich) | Knopf- und Pouchzellen ab ~1 mA |
| CT-4008Q-5V12A-S1 | 25 mV–5 V (Entladung min. 2 V mit Universalhalter) | 0,2–100 mA · 0,1–0,5 A · 0,5–6 A · 6–12 A | ±0,02 % v. E. | Größere Zellen; **nicht** für Zellen, die unter 2 V entladen werden |
| CT-4008T-5V12A-S1-F | −1 bis 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0,05 % v. E. | Zellen, die ≥ 5 mA benötigen |

<small>Aus den Neware-Datenblättern in den Labordateien. v. E. = vom Endwert.</small>

### Den Strom wählen { #choosing-the-current }

1. Schätzen Sie die Kapazität ab: *Q* (mAh) = Aktivmasse (g) × erwartete spezifische Kapazität (mAh g⁻¹).
2. Strom für eine C-Rate *n*: *I* = *n* × *Q* (mA, wenn *Q* in mAh).
3. Wählen Sie Gerät und Bereich, dessen kleinster Bereich *I* mit akzeptablem Fehler **enthält** (Ziel < 1 % von *I*).

*Beispiel:* Die [Festkörper-Testbatterie](../cells/solid-state-battery.md) hat ≈ 0,57 mAh → 0,1 C ≈ 57 µA → **CT-9008, Bereich 1** (Fehler ±36 nA ≈ 0,06 %). An einem CT-4008/5008 liegt derselbe Strom unter dem kleinsten Bereich, und die Genauigkeit (±20–24 µA) beträgt etwa 40 % des Stroms.

## Vorführung — BTS-Software

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. **Wählen Sie das Gerät** in der Geräteliste (hier den CT-9008 für eine Mikrozelle) und suchen Sie einen freien Kanal. Buchen Sie den Kanal vorher auf der [Buchungsseite](../booking.md).
2. **Schließen Sie die Zelle** an den Kanal an (4-Leiter-Kelvin-Klemmen: beide roten an die positive Elektrode, beide schwarzen an die negative). Das Kanalfeld zeigt die Leerlaufspannung; warten Sie, bis sie stabil ist.
3. **Rechtsklick auf den Kanal ▸ Single start.**
4. **Schrittdatei schreiben oder laden.** Typisch: *Rest* (OCV) → *CC-Laden* (Strom, obere Abschaltspannung) → *Rest* → *CC-Entladen* (Strom, untere Abschaltspannung) → *Cycle* zu Schritt 2, *N*-mal → *End*. Setzen Sie **Schutzgrenzen** (obere und untere Spannung) knapp außerhalb Ihrer Abschaltspannungen. Die Schrittnamen unterscheiden sich leicht zwischen BTS-Versionen (z. B. CC_Chg / CCC, CC_DChg / CCD).
5. **Testinformationen eingeben**: einen eindeutigen Namen/Barcode (Initialen, Zelltyp, Datum, Nummer), die **Aktivmasse**, damit Kapazitäten in mAh g⁻¹ angegeben werden, und die Schrittdatei. Drücken Sie **Start**.
6. **Prüfen Sie den Start**: Das Feld wechselt zu *working* und zeigt Schritt, Spannung und Strom. Beobachten Sie die ersten Minuten — ein falsches Vorzeichen oder eine Spannung an der Grenze deuten auf einen Anschluss- oder Schrittfehler hin.
7. **Daten ansehen**: Rechtsklick ▸ View data öffnet **BTSDA**, wo Sie V über t und Kapazität über Zyklus darstellen und **nach Excel exportieren**.
8. **Beenden**: Der Test endet bei *End*, oder Rechtsklick ▸ **Single stop**. Trennen Sie die Zelle und geben Sie Ihre Buchung frei.

</div>

!!! warning "Bevor Sie einen Kanal starten"
    - Starten Sie nie einen Kanal, den jemand anderes gebucht hat oder der *working* / *pause* anzeigt.
    - Geben Sie Spannungen in BTS **gegen Ihre Gegenelektrode** ein. Bei einer Li–In-Anode ziehen Sie ≈ 0,6 V von Grenzwerten ab, die gegen Li⁺/Li angegeben sind.
    - Festkörperzellen benötigen während des gesamten Tests Stapeldruck — lockern Sie die Zelle nicht zwischen den Schritten.
