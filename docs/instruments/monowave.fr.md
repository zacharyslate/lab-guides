---
title: Anton Paar Monowave 400 R
description: Réaliser une synthèse micro-ondes en flacon fermé sur le Monowave 400 R, avec suivi Raman in situ optionnel par le Cora 5001.
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| **À quoi il sert** | Synthèse en phase liquide en flacons fermés sous agitation magnétique avec contrôle de la température et de la pression, p. ex. voies en solution vers des électrolytes sulfures |
| **Limites** | Jusqu'à **300 °C** et **30 bar** ; un magnétron de 850 W ; agitation jusqu'à 1200 rpm |
| **Particularité** | La version « R » accueille une **sonde Raman à fibre optique du Cora 5001** pour des spectres in situ pendant la réaction (laser de classe 3B) |
| **Nécessite** | Air comprimé à **5,5–6 bar** pour une mesure correcte de la pression et l'étanchéité du flacon |
| **Formation** | Obligatoire. Instruction de sécurité laser obligatoire pour les mesures Raman |
| **Manuels** | [Manuels et références](../manuals.md#monowave) |

</div>

### Flacons de réaction

| Flacon | Volume | Volume de remplissage | T max | p max | Durée max |
|---|---|---|---|---|---|
| G4 (verre) | 4 mL | 0,5–2 mL | 250 °C | 30 bar | 100 h |
| **G10** (verre) | 10 mL | **2–6 mL** | 300 °C | 30 bar | 100 h |
| **G30** (verre) | 30 mL | **6–20 mL** | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10 (SiC) | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck (SiC) | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>D'après la Reference Guide du Monowave 400 R (E07IB012EN-C), tableau 1. Pour les expériences Raman, les durées plus courtes de son Annexe C s'appliquent. Les flacons G4 et SiC **ne peuvent pas** être utilisés avec la sonde Raman.</small>

!!! danger "Avant de commencer"
    - **Laser de classe 3B.** Désactivez la sonde Raman (bouton Stop de la sonde) avant de déplacer le rail de guidage ou la sonde, et ne regardez jamais dans la sonde ou la fibre.
    - Sélectionnez toujours le **type de flacon réellement utilisé**. Un mauvais type de flacon donne des valeurs de température/pression erronées et peut faire éclater le flacon.
    - Respectez le volume minimal de remplissage : le capteur IR mesure la paroi du flacon ~1 cm au-dessus du fond.
    - Si vous ne savez pas comment votre réaction se comporte, commencez avec de petites quantités et une dilution maximale.
    - L'appareil **n'est pas résistant aux acides** ; les réactifs corrosifs réduisent sa durée de vie (fiche de démarrage rapide).
    - Réactions sensibles à l'air : remplissez et fermez le flacon **dans la boîte à gants**. Si un flacon dégaze, l'échappement entraîne des vapeurs de réaction (en chimie des sulfures, potentiellement de l'H₂S) — l'échappement doit aller vers l'extraction.

## Démonstration { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. **Vérifiez l'air comprimé.** L'alimentation doit être à 5,5–6 bar avant de commencer.
2. **Remplissez le flacon.** Mettez un barreau aimanté adapté dans un flacon G10 (2–6 mL) ou G30 (6–20 mL) et ajoutez le mélange réactionnel.
3. **Fermez le flacon.** Placez le septum dans le bouchon à pression, **face PTFE vers le mélange réactionnel**, et enfoncez le bouchon jusqu'à ce qu'il ne s'ouvre plus en pinçant le bord. Septum silicone : essais de moins de 4 h. Disque PTFE + septum PTFE : essais de plus de 4 h (le septum PTFE est à usage unique).
4. **Programmez l'expérience.** Sur l'écran tactile, touchez **Task List**, touchez la dernière ligne, nommez l'expérience, choisissez **Standard** et définissez les étapes (chauffage, palier, refroidissement). La température de refroidissement (30–70 °C) doit être environ 10 °C sous le point d'ébullition de votre solvant. **Sélectionnez le type de flacon utilisé** et touchez OK.
5. **Positionnez la sonde Raman.** Laser **désactivé**, déplacez le rail en position **G10** (la plus intérieure) ou **G30** (intermédiaire), ou **idle** (la plus extérieure) si vous n'enregistrez pas de Raman. Vérifiez qu'un flacon vide et ouvert de votre taille entre dans la cavité sans résistance.
6. **Insérez le flacon.** Les flacons G4, G10 et C10 nécessitent la **bague adaptatrice** (face polyimide vers le haut) sur l'insert de la cavité ; les G30 s'insèrent directement.
7. **Démarrez.** Touchez **Start**. Avec le bouchon obturateur en place (sans thermomètre Ruby), l'essai démarre et le couvercle pivotant se ferme.
8. **Démarrez la mesure Raman** sur le Cora 5001 uniquement **après la fermeture du couvercle** (voir le [guide du Cora 5001](cora.md)).
9. **Surveillez** la température, la pression, la puissance et l'agitation sur l'écran principal. Vous pouvez modifier une expérience en cours en touchant ses widgets.
10. **Arrêtez.** À la fin — ou pour arrêter plus tôt — **arrêtez d'abord la mesure Raman et désactivez le laser**, puis (pour arrêter plus tôt) touchez **Stop → Yes**. L'appareil refroidit le flacon et ouvre le couvercle lorsque c'est sûr.
11. **Retirez et ouvrez le flacon.** Retirez le flacon avec précaution. Ouvrez-le avec l'outil de bouchage comme un décapsuleur (avec précaution s'il comporte un tube plongeur).
12. **Exportez les données.** Menu ▸ Data Memory ▸ Browse Results ▸ sélectionner ▸ Export vers USB (.pdf, .csv, .xls, .raw, .png). L'appareil conserve jusqu'à 1000 résultats.

</div>

## Bon à savoir

- **Capteurs de température.** Le capteur IR intégré (±5 °C) mesure la paroi du flacon. Le thermomètre à fibre optique Ruby optionnel (±2 °C) mesure dans le mélange et convient mieux aux réactions exothermiques ou aux solvants peu absorbants — mais il **ne peut pas être utilisé avec la sonde Raman** ni pour des essais de plus de 4 h.
- **Les solvants peu absorbants** (p. ex. toluène, hexane) chauffent mal ; l'appareil peut réduire la puissance et ne jamais atteindre la température de consigne. Les solvants très absorbants en flacons G4 peuvent la dépasser : limitez la puissance ou utilisez « Heat to temperature in time ».
- **Sans Raman :** mettez la sonde en idle et installez l'insert de cavité non modifié, pour qu'un éclatement de flacon ne puisse pas endommager la sonde.

## Voir aussi

- Raman in situ pendant la synthèse en phase liquide d'électrolytes sulfures : voir [Références](../references.md#group-publications).
