// ================================
// Microfrontend Shell — main.js
// ================================

// Container onde os microfrontends são montados
const container = document.getElementById('mf-container')

// ================================
// Loader de Microfrontends
// ================================
function loadMicrofrontend(name) {
  container.innerHTML = ''

  const elementName = `${name}-microfrontend`
  const el = document.createElement(elementName)

  // Simula carregamento remoto (lazy / async)
  setTimeout(() => {
    container.appendChild(el)
    console.log(`🚀 Microfrontend ${name} montado`)
  }, 300)
}

// Tabs de navegação
document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    loadMicrofrontend(btn.dataset.mf)
  })
})

// Carrega o primeiro por padrão
loadMicrofrontend('playground')

// ================================
// EVENT BUS — Contrato ÚNICO
// ================================
function emitToMicrofrontends(eventName, payload) {
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: payload
    })
  )

  console.log(`📤 Evento emitido: ${eventName}`, payload)
}

// ================================
// CONTEXTO GLOBAL (Shell → MFs)
// ================================
function sendShellContext() {
  emitToMicrofrontends('shell:context:update', {
    user: {
      name: 'Recruiter 👀',
      role: 'Tech Lead'
    },
    empresa: 'Relier',
    estrategia: 'Expansão Digital',
    theme: 'light',
    timestamp: Date.now()
  })
}

// Dispara após o carregamento inicial
setTimeout(sendShellContext, 1000)

// ================================
// ESCUTA AÇÕES DOS MICROFRONTENDS
// ================================
window.addEventListener('react:action', event => {
  console.log('📥 Shell recebeu ação do React:', event.detail)
})

window.addEventListener('angular:action', event => {
  console.log('📥 Shell recebeu ação do Angular:', event.detail)
})
