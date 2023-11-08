import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from './ScrollContext.js';
import './AboutMeHeader.css';

import skills from '../assets/icons/aboutme-Skills.png';
import work from '../assets/icons/aboutme-Work.png';
import projects from '../assets/icons/aboutme-Projects.png';
import education from '../assets/icons/aboutme-Education.png';

function AboutMeHeader() {
  return (
    <div className="carousel-heading">
      <p className='aboutme-heading'>About me</p>
      <div className="aboutme-row">
      <button className="aboutme-skills-btn">
        <img src={skills} />
        <div className="aboutme-skills-btn-label">
          Skills
        </div>
      </button>
      <button className="aboutme-work-btn">
        <img src={work} />
        <div className="aboutme-work-btn-label">
        Experience
        </div>
      </button>
      <button className="aboutme-projects-btn">
        <img src={projects} />
        <div className="aboutme-projects-btn-label">
        Projects
        </div>
      </button>
        <button className="aboutme-education-btn">
          <img src={education} />
        <div className="aboutme-projects-btn-label">
        Education
        </div>
      </button>
      </div>
    </div>

  );
}

export default AboutMeHeader;
