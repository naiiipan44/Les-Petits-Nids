import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface ParentProps {
  isParent: boolean;
  setIsParent: (isParent: boolean) => void;
}
function RegisterPageComponent({ isParent }: ParentProps) {
  const notify = () => toast.success("Votre compte a bien été créé");
  const error = () =>
    toast.error("Les informations renseignées ne sont pas valides");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);

    fetch(`${import.meta.env.VITE_API_URL}/api/userLogin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formatedData),
    }).then((response) => {
      if (response.ok) {
        notify();
      } else {
        error();
      }
    });
  }
  return (
    <>
      <form onSubmit={onSubmit} className="login-form">
        {isParent ? (
          <div className="registration-parents">
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              aria-label="Nom"
              className="input-field"
            />
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              aria-label="Prénom"
              className="input-field"
            />
          </div>
        ) : (
          <div className="registration-nursery">
            <input
              type="text"
              name="nurseryName"
              placeholder="Nom de l'établissement"
              aria-label="Nom de l'établissement"
              className="input-field"
            />
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          aria-label="Mot de passe"
          className="input-field"
        />
        <Link to="" className="links">
          Vous avez déjà un compte ? Se connecter
        </Link>
        <button className="button-secondary" type="submit">
          Connexion
        </button>
      </form>
    </>
  );
}

export default RegisterPageComponent;
