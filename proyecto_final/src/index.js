import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './PerfilConductor';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Envuelve la aplicación en BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();

