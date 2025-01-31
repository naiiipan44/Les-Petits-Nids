import { useNavigate } from "react-router-dom";

function NurseryProfile() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/nursery");
  }
  // il faudrait passer des informations dynamiques ci-dessous
  return (
    <section className="profile-page">
      <figure className="profile">
        {/* Renseigner ci-dessous une image de crèche */}
        <img src="" alt="profile-picture" />
        <figcaption>Picoti picota</figcaption>
      </figure>
      <h3>Mettez toutes les chances de votre côté</h3>
      <p>Un profil complet est nécessaire pour un accueil en crèche</p>
      <button type="button" className="child-button" onClick={handleClick}>
        Dossier Crèche
      </button>
      <button
        type="button"
        className="reservations-button"
        onClick={handleClick}
      >
        Les demandes de reservations
      </button>
    </section>
  );
}

export default NurseryProfile;
