
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UsuariosAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [estado, setEstado] = useState("Preparando consulta...");
  const [cargando, setCargando] = useState(true);

  async function cargarUsuarios() {
    setCargando(true);
    setEstado("Consultando la API...");

    try {
      const respuesta = await fetch(API_URL);

      if (!respuesta.ok) {
        throw new Error("No fue posible consultar la API.");
      }

      const datos = await respuesta.json();

      setUsuarios(datos);
      setEstado("Usuarios cargados correctamente.");
    } catch (error) {
      setEstado("Error al cargar los usuarios. Intenta nuevamente.");
      console.error(error);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <section id="usuarios-api" className="seccion">
      <p className="etiqueta">JAVASCRIPT · API REST</p>

      <h2>Directorio de usuarios</h2>

      <p>
        Consulto una API pública para practicar peticiones HTTP
        y mostrar información recibida en formato JSON.
      </p>

      <p aria-live="polite">{estado}</p>

      <p>
        {cargando
          ? "Esperando usuarios..."
          : `Usuarios encontrados: ${usuarios.length}`}
      </p>

      <button
        type="button"
        className="boton"
        onClick={cargarUsuarios}
        disabled={cargando}
      >
        {cargando ? "Cargando..." : "Recargar usuarios"}
      </button>

      <div className="usuarios-grid" aria-busy={cargando}>
        {usuarios.map((usuario) => (
          <article className="proyecto" key={usuario.id}>
            <h3>{usuario.name}</h3>
            <p>{usuario.email}</p>
            <p>{usuario.company.name}</p>
            <p>{usuario.address.city}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UsuariosAPI;
