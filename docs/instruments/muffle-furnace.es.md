---
title: Horno de mufla Hobersal
description: Programar un ciclo de rampa–mantenimiento–enfriamiento en el horno de mufla Hobersal (programador Fuji Electric PXF4, termopar tipo K).
translation: machine
---

# Horno de mufla Hobersal (programador Fuji Electric PXF4)

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | Calcinación y recocido **en aire** (óxidos, crisoles, limpieza de material de vidrio) |
| **Límites** | Máximo 1200 °C. **Límites de trabajo del laboratorio: hasta 1100 °C durante unas horas, 1000 °C para ensayos de 24 h o más** |
| **Controlador** | Fuji Electric PXF4, termopar tipo K; hasta 8 segmentos de rampa/mantenimiento |
| **Manuales** | [Manuales y referencias](../manuals.md#furnace) |

</div>

!!! danger "Seguridad y normas para las muestras"
    - La atmósfera del horno es **aire**. Las muestras de sulfuros, haluros y otras sensibles al aire deben ir **selladas** (p. ej. en una ampolla de cuarzo evacuada) — nunca introduzca una muestra de sulfuro abierta en el horno.
    - Use guantes resistentes al calor, pinzas y pantalla facial para cargar o descargar cualquier cosa caliente. Abra la puerta solo por debajo de la temperatura acordada en las normas del laboratorio.
    - Nunca caliente recipientes sellados por encima de lo que admiten, ni materiales inflamables o que liberen sustancias tóxicas.

## Demostración — ejemplo: 850 °C durante 30 min, calentando a 5 °C/min, enfriando a 2 °C/min

<div class="demo" data-demo="muffle-furnace">
--8<-- "muffle-furnace.svg"
</div>

<div class="demo-steps" markdown>

1. **Conozca los límites.** Máximo 1200 °C; en este laboratorio, no más de 1100 °C (unas horas) o 1000 °C (24 h o más).
2. **Encienda el horno** con el interruptor de la derecha. La pantalla muestra **PV** (temperatura dentro del horno) y **SV** (consigna).
3. **Ponga SV a 20 °C** con ▲ / ▼. Los tiempos de rampa se calculan desde este valor inicial.
4. **Abra el menú del programa.** Mantenga **SEL** hasta que aparezca **CH 1** y pulse ▼ dos veces para llegar a **CH 3** (el programa de rampa/mantenimiento).
5. **Patrón.** Pulse SEL: **PtN** debe ser **0** (si no, pulse SEL y póngalo a 0).
6. **Unidades de tiempo.** Pulse ▼: **tCMU** debe indicar **HHMM** (horas:minutos).
7. **Primera temperatura objetivo.** Pulse ▼ hasta **SV-1**, pulse SEL (el valor parpadea), fije **850** con ◀ ▲ ▼ y pulse SEL.
8. **Tiempo de calentamiento.** Pulse ▼ hasta **tM1r** (tiempo de rampa). Para 5 °C/min de 20 °C a 850 °C: (850 − 20) / 5 = 166 min = **02:46**. Fíjelo y pulse SEL.
9. **Tiempo de mantenimiento.** Pulse ▼ hasta **tM1S** (tiempo de mantenimiento) y fije **00:30**.
10. **Enfriamiento.** Pulse ▼ hasta **SV-2** y fije **20**; después **tM2r** = (850 − 20) / 2 = 415 min = **06:55**; después **tM2S** = **00:00**.
11. **Segmentos no usados.** Compruebe que SV-3 … SV-8 son **0** y sus tiempos **00:00**, y pulse la tecla de retorno (⮌) para salir del menú.
12. **Cargue la muestra** (en su crisol o ampolla sellada) y cierre la puerta.
13. **Ejecute.** Pulse SEL: **StbY** debe estar en **off**. Pulse ▼ hasta **ProG**, pulse SEL, cambie **off → Run** y pulse SEL. Vuelva a la pantalla principal — muestra **Run** abajo a la izquierda.
14. **Pare.** Un programa terminado se detiene solo; después apague el horno. Para parar antes: mantenga SEL, ▼ hasta **ProG**, cambie **Run → off**, pulse SEL y vuelva a la pantalla principal.

</div>

## Calculadora del tiempo de rampa

El PXF4 pide **tiempos** de rampa, no velocidades. Introduzca sus valores:

<div class="bk" id="ramp-calc">
<div class="bk-row">
<label>Inicio (°C)<input type="number" id="rc-a" value="20"></label>
<label>Objetivo (°C)<input type="number" id="rc-b" value="850"></label>
<label>Velocidad (°C/min)<input type="number" id="rc-r" value="5" step="0.1" min="0.1"></label>
<label>Tiempo de rampa (HH:MM)<input type="text" id="rc-out" readonly></label>
</div>
</div>

<script>
(function () {
  function upd() {
    var a = parseFloat(document.getElementById("rc-a").value),
        b = parseFloat(document.getElementById("rc-b").value),
        r = parseFloat(document.getElementById("rc-r").value),
        o = document.getElementById("rc-out");
    if (!(r > 0) || isNaN(a) || isNaN(b)) { o.value = ""; return; }
    var m = Math.round(Math.abs(b - a) / r), h = Math.floor(m / 60);
    o.value = (h < 10 ? "0" : "") + h + ":" + ((m % 60) < 10 ? "0" : "") + (m % 60) + "  (" + m + " min)";
  }
  ["rc-a", "rc-b", "rc-r"].forEach(function (id) { document.getElementById(id).addEventListener("input", upd); });
  upd();
})();
</script>

!!! question "Corrección a la guía del laboratorio"
    La guía impresa del laboratorio da como tiempo de calentamiento del ejemplo *«166 minutos, es decir, 2 horas 36 minutos … 02:36»*. 166 min son **2 h 46 min (02:46)** — la corrección a mano en la copia del laboratorio es la correcta. Corrija el documento original.

!!! note "Exactitud del programa"
    La rampa se calcula desde SV = 20 °C. Si el horno sigue caliente al empezar, la velocidad real de calentamiento del primer segmento será distinta de la nominal. Anote el PV al inicio de cada ensayo.
