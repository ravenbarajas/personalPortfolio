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
import './InventoryProjModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

import pos from '../assets/projects/academic/inventoryProj/pos.png';
import manageinventory from '../assets/projects/academic/inventoryProj/manageinventory.png';
import generatereport from '../assets/projects/academic/inventoryProj/generatereport.png';

function InventoryProjModal({ onClose }) {
  const DJANGOSkills = 55; // Set your desired percentage
  return (
    <div className="inventoryProj-modal-overlay" onClick={onClose}>
      <div className="inventoryProj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='inventoryProj-modal-nav'>
          <img
              src={exitModal}
              alt="seemore"
              onMouseOver={(e) => (e.currentTarget.src = exitModalRed)}
              onMouseOut={(e) => (e.currentTarget.src = exitModal)}
              onClick={onClose}
            />
        </div>
        <div className='inventoryProj-modal-heading'>
          <div className='inventoryProj-modal-header'>
            <p>Inventory Handling System </p>
          </div>
          <div className='inventoryProj-modal-subheader'>
            <p>Applications Development Project | Group Leader | July 2022</p>
          </div>
        </div>
        <div className='inventoryProj-modal-body'>
          <div className='inventoryProj-modal-body-container'>
            <div className='inventoryProj-modal-body-row'>
              <div className='inventoryProj-modal-body-col'>
                <div className='inventoryProj-modal-body-leftcol'>
                  <div className='inventoryProj-modal-body-leftcol-upper'>
                    <div className='inventoryProj-modal-body-navrow'>
                      <div className='inventoryProj-modal-body-navrow-item'>
                        <p>C# .NET</p>
                      </div>
                      <div className='inventoryProj-modal-body-navrow-item'>
                        <p>MySQL</p>
                      </div>
                      <div className='inventoryProj-modal-body-navrow-item'>
                        <p>Crystal Reports</p>
                      </div>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-leftcol-middle'>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p>Inventory Management System tailored for desktop usage, crafted with C# .NET for seamless functionality. Backed by a MySQL database, this system ensures efficient data storage and retrieval. Crystal Reports is integrated for comprehensive and customizable reporting capabilities, providing in-depth insights into inventory trends and analytics. This desktop application offers a user-friendly interface, empowering the management of phone store inventory with precision and detailed reporting to optimize stock management strategies.</p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-leftcol-lower'>
                  <div className='inventoryProj-modal-body-subheader'>
                    <p style={{ fontSize: '22px', textAlign: 'center', fontWeight: '900' }}>Learn more <IoIosArrowDown />
                    </p>
                  </div>
                  </div>
                </div>
                <div className='inventoryProj-modal-body-rightcol'>
                  <div className='inventoryProj-modal-body-imagecontainer'>

                  </div>
                </div>
              </div>
            </div>
            <div className='inventoryProj-modal-body-row'>
              <div className='inventoryProj-modal-body-col'>
                <div className='inventoryProj-modal-body-leftcol'>
                  <div className='inventoryProj-modal-body-leftcol-bodytext'>
                    <div className='inventoryProj-modal-subheading'>
                      <p>Features Overview</p>
                    </div>  
                  </div>
                  <div className='inventoryProj-modal-body-leftcol-bodytext'>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Inventory Management</b></p>
                    </div>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p>The Inventory Management feature is the backbone of the system, providing a user-friendly interface for meticulous control over the phone store's inventory. Users can effortlessly view, update, and manage stock levels, ensuring accurate and real-time tracking of available items. </p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-leftcol-bodytext'>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Reports Generation</b></p>
                    </div>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p>Generate Reports feature empowers users to derive actionable insights from the inventory data. Leveraging Crystal Reports, users can effortlessly create detailed and customizable reports on various aspects of inventory management. These reports may include stock levels, transaction histories, supplier deliveries, and return statistics.</p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-leftcol-bodytext'>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Point of Sales</b></p>
                    </div>
                    <div className='inventoryProj-modal-body-subheader'>
                      <p> POS feature facilitates the seamless recording of crucial information related to inventory transactions. Users can efficiently record updates on delivery receptions, return processes, and any other inventory-related activities. This feature ensures the accuracy and completeness of the inventory records, contributing to transparent and traceable inventory management practices.</p>
                    </div>
                  </div>
                </div>
                <div className='inventoryProj-modal-body-rightcol'>
                  <div className='inventoryProj-modal-body-imagecarousel'>
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
                      <SwiperSlide><img src={manageinventory} alt="manageinventory" /></SwiperSlide>
                      <SwiperSlide><img src={generatereport} alt="generatereport" /></SwiperSlide>
                      <SwiperSlide><img src={pos} alt="pos" /></SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='inventoryProj-modal-body-row'>
              <div className='inventoryProj-modal-body-col'>
                <div className='inventoryProj-modal-body-leftcol' style={{ width: '100%', height:'100%', display:"flex", justifyContent: 'start', alignItems:'start'}}>
                  <div className='inventoryProj-modal-body-leftcol-bodytext'>
                    <div className='inventoryProj-modal-subheading'>
                      <p>Tools and Technologies</p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-navrow' >
                    <div className='inventoryProj-modal-body-navrow-item'>
                      <p>C# .NET</p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>C# .NET serves as the primary programming language for developing the desktop application. It enables the creation of a robust and responsive user interface, streamlining the overall functionality of the Inventory Management System. C# .NET ensures seamless communication between various components of the system and enhances the user experience.</p>
                  </div>
                  <div className='inventoryProj-modal-body-navrow' >
                    <div className='inventoryProj-modal-body-navrow-item'>
                      <p>MySQL</p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>MySQL serves as the relational database management system for the Inventory Management System. It efficiently stores and retrieves data related to inventory transactions, stock levels, and other critical information. MySQL ensures data integrity, scalability, and reliability, supporting the backend operations of the system and contributing to efficient inventory management practices.</p>
                  </div>
                  <div className='inventoryProj-modal-body-navrow' >
                    <div className='inventoryProj-modal-body-navrow-item'>
                      <p>Crystal Reports</p>
                    </div>
                  </div>
                  <div className='inventoryProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>Crystal Reports is integrated into the system for advanced reporting capabilities. It allows users to generate detailed and customizable reports on various aspects of inventory management, including stock levels, transaction histories, and supplier deliveries. Crystal Reports provides a powerful tool for visualizing and analyzing data, supporting informed decision-making.</p>
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

export default InventoryProjModal;
