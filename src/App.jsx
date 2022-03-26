import React, { useEffect } from "react";
import Typical from "react-typical";
import "./styles/globals.scss";

function App() {
  useEffect(() => {
    document.title = "Luis's Portfolio";
  }, []);
  return (
    <body className="body">
      <header className="title-container">
        <div className="title">
          {/* <h1>Luis Lamiral </h1> */}
          <Typical
            steps={["Luis Lamiral", 2500, "Frontend Developer", 500]}
            loop={Infinity}
            wrapper="h1"
          />
          <h2>MY PORTFOLIO</h2>
        </div>
      </header>
      <div className="wave-container">
        <img className="wave" width="100%" src="/wave.svg" alt="" />
      </div>
      <section className="desc">
        <div className="desc_info-container">
          <div className="esp">
            <h3> Español </h3>
            <p>
              Mi nombre es Luis Lamiral <br />
              Actualmente vivo en Argentina, Buenos Aires <br />
              Me considero desarrollador web desde 2018, y busco trabajos en
              freelancer en mi tiempo libre para aumentar mis ganancias y tener
              una gran lista de clientes de una manera global. <br />
              Tengo un gran manejo sobre el desarrollo y diseño de sitios web,
              con tecnologías como por ejemplo: HTML5, CSS, JS, ReactJS, NextJS,
              NodeJS, etc.
            </p>
          </div>
          <div className="info-svg">
            <img width="100%" height="100%" src="/text.svg" alt="" />
          </div>
          <div className="eng">
            <h3> English </h3>
            <p>
              My name is Luis Lamiral <br />
              I live in Argentina, Buenos Aires <br />
              I'm a web developer since 2018. I am looking for freelance
              developer jobs in my spare time, to increase my earnings and gain
              a large list of clients around the world. <br /> I have a great
              handle on the development and design of websites, with
              technologies such as: HTML5, CSS, JS, ReactJS, NextJS, NodeJS,
              etc.
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
