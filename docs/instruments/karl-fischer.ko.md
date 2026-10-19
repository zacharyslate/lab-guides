---
title: Mettler Toledo C20S 칼 피셔 전량계
description: Mettler Toledo C20S 전량법 칼 피셔 적정기로 용매의 수분을 측정하고, 1% 수분 표준으로 확인하기.
translation: machine
---

# Mettler Toledo C20S 전량법 칼 피셔 적정기

<div class="facts" markdown>

| | |
|---|---|
| <strong>용도</strong> | 액체 중 미량 수분 — 예: 에탄올, 아세토니트릴, THF가 전해질 액상 합성에 충분히 건조한지 확인 |
| <strong>원리</strong> | 발생 전극에서 요오드를 전기화학적으로 생성해 물과 반응시키고, 필요한 전하량으로 물의 질량을 구함 |
| <strong>셀</strong> | 발생 전극(격막 유/무, <strong>파란 플러그</strong>), 이중 백금 지시 전극, 건조관, 셉텀, 자기 교반기 |
| <strong>교육</strong> | 필수 |
| <strong>설명서</strong> | [설명서와 참고 자료](../manuals.md#karl-fischer) |

</div>

!!! danger "안전"
    KF 시약에는 메탄올 등 알코올, 요오드, SO₂, 염기가 들어 있어 유독하고 가연성입니다. 장갑과 보안경을 착용하고, 셀의 충전과 배출은 흄후드에서 하며, 사용한 시약은 실험실이 지정한 KF 시약 폐액 용기에 버리십시오.

## 시연 { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>셀을 확인합니다.</strong> 셀에 시약이 차 있고, 두 전극이 연결되어 있으며(발생 전극 = <strong>파란 플러그</strong>), 건조관에 새 건조제가 들어 있고, 모든 마개와 조인트가 단단히 끼워져 있어야 합니다 — 새는 곳이 있으면 실내 습기가 들어옵니다.
2. <strong>적정기 전원을 켭니다.</strong>
3. <strong>메서드를 준비합니다(처음만).</strong> Methods ▸ New ▸ Standard method template ▸ <strong>KF Coul</strong> ▸ Sample: <em>Entry type</em>을 <strong>Weight</strong>로 설정 ▸ OK ▸ Save. Start 화면에서 <strong>AddToHome</strong>을 눌러 바로 가기를 만듭니다(<em>Immediate start</em> 체크).
4. <strong>사전 적정.</strong> 바로 가기를 누릅니다. 적정기가 시약에 이미 있는 물을 제거합니다. 교반기가 돌고 있어야 합니다. 드리프트가 내려가길 기다립니다.
5. <strong>대기.</strong> 드리프트가 낮고 안정되면 적정기가 <strong>Standby</strong>로 바뀌고 <strong>Start sample</strong>이 활성화됩니다.
6. <strong>시료 주사기를 준비합니다.</strong> 주사기에 시료(또는 시스템 확인용 <strong>1% KF 수분 표준</strong>)를 채우고 저울에 올려 <strong>영점(용기 무게)을 잡습니다</strong>.
7. <strong>주입합니다.</strong> <strong>Start sample</strong>을 누르고, 바늘 끝이 시약 표면 아래에 오도록 — 전극에 닿지 않게 — 셉텀을 뚫어 주입합니다(1% 표준 0.5–1.0 mL).
8. <strong>다시 잽니다.</strong> 주사기를 저울에 다시 올리고 표시된 <strong>시료 질량</strong>(부호를 뗀 음수 값)을 입력합니다. 적정이 진행됩니다.
9. <strong>결과를 읽습니다</strong>(R1, 수분 함량). 1% 표준은 인증서 허용 범위 안에서 ≈ 10 mg g⁻¹이어야 합니다. 아니면 시료를 측정하기 전에 시약과 드리프트를 점검합니다.
10. <strong>멈춥니다.</strong> <strong>Stop analysis</strong>로 현재 분석을 멈추거나, <strong>More ▸ End series</strong>로 시리즈를 끝냅니다.

</div>

## 좋은 습관

- 매일 <strong>표준을 먼저</strong> 측정하고 그다음 시료를 측정합니다. 각 시료는 최소 3회 측정합니다.
- 채우기 전에 주사기를 시료로 헹구고, 마른 밀폐 주사기를 사용합니다.
- 드리프트가 계속 높거나, 표준 결과가 벗어나거나, 셀이 가득 차 가면 시약을 교체합니다.
- 발생 전극 관리: 비우고, 메탄올로 헹구고, 보풀 없는 천으로 닦은 뒤 70–80 °C에서 몇 시간 건조합니다(설명서 §7).

!!! warning "황화물 시료를 주입하지 마십시오"
    황화물, H₂S, 티올은 요오드와 반응해 <strong>실제보다 높은</strong> 수분 값을 주고 시약도 소모합니다. 이 적정기는 <strong>용매와 액체</strong>에 쓰십시오. 황화물 전해질 분말의 수분은 직접 주입으로 측정할 수 없습니다 — 대안을 실험실 책임자와 논의하십시오.
