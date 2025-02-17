import { useParams } from "react-router-dom";
import useToast from "../hooks/useToast";

import "./NurseryAvailabilities.css";
import { useAuth } from "../contexts/AuthContext";

function NurseryAvailabilities() {
  const { id } = useParams();
  const { success, error } = useToast();

  const { user } = useAuth();

  function handleSubmit() {
    const bookingDate = "2025-03-1";
    const bookingRange = "après-midi";
    const status = "en attente";
    const book = user;
    const { parent_id, children_id } = book;

    if (bookingDate && bookingRange && user) {
      fetch(`${import.meta.env.VITE_API_URL}/api/booking/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          bookingDate,
          bookingRange,
          parent_id,
          children_id,
          status,
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
      <p>Tarifs: 3,5€/heure</p>

      <section className="calendar-area">
        <p>Lun. 14</p>
        <p>Mar. 15</p>
        <p>Mer. 16</p>
        <p>Jeu. 17</p>
        <p>Ven. 18</p>
      </section>
      <button className="not-connected" type="button" onClick={handleSubmit}>
        Réserver
      </button>
    </section>
  );
}

export default NurseryAvailabilities;
