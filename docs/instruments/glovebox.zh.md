---
title: MBraun EasyLab 手套箱
description: 如何启动 MBraun EasyLab 手套箱、通过过渡舱传入和传出物品，并使其处于安全状态。
translation: machine
---

# MBraun EasyLab 手套箱

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 在氩气下处理对空气和湿气敏感的材料（硫化物电解质、金属锂、Li₂S、P₂S₅） |
| <strong>气氛</strong> | 经铜催化剂和分子筛净化的氩气；O₂ 和 H₂O 传感器量程分别为 0–1000 ppm 和 0–500 ppm |
| <strong>培训</strong> | 必需。预约前须通过手套箱考核 |
| <strong>预约</strong> | [预约仪器](../booking.md) |
| <strong>说明书</strong> | [说明书与参考资料](../manuals.md#glovebox) |

</div>

!!! danger "开始之前"
    - 在箱内处理化学品时，请穿实验服、戴护目镜，并<strong>在手套箱的丁基手套外再戴丁腈手套</strong>。
    - 切勿将敞口的溶剂容器放入过渡舱抽真空。密封的溶剂瓶需要采用半真空程序（第 9 步）。
    - 如果 O₂ 或 H₂O 读数偏高，请停止操作并通知实验室负责人。不要打开敏感材料。

## 演示 { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>检查手套箱的初始状态。</strong>应处于 <strong>ECO</strong> 模式，过渡舱两扇门关闭，过渡舱处于全真空（压力表 ≈ −94 kPa），所有阀门关闭。在传感器屏幕上读取 O₂ 和 H₂O 数值。
2. <strong>激活手套箱。</strong>按一次 <strong>ECO</strong> 退出 ECO 模式，再按一次 <strong>PUMP</strong>。<strong>LIGHT</strong> 可随时开关。
3. <strong>检查循环。</strong>氩气必须始终流经催化剂（再生期间除外）。本机的 CIRC 指示灯不可靠，因此请查看催化剂上方磁性循环阀的活塞：必须处于<strong>上方</strong>。
4. <strong>将过渡舱充入氩气。</strong>缓慢打开连接过渡舱与主箱体的<strong>氩气（充气）阀</strong>。观察压力表从 −94 kPa 升至 0 kPa，然后关闭该阀。
5. <strong>放入物品。</strong>打开<strong>外门</strong>，将物品放入过渡舱，关闭外门。装液体的容器保持密封；粉末和固体可敞口或松盖。
6. <strong>抽真空（第 1 次循环）。</strong>确认两扇门和氩气阀均已关闭。缓慢打开<strong>真空阀</strong>直至压力表显示 −94 kPa，保持真空 <strong>15 分钟</strong>，然后关闭该阀。
7. <strong>充入氩气。</strong>缓慢打开氩气阀直至压力表回到 0 kPa，然后关闭。
8. <strong>重复</strong>抽真空–保持–充气，共完成 <strong>3 次循环</strong>。多孔或体积大的物品（纤维、纸、泡沫）最好先在真空下放置一夜，再做一次完整循环。
9. <strong>特殊情况——密封溶剂瓶。</strong>密封瓶在全真空下可能爆裂。只抽到<strong>半真空</strong>（≈ −47 kPa），等待几分钟，充气，并<strong>至少重复 10 次</strong>。
10. <strong>将物品移入箱内。</strong>最后一次充气后（压力表 0 kPa，两个阀均关闭），将手伸入手套，打开<strong>内门</strong>，把物品移入主箱体，关闭内门。
11. <strong>舒适地操作。</strong>手套箱会自动调节压力。如果手套过紧或过松，用<strong>脚踏板</strong>升高（+）或降低（−）箱体压力。
12. <strong>结束操作。</strong>清理洒落物，<strong>仅用乙醇</strong>擦拭手套，关闭内门和外门，并在真空阀打开的情况下对过渡舱抽真空<strong>至少 5 分钟</strong>。
13. <strong>恢复原状。</strong>关闭真空阀（压力表保持在 ≈ −94 kPa），确认所有阀门关闭，按一次 <strong>ECO</strong>，并确认循环活塞处于<strong>上方</strong>。

</div>

## 取出物品 { #taking-material-out }

1. 如果过渡舱处于真空状态，缓慢充入氩气至 0 kPa 并关闭氩气阀。
2. 打开内门，放入物品，关闭内门。
3. 打开外门，取出物品，关闭外门。
4. 对过渡舱抽真空，用氩气吹扫一次，再次抽真空，并在所有阀门关闭的情况下保持真空。

## 会损坏手套箱的情况 { #things-that-damage-the-box }

!!! warning "催化剂毒物"
    铜催化剂会被<strong>含硫化合物和酸不可逆地毒化</strong>；当活性炭过滤器饱和时，分子筛也会吸附 H₂S 和溶剂蒸气（实验室指南 <em>Guía MBraun EasyLab</em>，rev. 07-2022）。硫化物电解质（Li₂S、P₂S₅、Li₆PS₅Cl、Li₃PS₄）遇到微量水分即释放 H₂S。不使用时请保持硫化物容器密封，切勿让硫化物粉末敞口过夜，并记录您在箱内使用的化学品，以便追查除氧能力的下降。

!!! note "溶剂"
    挥发性溶剂（乙醇、乙腈、THF……）会加重活性炭过滤器的负荷，并可能使传感器漂移。尽量使用最小体积并保持瓶子密封。请向实验室负责人询问在使用敞口溶剂时是否应停止循环——目前的实验室规程没有说明。

## 再生和传感器（仅限实验室负责人）

催化剂/分子筛再生（16 个阶段，约 960 分钟，Ar/H₂ 合成气约 15 L/min）和 H₂O 传感器维护（每约 2000 小时用 85% H₃PO₄ 重新涂覆）仅由实验室负责人按实验室指南进行。

!!! question "待与实验室负责人确认"
    两份实验室文件对过渡舱循环的说法不一致。英文启动幻灯片写的是 <em>"释放压力前全真空至少 5 分钟"</em>；西班牙语实验室指南写的是 <strong>3 次真空循环，每次保持 15 分钟</strong>（或"主动"模式下 45 分钟）。本指南采用更严格的 3 × 15 分钟循环。请确认实验室的规定。

## 说明书

- 实验室指南：<em>Guía MBraun EasyLab</em>（西班牙语，rev. 07-2022）——实验室副本。
- 实验室幻灯片：<em>MBraun EasyLab Glovebox — Operation start guide</em>——实验室副本。
- 厂商：[MBraun EASYlab 产品页](https://shop.mbraun.de/ENU/28934/EASYlab.html)。
