import LoginPageComponent from "../components/LoginPageComponent";
import "../style/globals.css";
import "./LoginPage.css";

function LoginPage() {
  return (
    <section className="login-page-container">
      <h1 className="login-title">Se connecter</h1>
      <LoginPageComponent />
      <button className="button-secondary" type="button">
        Connexion
      </button>
      <button className="back-button" type="button">
        <span className="arrow" />
        <p>retour</p>
      </button>
    </section>
  );
}

export default LoginPage;
