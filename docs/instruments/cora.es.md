---
title: Anton Paar Cora 5001
description: Medir un espectro Raman de una muestra sellada con el espectrómetro Cora 5001 de sonda de fibra, y usarlo para el seguimiento in situ en el Monowave 400 R.
translation: machine
---

# Espectrómetro Raman Anton Paar Cora 5001

<div class="facts" markdown>

| | |
|---|---|
| **Para qué sirve** | Espectros Raman de polvos, líquidos y mezclas de reacción; seguimiento in situ de reacciones en el [Monowave 400 R](monowave.md) |
| **Versión del laboratorio** | **Cora 5001 Fiber**: el láser y la señal Raman viajan por una sonda de fibra. Compruebe en la etiqueta la longitud de onda de excitación (532, 785 o 1064 nm, o doble) |
| **Láser** | **Clase 3B** con la sonda de fibra — incluso con la sonda en su estación de acoplamiento |
| **Formación** | Obligatoria, incluida la instrucción de seguridad láser |
| **Manuales** | [Manuales y referencias](../manuals.md#cora) |

</div>

!!! danger "Láser clase 3B"
    - Nunca mire a la punta de la sonda ni al extremo de una fibra, y nunca apunte la sonda a personas ni a superficies reflectantes.
    - Use las gafas de protección láser de la longitud de onda en uso siempre que la sonda no esté encerrada.
    - Abrir la cámara de muestra o el puerto de fibra, pulsar **Stop** en la sonda o activar el enclavamiento apaga el láser inmediatamente.

## Nuestro equipo { #our-set-up }

<figure markdown>
![Nuestro Monowave 400 R (izquierda) y Cora 5001 (derecha). El regulador de aire comprimido está a la izquierda; las gafas de protección láser se guardan junto al Cora.](../assets/img/mw-cora.jpg){ loading=lazy }
<figcaption>Nuestro Monowave 400 R (izquierda) y Cora 5001 (derecha). El regulador de aire comprimido está a la izquierda; las gafas de protección láser se guardan junto al Cora.</figcaption>
</figure>

## Demostración { #demonstration }

<div class="demo" data-demo="cora">
--8<-- "cora.svg"
</div>

<div class="demo-steps" markdown>

1. **Encienda** con el interruptor del panel trasero. Espere unos **15 min** a que se equilibre la temperatura; puede medir durante el calentamiento, pero los ajustes están bloqueados hasta que termine.
2. **Inicie sesión** con su cuenta de usuario.
3. **Prepare la muestra.** Los polvos sensibles al aire van en un **vial de vidrio sellado llenado en la caja de guantes**. Golpee suavemente el vial sobre la mesa para compactar el polvo y eliminar bolsas de aire.
4. **Cargue la estación de acoplamiento.** Afloje el tornillo de fijación y deslice la sonda hasta el tope trasero. Coloque el portaviales con su vial en la estación y cierre la tapa.
5. **Active el láser.** Pulse **Enable** en la sonda (o el botón de rearme del enclavamiento del equipo). Se enciende el LED **Ready**.
6. **Enfoque.** Abra **Adjust Focus** y toque **Start** para ver un espectro en vivo. Deslice la sonda hacia la muestra hasta que la señal sea máxima, **apriete el tornillo de fijación** y toque **Stop**. El foco está unos milímetros por delante de la punta de la sonda.
7. **Configure la medida.** Menu ▸ **Single Measurement**: introduzca el nombre de la muestra, elija la longitud de onda (equipos de doble láser) y la potencia del láser (532 nm: encendido = 50 mW; 785/1064 nm: 0–450 mW, se recomiendan al menos 50 mW). **Auto Exposure** (máx. 10 s) es una buena primera aproximación.
8. **Ajustes avanzados (opcional).** Adquiera un fondo (elimina la luz ambiente), promedie N espectros para reducir el ruido, eliminación de rayos cósmicos (requiere N ≥ 3; desactívela con muestras fluorescentes) y corrección de línea base para la fluorescencia.
9. **Mida.** Toque **Measure**. El espectro aparece y se guarda con el nombre de la muestra; el software señala posibles problemas de calidad.
10. **Guarde y exporte.** Exporte o imprima el espectro, o use **Save as method** para repetir los mismos ajustes más adelante. Pulsar **Stop** en la sonda interrumpe la medida y desactiva el láser.
11. **Termine.** Retire su muestra y apague el equipo con el interruptor trasero (los datos se guardan al apagar).

</div>

## Consejos para materiales de baterías

- **Use la menor potencia láser que dé una señal útil.** Las muestras oscuras (composites con carbono, NMC) absorben mucho y pueden calentarse o descomponerse localmente, sobre todo a 532 nm. Registre dos espectros seguidos en el mismo punto: si difieren, baje la potencia.
- **El vidrio aporta señal.** Registre el vial vacío con *exactamente* los mismos ajustes (foco, potencia, exposición — desactive Auto Exposure) y úselo como **blanco personalizado** para restarlo.
- **La fluorescencia** da un fondo ancho y creciente; una longitud de onda mayor (785 o 1064 nm) la reduce.
- **Muestras heterogéneas:** mida varios puntos.
- Proteja la punta de la sonda y la muestra de la luz de la sala; los fluorescentes producen líneas estrechas que parecen picos Raman.

## Raman in situ en el Monowave 400 R

Cuando la sonda está montada en la guía del Monowave 400 R, siga la [guía del Monowave](monowave.md): ajuste la posición de la sonda para el tamaño del vial **con el láser desactivado**, inicie la medida Raman solo cuando la tapa giratoria se haya cerrado, y detenga la medida Raman y desactive el láser **antes** de parar el ensayo de microondas. Para una reacción, use una **serie temporal** (vea la guía de referencia del Cora) y normalice respecto a una banda que no cambie, como una banda del disolvente.
