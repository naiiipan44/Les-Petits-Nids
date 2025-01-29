import { useState } from "react";
import { Link } from "react-router-dom";
import "./NurseryProfile.css";
import NurseryBookings from "../components/NurseryBookings";
import NurseryFolder from "../components/NurseryFolder";

function NurseryProfile() {
  const [profile, setProfile] = useState(true);

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
          <button
            onClick={() => {
              setProfile(true);
            }}
            className="nursery-profile"
            type="button"
          >
            Profil
          </button>

          <button
            onClick={() => {
              setProfile(false);
            }}
            className="booking-queries"
            type="button"
          >
            Demandes
          </button>
        </section>
      </section>
      <section className="bottom-page-nursery">
        {profile ? <NurseryFolder /> : <NurseryBookings />}
      </section>
    </main>
  );
}
export default NurseryProfile;
