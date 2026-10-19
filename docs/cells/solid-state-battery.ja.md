---
title: 全固体試験電池
description: 実験室用の全固体マイクロ試験電池（正極/電解質の二層ペレットとインジウムまたは Li–In 負極）を組み立て、Neware CT-9008 でサイクル試験する。
translation: machine
---

# 全固体試験電池

[EIS](eis-cell.md) と同じポリカーボネートセルで作るマイクロ試験電池です：<strong>二層ペレット</strong>（固体電解質 + 複合正極）の反対側に金属負極を置きます。ステップ 1–11 は<strong>グローブボックス</strong>内で行います。

<div class="facts" markdown>

| | |
|---|---|
| <strong>電解質層</strong> | Ø 10 mm 金型で 100 mg |
| <strong>正極層</strong> | 複合正極 10 mg（例：[正極の手順](../procedures/cathode-composite.md)で作製） |
| <strong>負極</strong> | Li 箔 Ø 6.0 mm × 0.25 mm（研磨）と In 箔 Ø 8.0 mm × 0.3 mm。<strong>リチウム含有正極（例：NMC）：Li は使わず、In 箔 Ø 8.0 mm × 0.1 mm のみ</strong> |
| <strong>充放電装置</strong> | [Neware CT-9008（5 V、6 mA）](../instruments/battery-cyclers.md)——このセルに十分低い電流レンジを持つ研究室で唯一の装置 |

</div>

## デモンストレーション { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>金型の風袋を引きます。</strong>短いプレス棒を Ø 10 mm 金型の底に入れ、天秤で風袋を引きます（ゼロ）。
2. <strong>電解質 100 mg を入れ</strong>、正確な質量を記録します。
3. <strong>電解質層を成形します。</strong>長いプレス棒を入れ、<strong>4 MPa（ゲージ）で 1 分</strong>プレスします。
4. <strong>正極を入れます。</strong>長いプレス棒を手で抜き、<strong>複合正極 10 mg</strong> を電解質の表面全体に均一に広げます。質量を記録します（先にペレット入りの金型の風袋を引く）。
5. <strong>二層を成形します。</strong>長いプレス棒を戻し、再び <strong>4 MPa（ゲージ）で 1 分</strong>プレスします。
6. <strong>二層ペレットを取り出します。</strong>金型をスチール製の受け台の上で逆さにし、プレスで金型をプレス棒から押し外します。
7. <strong>セルに入れて緻密化します。</strong>二層ペレットをポリカーボネートセルに入れます。<strong>長い集電体を底に</strong>し、各集電体にシリコーンガスケットを付けます。セルをプレスの中央に置き、<strong>18 MPa（ゲージ）をゆっくり 3 分</strong>かけます。
8. <strong>電解質を露出させます。</strong>短い集電体を抜きます。二層の<strong>電解質側</strong>が上を向いていること（正極側は長い集電体に接している）。
9. <strong>負極を準備します。</strong>負極金属を短い集電体に貼り付けます（寸法は上の表）。
10. <strong>負極を付けます。</strong>セル本体を逆さにして負極付きの短い集電体にかぶせ、電池を <strong>4 MPa（ゲージ）で 2 分</strong>プレスします。
11. 板、絶縁体、ねじで<strong>セル全体を組み立てます</strong>。すべての辺で隙間をそろえ（<strong>D1 = D2</strong>）、ナットは<strong>手締め</strong>にします。これで OCV 測定ができます。
12. <strong>充放電装置に接続します。</strong>セルをグローブボックスから出し、CT-9008 のチャンネルに接続します：<strong>正（赤）を正極側</strong>（長い集電体）、<strong>負（黒）を負極側</strong>に。開回路電圧が安定していることを確認します。
13. BTS で<strong>試験をプログラムして開始します</strong>：OCV で休止し、その後電圧範囲内で定電流充電と放電を必要なサイクル数だけ繰り返します。[電池充放電装置](../instruments/battery-cyclers.md#choosing-the-current)を参照。

</div>

## 電流と電圧範囲の選び方

- <strong>容量の見積もり。</strong>NMC-111 を 38 wt% 含むコンポジット 10 mg（コンポジット 300 mg 中 NMC 114 mg）では、セル中の NMC は ≈ 3.8 mg です。典型的な実用容量 ~150 mAh g⁻¹ なら ≈ 0.57 mAh となり、<strong>0.1 C ≈ 57 µA</strong>、<strong>0.05 C ≈ 28 µA</strong> です。実測の正極質量と、材料に期待される容量を使ってください。
- <strong>どのチャンネルか。</strong>この電流では <strong>CT-9008</strong> だけが適切に動作します（電流レンジ 1：0.1–180 µA、精度 ±36 nA）。CT-4008 と CT-5008 はそれぞれ 0.2 mA と 0.12 mA からで——このセルの 0.1 C を上回り——精度は 100 mA または 120 mA フルスケールの ±0.02%（±20–24 µA）で、電流そのものと同程度です。
- <strong>電圧。</strong>Li–In 負極は Li⁺/Li 基準で ≈ 0.6 V にあるため、Li⁺/Li 基準で示された正極の電圧範囲は BTS に入力する際 ≈ 0.6 V 下げる必要があります。

!!! question "研究室責任者に確認"
    - スライドには Li 箔と In 箔の両方が示されていますが、両方使う場合にどちらが電解質側かが書かれていません。積層順を追記してください。
    - スライドのステップ 4 では 2 回目のプレス後に <em>「remove the long pressing arm by hand, and retare the die with pellet」</em> とあります。本ガイドでは正極質量を記録できるよう、風袋引きを正極を入れる前に移しています。意図どおりか確認してください。

!!! note "ゲージ圧"
    圧力はすべて油圧プレスの<strong>ゲージ</strong>値です。結果を報告するときはペレット圧（ゲージ × ラム面積 / 金型面積）に換算してください——[EIS セルのページ](eis-cell.md#points-to-check-before-you-publish-numbers)を参照。
