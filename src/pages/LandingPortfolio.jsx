import React from "react";
import Typical from "react-typical";
import Slider from "react-slick";
//Components
import Navbar from "../components/Navbar";
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
      <Navbar />
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
          <h3>HABILIDADES</h3>
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
      {/* </Fade> */}
      {/* <Fade bottom> */}
      <section id="contact" className="contact">
        <div className="contact-text">
          <div className="contact-text_container">
            <h3>CONTACT</h3>
            <div className="contact_separation"></div>
            <input type="text" placeholder="EMAIL" />
            <input type="text" placeholder="MESSAGE" />
            {/* <input type="button" value="Send" onClick={alert()} /> */}
            <button
              onClick={() =>
                window.alert(
                  "I'm so sorry, the contact system is actually don't working "
                )
              }
            >
              SEND
            </button>
          </div>
        </div>
        <div className="contact-svg">
          <img src="/illustrations/contact.svg" alt="" />
        </div>
      </section>
      {/* </Fade> */}
      {/* <Fade bottom> */}
      <footer id="footer" className="footer">
        <div className="footer-mail">
          <p>luislamiraal@gmail.com</p>
        </div>
        <div className="footer-medias">
          <button className="footer-item">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.776 1.1105C8.99788 1.05425 9.38746 1.04175 12.5 1.04175C15.6125 1.04175 16.002 1.05529 17.2229 1.1105C18.4437 1.16571 19.277 1.3605 20.0062 1.64279C20.7697 1.93133 21.4625 2.38237 22.0354 2.96571C22.6187 3.53758 23.0687 4.22925 23.3562 4.99383C23.6395 5.723 23.8333 6.55633 23.8895 7.77508C23.9458 8.99904 23.9583 9.38862 23.9583 12.5001C23.9583 15.6126 23.9448 16.0022 23.8895 17.224C23.8343 18.4428 23.6395 19.2761 23.3562 20.0053C23.0687 20.77 22.618 21.4628 22.0354 22.0355C21.4625 22.6188 20.7697 23.0688 20.0062 23.3563C19.277 23.6397 18.4437 23.8334 17.225 23.8897C16.002 23.9459 15.6125 23.9584 12.5 23.9584C9.38746 23.9584 8.99788 23.9449 7.776 23.8897C6.55725 23.8345 5.72392 23.6397 4.99475 23.3563C4.23008 23.0688 3.53727 22.6181 2.96454 22.0355C2.38161 21.4633 1.9305 20.7708 1.64267 20.0063C1.36038 19.2772 1.16663 18.4438 1.11038 17.2251C1.05413 16.0011 1.04163 15.6115 1.04163 12.5001C1.04163 9.38758 1.05517 8.998 1.11038 7.77716C1.16558 6.55633 1.36038 5.723 1.64267 4.99383C1.93092 4.22933 2.38237 3.53687 2.96558 2.96466C3.5375 2.38185 4.22962 1.93075 4.99371 1.64279C5.72288 1.3605 6.55621 1.16675 7.77496 1.1105H7.776ZM17.1302 3.173C15.9218 3.11779 15.5593 3.10633 12.5 3.10633C9.44058 3.10633 9.07808 3.11779 7.86975 3.173C6.75204 3.22404 6.14579 3.4105 5.74163 3.56779C5.20725 3.77612 4.82496 4.023 4.42392 4.42404C4.04376 4.79389 3.75119 5.24413 3.56767 5.74175C3.41038 6.14591 3.22392 6.75216 3.17288 7.86987C3.11767 9.07821 3.10621 9.44071 3.10621 12.5001C3.10621 15.5595 3.11767 15.922 3.17288 17.1303C3.22392 18.248 3.41038 18.8542 3.56767 19.2584C3.751 19.7553 4.04371 20.2063 4.42392 20.5761C4.79371 20.9563 5.24475 21.249 5.74163 21.4324C6.14579 21.5897 6.75204 21.7761 7.86975 21.8272C9.07808 21.8824 9.43954 21.8938 12.5 21.8938C15.5604 21.8938 15.9218 21.8824 17.1302 21.8272C18.2479 21.7761 18.8541 21.5897 19.2583 21.4324C19.7927 21.224 20.175 20.9772 20.576 20.5761C20.9562 20.2063 21.2489 19.7553 21.4323 19.2584C21.5895 18.8542 21.776 18.248 21.827 17.1303C21.8823 15.922 21.8937 15.5595 21.8937 12.5001C21.8937 9.44071 21.8823 9.07821 21.827 7.86987C21.776 6.75216 21.5895 6.14591 21.4323 5.74175C21.2239 5.20737 20.977 4.82508 20.576 4.42404C20.2061 4.04391 19.7559 3.75134 19.2583 3.56779C18.8541 3.4105 18.2479 3.22404 17.1302 3.173V3.173ZM11.0364 16.0324C11.8538 16.3726 12.7639 16.4185 13.6113 16.1623C14.4588 15.906 15.191 15.3635 15.6829 14.6274C16.1748 13.8913 16.3958 13.0072 16.3083 12.1262C16.2208 11.2452 15.8302 10.4219 15.2031 9.79696C14.8033 9.39745 14.32 9.09155 13.7878 8.90128C13.2556 8.711 12.6879 8.64108 12.1255 8.69656C11.563 8.75203 11.0199 8.93152 10.5352 9.22209C10.0504 9.51267 9.63615 9.90711 9.32215 10.377C9.00815 10.8469 8.80224 11.3806 8.71925 11.9396C8.63625 12.4987 8.67824 13.0691 8.84219 13.61C9.00613 14.1509 9.28796 14.6486 9.66738 15.0675C10.0468 15.4864 10.5144 15.8159 11.0364 16.0324ZM8.33538 8.3355C8.88228 7.7886 9.53154 7.35477 10.2461 7.05879C10.9607 6.76281 11.7265 6.61047 12.5 6.61047C13.2734 6.61047 14.0393 6.76281 14.7538 7.05879C15.4684 7.35477 16.1176 7.7886 16.6645 8.3355C17.2114 8.8824 17.6453 9.53166 17.9412 10.2462C18.2372 10.9608 18.3896 11.7266 18.3896 12.5001C18.3896 13.2735 18.2372 14.0394 17.9412 14.7539C17.6453 15.4685 17.2114 16.1178 16.6645 16.6647C15.56 17.7692 14.062 18.3897 12.5 18.3897C10.9379 18.3897 9.43989 17.7692 8.33538 16.6647C7.23086 15.5601 6.61035 14.0621 6.61035 12.5001C6.61035 10.9381 7.23086 9.44001 8.33538 8.3355V8.3355ZM19.6958 7.48758C19.8313 7.35974 19.9398 7.206 20.0149 7.03547C20.0899 6.86494 20.13 6.68109 20.1327 6.4948C20.1354 6.30851 20.1007 6.12357 20.0307 5.95092C19.9606 5.77828 19.8567 5.62145 19.7249 5.48971C19.5932 5.35796 19.4363 5.254 19.2637 5.18395C19.0911 5.11391 18.9061 5.07922 18.7198 5.08194C18.5335 5.08465 18.3497 5.12472 18.1792 5.19976C18.0086 5.27481 17.8549 5.38331 17.727 5.51883C17.4784 5.7824 17.3423 6.1325 17.3476 6.4948C17.3528 6.8571 17.4991 7.20308 17.7553 7.45929C18.0115 7.7155 18.3575 7.86178 18.7198 7.86706C19.0821 7.87234 19.4322 7.73622 19.6958 7.48758V7.48758Z"
              />
            </svg>
          </button>
          <button className="footer-item">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24.6282 5.14281C23.7584 5.52823 22.824 5.78864 21.8417 5.90635C22.8552 5.29988 23.6135 4.34538 23.975 3.22093C23.0228 3.78655 21.9806 4.18468 20.8938 4.39802C20.1629 3.61767 19.1949 3.10044 18.14 2.92664C17.085 2.75283 16.0022 2.93218 15.0597 3.43682C14.1171 3.94147 13.3675 4.74319 12.9273 5.7175C12.487 6.69182 12.3808 7.78422 12.625 8.8251C10.6955 8.72822 8.80798 8.22671 7.08485 7.35313C5.36172 6.47954 3.84153 5.25339 2.62295 3.75427C2.20628 4.47302 1.9667 5.30635 1.9667 6.19385C1.96623 6.9928 2.16298 7.77952 2.53949 8.4842C2.916 9.18887 3.46062 9.78972 4.12503 10.2334C3.35449 10.2089 2.60094 10.0007 1.92712 9.62614V9.68864C1.92704 10.8092 2.31465 11.8953 3.02418 12.7626C3.73371 13.6299 4.72146 14.225 5.81982 14.447C5.10502 14.6404 4.35559 14.6689 3.62816 14.5303C3.93805 15.4945 4.54169 16.3376 5.35458 16.9417C6.16747 17.5458 7.1489 17.8805 8.16149 17.8991C6.44257 19.2484 4.31971 19.9804 2.13441 19.9772C1.7473 19.9773 1.36053 19.9547 0.976074 19.9095C3.19428 21.3357 5.77643 22.0926 8.41357 22.0897C17.3407 22.0897 22.2209 14.6959 22.2209 8.28343C22.2209 8.0751 22.2157 7.86468 22.2063 7.65635C23.1555 6.96987 23.9749 6.11978 24.6261 5.14593L24.6282 5.14281V5.14281Z" />
            </svg>
          </button>
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/luis-lamiral/")
            }
            className="footer-item"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.04163 2.95633C1.04163 2.44855 1.24334 1.96157 1.60239 1.60252C1.96145 1.24346 2.44843 1.04175 2.95621 1.04175H22.0416C22.2933 1.04134 22.5425 1.09057 22.7751 1.18661C23.0077 1.28266 23.2191 1.42364 23.3971 1.60148C23.5751 1.77932 23.7163 1.99053 23.8126 2.22301C23.9089 2.4555 23.9584 2.70469 23.9583 2.95633V22.0417C23.9586 22.2934 23.9092 22.5427 23.8131 22.7753C23.7169 23.0079 23.5758 23.2193 23.3979 23.3973C23.22 23.5753 23.0087 23.7165 22.7761 23.8128C22.5436 23.9091 22.2944 23.9586 22.0427 23.9584H2.95621C2.7047 23.9584 2.45565 23.9089 2.22329 23.8126C1.99093 23.7163 1.77983 23.5752 1.60203 23.3973C1.42423 23.2194 1.28322 23.0082 1.18707 22.7758C1.09091 22.5434 1.04149 22.2943 1.04163 22.0428V2.95633ZM10.1125 9.77925H13.2156V11.3376C13.6635 10.4418 14.8093 9.6355 16.5312 9.6355C19.8323 9.6355 20.6145 11.4199 20.6145 14.6938V20.7584H17.2739V15.4397C17.2739 13.5751 16.826 12.523 15.6885 12.523C14.1104 12.523 13.4541 13.6574 13.4541 15.4397V20.7584H10.1125V9.77925ZM4.38329 20.6157H7.72496V9.6355H4.38329V20.6147V20.6157ZM8.20308 6.05425C8.20939 6.34037 8.15847 6.62486 8.05333 6.89104C7.9482 7.15721 7.79095 7.3997 7.59083 7.60428C7.3907 7.80886 7.15173 7.97141 6.88793 8.08238C6.62414 8.19335 6.34083 8.25052 6.05465 8.25052C5.76846 8.25052 5.48516 8.19335 5.22136 8.08238C4.95757 7.97141 4.71859 7.80886 4.51847 7.60428C4.31834 7.3997 4.1611 7.15721 4.05596 6.89104C3.95082 6.62486 3.89991 6.34037 3.90621 6.05425C3.91858 5.49264 4.15036 4.9582 4.55192 4.56538C4.95349 4.17256 5.4929 3.9526 6.05465 3.9526C6.61639 3.9526 7.15581 4.17256 7.55737 4.56538C7.95893 4.9582 8.19072 5.49264 8.20308 6.05425V6.05425Z"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              window.open("https://www.freelancer.es/u/LuisLamiral")
            }
            className="footer-item"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.6833 3.2041L16.3854 5.5916L25 3.2041M5.73229 21.7958L10.3927 17.2395L7.58854 14.2291M13.9771 3.2041L11.4865 5.44785L15.676 5.6041M4.29583 3.20514L5.18854 5.03848L10.1198 5.34473M6.93437 12.7114L10.5771 5.91764L0 5.34369M7.35833 13.1406L10.799 16.8364L14.5937 13.1176L15.7708 6.18848L11.1469 5.95098L7.35833 13.1406Z" />
            </svg>
          </button>
        </div>
      </footer>
      {/* </Fade> */}
    </body>
  );
};

export default Index;
