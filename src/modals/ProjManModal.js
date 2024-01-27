// FrontendDevModal.js

import React from 'react';
import './ProjManModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import clickupTech from '../assets/skills/projmanSkills/clickupTech.png';
import gitTech from '../assets/skills/projmanSkills/gitTech.png';
import jiraTech from '../assets/skills/projmanSkills/jiraTech.png';
import trelloTech from '../assets/skills/projmanSkills/trelloTech.png';

function ProjManModal({ onClose }) {
  const CLICKUPSkills = 40; // Set your desired percentage
  const GITSkills = 65; // Set your desired percentage
  const JIRATech = 40; // Set your desired percentage
  const TRELLOTech = 50; // Set your desired percentage

  return (
    <div className="projectMan-modal-overlay" onClick={onClose}>
      <div className="projectMan-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='projectMan-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='projectMan-modal-heading'>
          <div className='projectMan-modal-header'>
            <p>Project Management</p>
          </div>
          <div className='projectMan-modal-subheader'>
            <p>Programming Languages and technologies.</p>
          </div>
        </div>
        <div className='projectMan-modal-body'>
          <div className='projectMan-modal-row-header'>
            <div className='projectMan-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='projectMan-modal-row-header-title'>
            <p></p>
            </div>
            <div className='projectMan-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='projectMan-modal-row'>
            <div className='projectMan-modal-row-logo'>
              <img src={clickupTech} alt="projectMan" />
            </div>
            <div className='projectMan-modal-row-title'>
              <p>Click Up</p>
            </div>
            <div className='projectMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${CLICKUPSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{CLICKUPSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='projectMan-modal-row'>
            <div className='projectMan-modal-row-logo'>
              <img src={gitTech} alt="projectMan" />
            </div>
            <div className='projectMan-modal-row-title'>
              <p>Git</p>
            </div>
            <div className='projectMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${GITSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{GITSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='projectMan-modal-row'>
            <div className='projectMan-modal-row-logo'>
              <img src={jiraTech} alt="projectMan" />
            </div>
            <div className='projectMan-modal-row-title'>
              <p>Jira</p>
            </div>
            <div className='projectMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${JIRATech}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{JIRATech}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='projectMan-modal-row'>
            <div className='projectMan-modal-row-logo'>
              <img src={trelloTech} alt="projectMan" />
            </div>
            <div className='projectMan-modal-row-title'>
              <p>Trello</p>
            </div>
            <div className='projectMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${TRELLOTech}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{TRELLOTech}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjManModal;
