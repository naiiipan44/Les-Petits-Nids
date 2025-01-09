import { useLoaderData } from "react-router-dom";
import type { NurseryData } from "../types/nursery";

function NurseryPage() {
  const data = useLoaderData() as NurseryData;

  if (!data) {
    return <p>Erreur : Impossible de charger les données pour cette crèche.</p>;
  }

  return (
    <>
      <h1>Ici c'est la page de {data.ns_name}</h1>
      <p>Adresse : {data.ns_address}</p>
      <p>Capacité : {data.ns_capacity}</p>
      <img src={data.ns_image} alt={`L'image de ${data.ns_name}`} />
    </>
  );
}

export default NurseryPage;
