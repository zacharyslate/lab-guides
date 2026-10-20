---
title: Cycleurs de batteries Neware
description: Choisir le cycleur Neware et la gamme de courant adaptés à une cellule, écrire un fichier d'étapes dans BTS, démarrer une voie et exporter les données.
translation: machine
---

# Cycleurs de batteries Neware (CT-4008, CT-4008T, CT-5008, CT-9008)

## Quel cycleur pour quelle cellule ?

Le cycleur doit pouvoir **imposer et mesurer** votre courant avec précision. La précision est exprimée en pourcentage de la **pleine échelle de la gamme** : un petit courant sur une grande gamme est donc imprécis.

| Appareil | Tension | Gammes de courant | Précision (courant) | Adapté à |
|---|---|---|---|---|
| **CT-9008-5V6A-F** | −5 à +5 V | 0,1–180 µA · 180 µA–6 mA · 6–180 mA · 0,18–6 A | ±36 nA · ±1,2 µA · ±36 µA · ±1,2 mA | **Microcellules tout-solide, piles bouton à faible régime C** |
| CT-5008-5V12A-TF | −3 à +5 V | 0,12–120 mA · 0,12–1,2 A · 1,2–12 A | ±0,02 % PE (±24 µA sur la plus petite gamme) | Piles bouton et pouch à partir de ~1 mA |
| CT-4008Q-5V12A-S1 | 25 mV–5 V (décharge min. 2 V avec le support universel) | 0,2–100 mA · 0,1–0,5 A · 0,5–6 A · 6–12 A | ±0,02 % PE | Cellules plus grandes ; **pas** pour les cellules déchargées sous 2 V |
| CT-4008T-5V12A-S1-F | −1 à 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0,05 % PE | Cellules nécessitant ≥ 5 mA |

<small>D'après les fiches techniques Neware des fichiers du laboratoire. PE = pleine échelle.</small>

### Choisir le courant { #choosing-the-current }

1. Estimez la capacité : *Q* (mAh) = masse active (g) × capacité spécifique attendue (mAh g⁻¹).
2. Courant pour un régime C *n* : *I* = *n* × *Q* (mA si *Q* est en mAh).
3. Choisissez l'appareil et la gamme dont la plus petite gamme **contient** *I* avec une erreur acceptable (visez < 1 % de *I*).

*Exemple :* la [batterie de test tout-solide](../cells/solid-state-battery.md) a ≈ 0,57 mAh → 0,1 C ≈ 57 µA → **CT-9008, gamme 1** (erreur ±36 nA ≈ 0,06 %). Sur un CT-4008/5008, le même courant est sous la plus petite gamme et la précision (±20–24 µA) représente environ 40 % du courant.

## Notre installation { #our-set-up }

<div class="photo-grid" markdown>

<figure markdown>
![Cycleurs Neware sous le potentiostat. Les numéros de voie sont imprimés en façade de chaque appareil. Les appareils ont des gammes de courant différentes (tableau ci-dessus) : vérifiez l'étiquette du modèle sur l'appareil avant de lancer une voie.](../assets/img/rack-neware.jpg){ loading=lazy }
<figcaption>Cycleurs Neware sous le potentiostat. Les numéros de voie sont imprimés en façade de chaque appareil. Les appareils ont des gammes de courant différentes (tableau ci-dessus) : vérifiez l'étiquette du modèle sur l'appareil avant de lancer une voie.</figcaption>
</figure>

<figure markdown>
![La baie d'instruments : le potentiostat PARSTAT MC en haut, les cycleurs de batteries Neware en dessous. Les câbles de cellule pendent des deux côtés de la baie.](../assets/img/rack-overview.jpg){ loading=lazy }
<figcaption>La baie d'instruments : le potentiostat PARSTAT MC en haut, les cycleurs de batteries Neware en dessous. Les câbles de cellule pendent des deux côtés de la baie.</figcaption>
</figure>

</div>

## Démonstration — logiciel BTS

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. **Choisissez l'appareil** dans la liste des équipements (ici le CT-9008 pour une microcellule) et trouvez une voie libre. Réservez d'abord la voie sur la [page de réservation](../booking.md).
2. **Connectez la cellule** à la voie (pinces Kelvin 4 fils : les deux rouges sur l'électrode positive, les deux noires sur la négative). La case de la voie affiche la tension en circuit ouvert ; attendez qu'elle soit stable.
3. **Clic droit sur la voie ▸ Single start.**
4. **Écrivez ou chargez le fichier d'étapes.** Typiquement : *Rest* (OCV) → *charge CC* (courant, tension de coupure haute) → *Rest* → *décharge CC* (courant, tension de coupure basse) → *Cycle* vers l'étape 2, *N* fois → *End*. Définissez des **limites de protection** (tension haute et basse) juste au-delà de vos tensions de coupure. Les noms des étapes varient légèrement selon les versions de BTS (p. ex. CC_Chg / CCC, CC_DChg / CCD).
5. **Renseignez les informations du test** : un nom/code-barres unique (initiales, type de cellule, date, numéro), la **masse active** pour que les capacités soient en mAh g⁻¹, et le fichier d'étapes. Appuyez sur **Start**.
6. **Vérifiez le démarrage** : la case passe à *working* et affiche l'étape, la tension et le courant. Surveillez les premières minutes — un mauvais signe ou une tension en butée indique une erreur de connexion ou d'étapes.
7. **Consultez les données** : clic droit ▸ View data ouvre **BTSDA**, où l'on trace V en fonction de t et la capacité en fonction du cycle, et où l'on **exporte vers Excel**.
8. **Terminez** : le test s'arrête à *End*, ou clic droit ▸ **Single stop**. Déconnectez la cellule et libérez votre réservation.

</div>

!!! warning "Avant de démarrer une voie"
    - Ne démarrez jamais une voie réservée par quelqu'un d'autre ou qui affiche *working* / *pause*.
    - Saisissez les tensions dans BTS **par rapport à votre contre-électrode**. Avec une anode Li–In, retranchez ≈ 0,6 V aux limites exprimées par rapport à Li⁺/Li.
    - Les cellules tout-solide nécessitent une pression d'empilement pendant tout le test — ne desserrez pas la cellule entre les étapes.
