---
title: MBraun EasyLab eldivenli kabin
description: MBraun EasyLab eldivenli kabini nasıl başlatacağınız, ön oda üzerinden malzeme sokup çıkaracağınız ve güvenli bir durumda bırakacağınız.
translation: machine
---

# MBraun EasyLab eldivenli kabin

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | Havaya ve neme duyarlı malzemeleri (sülfür elektrolitler, Li metal, Li₂S, P₂S₅) argon altında işlemek |
| **Atmosfer** | Cu katalizör ve moleküler elekle saflaştırılmış argon; O₂ ve H₂O sensörleri 0–1000 ppm ve 0–500 ppm ölçer |
| **Eğitim** | Zorunlu. Rezervasyondan önce eldivenli kabin sınavını geçin |
| **Rezervasyon** | [Cihaz rezervasyonu](../booking.md) |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#glovebox) |

</div>

!!! danger "Başlamadan önce"
    - İçeride kimyasallarla çalıştığınız her durumda laboratuvar önlüğü, koruyucu gözlük ve **kabinin bütil eldivenlerinin üzerine nitril eldiven** giyin.
    - Ön odaya asla açık bir çözücü kabını vakum altında koymayın. Kapalı çözücü şişeleri yarım vakum prosedürünü gerektirir (adım 9).
    - O₂ veya H₂O değeri yüksekse durun ve laboratuvar sorumlusuna haber verin. Hassas malzemeleri açmayın.

## Eldivenli kabinimiz { #our-glovebox }

![MBraun EasyLab kabinimiz: ana hazne, kontrol paneli ve sağda ön hazne, altta arıtıcı ve vakum pompası, yerde ayak pedalları](../assets/img/gb-overview.jpg){ loading=lazy }

<div class="photo-grid" markdown>

<figure markdown>
![ECO modundaki kontrol paneli; kabini bu durumda bulmalı ve bırakmalısınız (eco LED'i yeşil)](../assets/img/gb-panel-eco.jpg){ loading=lazy }
<figcaption>ECO modundaki kontrol paneli; kabini bu durumda bulmalı ve bırakmalısınız (eco LED'i yeşil)</figcaption>
</figure>

<figure markdown>
![Ön hazne: üstte manometre ve REFILL (argon) ile EVACUATE (vakum) vana etiketleri](../assets/img/gb-antechamber.jpg){ loading=lazy }
<figcaption>Ön hazne: üstte manometre ve REFILL (argon) ile EVACUATE (vakum) vana etiketleri</figcaption>
</figure>

<figure markdown>
![Dış kapı: ön hazne vakumdayken açmayın](../assets/img/gb-door.jpg){ loading=lazy }
<figcaption>Dış kapı: ön hazne vakumdayken açmayın</figcaption>
</figure>

<figure markdown>
![Kabinin altındaki manyetik sirkülasyon vanaları: pistonları YUKARIDA olmalı](../assets/img/gb-circ-valves.jpg){ loading=lazy }
<figcaption>Kabinin altındaki manyetik sirkülasyon vanaları: pistonları YUKARIDA olmalı</figcaption>
</figure>

<figure markdown>
![Ayak pedalları: sol = LOW PRESSURE, sağ = HIGH PRESSURE](../assets/img/gb-pedals.jpg){ loading=lazy }
<figcaption>Ayak pedalları: sol = LOW PRESSURE, sağ = HIGH PRESSURE</figcaption>
</figure>

</div>

## Kontrol paneli { #control-panel }

![Laboratuvarımızdaki EasyLab kontrol paneli](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| Öğe | İşlevi |
|---|---|
| **pressure mbar** (üst ekran) | Kutunun oda basıncına göre basıncı, mbar. Normalde küçük bir pozitif basınç: ECO modunda kutu +2 ile +6 mbar arasında tutulur. Rejenerasyon sırasında da kutu basıncını gösterir. |
| **O₂ ppm** ve **H₂O ppm** | Argondaki oksijen ve su. Rejenerasyon sırasında bunun yerine aşamayı ve kalan dakikayı gösterir. |
| **Min.set** / **Max.set** düğmeleri | Kutu basınç kontrolünün alt ve üst sınırları. **Değiştirmeyin.** |
| **circ** | Argonun arıtıcıdan sirkülasyonu. Rejenerasyon dışında **her zaman açık (LED yanık)** olmalıdır. LED sönükse sirkülasyon pistonlarının YUKARIDA olduğunu kontrol edin ve laboratuvar sorumlusuna haber verin. |
| **reg** / **reg abort** | Katalizör rejenerasyonunu başlatır / durdurur (reg abort yalnızca ilk aşamalarda çalışır). Yalnızca laboratuvar sorumlusu. |
| **pump** | Vakum pompası. Ön haznenin vakumlanması için açık olmalıdır. |
| **ana** | O₂ ve H₂O analizörleri. Açık bırakın. |
| **light** | Kutu aydınlatması. |
| **purge** | O₂/H₂O'yu düşürmek için kutuyu argonla süpürür. Yalnızca laboratuvar sorumlusu isterse. |
| **eco** | Bekleme: pompa yalnızca kutu argon istediğinde çalışır, ışık söner, basınç +2 ile +6 mbar. Kullanımdan sonra kutuyu ECO'da bırakın. |

!!! tip "Normal çalışma durumu nasıl görünür"
    Basınç birkaç mbar (burada 2,7), O₂ ve H₂O 1 ppm'in altında (burada 0,5), **circ**, **pump**, **ana** ve **light** LED'leri yanık. Bu fotoğrafta **circ** LED'i sönük: bunu görürseniz sirkülasyon pistonlarını kontrol edin ve laboratuvar sorumlusuna haber verin.

## Gösterim { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. **Kabini bulduğunuz haliyle kontrol edin.** **ECO** modunda olmalı; her iki ön oda kapısı kapalı, ön oda tam vakumda (manometre ≈ −94 kPa) ve tüm vanalar kapalı olmalıdır. Sensör ekranından O₂ ve H₂O değerlerini okuyun.
2. **Kabini etkinleştirin.** ECO modundan çıkmak için **ECO**'ya bir kez, ardından **PUMP**'a bir kez basın. **LIGHT**'ı istediğiniz zaman açıp kapatabilirsiniz.
3. **Sirkülasyonu kontrol edin.** Argon her zaman katalizörden geçerek dolaşmalıdır (rejenerasyon sırasında hariç): **CIRC** LED'i yanık olmalıdır. Ayrıca katalizörün üzerindeki manyetik sirkülasyon vanalarının pistonlarına bakın: **YUKARIDA** olmalıdır. LED sönükse veya pistonlar aşağıdaysa, hassas malzemeyi açmadan önce laboratuvar sorumlusuna haber verin.
4. **Ön odayı argona getirin.** Ön odayı ana hazneye bağlayan **argon (dolum) vanasını** yavaşça açın. Manometrenin −94 kPa'dan 0 kPa'ya yükselişini izleyin, sonra vanayı kapatın.
5. **Malzemelerinizi yükleyin.** **Dış kapıyı** açın, malzemeleri ön odaya koyun ve dış kapıyı kapatın. Sıvı kaplarını kapalı tutun; tozlar ve katılar açık veya kapağı gevşek olabilir.
6. **Vakumlayın (döngü 1).** Her iki kapının ve argon vanasının kapalı olduğunu kontrol edin. Manometre −94 kPa gösterene kadar **vakum vanasını** yavaşça açın, vakumu **15 dk** tutun, sonra vanayı kapatın.
7. **Argonla doldurun.** Manometre tekrar 0 kPa olana kadar argon vanasını yavaşça açın, sonra kapatın.
8. **Toplam 3 döngüye** ulaşana kadar vakum–bekleme–dolum işlemini **tekrarlayın**. Gözenekli veya hacimli malzemeleri (lifler, kâğıt, köpükler) bir gece vakumda bırakıp ardından tam bir döngü yapmak en iyisidir.
9. **Özel durum — kapalı çözücü şişeleri.** Kapalı bir şişe tam vakumda patlayabilir. Yalnızca **yarım vakuma** (≈ −47 kPa) kadar vakumlayın, birkaç dakika bekleyin, doldurun ve **en az 10 kez** tekrarlayın.
10. **Malzemeleri içeri alın.** Son dolumdan sonra (manometre 0 kPa, her iki vana kapalı) ellerinizi eldivenlere sokun, **iç kapıyı** açın, malzemeleri ana hazneye alın ve iç kapıyı kapatın.
11. **Rahat çalışın.** Kabin kendi basıncını kendisi ayarlar. Eldivenler çok gergin veya çok gevşekse, hazne basıncını artırmak (+) veya azaltmak (−) için **ayak pedallarını** kullanın. Sol pedal = **LOW PRESSURE**, sağ pedal = **HIGH PRESSURE**.
12. **Oturumu bitirin.** Döküntüleri temizleyin, eldivenleri **yalnızca etanolle** silin, iç ve dış kapıları kapatın ve vakum vanası açıkken ön odayı **en az 5 dk** vakumlayın.
13. **Bulduğunuz gibi bırakın.** Vakum vanasını kapatın (manometre ≈ −94 kPa'da kalır), tüm vanaların kapalı olduğunu kontrol edin, **ECO**'ya bir kez basın ve sirkülasyon pistonlarının **YUKARIDA** olduğunu doğrulayın.

</div>

## Malzeme çıkarma { #taking-material-out }

1. Ön oda vakumdaysa yavaşça argonla 0 kPa'ya kadar doldurun ve argon vanasını kapatın.
2. İç kapıyı açın, malzemeleri yerleştirin ve iç kapıyı kapatın.
3. Dış kapıyı açın, malzemeleri çıkarın ve dış kapıyı kapatın.
4. Ön odayı vakumlayın, bir kez argonla süpürün, tekrar vakumlayın ve tüm vanalar kapalı olarak vakumda bırakın.

## Kabine zarar veren şeyler { #things-that-damage-the-box }

!!! warning "Katalizör zehirleri"
    Bakır katalizör **kükürt bileşikleri ve asitler tarafından geri dönüşümsüz olarak zehirlenir**; aktif karbon filtresi doyduğunda moleküler elek de H₂S ve çözücü buharlarını adsorbe eder (laboratuvar kılavuzu *Guía MBraun EasyLab*, rev. 07-2022). Sülfür elektrolitler (Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄) eser miktarda nemle H₂S açığa çıkarır. Kullanılmadığında sülfür kaplarını kapalı tutun, sülfür tozlarını asla bir gece açık bırakmayın ve O₂ tutma kapasitesindeki bir kaybın izini sürebilmek için kabinde hangi kimyasalları kullandığınızı kaydedin.

!!! note "Çözücüler"
    Uçucu çözücüler (etanol, asetonitril, THF…) aktif karbon filtresini yükler ve sensörlerde sapmaya neden olabilir. Mümkün olan en küçük hacmi kullanın ve şişeleri kapalı tutun. Açık çözücülerle çalışırken sirkülasyonun durdurulması gerekip gerekmediğini laboratuvar sorumlusuna sorun — mevcut laboratuvar prosedürleri bunu belirtmiyor.

## Rejenerasyon ve sensörler (yalnızca laboratuvar sorumlusu)

Katalizör/elek rejenerasyonu (16 aşama, yaklaşık 960 dk, ~15 L/dk'da Ar/H₂ şekillendirme gazı) ve H₂O sensörü bakımı (her ~2000 saatte bir %85 H₃PO₄ ile yeniden kaplama) yalnızca laboratuvar sorumlusu tarafından laboratuvar kılavuzuna göre yapılır.

!!! question "Laboratuvar sorumlusuyla teyit edilecek"
    İki laboratuvar belgesi ön oda döngüsü konusunda farklı şeyler söylüyor. İngilizce başlangıç slaytları *"basıncı bırakmadan önce en az 5 dk tam vakum"* diyor; İspanyolca laboratuvar kılavuzu ise **15 dk beklemeli 3 vakum döngüsü** (veya "aktif" modda 45 dk) diyor. Bu kılavuz daha sıkı olan 3 × 15 dk döngüsünü kullanır. Lütfen laboratuvar kuralının hangisi olduğunu teyit edin.

## Kılavuzlar

- Laboratuvar kılavuzu: *Guía MBraun EasyLab* (İspanyolca, rev. 07-2022) — laboratuvar kopyası.
- Laboratuvar slaytları: *MBraun EasyLab Glovebox — Operation start guide* — laboratuvar kopyası.
- Üretici: [MBraun EASYlab ürün sayfası](https://shop.mbraun.de/ENU/28934/EASYlab.html).
