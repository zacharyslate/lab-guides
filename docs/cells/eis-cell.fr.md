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

## La presse et la conversion de pression { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Pompe à pied Riken Seiki et son manomètre 0–100 MPa : il indique la pression d'huile, pas la pression sur la pastille](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Pompe à pied Riken Seiki et son manomètre 0–100 MPa : il indique la pression d'huile, pas la pression sur la pastille</figcaption>
</figure>

<figure markdown>
![Presse CDM-5M : le vérin du haut pousse le piston vers le bas sur la matrice ou la cellule, posée sur la plaque de base](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>Presse CDM-5M : le vérin du haut pousse le piston vers le bas sur la matrice ou la cellule, posée sur la plaque de base</figcaption>
</figure>

</div>

Le manomètre de la pompe à pied indique la **pression d'huile** dans le vérin. La force vient de cette pression agissant sur le piston du vérin, la **tige de 40 mm** ; la tête de 45 mm ne fait que transmettre la force au poinçon. La pression dans la pastille est cette force divisée par l'aire de la pastille :

<div class="formula" markdown>

*F* = *P*<sub>g</sub> × π *d*² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>p</sub> = *F* / (π *D*² / 4) = *P*<sub>g</sub> × (*d* / *D*)² &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>g</sub> = *P*<sub>p</sub> × (*D* / *d*)²

</div>

*d* = diamètre de la tige (40 mm), *D* = diamètre de la matrice (pastille). Avec *d* = 40 mm, **1 MPa au manomètre = 1,26 kN (0,13 t)**.

| Ø matrice | Aire de la pastille | Pastille ÷ manomètre | 4 MPa manomètre (formage) | Réglage du labo pour la cellule |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 7,5 MPa manomètre → **333 MPa** (9,4 kN) |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 18 MPa manomètre → **288 MPa** (22,6 kN) |

**Dans l'autre sens :** pour presser une pastille de Ø 10 mm à 375 MPa, réglez le manomètre à 375 × (10/40)² = **23,4 MPa** ; pour Ø 6 mm, 375 × (6/40)² = **8,4 MPa**.

<div class="bk press-calc">
<div class="bk-row">
<label>Ø tige (mm)<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>Ø matrice (mm)<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>Manomètre (MPa)<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>Pression sur la pastille (MPa)<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>Force<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "Avant de vous fier aux chiffres"
    - Le diamètre du piston de notre vérin est de **40 mm** (confirmé). Pour une autre presse ou un autre vérin, saisissez son diamètre de piston dans le calculateur.
    - Le frottement dans le vérin et la matrice et la précision du manomètre ne sont pas pris en compte. Dans les articles, indiquez la pression sur la pastille avec la lecture du manomètre, les diamètres de la tige et de la matrice et le modèle de presse.
    - Ne dépassez jamais la pression nominale indiquée sur la pompe ni la charge nominale de la matrice.

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

## Du spectre à la conductivité { #from-spectrum-to-conductivity }

1. **Ajustez** le spectre avec un circuit équivalent ou une distribution des temps de relaxation (DRT). Les résidus de l'ajustement ne doivent présenter aucune tendance, sauf aux plus basses fréquences où les électrodes bloquantes se polarisent. En DRT, chaque pic correspond à un processus ; la contribution de polarisation des électrodes est **exclue** de la résistance de l'électrolyte.
2. **Résistance totale :** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (contributions de volume et de joints de grains identifiées dans votre ajustement).
3. **Mesurez la pastille** : épaisseur *L* (après densification) et surface *A*.
4. **Conductivité ionique :** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — en S cm⁻¹ avec *L* en cm, *A* en cm² et R en Ω.
5. **Énergie d'activation :** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Tracez log₁₀ σ en fonction de 1000/T (T en K). La pente *m* donne **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! note "Énergie d'activation"
    Indiquez dans vos rapports si vous avez ajusté σ ou σT en fonction de 1/T : les deux conventions donnent des E<sub>a</sub> légèrement différentes.

Toutes les étapes d'ajustement, de DRT et de conductivité peuvent être réalisées dans **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — voir [Analyse des données EIS](../analysis/eis-analysis.md).

## Conductivité électronique (polarisation DC)

1. Appliquez un potentiel constant (chronoampérométrie) à la même cellule bloquante ; le courant décroît de sa valeur initiale jusqu'à un régime stationnaire.
2. Notez le courant stationnaire *I* et répétez à plusieurs potentiels dans la fenêtre de travail de l'électrolyte (p. ex. 2–4 V pour les sulfures).
3. Tracez V en fonction de I ; la pente est la résistance électronique *R*. Alors σ<sub>e</sub> = *L* / (*R* · *A*).

Objectifs utilisés dans le groupe : électrolytes séparateurs σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ et σ<sub>e</sub> < 10⁻⁵ S cm⁻¹ ; liants d'électrode σ<sub>ion</sub> > 10⁻³ S cm⁻¹ avec une conductivité électronique élevée.

## Points à vérifier avant de publier des valeurs { #points-to-check-before-you-publish-numbers }

!!! note "La pression du manomètre n'est pas la pression sur la pastille"
    « 4 MPa », « 7,5 MPa » et « 18 MPa » sont des **pressions au manomètre (huile)**. Avec la tige de 40 mm, 18 MPa au manomètre sur une pastille de Ø 10 mm donnent ≈ **288 MPa**, et 7,5 MPa sur une pastille de Ø 6 mm ≈ **333 MPa** — voir [La presse et la conversion de pression](#press). Indiquez la pression sur la pastille (et la lecture du manomètre et les diamètres de la tige et de la matrice) dans les articles pour que d'autres puissent la reproduire.

!!! note "Polycarbonate à 120 °C"
    Le polycarbonate se ramollit près de sa transition vitreuse (≈ 145 °C) et flue sous charge bien avant. À 100–120 °C sous pression d'empilement, l'alésage et les joints peuvent se déformer, modifiant le contact et l'épaisseur. Vérifiez la cellule après les essais à haute température et remesurez l'épaisseur de la pastille ; un cycle chauffe-refroidissement qui se superpose à lui-même est un bon test.

!!! note "Limite haute fréquence"
    Le PMC-2000 est spécifié jusqu'à 7 MHz, mais au-delà de ~1 MHz l'inductance des câbles et les capacités parasites déforment le spectre des pastilles de faible résistance. Effectuez un test de Kramers–Kronig (EIS Studio le propose) et écartez les points haute fréquence qui échouent.
