import React from 'react';
import yourImage from '../assets/gradpic.png';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="containerStyle">
        <div className="leftColumnStyle">
          <p className="greeting-heading">Hey, I'm Carl Raven. </p>
          <p className="greeting-heading">Hey, I'm Carl Raven. </p>
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
