---
title: Étuve de séchage Argolab
description: Utilisation de l'étuve de séchage Argolab (Giorgio Bormac) série TCN/TCF Plus — PROG 0 pour une consigne simple, programmes à plusieurs étapes, et ce qui peut ou non y entrer.
translation: machine
---

# Étuve de séchage Argolab (série TCN / TCF Plus)

<div class="facts" markdown>

| | |
|---|---|
| **À quoi elle sert** | Sécher la verrerie, les outils et les poudres stables à l'air ; sécher les pièces de cellules avant leur entrée dans le sas de la boîte à gants |
| **Plage** | Jusqu'à +300 °C (modèles TCN-50/115/200 et TCF Plus ; TCN-30 Plus : +200 °C). Vérifiez la plaque signalétique de l'étuve du laboratoire |
| **Régulateur** | Microprocesseur : jusqu'à 7 programmes × 10 étapes (température, durée, vitesse du ventilateur sur les modèles à convection forcée) plus **PROG 0**, un programme à une seule étape |
| **Manuel** | *Ovens and Incubators — User manual* (Giorgio Bormac, rév. 0, 31.05.2021) — [Manuels](../manuals.md#oven) |

</div>

!!! danger "Ce qui ne doit jamais entrer dans l'étuve"
    - Des **solvants inflammables** ou tout objet qui en est imprégné, des matières explosives ou des mélanges air/solvant (risque d'incendie et d'explosion).
    - Des matériaux qui dégagent des **gaz toxiques ou inflammables** lorsqu'ils sont chauffés ou décomposés — y compris les **électrolytes sulfures** (H₂S).
    - Ne posez rien sous l'étuve, ne couvrez pas les aérations et ne touchez pas l'entrée d'air arrière pendant le fonctionnement (chaude).

## Démonstration { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. **Vérifiez ce que vous séchez.** Uniquement de la verrerie, des outils et des matériaux stables à l'air et non inflammables (voir l'encadré ci-dessus).
2. **Allumez** avec la touche ON/OFF. Si l'étuve bipe et affiche **end**, le cycle de l'utilisateur précédent s'est terminé avant l'extinction ; appuyez sur n'importe quelle touche pour arrêter le bip.
3. **Rappelez un programme.** En veille, appuyez brièvement sur **SET/PROG** : « PROG » et son numéro clignotent. Choisissez le programme avec ▲ / ▼ et validez avec SET/PROG.
4. **Consigne simple (PROG 0).** Sélectionnez PROG 0 et **maintenez SET/PROG** jusqu'à ce que seul le numéro clignote, puis appuyez de nouveau sur SET/PROG pour modifier. Réglez la température avec ▲ / ▼ et **SHIFT** (passe d'un chiffre à l'autre), validez, puis réglez la minuterie. **Minuterie 00:00 = fonctionne jusqu'à ce que vous appuyiez sur START/STOP.**
5. **Programmes à plusieurs étapes (1–7).** Chaque étape a une température, une durée et — sur les étuves à convection forcée — une vitesse de ventilateur (H/M/L). Pour terminer après l'étape *n*, réglez la durée de l'étape *n* + 1 sur **00:00**.
6. **Chargez** vos objets sur les étagères en laissant circuler l'air, et fermez la porte.
7. **Démarrez** avec **START/STOP**. L'afficheur indique la température de l'enceinte.
8. **Arrêtez** avec **START/STOP** une fois terminé. Utilisez des gants résistants à la chaleur pour retirer les objets chauds, et éteignez l'étuve si personne d'autre ne l'utilise.

</div>

!!! note "Verrerie pour la boîte à gants"
    Les objets séchés ici reprennent de l'humidité en quelques minutes à l'air ambiant. Passez-les directement de l'étuve au sas de la boîte à gants pendant qu'ils sont encore chauds, et cyclez le sas comme décrit dans le [guide de la boîte à gants](glovebox.md).

!!! info "Réglages protégés par mot de passe"
    Le démarrage différé, la répétition de programme, la limite de température de protection des échantillons, l'alarme de surchauffe et les décalages de température se trouvent dans un sous-menu protégé par mot de passe. Seul le responsable du laboratoire les modifie.
