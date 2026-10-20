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

## 压机与压力换算 { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Riken Seiki 脚踏泵及其 0–100 MPa 压力表：表上显示的是油压，而不是压片上的压力](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Riken Seiki 脚踏泵及其 0–100 MPa 压力表：表上显示的是油压，而不是压片上的压力</figcaption>
</figure>

<figure markdown>
![CDM-5M 压机：顶部油缸推动压头向下压在放在底板上的模具或电池上](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>CDM-5M 压机：顶部油缸推动压头向下压在放在底板上的模具或电池上</figcaption>
</figure>

</div>

脚踏泵上的压力表读的是油缸内的<strong>油压</strong>。力来自这个油压作用在油缸活塞上，即 <strong>40 mm 的活塞杆</strong>；45 mm 的压头只是把力传给冲头。压片中的压力等于这个力除以压片面积：

<div class="formula" markdown>

<em>F</em> = <em>P</em><sub>g</sub> × π <em>d</em>² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; <em>P</em><sub>p</sub> = <em>F</em> / (π <em>D</em>² / 4) = <em>P</em><sub>g</sub> × (<em>d</em> / <em>D</em>)² &nbsp;&nbsp;·&nbsp;&nbsp; <em>P</em><sub>g</sub> = <em>P</em><sub>p</sub> × (<em>D</em> / <em>d</em>)²

</div>

<em>d</em> = 活塞杆直径（40 mm），<em>D</em> = 模具（压片）直径。取 <em>d</em> = 40 mm 时，<strong>压力表上 1 MPa = 1.26 kN（0.13 t）</strong>。

| 模具 Ø | 压片面积 | 压片 ÷ 表压 | 表压 4 MPa（压片成型） | 电池的实验室设定 |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 表压 7.5 MPa → <strong>333 MPa</strong>（9.4 kN） |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 表压 18 MPa → <strong>288 MPa</strong>（22.6 kN） |

<strong>反过来：</strong>要以 375 MPa 压制 Ø 10 mm 的压片，表压设为 375 × (10/40)² = <strong>23.4 MPa</strong>；Ø 6 mm 则为 375 × (6/40)² = <strong>8.4 MPa</strong>。

<div class="bk press-calc">
<div class="bk-row">
<label>活塞杆 Ø（mm）<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>模具 Ø（mm）<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>表压（MPa）<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>压片压力（MPa）<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>力<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "使用这些数字之前"
    - 我们油缸的活塞直径为 <strong>40 mm</strong>（已确认）。如使用其他压机或油缸，请在计算器中输入其活塞直径。
    - 未计入油缸和模具中的摩擦以及压力表的精度。论文中请同时报告压片压力、表压读数、活塞杆和模具直径以及压机型号。
    - 切勿超过泵标签上的额定压力或模具的额定载荷。

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

## 从谱图到电导率 { #from-spectrum-to-conductivity }

1. 用等效电路或弛豫时间分布（DRT）<strong>拟合</strong>谱图。拟合残差不应呈现规律性，但最低频率处阻塞电极发生极化的部分除外。在 DRT 中，每个峰对应一个过程；电极极化的贡献应从电解质电阻中<strong>排除</strong>。
2. <strong>总电阻：</strong>R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>（拟合中识别出的体相和晶界贡献）。
3. <strong>测量片</strong>的厚度 <em>L</em>（致密化后）和面积 <em>A</em>。
4. <strong>离子电导率：</strong>σ<sub>ion</sub> = <em>L</em> / (R<sub>total</sub> · <em>A</em>)——<em>L</em> 以 cm、<em>A</em> 以 cm²、R 以 Ω 计时，单位为 S cm⁻¹。
5. <strong>活化能：</strong>σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT)。以 log₁₀ σ 对 1000/T（T 以 K 计）作图。斜率 <em>m</em> 给出 <strong>E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹</strong>。

!!! note "活化能"
    在报告中注明拟合的是 σ 还是 σT 对 1/T——两种做法得到的 E<sub>a</sub> 略有不同。

所有拟合、DRT 和电导率步骤都可以在 <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong> 中完成——见 [EIS 数据分析](../analysis/eis-analysis.md)。

## 电子电导率（直流极化）

1. 对同一阻塞电池施加恒定电位（计时电流法）；电流从初始值衰减到稳态。
2. 记录稳态电流 <em>I</em>，并在电解质工作窗口内的多个电位下重复（例如硫化物为 2–4 V）。
3. 以 V 对 I 作图；斜率即电子电阻 <em>R</em>。则 σ<sub>e</sub> = <em>L</em> / (<em>R</em> · <em>A</em>)。

课题组采用的目标值：隔膜电解质 σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ 且 σ<sub>e</sub> < 10⁻⁵ S cm⁻¹；电极粘结剂 σ<sub>ion</sub> > 10⁻³ S cm⁻¹ 并具有高电子电导率。

## 发表数据前需检查的要点 { #points-to-check-before-you-publish-numbers }

!!! note "压力表读数不等于片上压力"
    “4 MPa”“7.5 MPa”和“18 MPa”是<strong>表压（油压）</strong>。按 40 mm 活塞杆计算，Ø 10 mm 压片上表压 18 MPa 约为 <strong>288 MPa</strong>，Ø 6 mm 压片上表压 7.5 MPa 约为 <strong>333 MPa</strong>——见[压机与压力换算](#press)。论文中请报告压片压力（以及表压读数、活塞杆和模具直径），以便他人复现。

!!! note "120 °C 下的聚碳酸酯"
    聚碳酸酯在玻璃化转变温度（约 145 °C）附近软化，而在此之前很早就会在载荷下蠕变。在 100–120 °C 和堆叠压力下，孔和密封圈可能变形，从而改变接触和厚度。高温测试后请检查电池并重新测量片厚；升温和降温曲线能够重合是一个很好的检验。

!!! note "高频极限"
    PMC-2000 标称可达 7 MHz，但在约 1 MHz 以上，线缆电感和杂散电容会使低电阻片的谱图失真。请进行 Kramers–Kronig 检验（EIS Studio 提供此功能），并舍弃未通过检验的高频点。
