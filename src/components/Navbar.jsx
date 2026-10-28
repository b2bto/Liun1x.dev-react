
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Liun1x.dev
      </a>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/perfil/luis-rojas">
            Mi perfil
          </NavLink>
        </li>

        <li>
          <NavLink to="/proyectos/liun1x-dev-react">
            Proyectos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
