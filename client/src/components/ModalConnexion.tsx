import { Link, useLoaderData } from "react-router-dom";
import "./ModalConnexion.css";
import type { ModalConnexionProps } from "../types/ModalConnexion";

function ModalConnexion({ onClose }: Readonly<ModalConnexionProps>) {
  const data = useLoaderData();

  if (!data) {
    return <p>Erreur : Impossible de charger les données pour cette crèche.</p>;
  }

  return (
    <section className="modal-wrapper">
      <section className="button-back-nursery">
        <button
          onClick={() => onClose()}
          type="button"
          className="back-button-connexion"
        >
          <span className="arrow" />
        </button>
        <figcaption className="text-return-nursery">
          <h1>Crèche {data.ns_name}</h1>
          <p>Mettre type de crèche ici</p>
        </figcaption>
      </section>
      <section className="modal-connexion">
        <figure className="mother-connexion">
          <img src="/mother.svg" alt="mother" />
        </figure>
        <p className="connexion-explanation">
          Veuillez créer un compte ou vous connecter pour effectuer une
          réservation
        </p>
        <Link to={"/loginandregister"} className="get-connected" type="button">
          Se connecter
        </Link>
        <p className="not-connected-yet"> Pas encore de compte ? </p>
        <Link to="" className="links">
          Inscrivez-vous maintenant
        </Link>
      </section>
    </section>
  );
}

export default ModalConnexion;
