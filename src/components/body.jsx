import React from "react";
import "./body.css";
import Reactlogo from '../assets/React-logo.png'
import Javascriptlogo from '../assets/Java-script-logo.png'
import Htmllogo from  '../assets/Html5.png'
import Csslogo from '../assets/Css.png' 

export default function Body() {
  return (
    <div className="main-container">
      <div className="section-one">
        <div className="img-title-container">
          <h2>Frontend developer expert</h2>
          <div className="img"></div>
        </div>
        <hr className="full-width-line" />
        <hr className="full-width-line" />


        <div className="bio-container">
          <h2> About me</h2>
          <div className="bio-layout">
          <div className="bio">
            <p>
              I am a passionate and dedicated Front-End Developer with a
              Bachelor's degree in Computer Science (2019-2023). Since
              graduating, I have been working at Architech, where I apply my
              skills in modern web technologies to create user-friendly and
              visually appealing web applications. My focus is on delivering
              high-quality code and innovative solutions that enhance user
              experience.
            </p>
          </div>


          <div className="bio">
            <p>
            I have expertise in JavaScript, Python, and Java. I possess substantial knowledge in front-end development, specializing in using APIs and React to create dynamic and interactive web applications. My skills include developing responsive and user-friendly interfaces, integrating third-party services, and optimizing performance to enhance user experience. Additionally, I have experience with modern web development tools and frameworks, ensuring the delivery of high-quality and maintainable code.
            </p>
          </div>
          </div>
          <div className="icon">
            <img src={Reactlogo}/>
            <img src={Javascriptlogo}/>
            <img src={Htmllogo}/>
            <img src={Csslogo}/>


          </div>
        </div>
      </div>

      <div className="section-two">
        <div className="work-certificate">
        <div className="work-experience-container">
          <h2 className="h2-work-experience-container">Work experience</h2>

          <div className="work-experience-detail">
            <div className="work-item">
              <h2>Asiacell - Brings Us Together intern</h2>
              <p className="p-work-item">During my internship at Asiacell in the IT department, I had the opportunity to work on a variety of projects and gain hands-on experience in several key areas of information technology. My responsibilities and achievements </p>
              <p className="date-">July - September 2022</p>
            </div>
            <div className="work-item">
              <h2>Halabja-Group internship</h2>
              <p className="p-work-item">During my internship at Halabja Group in the IT department, I had the opportunity to work extensively with AngularJS and Node.js on various projects. My responsibilities and achievements </p>
              <p className="date-">July - September 2023</p>
            </div>
 
            <div className="work-item">
              <h2>Accountant at Mali Hamwan</h2>
             <p className="p-work-item"> During my tenure at Mali Hamwan, I served as an Electric Accountant, where I was responsible for managing the financial aspects related to the company's electrical services and projects. My responsibilities and achievements          </p>     
              <p className="date-">September - November 2023</p>
            </div>
          </div>

        </div>
              <hr className="line"/>
        <div className="work-experience-container">
          <h2 className="h2-work-experience-container">Certificate</h2>

          <div className="work-experience-detail">
            <div className="work-item">
              <h2>Asiacell - Telecommincation</h2>
              <p className="date-">July - September 2022</p>
            </div>
            <div className="work-item">
              <h2>Intro UI-UX by Recoded</h2>
              <p className="date-">October - December 2023</p>
            </div>

            <div className="work-item">
              <h2>Front End Development By Meta</h2>
              <p className="date-">January - April 2024</p>
            </div>
          </div>
        </div>
        </div>

        <div className="work-experience-container">
          <h2 className="h2-work-experience-container">Skills & Hobbies</h2>

          <div className="work-experience-detail">
            <div className="work-itemm">
              <h2>Work under pressure</h2>
            </div>
            <div className="work-itemm">
              <h2>Team Work</h2>
            </div>

            <div className="work-itemm">
              <h2>Writing</h2>
            </div>
            <div className="work-itemm">
              <h2>Flexibility</h2>
            </div>
            <div className="work-itemm">
              <h2>Problem-Solving</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
