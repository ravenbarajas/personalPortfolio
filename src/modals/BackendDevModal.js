// FrontendDevModal.js

import React from 'react';
import './BackendDevModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import djangoTech from '../assets/skills/backendSkills/djangoTech.png';
import laravelTech from '../assets/skills/backendSkills/laravelTech.png';
import nodejsTech from '../assets/skills/backendSkills/nodejsTech.png';
import phpTech from '../assets/skills/backendSkills/phpTech.png';

function BackendDevModal({ onClose }) {
  const DJANGOSkills = 90; // Set your desired percentage
  const LARAVELSkills = 85; // Set your desired percentage
  const NODEJSSkill = 90; // Set your desired percentage
  const PHPSkills = 85; // Set your desired percentage

  return (
    <div className="backendDev-modal-overlay" onClick={onClose}>
      <div className="backendDev-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='backendDev-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='backendDev-modal-heading'>
          <div className='backendDev-modal-header'>
            <p>Backend Development</p>
          </div>
          <div className='backendDev-modal-subheader'>
            <p>Programming Languages and technologies.</p>
          </div>
        </div>
        <div className='backendDev-modal-body'>
          <div className='backendDev-modal-row-header'>
            <div className='backendDev-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='backendDev-modal-row-header-title'>
            <p></p>
            </div>
            <div className='backendDev-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='backendDev-modal-row'>
            <div className='backendDev-modal-row-logo'>
              <img src={djangoTech} alt="backendDev" />
            </div>
            <div className='backendDev-modal-row-title'>
              <p>Django</p>
            </div>
            <div className='backendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${DJANGOSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{DJANGOSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='backendDev-modal-row'>
            <div className='backendDev-modal-row-logo'>
              <img src={laravelTech} alt="backendDev" />
            </div>
            <div className='backendDev-modal-row-title'>
              <p>Laravel</p>
            </div>
            <div className='backendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${LARAVELSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{LARAVELSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='backendDev-modal-row'>
            <div className='backendDev-modal-row-logo'>
              <img src={nodejsTech} alt="backendDev" />
            </div>
            <div className='backendDev-modal-row-title'>
              <p>Node JS</p>
            </div>
            <div className='backendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${NODEJSSkill}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{NODEJSSkill}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='backendDev-modal-row'>
            <div className='backendDev-modal-row-logo'>
              <img src={phpTech} alt="backendDev" />
            </div>
            <div className='backendDev-modal-row-title'>
              <p>PHP</p>
            </div>
            <div className='backendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${PHPSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{PHPSkills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackendDevModal;
