/* ============================================================
   Aprende IA — sistema de progreso (100% local, sin conexión)
   Guarda el avance del usuario en localStorage del navegador.
   No se envía ningún dato a ningún servidor.
   ============================================================ */

const CLAVE_PROGRESO = 'aprendeIA_progreso_v1';
const CLAVE_NOMBRE = 'aprendeIA_nombre_v1';

// Configuración de la ruta de módulos: orden, título corto, puntos, bloque y color.
const MODULOS_IA = [
  { id: 'mod1', numero: 1, titulo: '¿Qué es la IA?',         archivo: 'modulos/mod-1.html', xp: 50,  color: '#1d4ed8', bloque: 'Fundamentos' },
  { id: 'mod2', numero: 2, titulo: 'Ingeniería de Prompts',  archivo: 'modulos/mod-2.html', xp: 60,  color: '#1d4ed8', bloque: 'Fundamentos' },
  { id: 'mod3', numero: 3, titulo: 'ChatGPT',                archivo: 'modulos/mod-3.html', xp: 60,  color: '#0d9488', bloque: 'Herramientas de IA' },
  { id: 'mod4', numero: 4, titulo: 'Claude',                 archivo: 'modulos/mod-4.html', xp: 60,  color: '#0d9488', bloque: 'Herramientas de IA' },
  { id: 'mod5', numero: 5, titulo: 'Gemini',                 archivo: 'modulos/mod-5.html', xp: 60,  color: '#0d9488', bloque: 'Herramientas de IA' },
  { id: 'mod6', numero: 6, titulo: 'IA en tu profesión',     archivo: 'modulos/mod-6.html', xp: 80,  color: '#b4881f', bloque: 'Aplicación profesional' },
  { id: 'mod7', numero: 7, titulo: 'Excel + IA',             archivo: 'modulos/mod-7.html', xp: 90,  color: '#1e7145', bloque: 'Especialización avanzada' },
  { id: 'mod8', numero: 8, titulo: 'Automatización de reportes', archivo: 'modulos/mod-8.html', xp: 100, color: '#5b6472', bloque: 'Especialización avanzada' },
  { id: 'mod9', numero: 9, titulo: 'Imágenes y video con IA',    archivo: 'modulos/mod-9.html', xp: 110, color: '#c2410c', bloque: 'Especialización avanzada' },
  { id: 'mod10', numero: 10, titulo: 'Presentaciones con IA',    archivo: 'modulos/mod-10.html', xp: 100, color: '#7c3aed', bloque: 'Especialización avanzada' },
  { id: 'mod11', numero: 11, titulo: 'Investigación con IA',     archivo: 'modulos/mod-11.html', xp: 100, color: '#0e7490', bloque: 'Especialización avanzada' },
  { id: 'mod12', numero: 12, titulo: 'Redacción con IA',         archivo: 'modulos/mod-12.html', xp: 100, color: '#be123c', bloque: 'Especialización avanzada' },
  { id: 'mod13', numero: 13, titulo: 'Dashboards con Lovable',   archivo: 'modulos/mod-13.html', xp: 100, color: '#db2777', bloque: 'Especialización avanzada' },
  { id: 'mod14', numero: 14, titulo: 'Landing pages con IA',     archivo: 'modulos/mod-14.html', xp: 100, color: '#0369a1', bloque: 'Especialización avanzada' },
  { id: 'mod15', numero: 15, titulo: 'Kanban con Lovable',       archivo: 'modulos/mod-15.html', xp: 100, color: '#4f46e5', bloque: 'Especialización avanzada' },
  { id: 'mod16', numero: 16, titulo: 'CRM de ventas con Lovable', archivo: 'modulos/mod-16.html', xp: 100, color: '#0f766e', bloque: 'Especialización avanzada' },
  { id: 'mod17', numero: 17, titulo: 'Sistema financiero avanzado', archivo: 'modulos/mod-17.html', xp: 100, color: '#9333ea', bloque: 'Especialización avanzada' },
  { id: 'mod18', numero: 18, titulo: 'Agentes de IA',             archivo: 'modulos/mod-18.html', xp: 100, color: '#15803d', bloque: 'Especialización avanzada' },
  { id: 'mod19', numero: 19, titulo: 'Automatizaciones con n8n',  archivo: 'modulos/mod-19.html', xp: 100, color: '#dc2626', bloque: 'Especialización avanzada' },
  { id: 'mod20', numero: 20, titulo: 'Tokens y costos de la IA', archivo: 'modulos/mod-20.html', xp: 100, color: '#ea580c', bloque: 'Especialización avanzada' },
  { id: 'mod21', numero: 21, titulo: 'APIs de IA',               archivo: 'modulos/mod-21.html', xp: 100, color: '#0284c7', bloque: 'Especialización avanzada' },
  { id: 'mod22', numero: 22, titulo: 'Usando API sin programar', archivo: 'modulos/mod-22.html', xp: 100, color: '#a21caf', bloque: 'Especialización avanzada' },
  { id: 'mod23', numero: 23, titulo: 'APIs especializadas', archivo: 'modulos/mod-23.html', xp: 90, color: '#0891b2', bloque: 'Especialización avanzada' },
  { id: 'mod24', numero: 24, titulo: 'Asistente en WhatsApp', archivo: 'modulos/mod-24.html', xp: 99, color: '#ca8a04', bloque: 'Especialización avanzada' },
  { id: 'mod25', numero: 25, titulo: 'Conectores de Claude', archivo: 'modulos/mod-25.html', xp: 109, color: '#4338ca', bloque: 'Especialización avanzada' },
  { id: 'mod26', numero: 26, titulo: 'Skills: enseña una vez', archivo: 'modulos/mod-26.html', xp: 105, color: '#6d28d9', bloque: 'Especialización avanzada' },
  { id: 'mod27', numero: 27, titulo: 'RTCFR: prompt perfecto', archivo: 'modulos/mod-27.html', xp: 100, color: '#059669', bloque: 'Especialización avanzada' },
  ];

function obtenerProgreso() {
    try {
          const raw = localStorage.getItem(CLAVE_PROGRESO);
          return raw ? JSON.parse(raw) : {};
    } catch (e) {
          return {};
    }
}

function guardarProgresoRaw(obj) {
    try {
          localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(obj));
    } catch (e) {
          /* almacenamiento no disponible (modo privado, etc.) — se ignora */
    }
}

// Marca un módulo como completado con el puntaje obtenido en el mini-juego (0-100).
function marcarCompletado(modId, puntaje) {
    const progreso = obtenerProgreso();
    const anterior = progreso[modId];
    progreso[modId] = {
          completado: true,
          puntaje: Math.max(puntaje, anterior && anterior.puntaje ? anterior.puntaje : 0),
          fecha: new Date().toISOString(),
    };
    guardarProgresoRaw(progreso);
}

function estaCompletado(modId) {
    const progreso = obtenerProgreso();
    return !!(progreso[modId] && progreso[modId].completado);
}

// El módulo 1 siempre está desbloqueado; los demás requieren el anterior completo.
function estaDesbloqueado(modId) {
    const idx = MODULOS_IA.findIndex(m => m.id === modId);
    if (idx <= 0) return true;
    const anterior = MODULOS_IA[idx - 1];
    return estaCompletado(anterior.id);
}

function xpTotalGanado() {
    const progreso = obtenerProgreso();
    return MODULOS_IA.reduce((sum, m) => sum + (progreso[m.id] && progreso[m.id].completado ? m.xp : 0), 0);
}

function xpTotalPosible() {
    return MODULOS_IA.reduce((sum, m) => sum + m.xp, 0);
}

function modulosCompletadosCount() {
    return MODULOS_IA.filter(m => estaCompletado(m.id)).length;
}

function porcentajeCompletado() {
    const total = MODULOS_IA.length;
    return Math.round((modulosCompletadosCount() / total) * 100);
}

function siguienteModuloPendiente() {
    return MODULOS_IA.find(m => !estaCompletado(m.id)) || null;
}

// Nivel de dominio según módulos completados (para mostrarlo en la barra superior).
function nivelActual() {
    const hechos = modulosCompletadosCount();
    const total = MODULOS_IA.length;
    if (hechos === 0) return 'Sin iniciar';
    if (hechos === total) return 'Certificado';
    if (hechos >= 5) return 'Avanzado';
    if (hechos >= 3) return 'Intermedio';
    return 'Iniciado';
}

// Actualiza una barra de progreso en la página si existen los elementos
// con id="progreso-fill" y "progreso-txt".
function pintarBarraProgreso() {
    const fill = document.getElementById('progreso-fill');
    const txt = document.getElementById('progreso-txt');
    if (!fill && !txt) return;
    const pct = porcentajeCompletado();
    const hechos = modulosCompletadosCount();
    if (fill) fill.style.width = pct + '%';
    if (txt) txt.textContent = `${hechos} de ${MODULOS_IA.length} módulos · ${xpTotalGanado()} / ${xpTotalPosible()} pts`;
}

// Nombre guardado para la constancia de finalización.
function obtenerNombreConstancia() {
    try {
          return localStorage.getItem(CLAVE_NOMBRE) || '';
    } catch (e) {
          return '';
    }
}

function guardarNombreConstancia(nombre) {
    try {
          localStorage.setItem(CLAVE_NOMBRE, nombre);
    } catch (e) {
          /* ignorar */
    }
}

// Permite reiniciar todo el progreso (botón opcional).
function reiniciarProgreso() {
    if (confirm('¿Seguro que quieres borrar tu progreso guardado en este navegador?')) {
          localStorage.removeItem(CLAVE_PROGRESO);
          location.reload();
    }
}
