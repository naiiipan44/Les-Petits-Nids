import "../pages/ProfilePage.css";
import type { NurseryProfileProps } from "../types/NurseryProfileProps";

function NurseryProfile({ setDisplay, setFolder }: NurseryProfileProps) {
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
      <button
        type="button"
        className="child-button"
        onClick={() => {
          setDisplay(false);
          setFolder(true);
        }}
      >
        Dossier Crèche
      </button>
      <button
        type="button"
        className="reservations-button"
        onClick={() => {
          setDisplay(false);
          setFolder(false);
        }}
      >
        Les demandes de reservations
      </button>
    </section>
  );
}

export default NurseryProfile;
