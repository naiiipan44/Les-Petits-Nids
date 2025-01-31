import { Link } from "react-router-dom";
import "./ParentProfilePage.css";
import { useState } from "react";
import ChildrenFolder from "../components/ChildrenFolder";
import ParentFolder from "../components/ParentFolder";
import ParentsBookings from "../components/ParentsBookings";

function ParentProfilePage() {
  const [isVisible, setIsVisible] = useState("parent");
  return (
    <main className="main-parents-profils">
      <section className="header-gradient">
        <section className="return-form-profil">
          <Link to={"/profile"} className="back-button">
            <span className="arrow" />
          </Link>
          <h1>
            Ed Cannan <br /> Papa Poule{" "}
          </h1>
        </section>
        <section className="button-header-bookings">
          <button
            onClick={() => {
              setIsVisible("parent");
            }}
            className="button-parents"
            type="button"
          >
            Parents
          </button>
          <button
            onClick={() => {
              setIsVisible("children");
            }}
            className="button-children"
            type="button"
          >
            Enfants
          </button>
          <button
            className="button-reservation"
            type="button"
            onClick={() => {
              setIsVisible("booking");
            }}
          >
            Reservation
          </button>
        </section>
      </section>
      <section className="bottom-page">
        {isVisible === "parent" ? (
          <ParentFolder />
        ) : isVisible === "children" ? (
          <ChildrenFolder />
        ) : (
          <ParentsBookings />
        )}
      </section>
    </main>
  );
}
export default ParentProfilePage;
