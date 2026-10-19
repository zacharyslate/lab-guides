---
title: Argolab 乾燥機
description: Argolab（Giorgio Bormac）TCN/TCF Plus シリーズ乾燥機の使い方——単一設定値の PROG 0、多段プログラム、入れてよいもの・いけないもの。
translation: machine
---

# Argolab 乾燥機（TCN / TCF Plus シリーズ）

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | ガラス器具、工具、大気中で安定な粉末の乾燥。グローブボックスの前室に入れる前のセル部品の乾燥 |
| <strong>範囲</strong> | 最高 +300 °C（TCN-50/115/200 と TCF Plus。TCN-30 Plus は +200 °C）。研究室の乾燥機の銘板を確認してください |
| <strong>コントローラー</strong> | マイクロプロセッサー：最大 7 プログラム × 10 ステップ（温度、時間、強制送風型ではファン速度）と、1 ステップのプログラム <strong>PROG 0</strong> |
| <strong>取扱説明書</strong> | <em>Ovens and Incubators — User manual</em>（Giorgio Bormac、rev. 0、31.05.2021）——[取扱説明書](../manuals.md#oven) |

</div>

!!! danger "乾燥機に絶対に入れてはいけないもの"
    - <strong>可燃性溶媒</strong>やそれで濡れたもの、爆発性物質、空気/溶媒の混合物（火災・爆発の危険）。
    - 加熱や分解で<strong>有毒または可燃性のガス</strong>を出す材料——<strong>硫化物電解質</strong>（H₂S）を含みます。
    - 乾燥機の下に物を置かない、通気口をふさがない、運転中は背面の吸気口に触れない（高温）。

## デモンストレーション { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>乾燥するものを確認します。</strong>ガラス器具、工具、大気中で安定で不燃性の材料のみ（上の枠を参照）。
2. ON/OFF キーで<strong>電源を入れます</strong>。ブザーが鳴って <strong>end</strong> と表示される場合は、前の利用者のサイクルが電源を切る前に終了していたということです。任意のキーで止めます。
3. <strong>プログラムを呼び出します。</strong>スタンバイ中に <strong>SET/PROG</strong> を短く押すと、「PROG」と番号が点滅します。▲ / ▼ でプログラムを選び、SET/PROG で確定します。
4. <strong>単一設定値（PROG 0）。</strong>PROG 0 を選び、番号だけが点滅するまで <strong>SET/PROG を長押し</strong>し、もう一度 SET/PROG を押して編集します。▲ / ▼ と <strong>SHIFT</strong>（桁の移動）で温度を設定し、確定してからタイマーを設定します。<strong>タイマー 00:00 = START/STOP を押すまで運転。</strong>
5. <strong>多段プログラム（1–7）。</strong>各ステップには温度、時間、強制送風型ではファン速度（H/M/L）があります。ステップ <em>n</em> の後で終了するには、ステップ <em>n</em> + 1 の時間を <strong>00:00</strong> にします。
6. 空気が循環するよう間隔をあけて棚に<strong>物を入れ</strong>、扉を閉じます。
7. <strong>START/STOP</strong> で<strong>開始します</strong>。表示は庫内温度です。
8. 終わったら <strong>START/STOP</strong> で<strong>停止します</strong>。熱いものは耐熱手袋で取り出し、他に使う人がいなければ電源を切ります。

</div>

!!! note "グローブボックス用のガラス器具"
    ここで乾燥したものは、室内の空気中で数分のうちに再び水分を吸います。温かいうちに乾燥機から直接グローブボックスの前室へ移し、[グローブボックスのガイド](glovebox.md)のとおりに前室サイクルを行ってください。

!!! info "パスワードで保護された設定"
    遅延開始、プログラムの繰り返し、試料保護用の温度上限、過昇温アラーム、温度オフセットは、パスワードで保護されたサブメニューにあります。変更するのは研究室責任者だけです。
