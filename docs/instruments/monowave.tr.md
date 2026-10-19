---
title: Anton Paar Monowave 400 R
description: Monowave 400 R'de kapalı şişede mikrodalga sentezi yapma; isteğe bağlı olarak Cora 5001 ile yerinde Raman izleme.
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | Sıcaklık ve basınç kontrolü altında manyetik karıştırmalı kapalı şişelerde sıvı faz sentezi, ör. sülfür elektrolitlere çözelti yolları |
| **Sınırlar** | **300 °C** ve **30 bar**'a kadar; 850 W'lık tek magnetron; 1200 rpm'ye kadar karıştırma |
| **Özel özellik** | "R" sürümü, reaksiyon sırasında yerinde spektrumlar için **Cora 5001 fiber optik Raman probunu** barındırır (Sınıf 3B lazer) |
| **Gereksinim** | Doğru basınç ölçümü ve şişe sızdırmazlığı için **5,5–6 bar** basınçlı hava |
| **Eğitim** | Zorunlu. Raman ölçümleri için lazer güvenliği eğitimi zorunlu |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#monowave) |

</div>

### Reaksiyon şişeleri

| Şişe | Hacim | Doldurma hacmi | Maks. T | Maks. p | Maks. süre |
|---|---|---|---|---|---|
| G4 (cam) | 4 mL | 0,5–2 mL | 250 °C | 30 bar | 100 sa |
| **G10** (cam) | 10 mL | **2–6 mL** | 300 °C | 30 bar | 100 sa |
| **G30** (cam) | 30 mL | **6–20 mL** | 300 °C | 30 bar | 100 sa |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 sa |
| C10 (SiC) | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 sa |
| C30 Wide Neck (SiC) | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 sa |

<small>Monowave 400 R Reference Guide'dan (E07IB012EN-C), tablo 1. Raman deneyleri için Ek C'deki daha kısa süre sınırları geçerlidir. G4 ve SiC şişeler Raman probuyla **kullanılamaz**.</small>

!!! danger "Başlamadan önce"
    - **Sınıf 3B lazer.** Kılavuz rayı veya probu hareket ettirmeden önce Raman probunu devre dışı bırakın (probdaki Stop düğmesi) ve proba veya fibere asla bakmayın.
    - Her zaman **gerçekten kullandığınız şişe tipini** seçin. Yanlış şişe tipi yanlış sıcaklık/basınç okumaları verir ve şişenin patlamasına yol açabilir.
    - Minimum doldurma hacmine uyun: IR sensörü şişe duvarını dipten ~1 cm yukarıda ölçer.
    - Reaksiyonunuzun nasıl davrandığını bilmiyorsanız küçük miktarlarla ve en yüksek seyreltmeyle başlayın.
    - Cihaz **aside dayanıklı değildir**; aşındırıcı reaktifler ömrünü kısaltır (hızlı başlangıç sayfası).
    - Havaya duyarlı reaksiyonlar: şişeyi **eldivenli kabinde** doldurup kapatın. Bir şişe basınç boşaltırsa, egzoz reaksiyon buharlarını taşır (sülfür kimyasında muhtemelen H₂S) — egzoz çekişe gitmelidir.

## Gösterim { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. **Basınçlı havayı kontrol edin.** Başlamadan önce besleme 5,5–6 bar olmalıdır.
2. **Şişeyi doldurun.** Bir G10 (2–6 mL) veya G30 (6–20 mL) şişeye uygun bir karıştırıcı balık koyun ve reaksiyon karışımını ekleyin.
3. **Şişeyi kapatın.** Septumu, **PTFE yüzü reaksiyon karışımına bakacak** şekilde geçmeli kapağa yerleştirin ve kenarı sıkıldığında açılmayana kadar kapağı bastırın. Silikon septum: 4 saatten kısa çalışmalar. PTFE disk + PTFE septum: 4 saatten uzun çalışmalar (PTFE septum tek kullanımlıktır).
4. **Deneyi programlayın.** Dokunmatik ekranda **Task List**'e dokunun, son satıra dokunun, deneye ad verin, **Standard**'ı seçin ve adımları ayarlayın (ısıtma, bekleme, soğutma). Soğutma sıcaklığı (30–70 °C) çözücünüzün kaynama noktasının yaklaşık 10 °C altında olmalıdır. **Kullandığınız şişe tipini seçin** ve OK'e dokunun.
5. **Raman probunu konumlandırın.** Lazer **devre dışıyken** kılavuz rayı **G10** (en iç) veya **G30** (orta) konumuna, Raman kaydetmiyorsanız **idle** (en dış) konumuna getirin. Boyutunuzdaki boş, açık bir şişenin boşluğa dirençsiz girdiğini kontrol edin.
6. **Şişeyi yerleştirin.** G4, G10 ve C10 şişeleri boşluk ekinin üzerinde **adaptör halkasına** (poliimid yüzü yukarı) ihtiyaç duyar; G30 şişeler doğrudan yerleştirilir.
7. **Başlatın.** **Start**'a dokunun. Kör tapa takılıyken (Ruby termometresi olmadan) çalışma başlar ve döner kapak kapanır.
8. Cora 5001'de **Raman ölçümünü** yalnızca **kapak kapandıktan sonra başlatın** ([Cora 5001 kılavuzuna](cora.md) bakın).
9. Ana ekranda sıcaklık, basınç, güç ve karıştırmayı **izleyin**. Çalışan bir deneyi widget'larına dokunarak düzenleyebilirsiniz.
10. **Durdurun.** Sonunda — veya erken durdurmak için — **önce Raman ölçümünü durdurun ve lazeri devre dışı bırakın**, ardından (erken durdurmak için) **Stop → Yes**'e dokunun. Cihaz şişeyi soğutur ve güvenli olduğunda kapağı açar.
11. **Şişeyi çıkarıp açın.** Şişeyi dikkatle çıkarın. Kapatma aletiyle şişe açacağı gibi açın (daldırma borusu takılıysa dikkatli olun).
12. **Verileri dışa aktarın.** Menu ▸ Data Memory ▸ Browse Results ▸ seçin ▸ USB'ye Export (.pdf, .csv, .xls, .raw, .png). Cihaz 1000 sonuca kadar saklar.

</div>

## Bilinmesi gerekenler

- **Sıcaklık sensörleri.** Dahili IR sensörü (±5 °C) şişe duvarını ölçer. İsteğe bağlı Ruby fiber optik termometre (±2 °C) karışımın içinde ölçer ve ekzotermik reaksiyonlar veya zayıf soğuran çözücüler için daha iyidir — ancak **Raman probuyla birlikte** ve 4 saatten uzun çalışmalarda **kullanılamaz**.
- **Zayıf soğuran çözücüler** (ör. toluen, hekzan) kötü ısınır; cihaz gücü düşürebilir ve ayar sıcaklığına hiç ulaşamayabilir. G4 şişelerdeki güçlü soğuran çözücüler hedefi aşabilir: gücü sınırlayın veya "Heat to temperature in time" kullanın.
- **Raman olmadan:** probu idle konumuna getirin ve değiştirilmemiş boşluk ekini takın; böylece bir şişe kırılması probun hasar görmesine yol açmaz.

## İlgili

- Sülfür elektrolitlerin sıvı faz sentezi sırasında yerinde Raman: [Kaynaklar](../references.md#group-publications) sayfasına bakın.
