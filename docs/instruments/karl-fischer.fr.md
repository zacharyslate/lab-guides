---
title: Coulomètre Karl Fischer Mettler Toledo C20S
description: Mesurer la teneur en eau de solvants avec le titreur Karl Fischer coulométrique Mettler Toledo C20S, y compris une vérification avec un étalon d'eau à 1 %.
translation: machine
---

# Titreur Karl Fischer coulométrique Mettler Toledo C20S

<div class="facts" markdown>

| | |
|---|---|
| **À quoi il sert** | Traces d'eau dans les liquides — p. ex. vérifier que l'éthanol, l'acétonitrile ou le THF sont assez secs pour la synthèse d'électrolytes en phase liquide |
| **Principe** | L'iode est généré électrochimiquement à l'électrode génératrice et réagit avec l'eau ; la charge nécessaire donne la masse d'eau |
| **Cellule** | Électrode génératrice (avec ou sans diaphragme, **fiche bleue**), électrode indicatrice double platine, tube desséchant, septum, agitateur magnétique |
| **Formation** | Obligatoire |
| **Manuels** | [Manuels et références](../manuals.md#karl-fischer) |

</div>

!!! danger "Sécurité"
    Les réactifs KF contiennent du méthanol ou d'autres alcools, de l'iode, du SO₂ et une base : toxiques et inflammables. Portez gants et lunettes, remplissez et videz la cellule sous hotte, et éliminez le réactif usé dans le conteneur de déchets prévu par le laboratoire pour le réactif KF.

## Démonstration { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. **Vérifiez la cellule.** La cellule est remplie de réactif, les deux électrodes sont connectées (génératrice = **fiche bleue**), le tube desséchant contient du dessiccant frais et tous les bouchons et rodages sont bien en place — les fuites laissent entrer l'humidité ambiante.
2. **Allumez le titreur.**
3. **Préparez la méthode (la première fois seulement).** Methods ▸ New ▸ Standard method template ▸ **KF Coul** ▸ Sample : réglez *Entry type* sur **Weight** ▸ OK ▸ Save. Sur l'écran d'accueil, touchez **AddToHome** pour créer un raccourci (cochez *Immediate start*).
4. **Prétitrage.** Touchez votre raccourci. Le titreur élimine l'eau déjà présente dans le réactif ; l'agitateur doit tourner. Attendez que la dérive diminue.
5. **Standby.** Lorsque la dérive est faible et stable, le titreur passe en **Standby** et **Start sample** devient actif.
6. **Préparez la seringue d'échantillon.** Remplissez une seringue avec l'échantillon (ou avec l'**étalon d'eau KF à 1 %** pour vérifier le système), posez-la sur la balance et **tarez**.
7. **Injectez.** Touchez **Start sample**, percez le septum avec l'aiguille de sorte que la pointe soit sous la surface du réactif — sans toucher les électrodes — et injectez (0,5–1,0 mL de l'étalon à 1 %).
8. **Repesez.** Reposez la seringue sur la balance et saisissez la **masse d'échantillon** affichée (la valeur négative sans le signe). Le titrage s'effectue.
9. **Lisez le résultat** (R1, teneur en eau). L'étalon à 1 % doit donner ≈ 10 mg g⁻¹ dans la tolérance de son certificat ; sinon, vérifiez le réactif et la dérive avant de mesurer des échantillons.
10. **Arrêtez.** Touchez **Stop analysis** pour arrêter l'analyse en cours, ou **More ▸ End series** pour terminer la série.

</div>

## Bonnes pratiques

- Mesurez **d'abord l'étalon** chaque jour, puis vos échantillons. Mesurez chaque échantillon au moins en triple.
- Rincez la seringue avec l'échantillon avant de la remplir ; utilisez une seringue sèche et fermée.
- Remplacez le réactif lorsque la dérive reste élevée, que le résultat de l'étalon dérive ou que la cellule se remplit.
- Entretien de l'électrode génératrice : videz-la, rincez-la au méthanol, essuyez-la avec un chiffon non pelucheux et séchez-la plusieurs heures à 70–80 °C (manuel §7).

!!! warning "N'injectez pas d'échantillons contenant des sulfures"
    Les sulfures, l'H₂S et les thiols réagissent avec l'iode et donnent des teneurs en eau **faussement élevées** ; ils consomment aussi le réactif. Utilisez ce titreur pour les **solvants et liquides**. L'eau dans les poudres d'électrolytes sulfures ne peut pas être mesurée par injection directe — discutez des alternatives avec le responsable du laboratoire.
