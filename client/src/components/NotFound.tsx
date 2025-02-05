import { Link } from "react-router-dom";
import "./NotFound.css"; // Import du CSS

const NotFound = () => {
  return (
    <section className="not-found-overlay">
      <section className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oups ! Cette page n'existe pas.</p>
        <p className="not-found-subtext">
          La page que vous recherchez a peut-être été déplacée ou supprimée.
        </p>
        <Link to="/search" className="not-found-link">
          Retour à l'accueil
        </Link>
      </section>
    </section>
  );
};

export default NotFound;
