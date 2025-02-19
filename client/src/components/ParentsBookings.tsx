import type { BookingData } from "../types/Booking";
import type { User } from "../types/Login";
import "./ParentsBookings.css";
import { useEffect, useState } from "react";

function ParentsBookings() {
  const [userData, setUserData] = useState<User | null>(null);
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => setUserData(result.user));
  }, []);

  let parentId = null;

  if (userData) {
    parentId = userData.parent_id;
  }

  useEffect(() => {
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
        setBooking(booking[0]);
      });
  }, [parentId]);

  return (
    <main className="main-parent-booking">
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
          <li>{booking?.booking_range}</li>
        </ul>
        <button
          type="button"
          className={`status-button ${booking?.status?.toLowerCase()}`}
        >
          {booking?.status}
        </button>
      </article>
    </main>
  );
}
export default ParentsBookings;
