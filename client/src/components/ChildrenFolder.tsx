import "../components/ChildrenFolder.css";
import type { FormEvent } from "react";

function ChildrenFolder() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);
  }

  return (
    <main className="main-children-folder">
      <section className="header-children-folder">
        <h1 className="title-profile-children"> Dossier enfants </h1>
        <button type="button" className="button-children-folder">
          Enfant 1
        </button>
        <button type="button" className="button-add">
          +
        </button>
      </section>
      <section className="children-folder">
        <form onSubmit={onSubmit} className="login-form-children">
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            className="input-field"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            className="input-field"
          />
          <input
            type="date"
            name="birthdate"
            placeholder="Date de naissance"
            className="input-field"
          />
          <input
            type="text"
            name="gender"
            placeholder="Genre"
            className="input-field"
          />
          <input
            type="text"
            name="Allergies"
            placeholder="Allergies"
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

export default ChildrenFolder;
