# WELLNESS APP — Sitio web y catálogo «Qué analizamos»

Versión revisable: Sprint 4.4 con nueve fichas y cierre X visible en escritorio y móvil.

## Estructura

- `index.html`: landing principal.
- `que-analizamos/index.html`: catálogo con buscador, filtros, nueve fichas y CTA «Hazte miembro».
- `shared/footer.css`, `shared/footer-source.html`, `shared/build-footer.py`: pie corporativo compartido y fuente para regenerarlo.
- `shared/wellness-shell.css`, `shared/wellness-shell.js`: encabezado, menú y navegación compartidos.
- `CAMBIO_CIERRE_X.json`, `AUDITORIA_CIERRE_X.json`: alcance y resultados de la última corrección.
- `CAPTURA_X_FERRITINA_1440.png` y `CAPTURA_X_FERRITINA_390.png`: comprobaciones visuales.

## Abrir y navegar

Descomprime o clona el proyecto conservando su estructura. Abre `index.html` en Chrome/Opera, o sirve la carpeta desde un servidor web estático. En el menú, selecciona «Qué analizamos». Escribe un término, abre una ficha, comprueba la X y el botón «Hazte miembro».

Ejemplo con Python (si lo tienes instalado):

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000/`.

## Publicación y control de versiones

Se recomienda un repositorio de GitHub **privado** `papasinfrontera/wellness-app-web` durante el desarrollo, separado de `wellness-whitepaper`. Cada entrega aprobada debe conservarse mediante un commit y una etiqueta (tag): `sprint-4.4`, `sprint-4.4-cierre-x`.

No subir contraseñas, claves, tokens, datos médicos personales ni archivos `.env`.

## Nota científica

Las fichas son contenido educativo y deben pasar revisión científica antes de considerarse material clínico validado o catálogo comercial confirmado.

## Sprint 4.5 — versión para revisión
- Landing: `index.html` (sin cambios respecto de Sprint 4.4).
- Catálogo: `que-analizamos/index.html` (15 fichas educativas en paneles laterales).
- Búsqueda, filtros por plan, X persistente, Escape, CTA a `#planes` verificados.
- Véase `QA/INFORME_QA_SPRINT4_5.json` y `CHANGELOG.md`.
- **Sin validación clínica:** requiere revisión posterior por Consejo Médico-Científico.
