import "./ParentProfilePage.css";
import { useEffect, useState } from "react";
import ChildrenFolder from "../components/ChildrenFolder";
import ParentFolder from "../components/ParentFolder";
import ParentProfile from "../components/ParentProfile";
import ParentsBookings from "../components/ParentsBookings";

function ParentProfilePage() {
  const [display, setDisplay] = useState(true);
  const [isVisible, setIsVisible] = useState("parent");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 680);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main-parents-profils">
      {isMobile ? (
        display ? (
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
        )
      ) : (
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
      )}
    </main>
  );
}
export default ParentProfilePage;
