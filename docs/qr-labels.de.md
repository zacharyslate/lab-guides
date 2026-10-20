---
title: QR-Etiketten
description: Druckbare QR-Etiketten für jedes Gerät – herunterladen, drucken und bei Abnutzung ersetzen.
translation: machine
---

# QR-Etiketten für die Geräte

Jedes Gerät sollte ein QR-Etikett tragen, damit jede Person seine Anleitung und die Buchungsseite mit dem Handy öffnen kann. Fehlt ein Etikett, ist es abgenutzt oder nicht lesbar, laden Sie es hier herunter, drucken Sie es aus und ersetzen Sie es.

## Ganze Bögen (A4) { #full-sheets-a4 }

- [Alle 13 Etiketten – jeder Code öffnet **die Anleitung dieses Geräts** (empfohlen)](assets/qr/qr-labels-instrument.pdf)
- [Alle 13 Etiketten – jeder Code öffnet die **Startseite**](assets/qr/qr-labels-main.pdf)

## Einzelne Etiketten { #single-labels }

| Gerät | Code öffnet seine Anleitung | Code öffnet die Startseite |
|---|---|---|
| MBraun EasyLab glovebox | [PDF](assets/qr/label-glovebox.pdf) | [PDF](assets/qr/label-glovebox-home.pdf) |
| Büchi Rotavapor R-210 | [PDF](assets/qr/label-rotavapor.pdf) | [PDF](assets/qr/label-rotavapor-home.pdf) |
| PARSTAT MC · PMC-2000 | [PDF](assets/qr/label-pmc.pdf) | [PDF](assets/qr/label-pmc-home.pdf) |
| Neware CT-9008 | [PDF](assets/qr/label-ct9008.pdf) | [PDF](assets/qr/label-ct9008-home.pdf) |
| Neware CT-5008 | [PDF](assets/qr/label-ct5008.pdf) | [PDF](assets/qr/label-ct5008-home.pdf) |
| Neware CT-4008Q | [PDF](assets/qr/label-ct4008.pdf) | [PDF](assets/qr/label-ct4008-home.pdf) |
| Neware CT-4008T | [PDF](assets/qr/label-ct4008t.pdf) | [PDF](assets/qr/label-ct4008t-home.pdf) |
| Anton Paar Monowave 400 R | [PDF](assets/qr/label-monowave.pdf) | [PDF](assets/qr/label-monowave-home.pdf) |
| Anton Paar Cora 5001 | [PDF](assets/qr/label-cora.pdf) | [PDF](assets/qr/label-cora-home.pdf) |
| Fritsch Pulverisette 7 | [PDF](assets/qr/label-ballmill.pdf) | [PDF](assets/qr/label-ballmill-home.pdf) |
| Mettler Toledo C20S | [PDF](assets/qr/label-kf.pdf) | [PDF](assets/qr/label-kf-home.pdf) |
| Hobersal muffle furnace | [PDF](assets/qr/label-furnace.pdf) | [PDF](assets/qr/label-furnace-home.pdf) |
| Argolab drying oven | [PDF](assets/qr/label-oven.pdf) | [PDF](assets/qr/label-oven-home.pdf) |

## Drucken und Anbringen { #printing-and-fitting }

1. Mit **100 % / "Tatsächliche Größe"** drucken, nicht "An Seite anpassen". Jedes Etikett misst **63 × 52 mm**; der QR-Code ist 34 mm breit.
2. An den grauen Linien ausschneiden. Das Etikett dort anbringen, wo man beim Arbeiten am Gerät steht, auf Augenhöhe und fern von heißen Flächen (Muffelofen, Ofentür, Rotavapor-Bad).
3. Mit Klebefilm oder Laminierfolie schützen: Lösungsmittel und Handschuhe nutzen Papier schnell ab.
4. **Nach dem Anbringen mit dem Handy scannen.** Öffnet es die Seite nicht, neu drucken – kein defektes Etikett am Gerät lassen.

<small>Die Etiketten werden mit `tools/make_qr_labels.py` im Repository erzeugt. Ändert sich die Adresse der Website, `SITE` im Skript anpassen und es erneut ausführen; es prüft jeden Code durch Dekodieren, bevor es speichert.</small>
