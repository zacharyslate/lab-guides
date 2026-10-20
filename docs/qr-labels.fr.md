---
title: Étiquettes QR
description: Étiquettes QR imprimables pour chaque instrument : téléchargez-les, imprimez-les et remplacez-les quand elles s'usent.
translation: machine
---

# Étiquettes QR des instruments

Chaque instrument doit porter une étiquette QR pour que chacun puisse ouvrir son guide et la page de réservation depuis un téléphone. Si une étiquette manque, est usée ou illisible, téléchargez-la ici, imprimez-la et remplacez-la.

## Planches complètes (A4) { #full-sheets-a4 }

- [Les 13 étiquettes — chaque code ouvre **le guide de cet instrument** (recommandé)](assets/qr/qr-labels-instrument.pdf)
- [Les 13 étiquettes — tous les codes ouvrent la **page d'accueil**](assets/qr/qr-labels-main.pdf)

## Étiquettes individuelles { #single-labels }

| Instrument | Le code ouvre son guide | Le code ouvre la page d'accueil |
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

## Impression et pose { #printing-and-fitting }

1. Imprimez à **100 % / "Taille réelle"**, pas "Ajuster à la page". Chaque étiquette mesure **63 × 52 mm** ; le code QR fait 34 mm.
2. Découpez le long des lignes grises. Collez l'étiquette là où l'on se tient pour utiliser l'instrument, à hauteur des yeux et loin des surfaces chaudes (four à moufle, porte de l'étuve, bain du rotavapor).
3. Protégez-la avec du ruban adhésif transparent ou une pochette de plastification : solvants et gants usent vite le papier.
4. **Scannez-la avec votre téléphone après l'avoir posée.** Si elle n'ouvre pas la page, réimprimez-la ; ne laissez pas une étiquette défectueuse sur l'instrument.

<small>Les étiquettes sont générées par `tools/make_qr_labels.py` dans le dépôt. Si l'adresse du site change, mettez à jour `SITE` dans ce script et relancez-le ; il vérifie chaque code en le décodant avant d'enregistrer.</small>
