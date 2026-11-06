# Auditoría de cierre — Sprint 4.4

## Alcance
Cambio único al selector `.wa-detail-overlay` de la subpágina: `z-index: 900` a `2400`. Corrige la superposición del menú fijo por encima de la X de los cuatro paneles originales. Las otras cinco fichas ya tenían prioridad equivalente.

## Pruebas de interacción en Chromium
- **9 fichas × 3 anchos (1440, 390 y 320 px) = 27 casos**.
- La X es visible y accesible mediante hit test en todos los casos.
- Al desplazarse al final del texto, la X permanece en la misma posición.
- El clic en X cierra el panel.
- **0 errores JavaScript** en estas pruebas.

## Verificación de integridad
`index.html` y todos los archivos de `shared/` son idénticos al Sprint 4.4 anterior. La única modificación al HTML del catálogo es el valor `z-index` descrito arriba. El contenido textual, las fichas, la búsqueda y el footer permanecen sin cambios.

Las pruebas verificaron el control de cierre. No sustituyen una revisión final de todas las rutas desplegadas en un alojamiento real.
