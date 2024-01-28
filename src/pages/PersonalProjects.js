import React, { useEffect, useRef, useState } from 'react';
import './PersonalProjects.css';

import seemore from '../assets/seemore.png';

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
 
            </div> 
          </div>
          <div className='personal-projects-section-row'>
            <div className="personal-project-card-container">
  
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;