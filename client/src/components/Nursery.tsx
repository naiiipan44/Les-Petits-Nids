// Import style
import "./Nursery.css";

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
          <p>{`Adress de l'établissement ${ns_address}`}</p>
        </figure>
      </article>
    </>
  );
}

export default Nursery;
