---
title: Mettler Toledo C20S カールフィッシャー電量計
description: Mettler Toledo C20S 電量滴定式カールフィッシャー滴定装置で溶媒の水分を測定する。1% 水分標準での確認を含む。
translation: machine
---

# Mettler Toledo C20S 電量滴定式カールフィッシャー滴定装置

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 液体中の微量水分——例：エタノール、アセトニトリル、THF が電解質の液相合成に十分乾いているかの確認 |
| <strong>原理</strong> | 発生電極でヨウ素を電気化学的に生成して水と反応させ、必要な電気量から水の質量を求める |
| <strong>セル</strong> | 発生電極（隔膜あり/なし、<strong>青いプラグ</strong>）、二重白金指示電極、乾燥管、セプタム、マグネチックスターラー |
| <strong>トレーニング</strong> | 必須 |
| <strong>取扱説明書</strong> | [取扱説明書と参考資料](../manuals.md#karl-fischer) |

</div>

!!! danger "安全"
    KF 試薬はメタノールなどのアルコール、ヨウ素、SO₂、塩基を含み、有毒かつ可燃性です。手袋と保護メガネを着用し、セルの充填と排出はドラフト内で行い、使用済み試薬は研究室が指定する KF 試薬用の廃液容器に捨ててください。

## デモンストレーション { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>セルを確認します。</strong>セルに試薬が入り、両電極が接続され（発生電極 = <strong>青いプラグ</strong>）、乾燥管に新しい乾燥剤が入り、すべての栓とすり合わせがしっかり差し込まれていること——漏れがあると室内の湿気が入ります。
2. <strong>滴定装置の電源を入れます。</strong>
3. <strong>メソッドを準備します（初回のみ）。</strong>Methods ▸ New ▸ Standard method template ▸ <strong>KF Coul</strong> ▸ Sample：<em>Entry type</em> を <strong>Weight</strong> に設定 ▸ OK ▸ Save。Start 画面で <strong>AddToHome</strong> をタップしてショートカットを作ります（<em>Immediate start</em> にチェック）。
4. <strong>前滴定。</strong>ショートカットをタップします。滴定装置が試薬中にもともとある水を除去します。スターラーが回っている必要があります。ドリフトが下がるのを待ちます。
5. <strong>スタンバイ。</strong>ドリフトが低く安定すると、滴定装置は <strong>Standby</strong> になり、<strong>Start sample</strong> が有効になります。
6. <strong>試料用シリンジを準備します。</strong>シリンジに試料（またはシステム確認用の <strong>1% KF 水分標準</strong>）を満たし、天秤に載せて<strong>風袋を引きます</strong>。
7. <strong>注入します。</strong><strong>Start sample</strong> をタップし、針をセプタムに刺して先端が試薬の液面下に来るようにし——電極には触れないように——注入します（1% 標準を 0.5–1.0 mL）。
8. <strong>再秤量します。</strong>シリンジを天秤に戻し、表示された<strong>試料質量</strong>（符号を除いたマイナスの値）を入力します。滴定が実行されます。
9. <strong>結果を読みます</strong>（R1、水分）。1% 標準は証明書の許容範囲内で ≈ 10 mg g⁻¹ になるはずです。そうでなければ、試料を測る前に試薬とドリフトを確認します。
10. <strong>停止します。</strong><strong>Stop analysis</strong> で現在の分析を止めるか、<strong>More ▸ End series</strong> でシリーズを終了します。

</div>

## 良い習慣

- 毎日<strong>まず標準を</strong>測ってから試料を測ります。各試料は少なくとも 3 回測定します。
- 充填前にシリンジを試料で共洗いし、乾いた密閉シリンジを使います。
- ドリフトが高いままのとき、標準の結果がずれるとき、セルが満杯に近いときは試薬を交換します。
- 発生電極の手入れ：中身を出し、メタノールですすぎ、けば立たない布で拭き、70–80 °C で数時間乾燥します（取扱説明書 §7）。

!!! warning "硫化物を含む試料を注入しないでください"
    硫化物、H₂S、チオールはヨウ素と反応して<strong>偽って高い</strong>水分値を与え、試薬も消費します。この滴定装置は<strong>溶媒と液体</strong>に使ってください。硫化物電解質粉末中の水分は直接注入では測れません——代替法を研究室責任者と相談してください。
