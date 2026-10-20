---
title: Neware 電池充放電装置
description: セルに合った Neware 充放電装置と電流レンジを選び、BTS でステップファイルを作成し、チャンネルを開始してデータをエクスポートする。
translation: machine
---

# Neware 電池充放電装置（CT-4008、CT-4008T、CT-5008、CT-9008）

## どのセルにどの装置か

充放電装置は、電流を正確に<strong>印加し測定</strong>できなければなりません。精度は<strong>レンジのフルスケール</strong>に対する割合で表されるため、大きなレンジで小さな電流を流すと不正確になります。

| 装置 | 電圧 | 電流レンジ | 精度（電流） | 適するもの |
|---|---|---|---|---|
| <strong>CT-9008-5V6A-F</strong> | −5〜+5 V | 0.1–180 µA · 180 µA–6 mA · 6–180 mA · 0.18–6 A | ±36 nA · ±1.2 µA · ±36 µA · ±1.2 mA | <strong>全固体マイクロセル、低レートのコインセル</strong> |
| CT-5008-5V12A-TF | −3〜+5 V | 0.12–120 mA · 0.12–1.2 A · 1.2–12 A | ±0.02% FS（最小レンジで ±24 µA） | ~1 mA 以上のコインセル・パウチセル |
| CT-4008Q-5V12A-S1 | 25 mV–5 V（汎用ホルダー使用時は放電最低 2 V） | 0.2–100 mA · 0.1–0.5 A · 0.5–6 A · 6–12 A | ±0.02% FS | 大きなセル。2 V 未満まで放電するセルには<strong>不適</strong> |
| CT-4008T-5V12A-S1-F | −1〜5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0.05% FS | ≥ 5 mA が必要なセル |

<small>研究室ファイルの Neware 仕様書より。FS = フルスケール。</small>

### 電流の選び方 { #choosing-the-current }

1. 容量を見積もります：<em>Q</em>（mAh）= 活物質質量（g）× 期待比容量（mAh g⁻¹）。
2. C レート <em>n</em> の電流：<em>I</em> = <em>n</em> × <em>Q</em>（<em>Q</em> が mAh なら mA）。
3. 最小レンジが <em>I</em> を許容誤差で<strong>含む</strong>装置とレンジを選びます（目標：<em>I</em> の 1% 未満）。

<em>例：</em>[全固体試験電池](../cells/solid-state-battery.md)は ≈ 0.57 mAh → 0.1 C ≈ 57 µA → <strong>CT-9008、レンジ 1</strong>（誤差 ±36 nA ≈ 0.06%）。CT-4008/5008 では同じ電流が最小レンジを下回り、精度（±20–24 µA）は電流の約 40% になります。

## 当研究室の装置 { #our-set-up }

<div class="photo-grid" markdown>

<figure markdown>
![ポテンショスタットの下の Neware 充放電装置。チャンネル番号は各装置の前面に印字されています。装置ごとに電流レンジが異なる（上の表）ので、チャンネルを開始する前に装置の型式ラベルを確認してください。](../assets/img/rack-neware.jpg){ loading=lazy }
<figcaption>ポテンショスタットの下の Neware 充放電装置。チャンネル番号は各装置の前面に印字されています。装置ごとに電流レンジが異なる（上の表）ので、チャンネルを開始する前に装置の型式ラベルを確認してください。</figcaption>
</figure>

<figure markdown>
![装置ラック：上が PARSTAT MC ポテンショスタット、その下が Neware の電池充放電装置です。セルケーブルはラックの両側に掛けてあります。](../assets/img/rack-overview.jpg){ loading=lazy }
<figcaption>装置ラック：上が PARSTAT MC ポテンショスタット、その下が Neware の電池充放電装置です。セルケーブルはラックの両側に掛けてあります。</figcaption>
</figure>

</div>

## デモンストレーション——BTS ソフトウェア

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. デバイス一覧で<strong>装置を選び</strong>（ここではマイクロセル用の CT-9008）、空きチャンネルを探します。事前に[予約ページ](../booking.md)でチャンネルを予約してください。
2. <strong>セルを</strong>チャンネルに<strong>接続します</strong>（4 線式ケルビンクリップ：赤 2 本を正極、黒 2 本を負極）。チャンネル枠に開回路電圧が表示されるので、安定するまで待ちます。
3. <strong>チャンネルを右クリック ▸ Single start。</strong>
4. <strong>ステップファイルを作成または読み込みます。</strong>典型例：<em>Rest</em>（OCV）→ <em>CC 充電</em>（電流、上限カットオフ電圧）→ <em>Rest</em> → <em>CC 放電</em>（電流、下限カットオフ電圧）→ ステップ 2 へ <em>Cycle</em>、<em>N</em> 回 → <em>End</em>。カットオフ電圧のすぐ外側に<strong>保護リミット</strong>（上限・下限電圧）を設定します。ステップ名は BTS のバージョンによって少し異なります（例：CC_Chg / CCC、CC_DChg / CCD）。
5. <strong>試験情報を入力します</strong>：一意の名前/バーコード（イニシャル、セルの種類、日付、番号）、容量を mAh g⁻¹ で表示するための<strong>活物質質量</strong>、ステップファイル。<strong>Start</strong> を押します。
6. <strong>開始を確認します</strong>：枠が <em>working</em> になり、ステップ、電圧、電流が表示されます。最初の数分を見守ってください——符号が逆、またはリミットに張り付いた電圧は、接続かステップの誤りを示します。
7. <strong>データを見ます</strong>：右クリック ▸ View data で <strong>BTSDA</strong> が開き、V–t や容量–サイクルをプロットし、<strong>Excel へエクスポート</strong>できます。
8. <strong>終了します</strong>：試験は <em>End</em> で終わるか、右クリック ▸ <strong>Single stop</strong>。セルを外し、予約を解放します。

</div>

!!! warning "チャンネルを開始する前に"
    - 他の人が予約しているチャンネルや、<em>working</em> / <em>pause</em> と表示されているチャンネルを開始しないでください。
    - BTS には<strong>対極に対する</strong>電圧を入力します。Li–In 負極では、Li⁺/Li 基準の限界値から ≈ 0.6 V を引きます。
    - 全固体セルは試験中ずっと積層圧が必要です——ステップの間にセルを緩めないでください。
