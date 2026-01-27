import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

// ================================
// React App
// ================================
function App() {
  const [context, setContext] = useState(null)

  useEffect(() => {
    function handleShellContext(event) {
      console.log('📥 React recebeu contexto do Shell:', event.detail)
      setContext(event.detail)
    }

    window.addEventListener('shell:context:update', handleShellContext)

    return () => {
      window.removeEventListener('shell:context:update', handleShellContext)
    }
  }, [])

  function notifyShell() {
    window.dispatchEvent(
      new CustomEvent('react:action', {
        detail: {
          source: 'react-microfrontend',
          action: 'CTA_CLICK',
          timestamp: Date.now()
        }
      })
    )
  }

  return (
    <div style={{
      padding: '1rem',
      border: '2px dashed #6366f1',
      borderRadius: '8px'
    }}>
      <h3>Microfrontend React 🚀</h3>

      {context ? (
        <>
          <p><strong>Empresa:</strong> {context.empresa}</p>
          <p><strong>Estratégia:</strong> {context.estrategia}</p>
          <p><strong>Tema:</strong> {context.theme}</p>
        </>
      ) : (
        <p>Aguardando contexto do Shell…</p>
      )}

      <button onClick={notifyShell}>
        Enviar ação para o Shell
      </button>
    </div>
  )
}

// ================================
// Custom Element
// ================================
class ReactMicrofrontend extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this)
    root.render(<App />)
  }
}

customElements.define('react-microfrontend', ReactMicrofrontend)
