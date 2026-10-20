---
title: Glovebox MBraun EasyLab
description: Come avviare la glovebox MBraun EasyLab, introdurre ed estrarre materiale attraverso la precamera e lasciarla in condizioni sicure.
translation: machine
---

# Glovebox MBraun EasyLab

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | Manipolare materiali sensibili all'aria e all'umidità (elettroliti solfuri, Li metallico, Li₂S, P₂S₅) sotto argon |
| **Atmosfera** | Argon purificato da un catalizzatore al Cu e da setacci molecolari; i sensori di O₂ e H₂O misurano 0–1000 ppm e 0–500 ppm |
| **Formazione** | Obbligatoria. Superare l'esame della glovebox prima di prenotare |
| **Prenotazione** | [Prenotare uno strumento](../booking.md) |
| **Manuali** | [Manuali e riferimenti](../manuals.md#glovebox) |

</div>

!!! danger "Prima di iniziare"
    - Indossare camice, occhiali di sicurezza e **guanti in nitrile sopra i guanti in butile della glovebox** ogni volta che si maneggiano prodotti chimici all'interno.
    - Non mettere mai sotto vuoto nella precamera un contenitore di solvente aperto. Le bottiglie di solvente chiuse richiedono la procedura a mezzo vuoto (passo 9).
    - Se la lettura di O₂ o H₂O è alta, fermarsi e avvisare il responsabile del laboratorio. Non aprire materiali sensibili.

## La nostra glovebox { #our-glovebox }

![La nostra MBraun EasyLab: camera principale, pannello di controllo e anticamera a destra, purificatore e pompa del vuoto sotto, pedali a terra](../assets/img/gb-overview.jpg){ loading=lazy }

<div class="photo-grid" markdown>

<figure markdown>
![Pannello di controllo in modalità ECO, lo stato in cui trovarla e lasciarla (LED eco verde)](../assets/img/gb-panel-eco.jpg){ loading=lazy }
<figcaption>Pannello di controllo in modalità ECO, lo stato in cui trovarla e lasciarla (LED eco verde)</figcaption>
</figure>

<figure markdown>
![Anticamera: manometro in alto ed etichette delle valvole REFILL (argon) ed EVACUATE (vuoto)](../assets/img/gb-antechamber.jpg){ loading=lazy }
<figcaption>Anticamera: manometro in alto ed etichette delle valvole REFILL (argon) ed EVACUATE (vuoto)</figcaption>
</figure>

<figure markdown>
![Porta esterna: non aprire l'anticamera mentre è sotto vuoto](../assets/img/gb-door.jpg){ loading=lazy }
<figcaption>Porta esterna: non aprire l'anticamera mentre è sotto vuoto</figcaption>
</figure>

<figure markdown>
![Valvole magnetiche di circolazione sotto la glovebox: i pistoni devono essere SU](../assets/img/gb-circ-valves.jpg){ loading=lazy }
<figcaption>Valvole magnetiche di circolazione sotto la glovebox: i pistoni devono essere SU</figcaption>
</figure>

<figure markdown>
![Pedali: sinistro = LOW PRESSURE, destro = HIGH PRESSURE](../assets/img/gb-pedals.jpg){ loading=lazy }
<figcaption>Pedali: sinistro = LOW PRESSURE, destro = HIGH PRESSURE</figcaption>
</figure>

</div>

## Pannello di controllo { #control-panel }

![Il pannello di controllo EasyLab del nostro laboratorio](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| Elemento | Funzione |
|---|---|
| **pressure mbar** (display superiore) | Pressione della glovebox rispetto al laboratorio, in mbar. Di norma una piccola sovrapressione: in modalità ECO la glovebox è mantenuta tra +2 e +6 mbar. Durante la rigenerazione mostra ancora la pressione della glovebox. |
| **O₂ ppm** e **H₂O ppm** | Ossigeno e acqua nell'argon. Durante la rigenerazione mostrano invece la fase e i minuti rimanenti. |
| Manopole **Min.set** / **Max.set** | Limiti inferiore e superiore del controllo di pressione. **Non modificarli.** |
| **circ** | Circolazione dell'argon nel purificatore. Deve essere **sempre attiva (LED acceso)**, tranne durante la rigenerazione. Se il LED è spento, controlla che i pistoni di circolazione siano SU e avvisa il responsabile del laboratorio. |
| **reg** / **reg abort** | Avvia / interrompe la rigenerazione del catalizzatore (reg abort funziona solo nelle prime fasi). Solo il responsabile del laboratorio. |
| **pump** | Pompa del vuoto. Deve essere accesa per evacuare l'anticamera. |
| **ana** | Analizzatori di O₂ e H₂O. Lasciarli accesi. |
| **light** | Illuminazione della glovebox. |
| **purge** | Lava la glovebox con argon per abbassare O₂/H₂O. Solo su richiesta del responsabile del laboratorio. |
| **eco** | Standby: la pompa funziona solo quando la glovebox richiede argon, la luce si spegne, pressione tra +2 e +6 mbar. Lascia la glovebox in ECO dopo l'uso. |

!!! tip "Com'è lo stato di lavoro normale"
    Pressione di pochi mbar (qui 2,7), O₂ e H₂O sotto 1 ppm (qui 0,5) e i LED di **circ**, **pump**, **ana** e **light** accesi. In questa foto il LED di **circ** è spento: se lo vedi così, controlla i pistoni di circolazione e avvisa il responsabile del laboratorio.

## Dimostrazione { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. **Controllare la glovebox come la si trova.** Deve essere in modalità **ECO**, con entrambe le porte della precamera chiuse, la precamera sotto vuoto completo (manometro ≈ −94 kPa) e tutte le valvole chiuse. Leggere i valori di O₂ e H₂O sulla schermata dei sensori.
2. **Attivare la glovebox.** Premere **ECO** una volta per uscire dalla modalità ECO e **PUMP** una volta. La **LIGHT** si può accendere o spegnere in qualsiasi momento.
3. **Controllare la circolazione.** L'argon deve circolare sempre attraverso il catalizzatore (tranne durante la rigenerazione): il LED **CIRC** deve essere acceso. Controllare anche i pistoni delle valvole magnetiche di circolazione sopra il catalizzatore: devono essere **SU**. Se il LED è spento o i pistoni sono giù, avvisare il responsabile del laboratorio prima di aprire materiale sensibile.
4. **Portare la precamera in argon.** Aprire lentamente la **valvola dell'argon (riempimento)**, che collega la precamera alla camera principale. Osservare il manometro salire da −94 kPa a 0 kPa, poi chiudere la valvola.
5. **Caricare gli oggetti.** Aprire la **porta esterna**, mettere gli oggetti nella precamera e chiudere la porta esterna. Lasciare chiusi i contenitori di liquidi; polveri e solidi possono essere aperti o con il tappo allentato.
6. **Evacuare (ciclo 1).** Verificare che entrambe le porte e la valvola dell'argon siano chiuse. Aprire lentamente la **valvola del vuoto** finché il manometro non indica −94 kPa, mantenere il vuoto per **15 min**, poi chiudere la valvola.
7. **Riempire con argon.** Aprire lentamente la valvola dell'argon finché il manometro non torna a 0 kPa, poi chiuderla.
8. **Ripetere** il ciclo vuoto–attesa–riempimento fino a completare **3 cicli** in totale. Gli oggetti porosi o voluminosi (fibre, carta, schiume) è meglio lasciarli sotto vuoto per una notte e poi fare un ciclo completo.
9. **Caso particolare — bottiglie di solvente chiuse.** Una bottiglia chiusa può scoppiare sotto vuoto completo. Evacuare solo fino a **mezzo vuoto** (≈ −47 kPa), attendere qualche minuto, riempire e ripetere **almeno 10 volte**.
10. **Introdurre gli oggetti.** Dopo l'ultimo riempimento (manometro a 0 kPa, entrambe le valvole chiuse), infilare le mani nei guanti, aprire la **porta interna**, spostare gli oggetti nella camera principale e chiudere la porta interna.
11. **Lavorare comodamente.** La glovebox regola da sola la propria pressione. Se i guanti sono troppo tesi o troppo molli, usare i **pedali** per aumentare (+) o diminuire (−) la pressione della camera. Pedale sinistro = **LOW PRESSURE**, pedale destro = **HIGH PRESSURE**.
12. **Terminare la sessione.** Pulire i versamenti, pulire i guanti **solo con etanolo**, chiudere le porte interna ed esterna ed evacuare la precamera con la valvola del vuoto aperta per **almeno 5 min**.
13. **Lasciarla come la si è trovata.** Chiudere la valvola del vuoto (il manometro resta a ≈ −94 kPa), verificare che tutte le valvole siano chiuse, premere **ECO** una volta e confermare che i pistoni di circolazione sono **SU**.

</div>

## Estrarre materiale { #taking-material-out }

1. Se la precamera è sotto vuoto, riempirla lentamente con argon fino a 0 kPa e chiudere la valvola dell'argon.
2. Aprire la porta interna, posare gli oggetti e chiudere la porta interna.
3. Aprire la porta esterna, estrarre gli oggetti e chiudere la porta esterna.
4. Evacuare la precamera, spurgarla una volta con argon, evacuare di nuovo e lasciarla sotto vuoto con tutte le valvole chiuse.

## Cosa danneggia la glovebox { #things-that-damage-the-box }

!!! warning "Veleni del catalizzatore"
    Il catalizzatore al rame è **avvelenato in modo irreversibile da composti solforati e acidi**, e anche il setaccio molecolare adsorbe H₂S e vapori di solvente quando il filtro a carbone attivo è saturo (guida del laboratorio *Guía MBraun EasyLab*, rev. 07-2022). Gli elettroliti solfuri (Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄) rilasciano H₂S con tracce di umidità. Tenere chiusi i contenitori di solfuri quando non si usano, non lasciare mai polveri di solfuri aperte durante la notte e annotare quali prodotti chimici si usano nella glovebox, così da poter risalire alla causa di una perdita di capacità di rimozione dell'O₂.

!!! note "Solventi"
    I solventi volatili (etanolo, acetonitrile, THF…) caricano il filtro a carbone attivo e possono far derivare i sensori. Usare il volume più piccolo possibile e tenere chiuse le bottiglie. Chiedere al responsabile del laboratorio se la circolazione debba essere fermata mentre si lavora con solventi aperti — le procedure attuali del laboratorio non lo indicano.

## Rigenerazione e sensori (solo il responsabile del laboratorio)

La rigenerazione del catalizzatore/setaccio (16 fasi, circa 960 min, gas di formazione Ar/H₂ a ~15 L/min) e la manutenzione del sensore di H₂O (nuovo rivestimento con H₃PO₄ all'85 % ogni ~2000 h) sono eseguite solo dal responsabile del laboratorio, seguendo la guida del laboratorio.

!!! question "Da confermare con il responsabile del laboratorio"
    I due documenti del laboratorio non concordano sul ciclo della precamera. Le diapositive di avvio in inglese dicono *«vuoto completo per almeno 5 min prima di rilasciare la pressione»*; la guida del laboratorio in spagnolo dice **3 cicli di vuoto con 15 min di attesa** (o 45 min in modalità «attiva»). Questa guida usa il ciclo più rigoroso di 3 × 15 min. Confermare qual è la regola del laboratorio.

## Manuali

- Guida del laboratorio: *Guía MBraun EasyLab* (spagnolo, rev. 07-2022) — copia del laboratorio.
- Diapositive del laboratorio: *MBraun EasyLab Glovebox — Operation start guide* — copia del laboratorio.
- Produttore: [pagina prodotto MBraun EASYlab](https://shop.mbraun.de/ENU/28934/EASYlab.html).
