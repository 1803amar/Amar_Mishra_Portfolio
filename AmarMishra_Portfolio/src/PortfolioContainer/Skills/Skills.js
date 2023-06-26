import React from "react";
import "./Skills.css";
import { FaJava } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { ImHtmlFive, ImDatabase } from "react-icons/im";
import { GrJava, GrNode, GrReactjs } from "react-icons/gr";
import { RiGitBranchLine } from "react-icons/ri";
import { Container } from "@chakra-ui/react";

export default function Skills() {
  return (
    <div className="skills-container" id="Skills">
      <div className="skills-header">
        <h3>Skills</h3>
        <p className="why">Hands On Experience</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>
      <div className="skillsDetails">
        <div className="boxContainer">
          <div className="skillBox skillbox1">
            <div className="sillIcon">
              <ImHtmlFive color="rgb(254,210,4)" />
            </div>
            {/* <img styel={{height}} src='https://img.icons8.com/?size=512&id=20909&format=png' alt='HTML'/> */}
            <div className="skillTitle">HTML</div>
            {/* <div className='skillInfo'>HTML, CSS, JavaScript</div> */}
          </div>
          {/* <div className='skillBox skillbox2'>
                    <div className='sillIcon'><GrJava color='white' /></div>
                    <div className='skillTitle'>Web frameworks and Tools</div>
                    <div className='skillInfo'>Maven, Selenium(Java), Cypress, RestAssured(BDD), Cucumber, PostMan, Jenkins, Github, MySQL</div>
                </div> */}
          {/* <div className='skillBox skillbox3'>
                    <div className='sillIcon'><FaJava color='red'/></div>
                    <div className='skillTitle'>CSS</div>
                    <div className='skillInfo'>Material-UI,Styled-Components,Bootstrap</div> 
                </div> */}
          {/* <div className='skillBox skillbox4'>
                <div className='sillIcon'><GrNode color="rgb(76,187,23)"/></div>
                <div className='node'></div>
                    <div className='skillTitle'>Node Js</div>
                    <div className='skillInfo'>Backend</div> 
                </div> */}
          {/* <div className='skillBox skillbox5'>
                    <div className='sillIcon'><GiSkills color='rgb(109, 152, 0)'/></div>
                    <div className='skillTitle'>Soft Skills</div>
                    <div className='skillInfo'>Team work, Ready to learn new things, Communication Skills</div> 
                </div> */}
          {/* <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                    <RiGitBranchLine color='rgb(253,185,200)'/>
                    </div>
                    <div className='skillTitle'>Code Version Control</div>
                    <div className='skillInfo'>GitHub, Git</div>
                </div> */}

          <div className="skillBox skillbox7">
            <div className="sillIcon">
              <img src="https://e7.pngegg.com/pngimages/66/60/png-clipart-web-development-cascading-style-sheets-css3-computer-icons-css-miscellaneous-blue-thumbnail.png"></img>
            </div>
            <div className="skillTitle">CSS</div>
            {/* <div className='skillInfo'>300+ Hours of DSA</div>  */}
          </div>

          <div className="skillBox skillbox7">
            <div className="sillIcon">
              <img src="https://e7.pngegg.com/pngimages/917/651/png-clipart-apache-maven-feathers-tech-companies.png"></img>
            </div>
            <div className="skillTitle">Maven</div>
            {/* <div className='skillInfo'>300+ Hours of DSA</div>  */}
          </div>

          <div className="skillBox skillbox8">
            <div className="sillIcon">
              <img src="https://e7.pngegg.com/pngimages/329/699/png-clipart-selenium-integrated-development-environment-test-automation-software-testing-source-code-automation-testing-logo-web-application-thumbnail.png"></img>
            </div>
            <div className="skillTitle">Selenium (Java)</div>
            {/* <div className='skillInfo'>1200+ Hours of coding</div>  */}
          </div>

          
          <div className="skillBox skillbox8">
            <div className="sillIcon">
              <img src="https://www.simplilearn.com/ice9/tools_covered/junit.png"></img>
            </div>
            <div className="skillTitle">JUnit</div>
            {/* <div className='skillInfo'>1200+ Hours of coding</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg"></img>
            </div>
            <div className="skillTitle">Cypress (JavaScript)</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://avatars.githubusercontent.com/u/19369327?s=280&v=4"></img>
            </div>
            <div className="skillTitle">RestAssured</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://banner2.cleanpng.com/20180806/xkl/kisspng-cucumber-behavior-driven-development-software-test-cucumber-logo-svg-vector-amp-png-transparent-v-5b68353a7fad14.236653821533556026523.jpg"></img>
            </div>
            <div className="skillTitle">BDD Cucumber</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.svg"></img>
            </div>
            <div className="skillTitle">Postman</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/339px-Jenkins_logo.svg.png?20120629215426"></img>
            </div>
            <div className="skillTitle">Jenkins</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
            </div>
            <div className="skillTitle">Github</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"></img>
            </div>
            <div className="skillTitle">MySQL</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Apache_Feather_Logo.svg/508px-Apache_Feather_Logo.svg.png?20220805205423"></img>
            </div>
            <div className="skillTitle">Jmeter</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://camo.githubusercontent.com/9f6fbaa3154800eef23c4dc7ed718f911deb50e0d5f58f9226d7dc278d901973/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f61746c61737369616e5f6a6972612f61746c61737369616e5f6a6972612d69636f6e2e737667"></img>
            </div>
            <div className="skillTitle">Jira</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://camo.githubusercontent.com/4253eb6921d60a216772940978dea3a0cf2113f2f29b5545720d3b5b6960e467/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6f6368616a732f6d6f6368616a732d69636f6e2e737667"></img>
            </div>
            <div className="skillTitle">Mocha</div>
            {/* <div className='skillInfo'>Data Base</div>  */}
          </div>
        </div>
      </div>
    </div>
  );
}
