import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

import seemore from '../assets/seemore.png';

function Projects() {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleBtnClick = (index) => {
    setSelectedBtn(index);
  };
  return (
    <div className="projects-container">
      <div className='projects-column'>
        <div className="projects-heading">
            <p>Projects</p>
        </div>
        <div className='projects-section'>
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
          <div className='projects-section-row'>
            <div className="project-card">
                <div className="soft-skill-logo-1">
                    <div className='soft-skill-header-container'>
                        <div className='soft-skill-logo-subheader-wbg'>
                            <p>Passionate</p>
                        </div>
                        <div className='soft-skill-logo-header-wbg'>
                            <p>Leader.</p>
                        </div>
                    </div>
                    <div className='soft-skill-logo-card-seemore'>
                    <img src={seemore} alt="seemore" />
                    </div>
                </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;


