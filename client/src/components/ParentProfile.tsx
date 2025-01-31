import { useNavigate } from "react-router-dom";

function ParentProfile() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/parent");
  }
  return (
    <section className="profile-page">
      <figure className="profile">
        <img src="/profile.svg" alt="profile-picture" />
        <figcaption>Ed Cannon</figcaption>
        <h2>Papa Poule</h2>
      </figure>
      <h3>Mettez toutes les chances de votre côté</h3>
      <p>Un profil complet est nécessaire pour un accueil en crèche</p>
      <button type="button" className="child-button" onClick={handleClick}>
        Dossier Enfants
      </button>
      <button type="button" className="parents-button" onClick={handleClick}>
        Dossier Parents
      </button>
      <button
        type="button"
        className="reservations-button"
        onClick={handleClick}
      >
        Mes reservations
      </button>
    </section>
  );
}

export default ParentProfile;
