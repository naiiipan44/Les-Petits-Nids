//1. Les imports de base
import { type FormEvent, useEffect, useState } from "react";
// 2.Les composants et modules
// Hooks
import useToast from "../hooks/useToast";
// 3. Les Styles et assets
import "./ChildrenFolder.css";
import "./LoginPageComponent.css";

function ChildrenFolder() {
  const { success, error } = useToast();
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => setParentId(response.user.parent_id));
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

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
        <h1 className="title-profile-children"> Dossier enfant </h1>

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
            min={"2022-02-01"}
            max={"2025-08-01"}
          />
          <select id="gender" name="gender" className="input-field">
            <option value="" disabled selected>
              Choisissez un genre
            </option>
            <option value="boy">Garçon</option>
            <option value="girl">Fille</option>
            <option value="not-filled">Non-renseigné</option>
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
