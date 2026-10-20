---
title: Boîte à gants MBraun EasyLab
description: Comment démarrer la boîte à gants MBraun EasyLab, faire entrer et sortir du matériel par le sas, et la laisser dans un état sûr.
translation: machine
---

# Boîte à gants MBraun EasyLab

<div class="facts" markdown>

| | |
|---|---|
| **À quoi elle sert** | Manipuler des matériaux sensibles à l'air et à l'humidité (électrolytes sulfures, Li métal, Li₂S, P₂S₅) sous argon |
| **Atmosphère** | Argon purifié par un catalyseur au Cu et un tamis moléculaire ; les capteurs O₂ et H₂O mesurent 0–1000 ppm et 0–500 ppm |
| **Formation** | Obligatoire. Réussir l'examen de la boîte à gants avant de réserver |
| **Réservation** | [Réserver un instrument](../booking.md) |
| **Manuels** | [Manuels et références](../manuals.md#glovebox) |

</div>

!!! danger "Avant de commencer"
    - Portez une blouse, des lunettes de sécurité et **des gants en nitrile par-dessus les gants en butyle de la boîte** chaque fois que vous manipulez des produits chimiques à l'intérieur.
    - Ne mettez jamais un récipient de solvant ouvert sous vide dans le sas. Les flacons de solvant fermés nécessitent la procédure au demi-vide (étape 9).
    - Si la valeur d'O₂ ou d'H₂O est élevée, arrêtez et prévenez le responsable du laboratoire. N'ouvrez aucun matériau sensible.

## Panneau de commande { #control-panel }

![Le panneau de commande EasyLab de notre laboratoire](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| Élément | Fonction |
|---|---|
| **pressure mbar** (affichage du haut) | Surpression de la boîte par rapport à la pièce, en mbar. Normalement une légère surpression : en mode ECO, la boîte est maintenue entre +2 et +6 mbar. Pendant la régénération, il affiche toujours la pression de la boîte. |
| **O₂ ppm** et **H₂O ppm** | Oxygène et eau dans l'argon. Pendant la régénération, ils affichent l'étape et les minutes restantes. |
| Boutons rotatifs **Min.set** / **Max.set** | Limites basse et haute de la régulation de pression de la boîte. **Ne pas les modifier.** |
| **circ** | Circulation de l'argon dans le purificateur. Doit rester active sauf pendant la régénération. Sa LED n'est pas fiable : vérifiez que les pistons de circulation sont en HAUT. |
| **reg** / **reg abort** | Démarrer / arrêter la régénération du catalyseur (reg abort ne fonctionne qu'aux premières étapes). Responsable du laboratoire uniquement. |
| **pump** | Pompe à vide. Doit être allumée pour faire le vide dans le sas. |
| **ana** | Analyseurs d'O₂ et d'H₂O. Laisser allumés. |
| **light** | Éclairage de la boîte. |
| **purge** | Balaye la boîte à l'argon pour faire baisser O₂/H₂O. Seulement à la demande du responsable du laboratoire. |
| **eco** | Veille : la pompe ne tourne que lorsque la boîte demande de l'argon, la lumière s'éteint, pression entre +2 et +6 mbar. Laissez la boîte en ECO après usage. |

!!! tip "À quoi ressemble l'état de travail normal"
    Comme sur la photo : pression de quelques mbar (ici 2,7), O₂ et H₂O sous 1 ppm (ici 0,5), LED **pump**, **ana** et **light** allumées. La LED **circ** peut rester éteinte même quand la circulation fonctionne (défaut connu) ; vérifiez les pistons.

## Démonstration { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. **Vérifiez la boîte telle que vous la trouvez.** Elle doit être en mode **ECO**, les deux portes du sas fermées, le sas sous vide complet (manomètre ≈ −94 kPa) et toutes les vannes fermées. Lisez les valeurs d'O₂ et d'H₂O sur l'écran des capteurs.
2. **Activez la boîte.** Appuyez une fois sur **ECO** pour quitter le mode ECO et une fois sur **PUMP**. Vous pouvez allumer ou éteindre **LIGHT** à tout moment.
3. **Vérifiez la circulation.** L'argon doit toujours circuler à travers le catalyseur (sauf pendant la régénération). Le voyant CIRC de cet appareil n'est pas fiable ; regardez donc les pistons des vannes magnétiques de circulation au-dessus du catalyseur : ils doivent être **EN HAUT**.
4. **Mettez le sas sous argon.** Ouvrez lentement la **vanne d'argon (remplissage)**, qui relie le sas à la chambre principale. Regardez le manomètre monter de −94 kPa à 0 kPa, puis fermez la vanne.
5. **Chargez vos objets.** Ouvrez la **porte extérieure**, placez les objets dans le sas et fermez la porte extérieure. Gardez fermés les récipients de liquide ; les poudres et solides peuvent être ouverts ou avec un bouchon desserré.
6. **Faites le vide (cycle 1).** Vérifiez que les deux portes et la vanne d'argon sont fermées. Ouvrez lentement la **vanne de vide** jusqu'à ce que le manomètre indique −94 kPa, maintenez le vide **15 min**, puis fermez la vanne.
7. **Remplissez d'argon.** Ouvrez lentement la vanne d'argon jusqu'à ce que le manomètre revienne à 0 kPa, puis fermez-la.
8. **Répétez** vide–attente–remplissage jusqu'à **3 cycles** au total. Les objets poreux ou volumineux (fibres, papier, mousses) gagnent à rester sous vide toute la nuit avant un cycle complet.
9. **Cas particulier — flacons de solvant fermés.** Un flacon fermé peut éclater sous vide complet. Faites le vide seulement jusqu'au **demi-vide** (≈ −47 kPa), attendez quelques minutes, remplissez et répétez **au moins 10 fois**.
10. **Faites entrer les objets.** Après le dernier remplissage (manomètre à 0 kPa, les deux vannes fermées), passez les mains dans les gants, ouvrez la **porte intérieure**, faites passer les objets dans la chambre principale et fermez la porte intérieure.
11. **Travaillez confortablement.** La boîte régule elle-même sa pression. Si les gants sont trop tendus ou trop mous, utilisez les **pédales** pour augmenter (+) ou diminuer (−) la pression de la chambre.
12. **Terminez votre session.** Nettoyez les déversements, essuyez les gants **uniquement à l'éthanol**, fermez les portes intérieure et extérieure et faites le vide dans le sas, vanne de vide ouverte, pendant **au moins 5 min**.
13. **Laissez-la comme vous l'avez trouvée.** Fermez la vanne de vide (le manomètre reste à ≈ −94 kPa), vérifiez que toutes les vannes sont fermées, appuyez une fois sur **ECO** et confirmez que les pistons de circulation sont **EN HAUT**.

</div>

## Sortir du matériel { #taking-material-out }

1. Si le sas est sous vide, remplissez-le lentement d'argon jusqu'à 0 kPa et fermez la vanne d'argon.
2. Ouvrez la porte intérieure, placez les objets et fermez la porte intérieure.
3. Ouvrez la porte extérieure, retirez les objets et fermez la porte extérieure.
4. Faites le vide dans le sas, purgez une fois à l'argon, refaites le vide et laissez-le sous vide, toutes vannes fermées.

## Ce qui endommage la boîte { #things-that-damage-the-box }

!!! warning "Poisons du catalyseur"
    Le catalyseur au cuivre est **empoisonné de façon irréversible par les composés soufrés et les acides**, et le tamis moléculaire adsorbe aussi l'H₂S et les vapeurs de solvant lorsque le filtre à charbon actif est saturé (guide du laboratoire *Guía MBraun EasyLab*, rév. 07-2022). Les électrolytes sulfures (Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄) libèrent de l'H₂S au contact de traces d'humidité. Gardez les récipients de sulfures fermés lorsqu'ils ne sont pas utilisés, ne laissez jamais de poudres sulfurées ouvertes la nuit et notez les produits chimiques utilisés dans la boîte, afin de pouvoir retracer une perte de capacité d'élimination de l'O₂.

!!! note "Solvants"
    Les solvants volatils (éthanol, acétonitrile, THF…) chargent le filtre à charbon actif et peuvent faire dériver les capteurs. Utilisez le plus petit volume possible et gardez les flacons fermés. Demandez au responsable du laboratoire si la circulation doit être arrêtée pendant le travail avec des solvants ouverts — les procédures actuelles du laboratoire ne le précisent pas.

## Régénération et capteurs (responsable du laboratoire uniquement)

La régénération du catalyseur/tamis (16 étapes, environ 960 min, gaz de formage Ar/H₂ à ~15 L/min) et l'entretien du capteur d'H₂O (nouveau revêtement à l'H₃PO₄ 85 % toutes les ~2000 h) sont effectués uniquement par le responsable du laboratoire, selon le guide du laboratoire.

!!! question "À confirmer avec le responsable du laboratoire"
    Les deux documents du laboratoire divergent sur le cycle du sas. Les diapositives de démarrage en anglais indiquent *« vide complet pendant au moins 5 min avant de relâcher la pression »* ; le guide du laboratoire en espagnol indique **3 cycles de vide avec 15 min d'attente** (ou 45 min en mode « actif »). Ce guide utilise le cycle plus strict de 3 × 15 min. Merci de confirmer la règle du laboratoire.

## Manuels

- Guide du laboratoire : *Guía MBraun EasyLab* (espagnol, rév. 07-2022) — copie du laboratoire.
- Diapositives du laboratoire : *MBraun EasyLab Glovebox — Operation start guide* — copie du laboratoire.
- Fabricant : [page produit MBraun EASYlab](https://shop.mbraun.de/ENU/28934/EASYlab.html).
