import React, { useEffect, useState } from 'react';
import './Experience.css';

// Copy and Paste experience-col to add more work experience

function Experience() {
  return (
    <div className="experience-container">
      <div className='experience-column'>
        <div className="experience-header">
            <div className="experience-heading">
                <p>Experience</p>
            </div>
            <div className="experience-subheading">
                <p>Relevant work exposure.</p>
            </div>
        </div>
        <div className='experience-section  fade-in'>
            <div className='experience-col-container'>
                <div className='experience-col'>
                    <div className='experience-row-left'>
                        <div className='experience-col-date'>
                            <p>February 2024 - Present</p>
                        </div>
                    </div>
                    <div className='experience-row-mid'>
                        <div className='experience-vertln'>
                        </div>
                        <div className='experience-circesh'>
                        </div>
                        <div className='experience-vertln'>
                        </div>
                    </div>
                    <div className='experience-row-right'>
                        <div className='experience-col-desc'>
                            <div className='experience-desc-heading'>
                                <div className='experience-desc-header'>
                                    <p>Application Developer</p>
                                </div>
                                <div className='experience-desc-subheader'>
                                    <p className='experience-company'>Viva Communications, Inc.</p>
                                    <p className='experience-desc'>First Post-Bachelors Job</p>
                                </div>
                            </div>
                            <div className='experience-desc-body'>
                                <p>Created interactive ReactJS front-end interfaces, collaborated on Figma mockup conversion, utilized Trello for project management, and maintained code integrity with Git version control.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='experience-col'>
                    <div className='experience-row-left'>
                        <div className='experience-col-date'>
                            <p>March 2023 - July 2023</p>
                        </div>
                    </div>
                    <div className='experience-row-mid'>
                        <div className='experience-vertln'>
                        </div>
                        <div className='experience-circesh'>
                        </div>
                        <div className='experience-vertln'>
                        </div>
                    </div>
                    <div className='experience-row-right'>
                        <div className='experience-col-desc'>
                            <div className='experience-desc-heading'>
                                <div className='experience-desc-header'>
                                    <p>Web Developer</p>
                                </div>
                                <div className='experience-desc-subheader'>
                                    <p className='experience-company'>LexMeet, Inc.</p>
                                    <p className='experience-desc'>Internship</p>
                                </div>
                            </div>
                            <div className='experience-desc-body'>
                                <p>Created interactive ReactJS front-end interfaces, collaborated on Figma mockup conversion, utilized Trello for project management, and maintained code integrity with Git version control.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience-col-container'>
                <div className='experience-col'>
                    <div className='experience-row-left'>
                        <div className='experience-col-date'>
                            <p>February 2024 - September 2024</p>
                        </div>
                    </div>
                    <div className='experience-row-mid'>
                        <div className='experience-vertln'>
                        </div>
                        <div className='experience-circesh'>
                        </div>
                        <div className='experience-vertln'>
                        </div>
                    </div>
                    <div className='experience-row-right'>
                        <div className='experience-col-desc'>
                            <div className='experience-desc-heading'>
                                <div className='experience-desc-header'>
                                    <p>Application Developer</p>
                                </div>
                                <div className='experience-desc-subheader'>
                                    <p className='experience-company'>Viva Communications, Inc.</p>
                                    <p className='experience-desc'>First Post-Bachelors Job</p>
                                </div>
                            </div>
                            <div className='experience-desc-body'>
                                <p>Created interactive ReactJS front-end interfaces, collaborated on Figma mockup conversion, utilized Trello for project management, and maintained code integrity with Git version control.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='experience-col'>
                    <div className='experience-row-left'>
                        <div className='experience-col-date'>
                            <p>March 2023 - July 2023</p>
                        </div>
                    </div>
                    <div className='experience-row-mid'>
                        <div className='experience-vertln'>
                        </div>
                        <div className='experience-circesh'>
                        </div>
                        <div className='experience-vertln'>
                        </div>
                    </div>
                    <div className='experience-row-right'>
                        <div className='experience-col-desc'>
                            <div className='experience-desc-heading'>
                                <div className='experience-desc-header'>
                                    <p>Web Developer</p>
                                </div>
                                <div className='experience-desc-subheader'>
                                    <p className='experience-company'>LexMeet, Inc.</p>
                                    <p className='experience-desc'>Internship</p>
                                </div>
                            </div>
                            <div className='experience-desc-body'>
                                <p>Created interactive ReactJS front-end interfaces, collaborated on Figma mockup conversion, utilized Trello for project management, and maintained code integrity with Git version control.</p>
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

export default Experience;