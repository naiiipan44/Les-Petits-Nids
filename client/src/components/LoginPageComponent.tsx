import "./LoginPageComponent.css";
import "../style/globals.css";

function LoginPageComponent() {
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
    </>
  );
}

export default LoginPageComponent;
