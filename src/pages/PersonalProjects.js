import React, { useEffect, useRef, useState } from 'react';
import './PersonalProjects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className='personal-projects-column'>
        <div className='personal-projects-section'>
          <div className='personal-projects-section-row'>
            <div className="personal-project-card-container">
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
            </div> 
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Projects;