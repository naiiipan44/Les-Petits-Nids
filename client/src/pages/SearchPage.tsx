import { useEffect, useState } from "react";
import NurseryCard from "../components/NurseryCard";

import type { nursery } from "../types/nursery";

function SearchPage() {
  const [data, setData] = useState<null | nursery[]>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/nursery/")
      .then((response) => response.json())
      .then((nursery) => setData(nursery));
  }, []);

  return (
    <>
      <main>
        <h1>Ici c'est la search page</h1>
        {data?.map((el) => (
          <NurseryCard
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            capacity={el.capacity}
            address={el.address}
          />
        ))}
      </main>
    </>
  );
}

export default SearchPage;
