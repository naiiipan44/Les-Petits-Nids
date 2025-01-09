import "./RegisterPage.css";
import "../style/globals.css";
import { useState } from "react";
import logo from "/logo.svg";
import RegisterPageComponentNursery from "../components/RegisterPageComponentNursery";
import RegisterPageComponentParents from "../components/RegisterPageComponentParents";

function RegisterPage() {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <>
      <section className="login-page-container">
        <figure className="logo">
          <img src={logo} alt="logo" />
        </figure>
        <h1 className="login-title">Créer un compte</h1>
        <section className="tab-container">
          <button
            type="button"
            className={`tab-button ${activeTab === false ? "active-tab" : ""}`}
            onClick={() => setActiveTab(!activeTab)}
          >
            En tant que Parent
          </button>
          <button
            type="button"
            className={`tab-button ${activeTab === true ? "active-tab" : ""}`}
            onClick={() => setActiveTab(!activeTab)}
          >
            En tant que Crèche
          </button>
        </section>
        {activeTab ? (
          <RegisterPageComponentParents />
        ) : (
          <RegisterPageComponentNursery />
        )}
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

export default RegisterPage;
