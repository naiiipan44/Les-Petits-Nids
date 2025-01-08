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
            ns_name={el.ns_name}
            ns_image={el.ns_image}
            ns_capacity={el.ns_capacity}
            ns_address={el.ns_address}
          />
        ))}
      </main>
    </>
  );
}

export default SearchPage;
