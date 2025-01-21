import { useCallback } from "react";
import type { NurseryData } from "../types/nursery";

function useStorage() {
  const getStorage = useCallback(() => {
    const actualStorage = localStorage.getItem("nursery");
    if (actualStorage) {
      return JSON.parse(actualStorage);
    }
    return null;
  }, []);

  function setStorage(nursery: NurseryData[]) {
    return localStorage.setItem("nursery", JSON.stringify(nursery));
  }

  function handleStorage(data: NurseryData, isClicked: boolean) {
    const actualStorage: NurseryData[] | null = getStorage();
    const { id, ns_name, ns_address, ns_capacity, ns_image } = data;

    if (!actualStorage) {
      return setStorage([
        {
          id,
          ns_name,
          ns_address,
          ns_capacity,
          ns_image,
        },
      ]);
    }
    if (isClicked) {
      const filteredArray = actualStorage.filter((el) => el.id !== id);
      return setStorage(filteredArray);
    }
    setStorage([
      ...actualStorage,
      {
        id,
        ns_name,
        ns_address,
        ns_capacity,
        ns_image,
      },
    ]);
  }

  return { getStorage, handleStorage };
}

export default useStorage;
