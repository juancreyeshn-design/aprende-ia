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
