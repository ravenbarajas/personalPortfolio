import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage';
import AboutMeHeader from './pages/AboutMeHeader';
import AboutMe from './pages/AboutMe';

import './App.css';

function App() {
  return (
    <ScrollProvider>
      <Router>
        <div className='gradient-background'>
          <div className='hompage-section'>
            <HomePage />
          </div>
          <div className='aboutmeheader-section'>
            <AboutMeHeader />
          </div>
          <div className='aboutme-section'>
            <AboutMe />
          </div>
        </div>
      </Router>
    </ScrollProvider>
  );
}

export default App;