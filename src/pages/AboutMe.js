// AboutMe.js
import React from 'react';
import './AboutMe.css';
import aboutmePic from '../assets/aboutmePic.png';

function AboutMe() {
  return (
    <div className='aboutme-container'>
      <div className="aboutme-heading">
        <p>About me</p>
      </div>
      <div className='aboutme-col-container'>
        <div className='aboutme-leftcol-container'>
        <img src={aboutmePic} className="aboutme-imageStyle"/>
       
        </div>
        <div className='aboutme-rightcol-container'>
          <p>Enthusiastic IT graduate with a strong coding passion and problem-solving acumen, possessing a solid software development background. Quick learner, detail-oriented, and committed to producing top-notch results. Eager to apply education and foster continuous growth in a dynamic tech company.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
