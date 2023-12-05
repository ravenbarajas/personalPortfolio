import React, { useEffect, useRef, useState } from 'react';
import './PeopleSkill.css';

function PeopleSkill() {
  useEffect(() => {
    // Additional logic or side effects if needed
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (  
    <div className="people-skills-container">
      <div className='soft-skill-column'>
        <div className="soft-skill-heading">
          <p>People Skills</p>
        </div>
        <div className="soft-skills-section"> 
          <div className='soft-skills-row'>
            <div className="soft-skill">
              <div className="soft-skill-logo-1">
                <p>Effective Communicator</p>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-2">
                <p>Effective Leader</p>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-3">
                <p>Strategic Time Manager</p>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-4">
                <p>Problem Solver</p>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-5">
                <p>Attention to Detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
  );
}

export default PeopleSkill;