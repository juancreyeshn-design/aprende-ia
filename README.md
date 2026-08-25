# Aprende IA — Ruta profesional

Sitio estático (HTML/CSS/JS puro, sin dependencias) para incorporar la
Inteligencia Artificial al ejercicio de la contaduría pública, dirigido a
contadores colegiados. Misma mecánica de tus otros módulos —concepto →
práctica → evaluación—, más constancia de finalización, con progreso
guardado en el navegador (localStorage) y desbloqueo secuencial de módulos.

## Estructura

aprende-ia/, index.html (dashboard), certificado.html (constancia),
modulos/mod-1.html a mod-6.html, assets/estilo.css, assets/progreso.js,
assets/quiz.js, snippet-para-tu-pagina-principal.html.

## Activar GitHub Pages

En el repositorio ir a Settings, luego Pages, Source: Deploy from a
branch, Branch: main, carpeta / (root), Guardar. En 1-2 minutos el sitio
estara en https://juancreyeshn-design.github.io/aprende-ia/

## Enlazarlo desde la pagina principal

Abre snippet-para-tu-pagina-principal.html: contiene una tarjeta lista
para copiar y pegar dentro del div class cards de index.html principal.

## Notas tecnicas

No usa ninguna libreria externa ni CDN, excepto la fuente Nunito de
Google Fonts. El progreso y el nombre para la constancia se guardan
solo en el navegador de cada usuario (localStorage), no se envia ningun
dato a ningun servidor. Cada modulo requiere 70% o mas en la evaluacion
para desbloquear el siguiente. Para agregar una especializacion futura
(Excel + IA, etc.), crea el modulo correspondiente y quita proxima:true
de su entrada en el arreglo ESPECIALIZACIONES dentro de index.html.
