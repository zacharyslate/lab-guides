---
title: Fritsch Pulverisette 7 classic line
description: 遊星型マイクロミル Fritsch Pulverisette 7 に試料を入れ、バランスを取り、クランプし、プログラムして、密閉容器で大気に敏感な材料を粉砕する。
translation: machine
---

# Fritsch Pulverisette 7 classic line（遊星型マイクロミル）

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | メカノケミカル合成と混合。例：75Li₂S–25P₂S₅ ガラス（[手順](../procedures/lps-ball-milling.md)） |
| <strong>回転数</strong> | 100–800 rpm（10 刻み） |
| <strong>プログラム</strong> | 粉砕時間、休止時間（各 0–99 分 59 秒、またはセットアップモードで時:分）、繰り返し 0–99、反転モード（任意） |
| <strong>大気遮断粉砕</strong> | 研究室では、ポリマーガスケット付きの ZrO₂ 容器を PTFE スペーサーとゴムガスケットとともに<strong>ステンレスタンク内</strong>に密閉する——グローブボックス内で充填 |
| <strong>トレーニング</strong> | 必須。故障や損傷はすぐに責任者へ報告 |
| <strong>取扱説明書</strong> | [取扱説明書と参考資料](../manuals.md#ball-mill) |

</div>

!!! danger "安全"
    - <strong>ミルのバランスを取ってください。</strong>反対側のステーションには必ず<strong>同じ質量</strong>（ふたとガスケットを含む）の容器をクランプします。空のカウンター容器は、差が 70–100 g 未満の場合のみ許容されます。アンバランスな負荷ではミルが机の上を移動します。
    - スピンドルクランプには<strong>挟まれの危険</strong>があります。締め付け時は指を離してください。
    - <strong>やけどの危険。</strong>長時間の運転では容器が非常に熱くなります（内部は外壁より 20–30 °C 高い）。取り出しには耐熱手袋を使います。外壁の最高温度：100–110 °C（メノウ：70–80 °C）。
    - 硫化物を入れた密閉容器をグローブボックスの外で開けないでください。

## デモンストレーション { #demonstration }

<div class="demo" data-demo="ball-mill">
--8<-- "ball-mill.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>グローブボックス内で容器に充填します。</strong>粉末とボールを ZrO₂ 容器に入れます（75Li₂S–25P₂S₅ の場合：手で混合した粉末 1 g と Ø 5 mm ボール 90 g）。
2. 白いポリマーガスケットと ZrO₂ のふたで<strong>容器を閉じます</strong>。
3. <strong>鋼製タンクを密閉します。</strong>容器の下と上に PTFE スペーサーを 1 枚ずつ入れてステンレスタンクに収め、ゴムガスケットを付けてタンクを閉じます。グローブボックスから出せるのはこの後です。
4. 背面の主電源スイッチで<strong>ミルの電源を入れます</strong>（POWER SUPPLY ランプが点灯）。ふたはミルの電源が入っているときだけ開きます：ハンドルを押し、静かに持ち上げます。
5. <strong>両方のステーションにセットします。</strong>コルクディスクがあり、つぶれていないことを確認します。一方のステーションにタンクを、反対側に<strong>同じ質量</strong>の容器を置きます。
6. <strong>クランプします。</strong>スピンドルねじ（13）を回して押さえ部がふたに平らに当たるまで下げ、<strong>手で</strong>締めます。次にロックナット（14）をホルダーまで下げ、手で締めます。両方のステーションで行います。
7. + / − キーで<strong>回転数を設定します</strong>（75Li₂S–25P₂S₅ の手順では 510 rpm）。
8. <strong>プログラムを設定します。</strong><strong>MILLING</strong> を押して粉砕時間を、<strong>PAUSE</strong> を押して休止時間（なければ 0）を設定し、<strong>REPETITIONS</strong> の回数を設定します。各区間の後で回転方向を変えたい場合は <strong>REVERSE</strong> を使います（1 回以上の繰り返しが必要）。
9. <strong>ふたを閉じて START を押します。</strong>ふたがロックされ、ミルが回転します。過負荷の場合は REDUCED SPEED ランプが点滅し、回転数が下がります。
10. <strong>クランプを再確認します。</strong>最初の数分後に <strong>STOP</strong> を押し、ふたのロックが解除されるのを待って、両方のスピンドルねじとロックナットが締まったままか確認します。<strong>START</strong> を押すと再開します——経過時間と繰り返し回数は記憶されています。
11. <strong>終了します。</strong><strong>STOP</strong> を押します。ミルが止まってしばらくするとふたのロックが解除されます。耐熱手袋でタンクを取り出し、開ける前にグローブボックスへ運びます。主電源スイッチでミルの電源を切ります。

</div>

!!! warning "デューティサイクル"
    Pulverisette 7 classic line は<strong>デューティサイクル 30% の 8 時間シフト</strong>（例：粉砕 3 分 + 休止 7 分）向けに設計されており、<strong>連続運転向けではありません</strong>（Fritsch 取扱説明書、§2）。中断のない長時間運転——現行の LPS 手順のような<strong>休止なしの 510 rpm、24 時間</strong>——はこの限度を超え、摩耗と発熱が増えます。24 時間を維持する場合は粉砕/休止サイクルをプログラムし、合成への影響を指導教員と相談してください。休止によって粉末の熱履歴が変わるため、結果を再検証する必要があります。

## 清掃

- 粉砕部品：材質（ZrO₂、メノウ、鋼）ごとに Fritsch の <em>Usage, care and cleaning</em> に従ってください。熱い容器を冷水に入れないでください。
- 使用後は粉砕室を清掃し、容器から漏れた粉末があれば報告してください（クランプの緩みやガスケットの摩耗の兆候です）。
