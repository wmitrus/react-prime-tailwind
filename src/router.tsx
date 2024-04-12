import { createBrowserRouter } from 'react-router-dom';
import { getRoutesConfig } from '@/RoutesConfig';

const routes = getRoutesConfig();
export const router = createBrowserRouter(routes);
