// AboutMe.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './AboutMe.css';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

function AboutMe() {
  return (
    <div className="aboutme-section">
      <Routes>
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="/aboutme/*" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default AboutMe;
