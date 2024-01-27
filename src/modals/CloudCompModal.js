// FrontendDevModal.js

import React from 'react';
import './CloudCompModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import awsTech from '../assets/skills/cloudcompSkills/awsTech.png';
import gcpTech from '../assets/skills/cloudcompSkills/gcpTech.png';

function CloudCompModal({ onClose }) {
  const AWSSkills = 30; // Set your desired percentage
  const GCPSKills = 50; // Set your desired percentage

  return (
    <div className="cloudComp-modal-overlay" onClick={onClose}>
      <div className="cloudComp-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='cloudComp-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='cloudComp-modal-heading'>
          <div className='cloudComp-modal-header'>
            <p>Cloud Computing</p>
          </div>
          <div className='cloudComp-modal-subheader'>
            <p>Tools and technologies.</p>
          </div>
        </div>
        <div className='cloudComp-modal-body'>
          <div className='cloudComp-modal-row-header'>
            <div className='cloudComp-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='cloudComp-modal-row-header-title'>
            <p></p>
            </div>
            <div className='cloudComp-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='cloudComp-modal-row'>
            <div className='cloudComp-modal-row-logo'>
              <img src={awsTech} alt="cloudComp" />
            </div>
            <div className='cloudComp-modal-row-title'>
              <p>Amazon Web Services</p>
            </div>
            <div className='cloudComp-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${AWSSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{AWSSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='cloudComp-modal-row'>
            <div className='cloudComp-modal-row-logo'>
              <img src={gcpTech} alt="cloudComp" />
            </div>
            <div className='cloudComp-modal-row-title'>
              <p>Google Cloud Platform</p>
            </div>
            <div className='cloudComp-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${GCPSKills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{GCPSKills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudCompModal;
