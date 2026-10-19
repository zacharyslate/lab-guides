---
title: Batería de prueba de estado sólido
description: Montar una microbatería de prueba de estado sólido de laboratorio (pastilla bicapa cátodo/electrolito con ánodo de indio o Li–In) y ciclarla en el Neware CT-9008.
translation: machine
---

# Batería de prueba de estado sólido

Una microbatería de prueba en la misma celda de policarbonato usada para [EIS](eis-cell.md): una **pastilla bicapa** (electrolito sólido + cátodo composite) con un ánodo metálico en el otro lado. Los pasos 1–11 se realizan en la **caja de guantes**.

<div class="facts" markdown>

| | |
|---|---|
| **Capa de electrolito** | 100 mg en la matriz de Ø 10 mm |
| **Capa catódica** | 10 mg de cátodo composite (p. ej. del [procedimiento del cátodo](../procedures/cathode-composite.md)) |
| **Ánodo** | Lámina de Li Ø 6,0 mm × 0,25 mm (pulida) y lámina de In Ø 8,0 mm × 0,3 mm. **Cátodos litiados (p. ej. NMC): sin Li — solo lámina de In Ø 8,0 mm × 0,1 mm** |
| **Ciclador** | [Neware CT-9008 (5 V, 6 mA)](../instruments/battery-cyclers.md) — el único ciclador del laboratorio con rangos de corriente lo bastante bajos para esta celda |

</div>

## Demostración { #demonstration }

<div class="demo" data-demo="ssb-cell">
--8<-- "ssb-cell.svg"
</div>

<div class="demo-steps" markdown>

1. **Tare la matriz.** Ponga el émbolo pequeño en el fondo de la matriz de Ø 10 mm y tárela (a cero) en la balanza.
2. **Añada 100 mg de electrolito** y anote la masa exacta.
3. **Prense la capa de electrolito.** Introduzca el émbolo largo y prense a **4 MPa (manómetro) durante 1 min**.
4. **Añada el cátodo.** Retire el émbolo largo a mano y extienda **10 mg de cátodo composite** de forma uniforme sobre toda la superficie del electrolito. Anote la masa (tare antes la matriz con la pastilla).
5. **Prense la bicapa.** Vuelva a poner el émbolo largo y prense de nuevo a **4 MPa (manómetro) durante 1 min**.
6. **Extraiga la pastilla bicapa** invirtiendo la matriz sobre la base de acero y empujando la matriz fuera de los émbolos en la prensa.
7. **Cargue y densifique.** Ponga la pastilla bicapa en la celda de policarbonato con el **colector largo en el fondo** y una junta de silicona en cada colector. Centre la celda en la prensa y aplique **18 MPa (manómetro) lentamente, durante 3 min**.
8. **Deje expuesto el electrolito.** Retire el colector pequeño. El **lado del electrolito** de la bicapa debe quedar hacia arriba (el lado del cátodo apoya sobre el colector largo).
9. **Prepare el ánodo.** Fije el metal del ánodo al colector pequeño (tamaños en la tabla anterior).
10. **Añada el ánodo.** Invierta el cuerpo de la celda, deslícelo sobre el colector pequeño que lleva el ánodo y prense la batería a **4 MPa (manómetro) durante 2 min**.
11. **Monte la celda completa** con placas, aislantes y tornillos. Iguale la separación por todos los lados (**D1 = D2**) y apriete las tuercas **a mano**. La batería está lista para medir el OCV.
12. **Conecte el ciclador.** Saque la celda de la caja de guantes y conéctela a un canal del CT-9008: **positivo (rojo) al lado del cátodo** (colector largo), **negativo (negro) al lado del ánodo**. Compruebe que la tensión a circuito abierto es estable.
13. **Programe e inicie el ensayo** en BTS: reposo a OCV y después carga y descarga a corriente constante entre sus límites de tensión, repetidas el número de ciclos que necesite. Vea [cicladores de baterías](../instruments/battery-cyclers.md#choosing-the-current).

</div>

## Elegir la corriente y los límites de tensión

- **Estimación de la capacidad.** Con 10 mg de composite al 38 % en peso de NMC-111 (114 mg de NMC en 300 mg de composite) la celda contiene ≈ 3,8 mg de NMC. Con una capacidad práctica típica de ~150 mAh g⁻¹ son ≈ 0,57 mAh, así que **0,1 C ≈ 57 µA** y **0,05 C ≈ 28 µA**. Use su masa de cátodo medida y la capacidad que espera de su material.
- **Qué canal.** A estas corrientes solo el **CT-9008** funciona correctamente (rango de corriente 1: 0,1–180 µA, exactitud ±36 nA). Los equipos CT-4008 y CT-5008 empiezan en 0,2 mA y 0,12 mA respectivamente — por encima de 0,1 C para esta celda — y su exactitud es ±0,02 % de un fondo de escala de 100 mA o 120 mA (±20–24 µA), tan grande como la propia corriente.
- **Tensión.** El ánodo de Li–In está a ≈ 0,6 V frente a Li⁺/Li, así que una ventana catódica expresada frente a Li⁺/Li debe desplazarse ≈ 0,6 V hacia abajo al introducirla en BTS.

!!! question "Por confirmar con el responsable del laboratorio"
    - La diapositiva muestra las láminas de Li y de In, pero no dice cuál queda en contacto con el electrolito cuando se usan ambas. Añada, por favor, el orden de apilamiento.
    - El paso 4 de las diapositivas dice *«remove the long pressing arm by hand, and retare the die with pellet»* tras el segundo prensado; esta guía adelanta el re-tarado a antes de añadir el cátodo para poder anotar su masa. Compruebe que es lo que se pretende.

!!! note "Presión del manómetro"
    Todas las presiones son lecturas del **manómetro** de la prensa hidráulica. Conviértalas a presión sobre la pastilla (manómetro × área del pistón / área de la matriz) al presentar resultados — vea la [página de la celda EIS](eis-cell.md#points-to-check-before-you-publish-numbers).
