import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from './ScrollContext.js';
import './AboutMe.css';
import cSharp from '../assets/icons/cSharp.png';
import mySql from '../assets/icons/mysql.png';
import python from '../assets/icons/python.png';
import sap from '../assets/icons/sap.png';
import xamarin from '../assets/icons/xamarin.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AboutMe() {
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

  return (
    <div className="carousel-section" ref={targetRef}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

        <SwiperSlide>
            <div className='aboutme-slide1'>
                <div className='aboutme-slide1-colleft'>
                
                </div>
                <div className='aboutme-slide1-colright'>
                <p className='aboutme-school1'>A proud graduate of</p>
                <p className='aboutme-school2'>Polytechnic University</p>
                <p className='aboutme-school3'>of the Philippines.</p>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='aboutme-slide2'>
                <div className='aboutme-slide2-colleft'>
                <p className='aboutme-school1'>Worked as a</p>
                <p className='aboutme-school2'>Web Developer Intern at</p>
                <p className='aboutme-school3'>LexMeet, Inc.</p>
                </div>
                <div className='aboutme-slide2-colright'>
                
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='aboutme-slide2'>
                <div className='aboutme-slide2-colleft'>
                <p className='aboutme-school1'>Strong and Effective</p>
                <p className='aboutme-school2'>Leader.</p>
                </div>
                <div className='aboutme-slide2-colright'>
                
                </div>
            </div></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AboutMe;
