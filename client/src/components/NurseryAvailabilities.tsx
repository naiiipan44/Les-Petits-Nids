import { useParams } from "react-router-dom";
import useToast from "../hooks/useToast";

interface BookingInfos {
  bookingInfos: {
    id: number;
    email: string;
    role: string;
    first_name: string;
    iat: number;
    exp: number;
    parent_id: number;
    children_id: number;
  };
}

function NurseryAvailabilities(bookingInfos: Readonly<BookingInfos>) {
  const { id } = useParams();
  const { success, error } = useToast();

  function handleSubmit() {
    const bookingDate = "2025-03-11";
    const bookingRange = true;
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
