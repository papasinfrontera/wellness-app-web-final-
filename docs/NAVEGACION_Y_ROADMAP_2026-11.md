# WELLNESS APP — Navegación definitiva y páginas pendientes
Actualización: 2026-11-10 | Rama: review/mentes-que-inspiran-v31

## Navegación unificada (aprobada)
- Home: acceso principal mediante logotipo en header y footer.
- 1. Cómo funciona — temporalmente `Home#como-funciona`; página independiente PENDIENTE.
- 2. Qué analizamos — `que-analizamos/index.html`; operativa.
- 3. Misión — `mision/index.html`; operativa.
- 4. Ciencia — `ciencia/index.html`; operativa.
- 5. Preguntas frecuentes — PENDIENTE; se muestra «Próximamente» sin enlace.
- 6. Planes — `Home#planes`; operativa.

«Qué incluye», «Beneficios» y «Experiencia de la app» se retiraron de header, drawer móvil y enlaces de navegación del footer. Sus secciones internas en Home no se eliminan. Los accesos comerciales «Iniciar sesión» y «Hazte miembro» se mantienen fuera del menú informativo.

## Implementación N1/N2
- Header, menú móvil y navegación footer homologados en las cuatro páginas actuales.
- `shared/wellness-shell.css` añade tratamientos coherentes de estados pendientes.
- FAQ pendiente no debe apuntar a una ruta vacía ni a un 404.
- Logotipo del header/footer conduce a Home.
- Los cambios están en rama de revisión; NO fusionar a `main` sin aprobación.

## Próximos sprints — ejecutar solo después de la revisión
### N3 — Página «Cómo funciona»
- Crear página independiente con diseño WELLNESS APP (contenido y prototipo a aprobación).
- Explicar el recorrido de usuario: análisis y resultados, interpretación basada en evidencia, hábitos y seguimiento, colaboración con profesionales.
- Priorizar lenguaje de bienestar y prevención, sin prometer diagnóstico ni sustituir al profesional.
- Al aprobarla, actualizar el enlace provisional a la nueva ruta en header, drawer y footer.
- Verificar responsive, enlaces, accesibilidad y SEO básico.

### N4 — Página «Preguntas frecuentes»
- Diseñar preguntas reales y agrupadas por temas: pruebas/indicadores, privacidad, planes, experiencia y profesionales.
- Usar acordeones accesibles con control de teclado y contenido no ambiguo.
- Aprobar textos antes de publicar, sobre todo temas clínicos, cumplimiento y operaciones disponibles.
- Al completar, sustituir «Próximamente» por el enlace efectivo en los tres menús.

## Criterios finales
- Una sola taxonomía, orden, terminología, estados y destinos en las cuatro páginas.
- Se conserva `main` intacta hasta la aprobación de integración.
- No crear destinos ficticios ni publicar funcionalidades no implementadas.
