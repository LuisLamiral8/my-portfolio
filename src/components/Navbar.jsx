import React from "react";
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <div className={styles.liContainer}>
          <li className={styles.li}>
            <a href="#header">Home</a>
          </li>
          <li className={styles.li}>
            <a href="#about-me">About me</a>
          </li>
          <li className={styles.li}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.li}>
            <a href="#">Projects</a>
          </li>
        </div>
        <div className={styles.btn}>
          <button><a href="#contact"> Contact Me</a></button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
