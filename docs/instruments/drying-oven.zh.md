---
title: Argolab 干燥箱
description: Argolab（Giorgio Bormac）TCN/TCF Plus 系列干燥箱的使用——用 PROG 0 设定单一温度、多段程序，以及哪些物品可以和不可以放入。
translation: machine
---

# Argolab 干燥箱（TCN / TCF Plus 系列）

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 干燥玻璃器皿、工具和对空气稳定的粉末；在电池部件进入手套箱过渡舱之前将其干燥 |
| <strong>范围</strong> | 最高 +300 °C（TCN-50/115/200 和 TCF Plus 型号；TCN-30 Plus：+200 °C）。请查看实验室干燥箱的型号铭牌 |
| <strong>控制器</strong> | 微处理器：最多 7 个程序 × 10 段（温度、时间，强制对流型号还有风扇转速），另有单段程序 <strong>PROG 0</strong> |
| <strong>说明书</strong> | <em>Ovens and Incubators — User manual</em>（Giorgio Bormac，rev. 0，31.05.2021）——[说明书](../manuals.md#oven) |

</div>

!!! danger "绝不能放入干燥箱的物品"
    - <strong>易燃溶剂</strong>或沾有易燃溶剂的任何物品、爆炸性物质或空气/溶剂混合物（有火灾和爆炸风险）。
    - 受热或分解时会释放<strong>有毒或易燃气体</strong>的材料——包括<strong>硫化物电解质</strong>（H₂S）。
    - 不要在干燥箱下方放置物品，不要遮挡通风口，运行时不要触碰背部进风口（高温）。

## 演示 { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>确认要干燥的物品。</strong>只能是玻璃器皿、工具以及对空气稳定、不易燃的材料（见上方提示框）。
2. 用 ON/OFF 键<strong>开机</strong>。如果干燥箱鸣响并显示 <strong>end</strong>，说明上一位用户的程序在关机前已结束；按任意键消除提示音。
3. <strong>调用程序。</strong>待机状态下短按 <strong>SET/PROG</strong>："PROG" 及其编号闪烁。用 ▲ / ▼ 选择程序，再按 SET/PROG 确认。
4. <strong>单一设定值（PROG 0）。</strong>选择 PROG 0，<strong>按住 SET/PROG</strong> 直到只有编号闪烁，再按一次 SET/PROG 进入编辑。用 ▲ / ▼ 和 <strong>SHIFT</strong>（切换数位）设定温度，确认后设定定时器。<strong>定时器 00:00 = 一直运行，直到按下 START/STOP。</strong>
5. <strong>多段程序（1–7）。</strong>每段包括温度、时间，强制对流干燥箱还有风扇转速（H/M/L）。如需在第 <em>n</em> 段后结束，将第 <em>n</em> + 1 段的时间设为 <strong>00:00</strong>。
6. 将物品<strong>放入</strong>隔板上，留出空气流通空间，然后关门。
7. 按 <strong>START/STOP</strong> <strong>启动</strong>。显示屏显示箱内温度。
8. 完成后按 <strong>START/STOP</strong> <strong>停止</strong>。戴耐热手套取出热物品；如无他人使用，请关闭干燥箱。

</div>

!!! note "供手套箱使用的玻璃器皿"
    在此干燥的物品放在室内空气中几分钟就会重新吸湿。趁热直接从干燥箱放入手套箱过渡舱，并按[手套箱指南](glovebox.md)所述进行过渡舱循环。

!!! info "受密码保护的设置"
    延时启动、程序重复、样品保护温度上限、超温报警和温度偏移位于受密码保护的子菜单中。只有实验室负责人才能更改。
