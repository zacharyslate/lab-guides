---
title: Celda de impedancia AC (EIS)
description: Prensar una pastilla de electrolito sólido, montar la celda de impedancia de policarbonato y medir la conductividad iónica en el PMC-2000.
translation: machine
---

# Celda de impedancia AC (EIS)

Esta celda mide la **conductividad iónica** de una pastilla de electrolito sólido de sulfuro o haluro entre dos electrodos bloqueantes de acero inoxidable. Realice los pasos 1–9 dentro de la caja de guantes.

<div class="facts" markdown>

| | |
|---|---|
| **Piezas** | 2 placas de acero inoxidable · 2 colectores de corriente de acero inoxidable (uno largo, uno pequeño) · 2 juntas de silicona · cuerpo de celda de policarbonato · 2 aislantes · tornillos M4 pequeños · tornillos largos de 4 mm · pastilla de electrolito |
| **Matrices** | Ø 6 mm (20–30 mg de polvo) o Ø 10 mm (80–100 mg de polvo) |
| **Equipo** | [PARSTAT MC · PMC-2000 con VersaStudio](../instruments/potentiostat.md) |
| **Análisis** | [Análisis de datos de EIS](../analysis/eis-analysis.md) con [EIS Studio](https://zacharyslate.github.io/eis-studio/) |

</div>

## Demostración { #demonstration }

<div class="demo" data-demo="eis-cell">
--8<-- "eis-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tare la matriz.** Ponga el émbolo pequeño en el fondo de la matriz, coloque la matriz en la balanza y tárela (a cero).
2. **Añada el polvo.** Transfiera con cuidado el polvo de electrolito a la matriz: **20–30 mg** para la matriz de Ø 6 mm, **80–100 mg** para la de Ø 10 mm. Anote la masa.
3. **Introduzca el émbolo largo** sobre el polvo.
4. **Prense la pastilla.** Coloque la matriz en el centro de la prensa y aplique **4 MPa (manómetro)** durante **1 min**.
5. **Extraiga la pastilla.** Invierta la matriz sobre la base de acero y use la prensa para empujar la matriz fuera de los émbolos. La pastilla sale a la base.
6. **Cargue la celda.** Ponga el colector de corriente largo en el fondo de la celda de policarbonato, pase la pastilla al orificio e introduzca encima el colector pequeño. **Cada colector necesita su junta de silicona.**
7. **Densifique.** Coloque la celda cargada en el centro de la prensa y aplique la presión lentamente: **18 MPa (manómetro) para la celda de Ø 10 mm** o **7,5 MPa (manómetro) para la de Ø 6 mm**, durante **3 min**.
8. **Monte la celda completa.** Añada las placas de acero, los aislantes y los tornillos como en el dibujo.
9. **Escuádrela.** La separación entre las placas de acero exteriores debe ser igual por todos los lados (**D1 = D2**). Apriete todas las tuercas solo **a mano**.
10. **Conecte el potenciostato.** Use una conexión de dos terminales: **WE (verde) + SE (gris)** a una placa, **CE (rojo) + RE (blanco)** a la otra. La celda es simétrica, así que la polaridad no importa.
11. **Equilibre y mida.** Deje que la celda alcance una temperatura constante durante **al menos 45 min** y ejecute la EIS potenciostática (un barrido dura unos 30 s – 1 min).
12. **Repita a cada temperatura**: 40, 60, 80, 100 y 120 °C, esperando al menos 45 min en cada paso.

</div>

## La prensa y la conversión de presión { #press }

<div class="photo-grid" markdown>

<figure markdown>
![Bomba de pie Riken Seiki con su manómetro de 0–100 MPa: indica la presión del aceite, no la presión sobre la pastilla](../assets/img/press-pump.jpg){ loading=lazy }
<figcaption>Bomba de pie Riken Seiki con su manómetro de 0–100 MPa: indica la presión del aceite, no la presión sobre la pastilla</figcaption>
</figure>

<figure markdown>
![Prensa CDM-5M: el cilindro de arriba empuja el émbolo hacia abajo sobre la matriz o la celda, que se apoya en la placa base](../assets/img/press-cdm5m.jpg){ loading=lazy }
<figcaption>Prensa CDM-5M: el cilindro de arriba empuja el émbolo hacia abajo sobre la matriz o la celda, que se apoya en la placa base</figcaption>
</figure>

</div>

El manómetro de la bomba de pie mide la **presión del aceite** en el cilindro. La fuerza se debe a esa presión actuando sobre el pistón del cilindro, el **vástago de 40 mm**; el cabezal de 45 mm solo transmite la fuerza al punzón. La presión en la pastilla es esa fuerza dividida por el área de la pastilla:

<div class="formula" markdown>

*F* = *P*<sub>g</sub> × π *d*² / 4 &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>p</sub> = *F* / (π *D*² / 4) = *P*<sub>g</sub> × (*d* / *D*)² &nbsp;&nbsp;·&nbsp;&nbsp; *P*<sub>g</sub> = *P*<sub>p</sub> × (*D* / *d*)²

</div>

*d* = diámetro del vástago (40 mm), *D* = diámetro de la matriz (pastilla). Con *d* = 40 mm, **1 MPa en el manómetro = 1,26 kN (0,13 t)**.

| Ø matriz | Área de la pastilla | Pastilla ÷ manómetro | 4 MPa manómetro (formar la pastilla) | Ajuste del laboratorio para la celda |
|---|---|---|---|---|
| 6 mm | 28.3 mm² | × 44.4 | 178 MPa | 7,5 MPa manómetro → **333 MPa** (9,4 kN) |
| 10 mm | 78.5 mm² | × 16.0 | 64 MPa | 18 MPa manómetro → **288 MPa** (22,6 kN) |

**Al revés:** para prensar una pastilla de Ø 10 mm a 375 MPa, ponga el manómetro en 375 × (10/40)² = **23,4 MPa**; para Ø 6 mm, 375 × (6/40)² = **8,4 MPa**.

<div class="bk press-calc">
<div class="bk-row">
<label>Ø vástago (mm)<input type="number" data-pc="shaft" value="40" min="1" step="0.1"></label>
<label>Ø matriz (mm)<input type="number" data-pc="die" value="10" min="1" step="0.1" list="pc-dies"></label>
<label>Manómetro (MPa)<input type="number" data-pc="gauge" value="18" min="0" step="0.1"></label>
<label>Presión en la pastilla (MPa)<input type="number" data-pc="pellet" min="0" step="1"></label>
<label>Fuerza<input type="text" data-pc="force" readonly></label>
</div>
<datalist id="pc-dies"><option value="6"><option value="10"></datalist>
</div>

!!! warning "Antes de fiarse de los números"
    - El cálculo toma el **vástago de 40 mm** como el pistón sobre el que empuja el aceite. Si la placa del cilindro indica un área efectiva, use esa: un pistón de 45 mm daría un 27 % más de fuerza que estos números.
    - No se incluyen el rozamiento en el cilindro y la matriz ni la precisión del manómetro. En los artículos, indique la presión sobre la pastilla junto con la lectura del manómetro, los diámetros del vástago y de la matriz y el modelo de prensa.
    - No supere nunca la presión nominal de la etiqueta de la bomba ni la carga nominal de la matriz.

## Parámetros de medida (VersaStudio, Potentiostatic EIS) { #measurement-settings-versastudio-potentiostatic-eis }

| Grupo | Parámetro | Valor |
|---|---|---|
| AC | Start frequency | 3 MHz |
| | End frequency | 0,1 Hz o 1 Hz |
| | Amplitude | 10–40 mV RMS |
| DC | Potential | 0 V vs. OC |
| Scan | Point spacing | Logarítmico, **10 puntos por década** |
| | Data quality | 1 |
| | Measurement delay | 0 |
| Instrument | Current range | Auto |
| | Voltage range | ± 6 V |
| | Electrometer mode | Single-ended |
| | Bandwidth limit / LCI bandwidth limit | Auto |
| Cell | Leave cell on | No |
| | Cell to use | External |
| Options | Notch filter | **None** (obligatorio para EIS — manual de VersaStudio §4.4.2.2) |

## Del espectro a la conductividad { #from-spectrum-to-conductivity }

1. **Ajuste** el espectro con un circuito equivalente o una distribución de tiempos de relajación (DRT). Los residuos del ajuste no deben mostrar un patrón, salvo a las frecuencias más bajas, donde se polarizan los electrodos bloqueantes. En la DRT cada pico corresponde a un proceso; la contribución de la polarización de electrodo se **excluye** de la resistencia del electrolito.
2. **Resistencia total:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (contribuciones de volumen y de borde de grano identificadas en su ajuste).
3. **Mida la pastilla**: espesor *L* (tras la densificación) y área *A*.
4. **Conductividad iónica:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — en S cm⁻¹ con *L* en cm, *A* en cm² y R en Ω.
5. **Energía de activación:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Represente log₁₀ σ frente a 1000/T (T en K). La pendiente *m* da **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! note "Energía de activación"
    Indique en los informes si ajustó σ o σT frente a 1/T: las dos convenciones dan valores de E<sub>a</sub> algo distintos.

Todos los pasos de ajuste, DRT y conductividad pueden hacerse en **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — vea [Análisis de datos de EIS](../analysis/eis-analysis.md).

## Conductividad electrónica (polarización DC)

1. Aplique un potencial constante (cronoamperometría) a la misma celda bloqueante; la corriente decae desde su valor inicial hasta un estado estacionario.
2. Anote la corriente estacionaria *I* y repita a varios potenciales dentro de la ventana de trabajo del electrolito (p. ej. 2–4 V para sulfuros).
3. Represente V frente a I; la pendiente es la resistencia electrónica *R*. Entonces σ<sub>e</sub> = *L* / (*R* · *A*).

Objetivos usados en el grupo: electrolitos separadores σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ y σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; aglutinantes de electrodo σ<sub>ion</sub> > 10⁻³ S cm⁻¹ con alta conductividad electrónica.

## Puntos que revisar antes de publicar resultados { #points-to-check-before-you-publish-numbers }

!!! note "La presión del manómetro no es la presión sobre la pastilla"
    «4 MPa», «7,5 MPa» y «18 MPa» son **presiones del manómetro (aceite)**. Con el vástago de 40 mm, 18 MPa de manómetro sobre una pastilla de Ø 10 mm son ≈ **288 MPa**, y 7,5 MPa sobre una de Ø 6 mm son ≈ **333 MPa**; vea [La prensa y la conversión de presión](#press). Indique en los artículos la presión sobre la pastilla (y la lectura del manómetro y los diámetros del vástago y de la matriz) para que otros puedan reproducirla.

!!! note "Policarbonato a 120 °C"
    El policarbonato se ablanda cerca de su transición vítrea (≈ 145 °C) y fluye bajo carga mucho antes. A 100–120 °C bajo presión de apilamiento el orificio y las juntas pueden deformarse, cambiando el contacto y el espesor. Revise la celda tras los ensayos a alta temperatura y vuelva a medir el espesor de la pastilla; un ciclo de calentamiento y enfriamiento que se superpone consigo mismo es una buena prueba.

!!! note "Límite de alta frecuencia"
    El PMC-2000 está especificado hasta 7 MHz, pero por encima de ~1 MHz la inductancia de los cables y las capacidades parásitas distorsionan el espectro de pastillas de baja resistencia. Haga una prueba de Kramers–Kronig (EIS Studio la incluye) y descarte los puntos de alta frecuencia que no la superen.
