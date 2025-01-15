import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nursery from "../components/Nursery";
import useStorage from "../hooks/useStorage";
import type { NurseryData } from "../types/nursery";
import "./Favorites.css";

function favorite() {
  const [data, setData] = useState<NurseryData[]>([]);
  const { getStorage } = useStorage();

  useEffect(() => {
    const result = getStorage();
    if (result) {
      setData(result);
    }
  }, [getStorage]);

  return (
    <main className="main-search-page">
      <section className="back-to-search-page">
        <Link to={"/search"} className="back-button">
          <span className="arrow" />
        </Link>
        <h1 className="title-favorites">Favoris</h1>
      </section>
      {data.map((el) => {
        return (
          <Nursery
            key={el.id}
            ns_name={el.ns_name}
            ns_image={el.ns_image}
            id={el.id}
            ns_capacity={0}
            ns_address={""}
          />
        );
      })}
    </main>
  );
}

export default favorite;
