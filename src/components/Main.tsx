import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/Hong Minh Vu - avatar.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Hong Minh Vu avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mikeyvu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hong-minh-vu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hong Minh Vu</h1>
          <p>Backend Engineer - AI and Big Data Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mikeyvu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hong-minh-vu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;