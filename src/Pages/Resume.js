import React from "react";
import "../AllCss/Resume.css";
import pdf from '../assets/PDF_file_icon.svg.png'
import resume from '../assets/CURRICULUM VITAE(Obed).pdf'

const Resume = () => {
  return (
    <div className="Resume">
      <div className="ResumeContainer">
        <div className="ResumeTitle">
          <h2>RESUME</h2>
        </div>
        <div className="ResumeLineContainer">
          <div className="ResumeLine"></div>
        </div>
        <div className="resumeText"><p>DOWNLOAD MY CV AND RESUME</p></div>
        <div className="fileContainer">
        <a href={resume} download='Resume'>
          <div className="file">
            <img src={pdf} alt="cv" />
          <h2>CV</h2>
          </div>
        </a>   
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
