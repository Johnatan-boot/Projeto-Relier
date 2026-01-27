import { useEffect, useState } from 'react';

function App() {
  const [context, setContext] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      console.log('📥 Contexto recebido no React:', event.detail);
      setContext(event.detail);
    };

    window.addEventListener('shell:context-change', handler);

    return () => {
      window.removeEventListener('shell:context-change', handler);
    };
  }, []);

  return (
    <div style={{
      padding: '1.5rem',
      border: '2px dashed #4f46e5',
      borderRadius: '12px'
    }}>
      <h2>Microfrontend React</h2>

      {!context && <p>Aguardando dados do Shell...</p>}

      {context && (
        <ul>
          <li><strong>Empresa:</strong> {context.empresa}</li>
          <li><strong>Estratégia:</strong> {context.estrategia}</li>
          <li><strong>Status:</strong> {context.status}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
