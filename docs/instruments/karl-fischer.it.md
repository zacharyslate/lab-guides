---
title: Coulometro Karl Fischer Mettler Toledo C20S
description: Misurare il contenuto d'acqua dei solventi con il titolatore Karl Fischer coulometrico Mettler Toledo C20S, inclusa una verifica con uno standard d'acqua all'1 %.
translation: machine
---

# Titolatore Karl Fischer coulometrico Mettler Toledo C20S

<div class="facts" markdown>

| | |
|---|---|
| **A cosa serve** | Tracce d'acqua nei liquidi — p. es. verificare che etanolo, acetonitrile o THF siano abbastanza anidri per la sintesi di elettroliti in fase liquida |
| **Principio** | Lo iodio viene generato elettrochimicamente all'elettrodo generatore e reagisce con l'acqua; la carica necessaria dà la massa d'acqua |
| **Cella** | Elettrodo generatore (con o senza diaframma, **spina blu**), elettrodo indicatore a doppio platino, tubo essiccante, setto, agitatore magnetico |
| **Formazione** | Obbligatoria |
| **Manuali** | [Manuali e riferimenti](../manuals.md#karl-fischer) |

</div>

!!! danger "Sicurezza"
    I reagenti KF contengono metanolo o altri alcoli, iodio, SO₂ e una base: sono tossici e infiammabili. Indossare guanti e occhiali, riempire e svuotare la cella sotto cappa, e smaltire il reagente esausto nel contenitore di rifiuti indicato dal laboratorio per il reagente KF.

## Dimostrazione { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. **Controllare la cella.** La cella è piena di reagente, entrambi gli elettrodi sono collegati (generatore = **spina blu**), il tubo essiccante contiene essiccante fresco e tutti i tappi e i giunti sono ben inseriti — le perdite fanno entrare l'umidità ambiente.
2. **Accendere il titolatore.**
3. **Preparare il metodo (solo la prima volta).** Methods ▸ New ▸ Standard method template ▸ **KF Coul** ▸ Sample: impostare *Entry type* su **Weight** ▸ OK ▸ Save. Nella schermata Start toccare **AddToHome** per creare un collegamento rapido (spuntare *Immediate start*).
4. **Pretitolazione.** Toccare il collegamento rapido. Il titolatore elimina l'acqua già presente nel reagente; l'agitatore deve essere in funzione. Attendere mentre la deriva diminuisce.
5. **Standby.** Quando la deriva è bassa e stabile, il titolatore passa in **Standby** e **Start sample** si attiva.
6. **Preparare la siringa del campione.** Riempire una siringa con il campione (o con lo **standard d'acqua KF all'1 %** per verificare il sistema), metterla sulla bilancia e **tarare**.
7. **Iniettare.** Toccare **Start sample**, forare il setto con l'ago in modo che la punta sia sotto la superficie del reagente — senza toccare gli elettrodi — e iniettare (0,5–1,0 mL dello standard all'1 %).
8. **Ripesare.** Rimettere la siringa sulla bilancia e inserire la **massa del campione** visualizzata (il valore negativo senza segno). La titolazione parte.
9. **Leggere il risultato** (R1, contenuto d'acqua). Lo standard all'1 % deve dare ≈ 10 mg g⁻¹ entro la tolleranza del certificato; in caso contrario, controllare reagente e deriva prima di misurare i campioni.
10. **Fermare.** Toccare **Stop analysis** per fermare l'analisi in corso, oppure **More ▸ End series** per terminare la serie.

</div>

## Buone pratiche

- Misurare **prima lo standard** ogni giorno, poi i campioni. Misurare ogni campione almeno in triplicato.
- Avvinare la siringa con il campione prima di riempirla; usare una siringa asciutta e chiusa.
- Sostituire il reagente quando la deriva resta alta, il risultato dello standard deriva o la cella si sta riempiendo.
- Cura dell'elettrodo generatore: svuotarlo, sciacquarlo con metanolo, asciugarlo con un panno che non lascia pelucchi e farlo asciugare per diverse ore a 70–80 °C (manuale §7).

!!! warning "Non iniettare campioni contenenti solfuri"
    Solfuri, H₂S e tioli reagiscono con lo iodio e danno valori d'acqua **falsamente alti**; inoltre consumano il reagente. Usare questo titolatore per **solventi e liquidi**. L'acqua nelle polveri di elettroliti solfuri non può essere misurata per iniezione diretta — discutere le alternative con il responsabile del laboratorio.
