---
title: EIS 数据分析
description: 如何用 EIS Studio 分析 EIS 电池的阻抗谱——从 VersaStudio 导出、验证、等效电路、DRT 和电导率。
translation: machine
---

# EIS 数据分析

分析在 <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong> 中进行。这是一款免费开源应用，在您自己电脑的网页浏览器中运行（数据不会上传）。它可读取常见电化学工作站的文件，进行 Kramers–Kronig 有效性检验，拟合等效电路（R、C、L、CPE、Warburg、Gerischer 和传输线元件），计算带峰积分的正则化弛豫时间分布（DRT），并根据厚度和面积计算离子电导率及其不确定度传递。

<div class="inst-grid" markdown>

[<strong>教程</strong> <span>分步完成第一次分析</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[<strong>测量</strong> <span>实验设置指导</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[<strong>理论</strong> <span>电路、DRT、验证</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[<strong>安装</strong> <span>在本地运行</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## EIS 电池的工作流程

1. <strong>从 VersaStudio 导出校准后的数据</strong>——Data ▸ Export To ▸ ZView（`.z`），或从 Graph View 复制。根据 VersaStudio 说明书（附录 3），`.par` 文件中的原始 EIS 列是<strong>未校准</strong>的。
2. 用 Kramers–Kronig 检验<strong>验证</strong>每条谱图。舍弃未通过检验的高频点（线缆伪影），并记录舍弃的点数。
3. <strong>拟合</strong>等效电路或计算 <strong>DRT</strong>。将阻塞电极的低频贡献从电解质电阻中排除。
4. <strong>电导率</strong>——输入片的厚度和直径：σ = <em>L</em> / (R · <em>A</em>)。
5. <strong>活化能</strong>——对整个温度系列以 log₁₀ σ 对 1000/T 拟合；E<sub>a</sub> = −19.14 × 斜率 kJ mol⁻¹（见 [EIS 电池页面](../cells/eis-cell.md#from-spectrum-to-conductivity)）。注明您拟合的是 σ 还是 σT。

!!! note "需要报告的内容"
    片的质量、厚度和直径；片上的压制压力（不只是压力表读数）；温度和平衡时间；频率范围、振幅和每十倍频点数；所用电路或 DRT 设置；以及拟合残差。
