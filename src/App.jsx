import './App.css'
import { Routes, Route } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation'
import Navigation from './Components/Navigation'
import Homepage from './Components/homepage';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      
    </>
  )
}

export default App
