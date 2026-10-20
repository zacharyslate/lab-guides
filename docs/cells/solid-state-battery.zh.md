---
title: 固态测试电池
description: 在实验室组装全固态微型测试电池（正极/电解质双层片，配铟或 Li–In 负极），并在 Neware CT-9008 上进行循环。
translation: machine
---

# 固态测试电池

在与 [EIS](eis-cell.md) 相同的聚碳酸酯电池中组装的微型测试电池：一片<strong>双层片</strong>（固态电解质 + 复合正极），另一侧为金属负极。第 1–11 步在<strong>手套箱</strong>中完成。

<div class="facts" markdown>

| | |
|---|---|
| <strong>电解质层</strong> | Ø 10 mm 模具中 100 mg |
| <strong>正极层</strong> | 10 mg 复合正极（例如来自[正极流程](../procedures/cathode-composite.md)） |
| <strong>负极</strong> | Li 箔 Ø 6.0 mm × 0.25 mm（抛光）和 In 箔 Ø 8.0 mm × 0.3 mm。<strong>含锂正极（如 NMC）：不用 Li——仅用 In 箔 Ø 8.0 mm × 0.1 mm</strong> |
| <strong>测试仪</strong> | [Neware CT-9008（5 V，6 mA）](../instruments/battery-cyclers.md)——实验室中唯一电流量程低到适用于此电池的测试仪 |

</div>

## 演示 { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>模具去皮。</strong>将短压杆放入 Ø 10 mm 模具底部，在天平上去皮（归零）。
2. <strong>加入 100 mg 电解质</strong>并记录准确质量。
3. <strong>压制电解质层。</strong>插入长压杆，在 <strong>4 MPa（压力表）下压 1 分钟</strong>。
4. <strong>加入正极。</strong>用手取出长压杆，将 <strong>10 mg 复合正极</strong>均匀铺满整个电解质表面。记录质量（先对带片的模具去皮）。
5. <strong>压制双层。</strong>放回长压杆，再次在 <strong>4 MPa（压力表）下压 1 分钟</strong>。
6. <strong>取出双层片</strong>：将模具倒置在钢制托座上，在压机中将模具从压杆上推下。
7. <strong>装入并致密化。</strong>将双层片放入聚碳酸酯电池，<strong>长集流体在底部</strong>，每个集流体上各有一个硅胶密封圈。将电池在压机中对中，<strong>缓慢施加 18 MPa（压力表），保持 3 分钟</strong>。
8. <strong>露出电解质。</strong>取出短集流体。双层片的<strong>电解质面</strong>必须朝上（正极面贴在长集流体上）。
9. <strong>准备负极。</strong>将负极金属贴在短集流体上（尺寸见上表）。
10. <strong>加入负极。</strong>将电池体倒置，套到带负极的短集流体上，并在 <strong>4 MPa（压力表）下压 2 分钟</strong>。
11. 用钢板、绝缘片和螺丝<strong>组装完整电池</strong>。使各边间隙一致（<strong>D1 = D2</strong>），螺母<strong>用手</strong>拧紧。电池即可进行 OCV 测量。
12. <strong>连接测试仪。</strong>将电池从手套箱中取出，连接到 CT-9008 的一个通道：<strong>正极（红）接正极侧</strong>（长集流体），<strong>负极（黑）接负极侧</strong>。确认开路电压稳定。
13. 在 BTS 中<strong>编写并启动测试</strong>：在 OCV 下静置，然后在电压限值之间进行恒流充电和放电，按所需循环次数重复。见[电池充放电测试仪](../instruments/battery-cyclers.md#choosing-the-current)。

</div>

## 选择电流和电压限值

- <strong>容量估算。</strong>10 mg 复合材料中 NMC-111 占 38 wt%（300 mg 复合材料中 114 mg NMC），电池含约 3.8 mg NMC。按典型实际容量约 150 mAh g⁻¹ 计，约为 0.57 mAh，因此 <strong>0.1 C ≈ 57 µA</strong>，<strong>0.05 C ≈ 28 µA</strong>。请使用实测的正极质量和您材料的预期容量。
- <strong>用哪个通道。</strong>在这些电流下，只有 <strong>CT-9008</strong> 能正常工作（电流量程 1：0.1–180 µA，精度 ±36 nA）。CT-4008 和 CT-5008 分别从 0.2 mA 和 0.12 mA 起——高于本电池的 0.1 C——其精度为 100 mA 或 120 mA 满量程的 ±0.02%（±20–24 µA），与电流本身相当。
- <strong>电压。</strong>Li–In 负极相对于 Li⁺/Li 约为 0.6 V，因此相对于 Li⁺/Li 给出的正极电压窗口在输入 BTS 时需下移约 0.6 V。

!!! note "压力表压力"
    所有压力均为液压机的<strong>表压</strong>读数。压片压力 = 表压 × (40 mm / 模具 Ø)²：Ø 10 mm 模具时，表压 4 MPa ≈ 64 MPa，18 MPa ≈ 288 MPa。见带计算器的[压机与压力换算](eis-cell.md#press)。
