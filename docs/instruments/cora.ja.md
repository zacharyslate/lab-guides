---
title: Anton Paar Cora 5001
description: ファイバープローブ式の Cora 5001 分光器で密閉試料のラマンスペクトルを測定し、Monowave 400 R でのその場測定に使う。
translation: machine
---

# Anton Paar Cora 5001 ラマン分光器

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 粉末、液体、反応混合物のラマンスペクトル。[Monowave 400 R](monowave.md) 内での反応のその場モニタリング |
| <strong>研究室の仕様</strong> | <strong>Cora 5001 Fiber</strong>：レーザーとラマン信号はファイバープローブを通る。励起波長はラベルで確認（532、785、1064 nm、またはデュアル） |
| <strong>レーザー</strong> | ファイバープローブ使用時は<strong>クラス 3B</strong>——プローブがドッキングステーションにあっても同じ |
| <strong>トレーニング</strong> | 必須。レーザー安全教育を含む |
| <strong>取扱説明書</strong> | [取扱説明書と参考資料](../manuals.md#cora) |

</div>

!!! danger "クラス 3B レーザー"
    - プローブ先端やファイバー端を絶対にのぞかず、プローブを人や反射面に向けないでください。
    - プローブが遮蔽されていないときは、使用波長用のレーザー保護メガネを着用してください。
    - 試料室やファイバーポートを開ける、プローブの <strong>Stop</strong> を押す、またはインターロックが作動すると、レーザーは直ちに停止します。

## デモンストレーション { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. 背面パネルのスイッチで<strong>電源を入れます</strong>。温度が安定するまで約 <strong>15 分</strong>待ちます。ウォームアップ中も測定できますが、終わるまで設定はロックされます。
2. 自分のユーザーアカウントで<strong>ログインします</strong>。
3. <strong>試料を準備します。</strong>大気に敏感な粉末は<strong>グローブボックス内で充填した密閉ガラスバイアル</strong>に入れます。バイアルを机で軽くたたいて粉末を詰め、気泡をなくします。
4. <strong>ドッキングステーションにセットします。</strong>固定ねじを緩め、プローブを後方ストッパーまでスライドさせます。バイアルを入れたホルダーをステーションに置き、ふたを閉じます。
5. <strong>レーザーを有効にします。</strong>プローブの <strong>Enable</strong>（または装置インターロックのリセットボタン）を押します。<strong>Ready</strong> LED が点灯します。
6. <strong>焦点を合わせます。</strong><strong>Adjust Focus</strong> を開き、<strong>Start</strong> をタップしてライブスペクトルを表示します。信号が最大になるまでプローブを試料側へスライドさせ、<strong>固定ねじを締めて</strong> <strong>Stop</strong> をタップします。焦点はプローブ先端の数 mm 前にあります。
7. <strong>測定を設定します。</strong>Menu ▸ <strong>Single Measurement</strong>：試料名を入力し、波長（デュアルレーザー機）とレーザー出力を選びます（532 nm：オン = 50 mW、785/1064 nm：0–450 mW、50 mW 以上を推奨）。<strong>Auto Exposure</strong>（最大 10 s）は最初の試行に適しています。
8. <strong>詳細設定（任意）。</strong>バックグラウンド取得（室内光を除去）、ノイズ低減のための N 本のスペクトル平均、宇宙線除去（N ≥ 3 が必要。蛍光試料ではオフ）、蛍光のベースライン補正。
9. <strong>測定します。</strong><strong>Measure</strong> をタップします。スペクトルが表示され、試料名で保存されます。ソフトウェアが品質上の問題を指摘することがあります。
10. <strong>保存とエクスポート。</strong>スペクトルをエクスポートまたは印刷するか、<strong>Save as method</strong> で同じ設定を後で繰り返せるようにします。プローブの <strong>Stop</strong> を押すと測定が中止され、レーザーが無効になります。
11. <strong>終了します。</strong>試料を取り出し、背面スイッチで電源を切ります（データは電源を切るときに保存されます）。

</div>

## 電池材料のためのヒント

- <strong>使える信号が得られる最小のレーザー出力を使ってください。</strong>黒っぽい試料（炭素を含むコンポジット、NMC）は強く吸収し、特に 532 nm で局所的に加熱・分解することがあります。同じ点で続けて 2 本のスペクトルを取り、違いがあれば出力を下げます。
- <strong>ガラスも信号を出します。</strong>空のバイアルを<em>まったく同じ</em>設定（焦点、出力、露光——Auto Exposure はオフ）で測定し、差し引く<strong>カスタムブランク</strong>として使います。
- <strong>蛍光</strong>は幅広く立ち上がるバックグラウンドになります。長い波長（785 または 1064 nm）で軽減できます。
- <strong>不均一な試料：</strong>複数点で測定します。
- プローブ先端と試料を室内光から遮ってください。蛍光灯はラマンピークに似た鋭い線を生じます。

## Monowave 400 R でのその場ラマン

プローブを Monowave 400 R のガイドレールに取り付けている場合は、[Monowave のガイド](monowave.md)に従ってください：バイアルのサイズに合わせたプローブ位置の設定は<strong>レーザー無効の状態</strong>で行い、ラマン測定は回転式ふたが閉じてから開始し、マイクロ波運転を止める<strong>前に</strong>ラマン測定を止めてレーザーを無効にします。反応には<strong>時系列測定</strong>（Cora のリファレンスガイド参照）を使い、溶媒バンドなど変化しないバンドで規格化します。
