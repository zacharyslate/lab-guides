---
title: 전고체 시험 전지
description: 실험실용 전고체 마이크로 시험 전지(양극/전해질 이중층 펠릿과 인듐 또는 Li–In 음극)를 만들고 Neware CT-9008에서 사이클 시험하기.
translation: machine
---

# 전고체 시험 전지

[EIS](eis-cell.md)에 쓰는 것과 같은 폴리카보네이트 셀로 만든 마이크로 시험 전지입니다: <strong>이중층 펠릿</strong>(고체 전해질 + 복합 양극)의 반대쪽에 금속 음극을 둡니다. 1–11단계는 <strong>글러브박스</strong>에서 합니다.

<div class="facts" markdown>

| | |
|---|---|
| <strong>전해질층</strong> | Ø 10 mm 다이에 100 mg |
| <strong>양극층</strong> | 복합 양극 10 mg(예: [양극 절차](../procedures/cathode-composite.md)에서 제조) |
| <strong>음극</strong> | Li 포일 Ø 6.0 mm × 0.25 mm(연마)와 In 포일 Ø 8.0 mm × 0.3 mm. <strong>리튬 함유 양극(예: NMC): Li 없이 In 포일 Ø 8.0 mm × 0.1 mm만</strong> |
| <strong>충방전기</strong> | [Neware CT-9008(5 V, 6 mA)](../instruments/battery-cyclers.md) — 이 셀에 충분히 낮은 전류 범위를 가진 실험실 유일의 충방전기 |

</div>

## 시연 { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>다이 무게를 영점 잡습니다.</strong> 짧은 압착봉을 Ø 10 mm 다이 바닥에 넣고 저울에서 영점을 잡습니다.
2. <strong>전해질 100 mg을 넣고</strong> 정확한 질량을 기록합니다.
3. <strong>전해질층을 성형합니다.</strong> 긴 압착봉을 넣고 <strong>4 MPa(게이지)로 1분</strong> 누릅니다.
4. <strong>양극을 넣습니다.</strong> 긴 압착봉을 손으로 빼고, <strong>복합 양극 10 mg</strong>을 전해질 표면 전체에 고르게 펴 바릅니다. 질량을 기록합니다(펠릿이 든 다이로 먼저 영점을 잡음).
5. <strong>이중층을 성형합니다.</strong> 긴 압착봉을 다시 넣고 <strong>4 MPa(게이지)로 1분</strong> 더 누릅니다.
6. 다이를 강철 받침 위에 거꾸로 놓고 프레스에서 다이를 압착봉에서 밀어 내 <strong>이중층 펠릿을 꺼냅니다</strong>.
7. <strong>장입하고 치밀화합니다.</strong> 이중층 펠릿을 폴리카보네이트 셀에 넣되 <strong>긴 집전체를 바닥에</strong> 두고 각 집전체에 실리콘 개스킷을 끼웁니다. 셀을 프레스 중앙에 놓고 <strong>18 MPa(게이지)를 천천히 3분</strong> 가합니다.
8. <strong>전해질을 드러냅니다.</strong> 짧은 집전체를 뺍니다. 이중층의 <strong>전해질 쪽</strong>이 위를 향해야 합니다(양극 쪽은 긴 집전체 위에 놓임).
9. <strong>음극을 준비합니다.</strong> 음극 금속을 짧은 집전체에 붙입니다(크기는 위 표 참조).
10. <strong>음극을 더합니다.</strong> 셀 본체를 뒤집어 음극이 붙은 짧은 집전체에 끼우고, 전지를 <strong>4 MPa(게이지)로 2분</strong> 누릅니다.
11. 판, 절연체, 나사로 <strong>전체 셀을 조립합니다</strong>. 모든 면의 간격을 맞추고(<strong>D1 = D2</strong>) 너트는 <strong>손으로</strong> 조입니다. 이제 OCV 측정을 할 수 있습니다.
12. <strong>충방전기를 연결합니다.</strong> 셀을 글러브박스에서 꺼내 CT-9008 채널에 연결합니다: <strong>양(빨강)은 양극 쪽</strong>(긴 집전체), <strong>음(검정)은 음극 쪽</strong>. 개방 회로 전압이 안정한지 확인합니다.
13. BTS에서 <strong>시험을 프로그래밍하고 시작합니다</strong>: OCV에서 휴지한 뒤, 전압 한계 사이에서 정전류 충전과 방전을 필요한 사이클 수만큼 반복합니다. [전지 충방전기](../instruments/battery-cyclers.md#choosing-the-current) 참조.

</div>

## 전류와 전압 한계 정하기

- <strong>용량 추정.</strong> NMC-111이 38 wt%인 복합체 10 mg(복합체 300 mg 중 NMC 114 mg)에는 NMC가 ≈ 3.8 mg 들어 있습니다. 일반적인 실용 용량 ~150 mAh g⁻¹이면 ≈ 0.57 mAh이므로 <strong>0.1 C ≈ 57 µA</strong>, <strong>0.05 C ≈ 28 µA</strong>입니다. 실측 양극 질량과 재료의 예상 용량을 쓰십시오.
- <strong>어느 채널인가.</strong> 이 전류에서는 <strong>CT-9008</strong>만 제대로 작동합니다(전류 범위 1: 0.1–180 µA, 정확도 ±36 nA). CT-4008과 CT-5008은 각각 0.2 mA, 0.12 mA부터 시작해 — 이 셀의 0.1 C보다 높고 — 정확도는 100 mA 또는 120 mA 풀스케일의 ±0.02%(±20–24 µA)로 전류 자체만큼 큽니다.
- <strong>전압.</strong> Li–In 음극은 Li⁺/Li 대비 ≈ 0.6 V에 있으므로, Li⁺/Li 기준으로 주어진 양극 전압 창은 BTS에 입력할 때 ≈ 0.6 V 낮춰야 합니다.

!!! question "실험실 책임자에게 확인"
    - 슬라이드에는 Li 포일과 In 포일이 모두 나오지만, 둘 다 쓸 때 어느 쪽이 전해질을 향하는지 나와 있지 않습니다. 적층 순서를 추가해 주십시오.
    - 슬라이드 4단계는 두 번째 성형 후 <em>"remove the long pressing arm by hand, and retare the die with pellet"</em>이라고 합니다. 이 가이드는 양극 질량을 기록할 수 있도록 영점 재설정을 양극을 넣기 전으로 옮겼습니다. 의도와 맞는지 확인해 주십시오.

!!! note "게이지 압력"
    모든 압력은 유압 프레스의 <strong>게이지</strong> 값입니다. 결과를 보고할 때는 펠릿 압력(게이지 × 램 면적 / 다이 면적)으로 환산하십시오 — [EIS 셀 페이지](eis-cell.md#points-to-check-before-you-publish-numbers) 참조.
