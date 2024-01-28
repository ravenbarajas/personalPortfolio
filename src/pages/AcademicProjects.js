import React, { useEffect, useRef, useState } from 'react';
import './AcademicProjects.css';

import CapstoneProjModal from '../projectmodals/CapstoneProjModal';
import InventoryProjModal from '../projectmodals/InventoryProjModal';
import LibraryProjModal from '../projectmodals/LibraryProjModal';

import seemore from '../assets/seemore.png';

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
      const [activeModal, setActiveModal] = useState(null);
      const openModal = (modalType) => {
        setActiveModal(modalType);
      };
      const closeModal = () => {
        setActiveModal(null);
      };
      const renderModal = () => {
        switch (activeModal) {
          case 'CapstoneProj':
            return <CapstoneProjModal onClose={closeModal} />;
          case 'InventoryProj':
            return <InventoryProjModal onClose={closeModal} />;
          case 'LibraryProj':
            return <LibraryProjModal onClose={closeModal} />;
          default:
            return null;
        }
      };
  return (
    <div className="projects-container">
      <div className='academic-projects-column'>
        <div className='academic-projects-section  fade-in'>
          <div className='academic-projects-section-row'>
            <div className="academic-project-card-container">
                <div className="academic-project-card" onClick={() => openModal('CapstoneProj')}>

                  <div className='academic-project-card-image-container-1' >
                          
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
                <div className="academic-project-card" onClick={() => openModal('InventoryProj')}>

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
        
        <div className='academic-projects-section fade-in'> 
          <div className='academic-projects-section-row'>
            <div className="academic-project-card-container">
                <div className="academic-project-card">
                  <div className='academic-project-card-image-container-4'>
                          
                  </div>
                  <div className='academic-project-card-header-container-wrapper'>
                    <div className='academic-project-card-header-container'>
                      <div className='academic-project-card-header-wbg'>
                          <p>Travel Brochure Website</p>
                      </div>
                      <div className='academic-project-card-subheader-wbg'>
                          <p>Web Development Project</p>
                      </div>
                    </div>
                    <div className='project-seemore'>
                      <img src={seemore} alt="seemore" />
                    </div>
                  </div>
                </div>
                <div className="academic-project-card">
                  <div className='academic-project-card-image-container-5'>
                          
                  </div>
                  <div className='academic-project-card-header-container-wrapper'>
                    <div className='academic-project-card-header-container'>
                      <div className='academic-project-card-header-wbg'>
                          <p>Bookkeeping Software</p>
                      </div>
                      <div className='academic-project-card-subheader-wbg'>
                          <p>Accounting Principles Project</p>
                      </div>
                    </div>
                    <div className='project-seemore'>
                        <img src={seemore} alt="seemore" />
                    </div>
                    </div>
                </div>
                <div className="academic-project-card" onClick={() => openModal('LibraryProj')}>
                  <div className='academic-project-card-image-container-6'>
                          
                  </div>
                  <div className='academic-project-card-header-container-wrapper'>
                    <div className='academic-project-card-header-container'>
                      <div className='academic-project-card-header-wbg'>
                          <p>Library Mangement System</p>
                      </div>
                      <div className='academic-project-card-subheader-wbg'>
                          <p>Senior High School Project</p>
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
      {activeModal && renderModal()}
    </div>
  );
}

export default AcademicProjects;