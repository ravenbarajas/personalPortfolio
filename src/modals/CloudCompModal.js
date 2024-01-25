// FrontendDevModal.js

import React from 'react';
import './CloudCompModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import csharpTech from '../assets/skills/desktopSkills/csharpTech.png';
import mysqlTech from '../assets/skills/desktopSkills/mysqlTech.png';
import sapTech from '../assets/skills/desktopSkills/sapTech.png';
import wpfTech from '../assets/skills/desktopSkills/wpfTech.png';

function CloudCompModal({ onClose }) {
  const CSHARPSkills = 90; // Set your desired percentage
  const MYSQLSkills = 85; // Set your desired percentage
  const SAPSKills = 80; // Set your desired percentage
  const WPFSKills = 85; // Set your desired percentage

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
              <img src={csharpTech} alt="cloudComp" />
            </div>
            <div className='cloudComp-modal-row-title'>
              <p>C# .Net</p>
            </div>
            <div className='cloudComp-modal-row-level'>
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
          <div className='cloudComp-modal-row'>
            <div className='cloudComp-modal-row-logo'>
              <img src={mysqlTech} alt="cloudComp" />
            </div>
            <div className='cloudComp-modal-row-title'>
              <p>MySQl</p>
            </div>
            <div className='cloudComp-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${MYSQLSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{MYSQLSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='cloudComp-modal-row'>
            <div className='cloudComp-modal-row-logo'>
              <img src={sapTech} alt="cloudComp" />
            </div>
            <div className='cloudComp-modal-row-title'>
              <p>SAP Crystal Reports</p>
            </div>
            <div className='cloudComp-modal-row-level'>
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
          <div className='cloudComp-modal-row'>
            <div className='cloudComp-modal-row-logo'>
              <img src={wpfTech} alt="cloudComp" />
            </div>
            <div className='cloudComp-modal-row-title'>
              <p>Windows Platform Foundations</p>
            </div>
            <div className='cloudComp-modal-row-level'>
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

export default CloudCompModal;
