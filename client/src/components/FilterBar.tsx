import searchIcon from "/search.svg";

function FilterBar() {
  return (
    <>
      <section className="filter-head-section">
        <img src={searchIcon} alt="magnifying glass" />
        <input type="text" />
      </section>
    </>
  );
}

export default FilterBar;
