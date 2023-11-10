import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage';
import AboutMeHeader from './pages/AboutMeHeader';
import AboutMe from './pages/AboutMe';

import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import './App.css';

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className='gradient-background'>
          <div className='hompage-section'>
            <HomePage />
          </div>
          <div className='aboutme-section'>
            <AboutMeHeader />
            <Routes>
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;
