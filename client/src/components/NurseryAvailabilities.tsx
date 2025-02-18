import { useParams } from "react-router-dom";
import useToast from "../hooks/useToast";

import "./NurseryAvailabilities.css";

function NurseryAvailabilities(bookingInfos: Readonly<BookingInfos>) {
  const { id } = useParams();
  const { success, error } = useToast();

  function handleSubmit() {
    const bookingDate = "2025-05-11";
    const bookingRange = "après-midi";
    const status = "en attente";
    const book = bookingInfos.bookingInfos;
    const { parent_id, children_id } = book;

    if (bookingDate && bookingRange && bookingInfos) {
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
