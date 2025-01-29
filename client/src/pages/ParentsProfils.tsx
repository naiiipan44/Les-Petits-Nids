import { Link } from "react-router-dom";
import "./ParentsProfils.css";
import ChildrenFolder from "../components/ChildrenFolder";
import ParentsBookings from "../components/ParentsBookings";

function ParentsProfils() {
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
          <button className="button-reservation" type="button">
            Reservation
          </button>
        </section>
      </section>
      <section className="bottom-page">
        <ParentsBookings />
      </section>
      <ChildrenFolder />
    </main>
  );
}
export default ParentsProfils;
