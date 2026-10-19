---
title: Neware batarya döngüleyicileri
description: Bir hücre için doğru Neware döngüleyiciyi ve akım aralığını seçme, BTS'de adım dosyası yazma, bir kanal başlatma ve verileri dışa aktarma.
translation: machine
---

# Neware batarya döngüleyicileri (CT-4008, CT-4008T, CT-5008, CT-9008)

## Hangi hücre için hangi döngüleyici?

Döngüleyici akımınızı doğru biçimde **uygulayabilmeli ve ölçebilmelidir**. Doğruluk, **aralığın tam ölçeğinin** yüzdesi olarak verilir; bu nedenle büyük bir aralıktaki küçük bir akım doğru ölçülmez.

| Cihaz | Gerilim | Akım aralıkları | Doğruluk (akım) | Uygun olduğu |
|---|---|---|---|---|
| **CT-9008-5V6A-F** | −5 ile +5 V | 0,1–180 µA · 180 µA–6 mA · 6–180 mA · 0,18–6 A | ±36 nA · ±1,2 µA · ±36 µA · ±1,2 mA | **Katı hal mikro hücreler, düşük C-oranında düğme hücreler** |
| CT-5008-5V12A-TF | −3 ile +5 V | 0,12–120 mA · 0,12–1,2 A · 1,2–12 A | ±%0,02 TÖ (en düşük aralıkta ±24 µA) | ~1 mA'dan itibaren düğme ve kese hücreler |
| CT-4008Q-5V12A-S1 | 25 mV–5 V (evrensel tutucuyla min. 2 V deşarj) | 0,2–100 mA · 0,1–0,5 A · 0,5–6 A · 6–12 A | ±%0,02 TÖ | Daha büyük hücreler; 2 V'un altına deşarj edilen hücreler için **uygun değil** |
| CT-4008T-5V12A-S1-F | −1 ile 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±%0,05 TÖ | ≥ 5 mA gerektiren hücreler |

<small>Laboratuvar dosyalarındaki Neware teknik özellik sayfalarından. TÖ = tam ölçek.</small>

### Akımı seçme { #choosing-the-current }

1. Kapasiteyi tahmin edin: *Q* (mAh) = aktif kütle (g) × beklenen özgül kapasite (mAh g⁻¹).
2. *n* C-oranı için akım: *I* = *n* × *Q* (*Q* mAh ise mA).
3. En düşük aralığı *I*'yı kabul edilebilir bir hatayla **içeren** cihazı ve aralığı seçin (hedef: *I*'nın %1'inden az).

*Örnek:* [katı hal test bataryası](../cells/solid-state-battery.md) ≈ 0,57 mAh'dir → 0,1 C ≈ 57 µA → **CT-9008, aralık 1** (hata ±36 nA ≈ %0,06). Bir CT-4008/5008'de aynı akım en düşük aralığın altında kalır ve doğruluk (±20–24 µA) akımın yaklaşık %40'ıdır.

## Gösterim — BTS yazılımı

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. Cihaz listesinden **cihazı seçin** (burada bir mikro hücre için CT-9008) ve boş bir kanal bulun. Kanalı önce [rezervasyon sayfasında](../booking.md) ayırın.
2. **Hücreyi** kanala **bağlayın** (4 telli Kelvin klipsleri: iki kırmızıyı pozitif elektroda, iki siyahı negatif elektroda). Kanal kutusu açık devre gerilimini gösterir; kararlı olmasını bekleyin.
3. **Kanala sağ tıklayın ▸ Single start.**
4. **Adım dosyasını yazın veya yükleyin.** Tipik: *Rest* (OCV) → *CC şarj* (akım, üst kesme gerilimi) → *Rest* → *CC deşarj* (akım, alt kesme gerilimi) → 2. adıma *Cycle*, *N* kez → *End*. Kesme gerilimlerinizin hemen dışında **koruma sınırları** (üst ve alt gerilim) belirleyin. Adım adları BTS sürümleri arasında biraz farklıdır (ör. CC_Chg / CCC, CC_DChg / CCD).
5. **Test bilgilerini doldurun**: benzersiz bir ad/barkod (baş harfler, hücre tipi, tarih, numara), kapasitelerin mAh g⁻¹ cinsinden verilmesi için **aktif kütle** ve adım dosyası. **Start**'a basın.
6. **Başladığını kontrol edin**: kutu *working* durumuna geçer ve adımı, gerilimi ve akımı gösterir. İlk dakikaları izleyin — yanlış işaret veya sınırda bir gerilim, bağlantı ya da adım hatasına işaret eder.
7. **Verileri görüntüleyin**: sağ tık ▸ View data, V–t ve kapasite–döngü grafiklerini çizdiğiniz ve **Excel'e aktardığınız** **BTSDA**'yı açar.
8. **Bitirin**: test *End*'de sona erer veya sağ tık ▸ **Single stop**. Hücreyi ayırın ve rezervasyonunuzu serbest bırakın.

</div>

!!! warning "Bir kanalı başlatmadan önce"
    - Başkasının rezerve ettiği veya *working* / *pause* gösteren bir kanalı asla başlatmayın.
    - Gerilimleri BTS'ye **karşı elektrotunuza göre** girin. Li–In anotla, Li⁺/Li'ye göre verilen sınırlardan ≈ 0,6 V çıkarın.
    - Katı hal hücreleri test boyunca yığın basıncına ihtiyaç duyar — adımlar arasında hücreyi gevşetmeyin.
