import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-component">
      <figure className="logo-navbar">
        <img src="/logo.svg" alt="Ceci est le logo des Petits Nids" />
        <figcaption className="small-not-navbar">Les Petits Nids</figcaption>
      </figure>
      <NavLink to="favorites">
        <button type="button" className="nav-buttons">
          <img src="/blueheart.svg" alt="link to the favorite page" />
        </button>
      </NavLink>
      <NavLink to="search">
        <button type="button" className="nav-buttons">
          <img src="/search.svg" alt="link to the search page" />
        </button>
      </NavLink>
      <NavLink to="loginandregister">
        <button type="button" className="nav-buttons">
          <img src="/user.svg" alt="link to the profil of the user" />
        </button>
      </NavLink>
      <NavLink to="parentsbookings">
        <button type="button" className="nav-buttons">
          <img src="/books.svg" alt="link to the book page" />
        </button>
      </NavLink>
      <NavLink to="map">
        <button type="button" className="nav-buttons">
          <img src="/map.svg" alt="link to the map page" />
        </button>
      </NavLink>
    </nav>
  );
}

export default NavBar;
