---
title: MBraun EasyLab Glovebox
description: So nehmen Sie die MBraun EasyLab Glovebox in Betrieb, schleusen Material über die Schleuse ein und aus und hinterlassen die Box in einem sicheren Zustand.
translation: machine
---

# MBraun EasyLab Glovebox

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Handhabung luft- und feuchtigkeitsempfindlicher Materialien (Sulfidelektrolyte, Li-Metall, Li₂S, P₂S₅) unter Argon |
| **Atmosphäre** | Argon, gereinigt durch einen Cu-Katalysator und Molekularsieb; O₂- und H₂O-Sensoren messen 0–1000 ppm bzw. 0–500 ppm |
| **Einweisung** | Erforderlich. Vor der Buchung die Glovebox-Prüfung bestehen |
| **Buchung** | [Gerät buchen](../booking.md) |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#glovebox) |

</div>

!!! danger "Bevor Sie beginnen"
    - Tragen Sie Laborkittel, Schutzbrille und **Nitrilhandschuhe über den Butylhandschuhen der Box**, wann immer Sie im Inneren mit Chemikalien arbeiten.
    - Bringen Sie niemals einen offenen Lösungsmittelbehälter unter Vakuum in die Schleuse. Geschlossene Lösungsmittelflaschen erfordern das Halbvakuum-Verfahren (Schritt 9).
    - Wenn der O₂- oder H₂O-Wert hoch ist, hören Sie auf und informieren Sie die Laborleitung. Öffnen Sie keine empfindlichen Materialien.

## Unsere Glovebox { #our-glovebox }

![Unsere MBraun EasyLab: Hauptkammer, Bedienfeld und Schleuse rechts, Reiniger und Vakuumpumpe darunter, Fußpedale am Boden](../assets/img/gb-overview.jpg){ loading=lazy }

<div class="photo-grid" markdown>

<figure markdown>
![Bedienfeld im ECO-Modus, so finden und hinterlassen Sie die Box (eco-LED grün)](../assets/img/gb-panel-eco.jpg){ loading=lazy }
<figcaption>Bedienfeld im ECO-Modus, so finden und hinterlassen Sie die Box (eco-LED grün)</figcaption>
</figure>

<figure markdown>
![Schleuse: Manometer oben und die Ventilschilder REFILL (Argon) und EVACUATE (Vakuum)](../assets/img/gb-antechamber.jpg){ loading=lazy }
<figcaption>Schleuse: Manometer oben und die Ventilschilder REFILL (Argon) und EVACUATE (Vakuum)</figcaption>
</figure>

<figure markdown>
![Außentür: die Schleuse nicht öffnen, solange sie evakuiert ist](../assets/img/gb-door.jpg){ loading=lazy }
<figcaption>Außentür: die Schleuse nicht öffnen, solange sie evakuiert ist</figcaption>
</figure>

<figure markdown>
![Magnetische Umwälzventile unter der Box: ihre Kolben müssen OBEN stehen](../assets/img/gb-circ-valves.jpg){ loading=lazy }
<figcaption>Magnetische Umwälzventile unter der Box: ihre Kolben müssen OBEN stehen</figcaption>
</figure>

<figure markdown>
![Fußpedale: links = LOW PRESSURE, rechts = HIGH PRESSURE](../assets/img/gb-pedals.jpg){ loading=lazy }
<figcaption>Fußpedale: links = LOW PRESSURE, rechts = HIGH PRESSURE</figcaption>
</figure>

</div>

## Bedienfeld { #control-panel }

![Das EasyLab-Bedienfeld in unserem Labor](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| Element | Funktion |
|---|---|
| **pressure mbar** (obere Anzeige) | Überdruck der Box gegenüber dem Raum, in mbar. Normalerweise ein kleiner Überdruck: im ECO-Modus wird die Box auf +2 bis +6 mbar gehalten. Während der Regeneration zeigt sie weiterhin den Boxdruck. |
| **O₂ ppm** und **H₂O ppm** | Sauerstoff und Wasser im Argon. Während der Regeneration zeigen sie stattdessen die Stufe und die Restminuten. |
| Drehknöpfe **Min.set** / **Max.set** | Unter- und Obergrenze der Druckregelung der Box. **Nicht verstellen.** |
| **circ** | Umwälzung des Argons durch den Reiniger. Muss **immer eingeschaltet sein**, außer während der Regeneration. **Bekannter Fehler:** Die circ-LED unserer Box leuchtet nur sehr schwach und kann aus wirken, obwohl die Umwälzung läuft. Prüfen Sie stattdessen die Kolben der Umwälzventile: **OBEN = Umwälzung an**. Stehen sie unten, die Laborleitung informieren. |
| **reg** / **reg abort** | Regeneration des Katalysators starten / abbrechen (reg abort nur in den ersten Stufen). Nur die Laborleitung. |
| **pump** | Vakuumpumpe. Muss an sein, um die Schleuse zu evakuieren. |
| **ana** | O₂- und H₂O-Analysatoren. Eingeschaltet lassen. |
| **light** | Boxbeleuchtung. |
| **purge** | Spült die Box mit Argon, um O₂/H₂O zu senken. Nur auf Anweisung der Laborleitung. |
| **eco** | Standby: die Pumpe läuft nur, wenn die Box Argon braucht, das Licht geht aus, Druck +2 bis +6 mbar. Die Box nach der Arbeit im ECO-Modus lassen. |

!!! warning "Bekannter Fehler: schwache circ-LED"
    Die **circ**-LED unserer Glovebox ist defekt: Sie leuchtet immer, wenn die Umwälzung läuft, aber so schwach, dass sie aus wirkt. Beurteilen Sie die Umwälzung nie nach dieser LED — die Prüfung sind die Kolben der Umwälzventile unter der Box (**OBEN = an**).

!!! tip "So sieht der normale Arbeitszustand aus"
    Druck einige mbar (hier 2,7), O₂ und H₂O unter 1 ppm (hier 0,5), LEDs von **pump**, **ana** und **light** an. Die **circ**-LED wirkt auf dem Foto dunkel, weil sie defekt ist und nur sehr schwach leuchtet — prüfen Sie stattdessen die Kolben.

## Vorführung { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. **Prüfen Sie die Box im vorgefundenen Zustand.** Sie sollte im **ECO**-Modus sein, beide Schleusentüren geschlossen, die Schleuse unter vollem Vakuum (Manometer ≈ −94 kPa) und alle Ventile geschlossen. Lesen Sie die O₂- und H₂O-Werte auf der Sensoranzeige ab.
2. **Aktivieren Sie die Box.** Drücken Sie einmal **ECO**, um den ECO-Modus zu verlassen, und einmal **PUMP**. **LIGHT** können Sie jederzeit ein- oder ausschalten.
3. **Prüfen Sie die Zirkulation.** Argon muss immer durch den Katalysator zirkulieren (außer während der Regeneration). Die **CIRC**-LED dieser Box ist defekt und leuchtet nur sehr schwach; verlassen Sie sich nicht darauf, sondern prüfen Sie die Kolben der magnetischen Zirkulationsventile auf dem Reiniger unter der Box (siehe Foto oben). Sie müssen **OBEN** sein. Stehen sie unten, informieren Sie die Laborleitung, bevor Sie empfindliches Material öffnen.
4. **Bringen Sie die Schleuse auf Argon.** Öffnen Sie langsam das **Argon-(Füll-)Ventil**, das die Schleuse mit der Hauptkammer verbindet. Beobachten Sie, wie das Manometer von −94 kPa auf 0 kPa steigt, und schließen Sie das Ventil.
5. **Laden Sie Ihre Gegenstände.** Öffnen Sie die **Außentür**, legen Sie die Gegenstände in die Schleuse und schließen Sie die Außentür. Flüssigkeitsbehälter bleiben geschlossen; Pulver und Feststoffe dürfen offen oder mit lockerem Deckel sein.
6. **Evakuieren (Zyklus 1).** Prüfen Sie, dass beide Türen und das Argonventil geschlossen sind. Öffnen Sie langsam das **Vakuumventil**, bis das Manometer −94 kPa anzeigt, halten Sie das Vakuum **15 min** und schließen Sie das Ventil.
7. **Mit Argon fluten.** Öffnen Sie langsam das Argonventil, bis das Manometer wieder 0 kPa anzeigt, und schließen Sie es.
8. **Wiederholen** Sie Evakuieren–Halten–Fluten, bis insgesamt **3 Zyklen** erreicht sind. Poröse oder voluminöse Gegenstände (Fasern, Papier, Schäume) lässt man am besten über Nacht unter Vakuum und fährt danach einen vollständigen Zyklus.
9. **Sonderfall — geschlossene Lösungsmittelflaschen.** Eine geschlossene Flasche kann unter vollem Vakuum platzen. Evakuieren Sie nur bis zum **Halbvakuum** (≈ −47 kPa), warten Sie einige Minuten, fluten Sie und wiederholen Sie dies **mindestens 10-mal**.
10. **Gegenstände einbringen.** Nach dem letzten Fluten (Manometer 0 kPa, beide Ventile geschlossen) greifen Sie in die Handschuhe, öffnen die **Innentür**, holen die Gegenstände in die Hauptkammer und schließen die Innentür.
11. **Bequem arbeiten.** Die Box regelt ihren Druck selbst. Sind die Handschuhe zu straff oder zu schlaff, erhöhen (+) oder senken (−) Sie den Kammerdruck mit den **Fußpedalen**. Linkes Pedal = **LOW PRESSURE**, rechtes Pedal = **HIGH PRESSURE**.
12. **Sitzung beenden.** Beseitigen Sie Verschüttetes, reinigen Sie die Handschuhe **nur mit Ethanol**, schließen Sie Innen- und Außentür und evakuieren Sie die Schleuse bei offenem Vakuumventil **mindestens 5 min**.
13. **Hinterlassen Sie die Box wie vorgefunden.** Schließen Sie das Vakuumventil (das Manometer bleibt bei ≈ −94 kPa), prüfen Sie, dass alle Ventile geschlossen sind, drücken Sie einmal **ECO** und bestätigen Sie, dass die Zirkulationskolben **OBEN** sind.

</div>

## Material ausschleusen { #taking-material-out }

1. Ist die Schleuse unter Vakuum, fluten Sie sie langsam mit Argon auf 0 kPa und schließen Sie das Argonventil.
2. Öffnen Sie die Innentür, stellen Sie die Gegenstände hinein und schließen Sie die Innentür.
3. Öffnen Sie die Außentür, entnehmen Sie die Gegenstände und schließen Sie die Außentür.
4. Evakuieren Sie die Schleuse, spülen Sie einmal mit Argon, evakuieren Sie erneut und lassen Sie sie mit allen Ventilen geschlossen unter Vakuum.

## Was der Box schadet { #things-that-damage-the-box }

!!! warning "Katalysatorgifte"
    Der Kupferkatalysator wird durch **Schwefelverbindungen und Säuren irreversibel vergiftet**, und auch das Molekularsieb adsorbiert H₂S und Lösungsmitteldämpfe, wenn der Aktivkohlefilter gesättigt ist (Laboranleitung *Guía MBraun EasyLab*, Rev. 07-2022). Sulfidelektrolyte (Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄) setzen mit Spuren von Feuchtigkeit H₂S frei. Halten Sie Sulfidbehälter geschlossen, wenn sie nicht benutzt werden, lassen Sie Sulfidpulver nie über Nacht offen stehen und notieren Sie, welche Chemikalien Sie in der Box verwenden, damit sich ein Verlust der O₂-Aufnahmekapazität zurückverfolgen lässt.

!!! note "Lösungsmittel"
    Flüchtige Lösungsmittel (Ethanol, Acetonitril, THF …) belasten den Aktivkohlefilter und können die Sensoren driften lassen. Verwenden Sie möglichst kleine Mengen und halten Sie Flaschen geschlossen. Fragen Sie die Laborleitung, ob die Zirkulation während der Arbeit mit offenen Lösungsmitteln abgeschaltet werden soll — die aktuellen Laborverfahren sagen dazu nichts.

## Regeneration und Sensoren (nur Laborleitung)

Die Regeneration von Katalysator/Molekularsieb (16 Stufen, ca. 960 min, Formiergas Ar/H₂ bei ~15 L/min) und die Wartung des H₂O-Sensors (Neubeschichtung mit 85 % H₃PO₄ alle ~2000 h) werden ausschließlich von der Laborleitung gemäß der Laboranleitung durchgeführt.

!!! question "Mit der Laborleitung zu klären"
    Die beiden Labordokumente widersprechen sich beim Schleusenzyklus. Die englischen Einführungsfolien sagen *„volles Vakuum mindestens 5 min, bevor der Druck abgelassen wird“*; die spanische Laboranleitung sagt **3 Vakuumzyklen mit je 15 min Haltezeit** (oder 45 min im „aktiven“ Modus). Diese Anleitung verwendet den strengeren Zyklus 3 × 15 min. Bitte bestätigen Sie, was im Labor gilt.

## Handbücher

- Laboranleitung: *Guía MBraun EasyLab* (Spanisch, Rev. 07-2022) — Laborkopie.
- Laborfolien: *MBraun EasyLab Glovebox — Operation start guide* — Laborkopie.
- Hersteller: [MBraun-EASYlab-Produktseite](https://shop.mbraun.de/ENU/28934/EASYlab.html).
