import { type FormEvent, useEffect, useState } from "react";
import "./NurseryBookings.css";
import { useAuth } from "../contexts/AuthContext";
import type { BookingProps } from "../types/BookingProps";

function NurseryBookings() {
  const { user } = useAuth();

  const [booking, setBooking] = useState<BookingProps[] | []>([]);
  const [status, setStatus] = useState<string>("pending");

  if (user) {
    useEffect(() => {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/booking/nursery?nurseryId=${user.id}`,
        {
          credentials: "include",
        },
      )
        .then((res) => res.json())
        .then((resp) => {
          setBooking(resp);
        });
    }, [user]);
  }

  const books: BookingProps | null = booking.length ? booking[0] : null;

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
          <li>Statut de la réservation : {status ? status : books?.status}</li>
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
          <option value="pending">En attente</option>
          <option value="accepted">Acceptée</option>
          <option value="refused">Refusée</option>
        </select>
        <button type="submit">Valider la sélection</button>
      </form>
    </section>
  );
}

export default NurseryBookings;
