---
title: AC インピーダンス（EIS）セル
description: 固体電解質ペレットを成形し、ポリカーボネート製インピーダンスセルを組み立て、PMC-2000 でイオン伝導度を測定する。
translation: machine
---

# AC インピーダンス（EIS）セル

このセルは、2 枚のブロッキング性ステンレス電極の間に挟んだ硫化物またはハロゲン化物固体電解質ペレットの<strong>イオン伝導度</strong>を測定します。ステップ 1–9 はグローブボックス内で行ってください。

<div class="facts" markdown>

| | |
|---|---|
| <strong>部品</strong> | ステンレス板 2 枚 · ステンレス集電体 2 個（長・短） · シリコーンガスケット 2 個 · ポリカーボネート製セル本体 · 絶縁体 2 個 · M4 小ねじ · 4 mm 長ねじ · 電解質ペレット |
| <strong>金型</strong> | Ø 6 mm（粉末 20–30 mg）または Ø 10 mm（粉末 80–100 mg） |
| <strong>装置</strong> | [PARSTAT MC · PMC-2000 と VersaStudio](../instruments/potentiostat.md) |
| <strong>解析</strong> | [EIS Studio](https://zacharyslate.github.io/eis-studio/) による [EIS データ解析](../analysis/eis-analysis.md) |

</div>

## デモンストレーション { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>金型の風袋を引きます。</strong>短いプレス棒を金型の底に入れ、金型を天秤に載せて風袋を引きます（ゼロ）。
2. <strong>粉末を入れます。</strong>電解質粉末を金型に注意して移します：Ø 6 mm 金型は <strong>20–30 mg</strong>、Ø 10 mm 金型は <strong>80–100 mg</strong>。質量を記録します。
3. 粉末の上に<strong>長いプレス棒を入れます</strong>。
4. <strong>ペレットを成形します。</strong>金型をプレスの中央に置き、<strong>4 MPa（ゲージ）</strong>を <strong>1 分</strong>かけます。
5. <strong>ペレットを取り出します。</strong>金型をスチール製の受け台の上で逆さにし、プレスで金型をプレス棒から押し外します。ペレットが受け台に出てきます。
6. <strong>セルに入れます。</strong>長い集電体をポリカーボネートセルの底に入れ、ペレットを穴に移し、上から短い集電体を差し込みます。<strong>各集電体にはシリコーンガスケットが必要です。</strong>
7. <strong>緻密化します。</strong>セルをプレスの中央に置き、ゆっくり加圧します：<strong>Ø 10 mm セルは 18 MPa（ゲージ）</strong>、<strong>Ø 6 mm セルは 7.5 MPa（ゲージ）</strong>を <strong>3 分</strong>。
8. <strong>セル全体を組み立てます。</strong>図のとおりスチール板、絶縁体、ねじを取り付けます。
9. <strong>平行にそろえます。</strong>外側のスチール板どうしの隙間がすべての辺で等しくなるようにします（<strong>D1 = D2</strong>）。ナットはすべて<strong>手締め</strong>のみ。
10. <strong>ポテンショスタットを接続します。</strong>2 電極接続にします：<strong>WE（緑）+ SE（灰）</strong>を一方の板へ、<strong>CE（赤）+ RE（白）</strong>をもう一方の板へ。セルは対称なので極性は問いません。
11. <strong>平衡させて測定します。</strong>セルを<strong>少なくとも 45 分</strong>一定温度に保ってから、ポテンショスタティック EIS を実行します（1 回の掃引は約 30 秒〜1 分）。
12. <strong>各温度で繰り返します</strong>：40、60、80、100、120 °C。各温度で少なくとも 45 分待ちます。

</div>

## 測定設定（VersaStudio、Potentiostatic EIS） { #measurement-settings-versastudio-potentiostatic-eis }

| グループ | 設定 | 値 |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0.1 Hz または 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | 対数、<strong>1 ディケードあたり 10 点</strong> |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | <strong>None</strong>（EIS では必須——VersaStudio 取扱説明書 §4.4.2.2） |

!!! question "研究室スライドの不整合"
    研究室のスライドには <em>「Number of points: 30」</em> と <em>「Points per decade: 10」</em> の両方が書かれています。両方は成り立ちません：3 MHz から 0.1 Hz までは 7.5 ディケードなので、10 点/ディケードなら ≈ 75 点（1 Hz までなら ≈ 65 点）です。本ガイドは 1 ディケードあたり 10 点を採用しています。確認してください。

## スペクトルから伝導度へ { #from-spectrum-to-conductivity }

1. 等価回路または緩和時間分布（DRT）でスペクトルを<strong>フィッティング</strong>します。ブロッキング電極が分極する最低周波数域を除き、フィッティング残差に傾向があってはいけません。DRT では各ピークが 1 つの過程に対応し、電極分極の寄与は電解質抵抗から<strong>除外</strong>します。
2. <strong>全抵抗：</strong>R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>（フィッティングで特定したバルクと粒界の寄与）。
3. <strong>ペレットを測ります</strong>：厚さ <em>L</em>（緻密化後）と面積 <em>A</em>。
4. <strong>イオン伝導度：</strong>σ<sub>ion</sub> = <em>L</em> / (R<sub>total</sub> · <em>A</em>)——<em>L</em> を cm、<em>A</em> を cm²、R を Ω としたとき S cm⁻¹。
5. <strong>活性化エネルギー：</strong>σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT)。log₁₀ σ を 1000/T（T は K）に対してプロットします。傾き <em>m</em> から <strong>E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹</strong> が得られます。

!!! warning "研究室スライドの訂正"
    スライドには <em>「slope = 2.313 × E<sub>a</sub>」</em> とあります。定数は ln 10 = <strong>2.303</strong> であり、関係式には R と 1000/T 軸に由来する 1000 倍が含まれなければなりません：E<sub>a</sub> [kJ mol⁻¹] = −2.303 · 8.314 · m = <strong>−19.14 m</strong>。また報告では、σ と σT のどちらを 1/T に対してフィットしたかを明記してください——2 つの方法で E<sub>a</sub> がわずかに異なります。

フィッティング、DRT、伝導度の手順はすべて <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong> で行えます——[EIS データ解析](../analysis/eis-analysis.md)を参照。

## 電子伝導度（DC 分極）

1. 同じブロッキングセルに一定電位を印加します（クロノアンペロメトリー）。電流は初期値から定常値まで減衰します。
2. 定常電流 <em>I</em> を記録し、電解質の作動窓内の複数の電位で繰り返します（例：硫化物では 2–4 V）。
3. V を I に対してプロットすると、傾きが電子抵抗 <em>R</em> です。σ<sub>e</sub> = <em>L</em> / (<em>R</em> · <em>A</em>)。

グループで用いる目標値：セパレーター用電解質は σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ かつ σ<sub>e</sub> < 10⁻⁵ S cm⁻¹、電極バインダーは σ<sub>ion</sub> > 10⁻³ S cm⁻¹ で電子伝導度が高いこと。

## 数値を発表する前に確認すること { #points-to-check-before-you-publish-numbers }

!!! note "ゲージ圧はペレットにかかる圧力ではありません"
    「4 MPa」「18 MPa」は<strong>ゲージ（油圧）圧力</strong>です。ペレットにかかる圧力は <em>P</em><sub>ペレット</sub> = <em>P</em><sub>ゲージ</sub> × (<em>A</em><sub>ラム</sub> / <em>A</em><sub>金型</sub>) であり、Ø 6–10 mm の金型ではその何倍にもなります。他の人が再現できるよう、論文ではペレット圧（およびプレスの型式とラム径）を報告してください。

!!! note "120 °C でのポリカーボネート"
    ポリカーボネートはガラス転移点（≈ 145 °C）付近で軟化し、それよりかなり低い温度でも荷重下でクリープします。100–120 °C で積層圧がかかると、穴やガスケットが変形して接触や厚さが変わることがあります。高温測定の後はセルを点検し、ペレットの厚さを測り直してください。昇温と降温で同じ曲線をたどるかどうかは良い確認方法です。

!!! note "高周波側の限界"
    PMC-2000 の仕様は 7 MHz までですが、~1 MHz を超えるとケーブルのインダクタンスと浮遊容量によって低抵抗ペレットのスペクトルがゆがみます。Kramers–Kronig 検定を行い（EIS Studio で可能）、不合格の高周波点を除外してください。
