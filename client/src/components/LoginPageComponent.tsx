import { useState } from "react";
import "./LoginPageComponent.css";
import "../style/globals.css";

function LoginPageComponent() {
  const [activeTab, setActiveTab] = useState("parent");
  return (
    <>
      <section className="tab-container">
        <button
          type="button"
          className={`tab-button ${activeTab === "parent" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("parent")}
        >
          En tant que Parent
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === "creche" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("creche")}
        >
          En tant que Crèche
        </button>
      </section>

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
      <p className="links">
        Pas encore de compte ? Inscris-toi <br /> <br />
        Mot de passe oublié
      </p>
    </>
  );
}

export default LoginPageComponent;
