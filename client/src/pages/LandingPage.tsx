import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <img
        src="/logo-writing-white.png"
        alt="Ceci est le logo des Petits Nids"
        className="logo-writing-white"
      />

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
      <Link to="search" className="round-button">
        &gt;
      </Link>
    </section>
  );
}

export default LandingPage;
