---
title: 交流阻抗（EIS）电池
description: 压制固态电解质片，组装聚碳酸酯阻抗电池，并在 PMC-2000 上测量离子电导率。
translation: machine
---

# 交流阻抗（EIS）电池

该电池用于测量夹在两个阻塞型不锈钢电极之间的硫化物或卤化物固态电解质片的<strong>离子电导率</strong>。第 1–9 步在手套箱内完成。

<div class="facts" markdown>

| | |
|---|---|
| <strong>部件</strong> | 2 块不锈钢板 · 2 个不锈钢集流体（一长一短） · 2 个硅胶密封圈 · 聚碳酸酯电池体 · 2 个绝缘片 · M4 短螺丝 · 4 mm 长螺丝 · 电解质片 |
| <strong>模具</strong> | Ø 6 mm（20–30 mg 粉末）或 Ø 10 mm（80–100 mg 粉末） |
| <strong>仪器</strong> | [PARSTAT MC · PMC-2000 与 VersaStudio](../instruments/potentiostat.md) |
| <strong>分析</strong> | 使用 [EIS Studio](https://zacharyslate.github.io/eis-studio/) 进行 [EIS 数据分析](../analysis/eis-analysis.md) |

</div>

## 演示 { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>模具去皮。</strong>将短压杆放入模具底部，把模具放在天平上并去皮（归零）。
2. <strong>加入粉末。</strong>小心地将电解质粉末转移到模具中：Ø 6 mm 模具 <strong>20–30 mg</strong>，Ø 10 mm 模具 <strong>80–100 mg</strong>。记录质量。
3. 在粉末上方<strong>插入长压杆</strong>。
4. <strong>压片。</strong>将模具放在压机中央，施加 <strong>4 MPa（压力表）</strong>，保持 <strong>1 分钟</strong>。
5. <strong>脱模。</strong>将模具倒置在钢制托座上，用压机将模具从压杆上推下。片落入托座中。
6. <strong>装入电池。</strong>将长集流体放在聚碳酸酯电池底部，把片转移到孔中，再在上方插入短集流体。<strong>每个集流体都需要配一个硅胶密封圈。</strong>
7. <strong>致密化。</strong>将装好的电池放在压机中央，缓慢加压：<strong>Ø 10 mm 电池 18 MPa（压力表）</strong>或 <strong>Ø 6 mm 电池 7.5 MPa（压力表）</strong>，保持 <strong>3 分钟</strong>。
8. <strong>组装完整电池。</strong>按图示装上钢板、绝缘片和螺丝。
9. <strong>找正。</strong>外侧两块钢板之间的间隙在各边必须相同（<strong>D1 = D2</strong>）。所有螺母只<strong>用手</strong>拧紧。
10. <strong>连接电化学工作站。</strong>采用两电极接法：<strong>WE（绿）+ SE（灰）</strong>接一块板，<strong>CE（红）+ RE（白）</strong>接另一块板。电池是对称的，因此极性无关紧要。
11. <strong>平衡并测量。</strong>让电池在恒温下保持<strong>至少 45 分钟</strong>，然后运行恒电位 EIS（一次扫描约 30 秒 – 1 分钟）。
12. <strong>在每个温度下重复</strong>：40、60、80、100 和 120 °C，每个温度至少等待 45 分钟。

</div>

## 测量设置（VersaStudio，Potentiostatic EIS） { #measurement-settings-versastudio-potentiostatic-eis }

| 分组 | 设置 | 数值 |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0.1 Hz 或 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | 对数，<strong>每十倍频 10 个点</strong> |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | <strong>None</strong>（EIS 必需——VersaStudio 说明书 §4.4.2.2） |

!!! question "实验室幻灯片中的不一致"
    实验室幻灯片同时列出 <em>"Number of points: 30"</em> 和 <em>"Points per decade: 10"</em>。两者不可能同时成立：从 3 MHz 到 0.1 Hz 共 7.5 个十倍频，即每十倍频 10 个点约 75 个点（到 1 Hz 约 65 个点）。本指南采用每十倍频 10 个点。请确认。

## 从谱图到电导率 { #from-spectrum-to-conductivity }

1. 用等效电路或弛豫时间分布（DRT）<strong>拟合</strong>谱图。拟合残差不应呈现规律性，但最低频率处阻塞电极发生极化的部分除外。在 DRT 中，每个峰对应一个过程；电极极化的贡献应从电解质电阻中<strong>排除</strong>。
2. <strong>总电阻：</strong>R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>（拟合中识别出的体相和晶界贡献）。
3. <strong>测量片</strong>的厚度 <em>L</em>（致密化后）和面积 <em>A</em>。
4. <strong>离子电导率：</strong>σ<sub>ion</sub> = <em>L</em> / (R<sub>total</sub> · <em>A</em>)——<em>L</em> 以 cm、<em>A</em> 以 cm²、R 以 Ω 计时，单位为 S cm⁻¹。
5. <strong>活化能：</strong>σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT)。以 log₁₀ σ 对 1000/T（T 以 K 计）作图。斜率 <em>m</em> 给出 <strong>E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹</strong>。

!!! warning "对实验室幻灯片的更正"
    幻灯片写的是 <em>"slope = 2.313 × E<sub>a</sub>"</em>。常数应为 ln 10 = <strong>2.303</strong>，且该关系必须包含 R 以及 1000/T 坐标轴带来的 1000 因子：E<sub>a</sub> [kJ mol⁻¹] = −2.303 · 8.314 · m = <strong>−19.14 m</strong>。在报告中还应注明您是以 σ 还是 σT 对 1/T 拟合——两种约定得到的 E<sub>a</sub> 略有不同。

所有拟合、DRT 和电导率步骤都可以在 <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong> 中完成——见 [EIS 数据分析](../analysis/eis-analysis.md)。

## 电子电导率（直流极化）

1. 对同一阻塞电池施加恒定电位（计时电流法）；电流从初始值衰减到稳态。
2. 记录稳态电流 <em>I</em>，并在电解质工作窗口内的多个电位下重复（例如硫化物为 2–4 V）。
3. 以 V 对 I 作图；斜率即电子电阻 <em>R</em>。则 σ<sub>e</sub> = <em>L</em> / (<em>R</em> · <em>A</em>)。

课题组采用的目标值：隔膜电解质 σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ 且 σ<sub>e</sub> < 10⁻⁵ S cm⁻¹；电极粘结剂 σ<sub>ion</sub> > 10⁻³ S cm⁻¹ 并具有高电子电导率。

## 发表数据前需检查的要点 { #points-to-check-before-you-publish-numbers }

!!! note "压力表读数不等于片上压力"
    "4 MPa" 和 "18 MPa" 是<strong>压力表（液压）压力</strong>。片上压力为 <em>P</em><sub>片</sub> = <em>P</em><sub>压力表</sub> × (<em>A</em><sub>活塞</sub> / <em>A</em><sub>模具</sub>)，对 Ø 6–10 mm 模具而言要大很多倍。论文中请报告片上压力（以及压机型号和活塞直径），以便他人复现。

!!! note "120 °C 下的聚碳酸酯"
    聚碳酸酯在玻璃化转变温度（约 145 °C）附近软化，而在此之前很早就会在载荷下蠕变。在 100–120 °C 和堆叠压力下，孔和密封圈可能变形，从而改变接触和厚度。高温测试后请检查电池并重新测量片厚；升温和降温曲线能够重合是一个很好的检验。

!!! note "高频极限"
    PMC-2000 标称可达 7 MHz，但在约 1 MHz 以上，线缆电感和杂散电容会使低电阻片的谱图失真。请进行 Kramers–Kronig 检验（EIS Studio 提供此功能），并舍弃未通过检验的高频点。
