// FrontendDevModal.js

import React from 'react';
import './MsOfficeModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import excelTech from '../assets/skills/msofficeSkills/excelTech.png';
import pptTech from '../assets/skills/msofficeSkills/pptTech.png';
import wordTech from '../assets/skills/msofficeSkills/wordTech.png';

function MSOfficeModal({ onClose }) {
  const EXCELSkills = 95; // Set your desired percentage
  const PPTSkills = 95; // Set your desired percentage
  const WORDSkills = 95; // Set your desired percentage

  return (
    <div className="msOffice-modal-overlay" onClick={onClose}>
      <div className="msOffice-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='msOffice-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='msOffice-modal-heading'>
          <div className='msOffice-modal-header'>
            <p>Microsoft Office Suite</p>
          </div>
          <div className='msOffice-modal-subheader'>
            <p>Tools and technologies.</p>
          </div>
        </div>
        <div className='msOffice-modal-body'>
          <div className='msOffice-modal-row-header'>
            <div className='msOffice-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='msOffice-modal-row-header-title'>
            <p></p>
            </div>
            <div className='msOffice-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='msOffice-modal-row'>
            <div className='msOffice-modal-row-logo'>
              <img src={excelTech} alt="msOffice" />
            </div>
            <div className='msOffice-modal-row-title'>
              <p>Microsoft Excel</p>
            </div>
            <div className='msOffice-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${EXCELSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{EXCELSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='msOffice-modal-row'>
            <div className='msOffice-modal-row-logo'>
              <img src={pptTech} alt="msOffice" />
            </div>
            <div className='msOffice-modal-row-title'>
              <p>Microsoft Powerpoint</p>
            </div>
            <div className='msOffice-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${PPTSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{PPTSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='msOffice-modal-row'>
            <div className='msOffice-modal-row-logo'>
              <img src={wordTech} alt="msOffice" />
            </div>
            <div className='msOffice-modal-row-title'>
              <p>Microsoft Word</p>
            </div>
            <div className='msOffice-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${WORDSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{WORDSkills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSOfficeModal;
