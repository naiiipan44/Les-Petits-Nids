import "./nursery-card.css";
import { NavLink } from "react-router-dom";
import type { nursery } from "../types/nursery";

function NurseryCard({ ns_name, id }: nursery) {
  return (
    <>
      <NavLink to={`/search/${id}`}>
        <button type="button">La crèche {ns_name}</button>
      </NavLink>
    </>
  );
}

export default NurseryCard;
