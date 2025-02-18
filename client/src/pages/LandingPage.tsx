import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <section className="white-painting">
        <img
          src="/logo-writing.png"
          alt="Ceci est le logo des Petits Nids"
          className="logo-writing"
        />
        <img
          src="/mother2.png"
          alt="Ceci est un dessin représentant une mère et son enfant"
        />
        <figcaption>Garde d'enfant à la demande</figcaption>

        <p>
          Réservez une place en moins de 60 secondes et obtenez une solution de
          garde, même pour le lendemain !
        </p>
        <Link to="search" className="round-button-white">
          &gt;
        </Link>
      </section>
    </section>
  );
}

export default LandingPage;
