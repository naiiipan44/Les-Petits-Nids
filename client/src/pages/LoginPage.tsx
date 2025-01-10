import { useState } from "react";
import "../style/globals.css";
import "./LoginPage.css";
import logo from "/logo.svg";
import LoginPageComponentNursery from "../components/LoginPageComponentNursery";
import LoginPageComponentParents from "../components/LoginPageComponentParents";

function LoginPage() {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <>
      <section className="login-page-container">
        <figure className="logo">
          <img src={logo} alt="logo" />
        </figure>
        <h1 className="login-title">Se connecter</h1>
        <section className="tab-container">
          <button
            type="button"
            className={`tab-button ${activeTab === true ? "active-tab" : ""}`}
            onClick={() => setActiveTab(!activeTab)}
          >
            En tant que Parent
          </button>
          <button
            type="button"
            className={`tab-button ${activeTab === false ? "active-tab" : ""}`}
            onClick={() => setActiveTab(!activeTab)}
          >
            En tant que Crèche
          </button>
        </section>
        {activeTab ? (
          <LoginPageComponentParents />
        ) : (
          <LoginPageComponentNursery />
        )}
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
