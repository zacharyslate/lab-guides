---
title: Büchi Rotavapor R-210
description: So montieren Sie einen dichten Verdampferkolben in der Glovebox und trocknen eine luftempfindliche Suspension am Büchi Rotavapor R-210 mit Umlaufkühler und Vakuumcontroller.
translation: machine
---

# Büchi Rotavapor R-210

<div class="facts" markdown>

| | |
|---|---|
| **Wofür** | Lösungsmittel unter vermindertem Druck entfernen, z. B. die Kathodenkomposit-Suspension (Ethanol + Acetonitril) trocknen |
| **Teile** | **Büchi Umlaufkühler F-105** (Kühlmittel für den Kühler) · **Nahita Digital-Ölbad** mit **Silikonöl** · **R-210** mit Netzschalter, **ROTATION**-Drehknopf (0–10), Neigungsknopf, Combi-Clip und motorischem Lift · senkrechter Kühler und Auffangkolben · **Büchi Vakuum-Controller V-850** auf der **Vakuumpumpe V-700** |
| **Kolben** | Für luftempfindliche Arbeiten: ein Rundkolben, verschlossen mit einem **Ventiladapter (Glashahn)** und einer **Keck-Klemme**, in der Glovebox montiert und verschlossen (Teil 1) |
| **Einweisung** | Erforderlich. Vor der Buchung die Rotavapor-Prüfung bestehen |
| **Handbücher** | [Handbücher und Referenzen](../manuals.md#rotavapor) |

</div>

!!! danger "Sicherheit"
    - Laborkittel, Schutzbrille, Handschuhe und geschlossene Schuhe.
    - Das Silikonölbad kann **180 °C** erreichen. Geben Sie niemals Wasser oder andere Chemikalien in das Bad: Wasser in heißem Öl führt zu heftigem Spritzen (Büchi-Handbuch, §2).
    - Silikonöl dehnt sich beim Erwärmen stark aus. Ein Bad, das kalt halb voll aussieht, ist **nicht** zu niedrig — nicht nachfüllen.
    - Prüfen Sie alle Glasteile vor dem Gebrauch auf Risse oder Sternbrüche: Beschädigtes Glas kann unter Vakuum **implodieren**. Sichern Sie alle Schliffe mit Klemmen.

## Unser Aufbau { #our-set-up }

![Der Aufbau im Abzug: V-850 auf der Pumpe V-700, Kühler, R-210, Nahita-Ölbad](../assets/img/rv-setup.jpg){ loading=lazy }

<div class="photo-grid" markdown>

<figure markdown>
![R-210: Netzschalter und ROTATION-Knopf](../assets/img/rv-r210.jpg){ loading=lazy }
<figcaption>R-210: Netzschalter und ROTATION-Knopf</figcaption>
</figure>

<figure markdown>
![Umlaufkühler F-105](../assets/img/rv-chiller.jpg){ loading=lazy }
<figcaption>Umlaufkühler F-105</figcaption>
</figure>

<figure markdown>
![Vakuum-Controller V-850 (Manual)](../assets/img/rv-v850.jpg){ loading=lazy }
<figcaption>Vakuum-Controller V-850 (Manual)</figcaption>
</figure>

<figure markdown>
![Nahita Digital-Ölbad: PV = Ist, SV = Soll](../assets/img/rv-bath.jpg){ loading=lazy }
<figcaption>Nahita Digital-Ölbad: PV = Ist, SV = Soll</figcaption>
</figure>

</div>

## Teil 1 — Kolben in der Glovebox montieren { #part-1-assemble-the-flask-in-the-glovebox }

Die Probe kommt nie mit Luft in Kontakt: Der Kolben wird **in der Glovebox** befüllt, mit dem Ventiladapter verschlossen und mit der Klemme gesichert und erst am Rotavapor unter Vakuum wieder geöffnet.

<div class="demo" data-demo="rv-glassware">
--8<-- "rv-glassware.svg"
</div>

<div class="demo-steps" markdown>

1. **Legen Sie die Teile in der Glovebox bereit:** den Rundkolben mit Ihrer Suspension (auf einem Korkring), den **Ventiladapter** mit seinem Glashahn, **Vakuumfett** und eine zum Schliff passende **Keck-Klemme**.
2. **Prüfen Sie das Glas.** Die Schliffe müssen sauber und ohne Abplatzungen sein; der Kolben darf keine Risse oder Sternbrüche haben — er kommt unter Vakuum.
3. **Fetten Sie den Schliff.** Tragen Sie einen **dünnen Streifen** Vakuumfett nur auf den oberen Teil des unteren (Kern-)Schliffs des Adapters auf. Zu viel Fett gelangt in den Kolben und verunreinigt die Probe.
4. **Einsetzen und drehen.** Setzen Sie den Adapter in den Kolbenhals und drehen Sie ihn vorsichtig, bis der Fettstreifen klar und durchgehend aussieht, ohne Schlieren oder Luftkanäle.
5. **Sichern Sie den Schliff.** Setzen Sie die **Keck-Klemme** über den Schliff, damit der Adapter nicht herausrutschen kann.
6. **Schließen Sie das Ventil.** Drehen Sie den Hahn auf **waagerecht = geschlossen** (senkrecht = offen).
7. **Endkontrolle:** Klemme sitzt, Ventil waagerecht, Kolben beschriftet. Halten Sie den oberen Schliff (der an den Rotavapor kommt) sauber.
8. **Ausschleusen** ([Glovebox-Anleitung](glovebox.md#taking-material-out)) und zum Rotavapor tragen, dabei den Kolben am Körper halten. **Lassen Sie das Ventil geschlossen** bis Schritt 9 von Teil 2.

</div>

## Teil 2 — Am Rotavapor { #part-2-on-the-rotavapor }

<div class="demo" data-demo="rotavapor">
--8<-- "rotavapor.svg"
</div>

<div class="demo-steps" markdown>

1. **Sicherheitscheck.** Legen Sie PSA an, prüfen Sie den Ölstand und die Glasteile. Das Bad darf nur Silikonöl enthalten.
2. **Kühler einschalten — nur die Stromversorgung.** Den grünen Netzschalter am F-105 drücken: Das Display zeigt SET TEMP und ACTUAL TEMP. START noch **nicht** drücken.
3. **Ölbad einstellen.** Das Nahita-Bad einschalten (POWER). **SET** drücken, den Sollwert (**SV**, grün) mit ◄ ▼ ▲ ändern und erneut **SET** drücken. **PV** (rot) ist die Ist-Temperatur des Öls.
4. **Druck einstellen** am Vakuum-Controller V-850 (Modus Manual): die Softtaste **Set** drücken, den schwarzen Drehknopf auf den Druck Ihrer Vorschrift drehen und bestätigen. Der Sollwert steht oben im Display („Set … mbar“); die große Zahl ist der Ist-Druck.
5. **Befestigen Sie den Auffangkolben.** Tragen Sie einen dünnen Film Vakuumfett auf seinen Schliff auf und befestigen Sie ihn mit seiner Kugelschliffklemme unter dem Kühler.
6. **Befestigen Sie den Kolben aus Teil 1.** Prüfen Sie, dass der Hahn noch **waagerecht (geschlossen)** steht. Drücken Sie die Arretiertaste am Antrieb, schieben Sie den oberen Schliff des Adapters auf das Dampfdurchführungsrohr (dafür ist sehr wenig Kraft nötig) und sichern Sie ihn mit dem **Combi-Clip**: Ring nach unten drücken und **im Uhrzeigersinn** drehen. Halten Sie den Kolben mit einer Hand, bis er gesichert ist.
7. **Vakuum starten.** Prüfen, dass die Vakuumpumpe V-700 eingeschaltet ist (Schalter vorne), den Solldruck prüfen und am Controller **START** drücken. Der geschlossene Kolben steht noch nicht unter Vakuum.
8. **Kühlung des Kühlers starten**, nachdem das Vakuum etwa 5 min gelaufen ist: **START** am F-105 drücken. Im Display erscheint eine Schneeflocke, und ACTUAL TEMP sinkt Richtung SET TEMP.
9. **Kolben öffnen und Rotation starten.** Wenn der Kühler mindestens 5 min gekühlt hat, den Hahn **langsam** öffnen (Griff in Linie mit dem Adapter) — der Druck steigt kurz an. Den Rotavapor einschalten (grüner Schalter oben am Bedienfeld) und den **ROTATION**-Knopf auf die gewünschte Drehzahl drehen.
10. **Stellen Sie die Position ein.** Der schwarze Knopf am Antrieb stellt die Neigung des Kolbens ein; der Griff mit elektrischem Schalter hebt und senkt die gesamte Glasbaugruppe. Der Sicherheitsanschlag unten am Lift verhindert, dass der Kolben zu tief fährt.
11. **Senken Sie den Kolben langsam** in das Ölbad.
12. **Verdampfen.** Das Lösungsmittel kondensiert am Kühler und sammelt sich im Auffangkolben. Achten Sie auf Siedeverzug; tritt er auf, heben Sie den Kolben aus dem Bad und erhöhen Sie den eingestellten Druck.
13. **Beenden, ohne Luft einzulassen.** Bei laufendem Vakuum und offenem Hahn stoppen Sie die Rotation (**ROTATION**-Knopf auf 0), heben den Kolben aus dem Bad und lassen ihn unter Vakuum abkühlen. Erst dann **schließen Sie den Hahn** (Griff quer zum Adapter).
14. **Stoppen und belüften.** Drücken Sie **STOP einmal**, um das Vakuum zu stoppen, und **zweimal**, um zu belüften. Drücken Sie **STOP** am Kühler und schalten Sie das Ölbad aus. Halten Sie den Kolben und lösen Sie ihn, indem Sie den **Combi-Clip gegen den Uhrzeigersinn** drehen; bringen Sie den verschlossenen Kolben (mit Adapter und Keck-Klemme) zurück in die Glovebox, bevor Sie ihn öffnen. Leeren Sie den Auffangkolben in den richtigen Lösungsmittelabfallbehälter.

</div>

!!! warning "Luftempfindliche Proben"
    Belüften (STOP zweimal gedrückt) lässt **Luft** in die Glasbaugruppe. Ihre Probe ist nur geschützt, wenn der Kolbenhahn **vor** dem Belüften **geschlossen** ist. Belüften Sie nie bei offenem Hahn.

!!! tip "Auf den Kühler warten"
    Fünf Minuten sind das Minimum. Liegt ACTUAL TEMP am Kühler beim Öffnen des Kolbens noch deutlich über SET TEMP, kondensiert das Lösungsmittel nicht und gelangt in die Pumpe.

## Handbücher

- Büchi *Operation Manual Rotavapor R-210/215* (Dok. 93076 en) — Laborkopie. Combi-Clip: §4.4.
- Laborfolien: *Buchi R-210 Rotovapor — Operation start guide* und *Rotovapor* (Kolbenventil, Keck-Klemme, Schliff) — Laborkopien.
- Öffentliche Links siehe [Handbücher](../manuals.md#rotavapor).
