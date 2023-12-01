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
          <div className='aboutme-img-container1'>
            <img src={aboutmePic} className="aboutme-imageStyle"/>
          </div>
        </div>
        <div className='aboutme-rightcol-container'>
          <p>IT graduate from Polytechnic University of the Philippines with a strong coding passion and problem-solving acumen, possessing a solid software development background. Quick learner, detail-oriented, and eager apply education and foster continuous growth in a dynamic tech company.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
