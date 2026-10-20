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

## La pressa e la conversione della pressione { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Pompa a pedale Riken Seiki con manometro 0–100 MPa: indica la pressione dell'olio, non quella sulla pastiglia](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Pompa a pedale Riken Seiki con manometro 0–100 MPa: indica la pressione dell'olio, non quella sulla pastiglia</figcaption>
</figure>

<figure markdown>
![Pressa CDM-5M: il cilindro in alto spinge il pistone verso il basso sullo stampo o sulla cella, appoggiati sulla piastra di base](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>Pressa CDM-5M: il cilindro in alto spinge il pistone verso il basso sullo stampo o sulla cella, appoggiati sulla piastra di base</figcaption>
</figure>

</div>

Il manometro della pompa a pedale misura la **pressione dell'olio** nel cilindro. La forza nasce da questa pressione che agisce sul pistone del cilindro, lo **stelo da 40 mm**; la testa da 45 mm trasmette soltanto la forza al punzone. La pressione nella pastiglia è questa forza divisa per l'area della pastiglia:

<div class="formula" markdown>

*F* = *P*<sub>g</sub> × π *d*² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>p</sub> = *F* / (π *D*² / 4) = *P*<sub>g</sub> × (*d* / *D*)² &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>g</sub> = *P*<sub>p</sub> × (*D* / *d*)²

</div>

*d* = diametro dello stelo (40 mm), *D* = diametro dello stampo (pastiglia). Con *d* = 40 mm, **1 MPa sul manometro = 1,26 kN (0,13 t)**.

| Ø stampo | Area della pastiglia | Pastiglia ÷ manometro | 4 MPa manometro (formatura) | Impostazione del laboratorio per la cella |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 7,5 MPa manometro → **333 MPa** (9,4 kN) |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 18 MPa manometro → **288 MPa** (22,6 kN) |

**Al contrario:** per pressare una pastiglia di Ø 10 mm a 375 MPa, porta il manometro a 375 × (10/40)² = **23,4 MPa**; per Ø 6 mm, 375 × (6/40)² = **8,4 MPa**.

<div class="bk press-calc">
<div class="bk-row">
<label>Ø stelo (mm)<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>Ø stampo (mm)<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>Manometro (MPa)<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>Pressione sulla pastiglia (MPa)<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>Forza<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "Prima di fidarti dei numeri"
    - Il calcolo considera lo **stelo da 40 mm** come il pistone su cui spinge l'olio. Se la targhetta del cilindro riporta un'area efficace, usa quella: un pistone da 45 mm darebbe il 27 % di forza in più.
    - Non sono inclusi l'attrito nel cilindro e nello stampo né la precisione del manometro. Negli articoli riporta la pressione sulla pastiglia insieme alla lettura del manometro, ai diametri di stelo e stampo e al modello di pressa.
    - Non superare mai la pressione nominale indicata sulla pompa né il carico nominale dello stampo.

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

## Dallo spettro alla conducibilità { #from-spectrum-to-conductivity }

1. **Fittare** lo spettro con un circuito equivalente o una distribuzione dei tempi di rilassamento (DRT). I residui del fit non devono mostrare un andamento, tranne alle frequenze più basse dove gli elettrodi bloccanti si polarizzano. Nella DRT ogni picco corrisponde a un processo; il contributo di polarizzazione degli elettrodi è **escluso** dalla resistenza dell'elettrolita.
2. **Resistenza totale:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (contributi di bulk e di bordo di grano identificati nel fit).
3. **Misurare la pastiglia**: spessore *L* (dopo la densificazione) e area *A*.
4. **Conducibilità ionica:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — in S cm⁻¹ con *L* in cm, *A* in cm² e R in Ω.
5. **Energia di attivazione:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Riportare log₁₀ σ in funzione di 1000/T (T in K). La pendenza *m* dà **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! note "Energia di attivazione"
    Indica nei report se hai interpolato σ o σT in funzione di 1/T: le due convenzioni danno valori di E<sub>a</sub> leggermente diversi.

Tutti i passaggi di fit, DRT e conducibilità si possono fare in **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — vedere [Analisi dei dati EIS](../analysis/eis-analysis.md).

## Conducibilità elettronica (polarizzazione DC)

1. Applicare un potenziale costante (cronoamperometria) alla stessa cella bloccante; la corrente decade dal valore iniziale a uno stato stazionario.
2. Annotare la corrente stazionaria *I* e ripetere a più potenziali entro la finestra di lavoro dell'elettrolita (p. es. 2–4 V per i solfuri).
3. Riportare V in funzione di I; la pendenza è la resistenza elettronica *R*. Quindi σ<sub>e</sub> = *L* / (*R* · *A*).

Obiettivi usati nel gruppo: elettroliti separatori σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ e σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; leganti per elettrodi σ<sub>ion</sub> > 10⁻³ S cm⁻¹ con alta conducibilità elettronica.

## Punti da verificare prima di pubblicare i risultati { #points-to-check-before-you-publish-numbers }

!!! note "La pressione del manometro non è la pressione sulla pastiglia"
    «4 MPa», «7,5 MPa» e «18 MPa» sono **pressioni del manometro (olio)**. Con lo stelo da 40 mm, 18 MPa di manometro su una pastiglia di Ø 10 mm corrispondono a ≈ **288 MPa**, e 7,5 MPa su una di Ø 6 mm a ≈ **333 MPa**: vedi [La pressa e la conversione della pressione](#press). Negli articoli riporta la pressione sulla pastiglia (e la lettura del manometro e i diametri di stelo e stampo) perché altri possano riprodurla.

!!! note "Policarbonato a 120 °C"
    Il policarbonato si ammorbidisce vicino alla transizione vetrosa (≈ 145 °C) e scorre sotto carico molto prima. A 100–120 °C sotto pressione di impilamento il foro e le guarnizioni possono deformarsi, cambiando contatto e spessore. Controllare la cella dopo le prove ad alta temperatura e rimisurare lo spessore della pastiglia; una prova di riscaldamento e raffreddamento che si ripercorre è un buon test.

!!! note "Limite ad alta frequenza"
    Il PMC-2000 è specificato fino a 7 MHz, ma sopra ~1 MHz l'induttanza dei cavi e le capacità parassite distorcono lo spettro delle pastiglie a bassa resistenza. Eseguire un test di Kramers–Kronig (EIS Studio lo prevede) e scartare i punti ad alta frequenza che non lo superano.
