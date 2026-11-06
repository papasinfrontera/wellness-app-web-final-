# WELLNESS APP — Sprint 4.4 · Auditoría de las cinco fichas

## Cambios autorizados y realizados
- Se añadieron exclusivamente cinco fichas: Hierro en sangre, Saturación de hierro, HCM, CHCM y VCM.
- Cada ficha reutiliza el componente lateral de las cuatro anteriores, con las secciones «¿Qué es?» y «¿Por qué es importante?», conceptos aprobados y CTA «Hazte miembro».
- Se incluyó una corrección de superposición restringida a **estas cinco fichas nuevas** para que el botón de cierre no quede detrás del encabezado fijo en móvil.
- Saturación de hierro aparece en dos categorías, pero abre una única ficha.

## Integridad del Sprint 4.3
- index.html principal: SHA-256 idéntico a la versión de footer único verificada.
- Archivos CSS y JavaScript compartidos del menú y footer: idénticos, sin modificaciones.
- Las cuatro fichas existentes: no se ha cambiado su contenido ni controladores.
- La única modificación en el catálogo es un bloque añadido antes del JavaScript compartido.

## Pruebas
- Interacciones de las cinco nuevas fichas en 1440 px, 390 px y 320 px, con Chromium.
- Apertura, lectura, desplazamiento interno, cierre con Escape, recuperación de búsqueda y CTA visible: aprobados.
- Buscador sensible a texto escrito, filtros Todos/Básico/Completo, caso sin resultados y limpiar: aprobados.
- Ficha Ferritina original: prueba de regresión aprobada.
- Ausencia de errores JavaScript en la batería funcional: comprobada.
- El destino de CTA `../index.html#planes` corresponde a un ancla existente en el landing.
- Capturas visuales obtenidas con HTML y CSS reales en 1440 px y 390 px.
- Footer de ambas páginas: mismo contenido; estilos compartidos idénticos a la versión previamente verificada.

## Límites de la prueba
- Las pruebas funcionales se ejecutaron en un entorno aislado de Chromium con los componentes del catálogo, porque este entorno restringe la navegación al servidor local.
- La comprobación de enlaces entre páginas se realizó por rutas/IDs y la versión web de revisión debe validarse en el navegador del usuario.
- El contenido es educativo. Los rangos, unidades y ofertas de laboratorio necesitan la validación científica y comercial específica de WELLNESS APP antes de lanzar el servicio.
