import type { FormEvent } from "react";

import "./FilterBar.css";

interface Text {
  text: string;
  setText: (text: string) => void;
}

function FilterBar({ text, setText }: Text) {
  function handleChange(event: FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
  }

  return (
    <>
      <section className="filter-head-section">
        <img src="/search.svg" alt="magnifying glass" />
        <input type="text" onChange={handleChange} value={text} />
      </section>
    </>
  );
}

export default FilterBar;
