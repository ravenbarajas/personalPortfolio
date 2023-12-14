import React, { useEffect, useState } from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <div className='education-column'>
        <div className="education-heading">
            <p>Education</p>
        </div>
        <div className='education-section fade-in'>
        <div className='academic-projects-section  fade-in'>
          <div className='academic-projects-section-row'>
            <div className="academic-project-card-container">
                <div className="academic-project-card">

                  <div className='academic-project-card-image-container-1'>
                          
                  </div>
                  <div className='academic-project-card-header-container-wrapper'>
                    <div className='academic-project-card-header-container'>
                      <div className='academic-project-card-header-wbg'>
                          <p>Hybrid Recipe Recommender</p>
                      </div>
                      <div className='academic-project-card-subheader-wbg'>
                          <p>Capstone Project</p>
                      </div>
                    </div>
                    <div className='project-seemore'>
                        <img src={seemore} alt="seemore" />
                      </div>
                  </div>
                </div>
                <div className="academic-project-card">

                  <div className='academic-project-card-image-container-2'>
                          
                  </div>
                  <div className='academic-project-card-header-container-wrapper'>
                    <div className='academic-project-card-header-container'>
                      <div className='academic-project-card-header-wbg'>
                          <p>E-commerce Website</p>
                      </div>
                      <div className='academic-project-card-subheader-wbg'>
                          <p>Technopreneurship Project</p>
                      </div>
                    </div>
                    <div className='project-seemore'>
                        <img src={seemore} alt="seemore" />
                    </div>
                  </div>
                </div>
                <div className="academic-project-card">

                  <div className='academic-project-card-image-container-3'>
                          
                  </div>
                  <div className='academic-project-card-header-container-wrapper'>
                    <div className='academic-project-card-header-container'>
                      <div className='academic-project-card-header-wbg'>
                          <p>Inventory Handling System</p>
                      </div>
                      <div className='academic-project-card-subheader-wbg'>
                          <p>Application Development Project</p>
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
    </div>
  );
}

export default Education;