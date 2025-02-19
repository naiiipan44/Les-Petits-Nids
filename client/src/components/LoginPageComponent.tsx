// 1. Les imports de base
import type { FormEvent, FormEventHandler } from "react";

import { useNavigate } from "react-router-dom";

// 2. Les composants et modules
// Contexts
import { useAuth } from "../contexts/AuthContext";

// Hooks
import useToast from "../hooks/useToast";

// 3. Les styles et assets
import "./LoginPageComponent.css";
import "../style/globals.css";

function LoginPageComponent() {
  const { success, error } = useToast();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formatedData = Object.fromEntries(form.entries());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        {
          method: "post",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formatedData.email,
            password: formatedData.password,
            acceptCookies: true,
          }),
        },
      );

      if (response.status === 200) {
        const user = await response.json();
        setUser(user.user);
        success("Vous vous êtes bien connecté !");
        navigate("/search");
      } else {
        error("Les informations renseignées ne sont pas valides");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        name="email"
        aria-label="email"
        placeholder="Email"
        className="input-field"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      />

      <input
        type="password"
        name="password"
        aria-label="email"
        placeholder="Mot de passe"
        className="input-field"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,}$"
      />
      <button className="button-secondary form-validation-button" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default LoginPageComponent;
