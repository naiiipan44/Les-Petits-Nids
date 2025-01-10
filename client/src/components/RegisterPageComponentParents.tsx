import "./RegisterLoginComponent.css";
import "../style/globals.css";
import { Link } from "react-router-dom";

function RegisterPageComponentParents() {
  return (
    <>
      <form className="login-form">
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
      </form>
      <Link to="" className="links">
        Vous avez déjà un compte ? Se connecter
      </Link>
    </>
  );
}

export default RegisterPageComponentParents;
