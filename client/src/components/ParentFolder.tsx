import type { FormEvent } from "react";
import useToast from "../hooks/useToast";

function ParentFolder() {
  const { success, error } = useToast();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/parent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((message) => {
        if (!message.errors) {
          success("Vous avez bien complété votre dossier !");
          fetch(`${import.meta.env.VITE_API_URL}/api/parent/me`, {
            method: "POST",
            credentials: "include",
          });
        } else {
          error("Le dossier est invalide");
        }
      });
  }

  return (
    <>
      <h3>Dossier Parent</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prénom"
          className="input-field"
          name="firstName"
        />
        <input
          type="text"
          placeholder="Nom"
          className="input-field"
          name="lastName"
        />
        <input
          type="text"
          placeholder="Métier"
          className="input-field"
          name="job"
        />
        <input
          type="text"
          placeholder="Adresse postale"
          className="input-field"
          name="adress"
        />
        <input
          type="number"
          placeholder="Département"
          className="input-field"
          name="zipCode"
        />
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          className="input-field"
          name="numTel"
        />
        <input
          type="email"
          placeholder="email"
          className="input-field"
          name="mail"
        />
        <input
          type="date"
          placeholder="Date de naissance"
          className="input-field"
          name="birthDate"
        />
        <button type="submit" className="button-secondary">
          Valider le formulaire
        </button>
      </form>
    </>
  );
}

export default ParentFolder;
