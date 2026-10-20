---
title: AC empedans (EIS) hücresi
description: Bir katı elektrolit peleti presleme, polikarbonat empedans hücresini monte etme ve PMC-2000'de iyonik iletkenliği ölçme.
translation: machine
---

# AC empedans (EIS) hücresi

Bu hücre, iki bloke edici paslanmaz çelik elektrot arasındaki sülfür veya halojenür katı elektrolit peletinin **iyonik iletkenliğini** ölçer. 1–9. adımları eldivenli kabinin içinde yapın.

<div class="facts" markdown>

| | |
|---|---|
| **Parçalar** | 2 paslanmaz çelik plaka · 2 paslanmaz çelik akım toplayıcı (bir uzun, bir kısa) · 2 silikon conta · polikarbonat hücre gövdesi · 2 yalıtkan · küçük M4 vidalar · uzun 4 mm vidalar · elektrolit peleti |
| **Kalıplar** | Ø 6 mm (20–30 mg toz) veya Ø 10 mm (80–100 mg toz) |
| **Cihaz** | [VersaStudio ile PARSTAT MC · PMC-2000](../instruments/potentiostat.md) |
| **Analiz** | [EIS Studio](https://zacharyslate.github.io/eis-studio/) ile [EIS veri analizi](../analysis/eis-analysis.md) |

</div>

## Gösterim { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Kalıbın darasını alın.** Kısa pres pistonunu kalıbın dibine yerleştirin, kalıbı teraziye koyun ve darasını alın (sıfırlayın).
2. **Tozu ekleyin.** Elektrolit tozunu dikkatle kalıba aktarın: Ø 6 mm kalıp için **20–30 mg**, Ø 10 mm kalıp için **80–100 mg**. Kütleyi kaydedin.
3. **Uzun pistonu** tozun üzerine **yerleştirin**.
4. **Peleti presleyin.** Kalıbı presin ortasına koyun ve **1 dk** boyunca **4 MPa (manometre)** uygulayın.
5. **Peleti çıkarın.** Kalıbı çelik altlığın üzerinde ters çevirin ve presle kalıbı pistonlardan dışarı itin. Pelet altlığa düşer.
6. **Hücreyi yükleyin.** Uzun akım toplayıcıyı polikarbonat hücrenin dibine koyun, peleti deliğe aktarın ve üstüne kısa akım toplayıcıyı yerleştirin. **Her akım toplayıcının kendi silikon contasına ihtiyacı vardır.**
7. **Yoğunlaştırın.** Yüklü hücreyi presin ortasına koyun ve basıncı yavaşça uygulayın: **Ø 10 mm hücre için 18 MPa (manometre)** veya **Ø 6 mm hücre için 7,5 MPa (manometre)**, **3 dk** boyunca.
8. **Tam hücreyi kurun.** Çelik plakaları, yalıtkanları ve vidaları çizimdeki gibi ekleyin.
9. **Hizalayın.** Dış çelik plakalar arasındaki boşluk her tarafta aynı olmalıdır (**D1 = D2**). Tüm somunları yalnızca **elle** sıkın.
10. **Potansiyostatı bağlayın.** İki elektrotlu bağlantı kullanın: **WE (yeşil) + SE (gri)** bir plakaya, **CE (kırmızı) + RE (beyaz)** diğerine. Hücre simetrik olduğundan polarite önemli değildir.
11. **Dengeye getirin ve ölçün.** Hücrenin **en az 45 dk** sabit sıcaklığa ulaşmasını bekleyin, ardından potansiyostatik EIS çalıştırın (bir tarama yaklaşık 30 s – 1 dk sürer).
12. **Her sıcaklıkta tekrarlayın**: 40, 60, 80, 100 ve 120 °C; her adımda en az 45 dk bekleyin.

</div>

## Pres ve basınç dönüşümü { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Riken Seiki ayak pompası ve 0–100 MPa manometresi: pelet üzerindeki basıncı değil, yağ basıncını gösterir](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Riken Seiki ayak pompası ve 0–100 MPa manometresi: pelet üzerindeki basıncı değil, yağ basıncını gösterir</figcaption>
</figure>

<figure markdown>
![CDM-5M pres: üstteki silindir pistonu aşağı, taban plakasında duran kalıba veya hücreye doğru iter](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>CDM-5M pres: üstteki silindir pistonu aşağı, taban plakasında duran kalıba veya hücreye doğru iter</figcaption>
</figure>

</div>

Ayak pompasındaki manometre silindirdeki **yağ basıncını** gösterir. Kuvvet, bu basıncın silindirin pistonuna, yani **40 mm'lik mile** etki etmesinden gelir; 45 mm'lik baş kuvveti yalnızca zımbaya iletir. Peletteki basınç, bu kuvvetin pelet alanına bölümüdür:

<div class="formula" markdown>

*F* = *P*<sub>g</sub> × π *d*² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>p</sub> = *F* / (π *D*² / 4) = *P*<sub>g</sub> × (*d* / *D*)² &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>g</sub> = *P*<sub>p</sub> × (*D* / *d*)²

</div>

*d* = mil çapı (40 mm), *D* = kalıp (pelet) çapı. *d* = 40 mm ile **manometrede 1 MPa = 1,26 kN (0,13 t)**.

| Kalıp Ø | Pelet alanı | Pelet ÷ manometre | 4 MPa manometre (pelet oluşturma) | Hücre için laboratuvar ayarı |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 7,5 MPa manometre → **333 MPa** (9,4 kN) |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 18 MPa manometre → **288 MPa** (22,6 kN) |

**Tersinden:** Ø 10 mm'lik bir peleti 375 MPa'da preslemek için manometreyi 375 × (10/40)² = **23,4 MPa**'ya ayarlayın; Ø 6 mm için 375 × (6/40)² = **8,4 MPa**.

<div class="bk press-calc">
<div class="bk-row">
<label>Mil Ø (mm)<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>Kalıp Ø (mm)<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>Manometre (MPa)<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>Pelet basıncı (MPa)<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>Kuvvet<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "Sayılara güvenmeden önce"
    - Hesap, yağın ittiği piston olarak **40 mm'lik mili** alır. Silindirin etiketinde etkin alan yazıyorsa onu kullanın: 45 mm'lik bir piston %27 daha fazla kuvvet verir.
    - Silindir ve kalıptaki sürtünme ile manometrenin doğruluğu hesaba katılmamıştır. Makalelerde pelet basıncını manometre okuması, mil ve kalıp çapları ve pres modeliyle birlikte verin.
    - Pompa etiketindeki anma basıncını veya kalıbın anma yükünü asla aşmayın.

## Ölçüm ayarları (VersaStudio, Potentiostatic EIS) { #measurement-settings-versastudio-potentiostatic-eis }

| Grup | Ayar | Değer |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0,1 Hz veya 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | Logaritmik, **dekat başına 10 nokta** |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | **None** (EIS için zorunlu — VersaStudio kılavuzu §4.4.2.2) |

## Spektrumdan iletkenliğe { #from-spectrum-to-conductivity }

1. Spektrumu bir eşdeğer devreyle veya bir gevşeme süreleri dağılımıyla (DRT) **fit edin**. Fit artıkları, bloke edici elektrotların polarize olduğu en düşük frekanslar dışında bir desen göstermemelidir. DRT'de her pik bir sürece karşılık gelir; elektrot polarizasyonu katkısı elektrolit direncinden **hariç tutulur**.
2. **Toplam direnç:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (fitinizde belirlenen hacim ve tane sınırı katkıları).
3. **Peleti ölçün**: kalınlık *L* (yoğunlaştırmadan sonra) ve alan *A*.
4. **İyonik iletkenlik:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — *L* cm, *A* cm² ve R Ω cinsinden olmak üzere S cm⁻¹.
5. **Aktivasyon enerjisi:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). log₁₀ σ'yı 1000/T'ye karşı çizin (T, K cinsinden). Eğim *m*, **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹** verir.

!!! note "Aktivasyon enerjisi"
    Raporlarda 1/T'ye karşı σ mı yoksa σT mi uydurduğunuzu belirtin; iki yaklaşım biraz farklı E<sub>a</sub> verir.

Fit, DRT ve iletkenlik adımlarının tümü **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**'da yapılabilir — bkz. [EIS veri analizi](../analysis/eis-analysis.md).

## Elektronik iletkenlik (DC polarizasyon)

1. Aynı bloke edici hücreye sabit bir potansiyel uygulayın (kronoamperometri); akım başlangıç değerinden kararlı bir duruma düşer.
2. Kararlı durum akımı *I*'yı kaydedin ve elektrolitin çalışma penceresi içindeki birkaç potansiyelde tekrarlayın (ör. sülfürler için 2–4 V).
3. V'yi I'ya karşı çizin; eğim elektronik direnç *R*'dir. Bu durumda σ<sub>e</sub> = *L* / (*R* · *A*).

Grupta kullanılan hedefler: ayırıcı elektrolitler için σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ ve σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; elektrot bağlayıcıları için yüksek elektronik iletkenlikle σ<sub>ion</sub> > 10⁻³ S cm⁻¹.

## Sonuçları yayımlamadan önce kontrol edilecek noktalar { #points-to-check-before-you-publish-numbers }

!!! note "Manometre basıncı pelet basıncı değildir"
    "4 MPa", "7,5 MPa" ve "18 MPa" **manometre (yağ) basınçlarıdır**. 40 mm'lik mille, Ø 10 mm'lik pelette 18 MPa manometre ≈ **288 MPa**, Ø 6 mm'lik pelette 7,5 MPa ≈ **333 MPa** eder — bkz. [Pres ve basınç dönüşümü](#press). Başkalarının tekrarlayabilmesi için makalelerde pelet basıncını (ve manometre okumasını, mil ve kalıp çaplarını) verin.

!!! note "120 °C'de polikarbonat"
    Polikarbonat camsı geçişine (≈ 145 °C) yakın yumuşar ve çok daha önce yük altında sünme gösterir. Yığın basıncı altında 100–120 °C'de delik ve contalar deforme olabilir; bu da teması ve kalınlığı değiştirir. Yüksek sıcaklık çalışmalarından sonra hücreyi kontrol edin ve pelet kalınlığını yeniden ölçün; kendini tekrarlayan bir ısıtma-soğutma çalışması iyi bir testtir.

!!! note "Yüksek frekans sınırı"
    PMC-2000 7 MHz'e kadar belirtilmiştir, ancak ~1 MHz'in üzerinde kablo endüktansı ve kaçak kapasitans düşük dirençli peletlerin spektrumunu bozar. Bir Kramers–Kronig testi yapın (EIS Studio bunu sunar) ve testi geçemeyen yüksek frekans noktalarını atın.
