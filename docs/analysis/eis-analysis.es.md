---
title: Análisis de datos de EIS
description: Cómo analizar los espectros de impedancia de la celda EIS — exportación desde VersaStudio, validación, circuitos equivalentes, DRT y conductividad — con EIS Studio.
translation: machine
---

# Análisis de datos de EIS

El análisis se hace en **[EIS Studio](https://zacharyslate.github.io/eis-studio/)**, una aplicación libre y de código abierto que funciona en el navegador de su propio ordenador (sus datos no se suben a ningún servidor). Lee archivos de los potenciostatos más comunes, realiza una prueba de validez de Kramers–Kronig, ajusta circuitos equivalentes (elementos R, C, L, CPE, Warburg, Gerischer y de línea de transmisión), calcula una distribución de tiempos de relajación (DRT) regularizada con integración de picos, y calcula la conductividad iónica a partir del espesor y el área con propagación de la incertidumbre.

<div class="inst-grid" markdown>

[**Tutorial** <span>Primer análisis paso a paso</span>](https://zacharyslate.github.io/eis-studio/tutorial.html)

[**Medir** <span>Orientación sobre el montaje experimental</span>](https://zacharyslate.github.io/eis-studio/measure.html)

[**Teoría** <span>Circuitos, DRT, validación</span>](https://zacharyslate.github.io/eis-studio/theory.html)

[**Instalación** <span>Ejecutarlo en local</span>](https://zacharyslate.github.io/eis-studio/install.html)

</div>

## Flujo de trabajo para la celda EIS

1. **Exporte datos calibrados desde VersaStudio** — Data ▸ Export To ▸ ZView (`.z`), o copie desde Graph View. Según el manual de VersaStudio (Apéndice 3), las columnas de EIS en bruto dentro de los archivos `.par` están **sin calibrar**.
2. **Valide** cada espectro con la prueba de Kramers–Kronig. Elimine los puntos de alta frecuencia que no la superen (artefactos de cables) y anote cuántos ha eliminado.
3. **Ajuste** un circuito equivalente o calcule la **DRT**. Excluya de la resistencia del electrolito la contribución de baja frecuencia de los electrodos bloqueantes.
4. **Conductividad** — introduzca el espesor y el diámetro de la pastilla: σ = *L* / (R · *A*).
5. **Energía de activación** — ajuste log₁₀ σ frente a 1000/T a lo largo de la serie de temperaturas; E<sub>a</sub> = −19,14 × pendiente kJ mol⁻¹ (vea la [página de la celda EIS](../cells/eis-cell.md#from-spectrum-to-conductivity)). Indique si ajustó σ o σT.

!!! note "Qué indicar en los resultados"
    Masa, espesor y diámetro de la pastilla; presión de prensado sobre la pastilla (no solo la lectura del manómetro); temperatura y tiempo de equilibrado; rango de frecuencias, amplitud y puntos por década; el circuito o los parámetros de DRT usados; y los residuos del ajuste.
