// 1.Les composants et modules
//Hooks
import type { FormEvent } from "react";
// 2. Les Styles et assets
import "./FilterBar.css";

interface UserEntryProps {
  userEntry: string;
  setUserEntry: (userEntry: string) => void;
}

function FilterBar({ userEntry, setUserEntry }: UserEntryProps) {
  function handleChange(event: FormEvent<HTMLInputElement>) {
    setUserEntry(event.currentTarget.value);
  }

  return (
    <section className="filter-head-section">
      <img src="/search.svg" alt="magnifying glass" />
      <input
        type="text"
        onChange={handleChange}
        value={userEntry}
        aria-label="Barre de recherche"
      />
    </section>
  );
}

export default FilterBar;
