import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

import softSkill1 from '../assets/skills/softSkill1.jpg';
import softSkill2 from '../assets/skills/softSkill2.jpg';
import softSkill3 from '../assets/skills/softSkill3.jpg';
import softSkill4 from '../assets/skills/softSkill4.jpg';
import softSkill5 from '../assets/skills/softSkill5.jpg';

import frontendDev from '../assets/skills/frontendDev.png';

import html5Tech from '../assets/skills/html5Tech.png';
import css3Tech from '../assets/skills/css3Tech.png';
import jsTech from '../assets/skills/jsTech.png';
import bootstrapTech from '../assets/skills/bootstrapTech.png';
import reactTech from '../assets/skills/reactTech.png';

import backendDev from '../assets/skills/backendDev.png';

import pythonTech from '../assets/skills/pythonTech.png';
import phpTech from '../assets/skills/phpTech.png';
import mysqlTech from '../assets/skills/mysqlTech.png';
import firebaseTech from '../assets/skills/firebaseTech.png';

import mobileDev from '../assets/skills/mobileDev.png';

import xamarinTech from '../assets/skills/xamarinTech.png';
import flutterTech from '../assets/skills/flutterTech.png';
import dotnetTech from '../assets/skills/dotnetTech.png';

import desktopDev from '../assets/skills/desktopDev.png';

import csharpTech from '../assets/skills/csharpTech.png';
import javaTech from '../assets/skills/javaTech.png';

import projectmanTools from '../assets/skills/projectmanTools.png';

import trelloTech from '../assets/skills/trelloTech.png';
import clickupTech from '../assets/skills/clickupTech.png';
import gitTech from '../assets/skills/gitTech.png';

import effectivecommSoft from '../assets/skills/effectivecommSoft.png';

function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // Additional logic or side effects if needed
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (  
    <div className="skills-container">
      
      <div className='technical-skill-column'>
        <div className="technical-skill-heading">
          <p>Technical Skills</p>
        </div>
        <div className="technical-skills-section"> 
          <div className='technical-skills-row'>
            <div className="technical-skill">
              <div className='tech-skill-logo'>
                <img src={frontendDev}/>
                <p>Frontend Development</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={html5Tech} alt="HTML5" /></div>
                <div className="tech-grid-item"><img src={css3Tech} alt="CSS3" /></div>
                <div className="tech-grid-item"><img src={jsTech} alt="JavaScript" /></div>
                <div className="tech-grid-item"><img src={bootstrapTech} alt="Bootstrap" /></div>
                <div className="centered-item"><img src={reactTech} alt="React" /></div>
              </div>
            </div>
            <div className="technical-skill">
              <div className='tech-skill-logo'>
                <img src={backendDev}/>
                <p>Backend Development</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={pythonTech} alt="pythonTech" /></div>
                <div className="tech-grid-item"><img src={phpTech} alt="phpTech" /></div>
                <div className="tech-grid-item"><img src={firebaseTech} alt="firebaseTech" /></div>
              </div>
            </div>
          </div>
          <div className='technical-skills-row'>
            <div className="technical-skill">
                <div className='tech-skill-logo'>
                  <img src={mobileDev}/>
                  <p>Mobile Development</p>
                </div>
                <div className='tech-skill-desc'>
                  <div className="tech-grid-item"><img src={xamarinTech} alt="xamarinTech" /></div>
                  <div className="tech-grid-item"><img src={flutterTech} alt="flutterTech" /></div>
                  <div className="centered-item"><img src={dotnetTech} alt="dotnetTech" /></div>
                </div>
            </div>
            <div className="technical-skill">
              <div className='tech-skill-logo'>
                <img src={desktopDev}/>
                <p>Desktop Development</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={csharpTech} alt="csharpTech" /></div>
                <div className="tech-grid-item"><img src={javaTech} alt="javaTech" /></div>
                <div className="tech-grid-item"><img src={mysqlTech} alt="mysqlTech" /></div>
              </div>
            </div>
          </div>
          <div className='technical-skills-row'>
            <div className="technical-skill">
              <div className='tech-skill-logo'>
                <img src={projectmanTools}/>
                <p>Project Management</p>
              </div>
              <div className='tech-skill-desc'>
                <div className="tech-grid-item"><img src={trelloTech} alt="trelloTech" /></div>
                <div className="tech-grid-item"><img src={gitTech} alt="gitTech" /></div>
                <div className="tech-grid-item"><img src={clickupTech} alt="clickupTech" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='soft-skill-column'>
        <div className="soft-skill-heading">
          <p>People Skills</p>
        </div>
        <div className="soft-skills-section"> 
          <div className="soft-skill">
            <div className="soft-skill-logo">
              <img src={effectivecommSoft}/>
              <p>Effective Communication</p>
            </div>
          </div>
        </div>
      </div>

      </div>
  );
}

export default Skills;


