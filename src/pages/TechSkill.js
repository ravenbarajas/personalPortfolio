import React, { useEffect, useRef, useState } from 'react';
import './TechSkill.css';

import html5Tech from '../assets/skills/html5Tech.png';
import css3Tech from '../assets/skills/css3Tech.png';
import jsTech from '../assets/skills/jsTech.png';
import reactTech from '../assets/skills/reactTech.png';

import pythonTech from '../assets/skills/pythonTech.png';
import phpTech from '../assets/skills/phpTech.png';
import mysqlTech from '../assets/skills/mysqlTech.png';
import firebaseTech from '../assets/skills/firebaseTech.png';

import xamarinTech from '../assets/skills/xamarinTech.png';
import flutterTech from '../assets/skills/flutterTech.png';
import dotnetTech from '../assets/skills/dotnetTech.png';

import csharpTech from '../assets/skills/csharpTech.png';
import javaTech from '../assets/skills/javaTech.png';

import trelloTech from '../assets/skills/trelloTech.png';
import clickupTech from '../assets/skills/clickupTech.png';
import gitTech from '../assets/skills/gitTech.png';

import numpyTech from '../assets/skills/numpyTech.png';
import tableuTech from '../assets/skills/tableuTech.png';

function TechSkill() {
  useEffect(() => {
    // Additional logic or side effects if needed
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (  
    <div className="tech-skills-container">
      <div className='technical-skill-column'>
        <div className="technical-skill-heading">
          <p>Technical Skills</p>
        </div>
        <div className="technical-skills-section"> 
          <div className='technical-skills-row'>
            <div className="technical-skill-card-1">
              <div className='tech-skill-logo-card-1'>
                <p>Frontend Development</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={html5Tech} alt="HTML5" /></div>
                <div className="tech-grid-item"><img src={css3Tech} alt="CSS3" /></div>
                <div className="tech-grid-item"><img src={jsTech} alt="JavaScript" /></div>
                <div className="tech-grid-item"><img src={reactTech} alt="React" /></div>
              </div>
            </div>
            <div className="technical-skill-card-2">
              <div className='tech-skill-logo-card-2'>
                <p>Backend Development</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={pythonTech} alt="pythonTech" /></div>
                <div className="tech-grid-item"><img src={phpTech} alt="phpTech" /></div>
                <div className="tech-grid-item"><img src={firebaseTech} alt="firebaseTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-3">
                <div className='tech-skill-logo-card-3'>
                  <p>Mobile Development</p>
                </div>
                <div className='tech-skill-desc'>
                  <div className="tech-grid-item"><img src={xamarinTech} alt="xamarinTech" /></div>
                  <div className="tech-grid-item"><img src={flutterTech} alt="flutterTech" /></div>
                  <div className="tech-grid-item"><img src={dotnetTech} alt="dotnetTech" /></div>
                </div>
            </div>
          </div>
          <div className='technical-skills-row'>
            <div className="technical-skill-card-4">
              <div className='tech-skill-logo-card-4'>
                <p>Desktop Development</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={csharpTech} alt="csharpTech" /></div>
                <div className="tech-grid-item"><img src={javaTech} alt="javaTech" /></div>
                <div className="tech-grid-item"><img src={mysqlTech} alt="mysqlTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-5">
              <div className='tech-skill-logo-card-5'>
                <p>Project Management</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={trelloTech} alt="trelloTech" /></div>
                <div className="tech-grid-item"><img src={gitTech} alt="gitTech" /></div>
                <div className="tech-grid-item"><img src={clickupTech} alt="clickupTech" /></div>
              </div>
            </div>
            <div className="technical-skill-card-6">
              <div className='tech-skill-logo-card-6'>
                <p>Data Analytics</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={numpyTech} alt="numpyTech" /></div>
                <div className="tech-grid-item"><img src={tableuTech} alt="tableuTech" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;