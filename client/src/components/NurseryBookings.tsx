import { type FormEvent, useEffect, useState } from "react";
import "./NurseryBookings.css";
import { useAuth } from "../contexts/AuthContext";
import type { BookingProps } from "../types/BookingProps";

function NurseryBookings() {
  const { user } = useAuth();

  const [booking, setBooking] = useState<BookingProps[] | []>([]);
  const [status, setStatus] = useState<string>("En attente");
  const [childrenId, setChildrenId] = useState<number | null>(null);

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    const { statut } = formatedData;

    if (statut === "refused") {
      setStatus("Refusée");
    } else if (statut === "accepted") {
      setStatus("Acceptée");
    } else {
      setStatus("En attente");
    }

    fetch(
      `${import.meta.env.VITE_API_URL}/api/booking?childrenId=${childrenId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ status }),
      },
    )
      .then((res) => res.json())
      .then((response) => console.log(response));
  }

  function transcriptDate(date: string) {
    return new Date(date).toISOString().split("T")[0];
  }
  return (
    <main className="nursery-bookings-page">
      {booking ? (
        booking.map((el) => {
          return (
            <section className="booking-container" key={el.id}>
              <article className="client-infos">
                <button
                  type="button"
                  className={`status-button ${status}`}
                  disabled
                >
                  {status}
                </button>
                <ul>
                  <li className="child-info">
                    <strong> Enfant : </strong>
                    {el.c_last_name}
                  </li>

                  <li>
                    <strong> Né le : </strong>
                    {el.c_birth_date && transcriptDate(el.c_birth_date)}
                  </li>
                  <li>
                    <strong> Parent : </strong> {el.p_first_name}
                    {el.p_last_name}
                  </li>
                  {/* <li>
                    <p>
                      <strong> Infos supplémentaires : </strong>
                    </p>
                  </li> */}
                </ul>
              </article>

              <article className="booking-infos">
                <ul>
                  {/* <li>
                    <strong> Statut de la réservation : </strong> {status}
                  </li> */}
                  <li>
                    <strong> Date de réservation : </strong>
                    {transcriptDate(el.booking_date)}
                  </li>
                  <li>
                    <strong> Tranche horaire : </strong> {el.booking_range}
                  </li>
                </ul>
              </article>
              <ul>
                <p>
                  <strong> Infos supplémentaires : </strong>
                </p>
              </ul>
              <form onSubmit={handleSubmit}>
                <select id="statut" name="statut">
                  <option value="" disabled selected>
                    Changer le statut de la réservation
                  </option>
                  <option value="pending">En attente</option>
                  <option value="accepted">Acceptée</option>
                  <option value="refused">Refusée</option>
                </select>
                <button
                  type="submit"
                  value={el.children_id}
                  onClick={() => setChildrenId(el.children_id)}
                >
                  Valider
                </button>
              </form>
            </section>
          );
        })
      ) : (
        <p>Aucune réservation en cours</p>
      )}
    </main>
  );
}

export default NurseryBookings;
