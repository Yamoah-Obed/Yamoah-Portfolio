import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../AllCss/Footer.css";


const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterIcons">
        <a href="" className="FooterIconLink">
          <GitHubIcon className="FooterIcon" />
        </a>
        <a href="" className="FooterIconLink">
          <LinkedInIcon className="FooterIcon" />
        </a>
        <a href="" className="FooterIconLink">
          <EmailIcon className="FooterIcon" />
        </a>
        <a href="" className="FooterIconLink">
          <TwitterIcon className="FooterIcon" />
        </a>
      </div>

      <div className="footerText">
        <p>
          <CopyrightIcon /> 2023 Yamoah.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
