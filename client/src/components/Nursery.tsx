// Import style
import "./nursery.css";

// Import interface
import type { NurseryData } from "../types/nursery";

function Nursery(dataNursery: NurseryData) {
  const { ns_name, ns_image, ns_capacity, ns_address } = dataNursery;
  return (
    <>
      <article className="nursery-section">
        <figure>
          <img src={ns_image} alt="example of the nursery" />
          <figcaption>{ns_name}</figcaption>
          <p>{`Capacité d'accueil : ${ns_capacity}`}</p>
        </figure>
        <h3>{`Adress de l'établissement ${ns_address}`}</h3>
      </article>
    </>
  );
}

export default Nursery;
