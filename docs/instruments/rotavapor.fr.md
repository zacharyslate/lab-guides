---
title: Büchi Rotavapor R-210
description: Comment assembler un ballon d'évaporation étanche dans la boîte à gants et sécher une suspension sensible à l'air sur le Büchi Rotavapor R-210 avec refroidisseur et contrôleur de vide.
translation: machine
---

# Büchi Rotavapor R-210

<div class="facts" markdown>

| | |
|---|---|
| **À quoi il sert** | Éliminer un solvant sous pression réduite, p. ex. sécher la suspension du composite cathodique (éthanol + acétonitrile) |
| **Éléments** | **Refroidisseur à recirculation Büchi F-105** (liquide du condenseur) · **bain d'huile numérique Nahita** rempli d'**huile silicone** · **R-210** avec interrupteur, bouton **ROTATION** (0–10), bouton d'inclinaison, Combi Clip et élévateur motorisé · condenseur vertical et ballon de réception · **contrôleur de vide Büchi V-850** sur la **pompe à vide V-700** |
| **Ballon** | Pour le travail sensible à l'air : un ballon à fond rond fermé par un **adaptateur à robinet (robinet en verre)** et une **pince Keck**, assemblé et fermé dans la boîte à gants (Partie 1) |
| **Formation** | Obligatoire. Réussir l'examen de l'évaporateur rotatif avant de réserver |
| **Manuels** | [Manuels et références](../manuals.md#rotavapor) |

</div>

!!! danger "Sécurité"
    - Blouse, lunettes de sécurité, gants et chaussures fermées.
    - Le bain d'huile silicone peut atteindre **180 °C**. N'ajoutez jamais d'eau ni aucun produit chimique au bain : de l'eau dans de l'huile chaude provoque des projections violentes (manuel Büchi, §2).
    - L'huile silicone se dilate fortement en chauffant. Un bain qui paraît à moitié plein à froid **n'est pas** trop bas — ne le complétez pas.
    - Vérifiez toute la verrerie avant usage (fissures, étoiles) : du verre endommagé peut **imploser** sous vide. Utilisez les pinces sur tous les rodages.

## Notre installation { #our-set-up }

![L'installation sous la hotte : V-850 sur la pompe V-700, condenseur, R-210, bain d'huile Nahita](../assets/img/rv-setup.jpg){ loading=lazy }

<div class="photo-grid" markdown>

<figure markdown>
![R-210 : interrupteur et bouton ROTATION](../assets/img/rv-r210.jpg){ loading=lazy }
<figcaption>R-210 : interrupteur et bouton ROTATION</figcaption>
</figure>

<figure markdown>
![Refroidisseur F-105](../assets/img/rv-chiller.jpg){ loading=lazy }
<figcaption>Refroidisseur F-105</figcaption>
</figure>

<figure markdown>
![Contrôleur de vide V-850 (Manual)](../assets/img/rv-v850.jpg){ loading=lazy }
<figcaption>Contrôleur de vide V-850 (Manual)</figcaption>
</figure>

<figure markdown>
![Bain d'huile numérique Nahita : PV = réel, SV = consigne](../assets/img/rv-bath.jpg){ loading=lazy }
<figcaption>Bain d'huile numérique Nahita : PV = réel, SV = consigne</figcaption>
</figure>

</div>

## Partie 1 — Assembler le ballon dans la boîte à gants { #part-1-assemble-the-flask-in-the-glovebox }

L'échantillon ne voit jamais l'air : le ballon est rempli, fermé avec l'adaptateur à robinet et fixé par la pince **dans la boîte à gants**, et n'est rouvert que sous vide sur l'évaporateur rotatif.

<div class="demo" data-demo="rv-glassware">
--8<-- "rv-glassware.svg"
</div>

<div class="demo-steps" markdown>

1. **Rassemblez les éléments dans la boîte à gants :** le ballon à fond rond contenant votre suspension (sur un support en liège), l'**adaptateur à robinet** avec son robinet en verre, de la **graisse à vide** et une **pince Keck** adaptée au rodage.
2. **Vérifiez la verrerie.** Les rodages doivent être propres et non ébréchés ; le ballon ne doit présenter ni fissure ni étoile — il sera sous vide.
3. **Graissez le rodage.** Appliquez une **fine bande** de graisse à vide uniquement sur le haut du rodage inférieur (mâle) de l'adaptateur. Trop de graisse entre dans le ballon et contamine l'échantillon.
4. **Insérez et tournez.** Insérez l'adaptateur dans le col du ballon et tournez-le doucement jusqu'à ce que la bande de graisse paraisse transparente et continue, sans stries ni canaux d'air.
5. **Fixez le rodage.** Placez la **pince Keck** sur le rodage pour que l'adaptateur ne puisse pas glisser.
6. **Fermez le robinet.** Tournez le robinet en **horizontal = fermé** (vertical = ouvert).
7. **Contrôle final :** pince en place, robinet horizontal, ballon étiqueté. Gardez propre le rodage supérieur (celui qui va sur l'évaporateur rotatif).
8. **Sortez-le** par le sas ([guide de la boîte à gants](glovebox.md#taking-material-out)) et portez-le jusqu'à l'évaporateur rotatif en tenant le ballon par le corps. **Gardez le robinet fermé** jusqu'à l'étape 9 de la Partie 2.

</div>

## Partie 2 — Sur l'évaporateur rotatif { #part-2-on-the-rotavapor }

<div class="demo" data-demo="rotavapor">
--8<-- "rotavapor.svg"
</div>

<div class="demo-steps" markdown>

1. **Contrôle de sécurité.** Mettez vos EPI, vérifiez le niveau d'huile et la verrerie. Le bain ne doit contenir que de l'huile silicone.
2. **Allumez le refroidisseur — alimentation seulement.** Appuyez sur l'interrupteur vert du F-105 : l'écran s'allume avec SET TEMP et ACTUAL TEMP. **N'appuyez pas** encore sur START.
3. **Réglez le bain d'huile.** Allumez le bain Nahita (POWER). Appuyez sur **SET**, modifiez la consigne (**SV**, vert) avec ◄ ▼ ▲ et appuyez de nouveau sur **SET**. **PV** (rouge) est la température réelle de l'huile.
4. **Réglez la pression** sur le contrôleur de vide V-850 (mode Manual) : appuyez sur la touche **Set**, tournez le bouton noir jusqu'à la pression demandée par votre procédure et validez. La consigne s'affiche en haut de l'écran (« Set … mbar ») ; le grand nombre est la pression réelle.
5. **Fixez le ballon récepteur.** Appliquez un mince film de graisse à vide sur son rodage et fixez-le sous le condenseur avec sa pince à rotule.
6. **Fixez le ballon de la Partie 1.** Vérifiez que le robinet est toujours **horizontal (fermé)**. Appuyez sur le bouton de verrouillage de l'entraînement, emboîtez le rodage supérieur de l'adaptateur sur le conduit de vapeur (il faut très peu de force) et fixez-le avec le **Combi Clip** : appuyez sur la bague vers le bas et tournez-la dans le sens **horaire**. Soutenez le ballon d'une main jusqu'à ce qu'il soit fixé.
7. **Démarrez le vide.** Vérifiez que la pompe à vide V-700 est allumée (interrupteur en façade), vérifiez la consigne et appuyez sur **START** sur le contrôleur. Le ballon fermé n'est pas encore sous vide.
8. **Démarrez la réfrigération du refroidisseur** après environ 5 min de vide : appuyez sur **START** sur le F-105. Un flocon apparaît sur l'écran et ACTUAL TEMP descend vers SET TEMP.
9. **Ouvrez le ballon et lancez la rotation.** Quand le refroidisseur refroidit depuis au moins 5 min, tournez **lentement** le robinet vers l'ouverture (poignée dans l'axe de l'adaptateur) : la pression monte brièvement. Allumez le rotavapor (interrupteur vert sur le panneau supérieur) et tournez le bouton **ROTATION** jusqu'à la vitesse voulue.
10. **Ajustez la position.** Le bouton noir de l'entraînement règle l'inclinaison du ballon ; la poignée à interrupteur électrique monte et descend tout l'ensemble de verrerie. La butée de sécurité en bas de l'élévateur empêche le ballon de descendre trop bas.
11. **Descendez lentement le ballon** dans le bain d'huile.
12. **Évaporez.** Le solvant se condense sur le condenseur et s'accumule dans le ballon récepteur. Surveillez les ébullitions brusques ; si cela se produit, sortez le ballon du bain et augmentez la pression réglée.
13. **Terminez sans faire entrer d'air.** Vide toujours actif et robinet ouvert, arrêtez la rotation (bouton **ROTATION** sur 0), sortez le ballon du bain et laissez-le refroidir sous vide. Ensuite seulement, **fermez le robinet** (poignée perpendiculaire à l'adaptateur).
14. **Arrêtez et remettez à l'air.** Appuyez **une fois sur STOP** pour arrêter le vide et **deux fois** pour remettre à l'air. Appuyez sur **STOP** sur le refroidisseur et éteignez le bain d'huile. Soutenez le ballon et libérez-le en tournant le **Combi Clip dans le sens antihoraire** ; rapportez le ballon fermé (avec l'adaptateur et la pince Keck) dans la boîte à gants avant de l'ouvrir. Videz le ballon récepteur dans le bon conteneur de déchets de solvant.

</div>

!!! warning "Échantillons sensibles à l'air"
    La remise à l'air (STOP pressé deux fois) fait entrer de l'**air** dans l'ensemble de verrerie. Votre échantillon n'est protégé que si le robinet du ballon est **fermé avant** la remise à l'air. Ne remettez jamais à l'air avec le robinet ouvert.

!!! tip "Attendre le refroidisseur"
    Cinq minutes est un minimum. Si ACTUAL TEMP du refroidisseur est encore bien au-dessus de SET TEMP quand vous ouvrez le ballon, le solvant ne se condense pas et part vers la pompe.

## Manuels

- Büchi *Operation Manual Rotavapor R-210/215* (doc. 93076 en) — copie du laboratoire. Combi Clip : §4.4.
- Diapositives du laboratoire : *Buchi R-210 Rotovapor — Operation start guide* et *Rotovapor* (robinet du ballon, pince Keck, rodage) — copies du laboratoire.
- Voir [Manuels](../manuals.md#rotavapor) pour les liens publics.
