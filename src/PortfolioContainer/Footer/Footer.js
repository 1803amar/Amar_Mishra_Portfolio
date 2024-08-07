import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>Amar Mishra</h3>
                        <p>Experienced and enthusiastic QA Tester with a proven track record in software quality assurance. Expertise in test automation frameworks and committed to optimizing software testing processes. Adept at delivering reliable and efficient software solutions. Seeking a challenging role in an innovative organization.</p>
                        <div className='footer-social'>
                            <a href="https://github.com/1803amar" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/amar-mishra-1661611b3/" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            {/* <a href="instagram-link" target="_blank">
                                <i className='fa fa-instagram'></i>
                            </a>
                           
                            <a href="twitter-link" target="_blank">
                                <i className='fa fa-twitter'></i>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-footer-text">
                <p>©{date}. Design with {<ImHeart color='red'/>} by Amar</p>
            </div>
    </footer>
  )
}
