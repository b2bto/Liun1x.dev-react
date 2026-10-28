import { NavLink } from "react-router";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-wrap">
      <nav className="nav-shell" aria-label="Navegacion principal">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          end
        >
          Inicio
        </NavLink>
        <NavLink
          to="/perfil/ana-developer"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Mi Perfil
        </NavLink>
        <NavLink
          to="/detalles/ecommerce-react"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          Proyectos
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
