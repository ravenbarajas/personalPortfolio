// FrontendDevModal.js

import React from 'react';
import './DBManagementModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import csharpTech from '../assets/skills/desktopSkills/csharpTech.png';
import mysqlTech from '../assets/skills/desktopSkills/mysqlTech.png';
import sapTech from '../assets/skills/desktopSkills/sapTech.png';
import wpfTech from '../assets/skills/desktopSkills/wpfTech.png';

function DBManagementModal({ onClose }) {
  const CSHARPSkills = 90; // Set your desired percentage
  const MYSQLSkills = 85; // Set your desired percentage
  const SAPSKills = 80; // Set your desired percentage
  const WPFSKills = 85; // Set your desired percentage

  return (
    <div className="databaseMan-modal-overlay" onClick={onClose}>
      <div className="databaseMan-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='databaseMan-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='databaseMan-modal-heading'>
          <div className='databaseMan-modal-header'>
            <p>Database Management</p>
          </div>
          <div className='databaseMan-modal-subheader'>
            <p>Tools and technologies.</p>
          </div>
        </div>
        <div className='databaseMan-modal-body'>
          <div className='databaseMan-modal-row-header'>
            <div className='databaseMan-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='databaseMan-modal-row-header-title'>
            <p></p>
            </div>
            <div className='databaseMan-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='databaseMan-modal-row'>
            <div className='databaseMan-modal-row-logo'>
              <img src={csharpTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>C# .Net</p>
            </div>
            <div className='databaseMan-modal-row-level'>
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
          <div className='databaseMan-modal-row'>
            <div className='databaseMan-modal-row-logo'>
              <img src={mysqlTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>MySQl</p>
            </div>
            <div className='databaseMan-modal-row-level'>
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
          <div className='databaseMan-modal-row'>
            <div className='databaseMan-modal-row-logo'>
              <img src={sapTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>SAP Crystal Reports</p>
            </div>
            <div className='databaseMan-modal-row-level'>
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
          <div className='databaseMan-modal-row'>
            <div className='databaseMan-modal-row-logo'>
              <img src={wpfTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>Windows Platform Foundations</p>
            </div>
            <div className='databaseMan-modal-row-level'>
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

export default DBManagementModal;
