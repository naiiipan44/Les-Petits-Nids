import "../pages/ProfilePage.css";
import { useAuth } from "../contexts/AuthContext";
import type { NurseryProfileProps } from "../types/NurseryProfileProps";

function NurseryProfile({ setDisplay, setFolder }: NurseryProfileProps) {
  const { user } = useAuth();
  return (
    <section className="profile-page">
      <figure className="profile">
        <img
          src="/upload.png"
          alt="Logo du profile indiquant l'ajout d'image de profile"
        />
        <figcaption>
          {user.first_name} {user.last_name}
        </figcaption>
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
