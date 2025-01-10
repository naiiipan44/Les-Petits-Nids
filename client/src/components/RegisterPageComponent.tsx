import { Link } from "react-router-dom";
interface ParentProps {
  isParent: boolean;
  setIsParent: (isParent: boolean) => void;
}
function RegisterPageComponent({ isParent }: ParentProps) {
  return (
    <>
      <form className="login-form">
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
      </form>
      <Link to="" className="links">
        Vous avez déjà un compte ? Se connecter
      </Link>
    </>
  );
}

export default RegisterPageComponent;
