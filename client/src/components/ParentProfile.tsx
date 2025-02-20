// React tools
import { useEffect, useState } from "react";

// React librairies
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { ParentProfileProps } from "../types/ParentProfile";
import type { UserParent } from "../types/UserParent";

// Style
import "../pages/ProfilePage.css";

function ParentProfile({
  setDisplay,
  setIsVisible,
  check,
  setCheck,
}: Readonly<ParentProfileProps>) {
  const [userId, setUserId] = useState(0);

  const [parent, setParent] = useState<UserParent | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setParent(user);
      setUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
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
            <img src="/upload.png" alt="portrait de profil" />
            <figcaption>
              {parent.first_name} {parent.last_name}
            </figcaption>
          </figure>
          <h3>Mettez toutes les chances de votre côté</h3>
          <p>Un profil complet est nécessaire pour un accueil en crèche</p>

          <button
            type="button"
            className="parents-button"
            onClick={() => {
              setDisplay(false);
              setIsVisible("parent");
              setCheck(false);
            }}
          >
            Dossier Parent
          </button>
          <button
            type="button"
            className={`child-button ${check && "lock"}`}
            disabled={!check}
            onClick={() => {
              setDisplay(false);
              setIsVisible("children");
            }}
          >
            Dossier Enfant
          </button>
          <button
            type="button"
            className={`reservations-button ${check && "lock"}`}
            disabled={!check}
            onClick={() => {
              setDisplay(false);
              setIsVisible("booking");
            }}
          >
            Mes Réservations
          </button>
        </>
      ) : (
        <p>Vous devez être connecté pour accéder à cette page</p>
      )}
    </section>
  );
}

export default ParentProfile;
