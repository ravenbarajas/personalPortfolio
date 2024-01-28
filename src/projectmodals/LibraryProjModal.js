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
import './LibraryProjModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import borrowbook from '../assets/projects/academic/libraryProj/borrowbook.png';
import returnbook from '../assets/projects/academic/libraryProj/returnbook.png';
import bookinfo from '../assets/projects/academic/libraryProj/returnbook.png';
import generatereport from '../assets/projects/academic/libraryProj/generatereport.png';
import reportlost from '../assets/projects/academic/libraryProj/reportlost.png';
import studentinfo from '../assets/projects/academic/libraryProj/studentinfo.png';

function LibraryProjModal({ onClose }) {
  return (
    <div className="libraryProj-modal-overlay" onClick={onClose}>
      <div className="libraryProj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='libraryProj-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='libraryProj-modal-heading'>
          <div className='libraryProj-modal-header'>
            <p>Library Management System </p>
          </div>
          <div className='libraryProj-modal-subheader'>
            <p>SHS Final Project | Group Leader | March 2019</p>
          </div>
        </div>
        <div className='libraryProj-modal-body'>
          <div className='libraryProj-modal-body-container'>
            <div className='libraryProj-modal-body-row'>
              <div className='libraryProj-modal-body-col'>
                <div className='libraryProj-modal-body-leftcol'>
                  <div className='libraryProj-modal-body-leftcol-upper'>
                    <div className='libraryProj-modal-body-navrow'>
                      <div className='libraryProj-modal-body-navrow-item'>
                        <p>C# .NET</p>
                      </div>
                      <div className='libraryProj-modal-body-navrow-item'>
                        <p>MySQL</p>
                      </div>
                      <div className='libraryProj-modal-body-navrow-item'>
                        <p>Crystal Reports</p>
                      </div>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-leftcol-middle'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Library Management System designed for desktop usage, developed with C# .NET for streamlined functionality. Supported by a MySQL database, this system guarantees efficient data storage and retrieval, managing a vast array of library resources, borrower information, and administrative tasks. Integration of Crystal Reports enhances reporting capabilities, enabling detailed insights into book inventory, borrowing trends, and overdue items. </p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-leftcol-lower'>
                  <div className='libraryProj-modal-body-subheader'>
                    <p style={{ fontSize: '22px', textAlign: 'center', fontWeight: '900' }}>Learn more <IoIosArrowDown />
                    </p>
                  </div>
                  </div>
                </div>
                <div className='libraryProj-modal-body-rightcol'>
                  <div className='libraryProj-modal-body-imagecontainer'>

                  </div>
                </div>
              </div>
            </div>
            <div className='libraryProj-modal-body-row'>
              <div className='libraryProj-modal-body-col'>
                <div className='libraryProj-modal-body-leftcol'>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-subheading'>
                      <p>Features Overview</p>
                    </div>  
                  </div>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Borrow Book</b></p>
                    </div>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Facilitate a seamless borrowing experience with the Borrow Book feature. Users can easily browse available books, check out their desired titles, and efficiently complete the borrowing process. This feature ensures a user-friendly and efficient way for library patrons to access the resources they need.</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Return Book</b></p>
                    </div>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Simplify the return process with the Return Book feature. Users can effortlessly return borrowed items, update the system with accurate return dates, and clear outstanding transactions. This feature streamlines the handling of returned books, contributing to an organized and efficient library circulation system.</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Generate Report</b></p>
                    </div>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Empower administrators with valuable insights using the Generate Report feature. Crystal Reports integration allows for the creation of detailed reports on various library metrics, including book inventory, borrowing patterns, and overdue items. This feature aids in informed decision-making and strategic planning for library management.</p>
                    </div>
                  </div>
                </div>
                <div className='libraryProj-modal-body-rightcol'>
                  <div className='libraryProj-modal-body-imagecarousel'>
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
                      <SwiperSlide><img src={borrowbook} alt="borrowbook" /></SwiperSlide>
                      <SwiperSlide><img src={returnbook} alt="returnbook" /></SwiperSlide>
                      <SwiperSlide><img src={generatereport} alt="generatereport" /></SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='libraryProj-modal-body-row'>
              <div className='libraryProj-modal-body-col'>
                <div className='libraryProj-modal-body-leftcol'>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Report Lost</b></p>
                    </div>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Streamline the reporting of lost items with the Report Lost feature. Users can efficiently notify the library about lost books, enabling prompt action. This feature ensures a straightforward process for handling lost items, helping library staff maintain accurate records and address issues effectively.</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Manage Users</b></p>
                    </div>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Efficiently handle user information with the Manage Users feature. Library administrators can easily add, update, or remove user details, ensuring accurate records of patrons. This feature contributes to a well-organized user management system, enhancing communication and user services within the library.</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Search Book Info</b></p>
                    </div>
                    <div className='libraryProj-modal-body-subheader'>
                      <p>Facilitate quick access to book details with the Search Book Info feature. Users can efficiently search for information on specific books, including availability, author details, and location within the library. This feature enhances the user experience by providing instant access to the information users need for their research or reading preferences.</p>
                    </div>
                  </div>
                </div>
                <div className='libraryProj-modal-body-rightcol'>
                  <div className='libraryProj-modal-body-imagecarousel'>
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
                      <SwiperSlide><img src={reportlost} alt="reportlost" /></SwiperSlide>
                      <SwiperSlide><img src={studentinfo} alt="studentinfo" /></SwiperSlide>
                      <SwiperSlide><img src={bookinfo} alt="bookinfo" /></SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='libraryProj-modal-body-row'>
              <div className='libraryProj-modal-body-col'>
                <div className='libraryProj-modal-body-leftcol' style={{ width: '100%', height:'100%', display:"flex", justifyContent: 'start', alignItems:'start'}}>
                  <div className='libraryProj-modal-body-leftcol-bodytext'>
                    <div className='libraryProj-modal-subheading'>
                      <p>Tools and Technologies</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-navrow' >
                    <div className='libraryProj-modal-body-navrow-item'>
                      <p>C# .NET</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>C# .NET forms the backbone of the library management system, facilitating the development of a comprehensive desktop application. It enables the creation of a user-friendly interface for managing library resources, borrower information, and administrative tasks. C# .NET ensures seamless integration between different modules of the system, enhancing efficiency and usability.</p>
                  </div>
                  <div className='libraryProj-modal-body-navrow' >
                    <div className='libraryProj-modal-body-navrow-item'>
                      <p>MySQL</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>MySQL serves as the database management system for storing and managing data within the library management system. It efficiently stores information related to books, borrowers, transactions, and library configurations. MySQL ensures data integrity, scalability, and reliability, supporting the seamless operation of the library management system and enabling efficient retrieval of information.</p>
                  </div>
                  <div className='libraryProj-modal-body-navrow' >
                    <div className='libraryProj-modal-body-navrow-item'>
                      <p>Crystal Reports</p>
                    </div>
                  </div>
                  <div className='libraryProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>Crystal Reports is employed to enhance reporting functionalities within the library management system. It empowers users to generate detailed reports on various aspects such as book inventory, borrowing trends, and overdue items. Crystal Reports enables library administrators to gain valuable insights into library operations, facilitating data-driven decision-making and resource allocation.</p>
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

export default LibraryProjModal;
