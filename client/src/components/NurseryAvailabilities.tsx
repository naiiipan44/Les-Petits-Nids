import { useParams } from "react-router-dom";
import useToast from "../hooks/useToast";

import "./NurseryAvailabilities.css";
import { type ChangeEvent, useEffect, useState } from "react";
import type { User } from "../types/Login";

function NurseryAvailabilities() {
  const { id } = useParams();
  const { success, error } = useToast();
  const [userData, setUserData] = useState<User | null>(null);
  const [bookingDate, setbookingDate] = useState("");
  const [bookingRange, setbookingRange] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => setUserData(result.user));
  }, []);

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const date = event.currentTarget.value;
    const day = new Date(date).getDay();

    if (day === 0) {
      error("Les réservations ne sont pas possibles le dimanche.");
      setbookingDate("");
    } else {
      setbookingDate(date);
    }
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const range = event.target.value;

    if (range) {
      setbookingRange(range);
    }
  }

  function handleSubmit() {
    const status = "en attente";
    let parentId = null;
    let childrenId = null;

    if (userData) {
      parentId = userData.parent_id;
      childrenId = userData.children_id;
    }

    if (bookingDate && bookingRange) {
      fetch(`${import.meta.env.VITE_API_URL}/api/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          bookingDate,
          bookingRange,
          parentId,
          childrenId,
          status,
          id,
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
        <input
          type="date"
          name="birthdate"
          aria-label="Date de naissance"
          placeholder="Date de naissance"
          className="input-field-calendar"
          value={bookingDate}
          onChange={handleDateChange}
          min={"2025-02-21"}
        />
        <select
          id="durée"
          name="range"
          className="input-field-calendar"
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>
            Période
          </option>
          <option value="morning">Matin</option>
          <option value="afternoon">Après-midi</option>
          <option value="all-day">Journée</option>
        </select>
      </section>
      <p>Tarifs: 3,5€/heure</p>
      <button className="not-connected" type="button" onClick={handleSubmit}>
        Réserver
      </button>
    </section>
  );
}

export default NurseryAvailabilities;
