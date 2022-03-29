import React from "react";
import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <div className="nav_ul-li-container">
          <li className="nav_ul-li">
            <a href="#header">Home</a>
          </li>
          <li className="nav_ul-li">
            <a href="#about-me">About me</a>
          </li>
          <li className="nav_ul-li">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav_ul-li">
            <a href="#">Projects</a>
          </li>
        </div>
        <div className="nav_ul-li-btn">
          <button><a href="#"> Contact Me</a></button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
