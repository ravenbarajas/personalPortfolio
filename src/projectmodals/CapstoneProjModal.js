// FrontendDevModal.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated imports

import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import './CapstoneProjModal.css'; // Import the CSS file

import exitModal from '../assets/exitModal.png';
import exitModalRed from '../assets/exitModalRed.png';

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
                </div>
              </div>
            </div>
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
                    <p style={{ fontSize: '18px', textAlign: 'center', fontWeight: '900' }}>Learn more <FaArrowUpRightFromSquare />
                    </p>
                  </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol'>
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
