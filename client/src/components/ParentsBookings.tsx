import type { BookingData } from "../types/Booking.d.ts";
import "./ParentsBookings.css";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function ParentsBookings() {
  const [userData, setUserData] = useState<BookingData | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/api/booking/parent?parentId=${user?.parent_id}`,
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
  }, [user?.parent_id]);

  return (
    <main className="main-parent-booking">
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
