// React tools
import { useState } from "react";

// Components
import ChildrenFolder from "../components/ChildrenFolder";
import ParentFolder from "../components/ParentFolder";
import ParentProfile from "../components/ParentProfile";
import ParentsBookings from "../components/ParentsBookings";

// Style
import "./ParentProfilePage.css";

function ParentProfilePage() {
  const [display, setDisplay] = useState(true);
  const [isVisible, setIsVisible] = useState("parent");
  const [check, setCheck] = useState(true);

  return (
    <main className="main-parents-profils">
      <section className="mobile">
        {display ? (
          <ParentProfile
            display={display}
            setDisplay={setDisplay}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            check={check}
            setCheck={setCheck}
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
                Parents
              </button>
              <button
                type="button"
                onClick={() => setIsVisible("children")}
                className="button-children"
              >
                Enfants
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
          check={check}
          setCheck={setCheck}
        />
        <section className="right-section">
          <section className="button-header-bookings">
            <button
              type="button"
              onClick={() => setIsVisible("parent")}
              className="button-parents"
            >
              Parents
            </button>
            <button
              type="button"
              onClick={() => setIsVisible("children")}
              className="button-children"
            >
              Enfants
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
