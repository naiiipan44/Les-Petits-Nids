import { useEffect, useState } from "react";
import "./NurseryBookings.css";

function NurseryBookings() {
  const nurseryId = 4;
  const [booking, setBooking] = useState<BookProps[] | []>([]);

  interface BookProps {
    booking_date: string;
    booking_range: string;
    children_id: number;
    id: number;
    nursery_id: number;
    parent_id: number;
    status: string;
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

  return (
    <section className="button-reservation-status-nursery">
      <button type="button">Tous</button>
      <button type="button">En attente</button>
      <button type="button">Accepté</button>
      <button type="button">Refusé</button>
      <button type="button">Annulé</button>
      <p>{booking[0].booking_date}</p>
    </section>
  );
}

export default NurseryBookings;
