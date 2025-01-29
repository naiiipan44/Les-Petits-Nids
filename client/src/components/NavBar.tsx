import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-component">
      <figure className="logo-navbar">
        <img src="/bluelogo.png" alt="Ceci est le logo des Petits Nids" />
        <figcaption className="small-not-navbar">Les Petits Nids</figcaption>
      </figure>
      <h1 className="menu-navbar">Menu</h1>
      <NavLink to="favorites">
        <button type="button" className="nav-buttons">
          <img src="/blueheart.svg" alt="link to the favorite page" />
          <h2 className="title-navbar">Favoris</h2>
        </button>
      </NavLink>
      <NavLink to="search">
        <button type="button" className="nav-buttons">
          <img src="/search.svg" alt="link to the search page" />
          <h2 className="title-navbar">Page de recherche</h2>
        </button>
      </NavLink>
      <NavLink to="loginandregister">
        <button type="button" className="nav-buttons">
          <img src="/user.svg" alt="link to the profil of the user" />
          <h2 className="title-navbar">Profil</h2>
        </button>
      </NavLink>
      <NavLink to="map">
        <button type="button" className="nav-buttons">
          <img src="/map.svg" alt="link to the map page" />
          <h2 className="title-navbar">Map</h2>
        </button>
      </NavLink>
      <h1 className="menu-navbar">Suivi</h1>
      <NavLink to="parentsbookings">
        <button type="button" className="nav-buttons">
          <img src="/books.svg" alt="link to the book page" />
          <h2 className="title-navbar">Reservations</h2>
        </button>
      </NavLink>
    </nav>
  );
}

export default NavBar;
