import "./RegisterLoginComponent.css";
import "../style/globals.css";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

function RegisterPageComponentNursery() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="login-form">
        <input
          type="text"
          name="establishmentName"
          placeholder="Nom de l'établissement "
          aria-label="Nom de l'établissement"
          className="input-field"
        />
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
        <section className="outside-form">
          <Link to="" className="links">
            Vous avez déjà un compte ? Se connecter
          </Link>
          <button className="button-secondary" type="submit">
            Connexion
          </button>
        </section>
      </form>
    </>
  );
}

export default RegisterPageComponentNursery;
