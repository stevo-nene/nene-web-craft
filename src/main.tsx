
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

// Add global styles for 3D effects
const style = document.createElement('style');
style.textContent = `
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-style {
    transform-style: preserve-3d;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
