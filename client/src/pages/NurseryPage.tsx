import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import type { NurseryData, NurseryDetails } from "../types/nursery";
import "./NurseryPage.css";
import { useEffect, useState } from "react";
import ModalConnexion from "../components/ModalConnexion";
import useStorage from "../hooks/useStorage";

function NurseryPage() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(false);
  };

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const data = useLoaderData() as NurseryDetails;

  if (!data) {
    return <p>Erreur : Impossible de charger les données pour cette crèche.</p>;
  }

  const [isClicked, setIsClicked] = useState(false);

  const { getStorage, handleStorage } = useStorage();

  useEffect(() => {
    const storage: NurseryData[] | null = getStorage();
    if (!storage) return;
    const isNurseryInside = storage.find((el) => el.id === data.id);
    if (isNurseryInside) setIsClicked(true);
  }, [data.id, getStorage]);

  function handleClick() {
    setIsClicked(!isClicked);
    return handleStorage(data, isClicked);
  }

  return (
    <>
      <section className="back-to-nursery">
        <Link to={"/search"} className="back-button">
          <span className="arrow" />
        </Link>
        <section className="nursery-name">
          <h1>Crèche {data.ns_name}</h1>
          <p>Mettre type de crèche ici</p>
        </section>
      </section>
      <section className="nursery-details">
        <img src={data.ns_image} alt={`L'image de ${data.ns_name}`} />
        <button type="button" className="button-heart" onClick={handleClick}>
          <img
            src={isClicked ? "/redheart.svg" : "/blueheart.svg"}
            alt="Heart Icon"
          />
        </button>
        <section className="nursery-description">
          <h2 className="presentation">Présentation</h2>
          <p>{data.ns_description}</p>
          <div className={isVisible ? "hidden" : "visible"}>
            <p>Informations suplémentaire:</p>
            <p>Adresse : {data.ns_address}</p>
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
                <p>Numéro de téléphone : {data.ns_num_tel}</p>
              </li>
              <li>
                <p>mail : {data.ns_mail}</p>
              </li>
            </ul>
          </section>
          <h2 className="availability">Disponibilités</h2>
          <section className="login-text">
            <p>
              Connectez-vous pour accéder aux disponibilités de cette crèche.
            </p>
            <Link to="/loginandregister">
              <button
                className="connect-button not-connected"
                onClick={() => setShowModal(true)}
                type="button"
              >
                Pas Connecté ?
              </button>
            </Link>
            {showModal && <ModalConnexion onClose={handleButtonClick} />}
          </section>
        </section>
      </section>
    </>
  );
}

export default NurseryPage;
