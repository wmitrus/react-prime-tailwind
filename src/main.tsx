import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';

import { LayoutProvider } from './store/LayoutContext.tsx';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';

const queryClient: QueryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error">
      <PrimeReactProvider>
        <LayoutProvider>
          <QueryClientProvider client={queryClient}>
            {/* <div className="App"> */}
            <App />

            {/* </div> */}
            <ReactQueryDevtools />
          </QueryClientProvider>
        </LayoutProvider>
      </PrimeReactProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
