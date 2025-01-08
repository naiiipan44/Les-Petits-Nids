import "./nursery-card.css";
import { Link } from "react-router-dom";
import type { NurseryData } from "../types/nursery";

function NurseryCard({ ns_name, id }: NurseryData) {
  return (
    <>
      <Link to={`/search/${id}`}>
        <p>La crèche {ns_name}</p>
      </Link>
    </>
  );
}

export default NurseryCard;
