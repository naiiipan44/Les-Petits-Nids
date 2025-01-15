import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import type { NurseryData } from "../types/nursery";
import "./NurseryPage.css";
import { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

function NurseryPage() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const data = useLoaderData() as NurseryData;

  if (!data) {
    return <p>Erreur : Impossible de charger les données pour cette crèche.</p>;
  }

  const [isClicked, setIsClicked] = useState(false);

  const { getStorage } = useStorage();

  useEffect(() => {
    const storage: NurseryData[] | null = getStorage();
    if (!storage) return;
    const isNurseryInside = storage.find((el) => el.id === data.id);
    if (isNurseryInside) setIsClicked(true);
  }, [data.id, getStorage]);

  function setStorage(nursery: NurseryData[]) {
    return localStorage.setItem("nursery", JSON.stringify(nursery));
  }

  function handleClick() {
    setIsClicked(!isClicked);
    return handleStorage();
  }

  function handleStorage() {
    const actualStorage: NurseryData[] | null = getStorage();
    const { id, ns_name, ns_address, ns_capacity, ns_image } = data;

    if (!actualStorage) {
      return setStorage([{ id, ns_name, ns_address, ns_capacity, ns_image }]);
    }
    if (isClicked) {
      const filteredArray = actualStorage.filter((el) => el.id !== id);
      return setStorage(filteredArray);
    }
    setStorage([
      ...actualStorage,
      { id, ns_name, ns_address, ns_capacity, ns_image },
    ]);
  }

  return (
    <>
      <section className="back-to-nursery">
        <Link to={"/search"} className="back-button">
          <span className="arrow" />
        </Link>
        <section>
          <h1>Crèche {data.ns_name}</h1>
          <p>Mettre type de crèche ici</p>
        </section>
      </section>
      <section className="nursery-details">
        <img src={data.ns_image} alt={`L'image de ${data.ns_name}`} />
        <button type="button" className="button-heart" onClick={handleClick}>
          {isClicked ? "❤️" : "🤍"}{" "}
        </button>
        <section className="nursery-description">
          <h2 className="presentation">Présentation</h2>
          <p>
            La crèche « {data.ns_name} » n’est pas qu’un lieu de garde c’est
            surtout un lieu d’échange et d’accueil des enfants et des familles
            dans une confiance réciproque où le respect, l’autonomie et la
            sécurité sont des références privilégiées dans notre projet.
          </p>
          <div className={isVisible ? "hidden" : "visible"}>
            <p>Informations suplémentaire:</p>
            <p>address : {data.ns_address}</p>
          </div>
          <section className="contact">
            <button
              type="button"
              className="information"
              onClick={toggleVisibility}
            >
              i
            </button>
            <ul>
              <li>
                <p>Horaires : Lundi-Samedi : 9h-16h</p>
              </li>
              <li>
                <p>Téléphone :</p>
              </li>
              <li>
                <p>Mail :</p>
              </li>
            </ul>
          </section>
          <h2 className="availability">Disponibilités</h2>
          <section className="login-text">
            <p>
              Connectez-vous pour accéder aux disponibilités de cette crèche.
            </p>
            <button type="button">Pas Connecté ?</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default NurseryPage;
