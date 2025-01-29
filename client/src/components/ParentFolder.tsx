import { type FormEvent, useState } from "react";

function ParentFolder() {
  interface Parent {
    firstName: string;
    lastName: string;
    job: string;
    adress: string;
    zipCode: number;
    numTel: number;
    mail: string;
    birthDate: number;
  }
  const [user, setUser] = useState<Parent | null>(null); // Keep it until POST method

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setUser(data as unknown as Parent); // will be replaced by fetch POST
  }

  return (
    <>
      <h3>Dossier Parent : {user ? user.firstName : ""}</h3>
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
