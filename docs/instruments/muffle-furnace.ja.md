---
title: Hobersal マッフル炉
description: Hobersal マッフル炉（Fuji Electric PXF4 プログラマー、K 型熱電対）で昇温–保持–冷却サイクルをプログラムする。
translation: machine
---

# Hobersal マッフル炉（Fuji Electric PXF4 プログラマー）

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | <strong>大気中</strong>での焼成・アニール（酸化物、るつぼ、ガラス器具の洗浄） |
| <strong>限界</strong> | 最高 1200 °C。<strong>研究室の運用上限：数時間なら 1100 °C まで、24 時間以上なら 1000 °C</strong> |
| <strong>コントローラー</strong> | Fuji Electric PXF4、K 型熱電対。最大 8 段の昇温/保持セグメント |
| <strong>取扱説明書</strong> | [取扱説明書と参考資料](../manuals.md#furnace) |

</div>

!!! danger "安全と試料のルール"
    - 炉内の雰囲気は<strong>大気</strong>です。硫化物、ハロゲン化物、その他の大気に敏感な試料は<strong>封入</strong>（例：真空排気した石英アンプル）しなければなりません——開放した硫化物試料を炉に入れないでください。
    - 熱いものの出し入れには耐熱手袋、トング、フェイスシールドを使います。扉は研究室の規則で決めた温度未満でのみ開けます。
    - 密閉容器を耐用範囲を超えて加熱したり、可燃性または有毒物質を放出する材料を加熱したりしないでください。

## デモンストレーション——例：850 °C で 30 分、5 °C/min で昇温、2 °C/min で冷却

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>限界を知っておきます。</strong>最高 1200 °C。この研究室では 1100 °C（数時間）または 1000 °C（24 時間以上）を超えないこと。
2. 右側のスイッチで<strong>炉の電源を入れます</strong>。表示は <strong>PV</strong>（炉内温度）と <strong>SV</strong>（設定値）です。
3. ▲ / ▼ で <strong>SV を 20 °C に設定します</strong>。昇温時間はこの開始値から計算されます。
4. <strong>プログラムメニューを開きます。</strong><strong>CH 1</strong> が出るまで <strong>SEL</strong> を長押しし、▼ を 2 回押して <strong>CH 3</strong>（昇温/保持プログラム）に進みます。
5. <strong>パターン。</strong>SEL を押します：<strong>PtN</strong> が <strong>0</strong> であること（違う場合は SEL を押して 0 に設定）。
6. <strong>時間単位。</strong>▼ を押します：<strong>tCMU</strong> が <strong>HHMM</strong>（時:分）であること。
7. <strong>最初の目標温度。</strong>▼ で <strong>SV-1</strong> に進み、SEL を押して（値が点滅）、◀ ▲ ▼ で <strong>850</strong> にし、SEL を押します。
8. <strong>昇温時間。</strong>▼ で <strong>tM1r</strong>（ランプ時間）に進みます。20 °C から 850 °C まで 5 °C/min の場合：(850 − 20) / 5 = 166 min = <strong>02:46</strong>。設定して SEL を押します。
9. <strong>保持時間。</strong>▼ で <strong>tM1S</strong>（ソーク時間）に進み、<strong>00:30</strong> に設定します。
10. <strong>冷却。</strong>▼ で <strong>SV-2</strong> に進んで <strong>20</strong> に設定、次に <strong>tM2r</strong> = (850 − 20) / 2 = 415 min = <strong>06:55</strong>、次に <strong>tM2S</strong> = <strong>00:00</strong>。
11. <strong>使わないセグメント。</strong>SV-3 … SV-8 が <strong>0</strong>、その時間が <strong>00:00</strong> であることを確認し、戻るキー（⮌）でメニューを出ます。
12. <strong>試料を入れ</strong>（るつぼまたは封入アンプル）、扉を閉じます。
13. <strong>運転します。</strong>SEL を押します：<strong>StbY</strong> が <strong>off</strong> であること。▼ で <strong>ProG</strong> に進み、SEL を押して <strong>off → Run</strong> に変え、SEL を押します。メイン表示に戻ると、左下に <strong>Run</strong> と表示されます。
14. <strong>停止します。</strong>終了したプログラムは自動的に止まるので、その後炉の電源を切ります。途中で止めるには：SEL を長押しし、▼ で <strong>ProG</strong> に進み、<strong>Run → off</strong> に変えて SEL を押し、メイン表示に戻ります。

</div>

## 昇温時間の計算機

PXF4 は昇温速度ではなく昇温<strong>時間</strong>を入力します。値を入力してください：

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>開始（°C）<input type="number" id="rc-a" value="20"></label>
<label>目標（°C）<input type="number" id="rc-b" value="850"></label>
<label>速度（°C/min）<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>昇温時間（HH:MM）<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! note "プログラムの正確さ"
    昇温は SV = 20 °C から計算されます。開始時に炉がまだ温かいと、最初のセグメントの実際の昇温速度は公称値と異なります。各運転の開始時に PV を記録してください。
