---
title: Katı hal test bataryası
description: Laboratuvarda tümüyle katı hal mikro test bataryası kurma (indiyum veya Li–In anotlu çift katmanlı katot/elektrolit peleti) ve Neware CT-9008'de döngüleme.
translation: machine
---

# Katı hal test bataryası

[EIS](eis-cell.md) için kullanılan aynı polikarbonat hücrede bir mikro test bataryası: diğer tarafında metal anot bulunan bir **çift katmanlı pelet** (katı elektrolit + kompozit katot). 1–11. adımlar **eldivenli kabinde** yapılır.

<div class="facts" markdown>

| | |
|---|---|
| **Elektrolit katmanı** | Ø 10 mm kalıpta 100 mg |
| **Katot katmanı** | 10 mg kompozit katot (ör. [katot prosedüründen](../procedures/cathode-composite.md)) |
| **Anot** | Li folyo Ø 6,0 mm × 0,25 mm (parlatılmış) ve In folyo Ø 8,0 mm × 0,3 mm. **Lityumlu katotlar (ör. NMC): Li yok — yalnızca In folyo Ø 8,0 mm × 0,1 mm** |
| **Döngüleyici** | [Neware CT-9008 (5 V, 6 mA)](../instruments/battery-cyclers.md) — laboratuvarda bu hücre için yeterince düşük akım aralıklarına sahip tek döngüleyici |

</div>

## Gösterim { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Kalıbın darasını alın.** Kısa pres pistonunu Ø 10 mm kalıbın dibine yerleştirin ve terazide darasını alın (sıfırlayın).
2. **100 mg elektrolit ekleyin** ve tam kütleyi kaydedin.
3. **Elektrolit katmanını presleyin.** Uzun pistonu yerleştirin ve **1 dk boyunca 4 MPa (manometre)** ile presleyin.
4. **Katodu ekleyin.** Uzun pistonu elle çıkarın ve **10 mg kompozit katodu** elektrolit yüzeyinin tamamına eşit şekilde yayın. Kütleyi kaydedin (önce peletli kalıbın darasını alın).
5. **Çift katmanı presleyin.** Uzun pistonu geri takın ve yeniden **1 dk boyunca 4 MPa (manometre)** ile presleyin.
6. **Çift katmanlı peleti çıkarın**: kalıbı çelik altlıkta ters çevirip preste kalıbı pistonlardan dışarı itin.
7. **Yükleyin ve yoğunlaştırın.** Çift katmanlı peleti polikarbonat hücreye, **uzun akım toplayıcı altta** ve her toplayıcıda bir silikon conta olacak şekilde koyun. Hücreyi preste ortalayın ve **18 MPa (manometre) basıncı yavaşça, 3 dk** boyunca uygulayın.
8. **Elektroliti açığa çıkarın.** Kısa akım toplayıcıyı çıkarın. Çift katmanın **elektrolit tarafı** yukarı bakmalıdır (katot tarafı uzun toplayıcının üzerindedir).
9. **Anodu hazırlayın.** Anot metalini kısa akım toplayıcıya tutturun (boyutlar yukarıdaki tabloda).
10. **Anodu ekleyin.** Hücre gövdesini ters çevirin, anodu taşıyan kısa akım toplayıcının üzerine kaydırın ve bataryayı **2 dk boyunca 4 MPa (manometre)** ile presleyin.
11. Plakalar, yalıtkanlar ve vidalarla **tam hücreyi kurun**. Boşluğu her tarafta eşitleyin (**D1 = D2**) ve somunları **elle** sıkın. Batarya OCV ölçümüne hazırdır.
12. **Döngüleyiciyi bağlayın.** Hücreyi eldivenli kabinden çıkarın ve bir CT-9008 kanalına bağlayın: **pozitif (kırmızı) katot tarafına** (uzun toplayıcı), **negatif (siyah) anot tarafına**. Açık devre geriliminin kararlı olduğunu kontrol edin.
13. **Testi** BTS'de **programlayıp başlatın**: OCV'de bekleme, ardından gerilim sınırlarınız arasında sabit akımla şarj ve deşarj, gereken döngü sayısı kadar tekrarlanır. Bkz. [batarya döngüleyicileri](../instruments/battery-cyclers.md#choosing-the-current).

</div>

## Akım ve gerilim sınırlarını seçme

- **Kapasite tahmini.** Ağırlıkça %38 NMC-111 içeren 10 mg kompozitle (300 mg kompozitte 114 mg NMC) hücre ≈ 3,8 mg NMC içerir. ~150 mAh g⁻¹'lik tipik pratik kapasiteyle bu ≈ 0,57 mAh eder; yani **0,1 C ≈ 57 µA** ve **0,05 C ≈ 28 µA**. Ölçtüğünüz katot kütlesini ve malzemeniz için beklediğiniz kapasiteyi kullanın.
- **Hangi kanal.** Bu akımlarda yalnızca **CT-9008** düzgün çalışır (akım aralığı 1: 0,1–180 µA, doğruluk ±36 nA). CT-4008 ve CT-5008 cihazları sırasıyla 0,2 mA ve 0,12 mA'dan başlar — bu hücre için 0,1 C'nin üzerinde — ve doğrulukları 100 mA veya 120 mA tam ölçeğin ±%0,02'sidir (±20–24 µA), yani akımın kendisi kadar büyüktür.
- **Gerilim.** Li–In anot Li⁺/Li'ye göre ≈ 0,6 V'tadır; bu nedenle Li⁺/Li'ye göre verilen bir katot penceresi BTS'ye girilirken ≈ 0,6 V aşağı kaydırılmalıdır.

!!! note "Manometre basıncı"
    Tüm basınçlar hidrolik presin **manometre** değerleridir. Pelet basıncı = manometre × (40 mm / kalıp Ø)²: Ø 10 mm'lik kalıpta 4 MPa manometre ≈ 64 MPa, 18 MPa ≈ 288 MPa. Hesaplayıcı için [Pres ve basınç dönüşümü](eis-cell.md#press) bölümüne bakın.
