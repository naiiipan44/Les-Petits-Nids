import { useCallback } from "react";
import type { NurseryDetails } from "../types/Nursery";

function useStorage() {
  const getStorage = useCallback(() => {
    const actualStorage = localStorage.getItem("nursery");
    if (actualStorage) {
      return JSON.parse(actualStorage);
    }
    return null;
  }, []);

  function setStorage(nursery: NurseryDetails[]) {
    return localStorage.setItem("nursery", JSON.stringify(nursery));
  }

  function handleStorage(data: NurseryDetails, isClicked: boolean) {
    const actualStorage: NurseryDetails[] | null = getStorage();
    const {
      id,
      ns_name,
      ns_address,
      ns_capacity,
      ns_image,
      ns_num_tel,
      ns_mail,
      ns_type,
    } = data;
    if (!actualStorage) {
      return setStorage([
        {
          id,
          ns_name,
          ns_address,
          ns_capacity,
          ns_image,
          ns_num_tel,
          ns_mail,
          ns_type,
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
        ns_num_tel,
        ns_mail,
        ns_type,
      },
    ]);
  }

  return { getStorage, handleStorage };
}

export default useStorage;
