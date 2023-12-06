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
                <div className='soft-skill-logo-subheader-wbg'>
                    <p>Passionate</p>
                </div>
                <div className='soft-skill-logo-header-wbg'>
                    <p>Leader.</p>
                </div>
              </div>
              
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-2">
                <div className='soft-skill-logo-subheader-wbg'>
                    <p>Effective</p>
                </div>
                <div className='soft-skill-logo-header-wbg'>
                    <p>Communicator.</p>
                </div>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-3">
                <div className='soft-skill-logo-subheader'>
                    <p>Innovative</p>
                </div>
                <div className='soft-skill-logo-header'>
                    <p>Problem Solver.</p>
                </div>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-4">
                <div className='soft-skill-logo-subheader-wbg'>
                    <p>Strategic</p>
                </div>
                <div className='soft-skill-logo-header-wbg'>
                    <p>Time Manager.</p>
                </div>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-5">
                <div className='soft-skill-logo-subheader-wbg'>
                    <p>Precise</p>
                </div>
                <div className='soft-skill-logo-header-wbg'>
                    <p>Attention to Detail.</p>
                </div>
              </div>
            </div>
            <div className="soft-skill">
              <div className="soft-skill-logo-6">
                <div className='soft-skill-logo-subheader'>
                    <p>Precise</p>
                </div>
                <div className='soft-skill-logo-header'>
                    <p>Attention to Detail.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default PeopleSkill;