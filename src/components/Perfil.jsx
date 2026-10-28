
function Perfil() {
  return (
    <section id="perfil" className="perfil">
      <p className="etiqueta">SOBRE MÍ</p>
      <h2>Aprendiendo y construyendo</h2>

      <p>
        Me interesa Linux, la automatización y el desarrollo web.
        Este portafolio es un espacio para experimentar, documentar
        mis avances y compartir lo que voy aprendiendo.
      </p>

      <h3>Diario de construcción</h3>

      <article className="entrada">
        <span>01 · Inicio</span>
        <h4>Preparando el entorno React</h4>
        <p>
          Configuré React y Vite para comenzar la migración del
          portafolio, manteniendo los estilos originales de mi primer HTML.
        </p>
      </article>

      <article className="entrada">
        <span>02 · Componentes</span>
        <h4>Organizando la página</h4>
        <p>
          Separé la navegación, la portada, el perfil y los proyectos
          en componentes independientes.
        </p>
      </article>
    </section>
  );
}

export default Perfil;
