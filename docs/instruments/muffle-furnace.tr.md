---
title: Hobersal kül fırını
description: Hobersal kül fırınında rampa–bekleme–soğutma döngüsü programlama (Fuji Electric PXF4 programlayıcı, K tipi termokupl).
translation: machine
---

# Hobersal kül fırını (Fuji Electric PXF4 programlayıcı)

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | **Havada** kalsinasyon ve tavlama (oksitler, krozeler, cam malzeme temizliği) |
| **Sınırlar** | Maksimum 1200 °C. **Laboratuvar çalışma sınırları: birkaç saat için 1100 °C'ye kadar, 24 saat veya daha uzun çalışmalar için 1000 °C** |
| **Kontrolör** | Fuji Electric PXF4, K tipi termokupl; en fazla 8 rampa/bekleme segmenti |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#furnace) |

</div>

!!! danger "Güvenlik ve numune kuralları"
    - Fırın atmosferi **havadır**. Sülfür, halojenür ve diğer havaya duyarlı numuneler **mühürlü** olmalıdır (ör. vakumlanmış bir kuvars ampulde) — açık bir sülfür numunesini asla fırına koymayın.
    - Sıcak herhangi bir şeyi yüklemek veya çıkarmak için ısıya dayanıklı eldiven, maşa ve yüz siperi kullanın. Kapıyı yalnızca laboratuvar kurallarında kararlaştırılan sıcaklığın altında açın.
    - Mühürlü kapları asla dayanım sınırlarının üzerinde ısıtmayın; yanıcı veya toksik madde açığa çıkaran malzemeleri ısıtmayın.

## Gösterim — örnek: 850 °C'de 30 dk, 5 °C/dk ısıtma, 2 °C/dk soğutma

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. **Sınırları bilin.** Maksimum 1200 °C; bu laboratuvarda 1100 °C'den (birkaç saat) veya 1000 °C'den (24 saat veya daha uzun) fazla değil.
2. **Fırını** sağdaki anahtarla **açın**. Ekran **PV** (fırın içi sıcaklık) ve **SV** (ayar noktası) gösterir.
3. ▲ / ▼ ile **SV'yi 20 °C'ye ayarlayın**. Rampa süreleri bu başlangıç değerinden hesaplanır.
4. **Program menüsünü açın.** **CH 1** görünene kadar **SEL**'i basılı tutun, ardından **CH 3**'e (rampa/bekleme programı) ulaşmak için ▼'e iki kez basın.
5. **Desen.** SEL'e basın: **PtN** **0** olmalıdır (değilse SEL'e basıp 0 yapın).
6. **Zaman birimi.** ▼'e basın: **tCMU** **HHMM** (saat:dakika) göstermelidir.
7. **İlk hedef sıcaklık.** **SV-1**'e kadar ▼'e basın, SEL'e basın (değer yanıp söner), ◀ ▲ ▼ ile **850** ayarlayın ve SEL'e basın.
8. **Isıtma süresi.** **tM1r**'ye (rampa süresi) kadar ▼'e basın. 20 °C'den 850 °C'ye 5 °C/dk için: (850 − 20) / 5 = 166 dk = **02:46**. Ayarlayıp SEL'e basın.
9. **Bekleme süresi.** **tM1S**'ye (bekleme süresi) kadar ▼'e basın ve **00:30** ayarlayın.
10. **Soğutma.** **SV-2**'ye kadar ▼'e basıp **20** ayarlayın; sonra **tM2r** = (850 − 20) / 2 = 415 dk = **06:55**; sonra **tM2S** = **00:00**.
11. **Kullanılmayan segmentler.** SV-3 … SV-8'in **0** ve sürelerinin **00:00** olduğunu kontrol edin, ardından menüden çıkmak için geri tuşuna (⮌) basın.
12. **Numuneyi** (krozesinde veya mühürlü ampulünde) **yükleyin** ve kapıyı kapatın.
13. **Çalıştırın.** SEL'e basın: **StbY** **off** olmalıdır. **ProG**'a kadar ▼'e basın, SEL'e basın ve **off → Run** olarak değiştirip SEL'e basın. Ana ekrana dönün — sol altta **Run** görünür.
14. **Durdurun.** Biten bir program kendiliğinden durur; ardından fırını kapatın. Erken durdurmak için: SEL'i basılı tutun, ▼ ile **ProG**'a gidin, **Run → off** yapın, SEL'e basın ve ana ekrana dönün.

</div>

## Rampa süresi hesaplayıcı

PXF4 rampa hızı değil rampa **süresi** ister. Değerlerinizi girin:

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>Başlangıç (°C)<input type="number" id="rc-a" value="20"></label>
<label>Hedef (°C)<input type="number" id="rc-b" value="850"></label>
<label>Hız (°C/dk)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>Rampa süresi (SS:DD)<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! note "Program doğruluğu"
    Rampa SV = 20 °C'den hesaplanır. Fırın başlangıçta hâlâ sıcaksa, ilk segmentteki gerçek ısıtma hızı nominal hızdan farklı olur. Her çalışmanın başında PV değerini kaydedin.
