import React, { useEffect, useRef, useState } from 'react';
import './AcademicProjects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className='academic-projects-column'>
        <div className='academic-projects-section'>
          <div className='academic-projects-section-row'>
            <div className="academic-project-card-container">
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
                          <p>Inventory Management System</p>
                      </div>
                      <div className='project-card-subheader-wbg'>
                          <p>Technipreneurship Project</p>
                      </div>
                    </div>
                </div>
            </div> 
          </div>
          
        </div>
        <div className='academic-projects-section'> 
          <div className='academic-projects-section-row'>
            <div className="academic-project-card-container">
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