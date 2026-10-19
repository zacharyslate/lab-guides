---
title: PARSTAT MC · PMC-2000 与 VersaStudio
description: 在 VersaStudio 中使用 PARSTAT MC PMC-2000 选择通道、设置恒电位 EIS 实验、运行并导出校准后的数据。
translation: machine
---

# PARSTAT MC · PMC-2000 与 VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | EIS、直流极化（电子电导率）、CV、小电流电池循环 |
| <strong>PMC-2000 通道</strong> | ±30 V 槽压，±1 A，EIS <strong>10 µHz – 7 MHz</strong>，最小电流量程 4 nA，差分静电计 ≥ 10 MHz |
| <strong>软件</strong> | VersaStudio（Windows）——`.par` 数据文件（启用二进制保存时另有 `.par.psbd`） |
| <strong>电池</strong> | [交流阻抗电池](../cells/eis-cell.md)——硬件部分见其演示 |
| <strong>说明书</strong> | [说明书与参考资料](../manuals.md#potentiostat) |

</div>

## 电池线缆颜色（PMC-2000 线缆）

| 颜色 | 导线 | 两电极电池（EIS 电池、电池） |
|---|---|---|
| 绿 | WE——工作电极 | 与灰色一起接到<strong>一个</strong>电极 |
| 灰 | SE——感测 | 与绿色一起 |
| 红 | CE——对电极 | 与白色一起接到<strong>另一个</strong>电极 |
| 白 | RE——参比 | 与红色一起 |
| 黄 / 蓝 | E2+ / E2−（第 6 根线） | 不使用 |
| 黑 | GND | 不使用——不要让它碰到其他导线 |

对于<strong>低阻抗电池或电流超过 100 mA</strong> 的情况，请将每根导线分别连接到接线端，而不要叠插（"piggy-back"），以避免接触电阻造成的电压误差（PMC-2000 说明书，§3）。

## 演示——软件

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>启动。</strong>在进行任何校准前，PARSTAT MC 应已开机至少 10 分钟。打开 <strong>VersaStudio</strong>（开始 ▸ VersaStudio）。有多个通道时，打开后默认选中 <strong>No Instrument</strong>。
2. <strong>选择您的通道。</strong>Tools ▸ <strong>Select Instrument</strong>，双击您的通道。右键 ▸ <em>Locate Instrument</em> 会让该通道的 LED 闪烁，以确认它就是连接到您电池的通道。标有 <strong>DATA</strong> 的通道正被他人使用——不要选择。
3. <strong>验证（有疑问时）。</strong>Experiment ▸ Load Setup ▸ <em>Impedance Checkout</em> 测量<strong>内置 1 kΩ 模拟电池</strong>。所有点都应为 1000 Ω ± 20 Ω。
4. <strong>新建实验。</strong>Experiment ▸ <strong>New</strong> ▸ <em>Select an Action</em> ▸ Impedance ▸ <strong>Potentiostatic EIS</strong> ▸ OK，并为数据文件命名。
5. 在 <em>Experiment Properties</em> 中<strong>输入参数</strong>（EIS 电池的取值见 [EIS 电池页面](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)）。每输入一个值后按 <strong>Enter</strong>——输入但未确认的值不会被保存。在 <em>Common</em> 中以注释形式添加样品名称、片厚和面积。
6. <strong>高级属性。</strong><em>Cell to Use</em> = <strong>External</strong>，电流量程，静电计模式（两电极电池用 single-ended；四电极电池用差分），<em>Leave Cell On</em> = No。
7. <strong>滤波器。</strong>Tools ▸ Options ▸ Instrument：EIS 须设 <strong>Notch filter = None</strong>（必需）。除非有理由更改，否则 <em>EIS filters</em> 保持 Normal。
8. <strong>运行前先保存。</strong>Experiment ▸ Save，使实验过程中数据写入磁盘。
9. <strong>运行</strong>（▶）。奈奎斯特图会逐步绘出。<strong>■</strong> 停止；<strong>⏭</strong> 跳到下一段。
10. <strong>导出校准后的数据。</strong>对 EIS 操作使用 Data ▸ Export To ▸ <strong>ZView (.z)</strong>，或 Graph View ▸ <em>Copy Data as Text</em>。<strong>不要分析 `.par` 文件中的原始 EIS 列</strong>——VersaStudio 保存的是未校准的数据（软件说明书，附录 3）。
11. <strong>释放通道。</strong>关闭您的实验并切回 <em>No Instrument</em>，以便下一位用户选择该通道。整理好线缆。

</div>

## 电池的直流实验

- 对电池和其他储能电池，电流量程<strong>先设为 2 A</strong>（或使用从 2 A 开始的 <em>Auto Current Range Setup</em> 操作）。从灵敏量程以 "Auto" 开始可能使其过载而损坏（软件说明书，Current Range 注意事项）。
- 在恒电位与恒电流操作之间、EIS 与直流操作之间，或不同电流量程的恒电流操作之间，使用 <strong>Leave Cell On</strong> 是危险的：切换可能向电池发送电流尖峰。
- 在 <em>Common</em> 中设置电压和电流<strong>安全限值</strong>——一旦超出，整个序列将停止。

## 软件配置说明（实验室电脑）

- Windows 电源计划：从不睡眠，电源按钮不执行任何操作，关闭快速启动——否则长时间实验可能丢失数据（软件说明书，§3.3）。
- 软件更新后，VersaStudio 可能要求更新固件：让其不间断完成，然后在每个通道上运行 <em>Calibrate for best DC accuracy</em>。
