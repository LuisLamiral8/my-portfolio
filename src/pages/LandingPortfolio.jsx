import React from "react";
import Typical from "react-typical";
import Slider from "react-slick";
//Components
// import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Index = () => {
  var settings = {
    dots: true,
    className: "test",
    infinite: true,
    centerMode: true,
    // centerPadding: "60px",
    speed: 500,
    slidesPerRow: 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // dotsClass: "dots"
  };

  return (
    <body className="body">
      {/* <Indicator /> */}
      <nav className="nav">
        <ul>
          <div className="nav_li-container">
            <li>
              <a href="#header">Inicio</a>
            </li>
            <li>
              <a href="#about-me">Sobre mí</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
          </div>
          <div className="nav_btn">
              <a href="#contact"> Contactarse</a>
          </div>
        </ul>
      </nav>
      <header id="header" className="header">
        <div className="header-container">
          <div className="header_title">
            <h1>¡Bienvenido a mi portafolio!</h1>
            <h2>Soy Luis Lamiral</h2>
            {/* <div>
              <Typical
                steps={[
                  "Front-end",
                  1000,
                  "Back-end",
                  1000,
                  "Full-Stack",
                  1000,
                ]}
                loop={Infinity}
              />
              <p>developer</p>
            </div> */}
            <div>
              <p>Desarrollador</p>
              <Typical
                steps={[
                  " front-end",
                  1000,
                  " back-end",
                  1000,
                  " full-stack",
                  1000,
                ]}
                loop={Infinity}
                className="typical"
              />
            </div>
          </div>
          <div className="header_photo">
            <img src="/myphoto.jpg" alt="" />
          </div>
        </div>
      </header>
      <section className="about-me">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="aboutme-wave1"
          id="about-me"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1A1A1D"
            fill-opacity="1"
            d="M0,256L48,213.3C96,171,192,85,288,48C384,11,480,21,576,53.3C672,85,768,139,864,154.7C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="aboutme-title">
          <h2>Sobre mí</h2>
          <div className="aboutme-separation"></div>
          <img src="/illustrations/aboutme.svg" alt="" />
        </div>
        <div className="aboutme-text">
          <div className="">
            <p>
              Soy un joven apasionado por la tecnología y el desarrollo web.
            </p>
            <p>
              Estoy estudiando ingeniería en informática en la Universidad
              Nacional de Avellaneda y ampliando mis conocimientos en
              programación, inteligencia artificial, ciberseguridad y gestión de
              proyectos tecnológicos.
            </p>
            <p>
              Además de mi formación académica, estudio desarollo web por mi
              cuenta desde 2021. Me encanta experimentar con nuevas tecnologías
              y herramientas, y estoy siempre buscando maneras de aplicar lo que
              aprendo para crear proyectos interesantes y útiles.
            </p>
            <p>
              Me describo como una persona dedicada, comprometida y curiosa, que
              disfruta del trabajo en equipo y cree que la colaboración y el
              intercambio de ideas son clave para el éxito en cualquier
              proyecto.
            </p>
          </div>
        </div>
        <svg
          id="skills"
          xmlns="http://www.w3.org/2000/svg"
          className="aboutme-wave2"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1A1A1D"
            // fill="red"
            fill-opacity="1"
            d="M0,256L48,213.3C96,171,192,85,288,48C384,11,480,21,576,53.3C672,85,768,139,864,154.7C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section className="skills">
        <div className="skills_title">
          <h3>Habilidades</h3>
          <div className="skill_separation"></div>
        </div>
        <div className="skills_cards">
          <Slider {...settings}>
            <Card image="/icons/python.svg" text="Python" />
            <Card image="/icons/cpp.svg" text="C++" />
            <Card image="/icons/javascript.svg" text="JavaScript" />
            <Card image="/icons/typescript.svg" text="TypeScript" />
            <Card image="/icons/nextjs.svg" text="NextJS" />
            <Card image="/icons/reactjs.svg" text="ReactJS" />
            <Card image="/icons/mysql.svg" text="MySQL" />
            <Card image="/icons/mongo.svg" text="MongoDB" />
            <Card image="/icons/docker.svg" text="Docker" />
            <Card image="/icons/git.svg" text="Git - Github - Gitlab" />
            <Card image="/icons/nodejs.svg" text="NodeJS" />
            <Card image="/icons/java.svg" text="Java" />
            <Card image="/icons/springboot.svg" text="Java Springboot" />
            {/* <Card image="/icons/quarkus.svg" text="Quarkus" /> */}
            <Card image="/icons/html.svg" text="HTML" />
            <Card
              image="/icons/css.svg"
              text="CSS - SCSS - Tailwind - Bootstrap"
            />
          </Slider>
        </div>
      </section>
      <section className="projects">
        <div className="projects_title">
          <div>
            <h3>Proyectos</h3>
            <div className="project_separation"></div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project_card">
            <div className=""></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              iste doloremque vitae officiis fugiat ad saepe sed nihil,
              reprehenderit dolor nulla cupiditate veritatis nobis et quis,
              inventore commodi at asperiores.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="contact_title">
          <h3>Contáctame</h3>
          <h4>
            Abre la puerta a nuevas soluciones: contáctame y trabajemos juntos.
          </h4>
          <div className="contact_separation"></div>
        </div>
        <div className="contact_main">
          <div className="contact_items">
            <div className="contact_item">
              <div className="contact_item-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z"
                  />
                </svg>
              </div>
              <p>+54 11 23799830</p>
            </div>
            <div className="contact_item">
              <div className="contact_item-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v12V8Z"
                  />
                </svg>
              </div>
              <p>luislamiraal@gmail.com</p>
            </div>
            <div className="contact_item">
              <div className="contact_item-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  />
                </svg>
              </div>
              <a
                href="https://www.linkedin.com/in/luis-lamiral/"
                target="_BLANK"
              >
                Luis F. Lamiral
              </a>
            </div>
          </div>
          {/* <input type="button" value="Send" onClick={alert()} /> */}

          <div className="contact-inputs">
            <div className="contact_inputs-text">
              <input type="text" placeholder="Su nombre" />
              <input type="text" placeholder="Su email" />
            </div>
            <textarea type="text" placeholder="Mensaje" />
            <button onClick={() => window.alert("Trabajando en esto!")}>
              Enviar
            </button>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <p>© 2021-2023 | Todos los derechos reservados</p>
      </footer>
      {/* </Fade> */}
    </body>
  );
};

export default Index;
