// React tools
import { useEffect, useState } from "react";

// React libraries
import { Link } from "react-router-dom";

// Types and interfaces TS
import type { BookingData } from "../types/Booking";
import type { User } from "../types/Login";

// Style
import "./ParentsBookings.css";

function ParentsBookings() {
  const [userData, setUserData] = useState<User | null>(null);
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setUserData(result.user);
        }
      });
  }, []);

  useEffect(() => {
    if (userData) {
      const parentId = userData.parent_id;

      fetch(
        `${import.meta.env.VITE_API_URL}/api/booking/parent?parentId=${parentId}`,
        {
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        },
      )
        .then((res) => res.json())
        .then((booking) => {
          if (booking.length) {
            setBooking(booking[0]);
          }
        });
    }
  }, [userData]);

  return (
    <main className="main-parent-booking">
      {booking ? (
        <article className="booking">
          <img src={booking?.ns_image} alt="Nursery" />
          <ul className="booking-content">
            <li>
              <strong>{booking?.ns_name}</strong>
            </li>
            <li>
              {booking?.booking_date
                ? new Date(booking.booking_date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : ""}
            </li>
            <li>
              {booking?.booking_range === "afternoon"
                ? "Après-midi"
                : booking?.booking_range === "morning"
                  ? "Matin"
                  : "Toute la journée"}
            </li>
          </ul>
          <button
            type="button"
            className={`status-button ${
              booking?.status === "Acceptée"
                ? "accepted"
                : booking?.status === "En attente"
                  ? "pending"
                  : booking?.status === "Refusée"
                    ? "refused"
                    : ""
            }`}
          >
            {booking?.status}
          </button>
        </article>
      ) : (
        <p>
          Aucune réservation n'a été effectuée pour le moment : effectuer une
          nouvelle réservation <Link to={"/search"}>ici</Link>.
        </p>
      )}
    </main>
  );
}
export default ParentsBookings;
