import "./ParentProfilePage.css";
import { useState } from "react";
import ChildrenFolder from "../components/ChildrenFolder";
import ParentFolder from "../components/ParentFolder";
import ParentsBookings from "../components/ParentsBookings";
import ParentProfile from "../components/ParentProfile";

function ParentProfilePage() {
  const [display, setDisplay] = useState(true);
  const [isVisible, setIsVisible] = useState("parent");
  return (
    <main className="main-parents-profils">
      {display ? (
        <ParentProfile
          display={display}
          setDisplay={setDisplay}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      ) : (
        <>
          <button
            type="button"
            onClick={() => setDisplay(true)}
            className="button-secondary"
          >
            Retour
          </button>
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

          <section className="bottom-page">
            {isVisible === "parent" ? (
              <ParentFolder />
            ) : isVisible === "children" ? (
              <ChildrenFolder />
            ) : (
              <ParentsBookings />
            )}
          </section>
        </>
      )}
    </main>
  );
}
export default ParentProfilePage;
