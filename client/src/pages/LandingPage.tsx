//1. Les imports de base
import { Link } from "react-router-dom";
// 2. Les Styles et assets
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <meta
        name="description"
        content="Page d'accueil et de présentation de l'application Les Petits Nids. Les Petits Nids est une application conçue pour permettre aux parents de réserver en urgence une place en crèche du lundi au vendredi de 9h à 17h pour leur enfant"
      />
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
          <h1>Garde d'enfant à la demande</h1>

          <p>
            Réservez une place en moins de 60 secondes et obtenez une solution
            de garde, même pour le lendemain !
          </p>
          <Link
            to="search"
            className="round-button-white"
            aria-label="Cliquez sur ce bouton pour accéder à la page de recherche"
          >
            &gt;
          </Link>
        </section>
        <Link to="search" className="round-button">
          &gt;
        </Link>
      </section>
    </>
  );
}

export default LandingPage;
