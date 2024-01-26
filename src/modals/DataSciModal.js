// FrontendDevModal.js

import React from 'react';
import './DataSciModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import numpyTech from '../assets/skills/datasciSkills/numpyTech.png';
import pandaTech from '../assets/skills/datasciSkills/pandaTech.png';
import pythonTech from '../assets/skills/datasciSkills/pythonTech.png';
import rTech from '../assets/skills/datasciSkills/rTech.png';
import tableauTech from '../assets/skills/datasciSkills/tableauTech.png';

function DataSciModal({ onClose }) {
  const NUMPYSkills = 90; // Set your desired percentage
  const PANDASkills = 80; // Set your desired percentage
  const PYTHONSkills = 85; // Set your desired percentage
  const RSkills = 85; // Set your desired percentage
  const TABLEAUSkills = 85; // Set your desired percentage

  return (
    <div className="dataSci-modal-overlay" onClick={onClose}>
      <div className="dataSci-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='dataSci-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='dataSci-modal-heading'>
          <div className='dataSci-modal-header'>
            <p>Data Science</p>
          </div>
          <div className='dataSci-modal-subheader'>
            <p>Programming Languages and technologies.</p>
          </div>
        </div>
        <div className='dataSci-modal-body'>
          <div className='dataSci-modal-row-header'>
            <div className='dataSci-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='dataSci-modal-row-header-title'>
            <p></p>
            </div>
            <div className='dataSci-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='dataSci-modal-row'>
            <div className='dataSci-modal-row-logo'>
              <img src={numpyTech} alt="dataSci" />
            </div>
            <div className='dataSci-modal-row-title'>
              <p>NumPy</p>
            </div>
            <div className='dataSci-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${NUMPYSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{NUMPYSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='dataSci-modal-row'>
            <div className='dataSci-modal-row-logo'>
              <img src={pandaTech} alt="dataSci" />
            </div>
            <div className='dataSci-modal-row-title'>
              <p>Panda</p>
            </div>
            <div className='dataSci-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${PANDASkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{PANDASkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='dataSci-modal-row'>
            <div className='dataSci-modal-row-logo'>
              <img src={pythonTech} alt="dataSci" />
            </div>
            <div className='dataSci-modal-row-title'>
              <p>Python</p>
            </div>
            <div className='dataSci-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${PYTHONSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{PYTHONSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='dataSci-modal-row'>
            <div className='dataSci-modal-row-logo'>
              <img src={rTech} alt="dataSci" />
            </div>
            <div className='dataSci-modal-row-title'>
              <p>R Programming Language</p>
            </div>
            <div className='dataSci-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${RSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{RSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='dataSci-modal-row'>
            <div className='dataSci-modal-row-logo'>
              <img src={tableauTech} alt="dataSci" />
            </div>
            <div className='dataSci-modal-row-title'>
              <p>Tableau</p>
            </div>
            <div className='dataSci-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${TABLEAUSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{TABLEAUSkills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSciModal;
