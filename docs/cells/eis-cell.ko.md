---
title: AC 임피던스(EIS) 셀
description: 고체 전해질 펠릿을 성형하고, 폴리카보네이트 임피던스 셀을 조립하고, PMC-2000에서 이온 전도도를 측정하기.
translation: machine
---

# AC 임피던스(EIS) 셀

이 셀은 두 개의 차단성 스테인리스 전극 사이에 놓인 황화물 또는 할로겐화물 고체 전해질 펠릿의 <strong>이온 전도도</strong>를 측정합니다. 1–9단계는 글러브박스 안에서 하십시오.

<div class="facts" markdown>

| | |
|---|---|
| <strong>부품</strong> | 스테인리스 판 2개 · 스테인리스 집전체 2개(긴 것, 짧은 것) · 실리콘 개스킷 2개 · 폴리카보네이트 셀 본체 · 절연체 2개 · M4 작은 나사 · 4 mm 긴 나사 · 전해질 펠릿 |
| <strong>다이</strong> | Ø 6 mm(분말 20–30 mg) 또는 Ø 10 mm(분말 80–100 mg) |
| <strong>장비</strong> | [PARSTAT MC · PMC-2000과 VersaStudio](../instruments/potentiostat.md) |
| <strong>분석</strong> | [EIS Studio](https://zacharyslate.github.io/eis-studio/)로 [EIS 데이터 분석](../analysis/eis-analysis.md) |

</div>

## 시연 { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>다이 무게를 영점 잡습니다.</strong> 짧은 압착봉을 다이 바닥에 넣고, 다이를 저울에 올려 영점(용기 무게)을 잡습니다.
2. <strong>분말을 넣습니다.</strong> 전해질 분말을 다이에 조심스럽게 옮깁니다: Ø 6 mm 다이는 <strong>20–30 mg</strong>, Ø 10 mm 다이는 <strong>80–100 mg</strong>. 질량을 기록합니다.
3. 분말 위에 <strong>긴 압착봉을 넣습니다</strong>.
4. <strong>펠릿을 성형합니다.</strong> 다이를 프레스 중앙에 놓고 <strong>4 MPa(게이지)</strong>를 <strong>1분</strong> 가합니다.
5. <strong>펠릿을 꺼냅니다.</strong> 다이를 강철 받침 위에 거꾸로 놓고 프레스로 다이를 압착봉에서 밀어 냅니다. 펠릿이 받침으로 나옵니다.
6. <strong>셀에 넣습니다.</strong> 긴 집전체를 폴리카보네이트 셀 바닥에 넣고, 펠릿을 구멍으로 옮긴 뒤, 위에 짧은 집전체를 끼웁니다. <strong>집전체마다 실리콘 개스킷이 필요합니다.</strong>
7. <strong>치밀화합니다.</strong> 장입한 셀을 프레스 중앙에 놓고 천천히 가압합니다: <strong>Ø 10 mm 셀은 18 MPa(게이지)</strong>, <strong>Ø 6 mm 셀은 7.5 MPa(게이지)</strong>로 <strong>3분</strong>.
8. <strong>전체 셀을 조립합니다.</strong> 그림처럼 강철 판, 절연체, 나사를 더합니다.
9. <strong>평행을 맞춥니다.</strong> 바깥쪽 강철 판 사이의 간격이 모든 면에서 같아야 합니다(<strong>D1 = D2</strong>). 모든 너트는 <strong>손으로만</strong> 조입니다.
10. <strong>전위가변기를 연결합니다.</strong> 2전극 연결을 씁니다: <strong>WE(초록) + SE(회색)</strong>를 한쪽 판에, <strong>CE(빨강) + RE(흰색)</strong>를 다른 판에. 셀이 대칭이므로 극성은 상관없습니다.
11. <strong>평형을 잡고 측정합니다.</strong> 셀을 <strong>최소 45분</strong> 일정 온도에 두었다가 정전위 EIS를 실행합니다(한 번의 스윕은 약 30초 – 1분).
12. <strong>온도마다 반복합니다</strong>: 40, 60, 80, 100, 120 °C. 각 단계에서 최소 45분 기다립니다.

</div>

## 측정 설정(VersaStudio, Potentiostatic EIS) { #measurement-settings-versastudio-potentiostatic-eis }

| 그룹 | 설정 | 값 |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0.1 Hz 또는 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | 로그, <strong>디케이드당 10점</strong> |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | <strong>None</strong>(EIS에 필수 — VersaStudio 설명서 §4.4.2.2) |

!!! question "실험실 슬라이드의 불일치"
    실험실 슬라이드에는 <em>"Number of points: 30"</em>과 <em>"Points per decade: 10"</em>이 모두 적혀 있습니다. 둘 다 성립할 수는 없습니다: 3 MHz에서 0.1 Hz까지는 7.5 디케이드이므로 디케이드당 10점이면 ≈ 75점(1 Hz까지는 ≈ 65점)입니다. 이 가이드는 디케이드당 10점을 사용합니다. 확인해 주십시오.

## 스펙트럼에서 전도도로 { #from-spectrum-to-conductivity }

1. 등가 회로나 완화 시간 분포(DRT)로 스펙트럼을 <strong>피팅</strong>합니다. 차단 전극이 분극되는 최저 주파수를 제외하면 피팅 잔차에 경향이 없어야 합니다. DRT에서 각 피크는 하나의 과정에 해당하며, 전극 분극 기여는 전해질 저항에서 <strong>제외</strong>합니다.
2. <strong>전체 저항:</strong> R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>(피팅에서 확인한 벌크와 입계 기여).
3. <strong>펠릿을 잽니다</strong>: 두께 <em>L</em>(치밀화 후)과 면적 <em>A</em>.
4. <strong>이온 전도도:</strong> σ<sub>ion</sub> = <em>L</em> / (R<sub>total</sub> · <em>A</em>) — <em>L</em>을 cm, <em>A</em>를 cm², R을 Ω로 하면 S cm⁻¹.
5. <strong>활성화 에너지:</strong> σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). log₁₀ σ를 1000/T(T는 K)에 대해 그립니다. 기울기 <em>m</em>에서 <strong>E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹</strong>을 얻습니다.

!!! warning "실험실 슬라이드 정정"
    슬라이드에는 <em>"slope = 2.313 × E<sub>a</sub>"</em>라고 되어 있습니다. 상수는 ln 10 = <strong>2.303</strong>이며, 관계식에는 R과 1000/T 축에서 오는 1000배가 들어가야 합니다: E<sub>a</sub> [kJ mol⁻¹] = −2.303 · 8.314 · m = <strong>−19.14 m</strong>. 보고서에는 σ와 σT 중 무엇을 1/T에 대해 피팅했는지도 밝히십시오 — 두 방식은 E<sub>a</sub>가 약간 다릅니다.

피팅, DRT, 전도도 단계는 모두 <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong>에서 할 수 있습니다 — [EIS 데이터 분석](../analysis/eis-analysis.md) 참조.

## 전자 전도도(DC 분극)

1. 같은 차단 셀에 일정 전위를 가합니다(크로노암페로메트리). 전류는 초기값에서 정상 상태로 감소합니다.
2. 정상 상태 전류 <em>I</em>를 기록하고, 전해질의 작동 창 안의 여러 전위에서 반복합니다(예: 황화물은 2–4 V).
3. V를 I에 대해 그리면 기울기가 전자 저항 <em>R</em>입니다. 그러면 σ<sub>e</sub> = <em>L</em> / (<em>R</em> · <em>A</em>).

그룹에서 쓰는 목표값: 분리막용 전해질은 σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹이고 σ<sub>e</sub> < 10⁻⁵ S cm⁻¹, 전극 바인더는 σ<sub>ion</sub> > 10⁻³ S cm⁻¹이며 전자 전도도가 높을 것.

## 수치를 발표하기 전에 확인할 점 { #points-to-check-before-you-publish-numbers }

!!! note "게이지 압력은 펠릿 압력이 아닙니다"
    "4 MPa"와 "18 MPa"는 <strong>게이지(유압) 압력</strong>입니다. 펠릿에 걸리는 압력은 <em>P</em><sub>펠릿</sub> = <em>P</em><sub>게이지</sub> × (<em>A</em><sub>램</sub> / <em>A</em><sub>다이</sub>)로, Ø 6–10 mm 다이에서는 몇 배나 큽니다. 다른 사람이 재현할 수 있도록 논문에는 펠릿 압력(과 프레스 모델, 램 직경)을 보고하십시오.

!!! note "120 °C의 폴리카보네이트"
    폴리카보네이트는 유리 전이(≈ 145 °C) 근처에서 연화되고, 그보다 훨씬 낮은 온도에서도 하중을 받으면 크리프가 생깁니다. 적층 압력하에 100–120 °C에서는 구멍과 개스킷이 변형되어 접촉과 두께가 달라질 수 있습니다. 고온 측정 후에는 셀을 점검하고 펠릿 두께를 다시 재십시오. 가열과 냉각 곡선이 겹치는지 보는 것이 좋은 확인 방법입니다.

!!! note "고주파 한계"
    PMC-2000은 7 MHz까지 지정되어 있지만, ~1 MHz 이상에서는 케이블 인덕턴스와 표유 커패시턴스가 저저항 펠릿의 스펙트럼을 왜곡합니다. Kramers–Kronig 검정을 하고(EIS Studio에서 가능) 통과하지 못한 고주파 점은 버리십시오.
