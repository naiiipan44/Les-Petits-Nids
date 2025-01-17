import "./ProfilePage.css";
function ProfilePage() {
  return (
    <section className="profile-page">
      <figure className="profile">
        <img src="/profile.svg" alt="profile-picture" />
        <figcaption>Ed Cannon</figcaption>
        <figcaption>Papa Poule</figcaption>
      </figure>
      <h3>Mettez toutes les chances de votre côté</h3>
      <p>Un profil complet est nécessaire pour un accueil en crèche</p>
      <button type="button" className="child-button">
        Dossier Enfants
      </button>
      <button type="button" className="parents-button">
        Dossier Parents
      </button>
      <button type="button" className="reservations-button">
        Mes reservations
      </button>
    </section>
  );
}

export default ProfilePage;
