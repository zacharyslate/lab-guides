---
title: Stufa di essiccazione Argolab
description: Uso della stufa di essiccazione Argolab (Giorgio Bormac) serie TCN/TCF Plus — PROG 0 per un setpoint semplice, programmi a più passi, e cosa può e non può entrare.
translation: machine
---

# Stufa di essiccazione Argolab (serie TCN / TCF Plus)

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | Essiccare vetreria, attrezzi e polveri stabili all'aria; essiccare parti delle celle prima che entrino nella precamera della glovebox |
| **Intervallo** | Fino a +300 °C (modelli TCN-50/115/200 e TCF Plus; TCN-30 Plus: +200 °C). Verificare la targhetta del modello sulla stufa del laboratorio |
| **Controllore** | Microprocessore: fino a 7 programmi × 10 passi (temperatura, tempo, velocità della ventola nei modelli a ventilazione forzata) più **PROG 0**, un programma a passo singolo |
| **Manuale** | *Ovens and Incubators — User manual* (Giorgio Bormac, rev. 0, 31.05.2021) — [Manuali](../manuals.md#oven) |

</div>

!!! danger "Cosa non deve mai entrare in stufa"
    - **Solventi infiammabili** o qualsiasi cosa bagnata con essi, materiali esplosivi o miscele aria/solvente (rischio di incendio ed esplosione).
    - Materiali che rilasciano **gas tossici o infiammabili** quando riscaldati o decomposti — inclusi gli **elettroliti solfuri** (H₂S).
    - Non mettere nulla sotto la stufa, non coprire le prese d'aria e non toccare l'ingresso d'aria posteriore durante il funzionamento (caldo).

## Dimostrazione { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. **Controllare cosa si essicca.** Solo vetreria, attrezzi e materiali stabili all'aria e non infiammabili (vedere il riquadro sopra).
2. **Accendere** con il tasto ON/OFF. Se la stufa emette un segnale acustico e mostra **end**, il ciclo dell'utente precedente è terminato prima dello spegnimento; premere un tasto qualsiasi per silenziarla.
3. **Richiamare un programma.** In standby premere brevemente **SET/PROG**: lampeggiano «PROG» e il suo numero. Scegliere il programma con ▲ / ▼ e confermare con SET/PROG.
4. **Setpoint semplice (PROG 0).** Selezionare PROG 0 e **tenere premuto SET/PROG** finché lampeggia solo il numero, poi premere di nuovo SET/PROG per modificare. Impostare la temperatura con ▲ / ▼ e **SHIFT** (sposta tra le cifre), confermare, poi impostare il timer. **Timer 00:00 = funziona finché non si preme START/STOP.**
5. **Programmi a più passi (1–7).** Ogni passo ha temperatura, tempo e — nelle stufe a ventilazione forzata — velocità della ventola (H/M/L). Per terminare dopo il passo *n*, impostare a **00:00** il tempo del passo *n* + 1.
6. **Caricare** gli oggetti sui ripiani, lasciando spazio per la circolazione dell'aria, e chiudere la porta.
7. **Avviare** con **START/STOP**. Il display mostra la temperatura della camera.
8. **Fermare** con **START/STOP** alla fine. Usare guanti resistenti al calore per estrarre gli oggetti caldi e spegnere la stufa se nessun altro la sta usando.

</div>

!!! note "Vetreria per la glovebox"
    Gli oggetti essiccati qui riassorbono umidità in pochi minuti all'aria. Portarli dalla stufa direttamente nella precamera della glovebox ancora caldi, ed eseguire i cicli della precamera come descritto nella [guida della glovebox](glovebox.md).

!!! info "Impostazioni protette da password"
    Avvio ritardato, ripetizione del programma, limite di temperatura di protezione del campione, allarme di sovratemperatura e offset di temperatura si trovano in un sottomenu protetto da password. Solo il responsabile del laboratorio li modifica.
