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
      <header className="header">
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
      <Indicator />
    </body>
  );
}

export default App;
