---
title: Anton Paar Cora 5001
description: 用光纤探头式 Cora 5001 光谱仪测量密封样品的拉曼光谱，并将其用于 Monowave 400 R 中的原位监测。
translation: machine
---

# Anton Paar Cora 5001 拉曼光谱仪

<div class="facts" markdown>

| | |
|---|---|
| <strong>用途</strong> | 粉末、液体和反应混合物的拉曼光谱；在 [Monowave 400 R](monowave.md) 中原位监测反应 |
| <strong>实验室版本</strong> | <strong>Cora 5001 Fiber</strong>：激光和拉曼信号经光纤探头传输。请在铭牌上确认激发波长（532、785 或 1064 nm，或双波长） |
| <strong>激光</strong> | 光纤探头为 <strong>3B 类</strong>——即使探头放在对接站中也是如此 |
| <strong>培训</strong> | 必需，包括激光安全培训 |
| <strong>说明书</strong> | [说明书与参考资料](../manuals.md#cora) |

</div>

!!! danger "3B 类激光"
    - 切勿直视探头尖端或光纤端面，切勿将探头对准人员或反光表面。
    - 只要探头未被封闭，就要佩戴对应波长的激光防护眼镜。
    - 打开样品室或光纤接口、按探头上的 <strong>Stop</strong> 或触发联锁，都会立即关闭激光。

## 本实验室的装置 { #our-set-up }

<figure markdown>
![我们的 Monowave 400 R（左）和 Cora 5001（右）。压缩空气调压阀在左侧；激光防护眼镜放在 Cora 旁边。](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>我们的 Monowave 400 R（左）和 Cora 5001（右）。压缩空气调压阀在左侧；激光防护眼镜放在 Cora 旁边。</figcaption>
</figure>

## 演示 { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. 用后面板开关<strong>开机</strong>。等待约 <strong>15 分钟</strong>温度平衡；预热期间可以测量，但设置在预热完成前被锁定。
2. 用您的用户账户<strong>登录</strong>。
3. <strong>准备样品。</strong>对空气敏感的粉末装入<strong>在手套箱中装填的密封玻璃瓶</strong>。在台面上轻敲样品瓶，使粉末压实并排除气泡。
4. <strong>装入对接站。</strong>松开锁紧螺丝，将探头滑到后端限位。将装有样品瓶的瓶架放入对接站，关闭盖子。
5. <strong>启用激光。</strong>按探头上的 <strong>Enable</strong>（或仪器联锁的复位按钮）。<strong>Ready</strong> 指示灯亮起。
6. <strong>对焦。</strong>打开 <strong>Adjust Focus</strong>，点 <strong>Start</strong> 显示实时光谱。将探头向样品滑动至信号最大，<strong>拧紧锁紧螺丝</strong>，然后点 <strong>Stop</strong>。焦点在探头尖端前方几毫米处。
7. <strong>设置测量。</strong>Menu ▸ <strong>Single Measurement</strong>：输入样品名称，选择波长（双激光仪器）和激光功率（532 nm：开 = 50 mW；785/1064 nm：0–450 mW，建议至少 50 mW）。<strong>Auto Exposure</strong>（最长 10 s）是不错的初次尝试。
8. <strong>高级设置（可选）。</strong>采集背景（去除环境光）、对 N 条光谱取平均以降低噪声、宇宙射线去除（需要 N ≥ 3；荧光样品应关闭），以及针对荧光的基线校正。
9. <strong>测量。</strong>点 <strong>Measure</strong>。光谱显示后以样品名称保存；软件会提示可能的质量问题。
10. <strong>保存和导出。</strong>导出或打印光谱，或使用 <strong>Save as method</strong> 以便日后重复相同设置。按探头上的 <strong>Stop</strong> 会中止测量并禁用激光。
11. <strong>结束。</strong>取出样品，用后部开关关机（关机时保存数据）。

</div>

## 电池材料测试建议

- <strong>使用能给出可用信号的最低激光功率。</strong>深色样品（含碳复合材料、NMC）吸收强，可能局部升温或分解，在 532 nm 下尤甚。在同一点连续采集两条光谱：若两者不同，则降低功率。
- <strong>玻璃也有信号。</strong>用<em>完全相同</em>的设置（焦点、功率、曝光——关闭 Auto Exposure）采集空样品瓶，并将其作为<strong>自定义空白</strong>扣除。
- <strong>荧光</strong>会产生宽而上升的背景；更长的波长（785 或 1064 nm）可减弱荧光。
- <strong>不均匀样品：</strong>多点测量。
- 遮挡室内光照射探头尖端和样品；荧光灯会产生看起来像拉曼峰的尖锐谱线。

## 在 Monowave 400 R 中进行原位拉曼

当探头安装在 Monowave 400 R 导轨上时，请遵循 [Monowave 指南](monowave.md)：在<strong>激光禁用</strong>状态下按反应瓶尺寸设置探头位置，仅在旋转盖关闭后开始拉曼测量，并在停止微波运行<strong>之前</strong>停止拉曼测量并禁用激光。对于反应过程，请使用<strong>时间序列</strong>（见 Cora 参考指南），并以不变化的谱带（如溶剂谱带）进行归一化。
