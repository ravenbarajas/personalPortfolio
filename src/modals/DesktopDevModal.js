// FrontendDevModal.js

import React from 'react';
import './DesktopDevModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import csharpTech from '../assets/skills/desktopSkills/csharpTech.png';
import sapTech from '../assets/skills/desktopSkills/sapTech.png';
import wpfTech from '../assets/skills/desktopSkills/wpfTech.png';

function DesktopDevModal({ onClose }) {
  const CSHARPSkills = 75; // Set your desired percentage
  const SAPSKills = 70; // Set your desired percentage
  const WPFSKills = 75; // Set your desired percentage

  return (
    <div className="desktopDev-modal-overlay" onClick={onClose}>
      <div className="desktopDev-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='desktopDev-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='desktopDev-modal-heading'>
          <div className='desktopDev-modal-header'>
            <p>Desktop Development</p>
          </div>
          <div className='desktopDev-modal-subheader'>
            <p>Programming Languages and technologies.</p>
          </div>
        </div>
        <div className='desktopDev-modal-body'>
          <div className='desktopDev-modal-row-header'>
            <div className='desktopDev-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='desktopDev-modal-row-header-title'>
            <p></p>
            </div>
            <div className='desktopDev-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='desktopDev-modal-row'>
            <div className='desktopDev-modal-row-logo'>
              <img src={csharpTech} alt="desktopDev" />
            </div>
            <div className='desktopDev-modal-row-title'>
              <p>C# .Net</p>
            </div>
            <div className='desktopDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${CSHARPSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{CSHARPSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='desktopDev-modal-row'>
            <div className='desktopDev-modal-row-logo'>
              <img src={sapTech} alt="desktopDev" />
            </div>
            <div className='desktopDev-modal-row-title'>
              <p>SAP Crystal Reports</p>
            </div>
            <div className='desktopDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${SAPSKills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{SAPSKills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='desktopDev-modal-row'>
            <div className='desktopDev-modal-row-logo'>
              <img src={wpfTech} alt="desktopDev" />
            </div>
            <div className='desktopDev-modal-row-title'>
              <p>Windows Platform Foundations</p>
            </div>
            <div className='desktopDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${WPFSKills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{WPFSKills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopDevModal;
