import React from "react";
import { useState } from "react";
import "../AllCss/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  const [openLink, setOpenLink] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setOpenLink(!openLink);
  };

  const handleLinkClick = () => {
    setOpenLink(false); // Close the mobile menu when a link is clicked
  };

  const links = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Skills", url: "/skills" },
    { text: "Portfolio", url: "/portfolio" },
    { text: "Resume", url: "/resume" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="leftside">
        <h2>
          <Link to="/" onClick={handleLinkClick}>
            Yamoah
          </Link>
        </h2>
      </div>
      <div className={`rightside ${openLink ? "open" : ""}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            onClick={handleLinkClick}
            className={location.pathname === link.url ? "active" : ""}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <button className="toggle" onClick={toggleNavbar}>
        <ReorderIcon />
      </button>
    </div>
  );
};

export default Navbar;
