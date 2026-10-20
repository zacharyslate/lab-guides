---
title: Four à moufle Hobersal
description: Programmer un cycle rampe–palier–refroidissement sur le four à moufle Hobersal (programmateur Fuji Electric PXF4, thermocouple de type K).
translation: machine
---

# Four à moufle Hobersal (programmateur Fuji Electric PXF4)

<div class="facts" markdown>

| | |
|---|---|
| **À quoi il sert** | Calcination et recuit **sous air** (oxydes, creusets, nettoyage de verrerie) |
| **Limites** | Maximum 1200 °C. **Limites de travail du laboratoire : jusqu'à 1100 °C pendant quelques heures, 1000 °C pour des essais de 24 h ou plus** |
| **Régulateur** | Fuji Electric PXF4, thermocouple de type K ; jusqu'à 8 segments rampe/palier |
| **Manuels** | [Manuels et références](../manuals.md#furnace) |

</div>

!!! danger "Sécurité et règles pour les échantillons"
    - L'atmosphère du four est de l'**air**. Les échantillons de sulfures, d'halogénures et autres échantillons sensibles à l'air doivent être **scellés** (p. ex. dans une ampoule de quartz sous vide) — ne mettez jamais un échantillon de sulfure ouvert dans le four.
    - Utilisez des gants résistants à la chaleur, des pinces et un écran facial pour charger ou décharger tout objet chaud. N'ouvrez la porte qu'en dessous de la température fixée par les règles du laboratoire.
    - Ne chauffez jamais des récipients scellés au-delà de leurs limites, ni des matériaux inflammables ou dégageant des substances toxiques.

## Démonstration — exemple : 850 °C pendant 30 min, chauffe à 5 °C/min, refroidissement à 2 °C/min

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. **Connaissez les limites.** Maximum 1200 °C ; dans ce laboratoire, pas plus de 1100 °C (quelques heures) ou 1000 °C (24 h ou plus).
2. **Allumez le four** avec l'interrupteur de droite. L'afficheur indique **PV** (température dans le four) et **SV** (consigne).
3. **Réglez SV à 20 °C** avec ▲ / ▼. Les durées de rampe sont calculées à partir de cette valeur de départ.
4. **Ouvrez le menu du programme.** Maintenez **SEL** jusqu'à l'apparition de **CH 1**, puis appuyez deux fois sur ▼ pour atteindre **CH 3** (le programme rampe/palier).
5. **Motif.** Appuyez sur SEL : **PtN** doit être à **0** (sinon, appuyez sur SEL et réglez-le à 0).
6. **Unité de temps.** Appuyez sur ▼ : **tCMU** doit afficher **HHMM** (heures:minutes).
7. **Première température cible.** Appuyez sur ▼ jusqu'à **SV-1**, appuyez sur SEL (la valeur clignote), réglez **850** avec ◀ ▲ ▼ et appuyez sur SEL.
8. **Durée de chauffe.** Appuyez sur ▼ jusqu'à **tM1r** (durée de rampe). Pour 5 °C/min de 20 °C à 850 °C : (850 − 20) / 5 = 166 min = **02:46**. Réglez-la et appuyez sur SEL.
9. **Durée du palier.** Appuyez sur ▼ jusqu'à **tM1S** (durée de palier) et réglez **00:30**.
10. **Refroidissement.** Appuyez sur ▼ jusqu'à **SV-2** et réglez **20** ; puis **tM2r** = (850 − 20) / 2 = 415 min = **06:55** ; puis **tM2S** = **00:00**.
11. **Segments inutilisés.** Vérifiez que SV-3 … SV-8 sont à **0** et leurs durées à **00:00**, puis appuyez sur la touche retour (⮌) pour quitter le menu.
12. **Chargez l'échantillon** (dans son creuset ou son ampoule scellée) et fermez la porte.
13. **Lancez.** Appuyez sur SEL : **StbY** doit être sur **off**. Appuyez sur ▼ jusqu'à **ProG**, appuyez sur SEL, passez de **off → Run** et appuyez sur SEL. Revenez à l'affichage principal — il indique **Run** en bas à gauche.
14. **Arrêtez.** Un programme terminé s'arrête seul ; éteignez ensuite le four. Pour arrêter plus tôt : maintenez SEL, ▼ jusqu'à **ProG**, passez de **Run → off**, appuyez sur SEL et revenez à l'affichage principal.

</div>

## Calculateur de durée de rampe

Le PXF4 demande des **durées** de rampe, pas des vitesses. Saisissez vos valeurs :

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>Départ (°C)<input type="number" id="rc-a" value="20"></label>
<label>Cible (°C)<input type="number" id="rc-b" value="850"></label>
<label>Vitesse (°C/min)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>Durée de rampe (HH:MM)<input type="text" id="rc-out" readonly></label>
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

!!! note "Exactitude du programme"
    La rampe est calculée à partir de SV = 20 °C. Si le four est encore chaud au départ, la vitesse de chauffe réelle du premier segment différera de la vitesse nominale. Notez le PV au début de chaque essai.
