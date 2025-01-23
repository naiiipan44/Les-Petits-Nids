import "./ModalConditions.css";
import type { ModalConnexionProps } from "../types/ModalConnexion";

function ModalConditions({ onClose }: Readonly<ModalConnexionProps>) {
  return (
    <section className="modal-wrapper">
      <section className="button-back-nursery">
        <button
          onClick={() => onClose()}
          type="button"
          className="back-button-connexion"
        >
          X
        </button>
        <h1>Conditions général d'utilisations</h1>
      </section>
    </section>
  );
}

export default ModalConditions;
