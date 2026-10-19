---
title: Anton Paar Monowave 400 R
description: Realizar una síntesis por microondas en vial cerrado en el Monowave 400 R, con seguimiento Raman in situ opcional mediante el Cora 5001.
translation: machine
---

# Anton Paar Monowave 400 R

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | Síntesis en fase líquida en viales cerrados con agitación magnética bajo control de temperatura y presión, p. ej. rutas en disolución hacia electrolitos sulfuro |
| **Límites** | Hasta **300 °C** y **30 bar**; un magnetrón de 850 W; agitación hasta 1200 rpm |
| **Característica especial** | La versión «R» aloja una **sonda Raman de fibra óptica del Cora 5001** para obtener espectros in situ durante la reacción (láser clase 3B) |
| **Requiere** | Aire comprimido a **5,5–6 bar** para medir bien la presión y sellar el vial |
| **Formación** | Obligatoria. Instrucción de seguridad láser obligatoria para medidas Raman |
| **Manuales** | [Manuales y referencias](../manuals.md#monowave) |

</div>

### Viales de reacción

| Vial | Volumen | Volumen de llenado | T máx. | p máx. | Tiempo máx. |
|---|---|---|---|---|---|
| G4 (vidrio) | 4 mL | 0,5–2 mL | 250 °C | 30 bar | 100 h |
| **G10** (vidrio) | 10 mL | **2–6 mL** | 300 °C | 30 bar | 100 h |
| **G30** (vidrio) | 30 mL | **6–20 mL** | 300 °C | 30 bar | 100 h |
| G30 Wide Neck | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |
| C10 (SiC) | 10 mL | 2–6 mL | 300 °C | 30 bar | 100 h |
| C30 Wide Neck (SiC) | 30 mL | 6–20 mL | 200 °C | 15 bar | 4 h |

<small>De la Reference Guide del Monowave 400 R (E07IB012EN-C), tabla 1. Para experimentos Raman se aplican los límites de tiempo más cortos de su Apéndice C. Los viales G4 y los de SiC **no** pueden usarse con la sonda Raman.</small>

!!! danger "Antes de empezar"
    - **Láser clase 3B.** Desactive la sonda Raman (botón Stop de la sonda) antes de mover la guía o la sonda, y nunca mire a la sonda ni a la fibra.
    - Seleccione siempre el **tipo de vial que está usando realmente**. Un tipo de vial erróneo da lecturas de temperatura/presión incorrectas y puede romper el vial.
    - Respete el volumen mínimo de llenado: el sensor IR mide la pared del vial ~1 cm por encima del fondo.
    - Si no sabe cómo se comporta su reacción, empiece con cantidades pequeñas y la máxima dilución.
    - El equipo **no es resistente a ácidos**; los reactivos corrosivos acortan su vida (hoja de inicio rápido).
    - Reacciones sensibles al aire: llene y cierre el vial **en la caja de guantes**. Si un vial descarga presión, el escape arrastra vapores de reacción (en química de sulfuros, posiblemente H₂S) — el escape debe ir a extracción.

## Demostración { #demonstration }

<div class="demo" data-demo="monowave">
--8<-- "monowave.svg"
</div>

<div class="demo-steps" markdown>

1. **Compruebe el aire comprimido.** El suministro debe estar a 5,5–6 bar antes de empezar.
2. **Llene el vial.** Ponga un imán agitador adecuado en un vial G10 (2–6 mL) o G30 (6–20 mL) y añada la mezcla de reacción.
3. **Cierre el vial.** Coloque el septum en la tapa a presión con su **cara de PTFE hacia la mezcla de reacción** y presione la tapa hasta que no se abra al apretar el borde. Septum de silicona: ensayos de menos de 4 h. Disco de PTFE + septum de PTFE: ensayos de más de 4 h (el septum de PTFE es de un solo uso).
4. **Programe el experimento.** En la pantalla táctil toque **Task List**, toque la última fila, dé nombre al experimento, elija **Standard** y fije los pasos (calentar, mantener, enfriar). La temperatura de enfriamiento (30–70 °C) debe estar unos 10 °C por debajo del punto de ebullición de su disolvente. **Seleccione el tipo de vial que usa** y toque OK.
5. **Coloque la sonda Raman.** Con el láser **desactivado**, mueva la guía a la posición **G10** (la más interior) o **G30** (la intermedia), o a **idle** (la más exterior) si no va a registrar Raman. Compruebe que un vial vacío y abierto de su tamaño entra en la cavidad sin resistencia.
6. **Inserte el vial.** Los viales G4, G10 y C10 necesitan el **anillo adaptador** (cara de poliimida hacia arriba) sobre el inserto de la cavidad; los G30 se introducen directamente.
7. **Inicie.** Toque **Start**. Con el tapón ciego instalado (sin termómetro Ruby) el ensayo arranca y la tapa giratoria se cierra.
8. **Inicie la medida Raman** en el Cora 5001 solo **después de que la tapa se haya cerrado** (vea la [guía del Cora 5001](cora.md)).
9. **Supervise** temperatura, presión, potencia y agitación en la pantalla principal. Puede editar un experimento en curso tocando sus widgets.
10. **Pare.** Al final — o para parar antes — **detenga primero la medida Raman y desactive el láser**, y luego (para parar antes) toque **Stop → Yes**. El equipo enfría el vial y abre la tapa cuando es seguro.
11. **Saque y abra el vial.** Retire el vial con cuidado. Ábralo con la herramienta de cierre como un abrebotellas (con cuidado si lleva un tubo de inmersión).
12. **Exporte los datos.** Menu ▸ Data Memory ▸ Browse Results ▸ seleccionar ▸ Export a USB (.pdf, .csv, .xls, .raw, .png). El equipo guarda hasta 1000 resultados.

</div>

## Conviene saber

- **Sensores de temperatura.** El sensor IR integrado (±5 °C) mide la pared del vial. El termómetro de fibra óptica Ruby opcional (±2 °C) mide dentro de la mezcla y es mejor para reacciones exotérmicas o disolventes poco absorbentes — pero **no puede usarse junto con la sonda Raman** ni en ensayos de más de 4 h.
- **Disolventes poco absorbentes** (p. ej. tolueno, hexano) se calientan mal; el equipo puede reducir la potencia y no llegar nunca a la temperatura fijada. Los disolventes muy absorbentes en viales G4 pueden sobrepasarla: limite la potencia o use «Heat to temperature in time».
- **Sin Raman:** ponga la sonda en idle y coloque el inserto de cavidad sin modificar, para que una rotura del vial no pueda dañar la sonda.

## Relacionado

- Raman in situ durante la síntesis en fase líquida de electrolitos sulfuro: vea [Referencias](../references.md#group-publications).
