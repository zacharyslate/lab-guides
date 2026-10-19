---
title: PARSTAT MC · PMC-2000 con VersaStudio
description: Seleccionar un canal, configurar un experimento de EIS potenciostática, ejecutarlo y exportar datos calibrados en VersaStudio con el PARSTAT MC PMC-2000.
translation: machine
---

# PARSTAT MC · PMC-2000 con VersaStudio

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | EIS, polarización DC (conductividad electrónica), CV, ciclado de baterías a corrientes pequeñas |
| **Canal PMC-2000** | ±30 V de compliance, ±1 A, EIS **10 µHz – 7 MHz**, rango de corriente mínimo 4 nA, electrómetros diferenciales ≥ 10 MHz |
| **Software** | VersaStudio (Windows) — archivos de datos `.par` (+ `.par.psbd` si el guardado binario está activado) |
| **Celda** | [Celda de impedancia AC](../cells/eis-cell.md) — vea su demostración para la parte de hardware |
| **Manuales** | [Manuales y referencias](../manuals.md#potentiostat) |

</div>

## Colores de los cables de celda (cable PMC-2000)

| Color | Cable | Celda de dos terminales (celda EIS, batería) |
|---|---|---|
| Verde | WE — trabajo | junto con el gris a **un** electrodo |
| Gris | SE — sense | con el verde |
| Rojo | CE — contraelectrodo | junto con el blanco al **otro** electrodo |
| Blanco | RE — referencia | con el rojo |
| Amarillo / azul | E2+ / E2− (6.º hilo) | no se usan |
| Negro | GND | no se usa — evite que toque otros cables |

En **celdas de baja impedancia o con corrientes superiores a 100 mA**, conecte cada cable al terminal por separado en lugar de enchufar uno en otro («piggy-back»), para evitar desviaciones de tensión por resistencia de contacto (manual del PMC-2000, §3).

## Demostración — software

<div class="demo" data-demo="versastudio">
--8<-- "versastudio.svg"
</div>

<div class="demo-steps" markdown>

1. **Puesta en marcha.** El PARSTAT MC debe llevar encendido al menos 10 min antes de cualquier calibración. Abra **VersaStudio** (Inicio ▸ VersaStudio). Con varios canales, se abre con **No Instrument** seleccionado.
2. **Seleccione su canal.** Tools ▸ **Select Instrument** y doble clic en su canal. Clic derecho ▸ *Locate Instrument* hace parpadear el LED del canal para comprobar que es el conectado a su celda. Los canales marcados **DATA** los está usando otra persona — no los seleccione.
3. **Verificación (en caso de duda).** Experiment ▸ Load Setup ▸ *Impedance Checkout* mide la **celda ficticia interna de 1 kΩ**. Todos los puntos deben dar 1000 Ω ± 20 Ω.
4. **Nuevo experimento.** Experiment ▸ **New** ▸ *Select an Action* ▸ Impedance ▸ **Potentiostatic EIS** ▸ OK, y dé nombre al archivo de datos.
5. **Introduzca los parámetros** en *Experiment Properties* (los valores para la celda EIS están en la [página de la celda EIS](../cells/eis-cell.md#measurement-settings-versastudio-potentiostatic-eis)). Pulse **Intro** tras cada valor — un valor escrito pero no confirmado no se guarda. Añada el nombre de la muestra, el espesor y el área de la pastilla como comentarios en *Common*.
6. **Propiedades avanzadas.** *Cell to Use* = **External**, rango de corriente, modo del electrómetro (single-ended para una celda de dos terminales; diferencial para celdas de cuatro terminales), *Leave Cell On* = No.
7. **Filtros.** Tools ▸ Options ▸ Instrument: **Notch filter = None** para EIS (obligatorio). Deje *EIS filters* en Normal salvo que sepa por qué cambiarlo.
8. **Guarde antes de ejecutar.** Experiment ▸ Save, para que los datos se escriban en disco durante el experimento.
9. **Ejecute** (▶). El diagrama de Nyquist se va construyendo. **■** detiene; **⏭** salta al siguiente segmento.
10. **Exporte datos calibrados.** Data ▸ Export To ▸ **ZView (.z)** para acciones de EIS, o Graph View ▸ *Copy Data as Text*. **No analice las columnas de EIS en bruto del archivo `.par`** — VersaStudio las guarda sin calibrar (manual del software, Apéndice 3).
11. **Libere el canal.** Cierre su experimento y vuelva a *No Instrument* para que el siguiente usuario pueda seleccionar el canal. Deje los cables ordenados.

</div>

## Experimentos DC en baterías

- Ponga el rango de corriente **primero en 2 A** (o use la acción *Auto Current Range Setup* empezando en 2 A) para baterías y otras celdas de almacenamiento de energía. Empezar en un rango sensible con «Auto» puede sobrecargarlo y dañarlo (manual del software, precaución sobre Current Range).
- **Leave Cell On** es peligroso entre una acción potenciostática y una galvanostática, entre una acción de EIS y una DC, o entre acciones galvanostáticas en distintos rangos de corriente: la conmutación puede enviar picos de corriente a su celda.
- Fije **límites de seguridad** de tensión y corriente en *Common* — detienen toda la secuencia si se superan.

## Notas de configuración del software (ordenador del laboratorio)

- Plan de energía de Windows: no suspender nunca, el botón de encendido no hace nada, inicio rápido desactivado — de lo contrario los experimentos largos pueden perder datos (manual del software, §3.3).
- Tras una actualización del software, VersaStudio puede pedir actualizar el firmware: déjelo terminar sin interrupciones y luego ejecute *Calibrate for best DC accuracy* en cada canal.
