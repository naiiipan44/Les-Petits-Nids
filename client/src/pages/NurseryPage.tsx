import { useLoaderData } from "react-router-dom";
import type { nursery } from "../types/nursery";

function NurseryPage() {
  const data = useLoaderData() as nursery;

  if (!data) {
    return <p>Erreur : Impossible de charger les données pour cette crèche.</p>;
  }

  return (
    <>
      <h1>Ici c'est la page de {data.name}</h1>
      <p>Adresse : {data.address}</p>
      <p>Capacité : {data.capacity}</p>
      <img src={data.image} alt={`L'image de ${data.name}`} />
    </>
  );
}

export default NurseryPage;
