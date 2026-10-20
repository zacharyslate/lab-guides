---
title: QR ラベル
description: 各装置の印刷用 QR ラベル——ダウンロードして印刷し、傷んだら交換してください。
translation: machine
---

# 装置の QR ラベル

誰でもスマートフォンから装置のガイドと予約ページを開けるよう、各装置に QR ラベルを貼ってください。ラベルがない、傷んでいる、読み取れない場合は、ここからダウンロードして印刷し、貼り替えてください。

## シート（A4） { #full-sheets-a4 }

- [13 枚すべて——各コードは<strong>その装置のガイド</strong>を開きます（推奨）](assets/qr/qr-labels-instrument.pdf)
- [13 枚すべて——すべてのコードが<strong>ホームページ</strong>を開きます](assets/qr/qr-labels-main.pdf)

## 1 枚ずつのラベル { #single-labels }

| 装置 | コードでガイドを開く | コードでホームページを開く |
|---|---|---|
| MBraun EasyLab glovebox | [PDF](assets/qr/label-glovebox.pdf) | [PDF](assets/qr/label-glovebox-home.pdf) |
| Büchi Rotavapor R-210 | [PDF](assets/qr/label-rotavapor.pdf) | [PDF](assets/qr/label-rotavapor-home.pdf) |
| PARSTAT MC · PMC-2000 | [PDF](assets/qr/label-pmc.pdf) | [PDF](assets/qr/label-pmc-home.pdf) |
| Neware CT-9008 | [PDF](assets/qr/label-ct9008.pdf) | [PDF](assets/qr/label-ct9008-home.pdf) |
| Neware CT-5008 | [PDF](assets/qr/label-ct5008.pdf) | [PDF](assets/qr/label-ct5008-home.pdf) |
| Neware CT-4008Q | [PDF](assets/qr/label-ct4008.pdf) | [PDF](assets/qr/label-ct4008-home.pdf) |
| Neware CT-4008T | [PDF](assets/qr/label-ct4008t.pdf) | [PDF](assets/qr/label-ct4008t-home.pdf) |
| Anton Paar Monowave 400 R | [PDF](assets/qr/label-monowave.pdf) | [PDF](assets/qr/label-monowave-home.pdf) |
| Anton Paar Cora 5001 | [PDF](assets/qr/label-cora.pdf) | [PDF](assets/qr/label-cora-home.pdf) |
| Fritsch Pulverisette 7 | [PDF](assets/qr/label-ballmill.pdf) | [PDF](assets/qr/label-ballmill-home.pdf) |
| Mettler Toledo C20S | [PDF](assets/qr/label-kf.pdf) | [PDF](assets/qr/label-kf-home.pdf) |
| Hobersal muffle furnace | [PDF](assets/qr/label-furnace.pdf) | [PDF](assets/qr/label-furnace-home.pdf) |
| Argolab drying oven | [PDF](assets/qr/label-oven.pdf) | [PDF](assets/qr/label-oven-home.pdf) |

## 印刷と貼り付け { #printing-and-fitting }

1. <strong>100 %／「実際のサイズ」</strong>で印刷し、「ページに合わせる」は使わないでください。各ラベルは <strong>63 × 52 mm</strong>、QR コードは幅 34 mm です。
2. 灰色の線に沿って切ります。装置を使うときに立つ位置の目の高さに、高温の面（マッフル炉、乾燥機の扉、ロータリーエバポレーターの浴）から離して貼ります。
3. 透明テープかラミネートで保護してください。溶媒や手袋で紙はすぐに傷みます。
4. <strong>貼った後にスマートフォンで読み取ってください。</strong>ページが開かなければ印刷し直し、読めないラベルを装置に残さないでください。

<small>ラベルはリポジトリの `tools/make_qr_labels.py` で生成しています。サイトのアドレスが変わった場合は、スクリプトの `SITE` を更新して再実行してください。保存前にすべてのコードを読み取って確認します。</small>
