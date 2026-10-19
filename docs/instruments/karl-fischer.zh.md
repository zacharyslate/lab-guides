---
title: Mettler Toledo C20S 卡尔·费休库仑仪
description: 用 Mettler Toledo C20S 库仑法卡尔·费休滴定仪测定溶剂的含水量，包括用 1% 水标准品进行核查。
translation: machine
---

# Mettler Toledo C20S 库仑法卡尔·费休滴定仪

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 液体中的痕量水——例如检查乙醇、乙腈或 THF 是否足够干燥，可用于液相合成电解质 |
| <strong>原理</strong> | 碘在发生电极上电化学生成并与水反应；所需电量给出水的质量 |
| <strong>电解池</strong> | 发生电极（有或无隔膜，<strong>蓝色插头</strong>）、双铂指示电极、干燥管、隔垫、磁力搅拌器 |
| <strong>培训</strong> | 必需 |
| <strong>说明书</strong> | [说明书与参考资料](../manuals.md#karl-fischer) |

</div>

!!! danger "安全"
    KF 试剂含甲醇或其他醇、碘、SO₂ 和碱：有毒且易燃。戴手套和护目镜，在通风橱中加注和排空电解池，并将废试剂倒入实验室指定的 KF 试剂废液桶。

## 演示 { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>检查电解池。</strong>电解池已装满试剂，两个电极均已连接（发生电极 = <strong>蓝色插头</strong>），干燥管内装有新鲜干燥剂，所有塞子和磨口都已塞紧——泄漏会让室内湿气进入。
2. <strong>打开滴定仪。</strong>
3. <strong>准备方法（仅首次）。</strong>Methods ▸ New ▸ Standard method template ▸ <strong>KF Coul</strong> ▸ Sample：将 <em>Entry type</em> 设为 <strong>Weight</strong> ▸ OK ▸ Save。在 Start 屏幕上点 <strong>AddToHome</strong> 创建快捷方式（勾选 <em>Immediate start</em>）。
4. <strong>预滴定。</strong>点击您的快捷方式。滴定仪会除去试剂中已有的水；搅拌器必须在运行。等待漂移值下降。
5. <strong>待机。</strong>漂移值低且稳定时，滴定仪切换到 <strong>Standby</strong>，<strong>Start sample</strong> 变为可用。
6. <strong>准备进样注射器。</strong>用样品（或用于核查系统的 <strong>1% KF 水标准品</strong>）充满注射器，放到天平上并<strong>去皮</strong>。
7. <strong>进样。</strong>点 <strong>Start sample</strong>，将针头刺穿隔垫，使针尖位于试剂液面以下——不要碰到电极——然后注入（1% 标准品 0.5–1.0 mL）。
8. <strong>回称。</strong>将注射器放回天平，输入显示的<strong>样品质量</strong>（去掉负号的数值）。滴定开始。
9. <strong>读取结果</strong>（R1，含水量）。1% 标准品应在证书容差范围内给出约 10 mg g⁻¹；否则在测样之前检查试剂和漂移。
10. <strong>停止。</strong>点 <strong>Stop analysis</strong> 停止当前分析，或点 <strong>More ▸ End series</strong> 结束该系列。

</div>

## 良好操作规范

- 每天<strong>先测标准品</strong>，再测样品。每个样品至少测三次。
- 装样前先用样品润洗注射器；使用干燥、密闭的注射器。
- 当漂移持续偏高、标准品结果漂移或电解池快满时，更换试剂。
- 发生电极保养：排空，用甲醇冲洗，用无绒布擦拭，并在 70–80 °C 下干燥数小时（说明书 §7）。

!!! warning "不要注入含硫化物的样品"
    硫化物、H₂S 和硫醇会与碘反应，给出<strong>虚高</strong>的含水量；它们还会消耗试剂。本滴定仪仅用于<strong>溶剂和液体</strong>。硫化物电解质粉末中的水分不能通过直接进样测定——请与实验室负责人讨论替代方法。
