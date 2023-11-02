import React from 'react';
import { ScrollProvider } from './pages/ScrollContext';
import HomePage from './pages/HomePage'; // Updated import path
import Skills from './pages/Skills'; // Updated import path

function App() {
  return (
    <ScrollProvider>
      <div>
        <HomePage />
        <Skills />
      </div>
    </ScrollProvider>
  );
}

export default App;

