---
title: Anton Paar Monowave 400 R
description: Monowave 400 R で密閉バイアルのマイクロ波合成を行う。Cora 5001 によるその場ラマン測定も可能。
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 温度・圧力制御下、磁気撹拌しながら密閉バイアル中で行う液相合成。例：硫化物電解質への溶液ルート |
| <strong>限界</strong> | 最高 <strong>300 °C</strong>、<strong>30 bar</strong>。850 W マグネトロン 1 基。撹拌は最高 1200 rpm |
| <strong>特長</strong> | 「R」版は <strong>Cora 5001 光ファイバーラマンプローブ</strong>を装着でき、反応中のスペクトルをその場で取得できる（クラス 3B レーザー） |
| <strong>必要なもの</strong> | 正しい圧力測定とバイアル密閉のための <strong>5.5–6 bar</strong> の圧縮空気 |
| <strong>トレーニング</strong> | 必須。ラマン測定にはレーザー安全教育が必須 |
| <strong>取扱説明書</strong> | [取扱説明書と参考資料](../manuals.md#monowave) |

</div>

### 反応バイアル

| バイアル | 容量 | 充填量 | 最高 T | 最高 p | 最長時間 |
|---|---|---|---|---|---|
| G4（ガラス） | 4 mL | 0.5–2 mL | 250 °C | 30 bar | 100 h |
| <strong>G10</strong>（ガラス） | 10 mL | <strong>2–6 mL</strong> | 300 °C | 30 bar | 100 h |
| <strong>G30</strong>（ガラス） | 30 mL | <strong>6–20 mL</strong> | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10（SiC） | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck（SiC） | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>Monowave 400 R Reference Guide（E07IB012EN-C）表 1 より。ラマン実験には付録 C のより短い時間制限が適用されます。G4 と SiC バイアルはラマンプローブと一緒に使用<strong>できません</strong>。</small>

!!! danger "始める前に"
    - <strong>クラス 3B レーザー。</strong>ガイドレールやプローブを動かす前にラマンプローブを無効化し（プローブの Stop ボタン）、プローブやファイバーを絶対にのぞかないでください。
    - 必ず<strong>実際に使うバイアルの種類</strong>を選択してください。種類を誤ると温度・圧力の読みが誤り、バイアルが破裂するおそれがあります。
    - 最低充填量を守ってください。IR センサーは底から約 1 cm 上のバイアル壁を測ります。
    - 反応の挙動がわからない場合は、少量・最大希釈から始めてください。
    - 本装置は<strong>耐酸性ではありません</strong>。腐食性試薬は寿命を縮めます（クイックスタートシート）。
    - 大気に敏感な反応：バイアルは<strong>グローブボックス内</strong>で充填・密閉してください。バイアルが放圧すると、排気が反応蒸気（硫化物化学では H₂S の可能性）を運ぶため、排気は局所排気につなぐ必要があります。

## デモンストレーション { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>圧縮空気を確認します。</strong>開始前に供給圧が 5.5–6 bar であること。
2. <strong>バイアルに充填します。</strong>G10（2–6 mL）または G30（6–20 mL）バイアルに適切な撹拌子を入れ、反応混合物を加えます。
3. <strong>バイアルを閉じます。</strong>スナップキャップにセプタムを<strong>PTFE 面を反応混合物側</strong>にして入れ、縁をつまんでも外れなくなるまでキャップを押し込みます。シリコーンセプタム：4 時間未満の実験。PTFE ディスク + PTFE セプタム：4 時間を超える実験（PTFE セプタムは使い捨て）。
4. <strong>実験をプログラムします。</strong>タッチスクリーンで <strong>Task List</strong> をタップし、最後の行をタップして実験名を付け、<strong>Standard</strong> を選び、ステップ（加熱、保持、冷却）を設定します。冷却温度（30–70 °C）は溶媒の沸点より約 10 °C 低くします。<strong>使用するバイアルの種類を選択</strong>して OK をタップします。
5. <strong>ラマンプローブを位置決めします。</strong>レーザーを<strong>無効化</strong>した状態で、ガイドレールを <strong>G10</strong>（最も内側）または <strong>G30</strong>（中間）の位置へ、ラマンを測らない場合は <strong>idle</strong>（最も外側）へ動かします。同じサイズの空の開いたバイアルが抵抗なくキャビティに入ることを確認します。
6. <strong>バイアルを入れます。</strong>G4、G10、C10 バイアルはキャビティインサートの上に<strong>アダプターリング</strong>（ポリイミド面を上）が必要です。G30 バイアルはそのまま入れます。
7. <strong>開始します。</strong><strong>Start</strong> をタップします。ブラインドプラグ装着時（Ruby 温度計なし）は運転が始まり、回転式ふたが閉じます。
8. Cora 5001 での<strong>ラマン測定は</strong>、<strong>ふたが閉じてから開始します</strong>（[Cora 5001 のガイド](cora.md)を参照）。
9. メイン画面で温度、圧力、出力、撹拌を<strong>監視します</strong>。ウィジェットをタップすると実行中の実験を編集できます。
10. <strong>停止します。</strong>終了時——または途中で止める場合——は<strong>まずラマン測定を止めてレーザーを無効化し</strong>、その後（途中で止める場合は）<strong>Stop → Yes</strong> をタップします。装置がバイアルを冷却し、安全になるとふたを開けます。
11. <strong>バイアルを取り出して開けます。</strong>注意して取り出し、キャッピングツールで栓抜きのように開けます（浸漬管付きの場合は注意）。
12. <strong>データをエクスポートします。</strong>Menu ▸ Data Memory ▸ Browse Results ▸ 選択 ▸ USB へ Export（.pdf、.csv、.xls、.raw、.png）。装置は最大 1000 件の結果を保存します。

</div>

## 知っておくとよいこと

- <strong>温度センサー。</strong>内蔵 IR センサー（±5 °C）はバイアル壁を測ります。オプションの Ruby 光ファイバー温度計（±2 °C）は混合物内部を測り、発熱反応や吸収の弱い溶媒に適していますが、<strong>ラマンプローブと同時には使えず</strong>、4 時間を超える運転にも使えません。
- <strong>吸収の弱い溶媒</strong>（例：トルエン、ヘキサン）は加熱されにくく、装置が出力を下げて設定温度に到達しないことがあります。G4 バイアル中の吸収の強い溶媒はオーバーシュートすることがあるので、出力を制限するか「Heat to temperature in time」を使います。
- <strong>ラマンを使わない場合：</strong>プローブを idle にし、未改造のキャビティインサートを取り付けて、バイアルが破損してもプローブが損傷しないようにします。

## 関連

- 硫化物電解質の液相合成中のその場ラマン：[参考文献](../references.md#group-publications)を参照。
