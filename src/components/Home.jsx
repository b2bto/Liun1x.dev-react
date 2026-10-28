
import SobreMi from "./SobreMi.jsx";
import Detalles from "./Detalles.jsx";
import UsuariosAPI from "./UsuariosAPI.jsx";
import Habilidades from "./Habilidades.jsx";
import Contacto from "./Contacto.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <>
      <section id="inicio" className="inicio">
        <p className="etiqueta">
          DESARROLLO WEB · LINUX · TECNOLOGÍA
        </p>

        <h1>
          Explorando el código,
          <br />
          construyendo <span>Liun1x.dev</span>
        </h1>

        <h2>Aprendiendo desarrollo web y Linux</h2>

        <p>
          Hola, soy Liun1x. Me interesa el desarrollo web,
          la programación y la automatización de tareas
          con Python.
        </p>

        <p>
          Este es mi espacio personal para compartir
          proyectos, prácticas y aprendizajes.
        </p>

        <div className="acciones-inicio">
          <a href="#sobre-mi" className="boton">
            Conoce mi perfil
          </a>

          <a href="#proyectos" className="boton">
            Ver proyectos
          </a>
        </div>
      </section>

      <SobreMi />
      <Detalles />
      <UsuariosAPI />
      <Habilidades />
      <Contacto />
      <Footer />
    </>
  );
}

export default Home;
