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
            type="firstname"
            name="firstname"
            placeholder="Prénom"
            className="input-field"
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Nom"
            className="input-field"
          />
          <input
            type="birthdate"
            name="birthdate"
            placeholder="Date de naissance"
            className="input-field"
          />
          <input
            type="gender"
            name="gender"
            placeholder="Genre"
            className="input-field"
          />
          <input
            type="Allergies"
            name="Allergies"
            placeholder="Allergies"
            className="input-field"
          />
        </form>
      </section>
      <section className="button-submit">
        <button type="submit" className="button-primary">
          Soumettre
        </button>
      </section>
    </main>
  );
}

export default ChildrenFolder;
