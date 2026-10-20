---
title: Etiquetas QR
description: Etiquetas QR imprimibles para cada equipo: descárguelas, imprímalas y sustitúyalas cuando se desgasten.
translation: machine
---

# Etiquetas QR de los equipos

Cada equipo debe llevar una etiqueta QR para que cualquiera pueda abrir su guía y la página de reservas desde el móvil. Si falta una etiqueta, está desgastada o no se lee, descárguela aquí, imprímala y sustitúyala.

## Hojas completas (A4) { #full-sheets-a4 }

- [Las 13 etiquetas — cada código abre **la guía de ese equipo** (recomendado)](assets/qr/qr-labels-instrument.pdf)
- [Las 13 etiquetas — todos los códigos abren la **página de inicio**](assets/qr/qr-labels-main.pdf)

## Etiquetas sueltas { #single-labels }

| Equipo | El código abre su guía | El código abre la página de inicio |
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

## Impresión y colocación { #printing-and-fitting }

1. Imprima al **100 % / "Tamaño real"**, no "Ajustar a la página". Cada etiqueta mide **63 × 52 mm**; el código QR mide 34 mm.
2. Recorte por las líneas grises. Pegue la etiqueta donde se coloca la persona que usa el equipo, a la altura de los ojos y lejos de superficies calientes (mufla, puerta de la estufa, baño del rotavapor).
3. Protéjala con cinta transparente o una funda de plastificar: los disolventes y los guantes desgastan rápido el papel.
4. **Escanéela con el móvil después de pegarla.** Si no abre la página, vuelva a imprimirla; no deje una etiqueta que no funcione en el equipo.

<small>Las etiquetas se generan con `tools/make_qr_labels.py` en el repositorio. Si cambia la dirección del sitio, actualice `SITE` en ese script y vuelva a ejecutarlo; comprueba cada código descodificándolo antes de guardar.</small>
