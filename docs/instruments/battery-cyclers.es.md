---
title: Cicladores de baterías Neware
description: Elegir el ciclador Neware y el rango de corriente adecuados para una celda, escribir un archivo de pasos en BTS, iniciar un canal y exportar datos.
translation: machine
---

# Cicladores de baterías Neware (CT-4008, CT-4008T, CT-5008, CT-9008)

## ¿Qué ciclador para qué celda?

El ciclador debe poder **aplicar y medir** su corriente con exactitud. La exactitud se expresa como porcentaje del **fondo de escala del rango**, así que una corriente pequeña en un rango grande es inexacta.

| Equipo | Tensión | Rangos de corriente | Exactitud (corriente) | Adecuado para |
|---|---|---|---|---|
| **CT-9008-5V6A-F** | −5 a +5 V | 0,1–180 µA · 180 µA–6 mA · 6–180 mA · 0,18–6 A | ±36 nA · ±1,2 µA · ±36 µA · ±1,2 mA | **Microceldas de estado sólido, pilas de botón a bajo C-rate** |
| CT-5008-5V12A-TF | −3 a +5 V | 0,12–120 mA · 0,12–1,2 A · 1,2–12 A | ±0,02 % FE (±24 µA en el rango más bajo) | Pilas de botón y pouch a partir de ~1 mA |
| CT-4008Q-5V12A-S1 | 25 mV–5 V (descarga mín. 2 V con el soporte universal) | 0,2–100 mA · 0,1–0,5 A · 0,5–6 A · 6–12 A | ±0,02 % FE | Celdas mayores; **no** para celdas descargadas por debajo de 2 V |
| CT-4008T-5V12A-S1-F | −1 a 5 V | 5 mA–1 A · 1–6 A · 6–12 A | ±0,05 % FE | Celdas que necesitan ≥ 5 mA |

<small>De las fichas técnicas de Neware de los archivos del laboratorio. FE = fondo de escala.</small>

### Elegir la corriente { #choosing-the-current }

1. Estime la capacidad: *Q* (mAh) = masa activa (g) × capacidad específica esperada (mAh g⁻¹).
2. Corriente para un C-rate *n*: *I* = *n* × *Q* (mA si *Q* está en mAh).
3. Elija el equipo y el rango cuyo rango más bajo **contenga** *I* con un error aceptable (apunte a < 1 % de *I*).

*Ejemplo:* la [batería de prueba de estado sólido](../cells/solid-state-battery.md) tiene ≈ 0,57 mAh → 0,1 C ≈ 57 µA → **CT-9008, rango 1** (error ±36 nA ≈ 0,06 %). En un CT-4008/5008 la misma corriente está por debajo del rango más bajo y la exactitud (±20–24 µA) es aproximadamente el 40 % de la corriente.

## Demostración — software BTS

<div class="demo" data-demo="neware-bts">
--8<-- "neware-bts.svg"
</div>

<div class="demo-steps" markdown>

1. **Elija el equipo** en la lista de dispositivos (aquí el CT-9008 para una microcelda) y busque un canal libre. Reserve antes el canal en la [página de reservas](../booking.md).
2. **Conecte la celda** al canal (pinzas Kelvin de 4 hilos: las dos rojas al electrodo positivo y las dos negras al negativo). La casilla del canal muestra la tensión a circuito abierto; espere a que sea estable.
3. **Clic derecho en el canal ▸ Single start.**
4. **Escriba o cargue el archivo de pasos.** Típico: *Rest* (OCV) → *carga CC* (corriente, tensión de corte superior) → *Rest* → *descarga CC* (corriente, tensión de corte inferior) → *Cycle* al paso 2, *N* veces → *End*. Fije **límites de protección** (tensión superior e inferior) un poco fuera de sus cortes. Los nombres de los pasos varían ligeramente entre versiones de BTS (p. ej. CC_Chg / CCC, CC_DChg / CCD).
5. **Rellene la información del ensayo**: un nombre/código de barras único (iniciales, tipo de celda, fecha, número), la **masa activa** para que las capacidades salgan en mAh g⁻¹, y el archivo de pasos. Pulse **Start**.
6. **Compruebe que arrancó**: la casilla pasa a *working* y muestra el paso, la tensión y la corriente. Vigile los primeros minutos — un signo erróneo o una tensión en el límite indican un error de conexión o de pasos.
7. **Vea los datos**: clic derecho ▸ View data abre **BTSDA**, donde se representa V frente a t y capacidad frente a ciclo, y se **exporta a Excel**.
8. **Termine**: el ensayo acaba en *End*, o clic derecho ▸ **Single stop**. Desconecte la celda y libere su reserva.

</div>

!!! warning "Antes de iniciar un canal"
    - Nunca inicie un canal que otra persona haya reservado o que muestre *working* / *pause*.
    - Introduzca las tensiones en BTS **frente a su contraelectrodo**. Con un ánodo de Li–In, reste ≈ 0,6 V a los límites expresados frente a Li⁺/Li.
    - Las celdas de estado sólido necesitan presión de apilamiento durante todo el ensayo — no afloje la celda entre pasos.
