---
title: Hobersal 马弗炉
description: 在 Hobersal 马弗炉（Fuji Electric PXF4 程序控制器，K 型热电偶）上编写升温–保温–降温程序。
translation: machine
---

# Hobersal 马弗炉（Fuji Electric PXF4 程序控制器）

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 在<strong>空气中</strong>煅烧和退火（氧化物、坩埚、玻璃器皿清洁） |
| <strong>限值</strong> | 最高 1200 °C。<strong>实验室工作限值：数小时内最高 1100 °C，24 小时及以上的运行最高 1000 °C</strong> |
| <strong>控制器</strong> | Fuji Electric PXF4，K 型热电偶；最多 8 个升温/保温段 |
| <strong>说明书</strong> | [说明书与参考资料](../manuals.md#furnace) |

</div>

!!! danger "安全与样品规则"
    - 炉内气氛为<strong>空气</strong>。硫化物、卤化物和其他对空气敏感的样品必须<strong>密封</strong>（例如封在抽真空的石英安瓿中）——切勿将敞口的硫化物样品放入炉中。
    - 装卸任何热物品时，使用耐热手套、坩埚钳和面罩。只在低于实验室规定的温度时开门。
    - 切勿将密封容器加热超过其耐受范围，也不要加热易燃或会释放有毒物质的材料。

## 演示——示例：850 °C 保温 30 分钟，以 5 °C/min 升温，以 2 °C/min 降温

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>了解限值。</strong>最高 1200 °C；本实验室不超过 1100 °C（数小时）或 1000 °C（24 小时及以上）。
2. 用右侧开关<strong>打开炉子</strong>。显示屏显示 <strong>PV</strong>（炉内温度）和 <strong>SV</strong>（设定值）。
3. 用 ▲ / ▼ <strong>将 SV 设为 20 °C</strong>。升温时间从这个起始值计算。
4. <strong>打开程序菜单。</strong>按住 <strong>SEL</strong> 直到出现 <strong>CH 1</strong>，再按两次 ▼ 进入 <strong>CH 3</strong>（升温/保温程序）。
5. <strong>模式。</strong>按 SEL：<strong>PtN</strong> 必须为 <strong>0</strong>（如果不是，按 SEL 并设为 0）。
6. <strong>时间单位。</strong>按 ▼：<strong>tCMU</strong> 必须显示 <strong>HHMM</strong>（时:分）。
7. <strong>第一个目标温度。</strong>按 ▼ 到 <strong>SV-1</strong>，按 SEL（数值闪烁），用 ◀ ▲ ▼ 设为 <strong>850</strong>，再按 SEL。
8. <strong>升温时间。</strong>按 ▼ 到 <strong>tM1r</strong>（升温时间）。从 20 °C 以 5 °C/min 升到 850 °C：(850 − 20) / 5 = 166 min = <strong>02:46</strong>。设定后按 SEL。
9. <strong>保温时间。</strong>按 ▼ 到 <strong>tM1S</strong>（保温时间），设为 <strong>00:30</strong>。
10. <strong>降温。</strong>按 ▼ 到 <strong>SV-2</strong>，设为 <strong>20</strong>；然后 <strong>tM2r</strong> = (850 − 20) / 2 = 415 min = <strong>06:55</strong>；然后 <strong>tM2S</strong> = <strong>00:00</strong>。
11. <strong>未使用的段。</strong>确认 SV-3 … SV-8 均为 <strong>0</strong>，其时间均为 <strong>00:00</strong>，然后按返回键（⮌）退出菜单。
12. <strong>放入样品</strong>（装在坩埚或密封安瓿中）并关上炉门。
13. <strong>运行。</strong>按 SEL：<strong>StbY</strong> 必须为 <strong>off</strong>。按 ▼ 到 <strong>ProG</strong>，按 SEL，将 <strong>off → Run</strong>，再按 SEL。返回主显示——左下角显示 <strong>Run</strong>。
14. <strong>停止。</strong>程序结束后会自动停止；然后关闭炉子。提前停止：按住 SEL，按 ▼ 到 <strong>ProG</strong>，将 <strong>Run → off</strong>，按 SEL，然后返回主显示。

</div>

## 升温时间计算器

PXF4 要求输入升温<strong>时间</strong>，而不是速率。请输入您的数值：

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>起始（°C）<input type="number" id="rc-a" value="20"></label>
<label>目标（°C）<input type="number" id="rc-b" value="850"></label>
<label>速率（°C/min）<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>升温时间（HH:MM）<input type="text" id="rc-out" readonly></label>
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

!!! note "程序准确性"
    升温按 SV = 20 °C 计算。如果开始时炉子仍是热的，第一段的实际升温速率将与名义速率不同。每次运行开始时请记录 PV。
