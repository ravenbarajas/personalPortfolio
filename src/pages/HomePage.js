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
        <div className="col1">
          </div>
          <div className="col2">
          </div>
          <div className="col3">
        </div>
        <div className="leftColumnStyle">
          <div className="blob-frame">
            <img
                src={yourImage}
                alt="Your Image"
                className="imageStyle"
            />
            </div>
          <p className="greeting-heading">Hey, I'm Carl Raven.</p>
          <p className="greeting-heading-role">Software Developer</p>
          <p className="greeting-subheading">Committed to producing top-notch results.</p>
          <div className='contact-icon'>
            <img src={githubIcon}/>
            <img src={linkedinIcon}/>
            <img src={fbIcon}/>
          </div>
        </div>
        <div className="rightColumnStyle">

        <div className='left-side-col'>
          <div className="nav-bubble">
            <div className="nav-bubble-logo-3">
              <img src={techskillBubble}/>
              <p>Skills</p>
            </div>
          </div>
          <div className="nav-bubble">
            <div className="nav-bubble-logo-5">
              <img src={experienceBubble}/>
              <p>Experience</p>
            </div>
          </div>
        </div>

        <div className='right-side-col'>
          <div className="nav-bubble">
            <div className="nav-bubble-logo-4">
              <img src={projectsBubble}/>
              <p>Projects</p>
            </div>
          </div>
          <div className="nav-bubble">
            <div className="nav-bubble-logo-6">
              <img src={educationBubble}/>
              <p>Education</p>
            </div>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
