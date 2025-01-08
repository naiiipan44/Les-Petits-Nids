import "./RegisterLoginComponent.css";
import "../style/globals.css";
import { Link } from "react-router-dom";

function RegisterPageComponentNursery() {
  return (
    <>
      <form className="login-form">
        <input
          type="Nom de l'établissement"
          name="Nom de l'établissement "
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
      </form>
      <Link to="" className="links">
        Vous avez déjà un compte ? Se connecter
      </Link>
    </>
  );
}

export default RegisterPageComponentNursery;
