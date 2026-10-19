---
title: Cellule d'impédance AC (EIS)
description: Presser une pastille d'électrolyte solide, assembler la cellule d'impédance en polycarbonate et mesurer la conductivité ionique sur le PMC-2000.
translation: machine
---

# Cellule d'impédance AC (EIS)

Cette cellule mesure la **conductivité ionique** d'une pastille d'électrolyte solide sulfure ou halogénure entre deux électrodes bloquantes en acier inoxydable. Effectuez les étapes 1–9 dans la boîte à gants.

<div class="facts" markdown>

| | |
|---|---|
| **Pièces** | 2 plaques en acier inoxydable · 2 collecteurs de courant en acier inoxydable (un long, un court) · 2 joints en silicone · corps de cellule en polycarbonate · 2 isolants · petites vis M4 · longues vis de 4 mm · pastille d'électrolyte |
| **Matrices** | Ø 6 mm (20–30 mg de poudre) ou Ø 10 mm (80–100 mg de poudre) |
| **Instrument** | [PARSTAT MC · PMC-2000 avec VersaStudio](../instruments/potentiostat.md) |
| **Analyse** | [Analyse des données EIS](../analysis/eis-analysis.md) avec [EIS Studio](https://zacharyslate.github.io/eis-studio/) |

</div>

## Démonstration { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tarez la matrice.** Placez le petit piston au fond de la matrice, posez la matrice sur la balance et tarez-la (zéro).
2. **Ajoutez la poudre.** Transférez soigneusement la poudre d'électrolyte dans la matrice : **20–30 mg** pour la matrice de Ø 6 mm, **80–100 mg** pour celle de Ø 10 mm. Notez la masse.
3. **Insérez le long piston** sur la poudre.
4. **Pressez la pastille.** Placez la matrice au centre de la presse et appliquez **4 MPa (manomètre)** pendant **1 min**.
5. **Démoulez la pastille.** Retournez la matrice sur le support en acier et utilisez la presse pour faire sortir la matrice des pistons. La pastille tombe dans le support.
6. **Chargez la cellule.** Placez le long collecteur de courant au fond de la cellule en polycarbonate, transférez la pastille dans l'alésage et insérez le petit collecteur par-dessus. **Chaque collecteur a besoin de son joint en silicone.**
7. **Densifiez.** Placez la cellule chargée au centre de la presse et montez la pression lentement : **18 MPa (manomètre) pour la cellule de Ø 10 mm** ou **7,5 MPa (manomètre) pour celle de Ø 6 mm**, pendant **3 min**.
8. **Montez la cellule complète.** Ajoutez les plaques en acier, les isolants et les vis comme sur le dessin.
9. **Mettez-la d'équerre.** L'écart entre les plaques extérieures en acier doit être identique de tous les côtés (**D1 = D2**). Serrez tous les écrous **à la main** seulement.
10. **Connectez le potentiostat.** Utilisez un montage à deux électrodes : **WE (vert) + SE (gris)** sur une plaque, **CE (rouge) + RE (blanc)** sur l'autre. La cellule est symétrique, la polarité n'a donc pas d'importance.
11. **Équilibrez et mesurez.** Laissez la cellule atteindre une température constante pendant **au moins 45 min**, puis lancez l'EIS potentiostatique (un balayage dure environ 30 s – 1 min).
12. **Répétez à chaque température** : 40, 60, 80, 100 et 120 °C, en attendant au moins 45 min à chaque palier.

</div>

## Paramètres de mesure (VersaStudio, Potentiostatic EIS) { #measurement-settings-versastudio-potentiostatic-eis }

| Groupe | Paramètre | Valeur |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0,1 Hz ou 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | Logarithmique, **10 points par décade** |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | **None** (obligatoire pour l'EIS — manuel VersaStudio §4.4.2.2) |

!!! question "Incohérence dans les diapositives du laboratoire"
    Les diapositives du laboratoire indiquent à la fois *« Number of points: 30 »* et *« Points per decade: 10 »*. Les deux ne peuvent être vrais : de 3 MHz à 0,1 Hz il y a 7,5 décades, soit ≈ 75 points à 10 points/décade (≈ 65 points jusqu'à 1 Hz). Ce guide utilise 10 points par décade. Merci de confirmer.

## Du spectre à la conductivité { #from-spectrum-to-conductivity }

1. **Ajustez** le spectre avec un circuit équivalent ou une distribution des temps de relaxation (DRT). Les résidus de l'ajustement ne doivent présenter aucune tendance, sauf aux plus basses fréquences où les électrodes bloquantes se polarisent. En DRT, chaque pic correspond à un processus ; la contribution de polarisation des électrodes est **exclue** de la résistance de l'électrolyte.
2. **Résistance totale :** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (contributions de volume et de joints de grains identifiées dans votre ajustement).
3. **Mesurez la pastille** : épaisseur *L* (après densification) et surface *A*.
4. **Conductivité ionique :** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — en S cm⁻¹ avec *L* en cm, *A* en cm² et R en Ω.
5. **Énergie d'activation :** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Tracez log₁₀ σ en fonction de 1000/T (T en K). La pente *m* donne **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! warning "Correction des diapositives du laboratoire"
    Les diapositives indiquent *« slope = 2.313 × E<sub>a</sub> »*. La constante est ln 10 = **2,303**, et la relation doit inclure R et le facteur 1000 de l'axe 1000/T : E<sub>a</sub> [kJ mol⁻¹] = −2,303 · 8,314 · m = **−19,14 m**. Précisez aussi dans vos rapports si vous ajustez σ ou σT en fonction de 1/T — les deux conventions donnent des E<sub>a</sub> légèrement différentes.

Toutes les étapes d'ajustement, de DRT et de conductivité peuvent être réalisées dans **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — voir [Analyse des données EIS](../analysis/eis-analysis.md).

## Conductivité électronique (polarisation DC)

1. Appliquez un potentiel constant (chronoampérométrie) à la même cellule bloquante ; le courant décroît de sa valeur initiale jusqu'à un régime stationnaire.
2. Notez le courant stationnaire *I* et répétez à plusieurs potentiels dans la fenêtre de travail de l'électrolyte (p. ex. 2–4 V pour les sulfures).
3. Tracez V en fonction de I ; la pente est la résistance électronique *R*. Alors σ<sub>e</sub> = *L* / (*R* · *A*).

Objectifs utilisés dans le groupe : électrolytes séparateurs σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ et σ<sub>e</sub> < 10⁻⁵ S cm⁻¹ ; liants d'électrode σ<sub>ion</sub> > 10⁻³ S cm⁻¹ avec une conductivité électronique élevée.

## Points à vérifier avant de publier des valeurs { #points-to-check-before-you-publish-numbers }

!!! note "La pression du manomètre n'est pas la pression sur la pastille"
    « 4 MPa » et « 18 MPa » sont des **pressions au manomètre (hydrauliques)**. La pression sur la pastille est *P*<sub>pastille</sub> = *P*<sub>manomètre</sub> × (*A*<sub>vérin</sub> / *A*<sub>matrice</sub>), bien plus élevée pour une matrice de Ø 6–10 mm. Indiquez dans vos articles la pression sur la pastille (ainsi que le modèle de presse et le diamètre du vérin) pour que d'autres puissent la reproduire.

!!! note "Polycarbonate à 120 °C"
    Le polycarbonate se ramollit près de sa transition vitreuse (≈ 145 °C) et flue sous charge bien avant. À 100–120 °C sous pression d'empilement, l'alésage et les joints peuvent se déformer, modifiant le contact et l'épaisseur. Vérifiez la cellule après les essais à haute température et remesurez l'épaisseur de la pastille ; un cycle chauffe-refroidissement qui se superpose à lui-même est un bon test.

!!! note "Limite haute fréquence"
    Le PMC-2000 est spécifié jusqu'à 7 MHz, mais au-delà de ~1 MHz l'inductance des câbles et les capacités parasites déforment le spectre des pastilles de faible résistance. Effectuez un test de Kramers–Kronig (EIS Studio le propose) et écartez les points haute fréquence qui échouent.
