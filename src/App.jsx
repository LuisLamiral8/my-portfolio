import React from "react";
import Typical from "react-typical";
import "./styles/globals.scss";
function App() {
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
          <h3>MY PORTFOLIO</h3>
        </div>
      </header>
      <div className="wave-container">
        <img className="wave" width="100%" src="/wave.svg" alt="" />
      </div>
      <section className="desc">
        <p>Lorem ip adipisci error eaque, consequatur laboriosam ipsam distinctio harum quos repellat accusamus vel alias similique doloremque corrupti! Corporis temporibus harum asperiores pariatur nobis, aspernatur aperiam repellat quas quibusdam? Quae aspernatur iusto tempora est tempore, aliquid amet iste blanditiis dignissimos voluptates cupiditate commodi. Eligendi, quas, tenetur sapiente molestias soluta sint, odio doloribus exercitationem aliquam magnam laborum id provident! Tempore voluptatibus facere consequuntur, debitis magnam quia perspiciatis quae perferendis? Est labore aspernatur quia. Facilis tempora ab, dignissimos sequi at mollitia nobis? Tempora neque aliquam quod ut laborum laudantium porro cum. Dolore reprehenderit explicabo rem odit ea veritatis ipsa dolores. Adipisci dolores omnis exercitationem. Est harum a sint suscipit molestiae dolore adipisci praesentium officiis voluptatibus eum modi velit, voluptas optio tempore deleniti numquam fugiat eveniet dicta recusandae, necessitatibus quia iusto ducimus. Explicabo quaerat aliquid temporibus eaque debitis incidunt ad cum molestiae officia, architecto voluptate reiciendis cumque dicta quo nisi optio adipisci, accusamus maiores ut eos error vel quas neque? Beatae veniam neque dolorum quidem cupiditate quasi natus nulla, minus earum, impedit commodi totam quae voluptas numquam officiis ex nobis! Impedit a dolorum voluptates explicabo fuga reiciendis eligendi maiores sunt debitis veritatis ea, quis doloremque voluptatem numquam repellendus illo. Error doloremque neque minus eos, provident dicta cupiditate rerum est totam atque odit aut impedit praesentium dolorum ullam numquam molestiae quasi a, recusandae accusantium reprehenderit soluta magni. Amet consequuntur pariatur odit fugiat provident. Quo, iure. Veritatis, voluptas! Dolor reprehenderit quam nam cumque id eius illum unde laboriosam doloremque ipsa, distinctio quidem quos veniam, aliquid dolorum in quaerat? Eligendi rerum enim eos ab, itaque sint eaque modi ea dolor numquam magni libero nulla ipsa dolorum quaerat, nisi asperiores ut iste doloremque saepe praesentium molestiae! Nemo quos accusamus non illo, iusto nihil quis totam molestiae nulla rerum reprehenderit ad aliquam libero voluptas quae aut corrupti optio necessitatibus sed saepe numquam inventore autem debitis fugit! Fugit enim, commodi nisi nobis dolorem nam ratione nihil ullam accusantium ipsam, accusamus repellat illum aliquid quae? Earum, cumque sequi. Ipsum beatae ab ipsa vitae temporibus, delectus incidunt quis tempore nostrum iste a illo earum voluptas provident possimus nesciunt dicta unde explicabo aliquid nulla veritatis iure reiciendis quibusdam repellendus? Iste praesentium incidunt repudiandae excepturi.</p>
      </section>
    </body>
  );
}

export default App;
