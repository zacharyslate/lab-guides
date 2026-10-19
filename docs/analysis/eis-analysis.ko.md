---
title: EIS 데이터 분석
description: EIS 셀의 임피던스 스펙트럼을 EIS Studio로 분석하는 방법 — VersaStudio에서 내보내기, 검증, 등가 회로, DRT, 전도도.
translation: machine
---

# EIS 데이터 분석

분석은 <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong>에서 합니다. 자신의 컴퓨터 웹 브라우저에서 실행되는 무료 오픈 소스 앱이며 데이터는 업로드되지 않습니다. 일반적인 전위가변기 파일을 읽고, Kramers–Kronig 타당성 검정을 하고, 등가 회로(R, C, L, CPE, Warburg, Gerischer, 전송선 요소)를 피팅하고, 피크 적분을 포함한 정규화 완화 시간 분포(DRT)를 계산하며, 두께와 면적으로부터 불확도 전파를 포함해 이온 전도도를 계산합니다.

<div class="inst-grid" markdown>

[<strong>튜토리얼</strong> <span>단계별 첫 분석</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[<strong>측정</strong> <span>실험 구성 안내</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[<strong>이론</strong> <span>회로, DRT, 검증</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[<strong>설치</strong> <span>로컬에서 실행</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## EIS 셀 작업 흐름

1. <strong>VersaStudio에서 보정된 데이터를 내보냅니다</strong> — Data ▸ Export To ▸ ZView(`.z`), 또는 Graph View에서 복사. VersaStudio 설명서(부록 3)에 따르면 `.par` 파일 안의 원시 EIS 열은 <strong>보정되지 않은</strong> 값입니다.
2. 각 스펙트럼을 Kramers–Kronig 검정으로 <strong>검증합니다</strong>. 통과하지 못한 고주파 점(케이블 아티팩트)을 버리고 몇 개를 버렸는지 기록합니다.
3. 등가 회로를 <strong>피팅</strong>하거나 <strong>DRT</strong>를 계산합니다. 차단 전극의 저주파 기여는 전해질 저항에서 제외합니다.
4. <strong>전도도</strong> — 펠릿 두께와 직경을 입력: σ = <em>L</em> / (R · <em>A</em>).
5. <strong>활성화 에너지</strong> — 온도 시리즈 전체에서 log₁₀ σ를 1000/T에 대해 피팅: E<sub>a</sub> = −19.14 × 기울기 kJ mol⁻¹([EIS 셀 페이지](../cells/eis-cell.md#from-spectrum-to-conductivity) 참조). σ와 σT 중 무엇을 피팅했는지 밝히십시오.

!!! note "보고할 내용"
    펠릿 질량, 두께, 직경. 펠릿에 걸린 성형 압력(게이지 값만이 아니라). 온도와 평형 시간. 주파수 범위, 진폭, 디케이드당 점 수. 사용한 회로나 DRT 설정. 피팅 잔차.
