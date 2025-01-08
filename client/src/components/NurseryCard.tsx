import "./nursery-card.css";
import { NavLink } from "react-router-dom";
import type { nursery } from "../types/nursery";

function NurseryCard({ id }: nursery) {
  return (
    <>
      <NavLink to={`/search/${id}`}>
        <button type="button">La crèche </button>
      </NavLink>
    </>
  );
}

export default NurseryCard;
