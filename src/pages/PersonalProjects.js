import React, { useEffect, useRef, useState } from 'react';
import './PersonalProjects.css';

function PersonalProjects() {
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
      <div className='personal-projects-column'>
        <div className='personal-projects-section fade-in'>
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

export default PersonalProjects;