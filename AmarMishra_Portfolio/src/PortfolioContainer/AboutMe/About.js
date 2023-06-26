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
                    As an aspiring SDET, I am passionate about the intersection of technology and quality assurance. With a solid foundation in software development and a keen eye for detail, I am eager to contribute to the success of a dynamic tech company.
                    </div>
                    <div className='nnn'>
                        <h3>Here are a Few Highlights</h3>
                        <ul className='keyHighlights'>
                            <li>Software Development Engineer in Test</li>
                            <li>600+ Hours of Manual + Automation</li>
                            <li>100+ Hours of DSA</li>
                            <li>5+ Project</li>        
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
