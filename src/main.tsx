import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
// import 'primereact/resources/themes/lara-dark-cyan/theme.css';

import { LayoutProvider } from './store/LayoutContext.tsx';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error">
      <PrimeReactProvider>
        <LayoutProvider>
          <App />
        </LayoutProvider>
      </PrimeReactProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
