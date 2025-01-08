// Import images from /public
import funnelIcon from "/funnel.svg";
import searchIcon from "/search.svg";

// Import style
import "./search-page.css";

// Import components
import Nursery from "../components/Nursery";

import { useEffect, useState } from "react";

// Import Interface
import type { NurseryData } from "../types/nursery";

// Import React components
import { Link } from "react-router-dom";

function SearchPage() {
  const [data, setData] = useState<null | NurseryData[]>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/nursery/")
      .then((response) => response.json())
      .then((nursery) => setData(nursery));
  }, []);

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
        {data?.map((el) => (
          <Link to={`/search/${el.id}`} key={el.id}>
            <Nursery
              id={el.id}
              ns_name={el.ns_name}
              ns_image={el.ns_image}
              ns_capacity={el.ns_capacity}
              ns_address={el.ns_address}
            />
          </Link>
        ))}
      </main>
    </>
  );
}

export default SearchPage;
