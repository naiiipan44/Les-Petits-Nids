import "./ChildrenFolder.css";
import type { FormEvent } from "react";
import "./LoginPageComponent.css";
import { useAuth } from "../contexts/AuthContext";
import useToast from "../hooks/useToast";

function ChildrenFolder() {
  const { success, error } = useToast();
  const { user } = useAuth();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    let parentId = null;
    if (user) {
      parentId = user.id;
    }

    const { firstName, lastName, birthdate, gender, allergies } = formatedData;
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/children`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          birthdate,
          gender,
          allergies,
          parentId,
        }),
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
            placeholder="Prénom"
            className="input-field"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            className="input-field"
          />
          <input
            type="date"
            name="birthdate"
            placeholder="Date de naissance"
            className="input-field"
          />
          <select id="gender" name="gender" className="input-field">
            <option value="" disabled selected>
              Choisissez un genre
            </option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <input
            type="text"
            name="allergies"
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
