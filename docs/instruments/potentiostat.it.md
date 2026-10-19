---
title: PARSTAT MC · PMC-2000 con VersaStudio
description: Selezionare un canale, impostare un esperimento di EIS potenziostatica, eseguirlo ed esportare dati calibrati in VersaStudio con il PARSTAT MC PMC-2000.
translation: machine
---

# PARSTAT MC · PMC-2000 con VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | EIS, polarizzazione DC (conducibilità elettronica), CV, ciclazione di batterie a correnti ridotte |
| **Canale PMC-2000** | ±30 V di compliance, ±1 A, EIS **10 µHz – 7 MHz**, intervallo di corrente minimo 4 nA, elettrometri differenziali ≥ 10 MHz |
| **Software** | VersaStudio (Windows) — file di dati `.par` (+ `.par.psbd` se il salvataggio binario è attivo) |
| **Cella** | [Cella di impedenza AC](../cells/eis-cell.md) — vedere la sua dimostrazione per la parte hardware |
| **Manuali** | [Manuali e riferimenti](../manuals.md#potentiostat) |

</div>

## Colori dei cavi di cella (cavo PMC-2000)

| Colore | Cavo | Cella a due terminali (cella EIS, batteria) |
|---|---|---|
| Verde | WE — lavoro | insieme al grigio a **un** elettrodo |
| Grigio | SE — sense | con il verde |
| Rosso | CE — controelettrodo | insieme al bianco all'**altro** elettrodo |
| Bianco | RE — riferimento | con il rosso |
| Giallo / blu | E2+ / E2− (6° filo) | non usati |
| Nero | GND | non usato — evitare che tocchi altri cavi |

Per **celle a bassa impedenza o correnti superiori a 100 mA**, collegare ciascun cavo al terminale separatamente invece di innestarne uno sull'altro («piggy-back»), per evitare errori di tensione dovuti alla resistenza di contatto (manuale PMC-2000, §3).

## Dimostrazione — software

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. **Avvio.** Il PARSTAT MC deve essere acceso da almeno 10 min prima di qualsiasi calibrazione. Aprire **VersaStudio** (Start ▸ VersaStudio). Con più canali si apre con **No Instrument** selezionato.
2. **Selezionare il proprio canale.** Tools ▸ **Select Instrument** e doppio clic sul canale. Clic destro ▸ *Locate Instrument* fa lampeggiare il LED del canale per verificare che sia quello collegato alla propria cella. I canali contrassegnati **DATA** sono in uso da qualcun altro — non selezionarli.
3. **Verifica (in caso di dubbio).** Experiment ▸ Load Setup ▸ *Impedance Checkout* misura la **cella fittizia interna da 1 kΩ**. Tutti i punti devono dare 1000 Ω ± 20 Ω.
4. **Nuovo esperimento.** Experiment ▸ **New** ▸ *Select an Action* ▸ Impedance ▸ **Potentiostatic EIS** ▸ OK, e dare un nome al file di dati.
5. **Inserire i parametri** in *Experiment Properties* (i valori per la cella EIS sono nella [pagina della cella EIS](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)). Premere **Invio** dopo ogni valore — un valore digitato ma non confermato non viene salvato. Aggiungere nome del campione, spessore e area della pastiglia come commenti in *Common*.
6. **Proprietà avanzate.** *Cell to Use* = **External**, intervallo di corrente, modalità dell'elettrometro (single-ended per una cella a due terminali; differenziale per celle a quattro terminali), *Leave Cell On* = No.
7. **Filtri.** Tools ▸ Options ▸ Instrument: **Notch filter = None** per l'EIS (obbligatorio). Lasciare *EIS filters* su Normal salvo motivi precisi per cambiarlo.
8. **Salvare prima di eseguire.** Experiment ▸ Save, in modo che i dati vengano scritti su disco durante l'esperimento.
9. **Eseguire** (▶). Il diagramma di Nyquist si costruisce progressivamente. **■** ferma; **⏭** passa al segmento successivo.
10. **Esportare dati calibrati.** Data ▸ Export To ▸ **ZView (.z)** per le azioni EIS, oppure Graph View ▸ *Copy Data as Text*. **Non analizzare le colonne EIS grezze del file `.par`** — VersaStudio le salva non calibrate (manuale del software, Appendice 3).
11. **Liberare il canale.** Chiudere l'esperimento e tornare a *No Instrument* in modo che l'utente successivo possa selezionare il canale. Lasciare i cavi in ordine.

</div>

## Esperimenti DC su batterie

- Impostare l'intervallo di corrente **inizialmente su 2 A** (oppure usare l'azione *Auto Current Range Setup* partendo da 2 A) per batterie e altre celle di accumulo di energia. Partire da un intervallo sensibile con «Auto» può sovraccaricarlo e danneggiarlo (manuale del software, avvertenza su Current Range).
- **Leave Cell On** è pericoloso tra un'azione potenziostatica e una galvanostatica, tra un'azione EIS e una DC, o tra azioni galvanostatiche su intervalli di corrente diversi: la commutazione può inviare picchi di corrente alla cella.
- Impostare **limiti di sicurezza** di tensione e corrente in *Common* — interrompono l'intera sequenza se vengono superati.

## Note sulla configurazione del software (PC del laboratorio)

- Piano di alimentazione di Windows: mai in sospensione, il pulsante di accensione non fa nulla, avvio rapido disattivato — altrimenti gli esperimenti lunghi possono perdere dati (manuale del software, §3.3).
- Dopo un aggiornamento del software, VersaStudio può chiedere di aggiornare il firmware: lasciarlo terminare senza interruzioni, poi eseguire *Calibrate for best DC accuracy* su ogni canale.
