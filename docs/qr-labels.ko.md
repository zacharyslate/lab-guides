---
title: QR 라벨
description: 장비별 인쇄용 QR 라벨 — 내려받아 인쇄하고 닳으면 교체하십시오.
translation: machine
---

# 장비 QR 라벨

누구나 휴대전화로 장비 가이드와 예약 페이지를 열 수 있도록 장비마다 QR 라벨을 붙여 두어야 합니다. 라벨이 없거나 닳았거나 읽히지 않으면 여기서 내려받아 인쇄해 교체하십시오.

## 전체 시트 (A4) { #full-sheets-a4 }

- [13개 라벨 전체 — 각 코드가 <strong>해당 장비의 가이드</strong>를 엽니다 (권장)](assets/qr/qr-labels-instrument.pdf)
- [13개 라벨 전체 — 모든 코드가 <strong>홈페이지</strong>를 엽니다](assets/qr/qr-labels-main.pdf)

## 개별 라벨 { #single-labels }

| 장비 | 코드로 가이드 열기 | 코드로 홈페이지 열기 |
|---|---|---|
| MBraun EasyLab glovebox | [PDF](assets/qr/label-glovebox.pdf) | [PDF](assets/qr/label-glovebox-home.pdf) |
| Büchi Rotavapor R-210 | [PDF](assets/qr/label-rotavapor.pdf) | [PDF](assets/qr/label-rotavapor-home.pdf) |
| PARSTAT MC · PMC-2000 | [PDF](assets/qr/label-pmc.pdf) | [PDF](assets/qr/label-pmc-home.pdf) |
| Neware CT-9008 | [PDF](assets/qr/label-ct9008.pdf) | [PDF](assets/qr/label-ct9008-home.pdf) |
| Neware CT-5008 | [PDF](assets/qr/label-ct5008.pdf) | [PDF](assets/qr/label-ct5008-home.pdf) |
| Neware CT-4008Q | [PDF](assets/qr/label-ct4008.pdf) | [PDF](assets/qr/label-ct4008-home.pdf) |
| Neware CT-4008T | [PDF](assets/qr/label-ct4008t.pdf) | [PDF](assets/qr/label-ct4008t-home.pdf) |
| Anton Paar Monowave 400 R | [PDF](assets/qr/label-monowave.pdf) | [PDF](assets/qr/label-monowave-home.pdf) |
| Anton Paar Cora 5001 | [PDF](assets/qr/label-cora.pdf) | [PDF](assets/qr/label-cora-home.pdf) |
| Fritsch Pulverisette 7 | [PDF](assets/qr/label-ballmill.pdf) | [PDF](assets/qr/label-ballmill-home.pdf) |
| Mettler Toledo C20S | [PDF](assets/qr/label-kf.pdf) | [PDF](assets/qr/label-kf-home.pdf) |
| Hobersal muffle furnace | [PDF](assets/qr/label-furnace.pdf) | [PDF](assets/qr/label-furnace-home.pdf) |
| Argolab drying oven | [PDF](assets/qr/label-oven.pdf) | [PDF](assets/qr/label-oven-home.pdf) |

## 인쇄와 부착 { #printing-and-fitting }

1. <strong>100 % / "실제 크기"</strong>로 인쇄하고 "페이지에 맞춤"은 쓰지 마십시오. 라벨 하나는 <strong>63 × 52 mm</strong>, QR 코드는 폭 34 mm입니다.
2. 회색 선을 따라 자릅니다. 장비를 쓸 때 서는 위치의 눈높이에, 뜨거운 표면(머플로, 건조기 문, 회전증발기 수조)에서 떨어진 곳에 붙이십시오.
3. 투명 테이프나 코팅 필름으로 보호하십시오. 용매와 장갑 때문에 종이 라벨은 빨리 닳습니다.
4. <strong>붙인 뒤 휴대전화로 스캔해 보십시오.</strong> 페이지가 열리지 않으면 다시 인쇄하고, 작동하지 않는 라벨을 장비에 남겨 두지 마십시오.

<small>라벨은 저장소의 `tools/make_qr_labels.py`로 만듭니다. 사이트 주소가 바뀌면 스크립트의 `SITE`를 고치고 다시 실행하십시오. 저장하기 전에 모든 코드를 디코딩해 확인합니다.</small>
