import { useState } from "react";
import RegisterPageNurseryComponent from "../components/RegisterPageNurseryComponent";

function RegisterPage() {
  const [activeTab, setActiveTab] = useState("parent");
  return (
    <>
      <h1>Créer un compte</h1>
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

      <RegisterPageNurseryComponent />
      <button className="button primary" type="button">
        Créer un compte
      </button>
      <p>retour</p>
    </>
  );
}

export default RegisterPage;
