---
title: PARSTAT MC · PMC-2000 avec VersaStudio
description: Sélectionner une voie, configurer une expérience d'EIS potentiostatique, l'exécuter et exporter des données calibrées dans VersaStudio avec le PARSTAT MC PMC-2000.
translation: machine
---

# PARSTAT MC · PMC-2000 avec VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| **À quoi il sert** | EIS, polarisation DC (conductivité électronique), CV, cyclage de batteries à faibles courants |
| **Voie PMC-2000** | ±30 V de compliance, ±1 A, EIS **10 µHz – 7 MHz**, plus petite gamme de courant 4 nA, électromètres différentiels ≥ 10 MHz |
| **Logiciel** | VersaStudio (Windows) — fichiers de données `.par` (+ `.par.psbd` si l'enregistrement binaire est activé) |
| **Cellule** | [Cellule d'impédance AC](../cells/eis-cell.md) — voir sa démonstration pour la partie matérielle |
| **Manuels** | [Manuels et références](../manuals.md#potentiostat) |

</div>

## Notre installation { #our-set-up }

<div class="photo-grid" markdown>

<figure markdown>
![Châssis PARSTAT MC. Les voies sont repérées par du ruban adhésif ; chacune a ses LED POWER, STATUS, COMM et OVERLOAD et son connecteur de câble de cellule. L'interrupteur principal est en bas à gauche.](../assets/img/rack-parstat.jpg){ loading=lazy }
<figcaption>Châssis PARSTAT MC. Les voies sont repérées par du ruban adhésif ; chacune a ses LED POWER, STATUS, COMM et OVERLOAD et son connecteur de câble de cellule. L'interrupteur principal est en bas à gauche.</figcaption>
</figure>

<figure markdown>
![La baie d'instruments : le potentiostat PARSTAT MC en haut, les cycleurs de batteries Neware en dessous. Les câbles de cellule pendent des deux côtés de la baie.](../assets/img/rack-overview.jpg){ loading=lazy }
<figcaption>La baie d'instruments : le potentiostat PARSTAT MC en haut, les cycleurs de batteries Neware en dessous. Les câbles de cellule pendent des deux côtés de la baie.</figcaption>
</figure>

</div>

## Couleurs des fils de cellule (câble PMC-2000)

| Couleur | Fil | Cellule à deux électrodes (cellule EIS, batterie) |
|---|---|---|
| Vert | WE — travail | avec le gris sur **une** électrode |
| Gris | SE — sense | avec le vert |
| Rouge | CE — contre-électrode | avec le blanc sur l'**autre** électrode |
| Blanc | RE — référence | avec le rouge |
| Jaune / bleu | E2+ / E2− (6e fil) | non utilisés |
| Noir | GND | non utilisé — ne doit pas toucher d'autres fils |

Pour les **cellules de faible impédance ou des courants supérieurs à 100 mA**, connectez chaque fil séparément à la borne au lieu de les enficher l'un sur l'autre (« piggy-back »), afin d'éviter des erreurs de tension dues à la résistance de contact (manuel du PMC-2000, §3).

## Démonstration — logiciel

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. **Démarrage.** Le PARSTAT MC doit être allumé depuis au moins 10 min avant toute calibration. Ouvrez **VersaStudio** (Démarrer ▸ VersaStudio). Avec plusieurs voies, il s'ouvre avec **No Instrument** sélectionné.
2. **Sélectionnez votre voie.** Tools ▸ **Select Instrument** puis double-clic sur votre voie. Clic droit ▸ *Locate Instrument* fait clignoter la LED de la voie pour vérifier que c'est bien celle reliée à votre cellule. Les voies marquées **DATA** sont utilisées par quelqu'un d'autre — ne les sélectionnez pas.
3. **Vérification (en cas de doute).** Experiment ▸ Load Setup ▸ *Impedance Checkout* mesure la **cellule factice interne de 1 kΩ**. Tous les points doivent donner 1000 Ω ± 20 Ω.
4. **Nouvelle expérience.** Experiment ▸ **New** ▸ *Select an Action* ▸ Impedance ▸ **Potentiostatic EIS** ▸ OK, puis nommez le fichier de données.
5. **Saisissez les paramètres** dans *Experiment Properties* (les valeurs pour la cellule EIS sont sur la [page de la cellule EIS](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)). Appuyez sur **Entrée** après chaque valeur — une valeur tapée mais non validée n'est pas enregistrée. Ajoutez le nom de l'échantillon, l'épaisseur et la surface de la pastille comme commentaires dans *Common*.
6. **Propriétés avancées.** *Cell to Use* = **External**, gamme de courant, mode de l'électromètre (single-ended pour une cellule à deux électrodes ; différentiel pour les cellules à quatre électrodes), *Leave Cell On* = No.
7. **Filtres.** Tools ▸ Options ▸ Instrument : **Notch filter = None** pour l'EIS (obligatoire). Laissez *EIS filters* sur Normal sauf raison précise de le changer.
8. **Enregistrez avant de lancer.** Experiment ▸ Save, pour que les données soient écrites sur le disque pendant l'expérience.
9. **Lancez** (▶). Le diagramme de Nyquist se construit. **■** arrête ; **⏭** passe au segment suivant.
10. **Exportez des données calibrées.** Data ▸ Export To ▸ **ZView (.z)** pour les actions EIS, ou Graph View ▸ *Copy Data as Text*. **N'analysez pas les colonnes EIS brutes du fichier `.par`** — VersaStudio les enregistre non calibrées (manuel du logiciel, Annexe 3).
11. **Libérez la voie.** Fermez votre expérience et revenez à *No Instrument* pour que l'utilisateur suivant puisse sélectionner la voie. Laissez les câbles rangés.

</div>

## Expériences DC sur batteries

- Réglez d'abord la gamme de courant **sur 2 A** (ou utilisez l'action *Auto Current Range Setup* en partant de 2 A) pour les batteries et autres cellules de stockage d'énergie. Démarrer sur une gamme sensible en « Auto » peut la surcharger et l'endommager (manuel du logiciel, mise en garde sur Current Range).
- **Leave Cell On** est dangereux entre une action potentiostatique et une action galvanostatique, entre une action EIS et une action DC, ou entre des actions galvanostatiques sur des gammes de courant différentes : la commutation peut envoyer des pics de courant dans votre cellule.
- Définissez des **limites de sécurité** de tension et de courant dans *Common* — elles arrêtent toute la séquence en cas de dépassement.

## Notes de configuration du logiciel (PC du laboratoire)

- Mode d'alimentation Windows : jamais de mise en veille, le bouton d'alimentation ne fait rien, démarrage rapide désactivé — sinon les longues expériences peuvent perdre des données (manuel du logiciel, §3.3).
- Après une mise à jour du logiciel, VersaStudio peut demander une mise à jour du firmware : laissez-la se terminer sans interruption, puis lancez *Calibrate for best DC accuracy* sur chaque voie.
