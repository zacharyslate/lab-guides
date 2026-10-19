---
title: EIS veri analizi
description: EIS hücresinden alınan empedans spektrumlarının EIS Studio ile nasıl analiz edileceği — VersaStudio'dan dışa aktarma, doğrulama, eşdeğer devreler, DRT ve iletkenlik.
translation: machine
---

# EIS veri analizi

Analiz, kendi bilgisayarınızın web tarayıcısında çalışan ücretsiz ve açık kaynaklı bir uygulama olan **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**'da yapılır (verileriniz yüklenmez). Yaygın potansiyostatların dosyalarını okur, Kramers–Kronig geçerlilik testi yapar, eşdeğer devreleri fit eder (R, C, L, CPE, Warburg, Gerischer ve iletim hattı elemanları), pik entegrasyonuyla düzenlileştirilmiş bir gevşeme süreleri dağılımı (DRT) hesaplar ve kalınlık ile alandan belirsizlik yayılımıyla iyonik iletkenliği hesaplar.

<div class="inst-grid" markdown>

[**Eğitim** <span>Adım adım ilk analiz</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[**Ölçüm** <span>Deney düzeneği önerileri</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[**Teori** <span>Devreler, DRT, doğrulama</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[**Kurulum** <span>Yerel olarak çalıştırma</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## EIS hücresi için iş akışı

1. **VersaStudio'dan kalibre edilmiş verileri dışa aktarın** — Data ▸ Export To ▸ ZView (`.z`) veya Graph View'dan kopyalayın. VersaStudio kılavuzuna (Ek 3) göre `.par` dosyalarındaki ham EIS sütunları **kalibre edilmemiştir**.
2. Her spektrumu Kramers–Kronig testiyle **doğrulayın**. Testi geçemeyen yüksek frekans noktalarını (kablo artefaktları) atın ve kaç tane attığınızı kaydedin.
3. Bir eşdeğer devre **fit edin** veya **DRT**'yi hesaplayın. Bloke edici elektrotların düşük frekans katkısını elektrolit direncinden hariç tutun.
4. **İletkenlik** — pelet kalınlığını ve çapını girin: σ = *L* / (R · *A*).
5. **Aktivasyon enerjisi** — sıcaklık serisi boyunca log₁₀ σ'yı 1000/T'ye karşı fit edin; E<sub>a</sub> = −19,14 × eğim kJ mol⁻¹ (bkz. [EIS hücresi sayfası](../cells/eis-cell.md#from-spectrum-to-conductivity)). σ'yı mı yoksa σT'yi mi fit ettiğinizi belirtin.

!!! note "Neler raporlanmalı"
    Pelet kütlesi, kalınlığı ve çapı; pelet üzerindeki presleme basıncı (yalnızca manometre okuması değil); sıcaklık ve dengeleme süresi; frekans aralığı, genlik ve dekat başına nokta sayısı; kullanılan devre veya DRT ayarları; ve fit artıkları.
