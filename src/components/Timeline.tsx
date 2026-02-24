import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan. 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Ordering System - Self Employed | Hanoi, Vietnam</h4>
            <p>
              GitHub: <a href="https://github.com/mikeyvu/Online-Vender" target="_blank" rel="noreferrer">github.com/mikeyvu/Online-Vender</a>
            </p>
            <ul className="timeline-description-list">
              <li>Built and deployed a full-stack online ordering and restaurant management system for a family business in Vietnam.</li>
              <li>Drove a 40% rise in revenue and cut manual processes by 30% through automation and real-time system integration.</li>
              <li>Enabled QR code table ordering with real-time order flow from customers to the kitchen.</li>
              <li>Delivered an admin portal to manage roles, categories, menu items, orders, and revenue reporting.</li>
              <li>Applied MVC design pattern and a normalized MySQL schema for clean separation of concerns and reliable data integrity.</li>
              <li>Implemented transaction-safe order creation using a two-phase (order → items → total) workflow.</li>
              <li>Added real-time updates on the restaurant dashboard using Server-Sent Events (SSE).</li>
              <li>Built using Java and MySQL on the backend, with HTML, CSS, JSP, and JavaScript for the frontend interface.</li>
              <li>Maintained clean code, documentation, and version control using Git.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2024 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sample Assist | Wollongong, NSW</h4>
            <ul className="timeline-description-list">
              <li>Researched and fine-tuned the PaddleOCR model to automate Patient Identity Verification, reducing manual data entry time by 80% for 10,000+ records and enabling more patients to receive treatment each day.</li>
              <li>Designed and generated synthetic datasets using GAN model to cover the lack of real data.</li>
              <li>Developed APIs for seamless integration of AI models into the company’s applications.</li>
              <li>Engaged with stakeholders to define project goals and align team direction.</li>
              <li>Collaborated in a 5-member Agile (Sprint) team to work and deliver the final product.</li>
              <li>Conducted comprehensive data analytics and assessed AI model effectiveness through accuracy, precision, recall, and F1-score.</li>
              <li>Tech Stack: Python, FastAPI, OpenCV, Google ML Kit, GitHub, PostgreSQL.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;