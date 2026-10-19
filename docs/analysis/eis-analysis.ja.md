---
title: EIS データ解析
description: EIS セルのインピーダンススペクトルを EIS Studio で解析する方法——VersaStudio からのエクスポート、検証、等価回路、DRT、伝導度。
translation: machine
---

# EIS データ解析

解析は <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong> で行います。自分のコンピューターの Web ブラウザーで動く無料のオープンソースアプリで、データはアップロードされません。一般的なポテンショスタットのファイルを読み込み、Kramers–Kronig の妥当性検定を行い、等価回路（R、C、L、CPE、Warburg、Gerischer、伝送線路要素）をフィッティングし、ピーク積分付きの正則化緩和時間分布（DRT）を計算し、厚さと面積から不確かさの伝播を含めてイオン伝導度を計算します。

<div class="inst-grid" markdown>

[<strong>チュートリアル</strong> <span>初めての解析をステップごとに</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[<strong>測定</strong> <span>実験セットアップの指針</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[<strong>理論</strong> <span>回路、DRT、検証</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[<strong>インストール</strong> <span>ローカルで実行</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## EIS セルのワークフロー

1. <strong>VersaStudio から校正済みデータをエクスポートします</strong>——Data ▸ Export To ▸ ZView（`.z`）、または Graph View からコピー。VersaStudio 取扱説明書（付録 3）によると、`.par` ファイル内の生の EIS 列は<strong>未校正</strong>です。
2. 各スペクトルを Kramers–Kronig 検定で<strong>検証します</strong>。不合格の高周波点（ケーブルのアーティファクト）を除外し、除外した点数を記録します。
3. 等価回路を<strong>フィッティング</strong>するか、<strong>DRT</strong> を計算します。ブロッキング電極の低周波の寄与は電解質抵抗から除外します。
4. <strong>伝導度</strong>——ペレットの厚さと直径を入力：σ = <em>L</em> / (R · <em>A</em>)。
5. <strong>活性化エネルギー</strong>——温度シリーズ全体で log₁₀ σ を 1000/T に対してフィッティング：E<sub>a</sub> = −19.14 × 傾き kJ mol⁻¹（[EIS セルのページ](../cells/eis-cell.md#from-spectrum-to-conductivity)を参照）。σ と σT のどちらをフィットしたか明記してください。

!!! note "報告すべき内容"
    ペレットの質量、厚さ、直径。ペレットにかかる成形圧（ゲージ値だけでなく）。温度と平衡時間。周波数範囲、振幅、1 ディケードあたりの点数。使った回路または DRT の設定。フィッティング残差。
