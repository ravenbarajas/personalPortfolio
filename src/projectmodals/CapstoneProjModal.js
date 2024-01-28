// FrontendDevModal.js

import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import './CapstoneProjModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import intropage from '../assets/projects/academic/capstoneProj/IntroPage_Part 1.png';
import login from '../assets/projects/academic/capstoneProj/Login.png';
import page1 from '../assets/projects/academic/capstoneProj/page1.png';

function CapstoneProjModal({ onClose }) {
  const DJANGOSkills = 55; // Set your desired percentage
  return (
    <div className="capstoneProj-modal-overlay" onClick={onClose}>
      <div className="capstoneProj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='capstoneProj-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='capstoneProj-modal-heading'>
          <div className='capstoneProj-modal-header'>
            <p>Hybrid Recipe Recommendation System</p>
          </div>
          <div className='capstoneProj-modal-subheader'>
            <p>Capstone Project | Group Leader | August 2022 - February 2023</p>
          </div>
        </div>
        <div className='capstoneProj-modal-body'>
          <div className='capstoneProj-modal-body-container'>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol'>
                  <div className='capstoneProj-modal-body-leftcol-upper'>
                    <div className='capstoneProj-modal-body-navrow'>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Xamarin</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>React .js</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Django</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Python</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Django REST</p>
                      </div>
                    </div>
                    <div className='capstoneProj-modal-body-navrow'>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Firebase Database</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>PostgreSQL</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Google Cloud Platforms</p>
                      </div>
                    </div>
                    <div className='capstoneProj-modal-body-navrow'>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Pandas</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>NumPy</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Matplotlib</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Tableau</p>
                      </div>
                    </div>
                    <div className='capstoneProj-modal-body-navrow'>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>JIRA</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Git</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>ClickUp</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Figma</p>
                      </div>
                      <div className='capstoneProj-modal-body-navrow-item'>
                        <p>Photoshop</p>
                      </div>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-middle'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>A hybrid recipe recommender system using Xamarin for mobile, Django with Django Rest Framework for the backend API, React for the web interface, and Firebase for the database. Powered by collaborative filtering and TF-IDF algorithms to deliver tailored recipe suggestions based on user preferences and engagement.</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-lower'>
                  <div className='capstoneProj-modal-body-subheader'>
                    <p style={{ fontSize: '22px', textAlign: 'center', fontWeight: '900' }}>Learn more <IoIosArrowDown />
                    </p>
                  </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol'>
                  <div className='capstoneProj-modal-body-imagecontainer'>

                  </div>
                </div>
              </div>
            </div>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol'>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-subheading'>
                      <p>Features overview</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Xamarin for Mobile Application</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Implemented a cross-platform mobile application using C# and Xamarin, providing a seamless and consistent user experience across various devices. Leveraging Xamarin's capabilities, the application delivers high performance and native-like functionality, catering to a broad audience of mobile users.</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>User Authentication</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Implemented a secure and seamless user authentication system to ensure user data privacy and provide personalized experiences. Users can create accounts, log in securely, and enjoy personalized features tailored to their preferences. </p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Search and Filtering</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Developed a robust search and filtering system that empowers users to efficiently navigate and locate specific content within the platform. Users can easily search for items or apply various filters to streamline information, enhancing the overall usability and accessibility of the system.</p>
                    </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol'>
                  <div className='capstoneProj-modal-body-imagecarousel'>
                  <Swiper spaceBetween={30} 
                          loop={true}   
                          centeredSlides={true}
                          autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,}}
                    pagination={{ clickable: true,}}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide><img src={intropage} alt="intropage" /></SwiperSlide>
                    <SwiperSlide><img src={login} alt="login" /></SwiperSlide>
                    <SwiperSlide><img src={page1} alt="page1" /></SwiperSlide>
                  </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol'>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Recipe Creation</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Implemented a user-friendly recipe creation feature that empowers users to craft and share their culinary creations. Users can easily input details such as ingredients, quantities, and step-by-step instructions. </p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Ingredient Selection</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Developed a dynamic ingredient selection system that allows users to explore and choose from a diverse range of ingredients for their recipes. Users can search, filter, and select ingredients based on preferences or dietary restrictions. This feature enhances the versatility and personalization of recipes, catering to individual tastes and dietary needs. </p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Recipe Recommendation Generation</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Implemented an intelligent recipe recommendation engine that generates personalized recipe suggestions based on user preferences, past selections, and trending culinary trends. The recommendation system leverages algorithms to analyze user behavior, ensuring that the suggested recipes align with individual tastes and preferences. </p>
                    </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol'>
                  <div className='capstoneProj-modal-body-imagecarousel'>
                  <Swiper spaceBetween={30} 
                          loop={true}   
                          centeredSlides={true}
                          autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,}}
                    pagination={{ clickable: true,}}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide><img src={intropage} alt="intropage" /></SwiperSlide>
                    <SwiperSlide><img src={login} alt="login" /></SwiperSlide>
                    <SwiperSlide><img src={page1} alt="page1" /></SwiperSlide>
                  </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapstoneProjModal;
