---
title: Neware 전지 충방전기
description: 셀에 맞는 Neware 충방전기와 전류 범위를 고르고, BTS에서 스텝 파일을 작성하고, 채널을 시작하고, 데이터를 내보내기.
translation: machine
---

# Neware 전지 충방전기(CT-4008, CT-4008T, CT-5008, CT-9008)

## 어떤 셀에 어떤 충방전기?

충방전기는 전류를 정확하게 <strong>인가하고 측정</strong>할 수 있어야 합니다. 정확도는 <strong>범위의 풀스케일</strong>에 대한 백분율로 표시되므로, 큰 범위에서 작은 전류는 부정확합니다.

| 장비 | 전압 | 전류 범위 | 정확도(전류) | 적합한 용도 |
|---|---|---|---|---|
| <strong>CT-9008-5V6A-F</strong> | −5 ~ +5 V | 0.1–180 µA · 180 µA–6 mA · 6–180 mA · 0.18–6 A | ±36 nA · ±1.2 µA · ±36 µA · ±1.2 mA | <strong>전고체 마이크로 셀, 저율 코인 셀</strong> |
| CT-5008-5V12A-TF | −3 ~ +5 V | 0.12–120 mA · 0.12–1.2 A · 1.2–12 A | ±0.02% FS(최저 범위에서 ±24 µA) | ~1 mA 이상의 코인·파우치 셀 |
| CT-4008Q-5V12A-S1 | 25 mV–5 V(범용 홀더 사용 시 방전 최저 2 V) | 0.2–100 mA · 0.1–0.5 A · 0.5–6 A · 6–12 A | ±0.02% FS | 큰 셀. 2 V 미만으로 방전하는 셀에는 <strong>부적합</strong> |
| CT-4008T-5V12A-S1-F | −1 ~ 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0.05% FS | ≥ 5 mA가 필요한 셀 |

<small>실험실 파일의 Neware 사양서에서. FS = 풀스케일.</small>

### 전류 선택 { #choosing-the-current }

1. 용량을 추정합니다: <em>Q</em>(mAh) = 활물질 질량(g) × 예상 비용량(mAh g⁻¹).
2. C-rate <em>n</em>의 전류: <em>I</em> = <em>n</em> × <em>Q</em>(<em>Q</em>가 mAh이면 mA).
3. 최저 범위가 <em>I</em>를 허용 오차로 <strong>포함하는</strong> 장비와 범위를 고릅니다(목표: <em>I</em>의 1% 미만).

<em>예:</em> [전고체 시험 전지](../cells/solid-state-battery.md)는 ≈ 0.57 mAh → 0.1 C ≈ 57 µA → <strong>CT-9008, 범위 1</strong>(오차 ±36 nA ≈ 0.06%). CT-4008/5008에서는 같은 전류가 최저 범위보다 낮고, 정확도(±20–24 µA)가 전류의 약 40%입니다.

## 우리 실험실 장비 { #our-set-up }

<div class="photo-grid" markdown>

<figure markdown>
![포텐쇼스탯 아래의 Neware 사이클러. 채널 번호는 각 장비 앞면에 인쇄되어 있습니다. 장비마다 전류 범위가 다르므로(위 표) 채널을 시작하기 전에 장비의 모델 라벨을 확인하십시오.](../assets/img/rack-neware.jpg){ loading=lazy }
<figcaption>포텐쇼스탯 아래의 Neware 사이클러. 채널 번호는 각 장비 앞면에 인쇄되어 있습니다. 장비마다 전류 범위가 다르므로(위 표) 채널을 시작하기 전에 장비의 모델 라벨을 확인하십시오.</figcaption>
</figure>

<figure markdown>
![장비 랙: 위쪽이 PARSTAT MC 포텐쇼스탯, 아래쪽이 Neware 배터리 사이클러입니다. 셀 케이블은 랙 양쪽에 걸려 있습니다.](../assets/img/rack-overview.jpg){ loading=lazy }
<figcaption>장비 랙: 위쪽이 PARSTAT MC 포텐쇼스탯, 아래쪽이 Neware 배터리 사이클러입니다. 셀 케이블은 랙 양쪽에 걸려 있습니다.</figcaption>
</figure>

</div>

## 시연 — BTS 소프트웨어

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. 장치 목록에서 <strong>장비를 선택하고</strong>(여기서는 마이크로 셀용 CT-9008) 빈 채널을 찾습니다. 미리 [예약 페이지](../booking.md)에서 채널을 예약하십시오.
2. <strong>셀을</strong> 채널에 <strong>연결합니다</strong>(4선식 켈빈 클립: 빨간 두 개는 양극, 검은 두 개는 음극). 채널 칸에 개방 회로 전압이 표시되면 안정될 때까지 기다립니다.
3. <strong>채널을 오른쪽 클릭 ▸ Single start.</strong>
4. <strong>스텝 파일을 작성하거나 불러옵니다.</strong> 일반적인 예: <em>Rest</em>(OCV) → <em>CC 충전</em>(전류, 상한 컷오프 전압) → <em>Rest</em> → <em>CC 방전</em>(전류, 하한 컷오프 전압) → 2단계로 <em>Cycle</em>, <em>N</em>회 → <em>End</em>. 컷오프 전압 바로 바깥에 <strong>보호 한계</strong>(상한·하한 전압)를 설정합니다. 스텝 이름은 BTS 버전마다 조금 다릅니다(예: CC_Chg / CCC, CC_DChg / CCD).
5. <strong>시험 정보를 입력합니다</strong>: 고유한 이름/바코드(이니셜, 셀 종류, 날짜, 번호), 용량을 mAh g⁻¹로 표시하기 위한 <strong>활물질 질량</strong>, 스텝 파일. <strong>Start</strong>를 누릅니다.
6. <strong>시작되었는지 확인합니다</strong>: 칸이 <em>working</em>으로 바뀌고 스텝, 전압, 전류를 표시합니다. 처음 몇 분을 지켜보십시오 — 부호가 틀리거나 전압이 한계에 붙어 있으면 연결이나 스텝 오류입니다.
7. <strong>데이터를 봅니다</strong>: 오른쪽 클릭 ▸ View data로 <strong>BTSDA</strong>를 열어 V–t, 용량–사이클을 그리고 <strong>Excel로 내보냅니다</strong>.
8. <strong>끝냅니다</strong>: 시험은 <em>End</em>에서 끝나거나, 오른쪽 클릭 ▸ <strong>Single stop</strong>. 셀을 분리하고 예약을 해제합니다.

</div>

!!! warning "채널을 시작하기 전에"
    - 다른 사람이 예약했거나 <em>working</em> / <em>pause</em>로 표시된 채널은 절대 시작하지 마십시오.
    - BTS에는 <strong>상대 전극 기준</strong> 전압을 입력합니다. Li–In 음극에서는 Li⁺/Li 기준 한계에서 ≈ 0.6 V를 빼십시오.
    - 전고체 셀은 시험 내내 적층 압력이 필요합니다 — 스텝 사이에 셀을 풀지 마십시오.
