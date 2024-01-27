// FrontendDevModal.js

import React from 'react';
import './DBManagementModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import firebaseTech from '../assets/skills/databaseSkills/firebaseTech.png';
import mssqlTech from '../assets/skills/databaseSkills/mssqlTech.png';
import mysqlTech from '../assets/skills/databaseSkills/mysqlTech.png';
import postgresqlTech from '../assets/skills/databaseSkills/postgresqlTech.png';

function DBManagementModal({ onClose }) {
  const FIREBASESkills = 50; // Set your desired percentage
  const MSSQLSkills = 60; // Set your desired percentage
  const MYSQLSkills = 70; // Set your desired percentage
  const POSTGRESQLSKills = 65; // Set your desired percentage

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
              <img src={firebaseTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>Firebase Database</p>
            </div>
            <div className='databaseMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${FIREBASESkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{FIREBASESkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='databaseMan-modal-row'>
            <div className='databaseMan-modal-row-logo'>
              <img src={mssqlTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>Microsoft SQL</p>
            </div>
            <div className='databaseMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${MSSQLSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{MSSQLSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='databaseMan-modal-row'>
            <div className='databaseMan-modal-row-logo'>
              <img src={mysqlTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>MySQL</p>
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
              <img src={postgresqlTech} alt="databaseMan" />
            </div>
            <div className='databaseMan-modal-row-title'>
              <p>Postgresql</p>
            </div>
            <div className='databaseMan-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${POSTGRESQLSKills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{POSTGRESQLSKills}%</span>
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
