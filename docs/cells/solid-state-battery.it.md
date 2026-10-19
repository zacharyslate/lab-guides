---
title: Batteria di prova allo stato solido
description: Costruire una microbatteria di prova allo stato solido da laboratorio (pastiglia a doppio strato catodo/elettrolita con anodo di indio o Li–In) e ciclarla sul Neware CT-9008.
translation: machine
---

# Batteria di prova allo stato solido

Una microbatteria di prova nella stessa cella in policarbonato usata per l'[EIS](eis-cell.md): una **pastiglia a doppio strato** (elettrolita solido + catodo composito) con un anodo metallico sull'altro lato. I passi 1–11 si eseguono nella **glovebox**.

<div class="facts" markdown>

| | |
|---|---|
| **Strato di elettrolita** | 100 mg nello stampo da Ø 10 mm |
| **Strato catodico** | 10 mg di catodo composito (p. es. dalla [procedura del catodo](../procedures/cathode-composite.md)) |
| **Anodo** | Foglio di Li Ø 6,0 mm × 0,25 mm (lucidato) e foglio di In Ø 8,0 mm × 0,3 mm. **Catodi litiati (p. es. NMC): niente Li — solo foglio di In Ø 8,0 mm × 0,1 mm** |
| **Ciclatore** | [Neware CT-9008 (5 V, 6 mA)](../instruments/battery-cyclers.md) — l'unico ciclatore del laboratorio con intervalli di corrente abbastanza bassi per questa cella |

</div>

## Dimostrazione { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tarare lo stampo.** Inserire il punzone corto sul fondo dello stampo da Ø 10 mm e tararlo (azzerare) sulla bilancia.
2. **Aggiungere 100 mg di elettrolita** e annotare la massa esatta.
3. **Pressare lo strato di elettrolita.** Inserire il punzone lungo e pressare a **4 MPa (manometro) per 1 min**.
4. **Aggiungere il catodo.** Togliere a mano il punzone lungo e distribuire **10 mg di catodo composito** uniformemente su tutta la superficie dell'elettrolita. Annotare la massa (tarare prima lo stampo con la pastiglia).
5. **Pressare il doppio strato.** Rimettere il punzone lungo e pressare di nuovo a **4 MPa (manometro) per 1 min**.
6. **Estrarre la pastiglia a doppio strato** capovolgendo lo stampo sulla base in acciaio e spingendo lo stampo fuori dai punzoni con la pressa.
7. **Caricare e densificare.** Mettere la pastiglia a doppio strato nella cella in policarbonato con il **collettore lungo sul fondo** e una guarnizione in silicone su ogni collettore. Centrare la cella nella pressa e applicare **18 MPa (manometro) lentamente, per 3 min**.
8. **Esporre l'elettrolita.** Togliere il collettore corto. Il **lato dell'elettrolita** del doppio strato deve essere rivolto verso l'alto (il lato del catodo poggia sul collettore lungo).
9. **Preparare l'anodo.** Fissare il metallo dell'anodo al collettore corto (dimensioni nella tabella sopra).
10. **Aggiungere l'anodo.** Capovolgere il corpo della cella, infilarlo sul collettore corto che porta l'anodo e pressare la batteria a **4 MPa (manometro) per 2 min**.
11. **Assemblare la cella completa** con piastre, isolanti e viti. Rendere uniforme la distanza su tutti i lati (**D1 = D2**) e serrare i dadi **a mano**. La batteria è pronta per una misura di OCV.
12. **Collegare il ciclatore.** Estrarre la cella dalla glovebox e collegarla a un canale del CT-9008: **positivo (rosso) al lato del catodo** (collettore lungo), **negativo (nero) al lato dell'anodo**. Verificare che la tensione a circuito aperto sia stabile.
13. **Programmare e avviare la prova** in BTS: riposo all'OCV, poi carica e scarica a corrente costante tra i propri limiti di tensione, ripetute per il numero di cicli necessario. Vedere [ciclatori di batterie](../instruments/battery-cyclers.md#choosing-the-current).

</div>

## Scegliere la corrente e i limiti di tensione

- **Stima della capacità.** Con 10 mg di composito al 38 % in peso di NMC-111 (114 mg di NMC in 300 mg di composito) la cella contiene ≈ 3,8 mg di NMC. Con una capacità pratica tipica di ~150 mAh g⁻¹ sono ≈ 0,57 mAh, quindi **0,1 C ≈ 57 µA** e **0,05 C ≈ 28 µA**. Usare la massa di catodo misurata e la capacità attesa per il proprio materiale.
- **Quale canale.** A queste correnti funziona correttamente solo il **CT-9008** (intervallo di corrente 1: 0,1–180 µA, accuratezza ±36 nA). Le unità CT-4008 e CT-5008 partono rispettivamente da 0,2 mA e 0,12 mA — sopra 0,1 C per questa cella — e la loro accuratezza è ±0,02 % di un fondo scala di 100 mA o 120 mA (±20–24 µA), grande quanto la corrente stessa.
- **Tensione.** L'anodo Li–In si trova a ≈ 0,6 V rispetto a Li⁺/Li, quindi una finestra catodica espressa rispetto a Li⁺/Li va abbassata di ≈ 0,6 V quando la si inserisce in BTS.

!!! question "Da confermare con il responsabile del laboratorio"
    - La diapositiva mostra sia il foglio di Li sia quello di In ma non dice quale è rivolto verso l'elettrolita quando si usano entrambi. Aggiungere l'ordine di impilamento.
    - Il passo 4 delle diapositive dice *«remove the long pressing arm by hand, and retare the die with pellet»* dopo la seconda pressatura; questa guida anticipa la ritaratura a prima dell'aggiunta del catodo, così da poterne annotare la massa. Verificare che sia ciò che si intende.

!!! note "Pressione del manometro"
    Tutte le pressioni sono letture del **manometro** della pressa idraulica. Convertirle in pressione sulla pastiglia (manometro × area del pistone / area dello stampo) quando si riportano i risultati — vedere la [pagina della cella EIS](eis-cell.md#points-to-check-before-you-publish-numbers).
