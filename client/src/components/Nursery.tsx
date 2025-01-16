// Import style
import "./Nursery.css";

// Import interface
import type { NurseryData } from "../types/nursery";

function Nursery(dataNursery: NurseryData) {
  const { ns_type, ns_num_tel, ns_mail, ns_name, ns_image } = dataNursery;
  const tel = ns_num_tel.replace(/(\d{2})/g, "$1 "); // permet d'afficher le téléphone avec 1 espace chaque 2 chiffres

  return (
    <>
      <article className="nursery-section">
        <figure>
          <img src={ns_image} alt="example of the nursery" />
          <figcaption>{ns_name}</figcaption>
          <p className="nursery-type">{ns_type}</p>
          <p className="nursery-time">
            <strong>Horaires :</strong> Lundi-Samedi : 9h-16h
          </p>
          <p className="nursery-mail">
            <strong>Adresse mail : </strong>
            {ns_mail}
          </p>
          <p className="nursery-tel">
            <strong>Téléphone : </strong>
            {tel}
          </p>
        </figure>
      </article>
    </>
  );
}

export default Nursery;
