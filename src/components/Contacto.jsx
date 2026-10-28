
function Contacto() {
  function manejarEnvio(evento) {
    evento.preventDefault();

    alert("El formulario todavía no está conectado a un servicio de envío.");
  }

  return (
    <section id="contacto" className="seccion">
      <p className="etiqueta">HABLEMOS</p>

      <h2>Contacto</h2>

      <p>
        ¿Tienes alguna idea o proyecto? Puedes preparar tu mensaje
        mediante este formulario.
      </p>

      <form className="formulario-contacto" onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          required
        />

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu@correo.com"
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          rows="5"
          required
        />

        <button type="submit" className="boton">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contacto;
