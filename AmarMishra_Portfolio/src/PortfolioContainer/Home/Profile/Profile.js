import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/1803amar" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/amar-mishra-1661611b3/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Amar Mishra</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical className="loop"
                            loop={Infinity}
                            steps ={[
                                "Enthusiastic SDET 🟡",
                                2000,
                                "QA Engineer 🖥",
                                2000,
                                // "MERN Devloper 🚀",
                                // 2000,
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                        Transforming bugs into features with precision and passion.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href="https://drive.google.com/file/d/1fhn2xEqmKDb1t9RkPNiJPfhelDBGPjRl/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='resumeButton'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                    <div className='screenSize'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
