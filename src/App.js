import './App.css';
import { Navbar } from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Work from './pages/Work';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='main'>
          <Routes>
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
