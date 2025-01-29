import "./ModalConditions.css";
import type { ModalConnexionProps } from "../types/ModalConnexion";

function ModalConditions({ onClose }: Readonly<ModalConnexionProps>) {
  return (
    <section className="conditions-modal-wrapper">
      <section className="button-back-general">
        <button
          onClick={() => onClose()}
          type="button"
          className="back-button-conditions"
        >
          X
        </button>
        <h1>Conditions générales d'utilisation</h1>
        <section className="modal-body">
          <h2>1. Préambule</h2>
          <p>
            Le présent site Les Petits Nids a pour vocation de faciliter la mise
            en relation entre les parents ou tuteurs légaux et les crèches afin
            de permettre la réservation de places pour les enfants. L'accès et
            l'utilisation de ce site impliquent l'acceptation pleine et entière
            des présentes Conditions Générales d'Utilisation.
          </p>
          <h2>2. Inscription et accès au service</h2>
          <ul>
            <li>
              Les utilisateurs doivent être majeurs et disposer de l'autorité
              parentale pour s'inscrire.
            </li>
            <li>
              Lors de la création du compte, les informations fournies doivent
              être exactes et complètes. Toute tentative de fausse déclaration
              entraînera la suppression du compte.
            </li>
            <li>
              Les identifiants et mots de passe sont personnels et
              confidentiels. Leur divulgation à un tiers est strictement
              interdite.
            </li>
          </ul>
          <h2>3. Fonctionnement du service</h2>
          <ul>
            <li>
              Le site agit comme un intermédiaire entre les parents et les
              crèches. Il ne garantit pas la disponibilité des places mais
              propose un outil de réservation.
            </li>
            <li>
              Les réservations sont soumises à validation par la crèche
              concernée. Un message de confirmation sera envoyé une fois la
              réservation acceptée.
            </li>
            <li>
              Les informations relatives aux enfants doivent être précises,
              notamment concernant les besoins spécifiques (allergies, santé,
              etc.).
            </li>
          </ul>
          <h2>4. Sécurité des données</h2>
          <ul>
            <li>
              Les données personnelles des utilisateurs, y compris celles des
              enfants, sont collectées et traitées conformément au RGPD.
            </li>
            <li>
              Les informations sensibles sont chiffrées et ne seront en aucun
              cas communiquées à des tiers sans consentement explicite, sauf
              obligation légale.
            </li>
            <li>
              Tout accès non autorisé au compte ou tentative de piratage doit
              être signalé immédiatement.
            </li>
          </ul>
          <h2>5. Responsabilités</h2>
          <ul>
            <li>
              <strong>Parents :</strong> Les utilisateurs doivent fournir des
              informations véridiques et mettre à jour leur profil en cas de
              changement.
            </li>
            <li>
              <strong>Crèches :</strong> Elles sont responsables de la qualité
              des services proposés et de l'accueil des enfants.
            </li>
            <li>
              <strong>Site :</strong> Nous ne sommes pas responsables des
              incidents ou litiges survenus au sein des crèches. En cas de
              problème, les utilisateurs doivent contacter directement la crèche
              concernée.
            </li>
          </ul>
          <h2>6. Modifications et résiliation</h2>
          <ul>
            <li>
              Nous nous réservons le droit de modifier les présentes CGU à tout
              moment. Les utilisateurs seront informés des mises à jour.
            </li>
            <li>
              En cas de non-respect des CGU, nous nous réservons le droit de
              suspendre ou de supprimer un compte utilisateur.
            </li>
          </ul>
          <h2>7. Contact</h2>
          <p>
            Pour toute question ou réclamation, veuillez nous contacter à
            l'adresse suivante : <strong>contact@lespetitsnids.com</strong>
          </p>
        </section>
      </section>
    </section>
  );
}

export default ModalConditions;
