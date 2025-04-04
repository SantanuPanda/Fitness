import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Function to wait for stylesheets to load before rendering
function waitForStylesheetsLoaded() {
  return new Promise(resolve => {
    const styleSheets = document.styleSheets;
    if (styleSheets.length > 0) {
      resolve();
      return;
    }

    // If no stylesheets yet, set up a listener
    const interval = setInterval(() => {
      if (document.styleSheets.length > 0) {
        clearInterval(interval);
        resolve();
      }
    }, 10);
  });
}

// Render the app only after stylesheets are loaded
waitForStylesheetsLoaded().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
