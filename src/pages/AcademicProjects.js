import React, { useEffect, useRef, useState } from 'react';
import './AcademicProjects.css';

function AcademicProjects() {
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
        <div className='academic-projects-section  fade-in'>
          <div className='academic-projects-section-row'>
            <div className="project-card-1">

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
            <div className='academic-projects-section-column'>
              <div className='academic-projects-section-row'>
                <div className="project-card-2">

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
                <div className="project-card-3">

                        <div className='project-card-image-container-3'>
                                
                        </div>
                          <div className='project-card-header-container'>
                            <div className='project-card-header-wbg'>
                                <p>Inventory Management System</p>
                            </div>
                            <div className='project-card-subheader-wbg'>
                                <p>Technipreneurship Project</p>
                            </div>
                          </div>
                </div>
              </div>
              <div className='academic-projects-section-row'>
                <div className="project-card-4">
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
                <div className="project-card-5">
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
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicProjects;