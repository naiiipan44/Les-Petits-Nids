import "./NurseryFolder.css";
import type { FormEvent } from "react";

function NurseryFolder() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData); // utilisé pour stocker la valeur des datas pour l'instant
  }

  return (
    <main className="main-nursery-folder">
      <section className="header-nursery-folder">
        <h1 className="title-profile-nursery">Dossier crèche</h1>
      </section>
      <section className="nursery-folder">
        <form onSubmit={onSubmit} className="login-form-nursery">
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
            name="numTel"
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
            <label htmlFor="is-disabled">Gestion</label>
            <input
              type="radio"
              id="gestion1"
              name="gestion1"
              value="Public"
              className="input-field"
            />
            <label htmlFor="gestion1">Public</label>
            <input
              type="radio"
              id="gestion2"
              name="gestion2"
              value="Privé"
              className="input-field"
            />
            <label htmlFor="gestion2">Privé</label>
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
            <input
              type="checkbox"
              name="isDisabled"
              className="input-field-disabled"
            />
            <label htmlFor="is-disabled">Accueil enfants handicapés</label>
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
          <i className="fa fa-download icon" />
          <input
            type="text"
            name="picture"
            placeholder="Photo de l'établissement"
            className="input-field"
          />

          <input
            type="number"
            name="price"
            placeholder="Tarif horaire"
            className="input-field"
          />
          <button type="submit" className="button-primary">
            Soumettre
          </button>
        </form>
      </section>
    </main>
  );
}

export default NurseryFolder;
