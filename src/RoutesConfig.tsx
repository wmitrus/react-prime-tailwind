import { RouteObject } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import NotFound from '@/Layout/NotFound';
import Page from './Layout/Page';
import Home from './Pages/Home';
import PrimeTablePage from './Pages/PrimeTablePage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getRoutesConfig(_queryClient?: QueryClient): RouteObject[] {
  const routesConfig: RouteObject[] = [
    {
      path: '/',
      element: <Page />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/demo',
          element: <PrimeTablePage />,
          children: [
            { index: true, element: <Home /> },
            {
              path: 'table',
              element: <PrimeTablePage />,
            },
          ],
        },
      ],
    },
  ];

  return routesConfig;
}
