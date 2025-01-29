import { useState } from "react";
import "./LoginAndRegisterPage.css";

import { Link } from "react-router-dom";
import LoginPageComponent from "../components/LoginPageComponent";
import RegisterPageComponent from "../components/RegisterPageComponent";

function LoginAndRegisterPage() {
  const [isParent, setIsParent] = useState<boolean>(true);
  const [registration, setRegistration] = useState<boolean>(false);

  return (
    <>
      <section className="login-page-container">
        <figure className="logo">
          <img src="/logo.svg" alt="logo" />
        </figure>
        {registration ? (
          <h1 className="login-title">Créer un compte</h1>
        ) : (
          <h1 className="login-title">Se connecter</h1>
        )}
        <section className="user-type-toggle">
          <input
            type="radio"
            id="user-type-parent"
            name="user-type"
            value="parent"
          />
          <label className="radio-button" htmlFor="user-type-parent">
            {" "}
            En tant que parent
          </label>

          <input
            type="radio"
            id="user-type-nursery"
            name="user-type"
            value="nursery"
          />
          <label className="radio-button" htmlFor="user-type-nursery">
            {" "}
            En tant que crèche
          </label>
        </section>

        {registration ? (
          <RegisterPageComponent
            isParent={isParent}
            setIsParent={setIsParent}
          />
        ) : (
          <LoginPageComponent />
        )}
        {registration ? (
          <button
            type="button"
            className="account-button"
            onClick={() => setRegistration(!registration)}
          >
            Vous avez déjà un compte ? Se connecter
          </button>
        ) : (
          <button
            type="button"
            className="account-button"
            onClick={() => setRegistration(!registration)}
          >
            Pas encore de compte ? Inscris-toi
          </button>
        )}
        {!registration && (
          <Link to="" className="links">
            Mot de passe oublié
          </Link>
        )}
      </section>
      <section className="button-return">
        <button className="back-button" type="button">
          <span className="arrow" />
        </button>
      </section>
    </>
  );
}

export default LoginAndRegisterPage;
