---
title: Cellules et procédures
description: Comment construire les cellules de test utilisées au laboratoire, et les procédures de synthèse standard.
translation: machine
---

# Cellules et procédures

<div class="inst-grid" markdown>

[**Cellule d'impédance AC (EIS)** <span>Pressage de la pastille, assemblage de la cellule, conductivité et énergie d'activation</span>](eis-cell.md)

[**Batterie de test tout-solide** <span>Pastille bicouche, anode In / Li–In, cyclage sur le CT-9008</span>](solid-state-battery.md)

[**Composite cathodique** <span>NMC–LPSC–VGCF par dissolution et séchage à l'évaporateur rotatif</span>](../procedures/cathode-composite.md)

[**75Li₂S–25P₂S₅ par broyage à billes** <span>Recette, broyage et récupération de la poudre</span>](../procedures/lps-ball-milling.md)

[**Analyse des données EIS** <span>Ajustement, DRT et conductivité avec EIS Studio</span>](../analysis/eis-analysis.md)

</div>

## Comment les éléments s'articulent

```
Li2S + P2S5 ──(Pulverisette 7)──▶ verre 75Li2S–25P2S5
LPSC + NMC + VGCF ──(boîte à gants → évaporateur rotatif)──▶ composite cathodique
poudre d'électrolyte ──(matrice + presse)──▶ pastille ──▶ cellule EIS ──(PMC-2000)──▶ σ_ion, E_a
électrolyte + cathode ──(matrice + presse)──▶ bicouche ──▶ batterie de test ──(CT-9008)──▶ capacité, cyclage
```
