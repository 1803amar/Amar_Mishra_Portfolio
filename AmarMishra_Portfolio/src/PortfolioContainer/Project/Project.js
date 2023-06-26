import "./Project.css";
import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";
import html5 from "../../assets/JiraIcon.jpg";
import css3 from "../../assets/XmindIcon.jpeg";
import js from "../../assets/icons8-javascript-144.png";
import penitanteCave from "../../assets/MXplayer.webp";
import restAssured from "../../assets/RestAssured.png";
import postman from "../../assets/postman-icon.png";
import cypress from "../../assets/cypressIcon.jpeg";
import githubAPI from "../../assets/GithubAPI.png";
import appium from "../../assets/appiumlogo.jpg";
import androidStudio from "../../assets/Android-studio-logo-1.png";
import java from "../../assets/Java-Icon.png";
import banjaraRide from "../../assets/BanjaraRidecrop.jpeg";





export default function Project() {
  return (
    <div className="project-container" id="Projects">
      <div className="project-header">
        <h3>Projects</h3>
        <p className="why">Tech Stack and Projects</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="projectDetails">
        <div className="projectCard">
          <div className="project-card">
            <div className="projectName">
              <h3>MX Player Manual testing</h3>
            </div>
            <div className="projectImg">
              <img className="cartImg" src={penitanteCave} alt="err" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
                MX Player Manual testing, Tested Mx player with manual testing, Areas of Responsibility : Creating test cases for MX gold, Implemented Manual on test cases •Daily scrum meetings with team, Creating test summary report
              </div>
              <div className="techStack">
                <img src={html5} />
                <img src={css3} />
                {/* <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" /> */}
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://rocksy.atlassian.net/jira/software/projects/MX/boards/2/timeline?assignee=unassigned%2C640067300a4a47fb8d21c97f%2C640067270a4a47fb8d21c979"
                  target="_blank"
                >
                  Jira Dashboard
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>GitHub API Testing</h3>
            </div>
            <div className="projectImg">
              <img className="cartImg" src={githubAPI} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
              Tested all API requests of github with cypress rest assured and postman. Creating repo + autolink, Deleting repo + autolink, Daily scrum meetings with team, Rest Assured and Cypress implemented with framework.
               {/* Areas of Responsibility: Creating repo + autolink, Deleting repo + autolink, Daily scrum meetings with team, Rest Assured and Cypress implemented with framework. */}
              </div>
              <div className="techStack">
                <img src={restAssured} />
                <img src={postman} />
                <img src={cypress} />
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/Sukhmani-Kaur1/API-Testing-RW"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                {/* <a
                  className="projectbtn2"
                  href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a> */}
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>Banjara Ride App (Mobile app testing)</h3>
            </div>
            <div className="projectImg">
              <img className="cartImg" src={banjaraRide} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
              Tested the banjara ride app on android with Appium.Tap on “Call Us”. Navigate back to the application home page. Download Term&Conditions in pdf from information center. Close the application.
              </div>
              <div className="techStack">
                <img src={appium} />
                <img src={androidStudio} />
                <img src={java} />

              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/Sukhmani-Kaur1/BanjaraRideTest"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                {/* <a
                  className="projectbtn2"
                  href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="project-card">
            
        </div>
        <div className="project-card">
            hello
        </div> */}
        </div>
      </div>
    </div>
  );
}
