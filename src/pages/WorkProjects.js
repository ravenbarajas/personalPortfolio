import React, { useEffect, useRef, useState } from 'react';
import './WorkProjects.css';

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
                <div className="project-card">

                  <div className='project-card-image-container-7'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>Website Template</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Internship Project</p>
                      </div>
                    </div>
                </div>
                <div className="project-card">

                  <div className='project-card-image-container-8'>
                          
                  </div>
                    <div className='project-card-header-container'>
                      <div className='project-card-header-wbg'>
                          <p>To-do List App</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Internship Project</p>
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