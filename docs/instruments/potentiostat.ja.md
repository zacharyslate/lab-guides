---
title: PARSTAT MC · PMC-2000 と VersaStudio
description: PARSTAT MC PMC-2000 を使い、VersaStudio でチャンネルを選択し、ポテンショスタティック EIS 実験を設定・実行し、校正済みデータをエクスポートする。
translation: machine
---

# PARSTAT MC · PMC-2000 と VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | EIS、DC 分極（電子伝導度）、CV、小電流での電池サイクル |
| <strong>PMC-2000 チャンネル</strong> | ±30 V コンプライアンス、±1 A、EIS <strong>10 µHz – 7 MHz</strong>、最小電流レンジ 4 nA、差動エレクトロメーター ≥ 10 MHz |
| <strong>ソフトウェア</strong> | VersaStudio（Windows）——データファイル `.par`（バイナリ保存が有効なら `.par.psbd` も） |
| <strong>セル</strong> | [AC インピーダンスセル](../cells/eis-cell.md)——ハードウェア部分はそのデモを参照 |
| <strong>取扱説明書</strong> | [取扱説明書と参考資料](../manuals.md#potentiostat) |

</div>

## 当研究室の装置 { #our-set-up }

<div class="photo-grid" markdown>

<figure markdown>
![PARSTAT MC 本体。各チャンネルはテープで表示されており、それぞれに POWER、STATUS、COMM、OVERLOAD の LED とセルケーブル端子があります。主電源スイッチは左下です。](../assets/img/rack-parstat.jpg){ loading=lazy }
<figcaption>PARSTAT MC 本体。各チャンネルはテープで表示されており、それぞれに POWER、STATUS、COMM、OVERLOAD の LED とセルケーブル端子があります。主電源スイッチは左下です。</figcaption>
</figure>

<figure markdown>
![装置ラック：上が PARSTAT MC ポテンショスタット、その下が Neware の電池充放電装置です。セルケーブルはラックの両側に掛けてあります。](../assets/img/rack-overview.jpg){ loading=lazy }
<figcaption>装置ラック：上が PARSTAT MC ポテンショスタット、その下が Neware の電池充放電装置です。セルケーブルはラックの両側に掛けてあります。</figcaption>
</figure>

</div>

## セルケーブルの色（PMC-2000 ケーブル）

| 色 | リード | 2 電極セル（EIS セル、電池） |
|---|---|---|
| 緑 | WE——作用極 | 灰と一緒に<strong>一方の</strong>電極へ |
| 灰 | SE——センス | 緑と一緒に |
| 赤 | CE——対極 | 白と一緒に<strong>もう一方の</strong>電極へ |
| 白 | RE——参照極 | 赤と一緒に |
| 黄 / 青 | E2+ / E2−（6 本目） | 使用しない |
| 黒 | GND | 使用しない——他のリードに触れさせない |

<strong>低インピーダンスのセルや 100 mA を超える電流</strong>では、接触抵抗による電圧誤差を避けるため、リードを重ね差し（「ピギーバック」）せず、端子に 1 本ずつ接続してください（PMC-2000 取扱説明書、§3）。

## デモンストレーション——ソフトウェア

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>起動。</strong>校正を行う前に、PARSTAT MC の電源を少なくとも 10 分入れておきます。<strong>VersaStudio</strong> を開きます（スタート ▸ VersaStudio）。複数チャンネルがある場合、<strong>No Instrument</strong> が選択された状態で開きます。
2. <strong>自分のチャンネルを選択します。</strong>Tools ▸ <strong>Select Instrument</strong> でチャンネルをダブルクリックします。右クリック ▸ <em>Locate Instrument</em> でチャンネルの LED が点滅するので、自分のセルにつながっているチャンネルか確認できます。<strong>DATA</strong> と表示されたチャンネルは他の人が使用中です——選択しないでください。
3. <strong>確認（迷ったとき）。</strong>Experiment ▸ Load Setup ▸ <em>Impedance Checkout</em> で<strong>内蔵 1 kΩ ダミーセル</strong>を測定します。すべての点が 1000 Ω ± 20 Ω になるはずです。
4. <strong>新しい実験。</strong>Experiment ▸ <strong>New</strong> ▸ <em>Select an Action</em> ▸ Impedance ▸ <strong>Potentiostatic EIS</strong> ▸ OK とし、データファイルに名前を付けます。
5. <em>Experiment Properties</em> に<strong>パラメーターを入力します</strong>（EIS セルの値は [EIS セルのページ](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)）。値を入力するたびに <strong>Enter</strong> を押してください——入力しただけで確定していない値は保存されません。試料名、ペレットの厚さと面積を <em>Common</em> にコメントとして追加します。
6. <strong>詳細プロパティ。</strong><em>Cell to Use</em> = <strong>External</strong>、電流レンジ、エレクトロメーターモード（2 電極セルはシングルエンド、4 電極セルは差動）、<em>Leave Cell On</em> = No。
7. <strong>フィルター。</strong>Tools ▸ Options ▸ Instrument：EIS では <strong>Notch filter = None</strong>（必須）。変更する理由がなければ <em>EIS filters</em> は Normal のままにします。
8. <strong>実行前に保存します。</strong>Experiment ▸ Save。実験中にデータがディスクに書き込まれます。
9. <strong>実行</strong>（▶）。ナイキスト線図が描かれていきます。<strong>■</strong> で停止、<strong>⏭</strong> で次のセグメントへ進みます。
10. <strong>校正済みデータをエクスポートします。</strong>EIS アクションでは Data ▸ Export To ▸ <strong>ZView (.z)</strong>、または Graph View ▸ <em>Copy Data as Text</em>。<strong>`.par` ファイルの生の EIS 列を解析しないでください</strong>——VersaStudio はそれらを未校正のまま保存します（ソフトウェア取扱説明書、付録 3）。
11. <strong>チャンネルを解放します。</strong>実験を閉じて <em>No Instrument</em> に戻し、次の利用者がチャンネルを選べるようにします。ケーブルは整えておきます。

</div>

## 電池での DC 実験

- 電池やその他の蓄電セルでは、電流レンジを<strong>まず 2 A</strong> に設定します（または 2 A から始める <em>Auto Current Range Setup</em> アクションを使います）。感度の高いレンジから「Auto」で始めると、過負荷で損傷することがあります（ソフトウェア取扱説明書、Current Range の注意）。
- ポテンショスタティックとガルバノスタティックのアクションの間、EIS と DC のアクションの間、異なる電流レンジのガルバノスタティックアクションの間で <strong>Leave Cell On</strong> を使うのは危険です。切り替え時にセルへ電流スパイクが流れることがあります。
- <em>Common</em> で電圧と電流の<strong>安全リミット</strong>を設定します——超えるとシーケンス全体が停止します。

## ソフトウェア設定のメモ（研究室 PC）

- Windows の電源プラン：スリープしない、電源ボタンは何もしない、高速スタートアップ無効——そうしないと長時間の実験でデータが失われることがあります（ソフトウェア取扱説明書、§3.3）。
- ソフトウェア更新後、VersaStudio がファームウェア更新を求めることがあります。中断せずに完了させ、その後各チャンネルで <em>Calibrate for best DC accuracy</em> を実行してください。
