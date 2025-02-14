import useFetch from "../hooks/useFetch";

function ParentFolderForm({ edit, parentId }: Readonly<ParentFolderProps>) {
  const { handleEdit, handleSubmit, handleDelete, loading } =
    useFetch(parentId);

  return (
    <>
      <h3 className="title-profile-parent">Dossier Parent</h3>
      <section className="parent-folder">
        <form
          onSubmit={edit ? handleEdit : handleSubmit}
          className="login-form-parent"
        >
          <input
            type="text"
            placeholder="Prénom"
            className="input-field"
            name="firstName"
            disabled={loading}
          />
          <input
            type="text"
            placeholder="Nom"
            className="input-field"
            name="lastName"
            disabled={loading}
          />
          <input
            type="text"
            placeholder="Métier"
            className="input-field"
            name="job"
            disabled={loading}
          />
          <input
            type="text"
            placeholder="Adresse postale"
            className="input-field"
            name="adress"
            disabled={loading}
          />
          <input
            type="number"
            placeholder="Département"
            className="input-field"
            name="zipCode"
            disabled={loading}
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className="input-field"
            name="numTel"
            disabled={loading}
          />
          <input
            type="email"
            placeholder="email"
            className="input-field"
            name="mail"
            disabled={loading}
          />
          <input
            type="date"
            placeholder="Date de naissance"
            className="input-field"
            name="birthDate"
            disabled={loading}
          />
          <button type="submit" className="button-secondary">
            Valider
          </button>
        </form>
        <button className="delete-button" type="button" onClick={handleDelete}>
          <img src="/delete.png" alt="bouton de suppression" />
        </button>
      </section>
    </>
  );
}

export default ParentFolderForm;
