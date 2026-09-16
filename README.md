# Aprende IA — Ruta profesional

Sitio estático (HTML/CSS/JS puro, sin dependencias) para incorporar la
Inteligencia Artificial al ejercicio de la contaduría pública, dirigido a
contadores colegiados. Misma mecánica de tus otros módulos —concepto →
práctica → evaluación—, más constancia de finalización, con progreso
guardado en el navegador (localStorage) y desbloqueo secuencial de módulos.

## Estructura

aprende-ia/, index.html (dashboard), certificado.html (constancia),
modulos/mod-1.html a mod-26.html, assets/estilo.css, assets/progreso.js,
assets/quiz.js, snippet-para-tu-pagina-principal.html.

Módulos 1-6: fundamentos, ingeniería de prompts, ChatGPT, Claude, Gemini
e IA aplicada a la profesión. Módulos 7-12 (especializaciones avanzadas,
antes "próximamente"): Excel + IA (planillas, dashboards y conciliaciones
generadas por IA), Automatización de reportes (flujos que encadenan
varias IA -investigación, redacción y diseño- para acelerar cierres e
informes ejecutivos), Imágenes y video con IA (de una foto real a un
flyer comercial, y de un prompt de texto a un video corto profesional
con Veo o Grok), Presentaciones con IA (de un briefing en texto a una
presentación profesional completa, con la estructura de 8 diapositivas
que funciona para cualquier tipo de contenido), Investigación con IA
(usar la IA como motor de investigación con 3 niveles de profundidad y
un método de profundización para llegar a aprendizajes accionables),
Redacción con IA (guiones, copies de venta, leyendas para redes y
anuncios pagados, con los 4 elementos que separan un texto genérico de
uno que convierte), Dashboards con Lovable (transformar una hoja de
cálculo en una app profesional alojada, con área de carga para
actualizar datos y pantalla de acceso, en 3 prompts y sin código) y
Landing pages con IA (la fórmula "Claude piensa, Lovable construye":
identidad, copy y embudo, sistema de diseño y prompt final, en 4
etapas, para páginas de destino que convierten) y Kanban con Lovable
(tablero de tareas con columnas de estado, control de tiempo por
tarea y resumen de productividad, en 2 prompts y sin código, adaptable
a freelancers, creadores de contenido, equipos o uso personal) y CRM
de ventas con Lovable (pipeline visual de 6 etapas con alerta de
seguimiento vencido, historial de contacto, valor del pipeline y
botón directo a WhatsApp en cada lead, en 2 prompts y sin código) y
Sistema financiero avanzado con Lovable (flujo de caja proyectado,
DRE simplificada, previsión de ingresos y alertas financieras
inteligentes, en 3 prompts y sin código, adaptable a servicios,
comercio, freelancers o finanzas personales), Agentes de IA (pasar
de usar la IA como herramienta a tener IA como agente: Claude
conectado a Gmail para gestionar correo, Claude como analista de
campañas, y GPTs personalizados en ChatGPT para control financiero,
guiones y embudo de ventas, más agentes listos para contratos,
exámenes médicos, conversaciones tensas y presupuestos) y
Automatizaciones con n8n (flujos "cuando pase X, haz Y" que se
ejecutan solos: describes la automatización a Claude, Claude genera
el JSON del flujo y lo pegas en n8n -gratuito, 400+ integraciones,
sin código- para activarlo; con ejemplos de correos de clientes,
leads de Instagram, reporte semanal de ventas y aviso de seguimiento
en el CRM) y Tokens y costos de la IA (qué es un token, por qué la
salida cuesta de 3 a 5 veces más que la entrada, qué es la ventana
de contexto de cada modelo y la tabla de precios reales de Claude,
ChatGPT y Gemini por millón de tokens, con ejemplos de cuánto cuesta
en dólares analizar un contrato o generar un reporte) y APIs de IA
(qué es una API con la analogía del restaurante, cómo crear y
proteger tu API key en Claude, ChatGPT y Gemini, cuál API usar según
la tarea -profundidad, alto volumen, tiempo real o costo cero- y el
flujo completo de una llamada a la API paso a paso) y Usando API sin
programar (comparativa de 5 herramientas visuales -n8n, Make, Zapier,
Google Sheets + Apps Script y Typebot- para conectar la IA a tu
trabajo sin escribir código, con 5 casos reales listos para adaptar
-clasificar correos por urgencia, resumir reuniones, responder
reseñas, una función =CLAUDE() dentro de Google Sheets y un chatbot
de calificación de leads- y la guía paso a paso para conectar tu API
key como credencial) y APIs especializadas (8 APIs para tareas
puntuales -Whisper para transcribir audio, Vision para leer facturas
y documentos fotografiados, ElevenLabs para voz humana, Serper para
buscar en internet en tiempo real, lectura nativa de PDFs para
contratos, DeepL para traducción, DALL-E 3 para generar imágenes y
Claude para analizar el sentimiento de cientos de reseñas a la vez-
con el prompt listo para cada caso de uso) y Asistente en WhatsApp
(cómo conectar WhatsApp a la API de Claude vía n8n con Evolution API
para tener un asistente real que responde por mensaje -de
productividad, ventas, contenido o control financiero personal- con
el system prompt de cada tipo, la guía de configuración paso a paso
y los errores comunes a evitar) y Conectores de Claude (los 8
conectores oficiales -Gmail, Google Drive, Google Calendar, Slack,
GitHub, Jira, Confluence y Notion- que dan a Claude acceso directo a
tus herramientas bajo el protocolo MCP, cómo activar cada uno, cómo
combinarlos en una sola instrucción y los errores comunes a evitar) y
Skills: enseña una vez (la diferencia entre una skill y un system
prompt, los 5 tipos de skill que hay que configurar -contexto del
negocio, tono de voz y estilo, formato de entrega, público objetivo y
límites y restricciones- con ejemplo práctico para cada uno, dónde
configurarlas en Claude y en ChatGPT, la regla de oro de la
especificidad y los errores comunes a evitar).
Contenido inspirado en el curso Educly - Ascensión IA.

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
para desbloquear el siguiente. Para agregar una especializacion futura,
crea el modulo correspondiente en modulos/, agregalo a MODULOS_IA en
assets/progreso.js y quita proxima:true (agregando su modId) en el
arreglo ESPECIALIZACIONES dentro de index.html.
