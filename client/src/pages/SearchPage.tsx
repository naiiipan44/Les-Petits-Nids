import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import "./SearchPage.css";

import { Link } from "react-router-dom";

import Nursery from "../components/Nursery";
import type { NurseryDetails } from "../types/Nursery";

function SearchPage() {
  const [data, setData] = useState<null | NurseryDetails[]>(null);

  const [userEntry, setUserEntry] = useState<string>("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/nursery/`)
      .then((response) => response.json())
      .then((nursery) => setData(nursery));
  }, []);
  const filteredData = data?.filter((el) => {
    return el.ns_name.toLowerCase().includes(userEntry.toLowerCase());
  });

  return (
    <>
      <meta
        name="description"
        content="Page de recherche de l'application Les Petits Nids. Les Petits Nids est une application conçue pour permettre aux parents de réserver en urgence une place en crèche du lundi au vendredi de 9h à 17h pour leur enfant. Sur cette page, se présentant comme une carte interactive, les parents ont la possibilité de géolocaliser les crèches ainsi que d'afficher des informations importantes telles que leur adresse, leur numéro de téléphone, leur email et le type de structure que c'est. Les parents ont également la possibilité d'accéder à une présentation du projet pédagogique de chaque crèche en cliquant sur sa carte de présentation. "
      />
      <header className="head-section">
        <FilterBar userEntry={userEntry} setUserEntry={setUserEntry} />
        <section className="options-head-section">
          <section className="filter-and-sort-options">
            {/* Both figures above should triger a modal to fill filter or sort criteria*/}
          </section>
        </section>
      </header>

      <main className="main-search-page">
        {filteredData?.length ? (
          filteredData.map((el) => (
            <Link
              className="nursery-card-link"
              to={`/search/${el.id}`}
              key={el.id}
            >
              <Nursery
                id={el.id}
                ns_type={el.ns_type}
                ns_name={el.ns_name}
                ns_image={el.ns_image}
                ns_capacity={el.ns_capacity}
                ns_address={el.ns_address}
                ns_num_tel={el.ns_num_tel}
                ns_mail={el.ns_mail}
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
