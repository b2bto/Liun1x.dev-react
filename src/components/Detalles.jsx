
function Detalles() {
  return (
    <section id="detalles" className="proyectos">
      <p className="etiqueta">LO QUE ESTOY CONSTRUYENDO</p>
      <h2>Mis proyectos</h2>

      <div className="proyectos-grid">
        <article className="proyecto">
          <h3>Liun1x.dev con React</h3>

          <p>
            Migración progresiva de mi portafolio a React,
            aprendiendo componentes, estilos y organización del código.
          </p>

          <span>React · JavaScript · CSS</span>

          <p>
            <a
              href="https://github.com/b2bto/Liun1x.dev-react"
              target="_blank"
              rel="noreferrer"
            >
              Ver código en GitHub ↗
            </a>
          </p>
        </article>


        <article className="proyecto">
          <h3>AutEmail</h3>
          <p>
            Automatización de la generación de correos para solicitudes
            de creación de usuarios y restablecimiento de contraseñas.
          </p>
          <span>Python · Tkinter · Outlook</span>
        </article>

        <article className="proyecto">
          <h3>Informes SOC</h3>
          <p>
            Herramienta para automatizar la elaboración de informes
            operativos a partir de información almacenada en Excel.
          </p>
          <span>Python · Excel · PowerPoint</span>
        </article>
      </div>
    </section>
  );
}

export default Detalles;
