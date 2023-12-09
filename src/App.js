import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage';
import TechSkill from './pages/TechSkill';
import PeopleSkill from './pages/PeopleSkill';
import Projects from './pages/Projects';
import AcademicProjects from './pages/AcademicProjects';
import WorkProjects from './pages/WorkProjects';
import PersonalProjects from './pages/PersonalProjects';
import Education from './pages/Education';

import './App.css';

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className='gradient-background'>
          <div className='hompage-section'>
            <HomePage />
            <TechSkill />
            <PeopleSkill />
            <Projects />
            <Education />
          </div>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;