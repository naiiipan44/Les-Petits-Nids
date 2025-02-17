import type { FormEvent, FormEventHandler } from "react";
import { toast } from "react-toastify";

import { useNavigate, useOutletContext } from "react-router-dom";

import "./LoginPageComponent.css";
import "../style/globals.css";
import { useAuth } from "../contexts/AuthContext";
import type { Auth } from "../types/Login";

function LoginPageComponent() {
  const notify = () => toast.success("Vous vous êtes bien connecté !");
  const error = () =>
    toast.error("Les informations renseignées ne sont pas valides");

  const { setAuth } = useOutletContext() as {
    setAuth: (auth: Auth | null) => void;
  };
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData); // Se console warn va partir (uniquement utile pour passer biome actuellement et garder les 2 const au dessus)

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
        setAuth(user);
        notify();
        navigate("/");
      } else {
        error();
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

      <p>
        * Minimum 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial (!,
        @, #, etc.)
      </p>
      <button className="button-secondary form-validation-button" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default LoginPageComponent;
