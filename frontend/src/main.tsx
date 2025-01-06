import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from "primereact/api";
import 'react-international-phone/style.css';




import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
  </StrictMode>,
)
