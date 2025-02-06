import useFetch from "../hooks/useFetch";

function ParentFolderForm({ edit, parentId }: Readonly<ParentFolderProps>) {
  const { handleEdit, handleSubmit, handleSupress, loading } =
    useFetch(parentId);

  return (
    <>
      <h3>Dossier Parent</h3>

      <form onSubmit={edit ? handleEdit : handleSubmit}>
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
      <button
        className="button-secondary"
        type="button"
        onClick={handleSupress}
      >
        Supprimer les données
      </button>
    </>
  );
}

export default ParentFolderForm;
