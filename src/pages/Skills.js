import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from './ScrollContext.js';
import './Skills.css';
import cSharp from '../assets/icons/cSharp.png';
import mySql from '../assets/icons/mysql.png';
import python from '../assets/icons/python.png';
import sap from '../assets/icons/sap.png';
import xamarin from '../assets/icons/xamarin.png';

function Skills() {
  const images = [
    cSharp,
    mySql,
    python,
    sap,
    xamarin
  ];

  const targetRef = useRef(null);
  const scrollRef = useScroll();

  useEffect(() => {
    scrollRef.current = targetRef.current;
  }, [targetRef, scrollRef]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-section" ref={targetRef}>
    <div className="carousel-container">
      <button className="prev-button" onClick={prevSlide}>
        Previous
      </button>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
    </div>
  );
}

export default Skills;
