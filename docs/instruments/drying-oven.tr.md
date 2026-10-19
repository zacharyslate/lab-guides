---
title: Argolab etüvü
description: Argolab (Giorgio Bormac) TCN/TCF Plus serisi kurutma etüvünün kullanımı — basit ayar noktası için PROG 0, çok adımlı programlar ve içine neyin konulup konulamayacağı.
translation: machine
---

# Argolab kurutma etüvü (TCN / TCF Plus serisi)

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | Cam malzeme, aletler ve havada kararlı tozları kurutmak; hücre parçalarını eldivenli kabin ön odasına girmeden önce kurutmak |
| **Aralık** | +300 °C'ye kadar (TCN-50/115/200 ve TCF Plus modelleri; TCN-30 Plus: +200 °C). Laboratuvardaki etüvün model etiketini kontrol edin |
| **Kontrolör** | Mikroişlemci: en fazla 7 program × 10 adım (sıcaklık, süre, cebri havalı modellerde fan hızı) artı tek adımlı bir program olan **PROG 0** |
| **Kılavuz** | *Ovens and Incubators — User manual* (Giorgio Bormac, rev. 0, 31.05.2021) — [Kılavuzlar](../manuals.md#oven) |

</div>

!!! danger "Etüve asla konulmaması gerekenler"
    - **Yanıcı çözücüler** veya bunlarla ıslanmış her şey, patlayıcı malzemeler ya da hava/çözücü karışımları (yangın ve patlama riski).
    - Isıtıldığında veya bozunduğunda **toksik ya da yanıcı gazlar** açığa çıkaran malzemeler — buna **sülfür elektrolitler** (H₂S) de dahildir.
    - Etüvün altına bir şey koymayın, havalandırma deliklerini kapatmayın ve çalışırken arkadaki hava girişine dokunmayın (sıcak).

## Gösterim { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. **Ne kuruttuğunuzu kontrol edin.** Yalnızca cam malzeme, aletler ve havada kararlı, yanıcı olmayan malzemeler (yukarıdaki kutuya bakın).
2. ON/OFF tuşuyla **açın**. Etüv bip sesi çıkarıp **end** gösteriyorsa, önceki kullanıcının döngüsü kapatılmadan önce bitmiştir; sesi kesmek için herhangi bir tuşa basın.
3. **Bir program çağırın.** Bekleme modunda **SET/PROG**'a kısa basın: "PROG" ve numarası yanıp söner. ▲ / ▼ ile programı seçin ve SET/PROG ile onaylayın.
4. **Basit ayar noktası (PROG 0).** PROG 0'ı seçin ve yalnızca numara yanıp sönene kadar **SET/PROG'u basılı tutun**, ardından düzenlemek için SET/PROG'a tekrar basın. Sıcaklığı ▲ / ▼ ve **SHIFT** (haneler arasında geçiş) ile ayarlayın, onaylayın ve zamanlayıcıyı ayarlayın. **Zamanlayıcı 00:00 = siz START/STOP'a basana kadar çalışır.**
5. **Çok adımlı programlar (1–7).** Her adımın bir sıcaklığı, süresi ve — cebri havalı etüvlerde — fan hızı (H/M/L) vardır. *n*. adımdan sonra bitirmek için *n* + 1. adımın süresini **00:00** yapın.
6. Malzemelerinizi havanın dolaşması için boşluk bırakarak raflara **yükleyin** ve kapıyı kapatın.
7. **START/STOP** ile **başlatın**. Ekran hazne sıcaklığını gösterir.
8. İşiniz bitince **START/STOP** ile **durdurun**. Sıcak malzemeleri çıkarmak için ısıya dayanıklı eldiven kullanın ve başka kimse kullanmıyorsa etüvü kapatın.

</div>

!!! note "Eldivenli kabin için cam malzeme"
    Burada kurutulan malzemeler oda havasında birkaç dakika içinde yeniden nem alır. Hâlâ sıcakken doğrudan etüvden eldivenli kabin ön odasına götürün ve ön odayı [eldivenli kabin kılavuzunda](glovebox.md) anlatıldığı gibi döngüye sokun.

!!! info "Parola korumalı ayarlar"
    Gecikmeli başlatma, program tekrarı, numune koruma sıcaklık sınırı, aşırı sıcaklık alarmı ve sıcaklık ofsetleri parola korumalı bir alt menüdedir. Bunları yalnızca laboratuvar sorumlusu değiştirir.
