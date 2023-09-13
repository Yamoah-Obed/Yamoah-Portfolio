import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Portfolio from "../Pages/Portfolio";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";
import pic from "../assets/mypic.jpeg";

import "../AllCss/Home.css";

const Home = () => {

  const [animateSections, setAnimateSections] = useState({
    about: false,
    skills: false,
    portfolio: false,
    resume: false,
    contact: false,
  });

  useEffect(() => {

    const sectionNames = Object.keys(animateSections);

    sectionNames.forEach((section, index) => {
      setTimeout(() => {
        setAnimateSections((prevState) => ({
          ...prevState,
          [section]: true,
        }));
      }, 1500 * (index + 1));
    });
  }, []);

  return (
    <>
      <div className="Home">
        <div className="homeContainer">
          <div className="leftSide">
            <div className="text">
              <h1>
                Hi There,{" "}
                <div>
                  {" "}
                  I am <span className="yamoah">YAMOAH</span>
                </div>
                <div> Front-End Developer</div>
              </h1>
            </div>
            <div>
              <a href="/contact">
                <button className="btn">Contact</button>
              </a>
            </div>

            <div className="HomeIcons">
              <a href="" className="IconLink">
                <GitHubIcon className="Icon" />
              </a>
              <a href="" className="IconLink">
                <LinkedInIcon className="Icon" />
              </a>
              <a href="" className="IconLink">
                <EmailIcon className="Icon" />
              </a>
              <a href="" className="IconLink">
                <TwitterIcon className="Icon" />
              </a>
            </div>
          </div>

          <div className="pic">
            <img src={pic} alt="my pic"  />
          </div>
        </div>
      </div>

      {/* Sections */}
      {Object.keys(animateSections).map((section) => (
        <div key={section} className={animateSections[section] ? "fadeIn" : ""}>
          {section === "about" && <About />}
          {section === "skills" && <Skills />}
          {section === "portfolio" && <Portfolio />}
          {section === "resume" && <Resume />}
          {section === "contact" && <Contact />}
        </div>
      ))}

    </>
  );
};

export default Home;