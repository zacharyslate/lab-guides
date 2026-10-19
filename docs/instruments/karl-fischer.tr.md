---
title: Mettler Toledo C20S Karl Fischer kulometresi
description: Mettler Toledo C20S kulometrik Karl Fischer titratörüyle çözücülerin su içeriğini ölçme; %1'lik su standardıyla kontrol dahil.
translation: machine
---

# Mettler Toledo C20S kulometrik Karl Fischer titratörü

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | Sıvılarda eser su — ör. etanol, asetonitril veya THF'nin sıvı faz elektrolit sentezi için yeterince kuru olup olmadığını kontrol etmek |
| **İlke** | İyot, jeneratör elektrotta elektrokimyasal olarak üretilir ve suyla reaksiyona girer; gereken yük su kütlesini verir |
| **Hücre** | Jeneratör elektrot (diyaframlı veya diyaframsız, **mavi fiş**), çift platin indikatör elektrot, kurutma tüpü, septum, manyetik karıştırıcı |
| **Eğitim** | Zorunlu |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#karl-fischer) |

</div>

!!! danger "Güvenlik"
    KF reaktifleri metanol veya başka alkoller, iyot, SO₂ ve bir baz içerir: toksik ve yanıcıdır. Eldiven ve gözlük takın, hücreyi çeker ocakta doldurup boşaltın ve kullanılmış reaktifi laboratuvarın KF reaktifi için belirlediği atık kabına atın.

## Gösterim { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. **Hücreyi kontrol edin.** Hücre reaktifle dolu, her iki elektrot bağlı (jeneratör = **mavi fiş**), kurutma tüpünde taze kurutucu var ve tüm tıpalar ve şlifler sıkıca oturmuş olmalı — sızıntılar oda nemini içeri alır.
2. **Titratörü açın.**
3. **Yöntemi hazırlayın (yalnızca ilk sefer).** Methods ▸ New ▸ Standard method template ▸ **KF Coul** ▸ Sample: *Entry type*'ı **Weight** yapın ▸ OK ▸ Save. Başlangıç ekranında kısayol oluşturmak için **AddToHome**'a dokunun (*Immediate start*'ı işaretleyin).
4. **Ön titrasyon.** Kısayolunuza dokunun. Titratör reaktifte zaten bulunan suyu giderir; karıştırıcı çalışıyor olmalıdır. Sürüklenme azalırken bekleyin.
5. **Standby.** Sürüklenme düşük ve kararlı olduğunda titratör **Standby**'a geçer ve **Start sample** etkinleşir.
6. **Numune şırıngasını hazırlayın.** Bir şırıngayı numuneyle (veya sistemi kontrol etmek için **%1 KF su standardıyla**) doldurun, teraziye koyun ve **dara alın**.
7. **Enjekte edin.** **Start sample**'a dokunun, iğneyi septumdan ucu reaktif yüzeyinin altında kalacak şekilde — elektrotlara değmeden — geçirin ve enjekte edin (%1 standarttan 0,5–1,0 mL).
8. **Geri tartın.** Şırıngayı teraziye geri koyun ve gösterilen **numune kütlesini** girin (işaretsiz negatif değer). Titrasyon çalışır.
9. **Sonucu okuyun** (R1, su içeriği). %1 standart, sertifika toleransı içinde ≈ 10 mg g⁻¹ vermelidir; vermiyorsa numune ölçmeden önce reaktifi ve sürüklenmeyi kontrol edin.
10. **Durdurun.** Mevcut analizi durdurmak için **Stop analysis**'e veya seriyi bitirmek için **More ▸ End series**'e dokunun.

</div>

## İyi uygulamalar

- Her gün **önce standardı**, sonra numunelerinizi ölçün. Her numuneyi en az üç kez ölçün.
- Şırıngayı doldurmadan önce numuneyle çalkalayın; kuru, kapalı bir şırınga kullanın.
- Sürüklenme yüksek kaldığında, standardın sonucu kaydığında veya hücre dolmaya başladığında reaktifi değiştirin.
- Jeneratör elektrot bakımı: boşaltın, metanolle durulayın, tüy bırakmayan bir bezle silin ve 70–80 °C'de birkaç saat kurutun (kılavuz §7).

!!! warning "Sülfür içeren numuneleri enjekte etmeyin"
    Sülfürler, H₂S ve tiyoller iyotla reaksiyona girer ve **yanlış biçimde yüksek** su değerleri verir; ayrıca reaktifi tüketir. Bu titratörü **çözücüler ve sıvılar** için kullanın. Sülfür elektrolit tozlarındaki su doğrudan enjeksiyonla ölçülemez — alternatifleri laboratuvar sorumlusuyla görüşün.
