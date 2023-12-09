import React, { useEffect, useRef, useState } from 'react';
import './WorkProjects.css';

import seemore from '../assets/seemore.png';

function WorkProjects() {
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
      <div className='work-projects-column'>
        <div className='work-projects-section fade-in'>
          <div className='work-projects-section-row'>
            <div className="work-project-card-container">
                <div className="work-project-card">

                  <div className='work-project-card-image-container-1'>
                          
                  </div>
                  <div className='work-project-card-header-container-wrapper'>
                    <div className='work-project-card-header-container'>
                      <div className='work-project-card-header-wbg'>
                          <p>Website Template</p>
                      </div>
                      <div className='work-project-card-subheader-wbg'>
                          <p>Internship Project</p>
                      </div>
                    </div>
                    <div className='project-seemore'>
                        <img src={seemore} alt="seemore" />
                    </div>
                  </div>
                </div>
                <div className="work-project-card">

                  <div className='work-project-card-image-container-2'>
                          
                  </div>
                  <div className='work-project-card-header-container-wrapper'>
                    <div className='work-project-card-header-container'>
                      <div className='work-project-card-header-wbg'>
                          <p>To-do List App</p>
                      </div>
                      <div className='work-project-card-subheader-wbg'>
                          <p>Internship Project</p>
                      </div>
                    </div>
                    <div className='project-seemore'>
                        <img src={seemore} alt="seemore" />
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

export default WorkProjects;