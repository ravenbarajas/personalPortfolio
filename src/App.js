import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage';
import TechSkill from './pages/TechSkill';
import PeopleSkill from './pages/PeopleSkill';


import './App.css';

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className='gradient-background'>
          <div className='hompage-section'>
            <HomePage />
          </div>
          <div>
            <TechSkill />
          </div>
          <div>
            <PeopleSkill />
          </div>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;