import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import ThemeContextProvider from './contexts/ThemeContext.jsx';
import BookingContextProvider from './contexts/BookingContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BookingContextProvider>
    </BrowserRouter>
  </StrictMode>
);
