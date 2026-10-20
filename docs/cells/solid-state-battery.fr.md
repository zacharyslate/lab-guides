---
title: Batterie de test tout-solide
description: Construire une micro-batterie de test tout-solide de laboratoire (pastille bicouche cathode/électrolyte avec anode d'indium ou Li–In) et la cycler sur le Neware CT-9008.
translation: machine
---

# Batterie de test tout-solide

Une micro-batterie de test dans la même cellule en polycarbonate que pour l'[EIS](eis-cell.md) : une **pastille bicouche** (électrolyte solide + cathode composite) avec une anode métallique de l'autre côté. Les étapes 1–11 se font dans la **boîte à gants**.

<div class="facts" markdown>

| | |
|---|---|
| **Couche d'électrolyte** | 100 mg dans la matrice de Ø 10 mm |
| **Couche cathodique** | 10 mg de cathode composite (p. ex. issue de la [procédure de la cathode](../procedures/cathode-composite.md)) |
| **Anode** | Feuille de Li Ø 6,0 mm × 0,25 mm (polie) et feuille d'In Ø 8,0 mm × 0,3 mm. **Cathodes lithiées (p. ex. NMC) : pas de Li — feuille d'In Ø 8,0 mm × 0,1 mm seulement** |
| **Cycleur** | [Neware CT-9008 (5 V, 6 mA)](../instruments/battery-cyclers.md) — le seul cycleur du laboratoire dont les gammes de courant sont assez basses pour cette cellule |

</div>

## Démonstration { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tarez la matrice.** Placez le petit piston au fond de la matrice de Ø 10 mm et tarez-la (zéro) sur la balance.
2. **Ajoutez 100 mg d'électrolyte** et notez la masse exacte.
3. **Pressez la couche d'électrolyte.** Insérez le long piston et pressez à **4 MPa (manomètre) pendant 1 min**.
4. **Ajoutez la cathode.** Retirez le long piston à la main et étalez **10 mg de cathode composite** uniformément sur toute la surface de l'électrolyte. Notez la masse (tarez d'abord la matrice avec la pastille).
5. **Pressez la bicouche.** Remettez le long piston et pressez de nouveau à **4 MPa (manomètre) pendant 1 min**.
6. **Démoulez la pastille bicouche** en retournant la matrice sur le support en acier et en faisant sortir la matrice des pistons dans la presse.
7. **Chargez et densifiez.** Placez la pastille bicouche dans la cellule en polycarbonate avec le **long collecteur au fond** et un joint en silicone sur chaque collecteur. Centrez la cellule dans la presse et appliquez **18 MPa (manomètre) lentement, pendant 3 min**.
8. **Dégagez l'électrolyte.** Retirez le petit collecteur. Le **côté électrolyte** de la bicouche doit être vers le haut (le côté cathode repose sur le long collecteur).
9. **Préparez l'anode.** Fixez le métal d'anode sur le petit collecteur (dimensions dans le tableau ci-dessus).
10. **Ajoutez l'anode.** Retournez le corps de la cellule, faites-le glisser sur le petit collecteur portant l'anode et pressez la batterie à **4 MPa (manomètre) pendant 2 min**.
11. **Montez la cellule complète** avec les plaques, les isolants et les vis. Égalisez l'écart de tous les côtés (**D1 = D2**) et serrez les écrous **à la main**. La batterie est prête pour une mesure d'OCV.
12. **Connectez le cycleur.** Sortez la cellule de la boîte à gants et connectez-la à une voie du CT-9008 : **positif (rouge) côté cathode** (long collecteur), **négatif (noir) côté anode**. Vérifiez que la tension en circuit ouvert est stable.
13. **Programmez et lancez le test** dans BTS : repos à l'OCV, puis charge et décharge à courant constant entre vos limites de tension, répétées pour le nombre de cycles voulu. Voir [cycleurs de batteries](../instruments/battery-cyclers.md#choosing-the-current).

</div>

## Choisir le courant et les limites de tension

- **Estimation de la capacité.** Avec 10 mg de composite à 38 % en masse de NMC-111 (114 mg de NMC dans 300 mg de composite), la cellule contient ≈ 3,8 mg de NMC. Pour une capacité pratique typique de ~150 mAh g⁻¹, cela donne ≈ 0,57 mAh, donc **0,1 C ≈ 57 µA** et **0,05 C ≈ 28 µA**. Utilisez votre masse de cathode mesurée et la capacité attendue pour votre matériau.
- **Quelle voie.** À ces courants, seul le **CT-9008** fonctionne correctement (gamme de courant 1 : 0,1–180 µA, précision ±36 nA). Les appareils CT-4008 et CT-5008 commencent respectivement à 0,2 mA et 0,12 mA — au-dessus de 0,1 C pour cette cellule — et leur précision est de ±0,02 % d'une pleine échelle de 100 mA ou 120 mA (±20–24 µA), aussi grande que le courant lui-même.
- **Tension.** L'anode Li–In se situe à ≈ 0,6 V par rapport à Li⁺/Li ; une fenêtre cathodique exprimée par rapport à Li⁺/Li doit donc être décalée de ≈ 0,6 V vers le bas lors de la saisie dans BTS.

!!! note "Pression au manomètre"
    Toutes les pressions sont des lectures du **manomètre** de la presse hydraulique. Pression sur la pastille = manomètre × (40 mm / Ø matrice)² : avec une matrice de Ø 10 mm, 4 MPa au manomètre ≈ 64 MPa et 18 MPa ≈ 288 MPa. Voir [La presse et la conversion de pression](eis-cell.md#press), avec calculateur.
