import './App.css';
import { Button } from 'primereact/button';
import TableTest from './demo/TableTest';
import { MenuBar } from './Layout/Navbar';
import { SidebarBody, SidebarHeader } from './Layout/Sidebar';

function App() {
  return (
    <div
      className="min-h-screen md:flex-row"
      style={{ backgroundColor: 'var(--surface-ground)' }}
    >
      <div className="flex h-screen">
        <div className="min-w-64 border-r-2 border-slate-600">
          <SidebarHeader
            className="h-18"
            style={{ backgroundColor: 'var(--surface-100)' }}
          />
          <SidebarBody className="px-2" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <header className="z-999 drop-shadow-1 sticky top-0 flex w-full min-h-12">
            <MenuBar />
          </header>
          <main
          // className="flex flex-1 min-h-screen"
          // style={{ backgroundColor: 'var(--primary-color)' }}
          >
            <div className="card h-100vh-h-12 p-2">
              {/* <Outlet /> */}
              Main Content
              <Button label="Check" icon="pi pi-check" />
              <Button label="Primary" />
              <Button label="Secondary" severity="secondary" />
              <Button label="Success" severity="success" />
              <Button label="Small" icon="pi pi-check" size="small" />
              <Button label="Normal" icon="pi pi-check" />
              <Button label="Large" icon="pi pi-check" size="large" />
              <TableTest />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
