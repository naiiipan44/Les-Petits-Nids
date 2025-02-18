import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nursery from "../components/Nursery";
import useStorage from "../hooks/useStorage";
import type { NurseryDetails } from "../types/Nursery";
import "./Favorites.css";

function Favorite() {
  const [data, setData] = useState<NurseryDetails[]>([]);
  const { getStorage } = useStorage();

  useEffect(() => {
    const result = getStorage();
    if (result) {
      setData(result);
    }
  }, [getStorage]);

  const removeFavorite = (id: number) => {
    const newFavorites = data.filter((favorite) => favorite.id !== id);
    setData(newFavorites);

    localStorage.setItem("nursery", JSON.stringify(newFavorites));
  };

  return (
    <>
      <meta
        name="description"
        content="Page de favoris de l'application Les Petits Nids. Les Petits Nids est une application conçue pour permettre aux parents de réserver en urgence une place en crèche du lundi au vendredi de 9h à 17h pour leur enfant. Cette page liste les crèches que le parent aura mis en favoris après avoir cliqué sur l'icône représentant un coeur présente sur la carte de chaque crèche"
      />
      <main className="main-search-page-favorites">
        <section className="back-to-search-page">
          <Link to={"/search"} className="back-button">
            <span className="arrow" />
          </Link>
          <h1 className="title-favorites">Favoris</h1>
        </section>
        <section className="card-wrapper-favorite">
          {data.length > 0 ? (
            data.map((el) => {
              return (
                <section className="button-close-favorites" key={el.id}>
                  <Link
                    to={`/search/${el.id}`}
                    className="favorites-button-link"
                  >
                    <Nursery
                      ns_name={el.ns_name}
                      ns_image={el.ns_image}
                      id={el.id}
                      ns_capacity={0}
                      ns_address={""}
                      ns_mail={el.ns_mail}
                      ns_num_tel={el.ns_num_tel}
                    />
                  </Link>
                  <button
                    type="button"
                    className="remove-favorite-button"
                    onClick={() => removeFavorite(el.id)}
                  >
                    <img src="/redheart.svg" alt="Remove from favorites" />
                  </button>
                </section>
              );
            })
          ) : (
            <p>Vous n'avez aucune crèche en favoris</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Favorite;
