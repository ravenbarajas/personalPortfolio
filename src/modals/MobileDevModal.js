// FrontendDevModal.js

import React from 'react';
import './MobileDevModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import dotnetTech from '../assets/skills/mobiledevSkills/dotnetTech.png';
import flutterTech from '../assets/skills/mobiledevSkills/flutterTech.png';
import kotlinTech from '../assets/skills/mobiledevSkills/kotlinTech.png';
import xamarinTech from '../assets/skills/mobiledevSkills/xamarinTech.png';

function MobileDevModal({ onClose }) {
  const DOTNETSkills = 75; // Set your desired percentage
  const FLUTTERSkills = 20; // Set your desired percentage
  const KOTLINSKills = 30; // Set your desired percentage
  const XAMARINSKills = 70; // Set your desired percentage

  return (
    <div className="mobileDev-modal-overlay" onClick={onClose}>
      <div className="mobileDev-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='mobileDev-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='mobileDev-modal-heading'>
          <div className='mobileDev-modal-header'>
            <p>Mobile Development</p>
          </div>
          <div className='mobileDev-modal-subheader'>
            <p>Programming Languages and technologies.</p>
          </div>
        </div>
        <div className='mobileDev-modal-body'>
          <div className='mobileDev-modal-row-header'>
            <div className='mobileDev-modal-row-header-logo'>
            <p></p>
            </div>
            <div className='mobileDev-modal-row-header-title'>
            <p></p>
            </div>
            <div className='mobileDev-modal-row-header-level'>
              <p>Beginner</p>
              <p>Intermediate</p>
              <p>Proficient</p>
              <p>Advanced</p>
              <p>Expert</p>
            </div>
          </div>
          <div className='mobileDev-modal-row'>
            <div className='mobileDev-modal-row-logo'>
              <img src={dotnetTech} alt="mobileDev" />
            </div>
            <div className='mobileDev-modal-row-title'>
              <p>.Net MAUI</p>
            </div>
            <div className='mobileDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${DOTNETSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{DOTNETSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='mobileDev-modal-row'>
            <div className='mobileDev-modal-row-logo'>
              <img src={flutterTech} alt="mobileDev" />
            </div>
            <div className='mobileDev-modal-row-title'>
              <p>Flutter</p>
            </div>
            <div className='mobileDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${FLUTTERSkills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{FLUTTERSkills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='mobileDev-modal-row'>
            <div className='mobileDev-modal-row-logo'>
              <img src={kotlinTech} alt="mobileDev" />
            </div>
            <div className='mobileDev-modal-row-title'>
              <p>kotlin</p>
            </div>
            <div className='mobileDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${KOTLINSKills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{KOTLINSKills}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className='mobileDev-modal-row'>
            <div className='mobileDev-modal-row-logo'>
              <img src={xamarinTech} alt="mobileDev" />
            </div>
            <div className='mobileDev-modal-row-title'>
              <p>Xamarin</p>
            </div>
            <div className='mobileDev-modal-row-level'>
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${XAMARINSKills}%`, backgroundColor: '#4CAF50' }}
                >
                  {/* The percentage text is here but made invisible */}
                  <span className='invisible-text'>{XAMARINSKills}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDevModal;
