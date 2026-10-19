---
title: Culombímetro Karl Fischer Mettler Toledo C20S
description: Medir el contenido de agua de disolventes con el valorador Karl Fischer culombimétrico Mettler Toledo C20S, incluida una comprobación con un patrón de agua al 1 %.
translation: machine
---

# Valorador Karl Fischer culombimétrico Mettler Toledo C20S

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | Trazas de agua en líquidos — p. ej. comprobar que el etanol, el acetonitrilo o el THF están lo bastante secos para la síntesis de electrolitos en fase líquida |
| **Principio** | El yodo se genera electroquímicamente en el electrodo generador y reacciona con el agua; la carga necesaria da la masa de agua |
| **Celda** | Electrodo generador (con o sin diafragma, **clavija azul**), electrodo indicador de doble platino, tubo de secado, septum, agitador magnético |
| **Formación** | Obligatoria |
| **Manuales** | [Manuales y referencias](../manuals.md#karl-fischer) |

</div>

!!! danger "Seguridad"
    Los reactivos KF contienen metanol u otros alcoholes, yodo, SO₂ y una base: son tóxicos e inflamables. Use guantes y gafas, llene y vacíe la celda en una vitrina de gases, y deseche el reactivo agotado en el contenedor de residuos que el laboratorio indique para reactivo KF.

## Demostración { #demonstration }

<div class="demo" data-demo="karl-fischer">
--8<-- "karl-fischer.svg"
</div>

<div class="demo-steps" markdown>

1. **Revise la celda.** La celda está llena de reactivo, ambos electrodos están conectados (generador = **clavija azul**), el tubo de secado contiene desecante fresco y todos los tapones y uniones están bien asentados — las fugas dejan entrar la humedad ambiente.
2. **Encienda el valorador.**
3. **Prepare el método (solo la primera vez).** Methods ▸ New ▸ Standard method template ▸ **KF Coul** ▸ Sample: ponga *Entry type* en **Weight** ▸ OK ▸ Save. En la pantalla de inicio toque **AddToHome** para crear un acceso directo (marque *Immediate start*).
4. **Pretitulación.** Toque su acceso directo. El valorador elimina el agua que ya contiene el reactivo; el agitador debe estar en marcha. Espere mientras la deriva disminuye.
5. **Standby.** Cuando la deriva es baja y estable, el valorador pasa a **Standby** y **Start sample** se activa.
6. **Prepare la jeringa de muestra.** Llene una jeringa con la muestra (o con el **patrón de agua KF al 1 %** para comprobar el sistema), colóquela en la balanza y **tare**.
7. **Inyecte.** Toque **Start sample**, atraviese el septum con la aguja de modo que la punta quede bajo la superficie del reactivo — sin tocar los electrodos — e inyecte (0,5–1,0 mL del patrón al 1 %).
8. **Repese.** Vuelva a poner la jeringa en la balanza e introduzca la **masa de muestra** que aparece (el valor negativo sin el signo). La valoración se ejecuta.
9. **Lea el resultado** (R1, contenido de agua). El patrón al 1 % debe dar ≈ 10 mg g⁻¹ dentro de la tolerancia de su certificado; si no, revise el reactivo y la deriva antes de medir muestras.
10. **Pare.** Toque **Stop analysis** para detener el análisis actual, o **More ▸ End series** para terminar la serie.

</div>

## Buenas prácticas

- Mida **primero el patrón** cada día y después sus muestras. Mida cada muestra al menos por triplicado.
- Enjuague la jeringa con la muestra antes de llenarla; use una jeringa seca y cerrada.
- Cambie el reactivo cuando la deriva se mantenga alta, el resultado del patrón se desvíe o la celda se esté llenando.
- Cuidado del electrodo generador: vacíelo, enjuáguelo con metanol, séquelo con un paño sin pelusa y déjelo secar varias horas a 70–80 °C (manual §7).

!!! warning "No inyecte muestras con sulfuros"
    Los sulfuros, el H₂S y los tioles reaccionan con el yodo y dan valores de agua **falsamente altos**; además consumen el reactivo. Use este valorador para **disolventes y líquidos**. El agua en polvos de electrolitos sulfuro no puede medirse por inyección directa — consulte alternativas con el responsable del laboratorio.
