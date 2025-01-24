import "./NurseryFolder.css";
import type { FormEvent } from "react";

function NurseryFolder() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);
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
          <input
            type="text"
            name="type"
            placeholder="Type"
            className="input-field"
          />
          <input
            type="text"
            name="address"
            placeholder="Adresse"
            className="input-field"
          />
          <input
            type="number"
            name="zip-code"
            placeholder="Code Postal"
            className="input-field"
          />
          <input
            type="tel"
            name="phone-number"
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
            name="disponibilité"
            placeholder="Disponibilité"
            className="input-field"
          />
          <input
            type="checkbox"
            id="gestion1"
            name="gestion1"
            value="Public"
            className="input-field"
          />
          <label htmlFor="gestion1">Public</label>
          <input
            type="checkbox"
            id="gestion2"
            name="gestion2"
            value="Privé"
            className="input-field"
          />
          <label htmlFor="gestion2">Privé</label>
          <input
            type="number"
            name="min-age"
            placeholder="Age minimum accueilli"
            className="input-field"
          />
          <input
            type="number"
            name="max-age"
            placeholder="Age maximum accueilli"
            className="input-field"
          />
          <input
            type="text"
            name="accueil-handicapés"
            placeholder="Accueil enfants handicapés"
            className="input-field"
          />
          <label htmlFor="is-disabled">Accueil enfants handicapés</label>
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
          <button type="submit" className="button-primary">
            Soumettre
          </button>
        </form>
      </section>
    </main>
  );
}

export default NurseryFolder;
