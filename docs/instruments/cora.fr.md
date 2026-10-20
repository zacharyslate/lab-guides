---
title: Anton Paar Cora 5001
description: Mesurer un spectre Raman d'un échantillon scellé avec le spectromètre Cora 5001 à sonde fibrée, et l'utiliser pour le suivi in situ dans le Monowave 400 R.
translation: machine
---

# Spectromètre Raman Anton Paar Cora 5001

<div class="facts" markdown>

| | |
|---|---|
| **À quoi il sert** | Spectres Raman de poudres, de liquides et de mélanges réactionnels ; suivi in situ des réactions dans le [Monowave 400 R](monowave.md) |
| **Version du laboratoire** | **Cora 5001 Fiber** : le laser et le signal Raman passent par une sonde fibrée. Vérifiez la longueur d'onde d'excitation sur l'étiquette (532, 785 ou 1064 nm, ou double) |
| **Laser** | **Classe 3B** avec la sonde fibrée — même lorsque la sonde est dans sa station d'accueil |
| **Formation** | Obligatoire, y compris l'instruction de sécurité laser |
| **Manuels** | [Manuels et références](../manuals.md#cora) |

</div>

!!! danger "Laser de classe 3B"
    - Ne regardez jamais dans la pointe de la sonde ou l'extrémité d'une fibre, et ne pointez jamais la sonde vers des personnes ou des surfaces réfléchissantes.
    - Portez des lunettes de protection laser pour la longueur d'onde utilisée chaque fois que la sonde n'est pas confinée.
    - Ouvrir la chambre d'échantillon ou le port de fibre, appuyer sur **Stop** sur la sonde ou déclencher le verrouillage coupe immédiatement le laser.

## Notre installation { #our-set-up }

<figure markdown>
![Notre Monowave 400 R (à gauche) et Cora 5001 (à droite). Le régulateur d'air comprimé est à gauche ; les lunettes de protection laser sont rangées à côté du Cora.](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>Notre Monowave 400 R (à gauche) et Cora 5001 (à droite). Le régulateur d'air comprimé est à gauche ; les lunettes de protection laser sont rangées à côté du Cora.</figcaption>
</figure>

## Démonstration { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. **Allumez** avec l'interrupteur du panneau arrière. Attendez environ **15 min** l'équilibre thermique ; vous pouvez mesurer pendant le préchauffage, mais les réglages restent verrouillés jusqu'à la fin.
2. **Connectez-vous** avec votre compte utilisateur.
3. **Préparez l'échantillon.** Les poudres sensibles à l'air vont dans un **flacon en verre scellé rempli dans la boîte à gants**. Tapotez légèrement le flacon sur la paillasse pour tasser la poudre et éliminer les poches d'air.
4. **Chargez la station d'accueil.** Desserrez la vis de blocage et faites glisser la sonde jusqu'à la butée arrière. Placez le porte-flacon avec votre flacon dans la station et fermez le couvercle.
5. **Activez le laser.** Appuyez sur **Enable** sur la sonde (ou sur le bouton de réarmement du verrouillage de l'appareil). La LED **Ready** s'allume.
6. **Faites la mise au point.** Ouvrez **Adjust Focus** et touchez **Start** pour un spectre en direct. Faites glisser la sonde vers l'échantillon jusqu'au signal maximal, **serrez la vis de blocage** et touchez **Stop**. Le point focal se trouve à quelques millimètres devant la pointe de la sonde.
7. **Configurez la mesure.** Menu ▸ **Single Measurement** : saisissez le nom de l'échantillon, choisissez la longueur d'onde (appareils à double laser) et la puissance laser (532 nm : allumé = 50 mW ; 785/1064 nm : 0–450 mW, au moins 50 mW recommandés). **Auto Exposure** (max. 10 s) est un bon premier essai.
8. **Réglages avancés (facultatifs).** Acquérir un fond (supprime la lumière ambiante), moyenner N spectres pour réduire le bruit, suppression des rayons cosmiques (nécessite N ≥ 3 ; désactivez-la pour les échantillons fluorescents) et correction de ligne de base pour la fluorescence.
9. **Mesurez.** Touchez **Measure**. Le spectre s'affiche et est enregistré sous le nom de l'échantillon ; le logiciel signale d'éventuels problèmes de qualité.
10. **Enregistrez et exportez.** Exportez ou imprimez le spectre, ou utilisez **Save as method** pour répéter les mêmes réglages plus tard. Appuyer sur **Stop** sur la sonde interrompt la mesure et désactive le laser.
11. **Terminez.** Retirez votre échantillon et éteignez l'appareil avec l'interrupteur arrière (les données sont enregistrées à l'extinction).

</div>

## Conseils pour les matériaux de batteries

- **Utilisez la plus faible puissance laser donnant un signal exploitable.** Les échantillons sombres (composites carbonés, NMC) absorbent fortement et peuvent chauffer ou se décomposer localement, surtout à 532 nm. Enregistrez deux spectres successifs au même endroit : s'ils diffèrent, réduisez la puissance.
- **Le verre donne un signal.** Enregistrez le flacon vide avec *exactement* les mêmes réglages (mise au point, puissance, exposition — désactivez Auto Exposure) et utilisez-le comme **blanc personnalisé** à soustraire.
- **La fluorescence** donne un fond large et croissant ; une longueur d'onde plus grande (785 ou 1064 nm) la réduit.
- **Échantillons hétérogènes :** mesurez plusieurs points.
- Protégez la pointe de la sonde et l'échantillon de la lumière de la pièce ; les tubes fluorescents produisent des raies fines qui ressemblent à des pics Raman.

## Raman in situ dans le Monowave 400 R

Lorsque la sonde est montée dans le rail du Monowave 400 R, suivez le [guide du Monowave](monowave.md) : réglez la position de la sonde pour la taille du flacon **laser désactivé**, ne démarrez la mesure Raman qu'après la fermeture du couvercle pivotant, et arrêtez la mesure Raman et désactivez le laser **avant** d'arrêter l'essai micro-ondes. Pour une réaction, utilisez une **série temporelle** (voir le guide de référence du Cora) et normalisez sur une bande qui ne change pas, comme une bande du solvant.
