import { useParams } from "react-router-dom";
import useToast from "../hooks/useToast";

import "./NurseryAvailabilities.css";
import { useEffect, useState } from "react";
import type { User } from "../types/Login";

function NurseryAvailabilities() {
  const { id } = useParams();
  const { success, error } = useToast();
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => setUserData(result.user));
  }, []);

  function handleSubmit() {
    const bookingDate = "2025-03-1";
    const bookingRange = "après-midi";
    const status = "en attente";
    let parentId = null;
    let childrenId = null;

    if (userData) {
      parentId = userData.parent_id;
      childrenId = userData.children_id;
    }

    if (bookingDate && bookingRange) {
      fetch(`${import.meta.env.VITE_API_URL}/api/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          bookingDate,
          bookingRange,
          parentId,
          childrenId,
          status,
          id,
        }),
      }).then((response) => {
        if (response.ok) {
          success("La demande de réservation a bien été enregistrée !");
        } else {
          error("La demande de réservation n'a pas aboutie");
        }
      });
    }
  }

  return (
    <section className="nursery-availabilities-calendar">
      <section className="calendar-area">
        <button type="button" className="date-button">
          Lun. 14
        </button>
        <button type="button" className="date-button">
          Mar. 15
        </button>
        <button type="button" className="date-button">
          Mer. 16
        </button>
        <button type="button" className="date-button">
          Jeu. 17
        </button>
        <button type="button" className="date-button">
          Ven. 18
        </button>
        <button type="button" className="date-button">
          Sam. 19
        </button>
      </section>
      <p>Tarifs: 3,5€/heure</p>
      <button className="not-connected" type="button" onClick={handleSubmit}>
        Réserver
      </button>
    </section>
  );
}

export default NurseryAvailabilities;
