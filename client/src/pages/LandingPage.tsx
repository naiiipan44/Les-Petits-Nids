import { NavLink } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section className="landing-page">
      <figure className="logo">
        <img src="/logo.svg" alt="logo" />
        <figcaption className="small-not">Les Petits Nids</figcaption>
      </figure>

      <section className="white-painting">
        <figure className="mother2">
          <img src="/mother2.png" alt="" />

          <figcaption className="welcome">
            Garde d'enfant à la demande
          </figcaption>
        </figure>
        <p className="account-created">
          Réservez une place en moins de 60 secondes et obtenez une solution de
          garde, même pour le lendemain !
        </p>
      </section>
      <NavLink to="search">
        <div className="button-pass">
          <button type="button" className="round-button">
            &gt;
          </button>
        </div>
      </NavLink>
    </section>
  );
}

export default LandingPage;
