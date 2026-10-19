---
title: Analyse des données EIS
description: Comment analyser les spectres d'impédance de la cellule EIS — export depuis VersaStudio, validation, circuits équivalents, DRT et conductivité — avec EIS Studio.
translation: machine
---

# Analyse des données EIS

L'analyse se fait dans **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**, une application libre et open source qui s'exécute dans le navigateur de votre propre ordinateur (vos données ne sont pas envoyées en ligne). Elle lit les fichiers des potentiostats courants, effectue un test de validité de Kramers–Kronig, ajuste des circuits équivalents (éléments R, C, L, CPE, Warburg, Gerischer et ligne de transmission), calcule une distribution des temps de relaxation (DRT) régularisée avec intégration des pics, et calcule la conductivité ionique à partir de l'épaisseur et de la surface avec propagation des incertitudes.

<div class="inst-grid" markdown>

[**Tutoriel** <span>Première analyse pas à pas</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[**Mesurer** <span>Conseils sur le montage expérimental</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[**Théorie** <span>Circuits, DRT, validation</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[**Installation** <span>L'exécuter en local</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## Flux de travail pour la cellule EIS

1. **Exportez des données calibrées depuis VersaStudio** — Data ▸ Export To ▸ ZView (`.z`), ou copiez depuis Graph View. D'après le manuel de VersaStudio (Annexe 3), les colonnes EIS brutes des fichiers `.par` sont **non calibrées**.
2. **Validez** chaque spectre avec le test de Kramers–Kronig. Écartez les points haute fréquence qui échouent (artefacts de câbles) et notez combien vous en avez écarté.
3. **Ajustez** un circuit équivalent ou calculez la **DRT**. Excluez de la résistance de l'électrolyte la contribution basse fréquence des électrodes bloquantes.
4. **Conductivité** — saisissez l'épaisseur et le diamètre de la pastille : σ = *L* / (R · *A*).
5. **Énergie d'activation** — ajustez log₁₀ σ en fonction de 1000/T sur la série de températures ; E<sub>a</sub> = −19,14 × pente kJ mol⁻¹ (voir la [page de la cellule EIS](../cells/eis-cell.md#from-spectrum-to-conductivity)). Indiquez si vous avez ajusté σ ou σT.

!!! note "Ce qu'il faut rapporter"
    Masse, épaisseur et diamètre de la pastille ; pression de pressage sur la pastille (pas seulement la lecture du manomètre) ; température et durée d'équilibrage ; gamme de fréquences, amplitude et points par décade ; le circuit ou les paramètres DRT utilisés ; et les résidus de l'ajustement.
