import { Link } from "react-router-dom";
import "./NurseryProfile.css";
import NurseryBookings from "../components/NurseryBookings";

function NurseryProfile() {
  return (
    <main className="main-nursery-profile">
      <section className="header-gradient-nursery">
        <section className="return-form-nursery-profil">
          <Link to={"/profile"} className="back-button">
            <span className="arrow" />
          </Link>
          <h1>Picoti Picota </h1>
        </section>
        <section className="button-header-nursery-bookings">
          <button className="button-nursery-profile" type="button">
            Profil
          </button>

          <button className="button-demandes" type="button">
            Demandes
          </button>
        </section>
      </section>
      <section className="bottom-page-nursery">
        <NurseryBookings />
      </section>
    </main>
  );
}
export default NurseryProfile;
