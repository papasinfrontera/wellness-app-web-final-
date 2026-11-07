# WELLNESS APP — QA del Sprint 4.5

**Base:** Sprint 4.4 aprobado, commit `07e0ae80416961c00d5e3a0bf4a6173282cf065d`.

## Alcance implementado
Seis paneles educativos adicionales, sin alterar los nueve paneles anteriores, el landing ni los estilos/scripts compartidos.

## Pruebas automatizadas (Chromium/Playwright)
- 1440, 390, 320 píxeles.
- 15 fichas × 3 tamaños: 45 aperturas, X visible y no obstruida, desplazamiento y cierre.
- Buscador: vitamina B12 en todas sus cuatro apariciones.
- Filtros: Todos, Básico y Completo.
- CTA `Hazte miembro` conduce a `../index.html#planes`; `#planes` existe en el landing.
- Errores JavaScript: cero.

**Limitación:** las pruebas se ejecutaron en navegador con HTML y CSS/JS compartidos incrustados en memoria (`set_content`), por restricciones del navegador de pruebas para rutas locales. El despliegue publicado también debe ser revisado visualmente antes de la aprobación final.

**Validación clínica:** pendiente de Consejo Médico-Científico.
