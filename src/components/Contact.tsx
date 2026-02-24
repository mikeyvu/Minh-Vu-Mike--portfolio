import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {

  useRef();

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <ul className="contact-details">
            <li>
              <PhoneIcon />
              <a href="tel:+61483825042">0483 825 042</a>
            </li>
            <li>
              <EmailIcon />
              <a href="mailto:minhvu2614.work@gmail.com">minhvu2614.work@gmail.com</a>
            </li>
            <li>
              <GitHubIcon />
              <a href="https://github.com/mikeyvu" target="_blank" rel="noreferrer" aria-label="GitHub profile: mikeyvu">
                <span>mikeyvu</span>
              </a>
            </li>
            <li>
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/hong-minh-vu/" target="_blank" rel="noreferrer">Hong Minh Vu</a>
            </li>
            <li>
              <LocationOnIcon />
              Wollongong
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;