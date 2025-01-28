import { useRef } from "react";

import type { FormEvent, FormEventHandler } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import "./LoginPageComponent.css";
import "../style/globals.css";

type User = {
  id: number;
  email: string;
  hashed_password: string;
};

type Auth = {
  user: User;
  token: string;
};

function LoginPageComponent() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { setAuth } = useOutletContext() as {
    setAuth: (auth: Auth | null) => void;
  };

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: (emailRef.current as HTMLInputElement).value,
            password: (passwordRef.current as HTMLInputElement).value,
          }),
        },
      );

      if (response.status === 200) {
        const user = await response.json();

        setAuth(user);

        navigate("/");
      } else {
        console.info(response);
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
        placeholder="Email"
        className="input-field"
        ref={emailRef}
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        className="input-field"
        ref={passwordRef}
      />
      <button className="button-secondary form-validation-button" type="submit">
        Connexion
      </button>
    </form>
  );
}

export default LoginPageComponent;
