import type { FormEvent } from "react";
import "./LoginPageComponent.css";
import "../style/globals.css";

function LoginPageComponent() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);
  }

  return (
    <form onSubmit={onSubmit} className="login-form">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        className="input-field"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,}$"
      />
      <button className="button-secondary form-validation-button" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default LoginPageComponent;
