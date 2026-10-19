---
title: Estufa de secado Argolab
description: Uso de la estufa de secado Argolab (Giorgio Bormac) serie TCN/TCF Plus — PROG 0 para una consigna simple, programas de varios pasos, y qué puede y qué no puede entrar.
translation: machine
---

# Estufa de secado Argolab (serie TCN / TCF Plus)

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | Secar material de vidrio, herramientas y polvos estables al aire; secar piezas de celdas antes de entrar en la antecámara de la caja de guantes |
| **Rango** | Hasta +300 °C (modelos TCN-50/115/200 y TCF Plus; TCN-30 Plus: +200 °C). Compruebe la placa del modelo en la estufa del laboratorio |
| **Controlador** | Microprocesador: hasta 7 programas × 10 pasos (temperatura, tiempo, velocidad del ventilador en modelos de aire forzado) más **PROG 0**, un programa de un solo paso |
| **Manual** | *Ovens and Incubators — User manual* (Giorgio Bormac, rev. 0, 31.05.2021) — [Manuales](../manuals.md#oven) |

</div>

!!! danger "Lo que nunca debe entrar en la estufa"
    - **Disolventes inflamables** o cualquier cosa mojada con ellos, materiales explosivos o mezclas aire/disolvente (riesgo de incendio y explosión).
    - Materiales que liberan **gases tóxicos o inflamables** al calentarse o descomponerse — esto incluye los **electrolitos sulfuro** (H₂S).
    - No ponga nada debajo de la estufa, no tape las rejillas y no toque la entrada de aire trasera mientras funciona (caliente).

## Demostración { #demonstration }

<div class="demo" data-demo="drying-oven">
--8<-- "drying-oven.svg"
</div>

<div class="demo-steps" markdown>

1. **Compruebe qué va a secar.** Solo material de vidrio, herramientas y materiales estables al aire y no inflamables (vea el recuadro anterior).
2. **Encienda** con la tecla ON/OFF. Si la estufa pita y muestra **end**, el ciclo del usuario anterior terminó antes de apagarse; pulse cualquier tecla para silenciarla.
3. **Llame a un programa.** En standby, pulse brevemente **SET/PROG**: parpadean «PROG» y su número. Elija el programa con ▲ / ▼ y confirme con SET/PROG.
4. **Consigna simple (PROG 0).** Seleccione PROG 0 y **mantenga SET/PROG** hasta que solo parpadee el número; pulse SET/PROG otra vez para editar. Fije la temperatura con ▲ / ▼ y **SHIFT** (cambia de dígito), confirme y fije el temporizador. **Temporizador 00:00 = funciona hasta que pulse START/STOP.**
5. **Programas de varios pasos (1–7).** Cada paso tiene temperatura, tiempo y — en estufas de aire forzado — velocidad del ventilador (H/M/L). Para terminar tras el paso *n*, ponga el tiempo del paso *n* + 1 a **00:00**.
6. **Cargue** sus objetos en las bandejas, dejando espacio para que circule el aire, y cierre la puerta.
7. **Inicie** con **START/STOP**. La pantalla muestra la temperatura de la cámara.
8. **Pare** con **START/STOP** cuando termine. Use guantes resistentes al calor para sacar los objetos calientes, y apague la estufa si nadie más la está usando.

</div>

!!! note "Material de vidrio para la caja de guantes"
    Lo que se seca aquí vuelve a captar humedad en pocos minutos al aire. Llévelo de la estufa directamente a la antecámara de la caja de guantes, aún caliente, y cicle la antecámara como se describe en la [guía de la caja de guantes](glovebox.md).

!!! info "Ajustes protegidos con contraseña"
    El inicio diferido, la repetición de programas, el límite de temperatura de protección de muestras, la alarma de sobretemperatura y los offsets de temperatura están en un submenú protegido con contraseña. Solo el responsable del laboratorio los cambia.
