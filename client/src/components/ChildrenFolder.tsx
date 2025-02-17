import "./ChildrenFolder.css";
import type { FormEvent } from "react";
import "./LoginPageComponent.css";
import useToast from "../hooks/useToast";

function ChildrenFolder() {
  const { success, error } = useToast();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/children`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formatedData),
      },
    );
    if (response.ok) {
      success("Bravo, le formulaire a été soumis ! 🎉");
    } else {
      error("Une erreur est survenue lors de l'enregistrement 🤔");
    }
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
            name="firstName"
            aria-label="Prénom"
            placeholder="Prénom"
            className="input-field"
          />
          <input
            type="text"
            name="lastName"
            aria-label="Nom"
            placeholder="Nom"
            className="input-field"
          />
          <input
            type="date"
            name="birthdate"
            aria-label="Date de naissance"
            placeholder="Date de naissance"
            className="input-field"
          />
          <label htmlFor="gender-choice" id="gender-choice">
            Choisissez un genre
          </label>
          <select id="gender" name="gender" className="input-field">
            <option value="" disabled selected>
              --
            </option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <input
            type="text"
            name="allergies"
            aria-label="Allergies"
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
