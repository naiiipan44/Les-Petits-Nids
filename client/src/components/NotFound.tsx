import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-overlay">
      <section>
        <h1>404</h1>
        <p>Oups ! Cette page n'existe pas.</p>
        <p>
          La page que vous recherchez a peut-être été déplacée ou supprimée.
        </p>
        <Link to="/search">Retour à l'accueil</Link>
      </section>
    </section>
  );
};

export default NotFound;
