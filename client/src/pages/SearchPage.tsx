import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import "./SearchPage.css";

import { Link } from "react-router-dom";

import Nursery from "../components/Nursery";
import type { NurseryData } from "../types/nursery";

function SearchPage() {
  const [data, setData] = useState<null | NurseryData[]>(null);

  const [userEntry, setUserEntry] = useState<string>("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/nursery/`)
      .then((response) => response.json())
      .then((nursery) => setData(nursery));
  }, []);

  const filteredData = data?.filter((el) => {
    return el.ns_name.toLowerCase().includes(userEntry.toLowerCase());
  });
  console.warn(filteredData);

  return (
    <>
      <header className="head-section">
        <FilterBar userEntry={userEntry} setUserEntry={setUserEntry} />
        <section className="options-head-section">
          <section className="filter-and-sort-options">
            {/* Both figures above should triger a modal to fill filter or sort criteria*/}
            <figure>
              <img src="/funnel.svg" alt="funnel" />
              <figcaption>Filtrer</figcaption>
            </figure>
            <figure>
              <img src="/funnel.svg" alt="funnel" />
              <figcaption>Trier</figcaption>
            </figure>
          </section>
          <p>Carte</p>
        </section>
      </header>

      <main className="main-search-page">
        {filteredData?.length ? (
          filteredData.map((el) => (
            <Link to={`/search/${el.id}`} key={el.id}>
              <Nursery
                id={el.id}
                ns_name={el.ns_name}
                ns_image={el.ns_image}
                ns_capacity={el.ns_capacity}
                ns_address={el.ns_address}
                ns_coord_lat={el.ns_coord_lat}
                ns_coord_long={el.ns_coord_long}
              />
            </Link>
          ))
        ) : (
          <p>Aucune crèche ne correspond à votre recherche</p>
        )}
      </main>
    </>
  );
}

export default SearchPage;
