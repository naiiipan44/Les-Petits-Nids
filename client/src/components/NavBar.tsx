import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
      window.location.href = "/login";
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
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
      {user ? (
        <>
          {user.role === "parent" && (
            <NavLink to="profile" className="nav-buttons">
              <img src="/user.svg" alt="lien vers mon dossier" />
              <h2 className="title-navbar">Profil</h2>
            </NavLink>
          )}

          {user.role === "nursery" && (
            <NavLink to="nurseryprofile" className="nav-buttons">
              <img src="/user.svg" alt="lien vers mon dossier" />
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
      <h1 className="menu-navbar">Suivi</h1>

      {user ? (
        <button type="button" onClick={handleLogout} className="nav-buttons">
          <img src="/user.svg" alt="lien vers mon dossier" />
          <h2 className="title-navbar">Profil</h2>
        </button>
      ) : (
        <NavLink to="parentsbookings" className="nav-buttons">
          <img src="/books.svg" alt="lien vers les réservations" />
          <h2 className="title-navbar">Reservations</h2>
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
