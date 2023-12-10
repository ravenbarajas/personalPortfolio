import yourImage from '../assets/gradpic.png';
import './HomePage.css';

import githubIcon from '../assets/githubIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import fbIcon from '../assets/fbIcon.png';

import techskillBubble from '../assets/techskillBubble.png';
import projectsBubble from '../assets/projectsBubble.png';
import experienceBubble from '../assets/experienceBubble.png';
import educationBubble from '../assets/educationBubble.png';

function HomePage() {
  return (
    <div>
      <div className="homepage-container">
        <div className='homepage-col-container'>
          <div className="left-col-container">
            <div className="left-col">
              <div className="blob-frame-card">
                <div className="blob-frame">
                  <img src={yourImage} className="imageStyle"/>
                </div>
              </div>
              <div className="left-col-contact-card">
                <div className="left-col-contact">
                  <img src={githubIcon} className="githubIcon"/>
                  <img src={linkedinIcon} className="linkedinIcon"/>
                  <img src={fbIcon} className="fbIcon"/>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-col-container">
            <div className="middle-col">
              <div className="greeting-card">
                <div className="greeting-heading">
                  <p>Hey, I'm Carl Raven.</p>
                </div>
                <div className="greeting-heading-card">
                  <p className="greeting-heading-role-1">Software</p>
                  <p className="greeting-heading-role-2">Developer</p>
                </div>
              </div>
              <div className="aboutme-card">
                <div className="aboutme-heading">
                  <p>About me</p>
                </div>
                <div className="aboutme-subheading-card">
                  <div className="aboutme-subheading">
                    <p>IT graduate from Polytechnic University of the Philippines with a strong coding passion and problem-solving acumen, possessing a solid software development background, quick learner, and detail-oriented.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-col-container">
            <div className="right-col">
              <div className="techskill-count-card">
                <div className="techskill-count-heading">
                  <p>25+</p>
                </div>
                <div className="techskill-count-subheading-card">
                  <div className="techskill-count-subheading">
                    <p>Technology Skills</p>
                  </div>
                </div>
              </div>
              <div className="proj-count-card">
                <div className="proj-count-heading">
                  <p>10+</p>
                </div>
                <div className="proj-count-subheading-card">
                  <div className="proj-count-subheading">
                    <p>Projects Made</p>
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

export default HomePage;
