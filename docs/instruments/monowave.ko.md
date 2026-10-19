---
title: Anton Paar Monowave 400 R
description: Monowave 400 R에서 밀폐 바이알 마이크로파 합성을 수행하고, 선택적으로 Cora 5001로 현장 라만 모니터링을 합니다.
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| <strong>용도</strong> | 온도·압력 제어하에 자기 교반하며 밀폐 바이알에서 하는 액상 합성. 예: 황화물 전해질로 가는 용액 경로 |
| <strong>한계</strong> | 최대 <strong>300 °C</strong>, <strong>30 bar</strong>. 850 W 마그네트론 1개. 교반 최대 1200 rpm |
| <strong>특징</strong> | "R" 버전은 <strong>Cora 5001 광섬유 라만 프로브</strong>를 장착해 반응 중 현장 스펙트럼을 얻을 수 있음(클래스 3B 레이저) |
| <strong>필요 조건</strong> | 정확한 압력 측정과 바이알 밀폐를 위한 <strong>5.5–6 bar</strong> 압축 공기 |
| <strong>교육</strong> | 필수. 라만 측정에는 레이저 안전 교육 필수 |
| <strong>설명서</strong> | [설명서와 참고 자료](../manuals.md#monowave) |

</div>

### 반응 바이알

| 바이알 | 부피 | 충전량 | 최대 T | 최대 p | 최대 시간 |
|---|---|---|---|---|---|
| G4(유리) | 4 mL | 0.5–2 mL | 250 °C | 30 bar | 100 h |
| <strong>G10</strong>(유리) | 10 mL | <strong>2–6 mL</strong> | 300 °C | 30 bar | 100 h |
| <strong>G30</strong>(유리) | 30 mL | <strong>6–20 mL</strong> | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10(SiC) | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck(SiC) | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>Monowave 400 R Reference Guide(E07IB012EN-C) 표 1에서. 라만 실험에는 부록 C의 더 짧은 시간 한계가 적용됩니다. G4와 SiC 바이알은 라만 프로브와 함께 사용할 수 <strong>없습니다</strong>.</small>

!!! danger "시작하기 전에"
    - <strong>클래스 3B 레이저.</strong> 가이드 레일이나 프로브를 움직이기 전에 라만 프로브를 비활성화하고(프로브의 Stop 버튼), 프로브나 광섬유를 절대 들여다보지 마십시오.
    - 항상 <strong>실제로 사용하는 바이알 종류</strong>를 선택하십시오. 종류가 틀리면 온도/압력 값이 틀리고 바이알이 파열될 수 있습니다.
    - 최소 충전량을 지키십시오. IR 센서는 바닥에서 ~1 cm 위의 바이알 벽을 측정합니다.
    - 반응 거동을 모르면 소량, 최대 희석으로 시작하십시오.
    - 이 장비는 <strong>내산성이 아닙니다</strong>. 부식성 시약은 수명을 단축합니다(빠른 시작 안내서).
    - 공기에 민감한 반응: 바이알은 <strong>글러브박스 안에서</strong> 채우고 닫으십시오. 바이알이 압력을 방출하면 배기가 반응 증기(황화물 화학에서는 H₂S일 수 있음)를 함께 내보내므로 배기는 국소 배기로 연결되어야 합니다.

## 시연 { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>압축 공기를 확인합니다.</strong> 시작 전에 공급 압력이 5.5–6 bar여야 합니다.
2. <strong>바이알을 채웁니다.</strong> G10(2–6 mL) 또는 G30(6–20 mL) 바이알에 알맞은 교반 막대를 넣고 반응 혼합물을 넣습니다.
3. <strong>바이알을 닫습니다.</strong> 셉텀을 <strong>PTFE 면이 반응 혼합물을 향하도록</strong> 스냅 캡에 넣고, 가장자리를 눌러도 빠지지 않을 때까지 캡을 누릅니다. 실리콘 셉텀: 4시간 미만 실험. PTFE 디스크 + PTFE 셉텀: 4시간 초과 실험(PTFE 셉텀은 일회용).
4. <strong>실험을 프로그래밍합니다.</strong> 터치스크린에서 <strong>Task List</strong>를 누르고, 마지막 줄을 눌러 실험 이름을 정하고, <strong>Standard</strong>를 선택해 단계(가열, 유지, 냉각)를 설정합니다. 냉각 온도(30–70 °C)는 용매의 끓는점보다 약 10 °C 낮아야 합니다. <strong>사용하는 바이알 종류를 선택</strong>하고 OK를 누릅니다.
5. <strong>라만 프로브를 배치합니다.</strong> 레이저를 <strong>비활성화</strong>한 상태에서 가이드 레일을 <strong>G10</strong>(가장 안쪽) 또는 <strong>G30</strong>(가운데) 위치로, 라만을 측정하지 않으면 <strong>idle</strong>(가장 바깥쪽)로 옮깁니다. 같은 크기의 빈 열린 바이알이 저항 없이 캐비티에 들어가는지 확인합니다.
6. <strong>바이알을 넣습니다.</strong> G4, G10, C10 바이알은 캐비티 인서트 위에 <strong>어댑터 링</strong>(폴리이미드 면이 위)이 필요합니다. G30 바이알은 바로 넣습니다.
7. <strong>시작합니다.</strong> <strong>Start</strong>를 누릅니다. 블라인드 플러그가 장착되어 있으면(Ruby 온도계 없음) 실행이 시작되고 회전 뚜껑이 닫힙니다.
8. Cora 5001에서 <strong>라만 측정은</strong> <strong>뚜껑이 닫힌 뒤에</strong> 시작합니다([Cora 5001 가이드](cora.md) 참조).
9. 메인 화면에서 온도, 압력, 출력, 교반을 <strong>모니터링합니다</strong>. 위젯을 눌러 진행 중인 실험을 편집할 수 있습니다.
10. <strong>정지합니다.</strong> 끝날 때 — 또는 일찍 멈출 때 — <strong>먼저 라만 측정을 멈추고 레이저를 비활성화한</strong> 뒤, (일찍 멈추는 경우) <strong>Stop → Yes</strong>를 누릅니다. 장비가 바이알을 식히고 안전해지면 뚜껑을 엽니다.
11. <strong>바이알을 꺼내 엽니다.</strong> 조심해서 꺼내고, 캡핑 도구로 병따개처럼 엽니다(침지관이 있으면 주의).
12. <strong>데이터를 내보냅니다.</strong> Menu ▸ Data Memory ▸ Browse Results ▸ 선택 ▸ USB로 Export(.pdf, .csv, .xls, .raw, .png). 장비는 최대 1000개의 결과를 저장합니다.

</div>

## 알아 두면 좋은 점

- <strong>온도 센서.</strong> 내장 IR 센서(±5 °C)는 바이알 벽을 측정합니다. 선택 사양인 Ruby 광섬유 온도계(±2 °C)는 혼합물 내부를 측정하며 발열 반응이나 흡수가 약한 용매에 더 좋지만, <strong>라만 프로브와 함께 쓸 수 없고</strong> 4시간을 넘는 실행에도 쓸 수 없습니다.
- <strong>흡수가 약한 용매</strong>(예: 톨루엔, 헥산)는 잘 가열되지 않아, 장비가 출력을 낮추고 설정 온도에 끝내 도달하지 못할 수 있습니다. G4 바이알의 흡수가 강한 용매는 오버슈트할 수 있으니 출력을 제한하거나 "Heat to temperature in time"을 쓰십시오.
- <strong>라만을 쓰지 않을 때:</strong> 프로브를 idle에 두고 개조하지 않은 캐비티 인서트를 장착해, 바이알이 깨져도 프로브가 손상되지 않게 하십시오.

## 관련 자료

- 황화물 전해질의 액상 합성 중 현장 라만: [참고 문헌](../references.md#group-publications) 참조.
