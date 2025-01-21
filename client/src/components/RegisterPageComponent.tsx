import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./LoginPageComponent.css";
import type { RegisterPageComponentProps } from "../types/RegisterPageComponentProps";

function RegisterPageComponent({ isParent }: RegisterPageComponentProps) {
  const [indication, setIndication] = useState("");

  const notify = () => toast.success("Votre compte a bien été créé");
  const error = () =>
    toast.error("Les informations renseignées ne sont pas valides");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/userLogin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.message) {
          notify();
          setIndication("");
        } else {
          error();
          setIndication(result.message);
        }
      });
  }

  return (
    <form onSubmit={onSubmit} className="login-form">
      {indication && <p>{indication}</p>}
      {isParent ? (
        <div className="user-registration">
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            aria-label="Nom"
            className="input-field"
          />
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            aria-label="Prénom"
            className="input-field"
            defaultValue=""
          />
          <input
            type="checkbox"
            name="role"
            aria-label="role"
            value="parent"
            defaultChecked
            className="checkbox-role"
          />
        </div>
      ) : (
        <div className="user-registration">
          <input
            type="text"
            name="nurseryName"
            placeholder="Nom de l'établissement"
            aria-label="Nom de l'établissement"
            className="input-field"
          />
          <input
            type="checkbox"
            name="role"
            aria-label="role"
            value="nursery"
            defaultChecked
            className="checkbox-role"
          />
        </div>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        aria-label="Email"
        className="input-field"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        aria-label="Mot de passe"
        className="input-field"
      />
      <Link to="" className="links">
        Vous avez déjà un compte ? Se connecter
      </Link>
      <button className="button-secondary" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default RegisterPageComponent;
