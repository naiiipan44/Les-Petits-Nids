import { useEffect, useState } from "react";
import "../pages/ProfilePage.css";
import { Link } from "react-router-dom";
import type { ParentProfileProps } from "../types/ParentProfile";
import type { UserParent } from "../types/UserParent";

function ParentProfile({ setDisplay, setIsVisible }: ParentProfileProps) {
  const [userId, setUserId] = useState(0);

  const [parent, setParent] = useState<UserParent | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((user) => setUserId(user.user.id));

    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/api/user?userId=${userId}`)
        .then((response) => response.json())
        .then((user) => {
          if (user.length) {
            setParent(user[0]);
          }
        });
    }
  }, [userId]);

  return (
    <section className="profile-page">
      {userId > 0 && parent ? (
        <>
          <Link to="/search">
            <img
              src="public/chevron.png"
              alt="boutton retour vers page d'accueil"
            />
          </Link>
          <figure className="profile">
            <img src="/profile.svg" alt="portrait de profil" />
            <figcaption>
              {parent.first_name} {parent.last_name}
            </figcaption>
            <h2>{parent.role}</h2>
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
        </>
      ) : (
        <p>Vous devez être connecté pour accéder à cette page</p>
      )}
    </section>
  );
}

export default ParentProfile;
