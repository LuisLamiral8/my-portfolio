import React, { useEffect } from "react";
import Typical from "react-typical";
import "./styles/globals.scss";
//Components
import Indicator from "./components/Indicator";
import Navbar from "./components/Navbar";
function App() {
  // useEffect(() => {
  //   document.title = "Luis's Portfolio";
  // }, []);
  return (
    <body className="body">
            <Indicator />
      <header id="header" className="header">
        <Navbar />
        <div className="header-container">
          <div className="header_svg">
            <img src="/illustrations/header.svg" alt="" />
          </div>
          <div className="header_title">
            {/* <h1>Frontend Developer</h1> */}
            <Typical
              steps={["Luis Lamiral", 2500, "Frontend Developer", 500]}
              loop={Infinity}
              wrapper="h1"
            />
            <h2>My portfolio</h2>
          </div>
        </div>
      </header>
      <section id="about-me" className="about-me">
        <div className="aboutme-svg">
          <img src="/illustrations/aboutme.svg" alt="" />
        </div>
        <div className="aboutme-text">
          <p>
            I live in Argentina, Buenos Aires. <br/>I’m web developer since 2018.<br/> I
            have a great handle on the development and design of websites with
            recent technologies.<br/> I have worked on different Crypto pages, and
            have made various designs for clients, such as businesses, companies
            or NFTS pages.
          </p>
        </div>
      </section>
      <section id="skills" className="skills">
        <h1>buenas tardes!</h1>
      </section>
    </body>
  );
}

export default App;
