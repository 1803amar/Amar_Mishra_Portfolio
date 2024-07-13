import React from 'react';
import "./About.css";
import profilePic from "../../assets/amar.jpg"

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p className='why'>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src={profilePic} alt="" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                    Experienced and enthusiastic QA Tester with a proven track record in software quality assurance. Expertise in test automation frameworks and committed to optimizing software testing processes. Adept at delivering reliable and efficient software solutions. Seeking a challenging role in an innovative organization.
                    </div>
                    <div className='nnn'>
                        <h3>Here are a Few Highlights</h3>
                        <ul className='keyHighlights'>
                            <li>Software Development Engineer in Test</li>
                            <li>1800+ Hours of Manual Testing + Automation Testing</li>
                            <li>150+ DSA Problems</li>
                            <li>10+ Project</li>        
                        </ul>
                    </div>
                    <div className="profile-optins resumeBtn">
                        <a href="https://drive.google.com/file/d/1fhn2xEqmKDb1t9RkPNiJPfhelDBGPjRl/view?usp=sharing" target="_blank" download="resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
