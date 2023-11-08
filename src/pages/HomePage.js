import yourImage from '../assets/gradpic.png';
import ravenLogo from '../assets/icons/ravenIcon.png';
import React, { useRef } from 'react';
import { useScroll } from './ScrollContext.js';
import './HomePage.css';

function HomePage() {
    const scrollToSection = () => {
        const section = document.getElementById('scrollToSection');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const scrollRef = useScroll();
    const scrollToTargetSection = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    };
  return (
    <div>
      <div className="containerStyle">
        <div className="leftColumnStyle">
          <img className="greeting-icon" src={ravenLogo} alt="Raven Logo" />
          <p className="greeting-heading">Hey, I'm Carl Raven. </p>
          <p className="greeting-heading-role-1">Software</p>
          <p className="greeting-heading-role-2">Developer</p>
        <div className='greeting-div'>
            <button className='greeting-btn' onClick={scrollToTargetSection}>Get to know me</button>
        </div>

        </div>
        <div className="rightColumnStyle">
            <div className="blob-frame">
            <img
                src={yourImage}
                alt="Your Image"
                className="imageStyle"
            />
            </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
