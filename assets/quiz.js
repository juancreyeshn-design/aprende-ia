/* ============================================================
   Aprende IA — motor genérico de mini-juego (quiz)
   Usado por todos los módulos: renderiza preguntas de opción
   múltiple, califica, guarda el progreso y desbloquea el
   siguiente módulo si el puntaje es >= 70%.
   ============================================================ */

function iniciarQuiz(config) {
    const { preguntas, modId, contenedorId, resultadoId, botonSiguienteId } = config;
    const contenedor = document.getElementById(contenedorId);
    const resultadoDiv = document.getElementById(resultadoId);
    const btnSiguiente = botonSiguienteId ? document.getElementById(botonSiguienteId) : null;

  // Si el módulo ya estaba aprobado antes, refleja el estado al cargar.
  if (typeof estaCompletado === 'function' && estaCompletado(modId) && btnSiguiente) {
        btnSiguiente.removeAttribute('aria-disabled');
  }

  const respuestas = new Array(preguntas.length).fill(null);

  function render() {
        contenedor.innerHTML = '';
        preguntas.forEach((p, i) => {
                const div = document.createElement('div');
                div.className = 'pregunta';
                const opcionesHtml = p.opciones.map((op, j) =>
                          `<button type="button" class="opcion" data-pregunta="${i}" data-opcion="${j}">${op}</button>`
                                                          ).join('');
                div.innerHTML = `<p class="enunciado">${i + 1}. ${p.enunciado}</p><div class="opciones">${opcionesHtml}</div>`;
                contenedor.appendChild(div);
        });

      contenedor.querySelectorAll('.opcion').forEach(btn => {
              btn.addEventListener('click', () => {
                        const pIdx = Number(btn.dataset.pregunta);
                        const oIdx = Number(btn.dataset.opcion);
                        respuestas[pIdx] = oIdx;
                        contenedor.querySelectorAll(`.opcion[data-pregunta="${pIdx}"]`).forEach(b => b.classList.remove('seleccionada'));
                        btn.classList.add('seleccionada');
                        btn.style.borderColor = 'var(--navy-600)';
                        contenedor.querySelectorAll(`.opcion[data-pregunta="${pIdx}"]`).forEach(b => {
                                    if (b !== btn) b.style.borderColor = '';
                        });
                        actualizarBotonCalificar();
              });
      });

      // Botón calificar
      const btnCalificar = document.createElement('button');
        btnCalificar.type = 'button';
        btnCalificar.className = 'btn';
        btnCalificar.id = 'btn-calificar';
        btnCalificar.textContent = 'Calificar';
        btnCalificar.style.marginTop = '10px';
        btnCalificar.disabled = true;
        btnCalificar.style.opacity = '.5';
        btnCalificar.addEventListener('click', calificar);
        contenedor.appendChild(btnCalificar);
  }

  function actualizarBotonCalificar() {
        const btnCalificar = document.getElementById('btn-calificar');
        const todasRespondidas = respuestas.every(r => r !== null);
        if (btnCalificar) {
                btnCalificar.disabled = !todasRespondidas;
                btnCalificar.style.opacity = todasRespondidas ? '1' : '.5';
        }
  }

  function calificar() {
        let correctas = 0;
        preguntas.forEach((p, i) => {
                const botones = contenedor.querySelectorAll(`.opcion[data-pregunta="${i}"]`);
                botones.forEach(b => {
                          b.disabled = true;
                          const oIdx = Number(b.dataset.opcion);
                          if (oIdx === p.correcta) b.classList.add('correcta');
                          else if (oIdx === respuestas[i]) b.classList.add('incorrecta');
                });
                if (respuestas[i] === p.correcta) correctas++;
        });

      const puntaje = Math.round((correctas / preguntas.length) * 100);
        const aprobado = puntaje >= 70;

      resultadoDiv.classList.add('mostrar');
        resultadoDiv.classList.toggle('aprobado', aprobado);
        resultadoDiv.classList.toggle('reprobado', !aprobado);

      if (aprobado) {
              if (typeof marcarCompletado === 'function') marcarCompletado(modId, puntaje);
              resultadoDiv.innerHTML = `✅ ¡Aprobado con ${puntaje}%! (${correctas}/${preguntas.length} correctas). Módulo completado.`;
              if (btnSiguiente) btnSiguiente.removeAttribute('aria-disabled');
      } else {
              resultadoDiv.innerHTML = `📌 Obtuviste ${puntaje}% (${correctas}/${preguntas.length} correctas). Necesitas 70% o más — revisa el concepto arriba e inténtalo de nuevo.`;
              const btnReintentar = document.createElement('button');
              btnReintentar.type = 'button';
              btnReintentar.className = 'btn';
              btnReintentar.style.marginTop = '10px';
              btnReintentar.style.background = '#b91c1c';
              btnReintentar.textContent = 'Intentar de nuevo';
              btnReintentar.addEventListener('click', () => {
                        respuestas.fill(null);
                        resultadoDiv.classList.remove('mostrar', 'reprobado');
                        render();
              });
              resultadoDiv.appendChild(document.createElement('br'));
              resultadoDiv.appendChild(btnReintentar);
      }

      resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const btnCalificar = document.getElementById('btn-calificar');
        if (btnCalificar) btnCalificar.remove();
  }

  render();
}
