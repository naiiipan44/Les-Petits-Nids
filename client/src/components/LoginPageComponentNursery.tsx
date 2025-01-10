import "./LoginPageComponent.css";
import "../style/globals.css";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

function LoginPageComponentNursery() {
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
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="input-field"
        />
        <section className="outside-form">
          <Link to="" className="links">
            Pas encore de compte ? Inscris-toi
          </Link>
          <Link to="" className="links">
            Mot de passe oublié
          </Link>
          <button className="button-secondary" type="button">
            Connexion
          </button>
        </section>
      </form>
    </>
  );
}

export default LoginPageComponentNursery;
