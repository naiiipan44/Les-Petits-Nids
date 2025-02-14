import type { UserData } from "../types/Booking";
import "./ParentsBookings.css";
import { useEffect, useState } from "react";

function ParentsBookings() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          fetch(
            `${import.meta.env.VITE_API_URL}/api/booking/parent?parentId=${data.user.parent_id}`,
            {
              headers: {
                "content-type": "application/json",
              },
              credentials: "include",
            },
          )
            .then((res) => res.json())
            .then((booking) => {
              setUserData(booking[0]);
            });
        }
      });
  }, []);

  return (
    <main className="main-parent-booking">
      <section className="button-reservation-status-parent">
        <button type="button">Tous</button>
        <button type="button">En attente</button>
        <button type="button">Accepté</button>
        <button type="button">Refusé</button>
        <button type="button">Annulé</button>
      </section>
      <article className="booking">
        <img src={userData?.ns_image} alt="Nursery" />
        <ul className="booking-content">
          <li>
            <strong>{userData?.ns_name}</strong>
          </li>
          <li>
            {userData?.booking_date
              ? new Date(userData.booking_date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : ""}
          </li>
          <li>{userData?.booking_range}</li>
        </ul>
        <button
          type="button"
          className={`status-button ${userData?.status?.toLowerCase()}`}
        >
          {userData?.status}
        </button>
      </article>
    </main>
  );
}
export default ParentsBookings;
