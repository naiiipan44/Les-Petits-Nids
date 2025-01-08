// Import style
import "./nursery.css";

// Import interface
import type { DataNursery } from "../types/DataNursery";

function Nursery(dataNursery: DataNursery) {
  const {
    id,
    name,
    type,
    image,
    rate,
    location,
    openHours,
    phoneNumber,
    mail,
  } = dataNursery;
  return (
    <>
      <article className="nursery-section" key={id}>
        <figure>
          <img src={image} alt="example of the nursery" />
          <figcaption>
            {name}
            <br />
            {type}
          </figcaption>
          <p>{rate}</p>
        </figure>
        <h3>{location}</h3>
        <p>{openHours}</p>
        <p>{phoneNumber}</p>
        <p>{mail}</p>
      </article>
    </>
  );
}

export default Nursery;
