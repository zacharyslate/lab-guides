---
title: Anton Paar Monowave 400 R
description: 在 Monowave 400 R 上进行密封瓶微波合成，可选择通过 Cora 5001 进行原位拉曼监测。
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 在温度和压力控制下、带磁力搅拌的密封瓶中进行液相合成，例如制备硫化物电解质的溶液路线 |
| <strong>限值</strong> | 最高 <strong>300 °C</strong> 和 <strong>30 bar</strong>；单个 850 W 磁控管；搅拌最高 1200 rpm |
| <strong>特点</strong> | "R" 版本可安装 <strong>Cora 5001 光纤拉曼探头</strong>，在反应过程中获取原位光谱（3B 类激光） |
| <strong>需要</strong> | <strong>5.5–6 bar</strong> 压缩空气，用于准确测压和反应瓶密封 |
| <strong>培训</strong> | 必需。拉曼测量须接受激光安全培训 |
| <strong>说明书</strong> | [说明书与参考资料](../manuals.md#monowave) |

</div>

### 反应瓶

| 反应瓶 | 容积 | 装填体积 | 最高 T | 最高 p | 最长时间 |
|---|---|---|---|---|---|
| G4（玻璃） | 4 mL | 0.5–2 mL | 250 °C | 30 bar | 100 h |
| <strong>G10</strong>（玻璃） | 10 mL | <strong>2–6 mL</strong> | 300 °C | 30 bar | 100 h |
| <strong>G30</strong>（玻璃） | 30 mL | <strong>6–20 mL</strong> | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10（SiC） | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck（SiC） | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>摘自 Monowave 400 R Reference Guide（E07IB012EN-C）表 1。拉曼实验适用其附录 C 中更短的时间限值。G4 和 SiC 反应瓶<strong>不能</strong>与拉曼探头一起使用。</small>

!!! danger "开始之前"
    - <strong>3B 类激光。</strong>移动导轨或探头前，先禁用拉曼探头（探头上的 Stop 按钮），切勿直视探头或光纤。
    - 始终选择<strong>实际使用的反应瓶类型</strong>。类型错误会导致温度/压力读数错误，并可能使反应瓶破裂。
    - 遵守最小装填体积：红外传感器测量的是瓶底以上约 1 cm 处的瓶壁。
    - 如果不了解反应的行为，请从小量和最大稀释度开始。
    - 本仪器<strong>不耐酸</strong>；腐蚀性试剂会缩短其寿命（快速入门页）。
    - 空气敏感反应：在<strong>手套箱中</strong>装填并封闭反应瓶。如果反应瓶泄压，排气会带出反应蒸气（在硫化物化学中可能含 H₂S）——排气必须接入抽风系统。

## 本实验室的装置 { #our-set-up }

<figure markdown>
![我们的 Monowave 400 R（左）和 Cora 5001（右）。压缩空气调压阀在左侧；激光防护眼镜放在 Cora 旁边。](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>我们的 Monowave 400 R（左）和 Cora 5001（右）。压缩空气调压阀在左侧；激光防护眼镜放在 Cora 旁边。</figcaption>
</figure>

## 演示 { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>检查压缩空气。</strong>开始前供气压力必须为 5.5–6 bar。
2. <strong>装填反应瓶。</strong>在 G10（2–6 mL）或 G30（6–20 mL）反应瓶中放入合适的搅拌子，加入反应混合物。
3. <strong>封闭反应瓶。</strong>将隔垫放入卡扣盖中，<strong>PTFE 面朝向反应混合物</strong>，按压瓶盖直到捏紧边缘也打不开。硅胶隔垫：4 小时以内的反应。PTFE 垫片 + PTFE 隔垫：4 小时以上的反应（PTFE 隔垫为一次性）。
4. <strong>编写实验程序。</strong>在触摸屏上点 <strong>Task List</strong>，点最后一行，为实验命名，选择 <strong>Standard</strong> 并设置步骤（加热、保持、冷却）。冷却温度（30–70 °C）应比溶剂沸点低约 10 °C。<strong>选择所用的反应瓶类型</strong>，然后点 OK。
5. <strong>定位拉曼探头。</strong>在激光<strong>禁用</strong>状态下，将导轨移到 <strong>G10</strong>（最内）或 <strong>G30</strong>（中间）位置；不采集拉曼时移到 <strong>idle</strong>（最外）。确认同尺寸的空、敞口反应瓶能无阻力地放入腔体。
6. <strong>放入反应瓶。</strong>G4、G10 和 C10 反应瓶需要在腔体插件上放置<strong>适配环</strong>（聚酰亚胺面朝上）；G30 反应瓶直接放入。
7. <strong>启动。</strong>点 <strong>Start</strong>。装有盲塞（无 Ruby 温度计）时，运行开始，旋转盖关闭。
8. 仅在<strong>盖子关闭后</strong>才在 Cora 5001 上<strong>开始拉曼测量</strong>（见 [Cora 5001 指南](cora.md)）。
9. 在主屏幕上<strong>监视</strong>温度、压力、功率和搅拌。点击其控件可编辑正在运行的实验。
10. <strong>停止。</strong>结束时——或需要提前停止时——<strong>先停止拉曼测量并禁用激光</strong>，然后（提前停止时）点 <strong>Stop → Yes</strong>。仪器会冷却反应瓶，并在安全时打开盖子。
11. <strong>取出并打开反应瓶。</strong>小心取出反应瓶。像用开瓶器一样用封盖工具打开（若装有浸入管须小心）。
12. <strong>导出数据。</strong>Menu ▸ Data Memory ▸ Browse Results ▸ 选择 ▸ Export 到 U 盘（.pdf、.csv、.xls、.raw、.png）。仪器最多保存 1000 个结果。

</div>

## 须知

- <strong>温度传感器。</strong>内置红外传感器（±5 °C）测量瓶壁。选配的 Ruby 光纤温度计（±2 °C）测量混合物内部，更适合放热反应或吸收较弱的溶剂——但<strong>不能与拉曼探头同时使用</strong>，也不能用于 4 小时以上的运行。
- <strong>吸收较弱的溶剂</strong>（如甲苯、己烷）加热效果差；仪器可能降低功率，始终达不到设定温度。在 G4 反应瓶中吸收很强的溶剂可能超温：限制功率或使用 "Heat to temperature in time"。
- <strong>不使用拉曼时：</strong>将探头置于 idle 位置，并装上未改装的腔体插件，以免反应瓶破裂损坏探头。

## 相关内容

- 硫化物电解质液相合成过程中的原位拉曼：见[参考文献](../references.md#group-publications)。
