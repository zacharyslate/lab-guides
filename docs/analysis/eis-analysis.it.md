---
title: Analisi dei dati EIS
description: Come analizzare gli spettri di impedenza della cella EIS — esportazione da VersaStudio, validazione, circuiti equivalenti, DRT e conducibilità — con EIS Studio.
translation: machine
---

# Analisi dei dati EIS

L'analisi si esegue in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**, un'applicazione libera e open source che gira nel browser del proprio computer (i dati non vengono caricati online). Legge i file dei potenziostati più comuni, esegue un test di validità di Kramers–Kronig, fitta circuiti equivalenti (elementi R, C, L, CPE, Warburg, Gerischer e a linea di trasmissione), calcola una distribuzione dei tempi di rilassamento (DRT) regolarizzata con integrazione dei picchi, e calcola la conducibilità ionica da spessore e area con propagazione dell'incertezza.

<div class="inst-grid" markdown>

[**Tutorial** <span>Prima analisi passo per passo</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[**Misurare** <span>Indicazioni sul setup sperimentale</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[**Teoria** <span>Circuiti, DRT, validazione</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[**Installazione** <span>Eseguirlo in locale</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## Flusso di lavoro per la cella EIS

1. **Esportare dati calibrati da VersaStudio** — Data ▸ Export To ▸ ZView (`.z`), oppure copiare da Graph View. Secondo il manuale di VersaStudio (Appendice 3), le colonne EIS grezze nei file `.par` sono **non calibrate**.
2. **Validare** ogni spettro con il test di Kramers–Kronig. Eliminare i punti ad alta frequenza che non lo superano (artefatti dei cavi) e annotare quanti se ne sono eliminati.
3. **Fittare** un circuito equivalente oppure calcolare la **DRT**. Escludere dalla resistenza dell'elettrolita il contributo a bassa frequenza degli elettrodi bloccanti.
4. **Conducibilità** — inserire spessore e diametro della pastiglia: σ = *L* / (R · *A*).
5. **Energia di attivazione** — fittare log₁₀ σ in funzione di 1000/T sulla serie di temperature; E<sub>a</sub> = −19,14 × pendenza kJ mol⁻¹ (vedere la [pagina della cella EIS](../cells/eis-cell.md#from-spectrum-to-conductivity)). Indicare se si è fittato σ o σT.

!!! note "Cosa riportare"
    Massa, spessore e diametro della pastiglia; pressione di pressatura sulla pastiglia (non solo la lettura del manometro); temperatura e tempo di equilibratura; intervallo di frequenze, ampiezza e punti per decade; il circuito o i parametri DRT usati; e i residui del fit.
