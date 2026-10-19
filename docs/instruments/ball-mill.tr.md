---
title: Fritsch Pulverisette 7 classic line
description: Havaya duyarlı malzemeleri mühürlü bir kapta öğütmek için Fritsch Pulverisette 7 gezegen mikro değirmenini yükleme, dengeleme, sıkıştırma ve programlama.
translation: machine
---

# Fritsch Pulverisette 7 classic line (gezegen mikro değirmen)

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | Mekanokimyasal sentez ve karıştırma, ör. 75Li₂S–25P₂S₅ camı ([prosedür](../procedures/lps-ball-milling.md)) |
| **Hız** | 10'luk adımlarla 100–800 rpm |
| **Program** | Öğütme süresi, duraklama süresi (her biri 0–99 dk 59 s veya kurulum modunda sa:dk), tekrar 0–99, isteğe bağlı ters yön modu |
| **Havasız öğütme** | Laboratuvarda polimer contalı bir ZrO₂ kap, PTFE ara parçalar ve kauçuk contayla **paslanmaz çelik bir tankın içinde** mühürlenir — eldivenli kabinde yüklenir |
| **Eğitim** | Zorunlu. Her türlü arıza veya hasarı hemen sorumluya bildirin |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#ball-mill) |

</div>

!!! danger "Güvenlik"
    - **Değirmeni dengeleyin.** Karşı istasyona her zaman **aynı kütlede** (kapak ve contayla birlikte) bir kap sıkıştırın. Boş bir karşı kap ancak fark 70–100 g'dan azsa kabul edilebilir. Dengesiz yükler değirmenin tezgâh üzerinde yürümesine neden olur.
    - Mil sıkıştırmasında **ezilme tehlikesi**. Sıkarken parmaklarınızı uzak tutun.
    - **Yanık tehlikesi.** Kaplar uzun çalışmalarda çok ısınır (iç kısım dış duvardan 20–30 °C daha sıcak). Çıkarmak için ısıya dayanıklı eldiven kullanın. Maksimum dış duvar sıcaklığı: 100–110 °C (akik: 70–80 °C).
    - Sülfür içeren mühürlü bir kabı asla eldivenli kabin dışında açmayın.

## Gösterim { #demonstration }

<div class="demo" data-demo="ball-mill">
--8<-- "ball-mill.svg"
</div>

<div class="demo-steps" markdown>

1. **Eldivenli kabinde kabı yükleyin.** Tozu ve bilyaları ZrO₂ kaba koyun (75Li₂S–25P₂S₅ için: elle karıştırılmış 1 g toz ile 90 g Ø 5 mm bilya).
2. **Kabı** beyaz polimer conta ve ZrO₂ kapakla **kapatın**.
3. **Çelik tankı mühürleyin.** Kabı, altına ve üstüne birer PTFE ara parça koyarak paslanmaz çelik tanka yerleştirin, kauçuk contayı takın ve tankı kapatın. Ancak bundan sonra eldivenli kabinden çıkabilir.
4. **Değirmeni** arkadaki ana anahtardan **açın** (POWER SUPPLY lambası yanar). Kapak yalnızca değirmen açıkken açılır: kolu bastırın ve kapağı dikkatle kaldırın.
5. **Her iki istasyonu yükleyin.** Mantar disklerin yerinde ve ezilmemiş olduğunu kontrol edin. Tankı bir istasyona, **aynı kütlede** bir kabı karşı istasyona koyun.
6. **Sıkıştırın.** Baskı parçası kapağa düz oturana kadar mil vidasını (13) aşağı çevirin ve **elle** sıkın; ardından kontra somunu (14) tutucuya kadar indirin ve elle sıkın. Her iki istasyon için yapın.
7. **Hızı** + / − tuşlarıyla **ayarlayın** (75Li₂S–25P₂S₅ prosedürü için 510 rpm).
8. **Programı ayarlayın.** **MILLING**'e basıp öğütme süresini, **PAUSE**'a basıp duraklamayı (yoksa 0) ayarlayın ve **REPETITIONS** sayısını belirleyin. Yönün her bölümden sonra değişmesini istiyorsanız **REVERSE** kullanın (en az 1 tekrar gerektirir).
9. **Kapağı kapatın ve START'a basın.** Kapak kilitlenir ve değirmen döner. Aşırı yüklenirse REDUCED SPEED lambası yanıp söner ve hız düşer.
10. **Sıkıştırmaları yeniden kontrol edin.** İlk birkaç dakikadan sonra **STOP**'a basın, kapağın kilidinin açılmasını bekleyin ve her iki mil vidasının ve kontra somunun hâlâ sıkı olduğunu kontrol edin. Devam etmek için **START**'a basın — değirmen geçen süreyi ve tekrarları hatırlar.
11. **Bitirin.** **STOP**'a basın; değirmen durduktan kısa süre sonra kapak kilidi açılır. Isıya dayanıklı eldivenlerle tankı çıkarın ve açmadan önce eldivenli kabine götürün. Değirmeni ana anahtardan kapatın.

</div>

!!! warning "Çalışma döngüsü"
    Pulverisette 7 classic line, **%30 çalışma döngüsüyle 8 saatlik vardiyalar** için tasarlanmıştır (ör. 3 dk öğütme + 7 dk duraklama) ve **sürekli çalışma için değildir** (Fritsch kullanım talimatları, §2). Kesintisiz tek bir uzun çalışma — mevcut LPS prosedüründeki gibi **duraklamasız 510 rpm'de 24 saat** — bu sınırı aşar ve aşınmayı ve ısınmayı artırır. 24 saat korunacaksa, öğütme/duraklama döngüleri programlayın ve sentez üzerindeki etkisini danışmanınızla görüşün: duraklamalar tozun termal geçmişini değiştirir, bu nedenle sonucun yeniden doğrulanması gerekir.

## Temizlik

- Öğütme parçaları: her malzeme (ZrO₂, akik, çelik) için Fritsch *Usage, care and cleaning* broşürünü izleyin. Sıcak kapları asla soğuk suya koymayın.
- Kullanımdan sonra öğütme haznesini temizleyin ve bir kaptan kaçan tozu bildirin (gevşek bir sıkıştırmanın veya aşınmış bir contanın işareti).
