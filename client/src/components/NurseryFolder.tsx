// React tools
import { type FormEvent, useEffect } from "react";

// React libraries
import { FaDownload } from "react-icons/fa";
import useToast from "../hooks/useToast";

// Component
import { useAuth } from "../contexts/AuthContext";

// Style
import "./NurseryFolder.css";

function NurseryFolder() {
  const { success, error } = useToast();
  const { user } = useAuth();

  let nureseryId = null;

  if (user) {
    nureseryId = user.id;
  }

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/api/nursery?nurseryId=${nureseryId}`,
      {
        credentials: "include",
      },
    )
      .then((res) => res.json())
      .then((response) => console.log(response));
  }, [nureseryId]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/nursery`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formatedData),
    })
      .then((response) => response.json())
      .then((message) => {
        if (!message.errors) {
          success("Vous avez bien complété votre dossier !");
        } else {
          error("Le dossier est invalide");
        }
      });
  }

  return (
    <main className="main-nursery-folder">
      <section className="header-nursery-folder">
        <h1 className="title-profile-nursery">Dossier crèche</h1>
      </section>
      <section className="nursery-folder">
        <form onSubmit={handleSubmit} className="login-form-nursery">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="input-field"
          />

          <select name="nursery-type-choice">
            <option value="first">Micro-crèche</option>
            <option value="second">Multi-accueil</option>
          </select>
          <input
            type="text"
            name="address"
            placeholder="Adresse"
            className="input-field"
          />
          <input
            type="number"
            name="zipCode"
            placeholder="Code Postal"
            className="input-field"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Téléphone"
            className="input-field"
          />
          <input
            type="number"
            name="capacity"
            placeholder="Capacité"
            className="input-field"
          />
          <input
            type="number"
            name="availability"
            placeholder="Disponibilité"
            className="input-field"
          />

          <fieldset>
            <label htmlFor="is-disabled">Gestion : </label>
            <label htmlFor="gestion1">Public</label>
            <input
              type="radio"
              id="gestion1"
              name="public"
              value="Public"
              className="input-field"
            />
            <label htmlFor="gestion2">Privé</label>
            <input
              type="radio"
              id="gestion2"
              name="privé"
              value="Privé"
              className="input-field"
            />
          </fieldset>
          <input
            type="number"
            name="minAge"
            placeholder="Age minimum accueilli"
            className="input-field"
          />
          <input
            type="number"
            name="maxAge"
            placeholder="Age maximum accueilli"
            className="input-field"
          />
          <fieldset>
            <label htmlFor="is-disabled">Accueil enfants handicapés</label>
            <input
              type="checkbox"
              name="isDisabled"
              className="input-field-disabled"
            />
          </fieldset>
          <input
            type="text"
            name="type"
            placeholder="Type"
            className="input-field"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input-field"
          />
          <input
            type="number"
            name="price"
            placeholder="Tarif horaire"
            className="input-field"
          />
          <section className="fadownload">
            <p>Photo de l'établissement : </p>
            <FaDownload />
          </section>
          <button type="submit" className="button-primary">
            Soumettre
          </button>
        </form>
      </section>
    </main>
  );
}

export default NurseryFolder;
