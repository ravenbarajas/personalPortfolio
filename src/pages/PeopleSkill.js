import React, { useEffect, useRef, useState } from 'react';
import './PeopleSkill.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import seemore from '../assets/seemore.png';

function PeopleSkill() {
  useEffect(() => {
    // Additional logic or side effects if needed
  }, []); // Empty dependency array means this effect runs once when the component mounts
  return (  
    <div className="people-skills-container">
      <div className='soft-skill-column'>
        <div className="soft-skill-heading">
          <p>People Skills</p>
        </div>
        <div className="soft-skills-section"> 
            <div className='soft-skills-outer-row'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='soft-skills-inner-row'>
                            <div className="soft-skill">
                                <div className="soft-skill-logo-1">
                                    <div className='soft-skill-header-container'>
                                        <div className='soft-skill-logo-subheader-wbg'>
                                            <p>Passionate</p>
                                        </div>
                                        <div className='soft-skill-logo-header-wbg'>
                                            <p>Leader.</p>
                                        </div>
                                    </div>
                                    <div className='soft-skill-logo-card-seemore'>
                                    <img src={seemore} alt="seemore" />
                                    </div>
                                </div>
                            </div> 
                            <div className="soft-skill">
                                <div className="soft-skill-logo-2">
                                    <div className='soft-skill-header-container'>
                                        <div className='soft-skill-logo-subheader-wbg'>
                                            <p>Effective</p>
                                        </div>
                                        <div className='soft-skill-logo-header-wbg'>
                                            <p>Communicator.</p>
                                        </div>
                                    </div>
                                    <div className='soft-skill-logo-card-seemore'>
                                    <img src={seemore} alt="seemore" />
                                    </div>
                                </div>
                            </div>
                            <div className="soft-skill">
                                <div className="soft-skill-logo-3">
                                    <div className='soft-skill-header-container'>
                                        <div className='soft-skill-logo-subheader'>
                                            <p>Efficient</p>
                                        </div>
                                        <div className='soft-skill-logo-header'>
                                            <p>Time Manager.</p>
                                        </div>
                                    </div>
                                    <div className='soft-skill-logo-card-seemore'>
                                    <img src={seemore} alt="seemore" />
                                    </div>
                                </div>
                            </div>
                            <div className="soft-skill">
                                <div className="soft-skill-logo-4">
                                    <div className='soft-skill-header-container'>
                                        <div className='soft-skill-logo-subheader-wbg'>
                                            <p>Innovative</p>
                                        </div>
                                        <div className='soft-skill-logo-header-wbg'>
                                            <p>Problem Solver.</p>
                                        </div>
                                    </div>
                                    <div className='soft-skill-logo-card-seemore'>
                                    <img src={seemore} alt="seemore" />
                                    </div>
                                </div>
                            </div>
                            <div className="soft-skill">
                            <div className="soft-skill-logo-5">
                                <div className='soft-skill-header-container'>
                                    <div className='soft-skill-logo-subheader-wbg'>
                                        <p>Precise</p>
                                    </div>
                                    <div className='soft-skill-logo-header-wbg'>
                                        <p>Attention to Detail.</p>
                                    </div>
                                </div>
                                <div className='soft-skill-logo-card-seemore'>
                                <img src={seemore} alt="seemore" />
                                </div>
                            </div>
                            </div>
                            <div className="soft-skill">
                            <div className="soft-skill-logo-6">
                                <div className='soft-skill-header-container'>
                                    <div className='soft-skill-logo-subheader'>
                                        <p>Strategic</p>
                                    </div>
                                    <div className='soft-skill-logo-header'>
                                        <p>Critical Thinker.</p>
                                    </div>
                                </div>
                                <div className='soft-skill-logo-card-seemore'>
                                <img src={seemore} alt="seemore" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleSkill;