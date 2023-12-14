import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AcademicProjects from './AcademicProjects';
import WorkProjects from './WorkProjects';
import PersonalProjects from './PersonalProjects';
import './Projects.css';
import './AcademicProjects.css';
import './WorkProjects.css';
import './PersonalProjects.css';

function Projects() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Default navigation only on component mount
    if (selectedBtn === 0) {
      navigate('/projects/academic');
    }
  }, [navigate, selectedBtn]);

  useEffect(() => {
    // After rendering, add the 'active' class to trigger the fade-in animation
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach((element) => {
        element.classList.add('active');
      });
    }, 100);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="projects-container">
      <div className='projects-column'>
        <div className="projects-header">
              <div className="projects-heading">
                  <p>Projects</p>
              </div>
              <div className="projects-subheading">
                  <p>Diverse practical applications.</p>
              </div>
          </div>
        <div className="projects-section-nav-container">
          <div className="projects-section-nav">
          <Link
              to="/projects/academic"
              className={`projects-nav-btn ${selectedBtn === 0 ? 'active' : ''}`}
              onClick={() => setSelectedBtn(0)}
            >
              <p>Academic</p>
            </Link>
            <Link
              to="/projects/work"
              className={`projects-nav-btn ${selectedBtn === 1 ? 'active' : ''}`}
              onClick={() => setSelectedBtn(1)}
            >
              <p>Work</p>
            </Link>
            <Link
              to="/projects/personal"
              className={`projects-nav-btn ${selectedBtn === 2 ? 'active' : ''}`}
              onClick={() => setSelectedBtn(2)}
            >
              <p>Personal</p>
            </Link>
          </div>
        </div>
        <div className='projects-section fade-in'>
          <Routes>
            <Route path="/projects/academic" element={<AcademicProjects />} />
            <Route path="/projects/work" element={<WorkProjects />} />
            <Route path="/projects/personal" element={<PersonalProjects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Projects;