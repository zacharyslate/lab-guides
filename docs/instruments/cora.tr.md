---
title: Anton Paar Cora 5001
description: Fiber problu Cora 5001 spektrometresiyle mühürlü bir numunenin Raman spektrumunu ölçme ve Monowave 400 R'de yerinde izleme için kullanma.
translation: machine
---

# Anton Paar Cora 5001 Raman spektrometresi

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | Tozların, sıvıların ve reaksiyon karışımlarının Raman spektrumları; [Monowave 400 R](monowave.md) içinde yerinde reaksiyon izleme |
| **Laboratuvar sürümü** | **Cora 5001 Fiber**: lazer ve Raman sinyali bir fiber prob üzerinden iletilir. Uyarma dalga boyunu etiketten kontrol edin (532, 785 veya 1064 nm ya da çift) |
| **Lazer** | Fiber probla **Sınıf 3B** — prob yuvasındayken bile |
| **Eğitim** | Lazer güvenliği eğitimi dahil zorunlu |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#cora) |

</div>

!!! danger "Sınıf 3B lazer"
    - Prob ucuna veya bir fiber ucuna asla bakmayın ve probu asla insanlara veya yansıtıcı yüzeylere doğrultmayın.
    - Prob kapalı bir alanda değilken kullanılan dalga boyuna uygun lazer koruyucu gözlük takın.
    - Numune haznesini veya fiber portunu açmak, probdaki **Stop**'a basmak ya da kilidi tetiklemek lazeri hemen kapatır.

## Kurulumumuz { #our-set-up }

<figure markdown>
![Monowave 400 R (solda) ve Cora 5001 (sağda). Basınçlı hava regülatörü solda; lazer koruma gözlükleri Cora'nın yanında durur.](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>Monowave 400 R (solda) ve Cora 5001 (sağda). Basınçlı hava regülatörü solda; lazer koruma gözlükleri Cora'nın yanında durur.</figcaption>
</figure>

## Gösterim { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. Arka paneldeki anahtarla **açın**. Sıcaklık dengesi için yaklaşık **15 dk** bekleyin; ısınma sırasında ölçüm yapabilirsiniz, ancak ayarlar bitene kadar kilitlidir.
2. Kullanıcı hesabınızla **oturum açın**.
3. **Numuneyi hazırlayın.** Havaya duyarlı tozlar **eldivenli kabinde doldurulmuş mühürlü bir cam şişeye** konur. Tozu sıkıştırmak ve hava ceplerini gidermek için şişeyi tezgâha hafifçe vurun.
4. **Yuvayı yükleyin.** Kilitleme vidasını gevşetin ve probu arka durdurucuya kadar geri kaydırın. Şişe tutucuyu şişenizle birlikte yuvaya yerleştirin ve kapağı kapatın.
5. **Lazeri etkinleştirin.** Probda **Enable**'a (veya cihaz kilidinin sıfırlama düğmesine) basın. **Ready** LED'i yanar.
6. **Odaklayın.** **Adjust Focus**'u açın ve canlı spektrum için **Start**'a dokunun. Sinyal en yüksek olana kadar probu numuneye doğru kaydırın, **kilitleme vidasını sıkın** ve **Stop**'a dokunun. Odak, prob ucunun birkaç milimetre önündedir.
7. **Ölçümü ayarlayın.** Menu ▸ **Single Measurement**: numune adını girin, dalga boyunu (çift lazerli cihazlar) ve lazer gücünü seçin (532 nm: açık = 50 mW; 785/1064 nm: 0–450 mW, en az 50 mW önerilir). **Auto Exposure** (maks. 10 s) iyi bir ilk denemedir.
8. **Gelişmiş ayarlar (isteğe bağlı).** Arka plan alın (ortam ışığını giderir), gürültüyü azaltmak için N spektrumun ortalamasını alın, kozmik ışın giderme (N ≥ 3 gerektirir; floresan numunelerde kapatın) ve floresan için taban çizgisi düzeltmesi.
9. **Ölçün.** **Measure**'a dokunun. Spektrum görünür ve numune adıyla kaydedilir; yazılım olası kalite sorunlarını bildirir.
10. **Kaydedin ve dışa aktarın.** Spektrumu dışa aktarın veya yazdırın ya da aynı ayarları daha sonra tekrarlamak için **Save as method**'u kullanın. Probdaki **Stop**'a basmak ölçümü iptal eder ve lazeri devre dışı bırakır.
11. **Bitirin.** Numunenizi çıkarın ve cihazı arka anahtardan kapatın (veriler kapanışta kaydedilir).

</div>

## Batarya malzemeleri için ipuçları

- **Kullanılabilir sinyal veren en düşük lazer gücünü kullanın.** Koyu numuneler (karbon içeren kompozitler, NMC) güçlü soğurur ve özellikle 532 nm'de yerel olarak ısınabilir veya bozunabilir. Aynı noktada art arda iki spektrum kaydedin: farklıysa gücü düşürün.
- **Cam sinyal verir.** Boş şişeyi *tamamen* aynı ayarlarla (odak, güç, pozlama — Auto Exposure kapalı) kaydedin ve çıkarmak için **özel kör** olarak kullanın.
- **Floresan** geniş, yükselen bir arka plan verir; daha uzun bir dalga boyu (785 veya 1064 nm) bunu azaltır.
- **Heterojen numuneler:** birkaç noktada ölçün.
- Prob ucunu ve numuneyi oda ışığından koruyun; floresan lambalar Raman piklerine benzeyen keskin çizgiler üretir.

## Monowave 400 R'de yerinde Raman

Prob Monowave 400 R kılavuz rayına takılıyken [Monowave kılavuzunu](monowave.md) izleyin: şişe boyutu için prob konumunu **lazer devre dışıyken** ayarlayın, Raman ölçümünü yalnızca döner kapak kapandıktan sonra başlatın ve mikrodalga çalışmasını durdurmadan **önce** Raman ölçümünü durdurup lazeri devre dışı bırakın. Bir reaksiyon için **zaman serisi** kullanın (Cora referans kılavuzuna bakın) ve değişmeyen bir banda, ör. bir çözücü bandına göre normalize edin.
