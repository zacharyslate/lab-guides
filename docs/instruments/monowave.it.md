---
title: Anton Paar Monowave 400 R
description: Eseguire una sintesi a microonde in vial chiusa sul Monowave 400 R, con monitoraggio Raman in situ opzionale tramite il Cora 5001.
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | Sintesi in fase liquida in vial chiuse con agitazione magnetica sotto controllo di temperatura e pressione, p. es. vie in soluzione verso elettroliti solfuri |
| **Limiti** | Fino a **300 °C** e **30 bar**; un magnetron da 850 W; agitazione fino a 1200 rpm |
| **Caratteristica speciale** | La versione «R» ospita una **sonda Raman a fibra ottica del Cora 5001** per spettri in situ durante la reazione (laser di classe 3B) |
| **Richiede** | Aria compressa a **5,5–6 bar** per una corretta misura della pressione e la chiusura della vial |
| **Formazione** | Obbligatoria. Istruzione sulla sicurezza laser obbligatoria per le misure Raman |
| **Manuali** | [Manuali e riferimenti](../manuals.md#monowave) |

</div>

### Vial di reazione

| Vial | Volume | Volume di riempimento | T max | p max | Tempo max |
|---|---|---|---|---|---|
| G4 (vetro) | 4 mL | 0,5–2 mL | 250 °C | 30 bar | 100 h |
| **G10** (vetro) | 10 mL | **2–6 mL** | 300 °C | 30 bar | 100 h |
| **G30** (vetro) | 30 mL | **6–20 mL** | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10 (SiC) | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck (SiC) | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>Dalla Reference Guide del Monowave 400 R (E07IB012EN-C), tabella 1. Per gli esperimenti Raman valgono i limiti di tempo più brevi della sua Appendice C. Le vial G4 e quelle in SiC **non** possono essere usate con la sonda Raman.</small>

!!! danger "Prima di iniziare"
    - **Laser di classe 3B.** Disattivare la sonda Raman (pulsante Stop sulla sonda) prima di spostare la guida o la sonda, e non guardare mai nella sonda o nella fibra.
    - Selezionare sempre il **tipo di vial effettivamente utilizzato**. Un tipo di vial errato dà letture di temperatura/pressione sbagliate e può rompere la vial.
    - Rispettare il volume minimo di riempimento: il sensore IR misura la parete della vial ~1 cm sopra il fondo.
    - Se non si sa come si comporta la reazione, iniziare con piccole quantità e la massima diluizione.
    - Lo strumento **non è resistente agli acidi**; i reagenti corrosivi ne accorciano la vita (foglio di avvio rapido).
    - Reazioni sensibili all'aria: riempire e chiudere la vial **nella glovebox**. Se una vial sfiata, il gas di scarico trascina vapori di reazione (nella chimica dei solfuri, potenzialmente H₂S) — lo scarico deve andare all'aspirazione.

## Dimostrazione { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. **Controllare l'aria compressa.** L'alimentazione deve essere a 5,5–6 bar prima di iniziare.
2. **Riempire la vial.** Mettere un'ancoretta magnetica adatta in una vial G10 (2–6 mL) o G30 (6–20 mL) e aggiungere la miscela di reazione.
3. **Chiudere la vial.** Mettere il setto nel tappo a scatto con il **lato in PTFE rivolto verso la miscela di reazione** e premere il tappo finché non si apre più stringendone il bordo. Setto in silicone: prove inferiori a 4 h. Disco in PTFE + setto in PTFE: prove superiori a 4 h (il setto in PTFE è monouso).
4. **Programmare l'esperimento.** Sul touchscreen toccare **Task List**, toccare l'ultima riga, dare un nome all'esperimento, scegliere **Standard** e impostare i passi (riscaldamento, mantenimento, raffreddamento). La temperatura di raffreddamento (30–70 °C) deve essere circa 10 °C sotto il punto di ebollizione del solvente. **Selezionare il tipo di vial usato** e toccare OK.
5. **Posizionare la sonda Raman.** Con il laser **disattivato**, spostare la guida in posizione **G10** (la più interna) o **G30** (quella intermedia), oppure **idle** (la più esterna) se non si registra il Raman. Verificare che una vial vuota e aperta della propria misura entri nella cavità senza resistenza.
6. **Inserire la vial.** Le vial G4, G10 e C10 richiedono l'**anello adattatore** (lato in poliimmide verso l'alto) sopra l'inserto della cavità; le G30 si inseriscono direttamente.
7. **Avviare.** Toccare **Start**. Con il tappo cieco installato (senza termometro Ruby) la prova parte e il coperchio girevole si chiude.
8. **Avviare la misura Raman** sul Cora 5001 solo **dopo che il coperchio si è chiuso** (vedere la [guida del Cora 5001](cora.md)).
9. **Monitorare** temperatura, pressione, potenza e agitazione nella schermata principale. Un esperimento in corso si può modificare toccandone i widget.
10. **Fermare.** Alla fine — o per fermare prima — **fermare prima la misura Raman e disattivare il laser**, poi (per fermare prima) toccare **Stop → Yes**. Lo strumento raffredda la vial e apre il coperchio quando è sicuro.
11. **Estrarre e aprire la vial.** Estrarre la vial con cautela. Aprirla con lo strumento di chiusura come un apribottiglie (con cautela se monta un tubo a immersione).
12. **Esportare i dati.** Menu ▸ Data Memory ▸ Browse Results ▸ selezionare ▸ Export su USB (.pdf, .csv, .xls, .raw, .png). Lo strumento conserva fino a 1000 risultati.

</div>

## Da sapere

- **Sensori di temperatura.** Il sensore IR integrato (±5 °C) misura la parete della vial. Il termometro a fibra ottica Ruby opzionale (±2 °C) misura all'interno della miscela ed è migliore per reazioni esotermiche o solventi poco assorbenti — ma **non può essere usato insieme alla sonda Raman** né per prove superiori a 4 h.
- **Solventi poco assorbenti** (p. es. toluene, esano) si scaldano male; lo strumento può ridurre la potenza e non raggiungere mai la temperatura impostata. I solventi molto assorbenti nelle vial G4 possono superarla: limitare la potenza o usare «Heat to temperature in time».
- **Senza Raman:** mettere la sonda in idle e montare l'inserto della cavità non modificato, così una rottura della vial non può danneggiare la sonda.

## Correlati

- Raman in situ durante la sintesi in fase liquida di elettroliti solfuri: vedere [Riferimenti](../references.md#group-publications).
