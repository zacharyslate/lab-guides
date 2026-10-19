---
title: Argolab 건조기
description: Argolab(Giorgio Bormac) TCN/TCF Plus 시리즈 건조기 사용법 — 단일 설정값용 PROG 0, 다단 프로그램, 넣어도 되는 것과 안 되는 것.
translation: machine
---

# Argolab 건조기(TCN / TCF Plus 시리즈)

<div class="facts" markdown>

| | |
|---|---|
| <strong>용도</strong> | 유리 기구, 도구, 공기 중에서 안정한 분말 건조. 글러브박스 전실에 넣기 전 셀 부품 건조 |
| <strong>범위</strong> | 최대 +300 °C(TCN-50/115/200과 TCF Plus 모델, TCN-30 Plus는 +200 °C). 실험실 건조기의 모델 명판을 확인하십시오 |
| <strong>컨트롤러</strong> | 마이크로프로세서: 최대 7개 프로그램 × 10단계(온도, 시간, 강제 송풍형은 팬 속도) 및 1단계 프로그램 <strong>PROG 0</strong> |
| <strong>설명서</strong> | <em>Ovens and Incubators — User manual</em>(Giorgio Bormac, rev. 0, 31.05.2021) — [설명서](../manuals.md#oven) |

</div>

!!! danger "건조기에 절대 넣으면 안 되는 것"
    - <strong>가연성 용매</strong>나 그에 젖은 것, 폭발성 물질, 공기/용매 혼합물(화재·폭발 위험).
    - 가열하거나 분해될 때 <strong>유독하거나 가연성인 가스</strong>를 내는 재료 — <strong>황화물 전해질</strong>(H₂S) 포함.
    - 건조기 아래에 물건을 두지 말고, 통풍구를 막지 말며, 작동 중에는 뒷면 공기 흡입구를 만지지 마십시오(뜨거움).

## 시연 { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>건조할 것을 확인합니다.</strong> 유리 기구, 도구, 공기 중에서 안정하고 불연성인 재료만(위 상자 참조).
2. ON/OFF 키로 <strong>전원을 켭니다</strong>. 경보음이 울리고 <strong>end</strong>가 표시되면 이전 사용자의 사이클이 전원을 끄기 전에 끝난 것입니다. 아무 키나 눌러 소리를 끕니다.
3. <strong>프로그램을 불러옵니다.</strong> 대기 상태에서 <strong>SET/PROG</strong>를 짧게 누르면 "PROG"와 번호가 깜빡입니다. ▲ / ▼로 프로그램을 고르고 SET/PROG로 확정합니다.
4. <strong>단일 설정값(PROG 0).</strong> PROG 0을 선택하고 번호만 깜빡일 때까지 <strong>SET/PROG를 길게 누른</strong> 뒤, SET/PROG를 다시 눌러 편집합니다. ▲ / ▼와 <strong>SHIFT</strong>(자릿수 이동)로 온도를 설정하고 확정한 다음 타이머를 설정합니다. <strong>타이머 00:00 = START/STOP을 누를 때까지 작동.</strong>
5. <strong>다단 프로그램(1–7).</strong> 각 단계에는 온도, 시간, 강제 송풍형에서는 팬 속도(H/M/L)가 있습니다. <em>n</em>단계 후 끝내려면 <em>n</em> + 1단계의 시간을 <strong>00:00</strong>으로 설정합니다.
6. 공기가 돌 수 있게 간격을 두고 선반에 <strong>물품을 넣고</strong> 문을 닫습니다.
7. <strong>START/STOP</strong>으로 <strong>시작합니다</strong>. 화면에 내부 온도가 표시됩니다.
8. 끝나면 <strong>START/STOP</strong>으로 <strong>멈춥니다</strong>. 뜨거운 물품은 내열 장갑으로 꺼내고, 다른 사용자가 없으면 전원을 끕니다.

</div>

!!! note "글러브박스용 유리 기구"
    여기서 건조한 물품은 실내 공기에서 몇 분 안에 다시 수분을 흡수합니다. 따뜻할 때 건조기에서 바로 글러브박스 전실로 옮기고, [글러브박스 가이드](glovebox.md)대로 전실 사이클을 하십시오.

!!! info "비밀번호로 보호된 설정"
    지연 시작, 프로그램 반복, 시료 보호 온도 한계, 과열 경보, 온도 오프셋은 비밀번호로 보호된 하위 메뉴에 있습니다. 실험실 책임자만 변경합니다.
