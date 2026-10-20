---
title: MBraun EasyLab 글러브박스
description: MBraun EasyLab 글러브박스를 시작하고, 전실을 통해 물품을 넣고 빼며, 안전한 상태로 두는 방법.
translation: machine
---

# MBraun EasyLab 글러브박스

<div class="facts" markdown>

| | |
|---|---|
| <strong>용도</strong> | 공기와 수분에 민감한 재료(황화물 전해질, Li 금속, Li₂S, P₂S₅)를 아르곤 하에서 취급 |
| <strong>분위기</strong> | Cu 촉매와 분자체로 정제한 아르곤. O₂ 센서와 H₂O 센서 측정 범위는 0–1000 ppm, 0–500 ppm |
| <strong>교육</strong> | 필수. 예약 전에 글러브박스 시험에 통과할 것 |
| <strong>예약</strong> | [장비 예약](../booking.md) |
| <strong>설명서</strong> | [설명서와 참고 자료](../manuals.md#glovebox) |

</div>

!!! danger "시작하기 전에"
    - 박스 안에서 화학물질을 다룰 때는 실험복, 보안경, 그리고 <strong>박스의 부틸 장갑 위에 니트릴 장갑</strong>을 착용하십시오.
    - 열린 용매 용기를 진공 상태의 전실에 넣지 마십시오. 닫힌 용매 병은 반진공 절차(9단계)가 필요합니다.
    - O₂ 또는 H₂O 값이 높으면 작업을 멈추고 실험실 책임자에게 알리십시오. 민감한 재료를 열지 마십시오.

## 우리 실험실 글러브박스 { #our-glovebox }

![우리 MBraun EasyLab: 메인 챔버, 제어판과 오른쪽 전실, 아래에 정제기와 진공 펌프, 바닥에 발 페달](../assets/img/gb-overview.jpg){ loading=lazy }

<div class="photo-grid" markdown>

<figure markdown>
![ECO 모드의 제어판 — 올 때와 떠날 때 이 상태여야 합니다(eco LED 녹색)](../assets/img/gb-panel-eco.jpg){ loading=lazy }
<figcaption>ECO 모드의 제어판 — 올 때와 떠날 때 이 상태여야 합니다(eco LED 녹색)</figcaption>
</figure>

<figure markdown>
![전실: 위에 압력계, REFILL(아르곤)과 EVACUATE(진공) 밸브 표시](../assets/img/gb-antechamber.jpg){ loading=lazy }
<figcaption>전실: 위에 압력계, REFILL(아르곤)과 EVACUATE(진공) 밸브 표시</figcaption>
</figure>

<figure markdown>
![바깥 문: 전실이 진공일 때는 열지 마십시오](../assets/img/gb-door.jpg){ loading=lazy }
<figcaption>바깥 문: 전실이 진공일 때는 열지 마십시오</figcaption>
</figure>

<figure markdown>
![박스 아래 자기 순환 밸브: 피스톤이 위(UP)에 있어야 합니다](../assets/img/gb-circ-valves.jpg){ loading=lazy }
<figcaption>박스 아래 자기 순환 밸브: 피스톤이 위(UP)에 있어야 합니다</figcaption>
</figure>

<figure markdown>
![발 페달: 왼쪽 = LOW PRESSURE(감압), 오른쪽 = HIGH PRESSURE(가압)](../assets/img/gb-pedals.jpg){ loading=lazy }
<figcaption>발 페달: 왼쪽 = LOW PRESSURE(감압), 오른쪽 = HIGH PRESSURE(가압)</figcaption>
</figure>

</div>

## 제어판 { #control-panel }

![우리 실험실의 EasyLab 제어판](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| 구성 요소 | 기능 |
|---|---|
| <strong>pressure mbar</strong> (위쪽 표시) | 실내 대비 박스 압력(mbar). 보통 약간의 양압이며 ECO 모드에서는 +2~+6 mbar로 유지됩니다. 재생 중에도 박스 압력을 표시합니다. |
| <strong>O₂ ppm</strong>와 <strong>H₂O ppm</strong> | 아르곤 속 산소와 수분. 재생 중에는 대신 단계와 남은 시간(분)을 표시합니다. |
| <strong>Min.set</strong> / <strong>Max.set</strong> 노브 | 박스 압력 제어의 하한과 상한. <strong>바꾸지 마십시오.</strong> |
| <strong>circ</strong> | 정제기를 통한 아르곤 순환. 재생 중을 제외하고 <strong>항상 켜져 있어야</strong> 합니다. <strong>알려진 결함:</strong> 우리 박스의 circ LED는 아주 희미하게만 켜져서 순환이 작동 중이어도 꺼진 것처럼 보일 수 있습니다. 대신 순환 피스톤을 확인하십시오: <strong>위 = 순환 켜짐</strong>. 내려가 있으면 실험실 관리자에게 알리십시오. |
| <strong>reg</strong> / <strong>reg abort</strong> | 촉매 재생 시작 / 중단(reg abort는 초기 단계에서만 작동). 실험실 관리자만. |
| <strong>pump</strong> | 진공 펌프. 전실을 배기하려면 켜져 있어야 합니다. |
| <strong>ana</strong> | O₂·H₂O 분석기. 켜 두십시오. |
| <strong>light</strong> | 박스 조명. |
| <strong>purge</strong> | O₂/H₂O를 낮추기 위해 박스를 아르곤으로 퍼지합니다. 실험실 관리자가 요청할 때만. |
| <strong>eco</strong> | 대기: 박스가 아르곤을 필요로 할 때만 펌프가 작동하고 조명이 꺼지며 압력은 +2~+6 mbar. 사용 후에는 ECO로 두십시오. |

!!! warning "알려진 결함: 희미한 circ LED"
    우리 글러브박스의 <strong>circ</strong> LED는 고장 났습니다. 순환이 켜져 있으면 항상 켜지지만 너무 희미해서 꺼진 것처럼 보입니다. 이 LED로 순환을 판단하지 마십시오. 박스 아래 순환 밸브의 피스톤으로 확인합니다(<strong>위 = 켜짐</strong>).

!!! tip "정상 작업 상태"
    압력 몇 mbar(여기서는 2.7), O₂와 H₂O 1 ppm 미만(여기서는 0.5), <strong>pump</strong>·<strong>ana</strong>·<strong>light</strong> LED 켜짐. 사진에서 <strong>circ</strong> LED가 꺼진 것처럼 보이는 것은 고장 나서 아주 희미하기 때문입니다. 대신 순환 피스톤을 확인하십시오.

## 시연 { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>처음 상태를 확인합니다.</strong> 박스는 <strong>ECO</strong> 모드여야 하고, 전실 문은 둘 다 닫혀 있으며, 전실은 완전 진공(압력계 ≈ −94 kPa)이고, 모든 밸브가 닫혀 있어야 합니다. 센서 화면에서 O₂와 H₂O 값을 읽습니다.
2. <strong>박스를 활성화합니다.</strong> <strong>ECO</strong>를 한 번 눌러 ECO 모드를 해제하고 <strong>PUMP</strong>를 한 번 누릅니다. <strong>LIGHT</strong>는 언제든 켜고 끌 수 있습니다.
3. <strong>순환을 확인합니다.</strong> 아르곤은 항상 촉매를 통해 순환해야 합니다(재생 중 제외). 이 박스의 <strong>CIRC</strong> LED는 고장 나서 아주 희미하게만 켜지므로 믿지 마십시오. 박스 아래 정제기 위의 자기 순환 밸브 피스톤을 보십시오(위 사진 참조). <strong>위</strong>에 있어야 합니다. 내려가 있으면 민감한 물질을 열기 전에 실험실 관리자에게 알리십시오.
4. <strong>전실을 아르곤으로 채웁니다.</strong> 전실과 주 챔버를 연결하는 <strong>아르곤(충전) 밸브</strong>를 천천히 엽니다. 압력계가 −94 kPa에서 0 kPa로 오르는 것을 확인한 뒤 밸브를 닫습니다.
5. <strong>물품을 넣습니다.</strong> <strong>바깥 문</strong>을 열고 물품을 전실에 넣은 뒤 바깥 문을 닫습니다. 액체 용기는 닫아 둡니다. 분말과 고체는 열어 두거나 뚜껑을 느슨하게 해도 됩니다.
6. <strong>진공을 겁니다(사이클 1).</strong> 두 문과 아르곤 밸브가 닫혀 있는지 확인합니다. 압력계가 −94 kPa가 될 때까지 <strong>진공 밸브</strong>를 천천히 열고, 진공을 <strong>15분</strong> 유지한 뒤 밸브를 닫습니다.
7. <strong>아르곤으로 충전합니다.</strong> 압력계가 다시 0 kPa가 될 때까지 아르곤 밸브를 천천히 연 뒤 닫습니다.
8. 진공–유지–충전을 총 <strong>3회</strong> 될 때까지 <strong>반복합니다.</strong> 다공성이거나 부피가 큰 물품(섬유, 종이, 폼)은 하룻밤 진공에 둔 뒤 전체 사이클을 한 번 하는 것이 가장 좋습니다.
9. <strong>특수한 경우 — 닫힌 용매 병.</strong> 닫힌 병은 완전 진공에서 터질 수 있습니다. <strong>반진공</strong>(≈ −47 kPa)까지만 걸고, 몇 분 기다린 뒤 충전하고, <strong>최소 10회</strong> 반복합니다.
10. <strong>물품을 안으로 옮깁니다.</strong> 마지막 충전 후(압력계 0 kPa, 두 밸브 닫힘) 장갑에 손을 넣고 <strong>안쪽 문</strong>을 열어 물품을 주 챔버로 옮긴 뒤 안쪽 문을 닫습니다.
11. <strong>편하게 작업합니다.</strong> 박스는 스스로 압력을 조절합니다. 장갑이 너무 팽팽하거나 헐거우면 <strong>발판</strong>으로 챔버 압력을 올리거나(+) 내립니다(−). 왼쪽 페달 = <strong>LOW PRESSURE</strong>, 오른쪽 페달 = <strong>HIGH PRESSURE</strong>.
12. <strong>작업을 마칩니다.</strong> 엎지른 것을 치우고, 장갑은 <strong>에탄올로만</strong> 닦고, 안쪽 문과 바깥 문을 닫은 뒤 진공 밸브를 연 상태로 전실을 <strong>최소 5분</strong> 진공으로 둡니다.
13. <strong>처음 상태로 돌려 놓습니다.</strong> 진공 밸브를 닫고(압력계는 ≈ −94 kPa 유지), 모든 밸브가 닫혔는지 확인하고, <strong>ECO</strong>를 한 번 누른 뒤 순환 피스톤이 <strong>위</strong>에 있는지 확인합니다.

</div>

## 물품 꺼내기 { #taking-material-out }

1. 전실이 진공이면 아르곤으로 천천히 0 kPa까지 채우고 아르곤 밸브를 닫습니다.
2. 안쪽 문을 열고 물품을 넣은 뒤 안쪽 문을 닫습니다.
3. 바깥 문을 열고 물품을 꺼낸 뒤 바깥 문을 닫습니다.
4. 전실을 진공으로 만들고, 아르곤으로 한 번 퍼지하고, 다시 진공으로 만든 뒤 모든 밸브를 닫은 채 진공 상태로 둡니다.

## 박스를 손상시키는 것 { #things-that-damage-the-box }

!!! warning "촉매 독"
    구리 촉매는 <strong>황 화합물과 산에 의해 비가역적으로 피독</strong>되며, 활성탄 필터가 포화되면 분자체도 H₂S와 용매 증기를 흡착합니다(실험실 가이드 <em>Guía MBraun EasyLab</em>, rev. 07-2022). 황화물 전해질(Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄)은 미량의 수분으로도 H₂S를 방출합니다. 사용하지 않을 때는 황화물 용기를 닫아 두고, 황화물 분말을 밤새 열어 두지 말며, 박스에서 사용한 화학물질을 기록해 O₂ 제거 능력 저하를 추적할 수 있게 하십시오.

!!! note "용매"
    휘발성 용매(에탄올, 아세토니트릴, THF 등)는 활성탄 필터에 부담을 주고 센서를 드리프트시킬 수 있습니다. 가능한 한 적은 양을 쓰고 병을 닫아 두십시오. 열린 용매로 작업하는 동안 순환을 멈춰야 하는지 실험실 책임자에게 문의하십시오 — 현재 실험실 절차에는 언급이 없습니다.

## 재생과 센서(실험실 책임자만)

촉매/분자체 재생(16단계, 약 960분, Ar/H₂ 성형 가스 ~15 L/min)과 H₂O 센서 유지보수(~2000시간마다 85% H₃PO₄로 재코팅)는 실험실 가이드에 따라 실험실 책임자만 수행합니다.

!!! question "실험실 책임자에게 확인"
    두 실험실 문서가 전실 사이클에 대해 서로 다르게 말합니다. 영어 시작 슬라이드는 <em>"압력을 풀기 전에 최소 5분 완전 진공"</em> 이라고 하고, 스페인어 실험실 가이드는 <strong>15분 유지하는 진공 사이클 3회</strong>("능동" 모드에서는 45분)라고 합니다. 이 가이드는 더 엄격한 3 × 15분을 사용합니다. 실험실 규칙이 무엇인지 확인해 주십시오.

## 설명서

- 실험실 가이드: <em>Guía MBraun EasyLab</em>(스페인어, rev. 07-2022) — 실험실 사본.
- 실험실 슬라이드: <em>MBraun EasyLab Glovebox — Operation start guide</em> — 실험실 사본.
- 제조사: [MBraun EASYlab 제품 페이지](https://shop.mbraun.de/ENU/28934/EASYlab.html).
