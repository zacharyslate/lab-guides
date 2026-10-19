---
title: Anton Paar Cora 5001
description: Misurare uno spettro Raman di un campione sigillato con lo spettrometro Cora 5001 a sonda in fibra, e usarlo per il monitoraggio in situ nel Monowave 400 R.
translation: machine
---

# Spettrometro Raman Anton Paar Cora 5001

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | Spettri Raman di polveri, liquidi e miscele di reazione; monitoraggio in situ delle reazioni nel [Monowave 400 R](monowave.md) |
| **Versione del laboratorio** | **Cora 5001 Fiber**: laser e segnale Raman viaggiano lungo una sonda in fibra. Verificare sull'etichetta la lunghezza d'onda di eccitazione (532, 785 o 1064 nm, o doppia) |
| **Laser** | **Classe 3B** con la sonda in fibra — anche con la sonda nella sua stazione di aggancio |
| **Formazione** | Obbligatoria, inclusa l'istruzione sulla sicurezza laser |
| **Manuali** | [Manuali e riferimenti](../manuals.md#cora) |

</div>

!!! danger "Laser di classe 3B"
    - Non guardare mai nella punta della sonda o nell'estremità di una fibra, e non puntare mai la sonda verso persone o superfici riflettenti.
    - Indossare occhiali di protezione laser per la lunghezza d'onda in uso ogni volta che la sonda non è confinata.
    - Aprire la camera del campione o la porta della fibra, premere **Stop** sulla sonda o attivare l'interblocco spegne immediatamente il laser.

## Dimostrazione { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. **Accendere** con l'interruttore sul pannello posteriore. Attendere circa **15 min** per l'equilibrio termico; si può misurare durante il riscaldamento, ma le impostazioni restano bloccate finché non termina.
2. **Accedere** con il proprio account utente.
3. **Preparare il campione.** Le polveri sensibili all'aria vanno in una **vial di vetro sigillata riempita nella glovebox**. Battere delicatamente la vial sul banco per compattare la polvere ed eliminare le sacche d'aria.
4. **Caricare la stazione di aggancio.** Allentare la vite di fissaggio e far scorrere la sonda fino all'arresto posteriore. Mettere il portavial con la vial nella stazione e chiudere il coperchio.
5. **Abilitare il laser.** Premere **Enable** sulla sonda (o il pulsante di riarmo dell'interblocco dello strumento). Il LED **Ready** si accende.
6. **Mettere a fuoco.** Aprire **Adjust Focus** e toccare **Start** per uno spettro in tempo reale. Far scorrere la sonda verso il campione fino al segnale massimo, **serrare la vite di fissaggio** e toccare **Stop**. Il fuoco è a pochi millimetri davanti alla punta della sonda.
7. **Impostare la misura.** Menu ▸ **Single Measurement**: inserire il nome del campione, scegliere la lunghezza d'onda (strumenti a doppio laser) e la potenza laser (532 nm: acceso = 50 mW; 785/1064 nm: 0–450 mW, consigliati almeno 50 mW). **Auto Exposure** (max 10 s) è un buon primo tentativo.
8. **Impostazioni avanzate (facoltative).** Acquisire un fondo (rimuove la luce ambiente), mediare N spettri per ridurre il rumore, rimozione dei raggi cosmici (richiede N ≥ 3; disattivarla con campioni fluorescenti) e correzione della linea di base per la fluorescenza.
9. **Misurare.** Toccare **Measure**. Lo spettro compare e viene salvato con il nome del campione; il software segnala eventuali problemi di qualità.
10. **Salvare ed esportare.** Esportare o stampare lo spettro, oppure usare **Save as method** per ripetere le stesse impostazioni in seguito. Premere **Stop** sulla sonda interrompe la misura e disabilita il laser.
11. **Terminare.** Rimuovere il campione e spegnere lo strumento con l'interruttore posteriore (i dati vengono salvati allo spegnimento).

</div>

## Consigli per i materiali per batterie

- **Usare la potenza laser più bassa che dia un segnale utile.** I campioni scuri (compositi con carbonio, NMC) assorbono fortemente e possono riscaldarsi o decomporsi localmente, soprattutto a 532 nm. Registrare due spettri consecutivi nello stesso punto: se differiscono, ridurre la potenza.
- **Il vetro dà segnale.** Registrare la vial vuota con *esattamente* le stesse impostazioni (fuoco, potenza, esposizione — disattivare Auto Exposure) e usarla come **bianco personalizzato** da sottrarre.
- **La fluorescenza** dà un fondo largo e crescente; una lunghezza d'onda maggiore (785 o 1064 nm) la riduce.
- **Campioni eterogenei:** misurare più punti.
- Proteggere la punta della sonda e il campione dalla luce della stanza; le lampade fluorescenti producono righe strette che sembrano picchi Raman.

## Raman in situ nel Monowave 400 R

Quando la sonda è montata nella guida del Monowave 400 R, seguire la [guida del Monowave](monowave.md): impostare la posizione della sonda per la misura della vial **con il laser disabilitato**, avviare la misura Raman solo dopo che il coperchio girevole si è chiuso, e fermare la misura Raman e disabilitare il laser **prima** di fermare la prova a microonde. Per una reazione, usare una **serie temporale** (vedere la guida di riferimento del Cora) e normalizzare rispetto a una banda che non cambia, come una banda del solvente.
