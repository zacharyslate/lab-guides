---
title: Caja de guantes MBraun EasyLab
description: Cómo poner en marcha la caja de guantes MBraun EasyLab, introducir y sacar material por la antecámara y dejarla en condiciones seguras.
translation: machine
---

# Caja de guantes MBraun EasyLab

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | Manipular materiales sensibles al aire y a la humedad (electrolitos sulfuro, Li metálico, Li₂S, P₂S₅) bajo argón |
| **Atmósfera** | Argón purificado por un catalizador de Cu y tamiz molecular; los sensores de O₂ y H₂O miden 0–1000 ppm y 0–500 ppm |
| **Formación** | Obligatoria. Apruebe el examen de la caja de guantes antes de reservar |
| **Reserva** | [Reservar un instrumento](../booking.md) |
| **Manuales** | [Manuales y referencias](../manuals.md#glovebox) |

</div>

!!! danger "Antes de empezar"
    - Lleve bata, gafas de seguridad y **guantes de nitrilo sobre los guantes de butilo de la caja** siempre que manipule productos químicos dentro.
    - Nunca meta en la antecámara un recipiente abierto con disolvente bajo vacío. Los frascos de disolvente cerrados requieren el procedimiento de medio vacío (paso 9).
    - Si la lectura de O₂ o H₂O es alta, pare y avise al responsable del laboratorio. No abra materiales sensibles.

## Panel de control { #control-panel }

![El panel de control EasyLab de nuestro laboratorio](../assets/img/glovebox-panel.jpg){ loading=lazy width="480" }

| Elemento | Función |
|---|---|
| **pressure mbar** (pantalla superior) | Presión de la caja sobre la del laboratorio, en mbar. Normalmente una pequeña sobrepresión: en modo ECO la caja se mantiene entre +2 y +6 mbar. Durante la regeneración sigue mostrando la presión de la caja. |
| **O₂ ppm** y **H₂O ppm** | Oxígeno y agua en el argón. Durante la regeneración muestran la etapa y los minutos restantes. |
| Mandos **Min.set** / **Max.set** | Límites inferior y superior del control de presión de la caja. **No los cambie.** |
| **circ** | Circulación del argón por el purificador. Debe estar **siempre activa (LED encendido)**, salvo durante la regeneración. Si el LED está apagado, compruebe que los pistones de circulación están ARRIBA y avise al responsable del laboratorio. |
| **reg** / **reg abort** | Iniciar / detener la regeneración del catalizador (reg abort solo funciona en las primeras etapas). Solo el responsable del laboratorio. |
| **pump** | Bomba de vacío. Debe estar encendida para hacer vacío en la antecámara. |
| **ana** | Analizadores de O₂ y H₂O. Déjelos encendidos. |
| **light** | Iluminación de la caja. |
| **purge** | Purga la caja con argón para bajar el O₂/H₂O. Solo cuando lo pida el responsable del laboratorio. |
| **eco** | Reposo: la bomba solo funciona cuando la caja pide argón, la luz se apaga, presión entre +2 y +6 mbar. Deje la caja en ECO al terminar. |

!!! tip "Así se ve el estado normal de trabajo"
    Presión de unos pocos mbar (aquí 2,7), O₂ y H₂O por debajo de 1 ppm (aquí 0,5) y los LED de **circ**, **pump**, **ana** y **light** encendidos. En esta foto el LED de **circ** está apagado: si lo ve así, compruebe los pistones de circulación y avise al responsable del laboratorio.

## Demostración { #demonstration }

<div class="demo" data-demo="glovebox">
--8<-- "glovebox.svg"
</div>

<div class="demo-steps" markdown>

1. **Compruebe la caja tal como la encuentra.** Debe estar en modo **ECO**, con las dos puertas de la antecámara cerradas, la antecámara en vacío total (manómetro ≈ −94 kPa) y todas las válvulas cerradas. Lea los valores de O₂ y H₂O en la pantalla de sensores.
2. **Active la caja.** Pulse **ECO** una vez para salir del modo ECO y **PUMP** una vez. Puede encender o apagar la **LIGHT** en cualquier momento.
3. **Compruebe la circulación.** El argón debe circular siempre por el catalizador (salvo durante la regeneración): el LED **CIRC** debe estar encendido. Compruebe también los pistones de las válvulas magnéticas de circulación sobre el catalizador: deben estar **ARRIBA**. Si el LED está apagado o los pistones abajo, avise al responsable del laboratorio antes de abrir material sensible.
4. **Lleve la antecámara a argón.** Abra lentamente la **válvula de argón (llenado)**, que conecta la antecámara con la cámara principal. Observe cómo el manómetro sube de −94 kPa a 0 kPa y cierre la válvula.
5. **Cargue sus objetos.** Abra la **puerta exterior**, coloque los objetos en la antecámara y cierre la puerta exterior. Deje cerrados los recipientes con líquido; los polvos y sólidos pueden ir abiertos o con el tapón flojo.
6. **Haga vacío (ciclo 1).** Compruebe que ambas puertas y la válvula de argón están cerradas. Abra lentamente la **válvula de vacío** hasta que el manómetro marque −94 kPa, mantenga el vacío **15 min** y cierre la válvula.
7. **Rellene con argón.** Abra lentamente la válvula de argón hasta que el manómetro vuelva a 0 kPa y ciérrela.
8. **Repita** el ciclo vacío–espera–llenado hasta completar **3 ciclos** en total. Es mejor dejar los objetos porosos o voluminosos (fibras, papel, espumas) en vacío durante la noche y después hacer un ciclo completo.
9. **Caso especial — frascos de disolvente cerrados.** Un frasco cerrado puede reventar con vacío total. Haga vacío solo hasta **medio vacío** (≈ −47 kPa), espere varios minutos, rellene y repita **al menos 10 veces**.
10. **Introduzca los objetos.** Tras el último llenado (manómetro a 0 kPa, ambas válvulas cerradas), meta las manos en los guantes, abra la **puerta interior**, pase los objetos a la cámara principal y cierre la puerta interior.
11. **Trabaje con comodidad.** La caja regula su propia presión. Si los guantes están demasiado tensos o flojos, use los **pedales** para subir (+) o bajar (−) la presión de la cámara.
12. **Termine la sesión.** Limpie los derrames, limpie los guantes **solo con etanol**, cierre las puertas interior y exterior y haga vacío en la antecámara con la válvula de vacío abierta **al menos 5 min**.
13. **Déjela como la encontró.** Cierre la válvula de vacío (el manómetro se queda en ≈ −94 kPa), compruebe que todas las válvulas están cerradas, pulse **ECO** una vez y confirme que los pistones de circulación están **ARRIBA**.

</div>

## Sacar material { #taking-material-out }

1. Si la antecámara está en vacío, rellénela lentamente con argón hasta 0 kPa y cierre la válvula de argón.
2. Abra la puerta interior, coloque los objetos y cierre la puerta interior.
3. Abra la puerta exterior, saque los objetos y cierre la puerta exterior.
4. Haga vacío en la antecámara, púrguela una vez con argón, vuelva a hacer vacío y déjela en vacío con todas las válvulas cerradas.

## Lo que daña la caja { #things-that-damage-the-box }

!!! warning "Venenos del catalizador"
    El catalizador de cobre se **envenena de forma irreversible con compuestos de azufre y ácidos**, y el tamiz molecular también adsorbe H₂S y vapores de disolvente cuando el filtro de carbón activo se satura (guía del laboratorio *Guía MBraun EasyLab*, rev. 07-2022). Los electrolitos sulfuro (Li₂S, P₂S₅, Li₆PS₅Cl, Li₃PS₄) liberan H₂S con trazas de humedad. Mantenga cerrados los recipientes de sulfuros cuando no los use, nunca deje polvos de sulfuro abiertos durante la noche y anote qué productos usa en la caja para poder rastrear una pérdida de capacidad de retención de O₂.

!!! note "Disolventes"
    Los disolventes volátiles (etanol, acetonitrilo, THF…) cargan el filtro de carbón activo y pueden desviar los sensores. Use el menor volumen posible y mantenga los frascos cerrados. Pregunte al responsable del laboratorio si debe pararse la circulación mientras trabaja con disolventes abiertos — los procedimientos actuales del laboratorio no lo indican.

## Regeneración y sensores (solo el responsable del laboratorio)

La regeneración del catalizador/tamiz (16 etapas, unos 960 min, gas de formación Ar/H₂ a ~15 L/min) y el mantenimiento del sensor de H₂O (nuevo recubrimiento con H₃PO₄ al 85 % cada ~2000 h) los realiza únicamente el responsable del laboratorio, siguiendo la guía del laboratorio.

!!! question "A confirmar con el responsable del laboratorio"
    Los dos documentos del laboratorio no coinciden en el ciclo de la antecámara. Las diapositivas de puesta en marcha en inglés dicen *«vacío total durante al menos 5 min antes de liberar la presión»*; la guía del laboratorio en español dice **3 ciclos de vacío con 15 min de espera** (o 45 min en modo «activo»). Esta guía usa el ciclo más estricto de 3 × 15 min. Confirme cuál es la norma del laboratorio.

## Manuales

- Guía del laboratorio: *Guía MBraun EasyLab* (español, rev. 07-2022) — copia del laboratorio.
- Diapositivas del laboratorio: *MBraun EasyLab Glovebox — Operation start guide* — copia del laboratorio.
- Fabricante: [página del producto MBraun EASYlab](https://shop.mbraun.de/ENU/28934/EASYlab.html).
