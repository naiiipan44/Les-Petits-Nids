import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="nav-component">
      <figure className="logo-navbar">
        <img src="/bluelogo.png" alt="Ceci est le logo des Petits Nids" />
        <figcaption className="small-not-navbar">Les Petits Nids</figcaption>
      </figure>
      <h1 className="menu-navbar">Menu</h1>
      <NavLink to="favorites">
        <button type="button" className="nav-buttons">
          <img src="/blueheart.svg" alt="lien vers la page favoris" />
          <h2 className="title-navbar">Favoris</h2>
        </button>
      </NavLink>
      <NavLink to="search">
        <button type="button" className="nav-buttons">
          <img src="/search.svg" alt="lien vers la page recherche" />
          <h2 className="title-navbar">Page de recherche</h2>
        </button>
      </NavLink>
      {user ? (
        <>
          {user.role === "parent" && (
            <NavLink to="profile">
              <button type="button" className="nav-buttons">
                <img src="/user.svg" alt="lien vers mon dossier" />
                <h2 className="title-navbar">Profil</h2>
              </button>
            </NavLink>
          )}

          {user.role === "nursery" && (
            <NavLink to="nurseryprofile">
              <button type="button" className="nav-buttons">
                <img src="/user.svg" alt="lien vers mon dossier" />
                <h2 className="title-navbar">Profil</h2>
              </button>
            </NavLink>
          )}
        </>
      ) : (
        <NavLink to="loginandregister">
          <button type="button" className="nav-buttons">
            <img src="/user.svg" alt="lien vers la page profil" />
            <h2 className="title-navbar">Profil</h2>
          </button>
        </NavLink>
      )}
      <NavLink to="map">
        <button type="button" className="nav-buttons">
          <img src="/map.svg" alt="lien vers la carte" />
          <h2 className="title-navbar">Carte</h2>
        </button>
      </NavLink>
      <h1 className="menu-navbar">Suivi</h1>
      <NavLink to="parentsbookings">
        <button type="button" className="nav-buttons">
          <img src="/books.svg" alt="lien vers les réservations" />
          <h2 className="title-navbar">Reservations</h2>
        </button>
      </NavLink>
    </nav>
  );
}

export default NavBar;
