import { Link } from "react-router-dom";
import "./FolderPage.css";
import { useState } from "react";
import ParentFolder from "../components/ParentFolder";
import ParentsBookings from "../components/ParentsBookings";

function FolderPage() {
  const [isBooking, setIsBooking] = useState(false);
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
          <button className="button-parents" type="button">
            Parents
          </button>
          <button className="button-children" type="button">
            Enfants
          </button>
          <button
            className="button-reservation"
            type="button"
            onClick={() => {
              setIsBooking(!isBooking);
            }}
          >
            Reservation
          </button>
        </section>
      </section>
      <section className="bottom-page">
        {isBooking && <ParentsBookings />}
        <ParentFolder />
      </section>
    </main>
  );
}
export default FolderPage;
