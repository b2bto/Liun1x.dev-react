import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <p className="home-kicker">Frontend Craft</p>
        <h1>Bienvenido a Mi Portfolio</h1>
        <p className="home-subtitle">
          Desarrollador Frontend especializado en React, interfaces de alto
          impacto y experiencias web responsivas.
        </p>

        <div className="home-actions">
          <Link
            to="/perfil/ana-developer"
            className="home-btn home-btn-primary"
          >
            Ver mi perfil
          </Link>
          <Link
            to="/detalles/ecommerce-react"
            className="home-btn home-btn-secondary"
          >
            Ver mis proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
