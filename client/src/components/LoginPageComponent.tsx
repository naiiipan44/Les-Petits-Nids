import "./LoginPageComponent.css";
import "../style/globals.css";
import { Link } from "react-router-dom";
import type { UserI } from "../contexts/UserProvider";
import useUser from "../utils/useUser";

function LoginPageComponent() {
  const { user, setUser } = useUser();

  const parent: UserI = {
    firstName: "Claude",
    lastName: "Patrick",
    email: "claude.patrick@gmail.com",
    userPassword: "petitponey",
    role: "parent",
  };

  function handleUser() {
    if (!user) {
      setUser(parent);
    }
  }

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
        <button type="button" onClick={handleUser}>
          {user ? (
            <Link to={"/profile"}>
              <p>{user.role}</p>
            </Link>
          ) : (
            <p>Connexion</p>
          )}
        </button>
      </form>
    </>
  );
}

export default LoginPageComponent;
