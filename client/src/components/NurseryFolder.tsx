// React tools
import { type FormEvent, useEffect, useState } from "react";

// React libraries
import { FaDownload } from "react-icons/fa";
import useToast from "../hooks/useToast";

// Component
import { useAuth } from "../contexts/AuthContext";

// Types and interfaces TS
import type { CompleteNurseryProps } from "../types/Nursery";

// Style
import "./NurseryFolder.css";

function NurseryFolder() {
  const { success, error } = useToast();
  const { user } = useAuth();
  const [nursery, setNursery] = useState<null | CompleteNurseryProps>(null);
  const [isNursery, setIsNuresery] = useState(false);

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
      .then((response) => {
        setNursery(response);
        setIsNuresery(true);
      });
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
          <label htmlFor="name">Nom de l'établissement :</label>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="input-field"
            defaultValue={nursery?.ns_name}
            disabled={isNursery}
          />

          <label htmlFor="nursery-type-choice">Type de crèche :</label>
          <select
            name="nursery-type-choice"
            defaultValue={nursery?.ns_type}
            disabled={isNursery}
          >
            <option value="Micro-crèche">Micro-crèche</option>
            <option value="Multi-accueil">Multi-accueil</option>
          </select>
          <label htmlFor="naddress">Adresse postale :</label>
          <input
            defaultValue={nursery?.ns_address}
            disabled={isNursery}
            type="text"
            name="address"
            placeholder="Adresse"
            className="input-field"
          />
          <label htmlFor="zipCode">Code postale :</label>
          <input
            defaultValue={nursery?.ns_zip_postal}
            disabled={isNursery}
            type="number"
            name="zipCode"
            placeholder="Code Postal"
            className="input-field"
          />
          <label htmlFor="phoneNumber">Numéro de téléphone :</label>
          <input
            defaultValue={nursery?.ns_num_tel}
            disabled={isNursery}
            type="tel"
            name="phoneNumber"
            placeholder="Téléphone"
            className="input-field"
          />
          <label htmlFor="capacity">Capacité d'accueil:</label>
          <input
            defaultValue={nursery?.ns_capacity}
            disabled={isNursery}
            type="number"
            name="capacity"
            placeholder="Capacité"
            className="input-field"
          />
          <label htmlFor="availability">Nombre de places disponibles :</label>
          <input
            defaultValue={nursery?.ns_nb_place_dispo}
            disabled={isNursery}
            type="number"
            name="availability"
            placeholder="Nombre de places disponibles"
            className="input-field"
          />

          <label htmlFor="gestion">Gestion de la crèche :</label>
          <fieldset>
            <label htmlFor="public">Public</label>
            <input
              type="radio"
              id="gestion"
              name="gestion"
              value="Public"
              className="input-field"
              checked={nursery?.ns_is_public}
            />
            <label htmlFor="privé">Privé</label>
            <input
              type="radio"
              id="gestion2"
              name="gestion"
              value="Privé"
              className="input-field"
              checked={!nursery?.ns_is_public}
            />
          </fieldset>
          <label htmlFor="minAge">Age minimum accueilli :</label>
          <input
            type="text"
            name="minAge"
            placeholder="Age minimum accueilli"
            className="input-field"
            defaultValue={nursery?.ns_age_min && `${nursery?.ns_age_min} mois`}
            disabled={isNursery}
          />
          <label htmlFor="maxAge">Age maximum accueilli :</label>
          <input
            type="text"
            name="maxAge"
            placeholder="Age maximum accueilli"
            className="input-field"
            defaultValue={nursery?.ns_age_max && `${nursery?.ns_age_max} ans`}
            disabled={isNursery}
          />
          <fieldset>
            <label htmlFor="is-disabled">Accueil enfants handicapés</label>
            <input
              type="checkbox"
              name="isDisabled"
              className="input-field-disabled"
              defaultValue={
                nursery?.ns_is_disabled
                  ? "Aménagé pour les enfants handicapés"
                  : "Ne convient pas aux enfants handicapés"
              }
              disabled={isNursery}
            />
          </fieldset>
          <label htmlFor="description">Description de la crèche :</label>
          <textarea
            name="description"
            placeholder="Description"
            className="input-field"
            defaultValue={nursery?.ns_description}
            disabled={isNursery}
          />
          <label htmlFor="price">Tarif horaire : </label>
          <input
            type="text"
            name="price"
            placeholder="Tarif horaire"
            className="input-field"
            defaultValue={
              nursery?.ns_price && `${nursery?.ns_price} euros/heure`
            }
            disabled={isNursery}
          />
          <section className="fadownload">
            <p>Photo de l'établissement : </p>
            <FaDownload />
          </section>
          <button type="submit" className="button-primary" disabled={isNursery}>
            Soumettre
          </button>
        </form>
      </section>
    </main>
  );
}

export default NurseryFolder;
