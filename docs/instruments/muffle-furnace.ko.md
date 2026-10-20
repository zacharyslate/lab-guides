---
title: Hobersal 머플로
description: Hobersal 머플로(Fuji Electric PXF4 프로그래머, K형 열전대)에서 승온–유지–냉각 사이클을 프로그래밍하기.
translation: machine
---

# Hobersal 머플로(Fuji Electric PXF4 프로그래머)

<div class="facts" markdown>

| | |
|---|---|
| <strong>용도</strong> | <strong>공기 중</strong> 하소와 어닐링(산화물, 도가니, 유리 기구 세척) |
| <strong>한계</strong> | 최대 1200 °C. <strong>실험실 운용 한계: 몇 시간은 1100 °C까지, 24시간 이상은 1000 °C</strong> |
| <strong>컨트롤러</strong> | Fuji Electric PXF4, K형 열전대. 최대 8개의 승온/유지 구간 |
| <strong>설명서</strong> | [설명서와 참고 자료](../manuals.md#furnace) |

</div>

!!! danger "안전과 시료 규칙"
    - 로 안의 분위기는 <strong>공기</strong>입니다. 황화물, 할로겐화물 등 공기에 민감한 시료는 <strong>봉입</strong>(예: 진공 배기한 석영 앰플)해야 합니다 — 열린 황화물 시료를 로에 넣지 마십시오.
    - 뜨거운 것을 넣고 뺄 때는 내열 장갑, 집게, 안면 보호구를 쓰십시오. 문은 실험실 규칙에서 정한 온도 미만에서만 여십시오.
    - 밀폐 용기를 견딜 수 있는 범위 이상으로 가열하거나, 가연성 또는 유독 물질을 내는 재료를 가열하지 마십시오.

## 시연 — 예: 850 °C에서 30분, 5 °C/min 승온, 2 °C/min 냉각

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. <strong>한계를 알아 둡니다.</strong> 최대 1200 °C. 이 실험실에서는 1100 °C(몇 시간) 또는 1000 °C(24시간 이상)를 넘지 않습니다.
2. 오른쪽 스위치로 <strong>로의 전원을 켭니다</strong>. 화면에 <strong>PV</strong>(로 안의 온도)와 <strong>SV</strong>(설정값)가 표시됩니다.
3. ▲ / ▼로 <strong>SV를 20 °C로 설정합니다</strong>. 승온 시간은 이 시작값에서 계산됩니다.
4. <strong>프로그램 메뉴를 엽니다.</strong> <strong>CH 1</strong>이 나올 때까지 <strong>SEL</strong>을 길게 누르고, ▼를 두 번 눌러 <strong>CH 3</strong>(승온/유지 프로그램)으로 갑니다.
5. <strong>패턴.</strong> SEL을 누릅니다: <strong>PtN</strong>이 <strong>0</strong>이어야 합니다(아니면 SEL을 누르고 0으로 설정).
6. <strong>시간 단위.</strong> ▼를 누릅니다: <strong>tCMU</strong>가 <strong>HHMM</strong>(시:분)이어야 합니다.
7. <strong>첫 목표 온도.</strong> ▼로 <strong>SV-1</strong>로 가서 SEL을 누르고(값이 깜빡임), ◀ ▲ ▼로 <strong>850</strong>을 설정한 뒤 SEL을 누릅니다.
8. <strong>승온 시간.</strong> ▼로 <strong>tM1r</strong>(램프 시간)로 갑니다. 20 °C에서 850 °C까지 5 °C/min이면: (850 − 20) / 5 = 166 min = <strong>02:46</strong>. 설정하고 SEL을 누릅니다.
9. <strong>유지 시간.</strong> ▼로 <strong>tM1S</strong>(소크 시간)로 가서 <strong>00:30</strong>으로 설정합니다.
10. <strong>냉각.</strong> ▼로 <strong>SV-2</strong>로 가서 <strong>20</strong>으로 설정하고, 다음 <strong>tM2r</strong> = (850 − 20) / 2 = 415 min = <strong>06:55</strong>, 다음 <strong>tM2S</strong> = <strong>00:00</strong>.
11. <strong>사용하지 않는 구간.</strong> SV-3 … SV-8이 <strong>0</strong>이고 시간이 <strong>00:00</strong>인지 확인한 뒤 돌아가기 키(⮌)로 메뉴를 나옵니다.
12. <strong>시료를 넣고</strong>(도가니 또는 봉입 앰플) 문을 닫습니다.
13. <strong>실행합니다.</strong> SEL을 누릅니다: <strong>StbY</strong>가 <strong>off</strong>여야 합니다. ▼로 <strong>ProG</strong>로 가서 SEL을 누르고 <strong>off → Run</strong>으로 바꾼 뒤 SEL을 누릅니다. 메인 화면으로 돌아가면 왼쪽 아래에 <strong>Run</strong>이 표시됩니다.
14. <strong>멈춥니다.</strong> 끝난 프로그램은 스스로 멈추므로 그 뒤 로의 전원을 끕니다. 일찍 멈추려면: SEL을 길게 누르고, ▼로 <strong>ProG</strong>로 가서 <strong>Run → off</strong>로 바꾸고 SEL을 누른 뒤 메인 화면으로 돌아갑니다.

</div>

## 승온 시간 계산기

PXF4는 승온 속도가 아니라 승온 <strong>시간</strong>을 입력받습니다. 값을 입력하십시오:

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>시작(°C)<input type="number" id="rc-a" value="20"></label>
<label>목표(°C)<input type="number" id="rc-b" value="850"></label>
<label>속도(°C/min)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>승온 시간(HH:MM)<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! note "프로그램의 정확도"
    승온은 SV = 20 °C에서 계산됩니다. 시작할 때 로가 아직 따뜻하면 첫 구간의 실제 승온 속도가 명목값과 달라집니다. 매 실행 시작 시 PV를 기록하십시오.
