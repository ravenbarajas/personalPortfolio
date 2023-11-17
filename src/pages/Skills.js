import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

import softSkill1 from '../assets/skills/softSkill1.jpg';
import softSkill2 from '../assets/skills/softSkill2.jpg';
import softSkill3 from '../assets/skills/softSkill3.jpg';
import softSkill4 from '../assets/skills/softSkill4.jpg';
import softSkill5 from '../assets/skills/softSkill5.jpg';

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
        <div className="soft-skill-heading">
          <p>People Skills</p>
        </div>
      <div className="skills-section"> 
        <div className="soft-skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={softSkill1}/>
          {isHovered && <div className="soft-skill-desc">
            <p className='skill-heading'>Team player</p>
            </div>}
        </div>
        <div className="soft-skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={softSkill2}/>
          {isHovered && <div className="soft-skill-desc">
            <p className='skill-heading'>Effective Leader</p>
            </div>}
        </div>
        <div className="soft-skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={softSkill3}/>
          {isHovered && <div className="soft-skill-desc">
            <p className='skill-heading'>Strategic Time Manager</p>
            </div>}
        </div>
        <div className="soft-skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={softSkill4}/>
          {isHovered && <div className="soft-skill-desc">
            <p className='skill-heading'>Problem Solver</p>
            </div>}
        </div>
        <div className="soft-skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={softSkill5}/>
          {isHovered && <div className="soft-skill-desc">
            <p className='skill-heading'>Critical Thinker</p>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Skills;


