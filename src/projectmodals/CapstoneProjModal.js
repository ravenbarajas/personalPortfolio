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

import systemarchitecture from '../assets/projects/academic/capstoneProj/systemarchitecture.png';
import mobilearchitecture from '../assets/projects/academic/capstoneProj/mobilearchitecture.png';
import recommendationengine from '../assets/projects/academic/capstoneProj/recommendationengine.png';
import datamanagement from '../assets/projects/academic/capstoneProj/datamanagement.png';
import intropage from '../assets/projects/academic/capstoneProj/IntroPage_Part 1.png';
import login from '../assets/projects/academic/capstoneProj/Login.png';
import page1 from '../assets/projects/academic/capstoneProj/page1.png';
import createrecipe from '../assets/projects/academic/capstoneProj/createrecipe.png';
import recipeslection from '../assets/projects/academic/capstoneProj/RecipeSelection.png';
import recommendationresults from '../assets/projects/academic/capstoneProj/RecommendationResult.png';

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
                <div className='capstoneProj-modal-body-leftcol' style={{ width: '30%' }}>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-subheading'>
                      <p>Architecture Overview</p>
                    </div>  
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'style={{paddingBottom:"1rem" }}>
                      <p>Built on Xamarin, this mobile app features modules for personalized recipe presentation, creation, and user management. The recommendation engine employs collaborative and content-based filtering, with a hybrid approach for diverse suggestions.</p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader' >
                      <p>Comprehensive datasets support model training, and the Recipe Management Module, backed by Django and Django Rest Framework, offers an efficient Content Management System (CMS) with a ReactJS frontend. This architecture ensures a seamless and personalized culinary experience, combining powerful recommendation algorithms with an intuitive user interface.</p>
                    </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol' style={{ width: '70%' , display: 'flex', justifyContent:"center", alignItems:"center" }}>
                  <div className='capstoneProj-modal-body-imagecarousel' style={{ width: '100%'}}> 
                    <img src={systemarchitecture} alt="systemarchitecture" style={{ width: '100%', height:'100%'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol'>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-subheading'>
                      <p>Mobile Architecture Overview</p>
                    </div>  
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Recipe Presentation Module</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Responsible for showcasing recipes to users. It tailors the display based on individual user preferences, incorporating collaborative filtering techniques to suggest recipes liked by users with similar tastes. Additionally, it utilizes content-based recommendations, ensuring a diverse selection of recipes aligned with the user's preferences.</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Recipe Generation Module</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Responsible for dynamically generating new recipes based on various factors such as user preferences, available ingredients, and trending culinary styles. Leveraging the recommendation engine's insights into user tastes, the Recipe Generation Module can suggest unique and personalized recipes for users to try. </p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>User Management Module</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Handles the authentication, profile management, and user preferences. It ensures secure user authentication, maintains user profiles, and manages individual preferences, providing a personalized experience tailored to each user's culinary interests.</p>
                    </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol' style={{ display: 'flex', justifyContent:"center", alignItems:"center" }}>
                  <div className='capstoneProj-modal-body-imagecarousel'>
                    <img src={mobilearchitecture} alt="mobilearchitecture"/>
                  </div>
                </div>
              </div>
            </div>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol'>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-subheading'>
                      <p>Recommendation Engine Overview</p>
                    </div>  
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Collaborative Filtering (Cosine Similarity)</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Utilizes cosine similarity to measure user preferences and recommend recipes based on the tastes of users with similar preferences. This method enhances personalization by suggesting items that align with the choices of like-minded users.</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Content-Based Filtering (TF-IDF)</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Leverages TF-IDF to analyze the content of recipe descriptions, identifying key features and assessing the importance of words. The engine then recommends recipes by considering the similarity of their descriptions to users' past preferences. This approach ensures that suggested recipes align with thematic and descriptive aspects that users have historically found appealing.</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Hybrid Approach</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>Integrates collaborative filtering scores and content filtering scores in a hybrid model, striking a balance between user preferences and recipe content features. By combining these approaches, the system provides a more nuanced set of recommendations, ensuring accuracy and diversity in suggesting recipes that cater to the unique tastes and preferences of users.</p>
                    </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol' style={{ display: 'flex', justifyContent:"center", alignItems:"center" }}>
                  <div className='capstoneProj-modal-body-imagecarousel' >
                    <img src={recommendationengine} alt="recommendationengine" style={{ width: '95%', height:'95%'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol'>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-subheading'>
                      <p>Data Management Overview</p>
                    </div>  
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Data Sets</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>The Recipe Data Set is a comprehensive collection featuring recipes, encompassing detailed information on ingredients, step-by-step instructions, and user ratings. This dataset serves as a crucial foundation for training recommendation models, ensuring the system can offer personalized and relevant recipe suggestions.</p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>The User Profile Dataset is dedicated to storing user-specific data, capturing preferences, and tracking liked recipes. This dataset plays a pivotal role in training both collaborative and content-based recommendation models, enabling the system to tailor its suggestions based on individual user behaviors and preferences.</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p style={{ fontSize: '22px' }}><b>Recipe Management Module</b></p>
                    </div>
                    <div className='capstoneProj-modal-body-subheader'>
                      <p>The Recipe Management Module is powered by Django and Django Rest Framework on the backend. This module takes charge of handling recipe data, user profiles, and authentication. The ReactJS-based frontend seamlessly integrates with the backend, providing users with an intuitive Content Management System (CMS). Through this system, users can effortlessly create, edit, and manage their recipes, ensuring a user-friendly experience for efficient recipe management.</p>
                    </div>
                  </div>
                </div>
                <div className='capstoneProj-modal-body-rightcol' style={{ display: 'flex', justifyContent:"center", alignItems:"center" }}>
                  <div className='capstoneProj-modal-body-imagecarousel' >
                    <img src={datamanagement} alt="datamanagement" style={{ width: '100%', height:'100%'}}/>
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
                      <SwiperSlide><img src={createrecipe} alt="createrecipe" /></SwiperSlide>
                      <SwiperSlide><img src={recipeslection} alt="recipeslection" /></SwiperSlide>
                      <SwiperSlide><img src={recommendationresults} alt="recommendationresults" /></SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className='capstoneProj-modal-body-row'>
              <div className='capstoneProj-modal-body-col'>
                <div className='capstoneProj-modal-body-leftcol' style={{ width: '100%', height:'100%', display:"flex", justifyContent: 'start', alignItems:'start'}}>
                  <div className='capstoneProj-modal-body-leftcol-bodytext'>
                    <div className='capstoneProj-modal-subheading'>
                      <p>Tools and Technologies</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-navrow' >
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>Google Cloud Platforms</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader' style={{ paddingBottom:"1rem"}}>
                    <p>GCP is utilized as the hosting solution for the project, providing cloud computing services. It ensures the deployment of the application, scalability, and reliable hosting of the system's components.</p>
                  </div>
                  <div className='capstoneProj-modal-body-navrow'>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>NumPy</p>
                    </div>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>Pandas</p>
                    </div>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>Matplotlib</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader'style={{ paddingBottom:"1rem"}}>
                    <p>NumPy and Pandas are Python libraries employed for efficient data cleaning and transformation. They facilitate tasks such as handling missing data, filtering, and reshaping datasets. Matplotlib is used for data visualization, providing a robust plotting library.</p>
                  </div>
                  <div className='capstoneProj-modal-body-navrow'>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>Tableau</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader'style={{ paddingBottom:"1rem"}}>
                    <p>Tableau is employed for creating interactive and visually appealing data visualizations. It allows for the creation of dashboards and reports, enabling users to gain insights from the project's data.</p>
                  </div>
                  <div className='capstoneProj-modal-body-navrow'>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>JIRA </p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader'style={{ paddingBottom:"1rem"}}>
                    <p>JIRA is a project management and bug tracking tool. It helps in efficiently tracking and managing bugs, issues, and tasks throughout the development process, ensuring a streamlined workflow.</p>
                  </div>
                  <div className='capstoneProj-modal-body-navrow'>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>ClickUp</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader'style={{ paddingBottom:"1rem"}}>
                    <p>ClickUp serves as a collaboration and project management platform, aiding in task scheduling and organization. It allows the team to manage and prioritize tasks effectively, ensuring a structured and efficient development process.</p>
                  </div>
                  <div className='capstoneProj-modal-body-navrow'>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>Figma</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader'style={{ paddingBottom:"1rem"}}>
                    <p>Figma is a collaborative design tool used for creating and sharing mockups and design prototypes. It facilitates the design and visualization of the project's user interface and overall layout.</p>
                  </div>
                  <div className='capstoneProj-modal-body-navrow'>
                    <div className='capstoneProj-modal-body-navrow-item'>
                      <p>Photoshop</p>
                    </div>
                  </div>
                  <div className='capstoneProj-modal-body-subheader'style={{ paddingBottom:"1rem"}}>
                    <p>Photoshop is utilized for designing and editing graphical elements, particularly icons. It enables the creation of visually appealing and customized icons to enhance the project's aesthetics.</p>
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
