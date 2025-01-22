import "../components/ChildrenFolder.css";

function ChildrenFolder() {
  return (
    <>
      <h1 className="title-profile-children"> Dossier enfants</h1>
      <form className="login-form-children">
        <input
          type="firstname"
          name="firstname"
          placeholder="Prénom"
          className="input-field"
        />
        <input
          type="lastname"
          name="lastname"
          placeholder="Nom"
          className="input-field"
        />
        <input
          type="birthdate"
          name="birthdate"
          placeholder="Date de naissance"
          className="input-field"
        />
        <input
          type="gender"
          name="gender"
          placeholder="Genre"
          className="input-field"
        />
        <input
          type="Allergies"
          name="Allergies"
          placeholder="Allergies"
          className="input-field"
        />
      </form>
    </>
  );
}

export default ChildrenFolder;
