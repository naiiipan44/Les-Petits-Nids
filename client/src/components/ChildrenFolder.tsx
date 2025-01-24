import "../components/ChildrenFolder.css";
import type { FormEvent } from "react";
import { toast } from "react-toastify";
import "./LoginPageComponent.css";

function ChildrenFolder() {
  const notify = () => toast.success("Votre formulaire a été soumis");
  const error = () => toast.error("Veuillez remplir tous les champs");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/children`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formatedData),
      },
    );
    if (response.ok) {
      notify();
    } else {
      error();
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
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
          <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            className="input-field"
          />
          <input type="text" name="parentId" className="input-field" />
          <button type="submit" className="button-primary">
            Soumettre
          </button>
        </form>
      </section>
    </main>
  );
}

export default ChildrenFolder;
