import React from "react";
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
          <h1>Hong Minh Vu</h1>
          <p>Backend Engineer - AI and Big Data Enthusiast</p>
        </div>
      </div>
    </div>
  );
}

export default Main;