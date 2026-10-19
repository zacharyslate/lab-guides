---
title: Cella di impedenza AC (EIS)
description: Pressare una pastiglia di elettrolita solido, assemblare la cella di impedenza in policarbonato e misurare la conducibilità ionica sul PMC-2000.
translation: machine
---

# Cella di impedenza AC (EIS)

Questa cella misura la **conducibilità ionica** di una pastiglia di elettrolita solido solfuro o alogenuro tra due elettrodi bloccanti in acciaio inox. Eseguire i passi 1–9 all'interno della glovebox.

<div class="facts" markdown>

| | |
|---|---|
| **Parti** | 2 piastre in acciaio inox · 2 collettori di corrente in acciaio inox (uno lungo, uno corto) · 2 guarnizioni in silicone · corpo della cella in policarbonato · 2 isolanti · viti M4 corte · viti lunghe da 4 mm · pastiglia di elettrolita |
| **Stampi** | Ø 6 mm (20–30 mg di polvere) o Ø 10 mm (80–100 mg di polvere) |
| **Strumento** | [PARSTAT MC · PMC-2000 con VersaStudio](../instruments/potentiostat.md) |
| **Analisi** | [Analisi dei dati EIS](../analysis/eis-analysis.md) con [EIS Studio](https://zacharyslate.github.io/eis-studio/) |

</div>

## Dimostrazione { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tarare lo stampo.** Inserire il punzone corto sul fondo dello stampo, mettere lo stampo sulla bilancia e tararlo (azzerare).
2. **Aggiungere la polvere.** Trasferire con cura la polvere di elettrolita nello stampo: **20–30 mg** per lo stampo da Ø 6 mm, **80–100 mg** per quello da Ø 10 mm. Annotare la massa.
3. **Inserire il punzone lungo** sopra la polvere.
4. **Pressare la pastiglia.** Mettere lo stampo al centro della pressa e applicare **4 MPa (manometro)** per **1 min**.
5. **Estrarre la pastiglia.** Capovolgere lo stampo sulla base in acciaio e usare la pressa per spingere lo stampo fuori dai punzoni. La pastiglia esce nella base.
6. **Caricare la cella.** Mettere il collettore di corrente lungo sul fondo della cella in policarbonato, trasferire la pastiglia nel foro e inserire sopra il collettore corto. **Ogni collettore richiede la sua guarnizione in silicone.**
7. **Densificare.** Mettere la cella carica al centro della pressa e applicare la pressione lentamente: **18 MPa (manometro) per la cella da Ø 10 mm** o **7,5 MPa (manometro) per quella da Ø 6 mm**, per **3 min**.
8. **Assemblare la cella completa.** Aggiungere le piastre in acciaio, gli isolanti e le viti come nel disegno.
9. **Metterla in squadra.** La distanza tra le piastre esterne in acciaio deve essere uguale su tutti i lati (**D1 = D2**). Serrare tutti i dadi solo **a mano**.
10. **Collegare il potenziostato.** Usare un collegamento a due terminali: **WE (verde) + SE (grigio)** a una piastra, **CE (rosso) + RE (bianco)** all'altra. La cella è simmetrica, quindi la polarità non conta.
11. **Equilibrare e misurare.** Lasciare che la cella raggiunga una temperatura costante per **almeno 45 min**, poi eseguire l'EIS potenziostatica (una scansione dura circa 30 s – 1 min).
12. **Ripetere a ogni temperatura**: 40, 60, 80, 100 e 120 °C, attendendo almeno 45 min a ogni passo.

</div>

## Parametri di misura (VersaStudio, Potentiostatic EIS) { #measurement-settings-versastudio-potentiostatic-eis }

| Gruppo | Parametro | Valore |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0,1 Hz o 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | Logaritmico, **10 punti per decade** |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | **None** (obbligatorio per l'EIS — manuale VersaStudio §4.4.2.2) |

!!! question "Incoerenza nelle diapositive del laboratorio"
    Le diapositive del laboratorio riportano sia *«Number of points: 30»* sia *«Points per decade: 10»*. Non possono valere entrambe: da 3 MHz a 0,1 Hz ci sono 7,5 decadi, cioè ≈ 75 punti a 10 punti/decade (≈ 65 punti fino a 1 Hz). Questa guida usa 10 punti per decade. Confermare.

## Dallo spettro alla conducibilità { #from-spectrum-to-conductivity }

1. **Fittare** lo spettro con un circuito equivalente o una distribuzione dei tempi di rilassamento (DRT). I residui del fit non devono mostrare un andamento, tranne alle frequenze più basse dove gli elettrodi bloccanti si polarizzano. Nella DRT ogni picco corrisponde a un processo; il contributo di polarizzazione degli elettrodi è **escluso** dalla resistenza dell'elettrolita.
2. **Resistenza totale:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (contributi di bulk e di bordo di grano identificati nel fit).
3. **Misurare la pastiglia**: spessore *L* (dopo la densificazione) e area *A*.
4. **Conducibilità ionica:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — in S cm⁻¹ con *L* in cm, *A* in cm² e R in Ω.
5. **Energia di attivazione:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Riportare log₁₀ σ in funzione di 1000/T (T in K). La pendenza *m* dà **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! warning "Correzione alle diapositive del laboratorio"
    Le diapositive riportano *«slope = 2.313 × E<sub>a</sub>»*. La costante è ln 10 = **2,303**, e la relazione deve includere R e il fattore 1000 dell'asse 1000/T: E<sub>a</sub> [kJ mol⁻¹] = −2,303 · 8,314 · m = **−19,14 m**. Indicare inoltre nei report se si fitta σ o σT in funzione di 1/T — le due convenzioni danno E<sub>a</sub> leggermente diverse.

Tutti i passaggi di fit, DRT e conducibilità si possono fare in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — vedere [Analisi dei dati EIS](../analysis/eis-analysis.md).

## Conducibilità elettronica (polarizzazione DC)

1. Applicare un potenziale costante (cronoamperometria) alla stessa cella bloccante; la corrente decade dal valore iniziale a uno stato stazionario.
2. Annotare la corrente stazionaria *I* e ripetere a più potenziali entro la finestra di lavoro dell'elettrolita (p. es. 2–4 V per i solfuri).
3. Riportare V in funzione di I; la pendenza è la resistenza elettronica *R*. Quindi σ<sub>e</sub> = *L* / (*R* · *A*).

Obiettivi usati nel gruppo: elettroliti separatori σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ e σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; leganti per elettrodi σ<sub>ion</sub> > 10⁻³ S cm⁻¹ con alta conducibilità elettronica.

## Punti da verificare prima di pubblicare i risultati { #points-to-check-before-you-publish-numbers }

!!! note "La pressione del manometro non è la pressione sulla pastiglia"
    «4 MPa» e «18 MPa» sono **pressioni del manometro (idrauliche)**. La pressione sulla pastiglia è *P*<sub>pastiglia</sub> = *P*<sub>manometro</sub> × (*A*<sub>pistone</sub> / *A*<sub>stampo</sub>), molte volte maggiore per uno stampo da Ø 6–10 mm. Riportare negli articoli la pressione sulla pastiglia (e il modello di pressa e il diametro del pistone) così che altri possano riprodurla.

!!! note "Policarbonato a 120 °C"
    Il policarbonato si ammorbidisce vicino alla transizione vetrosa (≈ 145 °C) e scorre sotto carico molto prima. A 100–120 °C sotto pressione di impilamento il foro e le guarnizioni possono deformarsi, cambiando contatto e spessore. Controllare la cella dopo le prove ad alta temperatura e rimisurare lo spessore della pastiglia; una prova di riscaldamento e raffreddamento che si ripercorre è un buon test.

!!! note "Limite ad alta frequenza"
    Il PMC-2000 è specificato fino a 7 MHz, ma sopra ~1 MHz l'induttanza dei cavi e le capacità parassite distorcono lo spettro delle pastiglie a bassa resistenza. Eseguire un test di Kramers–Kronig (EIS Studio lo prevede) e scartare i punti ad alta frequenza che non lo superano.
