---
title: QR etiketleri
description: Her cihaz için yazdırılabilir QR etiketleri — indirin, yazdırın ve yıprandığında değiştirin.
translation: machine
---

# Cihazların QR etiketleri

Herkesin cihazın kılavuzunu ve rezervasyon sayfasını telefondan açabilmesi için her cihazda bir QR etiketi olmalıdır. Bir etiket eksik, yıpranmış veya okunmuyorsa buradan indirin, yazdırın ve değiştirin.

## Tam sayfalar (A4) { #full-sheets-a4 }

- [13 etiketin tümü — her kod **o cihazın kılavuzunu** açar (önerilir)](assets/qr/qr-labels-instrument.pdf)
- [13 etiketin tümü — tüm kodlar **ana sayfayı** açar](assets/qr/qr-labels-main.pdf)

## Tek etiketler { #single-labels }

| Cihaz | Kod kılavuzunu açar | Kod ana sayfayı açar |
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

## Yazdırma ve yapıştırma { #printing-and-fitting }

1. **%100 / "Gerçek boyut"** ile yazdırın, "Sayfaya sığdır" ile değil. Her etiket **63 × 52 mm**; QR kodu 34 mm genişliğindedir.
2. Gri çizgilerden kesin. Etiketi cihazı kullanırken durulan yere, göz hizasına ve sıcak yüzeylerden (kül fırını, etüv kapağı, rotavapor banyosu) uzağa yapıştırın.
3. Şeffaf bant veya laminasyon poşetiyle koruyun: çözücüler ve eldivenler kâğıdı çabuk yıpratır.
4. **Yapıştırdıktan sonra telefonunuzla tarayın.** Sayfayı açmıyorsa yeniden yazdırın; cihazda çalışmayan bir etiket bırakmayın.

<small>Etiketler depodaki `tools/make_qr_labels.py` ile üretilir. Site adresi değişirse betikteki `SITE` değerini güncelleyip yeniden çalıştırın; kaydetmeden önce her kodu çözerek kontrol eder.</small>
