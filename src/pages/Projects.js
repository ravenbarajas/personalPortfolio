import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

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
            <div className="project-card-container">
                <div className="project-card">
                  <div className='project-card-image-container-1'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>Hybrid Recipe Recommender</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Capstone Project</p>
                      </div>
                    </div>
                </div>
                <div className="project-card">
                  <div className='project-card-image-container-2'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>E-commerce Website</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Technopreneurship Project</p>
                      </div>
                    </div>
                </div>
                <div className="project-card">
                  <div className='project-card-image-container-3'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>Inventory Mangement System</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Applications Development Project</p>
                      </div>
                    </div>
                </div>
            </div> 
          </div>
        </div>
        <div className='projects-section'> 
          <div className='projects-section-row'>
            <div className="project-card-container">
                <div className="project-card">
                  <div className='project-card-image-container-4'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>Travel Brochure Website</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Web Development Project</p>
                      </div>
                    </div>
                </div>
                <div className="project-card">
                  <div className='project-card-image-container-5'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>Bookkeeping Software</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Accounting Principles Project</p>
                      </div>
                    </div>
                </div>
                <div className="project-card">
                  <div className='project-card-image-container-6'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>Library Mangement System</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Senior High School Project</p>
                      </div>
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


