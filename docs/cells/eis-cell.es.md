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

!!! question "Incoherencia en las diapositivas del laboratorio"
    Las diapositivas del laboratorio indican a la vez *«Number of points: 30»* y *«Points per decade: 10»*. No pueden cumplirse ambas: de 3 MHz a 0,1 Hz hay 7,5 décadas, es decir, ≈ 75 puntos a 10 puntos/década (≈ 65 puntos hasta 1 Hz). Esta guía usa 10 puntos por década. Por favor, confírmelo.

## Del espectro a la conductividad { #from-spectrum-to-conductivity }

1. **Ajuste** el espectro con un circuito equivalente o una distribución de tiempos de relajación (DRT). Los residuos del ajuste no deben mostrar un patrón, salvo a las frecuencias más bajas, donde se polarizan los electrodos bloqueantes. En la DRT cada pico corresponde a un proceso; la contribución de la polarización de electrodo se **excluye** de la resistencia del electrolito.
2. **Resistencia total:** R<sub>total</sub> = R<sub>0</sub> + R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> (contribuciones de volumen y de borde de grano identificadas en su ajuste).
3. **Mida la pastilla**: espesor *L* (tras la densificación) y área *A*.
4. **Conductividad iónica:** σ<sub>ion</sub> = *L* / (R<sub>total</sub> · *A*)  — en S cm⁻¹ con *L* en cm, *A* en cm² y R en Ω.
5. **Energía de activación:** σ<sub>ion</sub>(T) = A(T) · exp(−E<sub>a</sub>/RT). Represente log₁₀ σ frente a 1000/T (T en K). La pendiente *m* da **E<sub>a</sub> = −m · ln(10) · R · 1000 = −19,14 · m kJ mol⁻¹**.

!!! warning "Corrección a las diapositivas del laboratorio"
    Las diapositivas dicen *«slope = 2.313 × E<sub>a</sub>»*. La constante es ln 10 = **2,303**, y la relación debe incluir R y el factor 1000 del eje 1000/T: E<sub>a</sub> [kJ mol⁻¹] = −2,303 · 8,314 · m = **−19,14 m**. Indique también en los informes si ajusta σ o σT frente a 1/T — las dos convenciones dan E<sub>a</sub> ligeramente distintas.

Todos los pasos de ajuste, DRT y conductividad pueden hacerse en **[EIS Studio](https://zacharyslate.github.io/eis-studio/)** — vea [Análisis de datos de EIS](../analysis/eis-analysis.md).

## Conductividad electrónica (polarización DC)

1. Aplique un potencial constante (cronoamperometría) a la misma celda bloqueante; la corriente decae desde su valor inicial hasta un estado estacionario.
2. Anote la corriente estacionaria *I* y repita a varios potenciales dentro de la ventana de trabajo del electrolito (p. ej. 2–4 V para sulfuros).
3. Represente V frente a I; la pendiente es la resistencia electrónica *R*. Entonces σ<sub>e</sub> = *L* / (*R* · *A*).

Objetivos usados en el grupo: electrolitos separadores σ<sub>ion</sub> > 10⁻⁴ S cm⁻¹ y σ<sub>e</sub> < 10⁻⁵ S cm⁻¹; aglutinantes de electrodo σ<sub>ion</sub> > 10⁻³ S cm⁻¹ con alta conductividad electrónica.

## Puntos que revisar antes de publicar resultados { #points-to-check-before-you-publish-numbers }

!!! note "La presión del manómetro no es la presión sobre la pastilla"
    «4 MPa» y «18 MPa» son **presiones del manómetro (hidráulicas)**. La presión sobre la pastilla es *P*<sub>pastilla</sub> = *P*<sub>manómetro</sub> × (*A*<sub>pistón</sub> / *A*<sub>matriz</sub>), que es muchas veces mayor para una matriz de Ø 6–10 mm. Indique en los artículos la presión sobre la pastilla (y el modelo de prensa y el diámetro del pistón) para que otros puedan reproducirla.

!!! note "Policarbonato a 120 °C"
    El policarbonato se ablanda cerca de su transición vítrea (≈ 145 °C) y fluye bajo carga mucho antes. A 100–120 °C bajo presión de apilamiento el orificio y las juntas pueden deformarse, cambiando el contacto y el espesor. Revise la celda tras los ensayos a alta temperatura y vuelva a medir el espesor de la pastilla; un ciclo de calentamiento y enfriamiento que se superpone consigo mismo es una buena prueba.

!!! note "Límite de alta frecuencia"
    El PMC-2000 está especificado hasta 7 MHz, pero por encima de ~1 MHz la inductancia de los cables y las capacidades parásitas distorsionan el espectro de pastillas de baja resistencia. Haga una prueba de Kramers–Kronig (EIS Studio la incluye) y descarte los puntos de alta frecuencia que no la superen.
