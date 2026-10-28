// Detalles.jsx
import { useParams, Link } from "react-router";
import "./Detail.css";

function Detalles() {
  const { proyecto } = useParams();
  const proyectos = {
    "ecommerce-react": {
      titulo: "Tienda Online con React y Redux",
      stack: ["React", "Redux Toolkit", "Stripe"],
      estado: "En produccion",
      resumen:
        "Aplicacion de ecommerce con carrito persistente, filtros avanzados y flujo de pago integrado.",
    },
    "portfolio-personal": {
      titulo: "Portfolio Personal Responsivo",
      stack: ["React", "CSS", "Framer Motion"],
      estado: "Activo",
      resumen:
        "Sitio de marca personal orientado a conversion con secciones dinamicas y transiciones suaves.",
    },
    "blog-gatsby": {
      titulo: "Blog Estatico con Gatsby",
      stack: ["Gatsby", "GraphQL", "Markdown"],
      estado: "Mantenimiento",
      resumen:
        "Blog optimizado para SEO con contenido markdown, busqueda local y carga ultra rapida.",
    },
  };

  const proyectoActual = proyectos[proyecto];

  return (
    <section className="detail-page">
      <div className="detail-surface">
        <p className="detail-kicker">Case Study</p>
        <h1>Detalles del Proyecto</h1>
        <h2>{proyectoActual?.titulo || "Proyecto no encontrado"}</h2>

        <p className="detail-summary">
          {proyectoActual?.resumen ||
            "No hay informacion disponible para este proyecto. Regresa al inicio para explorar los proyectos disponibles."}
        </p>

        {proyectoActual && (
          <>
            <div className="detail-stack" aria-label="Tecnologias del proyecto">
              {proyectoActual.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <p className="detail-status">
              Estado: <strong>{proyectoActual.estado}</strong>
            </p>
          </>
        )}

        <Link className="detail-back" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
export default Detalles;
