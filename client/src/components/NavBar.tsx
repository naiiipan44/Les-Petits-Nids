import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
      toast.success("Déconnexion réussie ! Redirection en cours...");
      setUser(null);
      dialogRef.current?.close();
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(`Erreur lors de la déconnexion : ${error}`);
    }
  };

  return (
    <>
      <nav className="nav-component">
        <figure className="logo-navbar">
          <img
            src="/logo-writing.png"
            alt="Ceci est le logo des Petits Nids"
            className="logo-navbar"
          />
        </figure>
        <h1 className="menu-navbar">Menu</h1>
        <NavLink to="favorites" className="nav-buttons">
          <img src="/blueheart.svg" alt="lien vers la page favoris" />
          <h2 className="title-navbar">Favoris</h2>
        </NavLink>
        <NavLink to="search" className="nav-buttons">
          <img src="/search.svg" alt="lien vers la page recherche" />
          <h2 className="title-navbar">Page de recherche</h2>
        </NavLink>
        <h1 className="menu-navbar">Suivi</h1>
        {user ? (
          <>
            {user.role === "parent" && (
              <NavLink to="parent" className="nav-buttons">
                <img src="/folder.png" alt="lien vers mon dossier parent" />
                <h2 className="title-navbar">Dossier</h2>
              </NavLink>
            )}
            {user.role === "nursery" && (
              <NavLink to="nursery" className="nav-buttons">
                <img src="/folder.png" alt="lien vers mon dossier crèche" />
                <h2 className="title-navbar">Profil</h2>
              </NavLink>
            )}
          </>
        ) : (
          <NavLink to="login" className="nav-buttons">
            <img src="/user.svg" alt="lien vers la page profil" />
            <h2 className="title-navbar">Profil</h2>
          </NavLink>
        )}
        <NavLink to="map" className="nav-buttons">
          <img src="/map.svg" alt="lien vers la carte" />
          <h2 className="title-navbar">Carte</h2>
        </NavLink>
        {user && (
          <button
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            className="nav-buttons"
          >
            <img src="/logout.png" alt="lien vers mon dossier" />
            <h2 className="title-navbar">Se déconnecter</h2>
          </button>
        )}
      </nav>
      <dialog
        className="popup-content"
        ref={dialogRef}
        onPointerDown={(e) => {
          if (e.currentTarget === e.target) dialogRef.current?.close();
        }}
      >
        <section>
          <h2 id="popup-title">Voulez-vous vraiment vous déconnecter ?</h2>
          <button type="button" onClick={handleLogout} className="confirm-btn">
            Oui
          </button>
          <button
            type="button"
            onClick={() => {
              dialogRef.current?.close();
            }}
            className="cancel-btn"
          >
            Non
          </button>
        </section>
      </dialog>
    </>
  );
}

export default NavBar;
