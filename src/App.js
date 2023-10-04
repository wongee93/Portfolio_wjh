import './App.css';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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
