import { type FormEvent, useEffect, useState } from "react";
import "./NurseryBookings.css";

function NurseryBookings() {
  const nurseryId = 4;
  const [booking, setBooking] = useState<BookProps[] | []>([]);
  const [status, setStatus] = useState<string>("en attente");

  interface BookProps {
    booking_date: string;
    booking_range: string;
    status: string;
    c_first_name: string;
    c_last_name: string;
    c_gender: string;
    c_birth_date: string;
    c_allergies: string;
    p_first_name: string;
    p_last_name: string;
    p_job: string;
    p_address: string;
    p_zip_code: number;
    p_num_tel: number;
    p_mail: string;
    p_birth_date: string;
  }

  if (nurseryId) {
    useEffect(() => {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/booking/nursery?nurseryId=${nurseryId}`,
        {
          credentials: "include",
        },
      )
        .then((res) => res.json())
        .then((resp) => {
          setBooking(resp);
        });
    }, []);
  }

  const books: BookProps | null = booking.length ? booking[0] : null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    const { statut } = formatedData;
    setStatus(statut.toString());
  }

  function transcriptDate(date: string) {
    return new Date(date).toISOString().split("T")[0];
  }

  return (
    <>
      <section className="reservation-status-nursery">
        <button type="button">Tous</button>
        <button type="button">En attente</button>
        <button type="button">Accepté</button>
        <button type="button">Refusé</button>
        <button type="button">Annulé</button>
      </section>
      <section className="booking-container">
        <article className="client-infos">
          <ul>
            <li>Enfant : {books?.c_last_name}</li>
            <li>
              Né le {books?.c_birth_date && transcriptDate(books?.c_birth_date)}
            </li>
            <li>
              Parent : {books?.p_first_name} {books?.p_last_name}
            </li>
            <li>
              <p>Infos supplémentaires</p>
            </li>
          </ul>
        </article>

        <article className="booking-infos">
          <ul>
            <li>
              Statut de la réservation : {status ? status : books?.status}
            </li>
            <li>
              Date de réservation :{" "}
              {books ? transcriptDate(books.booking_date) : ""} |{" "}
              {books?.booking_range === "1" ? "Matinée" : "Après-midi"}
            </li>
          </ul>
        </article>
        <form onSubmit={handleSubmit}>
          <select id="statut" name="statut">
            <option value="" disabled selected>
              Changer le statut de la réservation
            </option>
            <option value="En attente">En attente</option>
            <option value="Acceptée">Acceptée</option>
            <option value="Refusée">Refusée</option>
          </select>
          <button type="submit">Valider la sélection</button>
        </form>
      </section>
    </>
  );
}

export default NurseryBookings;
