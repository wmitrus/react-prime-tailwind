import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';

// import { Button } from 'primereact/button';

// import { MenuBar } from './Layout/Navbar';
// import { SidebarBody, SidebarHeader } from './Layout/Sidebar';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
