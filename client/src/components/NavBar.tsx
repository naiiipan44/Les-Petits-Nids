import { NavLink } from "react-router-dom";
import bookIcon from "/books.svg";
import favoriteIcon from "/favorite.svg";
import mapIcon from "/map.svg";
import searchIcon from "/search.svg";
import profilIcon from "/user.svg";

import "./nav-bar.css";

function NavBar() {
  return (
    <>
      <nav>
        <NavLink to="favorite">
          <button type="button" className="nav-buttons">
            <img src={favoriteIcon} alt="link to the favorite page" />
          </button>
        </NavLink>
        <NavLink to="search">
          <button type="button" className="nav-buttons">
            <img src={searchIcon} alt="link to the search page" />
          </button>
        </NavLink>
        <NavLink to="login">
          <button type="button" className="nav-buttons">
            <img src={profilIcon} alt="link to the profil of the user" />
          </button>
        </NavLink>
        <NavLink to="book">
          <button type="button" className="nav-buttons">
            <img src={bookIcon} alt="link to the book page" />
          </button>
        </NavLink>
        <NavLink to="map">
          <button type="button" className="nav-buttons">
            <img src={mapIcon} alt="link to the map page" />
          </button>
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
