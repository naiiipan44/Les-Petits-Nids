import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPageComponent.css";
import useToast from "../hooks/useToast";
import type { RegisterPageComponentProps } from "../types/RegisterPageComponentProps";

function RegisterPageComponent({ isParent }: RegisterPageComponentProps) {
  const [indication, setIndication] = useState("");
  const { success, error } = useToast();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/user/registration`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.message) {
          success("Bravo, votre compte a été créé ! 🎉");
          setIndication("");
        } else {
          error("Les informations ne sont pas valides 🤔");
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
