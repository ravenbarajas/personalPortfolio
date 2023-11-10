import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from './ScrollContext.js';
import './AboutMeHeader.css';

import { Link } from 'react-router-dom';

import skills from '../assets/icons/aboutme-Skills.png';
import experience from '../assets/icons/aboutme-Work.png';
import projects from '../assets/icons/aboutme-Projects.png';
import education from '../assets/icons/aboutme-Education.png';

function AboutMeHeader() {

  const targetRef = useRef(null);
  const scrollRef = useScroll();

  useEffect(() => {
    scrollRef.current = targetRef.current;
  }, [targetRef, scrollRef]);

  return (
    <div className="carousel-heading" ref={targetRef}>
      <p className='aboutme-heading'>About me</p>
      <div className="aboutme-row">
        <Link to="/skills" className="link-button"> 
          <button className="aboutme-skills-btn" >
            <img src={skills} />
            <div className="aboutme-skills-btn-label">
              Skills
            </div>
          </button>
        </Link>
        <Link to="/experience" className="link-button">
          <button className="aboutme-work-btn">
            <img src={experience} />
            <div className="aboutme-work-btn-label" >
            Experience
            </div>
          </button>
        </Link>
        <Link to="/projects" className="link-button">
          <button className="aboutme-projects-btn">
            <img src={projects} />
            <div className="aboutme-projects-btn-label">
            Projects
            </div>
          </button>
        </Link>
        <Link to="/education" className="link-button">
            <button className="aboutme-education-btn">
              <img src={education} />
            <div className="aboutme-projects-btn-label">
            Education
            </div>
          </button>
        </Link>
      </div>
    </div>

  );
}

export default AboutMeHeader;
