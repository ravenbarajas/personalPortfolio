// FrontendDevModal.js

import React from 'react';
import './FrontendDevModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import frontendDev from '../assets/frontendDev.png';

import html5Tech from '../assets/skills/html5Tech.png';
import css3Tech from '../assets/skills/css3Tech.png';
import jsTech from '../assets/skills/jsTech.png';
import reactTech from '../assets/skills/reactTech.png';
import bootstrapTech from '../assets/skills/reactTech.png';
import typescriptTech from '../assets/skills/typescriptTech.png';
import figmaTech from '../assets/skills/figmaTech.png';

function FrontendDevModal({ onClose }) {
  const HTMLSkills = 90; // Set your desired percentage
  const CSSSkills = 90; // Set your desired percentage
  const JSSkills = 75; // Set your desired percentage
  const ReactSkills = 80; // Set your desired percentage
  const BootstrapSkills = 60; // Set your desired percentage
  const TSSkills = 35; // Set your desired percentage
  const FigmaSkills = 70; // Set your desired percentage

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="frontendDev-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='frontendDev-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='frontendDev-modal-heading'>
          <div className='frontendDev-modal-header'>
            <p>Frontend Development</p>
          </div>
          <div className='frontendDev-modal-subheader'>
            <p>Programming Languages and technologies.</p>
          </div>
        </div>
        <div className='frontendDev-modal-body'>
          <div className='frontendDev-modal-row-header'>
            <div className='frontendDev-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='frontendDev-modal-row-header-title'>
            <p></p>
            </div>
            <div className='frontendDev-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>HTML</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${HTMLSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{HTMLSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>CSS</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${CSSSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{CSSSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>JavaScript</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${JSSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{JSSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>React</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${ReactSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{ReactSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>Bootstrap</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${BootstrapSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{BootstrapSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>TypeScript</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${TSSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{TSSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='frontendDev-modal-row'>
            <div className='frontendDev-modal-row-logo'>
              <img src={frontendDev} alt="frontendDev" />
            </div>
            <div className='frontendDev-modal-row-title'>
              <p>Figma</p>
            </div>
            <div className='frontendDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${FigmaSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{FigmaSkills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontendDevModal;
