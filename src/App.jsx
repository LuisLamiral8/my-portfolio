import React, { useEffect } from "react";
import Typical from "react-typical";
import "./styles/globals.scss";
//Components
import Indicator from "./components/Indicator";
import Navbar from "./components/Navbar";
import Card from "./components/Cards";

function App() {
  // function alert(){
  //   window.alert("hola");
  // }
  const alert = () => {
    window.alert("I'm so sorry, the contact system is actually don't working ");
  };
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
            I live in Argentina, Buenos Aires. <br />
            I’m web developer since 2018.
            <br /> I have a great handle on the development and design of
            websites with recent technologies.
            <br /> I have worked on different Crypto pages, and have made
            various designs for clients, such as businesses, companies or NFTS
            pages.
          </p>
        </div>
      </section>
      <section id="skills" className="skills">
        <div className="skills_title">
          <h3>SKILLS</h3>
        </div>
        <div className="skills_cards">
          <Card image="/icons/github.svg" text="Git Version Control" />
          <Card image="/icons/freelancer.svg" text="Freelancing" />
          <Card image="/icons/development.svg" text="Web Development" />
          <Card image="/icons/react.svg" text="ReactJS Knowledge" />
          <Card image="/icons/next.svg" text="NextJS Knowledge" />
          <Card image="/icons/design.svg" text="Web Design" />
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact-text">
          <div className="contact-text_container">
            <h3>Contact</h3>
            <input type="text" placeholder="EMAIL" />
            <input type="text" placeholder="MESSAGE" />
            {/* <input type="button" value="Send" onClick={alert()} /> */}
            <button onClick={() => alert()}>Send</button>
          </div>
        </div>
        <div className="contact-svg">
          <img src="/illustrations/contact.svg" alt="" />
        </div>
      </section>
    </body>
  );
}

export default App;
