import React from 'react';
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage'; // Updated import path
import AboutMeHeader from './pages/AboutMeHeader'; // Updated import path
import AboutMe from './pages/AboutMe'; // Updated import path
import './App.css'; // Import your CSS for styling

function App() {
  return (
    <ScrollProvider>
      <div className='gradient-background'>
        <div className='hompage-section'>
          <HomePage />
        </div>
        <div className='aboutme-section'>
          <AboutMeHeader />
          <AboutMe />
        </div>
        {/* <div className='skills-section'>
          <Skills />
        </div> */}
      </div>
    </ScrollProvider>
  );
}

export default App;

