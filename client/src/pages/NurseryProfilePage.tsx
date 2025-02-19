import { useState } from "react";

import "./NurseryProfilePage.css";
import NurseryBookings from "../components/NurseryBookings";
import NurseryFolder from "../components/NurseryFolder";
import NurseryProfile from "../components/NurseryProfile";

function NurseryProfilePage() {
  const [folder, setFolder] = useState(true);
  const [display, setDisplay] = useState(true);

  return (
    <main className="main-nursery-profile">
      {display ? (
        <NurseryProfile
          setDisplay={setDisplay}
          display={display}
          folder={folder}
          setFolder={setFolder}
        />
      ) : (
        <>
          <button
            type="button"
            onClick={() => setDisplay(!display)}
            className="button-secondary"
          >
            <img src="/chevron.png" alt="" />
          </button>
          <section className="button-header-nursery-bookings">
            <button
              onClick={() => {
                setFolder(true);
              }}
              className="nursery-profile"
              type="button"
            >
              Profil
            </button>

            <button
              onClick={() => {
                setFolder(false);
              }}
              className="booking-queries"
              type="button"
            >
              Demandes
            </button>
          </section>
          <section className="bottom-page-nursery">
            {folder ? <NurseryFolder /> : <NurseryBookings />}
          </section>
        </>
      )}
    </main>
  );
}
export default NurseryProfilePage;
