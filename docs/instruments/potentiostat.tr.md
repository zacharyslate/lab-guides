---
title: VersaStudio ile PARSTAT MC · PMC-2000
description: PARSTAT MC PMC-2000 ile VersaStudio'da bir kanal seçme, potansiyostatik EIS deneyi kurma, çalıştırma ve kalibre edilmiş verileri dışa aktarma.
translation: machine
---

# VersaStudio ile PARSTAT MC · PMC-2000

<div class="facts" markdown>

| | |
|---|---|
| **Ne için** | EIS, DC polarizasyon (elektronik iletkenlik), CV, düşük akımlarda batarya döngüleme |
| **PMC-2000 kanalı** | ±30 V uyum, ±1 A, EIS **10 µHz – 7 MHz**, en düşük akım aralığı 4 nA, diferansiyel elektrometreler ≥ 10 MHz |
| **Yazılım** | VersaStudio (Windows) — `.par` veri dosyaları (ikili kayıt açıksa + `.par.psbd`) |
| **Hücre** | [AC empedans hücresi](../cells/eis-cell.md) — donanım kısmı için onun gösterimine bakın |
| **Kılavuzlar** | [Kılavuzlar ve kaynaklar](../manuals.md#potentiostat) |

</div>

## Hücre kablosu renkleri (PMC-2000 kablosu)

| Renk | Uç | İki elektrotlu hücre (EIS hücresi, batarya) |
|---|---|---|
| Yeşil | WE — çalışma | gri ile birlikte **bir** elektroda |
| Gri | SE — algılama | yeşil ile |
| Kırmızı | CE — karşı | beyaz ile birlikte **diğer** elektroda |
| Beyaz | RE — referans | kırmızı ile |
| Sarı / mavi | E2+ / E2− (6. tel) | kullanılmaz |
| Siyah | GND | kullanılmaz — diğer uçlara değmemeli |

**Düşük empedanslı hücrelerde veya 100 mA'nın üzerindeki akımlarda**, temas direncinden kaynaklanan gerilim hatalarını önlemek için uçları birbirine geçirmek ("piggy-back") yerine her birini terminale ayrı ayrı bağlayın (PMC-2000 kılavuzu, §3).

## Gösterim — yazılım

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. **Başlatma.** PARSTAT MC herhangi bir kalibrasyondan önce en az 10 dk açık olmalıdır. **VersaStudio**'yu açın (Başlat ▸ VersaStudio). Birden fazla kanal varsa **No Instrument** seçili olarak açılır.
2. **Kanalınızı seçin.** Tools ▸ **Select Instrument** ve kanalınıza çift tıklayın. Sağ tık ▸ *Locate Instrument* kanalın LED'ini yakıp söndürür; böylece hücrenize bağlı kanal olduğunu doğrulayabilirsiniz. **DATA** işaretli kanallar başka birinin kullanımındadır — seçmeyin.
3. **Doğrulama (şüphe durumunda).** Experiment ▸ Load Setup ▸ *Impedance Checkout* **dahili 1 kΩ sahte hücreyi** ölçer. Tüm noktalar 1000 Ω ± 20 Ω vermelidir.
4. **Yeni deney.** Experiment ▸ **New** ▸ *Select an Action* ▸ Impedance ▸ **Potentiostatic EIS** ▸ OK ve veri dosyasına bir ad verin.
5. **Parametreleri girin**: *Experiment Properties* içinde (EIS hücresi değerleri [EIS hücresi sayfasında](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)). Her değerden sonra **Enter**'a basın — yazılıp onaylanmayan bir değer kaydedilmez. Numune adını, pelet kalınlığını ve alanını *Common* altında yorum olarak ekleyin.
6. **Gelişmiş özellikler.** *Cell to Use* = **External**, akım aralığı, elektrometre modu (iki elektrotlu hücre için single-ended; dört elektrotlu hücreler için diferansiyel), *Leave Cell On* = No.
7. **Filtreler.** Tools ▸ Options ▸ Instrument: EIS için **Notch filter = None** (zorunlu). Değiştirmek için bir nedeniniz yoksa *EIS filters*'ı Normal'de bırakın.
8. **Çalıştırmadan önce kaydedin.** Experiment ▸ Save; böylece veriler deney sırasında diske yazılır.
9. **Çalıştırın** (▶). Nyquist grafiği oluşmaya başlar. **■** durdurur; **⏭** sonraki segmente geçer.
10. **Kalibre edilmiş verileri dışa aktarın.** EIS işlemleri için Data ▸ Export To ▸ **ZView (.z)** veya Graph View ▸ *Copy Data as Text*. **`.par` dosyasındaki ham EIS sütunlarını analiz etmeyin** — VersaStudio bunları kalibre edilmemiş olarak kaydeder (yazılım kılavuzu, Ek 3).
11. **Kanalı serbest bırakın.** Deneyinizi kapatın ve bir sonraki kullanıcının kanalı seçebilmesi için *No Instrument*'a geri dönün. Kabloları düzenli bırakın.

</div>

## Bataryalarda DC deneyleri

- Bataryalar ve diğer enerji depolama hücreleri için akım aralığını **önce 2 A'ya** ayarlayın (veya 2 A'dan başlayan *Auto Current Range Setup* işlemini kullanın). Hassas bir aralıkta "Auto" ile başlamak onu aşırı yükleyip zarar verebilir (yazılım kılavuzu, Current Range uyarısı).
- **Leave Cell On**, potansiyostatik ile galvanostatik bir işlem arasında, EIS ile DC işlemi arasında veya farklı akım aralıklarındaki galvanostatik işlemler arasında tehlikelidir: anahtarlama hücrenize akım sıçramaları gönderebilir.
- *Common* altında gerilim ve akım **güvenlik sınırları** ayarlayın — aşıldıklarında tüm diziyi durdururlar.

## Yazılım yapılandırma notları (laboratuvar bilgisayarı)

- Windows güç planı: asla uyku moduna geçmesin, güç düğmesi hiçbir şey yapmasın, hızlı başlatma kapalı — aksi halde uzun deneyler veri kaybedebilir (yazılım kılavuzu, §3.3).
- Bir yazılım güncellemesinden sonra VersaStudio ürün yazılımı güncellemesi isteyebilir: kesintisiz tamamlanmasına izin verin, ardından her kanalda *Calibrate for best DC accuracy* çalıştırın.
