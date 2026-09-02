import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#030712', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#D4AF37' }}>Xtreem Infosys</h1>
          <h2>Something went wrong while rendering the page.</h2>
          <pre style={{ background: '#111', padding: '15px', borderRadius: '8px', color: '#ff6b6b' }}>
            {String(this.state.error)}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{ padding: '10px 20px', background: '#D4AF37', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}