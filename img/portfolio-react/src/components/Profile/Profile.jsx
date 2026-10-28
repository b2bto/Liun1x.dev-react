import { useParams } from "react-router";
import "./Profile.css";

function Profile() {
  const { id } = useParams();
  const nombre = id.replace(/-/g, " ");

  return (
    <section className="profile-page">
      <article className="profile-card">
        <p className="profile-kicker">Personal Profile</p>
        <h1>Perfil de Usuario</h1>

        <p className="profile-id">
          ID del usuario: <strong>{id}</strong>
        </p>

        <div className="profile-info">
          <h2>Informacion Personal</h2>
          <p>
            <span>Nombre</span>
            <strong>{nombre}</strong>
          </p>
          <p>
            <span>Especialidad</span>
            <strong>React Developer</strong>
          </p>
          <p>
            <span>Enfoque</span>
            <strong>UI performante y accesible</strong>
          </p>
        </div>
      </article>
    </section>
  );
}

export default Profile;
