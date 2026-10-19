---
title: Ciclatori di batterie Neware
description: Scegliere il ciclatore Neware e l'intervallo di corrente adatti a una cella, scrivere un file di passi in BTS, avviare un canale ed esportare i dati.
translation: machine
---

# Ciclatori di batterie Neware (CT-4008, CT-4008T, CT-5008, CT-9008)

## Quale ciclatore per quale cella?

Il ciclatore deve poter **applicare e misurare** la corrente con accuratezza. L'accuratezza è espressa come percentuale del **fondo scala dell'intervallo**, quindi una corrente piccola su un intervallo grande è imprecisa.

| Strumento | Tensione | Intervalli di corrente | Accuratezza (corrente) | Adatto a |
|---|---|---|---|---|
| **CT-9008-5V6A-F** | da −5 a +5 V | 0,1–180 µA · 180 µA–6 mA · 6–180 mA · 0,18–6 A | ±36 nA · ±1,2 µA · ±36 µA · ±1,2 mA | **Microcelle allo stato solido, celle a bottone a basso C-rate** |
| CT-5008-5V12A-TF | da −3 a +5 V | 0,12–120 mA · 0,12–1,2 A · 1,2–12 A | ±0,02 % FS (±24 µA sull'intervallo più basso) | Celle a bottone e pouch da ~1 mA in su |
| CT-4008Q-5V12A-S1 | 25 mV–5 V (scarica min. 2 V con il supporto universale) | 0,2–100 mA · 0,1–0,5 A · 0,5–6 A · 6–12 A | ±0,02 % FS | Celle più grandi; **non** per celle scaricate sotto 2 V |
| CT-4008T-5V12A-S1-F | da −1 a 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0,05 % FS | Celle che richiedono ≥ 5 mA |

<small>Dalle schede tecniche Neware nei file del laboratorio. FS = fondo scala.</small>

### Scegliere la corrente { #choosing-the-current }

1. Stimare la capacità: *Q* (mAh) = massa attiva (g) × capacità specifica attesa (mAh g⁻¹).
2. Corrente per un C-rate *n*: *I* = *n* × *Q* (mA se *Q* è in mAh).
3. Scegliere lo strumento e l'intervallo il cui intervallo più basso **contiene** *I* con un errore accettabile (obiettivo < 1 % di *I*).

*Esempio:* la [batteria di prova allo stato solido](../cells/solid-state-battery.md) ha ≈ 0,57 mAh → 0,1 C ≈ 57 µA → **CT-9008, intervallo 1** (errore ±36 nA ≈ 0,06 %). Su un CT-4008/5008 la stessa corrente è sotto l'intervallo più basso e l'accuratezza (±20–24 µA) è circa il 40 % della corrente.

## Dimostrazione — software BTS

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. **Scegliere lo strumento** nell'elenco dei dispositivi (qui il CT-9008 per una microcella) e trovare un canale libero. Prenotare prima il canale nella [pagina delle prenotazioni](../booking.md).
2. **Collegare la cella** al canale (pinze Kelvin a 4 fili: le due rosse all'elettrodo positivo, le due nere al negativo). La casella del canale mostra la tensione a circuito aperto; attendere che sia stabile.
3. **Clic destro sul canale ▸ Single start.**
4. **Scrivere o caricare il file di passi.** Tipico: *Rest* (OCV) → *carica CC* (corrente, tensione di taglio superiore) → *Rest* → *scarica CC* (corrente, tensione di taglio inferiore) → *Cycle* al passo 2, *N* volte → *End*. Impostare **limiti di protezione** (tensione superiore e inferiore) appena oltre le tensioni di taglio. I nomi dei passi variano leggermente tra le versioni di BTS (p. es. CC_Chg / CCC, CC_DChg / CCD).
5. **Compilare le informazioni sulla prova**: un nome/codice a barre univoco (iniziali, tipo di cella, data, numero), la **massa attiva** in modo che le capacità siano in mAh g⁻¹, e il file di passi. Premere **Start**.
6. **Verificare che sia partita**: la casella diventa *working* e mostra passo, tensione e corrente. Osservare i primi minuti — un segno errato o una tensione al limite indicano un errore di collegamento o nei passi.
7. **Visualizzare i dati**: clic destro ▸ View data apre **BTSDA**, dove si rappresentano V in funzione di t e capacità in funzione del ciclo, e si **esporta in Excel**.
8. **Terminare**: la prova termina a *End*, oppure clic destro ▸ **Single stop**. Scollegare la cella e liberare la prenotazione.

</div>

!!! warning "Prima di avviare un canale"
    - Non avviare mai un canale prenotato da altri o che mostra *working* / *pause*.
    - Inserire le tensioni in BTS **rispetto al proprio controelettrodo**. Con un anodo Li–In, sottrarre ≈ 0,6 V ai limiti espressi rispetto a Li⁺/Li.
    - Le celle allo stato solido richiedono pressione di impilamento per tutta la prova — non allentare la cella tra un passo e l'altro.
