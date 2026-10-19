---
title: Anton Paar Cora 5001
description: 광섬유 프로브형 Cora 5001 분광기로 밀봉 시료의 라만 스펙트럼을 측정하고, Monowave 400 R에서 현장 모니터링에 사용하기.
translation: machine
---

# Anton Paar Cora 5001 라만 분광기

<div class="facts" markdown>

| | |
|---|---|
| <strong>용도</strong> | 분말, 액체, 반응 혼합물의 라만 스펙트럼. [Monowave 400 R](monowave.md) 안에서 반응 현장 모니터링 |
| <strong>실험실 버전</strong> | <strong>Cora 5001 Fiber</strong>: 레이저와 라만 신호가 광섬유 프로브로 전달됨. 여기 파장은 라벨에서 확인(532, 785, 1064 nm 또는 듀얼) |
| <strong>레이저</strong> | 광섬유 프로브 사용 시 <strong>클래스 3B</strong> — 프로브가 도킹 스테이션에 있어도 동일 |
| <strong>교육</strong> | 필수. 레이저 안전 교육 포함 |
| <strong>설명서</strong> | [설명서와 참고 자료](../manuals.md#cora) |

</div>

!!! danger "클래스 3B 레이저"
    - 프로브 끝이나 광섬유 끝을 절대 들여다보지 말고, 프로브를 사람이나 반사면에 겨누지 마십시오.
    - 프로브가 차폐되지 않았을 때는 사용 파장용 레이저 보안경을 착용하십시오.
    - 시료실이나 광섬유 포트를 열거나, 프로브의 <strong>Stop</strong>을 누르거나, 인터록이 작동하면 레이저가 즉시 꺼집니다.

## 시연 { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. 뒷면 스위치로 <strong>전원을 켭니다</strong>. 온도 평형을 위해 약 <strong>15분</strong> 기다립니다. 예열 중에도 측정할 수 있지만, 끝날 때까지 설정은 잠겨 있습니다.
2. 자신의 사용자 계정으로 <strong>로그인합니다</strong>.
3. <strong>시료를 준비합니다.</strong> 공기에 민감한 분말은 <strong>글러브박스에서 채운 밀봉 유리 바이알</strong>에 넣습니다. 바이알을 책상에 가볍게 두드려 분말을 다지고 기포를 없앱니다.
4. <strong>도킹 스테이션에 넣습니다.</strong> 고정 나사를 풀고 프로브를 뒤쪽 스토퍼까지 밀어 둡니다. 바이알을 꽂은 홀더를 스테이션에 넣고 뚜껑을 닫습니다.
5. <strong>레이저를 활성화합니다.</strong> 프로브의 <strong>Enable</strong>(또는 장비 인터록의 리셋 버튼)을 누릅니다. <strong>Ready</strong> LED가 켜집니다.
6. <strong>초점을 맞춥니다.</strong> <strong>Adjust Focus</strong>를 열고 <strong>Start</strong>를 눌러 실시간 스펙트럼을 봅니다. 신호가 최대가 될 때까지 프로브를 시료 쪽으로 밀고, <strong>고정 나사를 조인 뒤</strong> <strong>Stop</strong>을 누릅니다. 초점은 프로브 끝 몇 mm 앞에 있습니다.
7. <strong>측정을 설정합니다.</strong> Menu ▸ <strong>Single Measurement</strong>: 시료 이름을 입력하고 파장(듀얼 레이저 장비)과 레이저 출력을 고릅니다(532 nm: 켜짐 = 50 mW, 785/1064 nm: 0–450 mW, 최소 50 mW 권장). <strong>Auto Exposure</strong>(최대 10 s)는 첫 시도로 적당합니다.
8. <strong>고급 설정(선택).</strong> 배경 측정(실내광 제거), 잡음을 줄이기 위한 N개 스펙트럼 평균, 우주선 제거(N ≥ 3 필요, 형광 시료에서는 끔), 형광에 대한 기준선 보정.
9. <strong>측정합니다.</strong> <strong>Measure</strong>를 누릅니다. 스펙트럼이 표시되고 시료 이름으로 저장되며, 소프트웨어가 품질 문제를 알려 줄 수 있습니다.
10. <strong>저장하고 내보냅니다.</strong> 스펙트럼을 내보내거나 인쇄하고, 같은 설정을 나중에 반복하려면 <strong>Save as method</strong>를 씁니다. 프로브의 <strong>Stop</strong>을 누르면 측정이 중단되고 레이저가 비활성화됩니다.
11. <strong>마칩니다.</strong> 시료를 꺼내고 뒷면 스위치로 전원을 끕니다(전원을 끌 때 데이터가 저장됩니다).

</div>

## 전지 재료 측정 팁

- <strong>쓸 만한 신호가 나오는 가장 낮은 레이저 출력을 쓰십시오.</strong> 어두운 시료(탄소 포함 복합체, NMC)는 흡수가 강해 특히 532 nm에서 국부적으로 가열·분해될 수 있습니다. 같은 지점에서 연속으로 스펙트럼 두 개를 찍어 다르면 출력을 낮추십시오.
- <strong>유리도 신호를 냅니다.</strong> 빈 바이알을 <em>정확히</em> 같은 설정(초점, 출력, 노출 — Auto Exposure 끔)으로 측정해 빼기용 <strong>사용자 블랭크</strong>로 쓰십시오.
- <strong>형광</strong>은 넓고 올라가는 배경을 만듭니다. 더 긴 파장(785 또는 1064 nm)으로 줄일 수 있습니다.
- <strong>불균일한 시료:</strong> 여러 지점을 측정하십시오.
- 프로브 끝과 시료를 실내광으로부터 가리십시오. 형광등은 라만 피크처럼 보이는 날카로운 선을 만듭니다.

## Monowave 400 R에서의 현장 라만

프로브를 Monowave 400 R 가이드 레일에 장착한 경우 [Monowave 가이드](monowave.md)를 따르십시오: 바이알 크기에 맞춘 프로브 위치 설정은 <strong>레이저를 비활성화한 상태</strong>에서 하고, 라만 측정은 회전 뚜껑이 닫힌 뒤에 시작하며, 마이크로파 실행을 멈추기 <strong>전에</strong> 라만 측정을 멈추고 레이저를 비활성화합니다. 반응에는 <strong>시계열 측정</strong>(Cora 참조 가이드 참고)을 쓰고, 용매 밴드처럼 변하지 않는 밴드로 정규화하십시오.
