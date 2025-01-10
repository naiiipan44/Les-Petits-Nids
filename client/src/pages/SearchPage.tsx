import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import "./SearchPage.css";

import { Link } from "react-router-dom";

import Nursery from "../components/Nursery";
import type { NurseryData } from "../types/nursery";

function SearchPage() {
  const [data, setData] = useState<null | NurseryData[]>(null);

  const [text, setText] = useState<string>("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/nursery/`)
      .then((response) => response.json())
      .then((nursery) => setData(nursery));
  }, []);

  const filteredData = data?.filter((el) => {
    return el.ns_name.includes(text);
  });

  return (
    <>
      <header className="head-section">
        <FilterBar text={text} setText={setText} />
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
        {filteredData?.map((el) => (
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
