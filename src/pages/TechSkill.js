import React, { useEffect, useRef, useState } from 'react';
import './TechSkill.css';
import FrontendDevModal from '../modals/FrontendDevModal';
import BackendDevModal from '../modals/BackendDevModal';
import MobileDevModal from '../modals/MobileDevModal';
import DesktopDevModal from '../modals/DesktopDevModal';
import ProjManModal from '../modals/ProjManModal';
import DataSciModal from '../modals/DataSciModal';

import html5Tech from '../assets/skills/html5Tech.png';
import css3Tech from '../assets/skills/css3Tech.png';
import jsTech from '../assets/skills/jsTech.png';
import reactTech from '../assets/skills/reactTech.png';
import bootstrapTech from '../assets/skills/reactTech.png';
import typescriptTech from '../assets/skills/typescriptTech.png';
import figmaTech from '../assets/skills/figmaTech.png';

import djangoTech from '../assets/skills/djangoTech.png';
import laravelTech from '../assets/skills/laravelTech.png';
import phpTech from '../assets/skills/phpTech.png';
import firebaseTech from '../assets/skills/firebaseTech.png';

import xamarinTech from '../assets/skills/xamarinTech.png';
import kotlinTech from '../assets/skills/kotlinTech.png';
import flutterTech from '../assets/skills/flutterTech.png';
import dotnetTech from '../assets/skills/dotnetTech.png';

import csharpTech from '../assets/skills/csharpTech.png';
import javaTech from '../assets/skills/javaTech.png';
import mysqlTech from '../assets/skills/mysqlTech.png';

import trelloTech from '../assets/skills/trelloTech.png';
import clickupTech from '../assets/skills/clickupTech.png';
import jiraTech from '../assets/skills/jiraTech.png';
import gitTech from '../assets/skills/gitTech.png';

import pythonTech from '../assets/skills/pythonTech.png';
import numpyTech from '../assets/skills/numpyTech.png';
import tableuTech from '../assets/skills/tableuTech.png';

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
                  <p>Frontend Development</p>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore"/>
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={html5Tech} alt="HTML5" /></div>
                <div className="tech-grid-item"><img src={css3Tech} alt="CSS3" /></div>
                <div className="tech-grid-item"><img src={jsTech} alt="JavaScript" /></div>
                <div className="tech-grid-item"><img src={reactTech} alt="React" /></div>
                <div className="tech-grid-item"><img src={bootstrapTech} alt="bootstrapTech" /></div>
                <div className="tech-grid-item"><img src={figmaTech} alt="figmaTech" /></div>
                <div className="tech-grid-item"><img src={typescriptTech} alt="typescriptTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-2" onClick={() => openModal('BackendDev')}>
              <div className='tech-skill-logo-card-2'>
                <div className='tech-skill-logo-card-title'>
                  <p>Backend Development</p>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={djangoTech} alt="djangoTech" /></div>
                <div className="tech-grid-item"><img src={laravelTech} alt="laravelTech" /></div>
                <div className="tech-grid-item"><img src={phpTech} alt="phpTech" /></div>
                <div className="tech-grid-item"><img src={firebaseTech} alt="firebaseTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-3" onClick={() => openModal('MobileDev')}>
                <div className='tech-skill-logo-card-3'>
                  <div className='tech-skill-logo-card-title'>
                    <p>Mobile Development</p>
                  </div>
                  <div className='tech-skill-logo-card-seemore'>
                    <img src={seemore} alt="seemore" />
                  </div>
                </div>
                <div className='tech-skill-desc'>
                  <div className="tech-grid-item"><img src={xamarinTech} alt="xamarinTech" /></div>
                  <div className="tech-grid-item"><img src={kotlinTech} alt="kotlinTech" /></div>
                  <div className="tech-grid-item"><img src={flutterTech} alt="flutterTech" /></div>
                  <div className="tech-grid-item"><img src={dotnetTech} alt="dotnetTech" /></div>
                </div>
            </div>
          </div>
          <div className='technical-skills-row'>
            <div className="technical-skill-card-4" onClick={() => openModal('DesktopDev')}>
              <div className='tech-skill-logo-card-4'>
                <div className='tech-skill-logo-card-title'>
                  <p>Desktop Development</p>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={csharpTech} alt="csharpTech" /></div>
                <div className="tech-grid-item"><img src={javaTech} alt="javaTech" /></div>
                <div className="tech-grid-item"><img src={mysqlTech} alt="mysqlTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-5" onClick={() => openModal('ProjMan')}>
              <div className='tech-skill-logo-card-5'>
                <div className='tech-skill-logo-card-title'>
                  <p>Project Management</p>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={trelloTech} alt="trelloTech" /></div>
                <div className="tech-grid-item"><img src={gitTech} alt="gitTech" /></div>
                <div className="tech-grid-item"><img src={jiraTech} alt="jiraTech" /></div>
                <div className="tech-grid-item"><img src={clickupTech} alt="clickupTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-6" onClick={() => openModal('DataSci')}>
              <div className='tech-skill-logo-card-6'>
                <div className='tech-skill-logo-card-title'>
                  <p>Data Analytics</p>
                </div>
                <div className='tech-skill-logo-card-seemore'>
                  <img src={seemore} alt="seemore" />
                </div>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={pythonTech} alt="pythonTech" /></div>
                <div className="tech-grid-item"><img src={numpyTech} alt="numpyTech" /></div>
                <div className="tech-grid-item"><img src={tableuTech} alt="tableuTech" /></div>
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