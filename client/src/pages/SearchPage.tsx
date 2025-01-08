import searchIcon from "/search.svg";
import "./search-page.css";
import exempleNursery from "/aurelie_faugere_assistante_maternelle.jpg";
import funnelIcon from "/funnel.svg";

function SearchPage() {
  /* Object to test the nurse displays, will be removed once we fetch the data */
  const fakeNurse = [
    {
      id: 1,
      name: "Aurélie Faugère",
      type: "Assistante maternelle",
      img: exempleNursery,
      heart: "❤️",
      rate: "4.8",
      location: "Bordeaux, à 500m",
      openHours: "Horaires : Lundi - Samedi : 9h-16h",
      phoneNumber: "Téléphone : 05 56 56 56 56",
      mail: "Mail : contact@contact.fr",
    },
    {
      id: 2,
      name: "Picoti Picota",
      type: "Crèche maternelle",
      img: exempleNursery,
      heart: "❤️",
      rate: "4.8",
      location: "Bordeaux, à 500m",
      openHours: "Horaires : Lundi - Samedi : 9h-16h",
      phoneNumber: "Téléphone : 05 56 56 56 56",
      mail: "Mail : contact@contact.fr",
    },
  ];

  return (
    <>
      <header className="head-section">
        {/* Should be replaced by FilterBar component in the futur*/}
        <section className="filter-head-section">
          <img src={searchIcon} alt="magnifying glass" />
          <input type="text" />
        </section>
        <section className="options-head-section">
          <section className="filter-and-sort-options">
            {/* Both figures above should triger a modal to fill filter or sort criteria*/}
            <figure>
              <img src={funnelIcon} alt="funnel" />
              <figcaption>Filtrer</figcaption>
            </figure>
            <figure>
              <img src={funnelIcon} alt="funnel" />
              <figcaption>Trier</figcaption>
            </figure>
          </section>
          <p>Carte</p>
        </section>
      </header>

      <main>
        {fakeNurse.map((nurse) => {
          return (
            /* will be replaced by the Nursery component */
            <article className="nursery-section" key={nurse.id}>
              <figure>
                <img src={exempleNursery} alt="example of the nursery" />
                <figcaption>
                  {nurse.name}
                  <br />
                  {nurse.type}
                </figcaption>
                <p>{nurse.heart}</p>
                <p>{nurse.rate}</p>
              </figure>
              <h3>{nurse.location}</h3>
              <p>{nurse.openHours}</p>
              <p>{nurse.phoneNumber}</p>
              <p>{nurse.mail}</p>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default SearchPage;
