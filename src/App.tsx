import './App.css';

function App() {
  return (
    <div
      className="min-h-screen md:flex-row"
      style={{ backgroundColor: 'var(--surface-ground)' }}
    >
      <div className="flex h-screen" style={{ backgroundColor: 'green' }}>
        <div className="min-w-64">Sidebar</div>
        <div className="flex-1 overflow-y-auto">
          <header
            className="z-999 drop-shadow-1 sticky top-0 flex w-full min-h-12"
            style={{ backgroundColor: 'yellow' }}
          >
            {/* <MenuBar /> */}
            Header
          </header>
          <main
          // className="flex flex-1 min-h-screen"
          // style={{ backgroundColor: 'var(--primary-color)' }}
          >
            <div
              className="card h-100vh-h-12"
              style={{ backgroundColor: 'orange' }}
            >
              {/* <Outlet /> */}
              Main Content
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
