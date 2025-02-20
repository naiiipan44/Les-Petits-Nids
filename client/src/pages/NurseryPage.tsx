//1. Les imports de base
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// 2.Les composants et modules
//Composant parents
import ModalConnexion from "../components/ModalConnexion";
//Composant enfants
import NurseryAvailabilities from "../components/NurseryAvailabilities";
// Types
import type { NurseryDetails } from "../types/Nursery";
// 3. Les Styles et assets
import "./NurseryPage.css";

import { useAuth } from "../contexts/AuthContext";
import useStorage from "../hooks/useStorage";

function NurseryPage() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

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
    const storage: NurseryDetails[] | null = getStorage();
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
      <Link to={"/search"} className="back-to-nursery">
        <img src="/chevron.png" alt="flèche de retour" />
        <section>
          <h1>Crèche {data.ns_name}</h1>
        </section>
      </Link>
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
          <p>
            La crèche « {data.ns_name} » n’est pas qu’un lieu de garde c’est
            surtout un lieu d’échange et d’accueil des enfants et des familles
            dans une confiance réciproque où le respect, l’autonomie et la
            sécurité sont des références privilégiées dans notre projet.
          </p>
          <div className={isVisible ? "hidden" : "visible"}>
            <p>Informations suplémentaire:</p>
            <p>
              <strong>address :</strong> {data.ns_address}
            </p>
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
                <p>
                  <strong>Horaires :</strong> Lundi-Samedi : 9h-16h
                </p>
              </li>
              <li>
                <p>
                  <strong>Téléphone :</strong> {data.ns_num_tel}
                </p>
              </li>
              <li>
                <p>
                  <strong>Mail :</strong> {data.ns_mail}
                </p>
              </li>
            </ul>
          </section>
          <h2 className="availability">Disponibilités</h2>
          {user ? (
            <NurseryAvailabilities />
          ) : (
            <section className="login-text">
              <p>
                Connectez-vous pour accéder aux <br /> disponibilités de cette
                crèche.
              </p>
              <button
                className="not-connected"
                onClick={() => setShowModal(true)}
                type="button"
              >
                Pas Connecté ?
              </button>
              {showModal && <ModalConnexion onClose={handleButtonClick} />}
            </section>
          )}
        </section>
      </section>
    </>
  );
}
export default NurseryPage;
