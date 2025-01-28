function ParentFolder() {
  return (
    <>
      <h3>Dossier Parent</h3>
      <form>
        <input
          type="text"
          placeholder="Prénom"
          className="input-field"
          name="firstName"
        />
        <input
          type="text"
          placeholder="Nom"
          className="input-field"
          name="lastName"
        />
        <input
          type="text"
          placeholder="Métier"
          className="input-field"
          name="job"
        />
        <input
          type="text"
          placeholder="Adresse postale"
          className="input-field"
          name="adress"
        />
        <input
          type="number"
          placeholder="Département"
          className="input-field"
          name="zipCode"
        />
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          className="input-field"
          name="numTel"
        />
        <input
          type="email"
          placeholder="email"
          className="input-field"
          name="mail"
        />
        <input
          type="date"
          placeholder="Date de naissance"
          className="input-field"
          name="birthDate"
        />
        <button type="submit" className="button-secondary">
          Valider le formulaire
        </button>
      </form>
    </>
  );
}

export default ParentFolder;
