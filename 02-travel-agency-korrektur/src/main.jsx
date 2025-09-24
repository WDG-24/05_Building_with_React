import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// TODO: BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
