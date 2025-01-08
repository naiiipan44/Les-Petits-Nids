import "./LoginPageComponent.css";
import "../style/globals.css";
import { Link } from "react-router-dom";

function LoginPageComponentNursery() {
  return (
    <>
      <form className="login-form">
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
      </form>
      <Link to="" className="links">
        Pas encore de compte ? Inscris-toi
      </Link>
      <Link to="" className="links">
        Mot de passe oublié
      </Link>
    </>
  );
}

export default LoginPageComponentNursery;
