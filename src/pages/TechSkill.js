import React, { useEffect, useRef, useState } from 'react';
import './TechSkill.css';
import FrontendDevModal from '../modals/FrontendDevModal';
import BackendDevModal from '../modals/BackendDevModal';
import MobileDevModal from '../modals/MobileDevModal';
import DesktopDevModal from '../modals/DesktopDevModal';
import ProjManModal from '../modals/ProjManModal';
import DataSciModal from '../modals/DataSciModal';
import DBManagementModal from '../modals/DBManagementModal';
import CloudCompModal from '../modals/CloudCompModal';
import MsOfficeModal from '../modals/MsOfficeModal';

import frontendDev from '../assets/frontendDev.png';
import backendDev from '../assets/backendDev.png';
import mobileDev from '../assets/mobileDev.png';
import desktopDev from '../assets/desktopDev.png';
import projMan from '../assets/projMan.png';
import dataSci from '../assets/dataSci.png';
import dbMan from '../assets/dbMan.png';
import cloudComp from '../assets/cloudComp.png';
import msOff from '../assets/msOff.png';

import seemore from '../assets/seemore.png';

function TechSkill() {
  useEffect(() => {
    // Additional logic or side effects if needed
  }, []); // Empty dependency array means this effect runs once when the component mounts
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  const renderModal = () => {
    switch (activeModal) {
      case 'FrontendDev':
        return <FrontendDevModal onClose={closeModal} />;
      case 'BackendDev':
        return <BackendDevModal onClose={closeModal} />;
      case 'MobileDev':
        return <MobileDevModal onClose={closeModal} />;
      case 'DesktopDev':
        return <DesktopDevModal onClose={closeModal} />;
      case 'ProjMan':
        return <ProjManModal onClose={closeModal} />;
      case 'DataSci':
        return <DataSciModal onClose={closeModal} />;
      case 'DBMan':
      return <DBManagementModal onClose={closeModal} />;
      case 'CloudComp':
        return <CloudCompModal onClose={closeModal} />;
      case 'MsOffice':
        return <MsOfficeModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (  
    <div className="tech-skills-container">
      <div className='technical-skill-column'>
        <div className="technical-skill-header">
          <div className="technical-skill-heading">
            <p>Technical Skills</p>
          </div>
          <div className="technical-skill-subheading">
          <p>Programming languages and technologies.</p>
        </div>
        </div>
        <div className="technical-skills-section"> 
          <div className='technical-skills-row'>
            <div className="technical-skill-card-1" onClick={() => openModal('FrontendDev')}>
              <div className='tech-skill-logo-card-1'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore"/>
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={frontendDev} alt="frontendDev" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Frontend</p>
                  <p>Development</p>
                </div>
              </div>
            </div>
            <div className="technical-skill-card-2" onClick={() => openModal('BackendDev')}>
              <div className='tech-skill-logo-card-2'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={backendDev} alt="backendDev" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Backend</p>
                  <p>Development</p>
                </div>
              </div>
            </div>
            <div className="technical-skill-card-3" onClick={() => openModal('MobileDev')}>
                <div className='tech-skill-logo-card-3'>
                  <div className='tech-skill-logo-card-title'>
                  </div>
                  <div className='tech-skill-logo-card-seemore'>
                    <img src={seemore} alt="seemore" />
                  </div>
                </div>
                <div className='tech-skill-desc'>
                  <div className="tech-grid-item"><img src={mobileDev} alt="mobileDev" /></div>
                  <div className='tech-skill-desc-label'>
                    <p>Mobile</p>
                    <p>Development</p>
                  </div>
                </div>
            </div>
          </div>
          <div className='technical-skills-row'>
            <div className="technical-skill-card-4" onClick={() => openModal('DesktopDev')}>
              <div className='tech-skill-logo-card-4'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={desktopDev} alt="desktopDev" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Desktop</p>
                  <p>Development</p>
                </div>
              </div>
            </div>
            <div className="technical-skill-card-5" onClick={() => openModal('ProjMan')}>
              <div className='tech-skill-logo-card-5'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={projMan} alt="projMan" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Project</p>
                  <p>Management</p>
                </div>
              </div>
            </div>
            <div className="technical-skill-card-6" onClick={() => openModal('DataSci')}>
              <div className='tech-skill-logo-card-6'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={dataSci} alt="dataSci" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Data</p>
                  <p>Science</p>
                </div>
              </div>
            </div>
          </div>
          <div className='technical-skills-row'>
            <div className="technical-skill-card-7" onClick={() => openModal('DBMan')}>
              <div className='tech-skill-logo-card-7'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={dbMan} alt="dbMan" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Database</p>
                  <p>Management</p>
                </div>
              </div>
            </div>
            <div className="technical-skill-card-8" onClick={() => openModal('CloudComp')}>
              <div className='tech-skill-logo-card-8'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={cloudComp} alt="cloudComp" /></div>
                <div className='tech-skill-desc-label'>
                  <p>Cloud</p>
                  <p>Computing</p>
                </div>
              </div>
            </div>
            <div className="technical-skill-card-9" onClick={() => openModal('MsOffice')}>
              <div className='tech-skill-logo-card-9'>
                <div className='tech-skill-logo-card-title'>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={msOff} alt="msOff" /></div>
                <div className='tech-skill-desc-label'>
                  <p>MS Office</p>
                  <p>Suite</p>
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

export default TechSkill;