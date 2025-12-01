
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add preload class to prevent transitions on initial load
document.documentElement.classList.add('preload');

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove preload class after page has loaded
window.addEventListener('load', () => {
  setTimeout(() => {
    document.documentElement.classList.remove('preload');
  }, 100);
});
