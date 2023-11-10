import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Skills() {
  return (
    <div className="carousel-section">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>Soft Skills</p>
            <Swiper
              className="mySwiper2 swiper-v"
              direction={'vertical'}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>Vertical Slide 1</SwiperSlide>
              <SwiperSlide>Vertical Slide 2</SwiperSlide>
              <SwiperSlide>Vertical Slide 3</SwiperSlide>
            </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <p>Technical Skills</p>
            <Swiper
              className="mySwiper2 swiper-v"
              direction={'vertical'}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>Vertical Slide 1</SwiperSlide>
              <SwiperSlide>Vertical Slide 2</SwiperSlide>
              <SwiperSlide>Vertical Slide 3</SwiperSlide>
            </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Skills;


