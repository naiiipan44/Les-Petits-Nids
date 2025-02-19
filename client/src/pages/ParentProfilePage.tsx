//1. Les imports de base
import { useState } from "react";
// 2.Les composants et modules
//Composant enfants
import ChildrenFolder from "../components/ChildrenFolder";
import ParentFolder from "../components/ParentFolder";
//Composant parents
import ParentProfile from "../components/ParentProfile";
import ParentsBookings from "../components/ParentsBookings";
// 3. Les Styles et assets
import "./ParentProfilePage.css";

function ParentProfilePage() {
  const [display, setDisplay] = useState(true);
  const [isVisible, setIsVisible] = useState("parent");

  return (
    <main className="main-parents-profils">
      <section className="mobile">
        {display ? (
          <ParentProfile
            display={display}
            setDisplay={setDisplay}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        ) : (
          <>
            <button type="button" onClick={() => setDisplay(true)}>
              Retour
            </button>
            <section className="button-header-bookings">
              <button
                type="button"
                onClick={() => setIsVisible("parent")}
                className="button-parents"
              >
                Parent
              </button>
              <button
                type="button"
                onClick={() => setIsVisible("children")}
                className="button-children"
              >
                Enfant
              </button>
              <button
                type="button"
                onClick={() => setIsVisible("booking")}
                className="button-reservation"
              >
                Réservation
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
      </section>
      <section className="desktop-layout">
        <ParentProfile
          display={display}
          setDisplay={setDisplay}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <section className="right-section">
          <section className="button-header-bookings">
            <button
              type="button"
              onClick={() => setIsVisible("parent")}
              className="button-parents"
            >
              Parent
            </button>
            <button
              type="button"
              onClick={() => setIsVisible("children")}
              className="button-children"
            >
              Enfant
            </button>
            <button
              type="button"
              onClick={() => setIsVisible("booking")}
              className="button-reservation"
            >
              Réservation
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
        </section>
      </section>
    </main>
  );
}
export default ParentProfilePage;
