import React from "react";
import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <div className="nav_ul-li-container">
          <li className="nav_ul-li">
            <a href="#">Home</a>
          </li>
          <li className="nav_ul-li">
            <a href="#">About me</a>
          </li>
          <li className="nav_ul-li">
            <a href="#">Projects</a>
          </li>
          <li className="nav_ul-li">
            <a href="#">Skills</a>
          </li>
        </div>
        <div className="nav_ul-li-btn">
          <button>Contact Me</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
