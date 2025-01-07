import searchIcon from "/search.svg";
import "./search-page.css";
import exempleNursery from "/aurelie_faugere_assistante_maternelle.svg";
import funnelIcon from "/funnel.svg";

function SearchPage() {
  // const fakeNurse = [
  //   {
  //     id: 1,
  //     name: "Aurélie Faugère",
  //     type: "Assistante maternelle",
  //     img: exempleNursery,
  //     heart: "❤️",
  //     rate: "4.8",
  //     location: "Bordeaux, à 500m",
  //     openHours: "Horaires : Lundi - Samedi : 9h-16h",
  //   },
  // ];

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
        <article className="nursery-section">
          {/* Should be replaced by the Nursery component: will include a map function to pass
          props previously fetched */}
          <figure>
            <img src={exempleNursery} alt="example of the nursery" />
            <figcaption>
              Aurélie Faugère
              <br />
              Assistante maternelle
            </figcaption>
            <p>❤️</p>
            <p>4.8</p>
          </figure>
          <h3>Bordeaux, à 500m</h3>
          <p>Horaires : Lundi - Samedi : 9h-16h</p>
          <p>Téléphone : 05 56 56 56 56</p>
          <p>Mail : contact@contact.fr</p>
        </article>

        <article className="nursery-section">
          <figure>
            <img src={exempleNursery} alt="example of the nursery" />
            <figcaption>
              Crèche Picoti Picota
              <br />
              Crèche parentale
            </figcaption>
            <p>❤️</p>
            <p>4.8</p>
          </figure>
          <h3>Bordeaux, à 500m</h3>
          <p>Horaires : Lundi - Samedi : 9h-16h</p>
          <p>Téléphone : 05 56 56 56 56</p>
          <p>Mail : contact@contact.fr</p>
        </article>
      </main>
    </>
  );
}

export default SearchPage;
