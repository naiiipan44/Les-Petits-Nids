import "../pages/ProfilePage.css";
import type { ParentProfileProps } from "../types/ParentProfile";

function ParentProfile({ setDisplay, setIsVisible }: ParentProfileProps) {
  return (
    <section className="profile-page">
      <figure className="profile">
        <img src="/profile.svg" alt="portrait de profil" />
        <figcaption>Ed Cannon</figcaption>
        <h2>Papa Poule</h2>
      </figure>
      <h3>Mettez toutes les chances de votre côté</h3>
      <p>Un profil complet est nécessaire pour un accueil en crèche</p>
      <button
        type="button"
        className="child-button"
        onClick={() => {
          setDisplay(false);
          setIsVisible("children");
        }}
      >
        Dossier Enfants
      </button>
      <button
        type="button"
        className="parents-button"
        onClick={() => {
          setDisplay(false);
          setIsVisible("parent");
        }}
      >
        Dossier Parents
      </button>
      <button
        type="button"
        className="reservations-button"
        onClick={() => {
          setDisplay(false);
          setIsVisible("booking");
        }}
      >
        Mes reservations
      </button>
    </section>
  );
}

export default ParentProfile;
