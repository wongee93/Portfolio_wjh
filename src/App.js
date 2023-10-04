import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <div className='app-header-global'></div>
        <div className='app-header-local'></div>
      </nav>
      <div className='main'>
        <div className='container'>
          <div className='data-view-container'>
            <div className='layout-sidebar'></div>
            <div className='layout-main'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
