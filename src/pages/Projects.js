import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleBtnClick = (index) => {
    setSelectedBtn(index);
  };
  return (
    <div className="projects-container">
      <div className='academic-projects-column'>
        <div className="projects-heading">
            <p>Projects</p>
        </div>
        <div className="projects-section-nav-container">
            <div className="projects-section-nav">
              <button className={`projects-nav-btn ${selectedBtn === 0 ? 'active' : ''}`}
                onClick={() => handleBtnClick(0)}>
                <p>Academic</p>
              </button>
              <button className={`projects-nav-btn ${selectedBtn === 1 ? 'active' : ''}`}
                onClick={() => handleBtnClick(1)}>
                <p>Work</p>
              </button>
              <button className={`projects-nav-btn ${selectedBtn === 2 ? 'active' : ''}`}
                onClick={() => handleBtnClick(2)}>
                <p>Personal</p>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Projects;