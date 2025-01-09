import { useState } from "react";
import LoginPageComponent from "../components/LoginPageComponent";
import "../style/globals.css";
import "./LoginPage.css";
import logo from "/logo.svg";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("parent");

  return (
    <>
      <section className="login-page-container">
        <figure className="logo">
          <img src={logo} alt="" />
        </figure>
        <h1 className="login-title">Se connecter</h1>
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
        <LoginPageComponent />
        <button className="button-secondary" type="button">
          Connexion
        </button>
      </section>
      <section className="button-return">
        <button className="back-button" type="button">
          <span className="arrow" />
        </button>
        <p>Retour</p>
      </section>
    </>
  );
}

export default LoginPage;
