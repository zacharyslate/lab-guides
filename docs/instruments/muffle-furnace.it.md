---
title: Muffola Hobersal
description: Programmare un ciclo rampa–mantenimento–raffreddamento sulla muffola Hobersal (programmatore Fuji Electric PXF4, termocoppia di tipo K).
translation: machine
---

# Muffola Hobersal (programmatore Fuji Electric PXF4)

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | Calcinazione e ricottura **in aria** (ossidi, crogioli, pulizia della vetreria) |
| **Limiti** | Massimo 1200 °C. **Limiti di lavoro del laboratorio: fino a 1100 °C per poche ore, 1000 °C per prove di 24 h o più** |
| **Controllore** | Fuji Electric PXF4, termocoppia di tipo K; fino a 8 segmenti rampa/mantenimento |
| **Manuali** | [Manuali e riferimenti](../manuals.md#furnace) |

</div>

!!! danger "Sicurezza e regole per i campioni"
    - L'atmosfera della muffola è **aria**. I campioni di solfuri, alogenuri e altri campioni sensibili all'aria devono essere **sigillati** (p. es. in una fiala di quarzo evacuata) — non mettere mai un campione di solfuro aperto in muffola.
    - Usare guanti resistenti al calore, pinze e visiera per caricare o scaricare qualsiasi oggetto caldo. Aprire la porta solo sotto la temperatura concordata nelle regole del laboratorio.
    - Non riscaldare mai contenitori sigillati oltre i loro limiti, né materiali infiammabili o che rilasciano sostanze tossiche.

## Dimostrazione — esempio: 850 °C per 30 min, riscaldamento a 5 °C/min, raffreddamento a 2 °C/min

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. **Conoscere i limiti.** Massimo 1200 °C; in questo laboratorio non oltre 1100 °C (poche ore) o 1000 °C (24 h o più).
2. **Accendere la muffola** con l'interruttore sulla destra. Il display mostra **PV** (temperatura all'interno della muffola) e **SV** (setpoint).
3. **Impostare SV a 20 °C** con ▲ / ▼. I tempi di rampa sono calcolati a partire da questo valore iniziale.
4. **Aprire il menu del programma.** Tenere premuto **SEL** finché compare **CH 1**, poi premere ▼ due volte per arrivare a **CH 3** (il programma rampa/mantenimento).
5. **Pattern.** Premere SEL: **PtN** deve essere **0** (altrimenti premere SEL e impostarlo a 0).
6. **Unità di tempo.** Premere ▼: **tCMU** deve indicare **HHMM** (ore:minuti).
7. **Prima temperatura obiettivo.** Premere ▼ fino a **SV-1**, premere SEL (il valore lampeggia), impostare **850** con ◀ ▲ ▼ e premere SEL.
8. **Tempo di riscaldamento.** Premere ▼ fino a **tM1r** (tempo di rampa). Per 5 °C/min da 20 °C a 850 °C: (850 − 20) / 5 = 166 min = **02:46**. Impostarlo e premere SEL.
9. **Tempo di mantenimento.** Premere ▼ fino a **tM1S** (tempo di mantenimento) e impostare **00:30**.
10. **Raffreddamento.** Premere ▼ fino a **SV-2** e impostare **20**; poi **tM2r** = (850 − 20) / 2 = 415 min = **06:55**; poi **tM2S** = **00:00**.
11. **Segmenti non usati.** Verificare che SV-3 … SV-8 siano **0** e i loro tempi **00:00**, poi premere il tasto di ritorno (⮌) per uscire dal menu.
12. **Caricare il campione** (nel suo crogiolo o fiala sigillata) e chiudere la porta.
13. **Avviare.** Premere SEL: **StbY** deve essere **off**. Premere ▼ fino a **ProG**, premere SEL e cambiare **off → Run**, premere SEL. Tornare alla schermata principale — in basso a sinistra compare **Run**.
14. **Fermare.** Un programma terminato si ferma da solo; poi spegnere la muffola. Per fermare prima: tenere premuto SEL, ▼ fino a **ProG**, cambiare **Run → off**, premere SEL e tornare alla schermata principale.

</div>

## Calcolatore del tempo di rampa

Il PXF4 chiede **tempi** di rampa, non velocità. Inserire i propri valori:

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>Inizio (°C)<input type="number" id="rc-a" value="20"></label>
<label>Obiettivo (°C)<input type="number" id="rc-b" value="850"></label>
<label>Velocità (°C/min)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>Tempo di rampa (HH:MM)<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! note "Accuratezza del programma"
    La rampa è calcolata da SV = 20 °C. Se la muffola è ancora calda all'avvio, la velocità di riscaldamento reale del primo segmento sarà diversa da quella nominale. Annotare il PV all'inizio di ogni prova.
