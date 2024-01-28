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
import './LawwebProjModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import webtemplateproj from '../assets/projects/work/lawwebProj/webtemplateProj.jpg';
import blog from '../assets/projects/work/lawwebProj/blog.png';
import aboutus from '../assets/projects/work/lawwebProj/aboutus.png';
import lawpractice from '../assets/projects/work/lawwebProj/lawpractice.png';
import lawyerprofile from '../assets/projects/work/lawwebProj/lawyerprofile.png';
import lawyerprofile1 from '../assets/projects/work/lawwebProj/lawyerprofile1.png';
import lawyerprofile2 from '../assets/projects/work/lawwebProj/lawyerprofile2.png';

function LawwebProjModal({ onClose }) {
  const DJANGOSkills = 55; // Set your desired percentage
  return (
    <div className="lawwebProj-modal-overlay" onClick={onClose}>
      <div className="lawwebProj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='lawwebProj-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='lawwebProj-modal-heading'>
          <div className='lawwebProj-modal-header'>
            <p>Law Website Template</p>
          </div>
          <div className='lawwebProj-modal-subheader'>
            <p>Internship Project | Front-end Developer | March 2023 - July 2023</p>
          </div>
        </div>
        <div className='lawwebProj-modal-body'>
          <div className='lawwebProj-modal-body-container'>
            <div className='lawwebProj-modal-body-row'>
              <div className='lawwebProj-modal-body-col'>
                <div className='lawwebProj-modal-body-leftcol'>
                  <div className='lawwebProj-modal-body-leftcol-upper'>
                    <div className='lawwebProj-modal-body-navrow'>
                      <div className='lawwebProj-modal-body-navrow-item'>
                        <p>ReactJS</p>
                      </div>
                      <div className='lawwebProj-modal-body-navrow-item'>
                        <p>Git</p>
                      </div>
                      <div className='lawwebProj-modal-body-navrow-item'>
                        <p>Figma</p>
                      </div>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-middle'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>User-friendly law website template, powered by Git for seamless updates, provides a professional online presence for legal practitioners. Backed by a MySQL database, it ensures efficient data management, making it an ideal platform for showcasing legal expertise, attorney profiles, and insightful legal resources."</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-lower'>
                  <div className='lawwebProj-modal-body-subheader'>
                    <p style={{ fontSize: '22px', textAlign: 'center', fontWeight: '900' }}>Learn more <IoIosArrowDown />
                    </p>
                  </div>
                  </div>
                </div>
                <div className='lawwebProj-modal-body-rightcol'>
                  <div className='lawwebProj-modal-body-imagecontainer'>

                  </div>
                </div>
              </div>
            </div>
            <div className='lawwebProj-modal-body-row'>
              <div className='lawwebProj-modal-body-col'>
                <div className='lawwebProj-modal-body-leftcol'>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-subheading'>
                      <p>Features overview</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>About Us</b></p>
                    </div>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>Discover the heart of our legal practice through our 'About Us' section. Learn about our firm's values, mission, and the dedicated team of legal professionals behind every case. Gain insight into our commitment to providing exceptional legal services and our journey in upholding justice for our clients.</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Lawyer's blog</b></p>
                    </div>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>Dive into the world of legal insights and updates with our Lawyer's Blog. Stay informed about the latest legal developments, case studies, and commentary from our experienced attorneys. Our blog serves as a valuable resource, offering a deeper understanding of various legal topics and sharing practical advice for individuals and businesses alike.</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Law Practice</b></p>
                    </div>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>Explore our comprehensive Law Practice section, where we outline the diverse areas of law we specialize in. From corporate law to family law, our practice spans a wide spectrum. Discover how our experienced legal team navigates various legal landscapes, providing tailored solutions to meet the unique needs of our clients.</p>
                    </div>
                  </div>
                </div>
                <div className='lawwebProj-modal-body-rightcol'>
                  <div className='lawwebProj-modal-body-imagecarousel'>
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
                    <SwiperSlide><img src={blog} alt="blog" /></SwiperSlide>
                    <SwiperSlide><img src={aboutus} alt="aboutus" /></SwiperSlide>
                    <SwiperSlide><img src={lawpractice} alt="lawpractice" /></SwiperSlide>
                  </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='lawwebProj-modal-body-row'>
              <div className='lawwebProj-modal-body-col'>
                <div className='lawwebProj-modal-body-leftcol'>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>List of Lawyers</b></p>
                    </div>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>Meet the faces behind our legal expertise with our List of Lawyers. Get to know our accomplished attorneys, each bringing their unique skills and experiences to the table. Explore individual profiles to understand the specialized areas each lawyer covers, ensuring you find the right legal professional for your specific needs.</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Lawyer's Rating</b></p>
                    </div>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>Transparency and client satisfaction are at the core of our services. Check out our Lawyer's Rating feature to see feedback and reviews from our valued clients. Gain insights into the experiences of others and make informed decisions when choosing the right legal representation for your needs.</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Lawyer's Schedule</b></p>
                    </div>
                    <div className='lawwebProj-modal-body-subheader'>
                      <p>Navigate legal consultations effortlessly with our Lawyer's Schedule feature. Check the availability of our legal professionals and schedule appointments at your convenience. This tool ensures a seamless and efficient process for clients to connect with our attorneys for personalized legal advice and guidance.</p>
                    </div>
                  </div>
                </div>
                <div className='lawwebProj-modal-body-rightcol'>
                  <div className='lawwebProj-modal-body-imagecarousel'>
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
                    <SwiperSlide><img src={lawyerprofile} alt="lawyerprofile" /></SwiperSlide>
                    <SwiperSlide><img src={lawyerprofile1} alt="lawyerprofile1" /></SwiperSlide>
                    <SwiperSlide><img src={lawyerprofile2} alt="lawyerprofile2" /></SwiperSlide>
                  </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='lawwebProj-modal-body-row'>
              <div className='lawwebProj-modal-body-col'>
                <div className='lawwebProj-modal-body-leftcol' style={{ width: '100%', height:'100%', display:"flex", justifyContent: 'start', alignItems:'start'}}>
                  <div className='lawwebProj-modal-body-leftcol-bodytext'>
                    <div className='lawwebProj-modal-subheading'>
                      <p>Tools and Technologies</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-navrow' >
                    <div className='lawwebProj-modal-body-navrow-item'>
                      <p>ReactJS</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>React JS takes center stage in our law website template, driving a dynamic and responsive user interface. Crafted with Figma, the template's design is meticulously shaped to provide an engaging and modern experience. React JS ensures seamless navigation and real-time interactions, creating an immersive platform for legal professionals and clients alike.</p>
                  </div>
                  <div className='lawwebProj-modal-body-navrow' >
                    <div className='lawwebProj-modal-body-navrow-item'>
                      <p>Figma</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>Figma serves as the creative powerhouse behind our law website template, offering an intuitive design platform. With Figma, our template is meticulously crafted to capture the essence of professionalism and user-friendliness. Design elements are easily shareable and collaborative, ensuring a consistent and visually appealing user interface. </p>
                  </div>
                  <div className='lawwebProj-modal-body-navrow' >
                    <div className='lawwebProj-modal-body-navrow-item'>
                      <p>Git</p>
                    </div>
                  </div>
                  <div className='lawwebProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>Git plays a crucial role in ensuring the reliability and collaborative development of our law website template. With Git, version control is streamlined, allowing developers to work concurrently on various aspects of the website. Changes are tracked, facilitating collaborative efforts and ensuring a cohesive and error-free development process. </p>
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

export default LawwebProjModal;
