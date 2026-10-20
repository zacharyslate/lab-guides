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

## 프레스와 압력 환산 { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Riken Seiki 발 펌프와 0–100 MPa 압력계: 펠릿에 걸리는 압력이 아니라 오일 압력을 보여 줍니다](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Riken Seiki 발 펌프와 0–100 MPa 압력계: 펠릿에 걸리는 압력이 아니라 오일 압력을 보여 줍니다</figcaption>
</figure>

<figure markdown>
![CDM-5M 프레스: 위쪽 실린더가 램을 아래로 밀어 베이스 플레이트 위의 다이나 셀을 가압합니다](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>CDM-5M 프레스: 위쪽 실린더가 램을 아래로 밀어 베이스 플레이트 위의 다이나 셀을 가압합니다</figcaption>
</figure>

</div>

발 펌프의 압력계는 실린더 안의 <strong>오일 압력</strong>을 읽습니다. 힘은 이 압력이 실린더의 피스톤, 즉 <strong>40 mm 샤프트</strong>에 작용해서 생기며, 45 mm 헤드는 그 힘을 펀치에 전달할 뿐입니다. 펠릿 안의 압력은 이 힘을 펠릿 면적으로 나눈 값입니다:

<div class="formula" markdown>

<em>F</em> = <em>P</em><sub>g</sub> × π <em>d</em>² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; <em>P</em><sub>p</sub> = <em>F</em> / (π <em>D</em>² / 4) = <em>P</em><sub>g</sub> × (<em>d</em> / <em>D</em>)² &nbsp;&nbsp;·&nbsp;&nbsp; <em>P</em><sub>g</sub> = <em>P</em><sub>p</sub> × (<em>D</em> / <em>d</em>)²

</div>

<em>d</em> = 샤프트 지름(40 mm), <em>D</em> = 다이(펠릿) 지름. <em>d</em> = 40 mm일 때 <strong>압력계 1 MPa = 1.26 kN(0.13 t)</strong>.

| 다이 Ø | 펠릿 면적 | 펠릿 ÷ 게이지 | 게이지 4 MPa(펠릿 성형) | 셀에 대한 실험실 설정 |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 게이지 7.5 MPa → <strong>333 MPa</strong>(9.4 kN) |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 게이지 18 MPa → <strong>288 MPa</strong>(22.6 kN) |

<strong>거꾸로:</strong> Ø 10 mm 펠릿을 375 MPa로 누르려면 게이지를 375 × (10/40)² = <strong>23.4 MPa</strong>로, Ø 6 mm이면 375 × (6/40)² = <strong>8.4 MPa</strong>로 맞춥니다.

<div class="bk press-calc">
<div class="bk-row">
<label>샤프트 Ø (mm)<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>다이 Ø (mm)<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>게이지 (MPa)<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>펠릿 압력 (MPa)<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>힘<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "숫자를 믿기 전에"
    - 우리 실린더의 피스톤 지름은 <strong>40 mm</strong>입니다(확인됨). 다른 프레스나 실린더라면 계산기에 그 피스톤 지름을 입력하십시오.
    - 실린더와 다이의 마찰, 압력계의 정확도는 포함하지 않았습니다. 논문에는 펠릿 압력과 함께 게이지 값, 샤프트와 다이 지름, 프레스 모델을 적으십시오.
    - 펌프 라벨의 정격 압력이나 다이의 정격 하중을 절대 넘지 마십시오.

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

## 스펙트럼에서 전도도로 { #from-spectrum-to-conductivity }

1. 등가 회로나 완화 시간 분포(DRT)로 스펙트럼을 <strong>피팅</strong>합니다. 차단 전극이 분극되는 최저 주파수를 제외하면 피팅 잔차에 경향이 없어야 합니다. DRT에서 각 피크는 하나의 과정에 해당하며, 전극 분극 기여는 전해질 저항에서 <strong>제외</strong>합니다.
2. <strong>전체 저항:</strong> R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>(피팅에서 확인한 벌크와 입계 기여).
3. <strong>펠릿을 잽니다</strong>: 두께 <em>L</em>(치밀화 후)과 면적 <em>A</em>.
4. <strong>이온 전도도:</strong> σ<sub>ion</sub> = <em>L</em> / (R<sub>total</sub> · <em>A</em>) — <em>L</em>을 cm, <em>A</em>를 cm², R을 Ω로 하면 S cm⁻¹.
5. <strong>활성화 에너지:</strong> σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). log₁₀ σ를 1000/T(T는 K)에 대해 그립니다. 기울기 <em>m</em>에서 <strong>E<sub>a</sub> = −m · ln(10) · R · 1000 = −19.14 · m kJ mol⁻¹</strong>을 얻습니다.

!!! note "활성화 에너지"
    보고서에는 1/T에 대해 σ와 σT 중 무엇을 피팅했는지 적으십시오. 두 방식은 E<sub>a</sub>가 약간 다르게 나옵니다.

피팅, DRT, 전도도 단계는 모두 <strong>[EIS Studio](https://zacharyslate.github.io/eis-studio/)</strong>에서 할 수 있습니다 — [EIS 데이터 분석](../analysis/eis-analysis.md) 참조.

## 전자 전도도(DC 분극)

1. 같은 차단 셀에 일정 전위를 가합니다(크로노암페로메트리). 전류는 초기값에서 정상 상태로 감소합니다.
2. 정상 상태 전류 <em>I</em>를 기록하고, 전해질의 작동 창 안의 여러 전위에서 반복합니다(예: 황화물은 2–4 V).
3. V를 I에 대해 그리면 기울기가 전자 저항 <em>R</em>입니다. 그러면 σ<sub>e</sub> = <em>L</em> / (<em>R</em> · <em>A</em>).

그룹에서 쓰는 목표값: 분리막용 전해질은 σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹이고 σ<sub>e</sub> < 10⁻⁵ S cm⁻¹, 전극 바인더는 σ<sub>ion</sub> > 10⁻³ S cm⁻¹이며 전자 전도도가 높을 것.

## 수치를 발표하기 전에 확인할 점 { #points-to-check-before-you-publish-numbers }

!!! note "게이지 압력은 펠릿 압력이 아닙니다"
    "4 MPa", "7.5 MPa", "18 MPa"는 <strong>게이지(오일) 압력</strong>입니다. 40 mm 샤프트에서 Ø 10 mm 펠릿에 게이지 18 MPa는 약 <strong>288 MPa</strong>, Ø 6 mm 펠릿에 게이지 7.5 MPa는 약 <strong>333 MPa</strong>입니다 — [프레스와 압력 환산](#press) 참조. 다른 사람이 재현할 수 있도록 논문에는 펠릿 압력(과 게이지 값, 샤프트와 다이 지름)을 적으십시오.

!!! note "120 °C의 폴리카보네이트"
    폴리카보네이트는 유리 전이(≈ 145 °C) 근처에서 연화되고, 그보다 훨씬 낮은 온도에서도 하중을 받으면 크리프가 생깁니다. 적층 압력하에 100–120 °C에서는 구멍과 개스킷이 변형되어 접촉과 두께가 달라질 수 있습니다. 고온 측정 후에는 셀을 점검하고 펠릿 두께를 다시 재십시오. 가열과 냉각 곡선이 겹치는지 보는 것이 좋은 확인 방법입니다.

!!! note "고주파 한계"
    PMC-2000은 7 MHz까지 지정되어 있지만, ~1 MHz 이상에서는 케이블 인덕턴스와 표유 커패시턴스가 저저항 펠릿의 스펙트럼을 왜곡합니다. Kramers–Kronig 검정을 하고(EIS Studio에서 가능) 통과하지 못한 고주파 점은 버리십시오.
