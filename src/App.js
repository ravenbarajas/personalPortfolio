import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage';
import TechSkill from './pages/TechSkill';
import PeopleSkill from './pages/PeopleSkill';
import Projects from './pages/Projects';


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
          </div>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;