import { useState } from "react";
import useToast from "./useToast";
export interface RefreshProps {
  refresh: boolean;
  setRefresh: (value: boolean) => void;
}

function useFetch(parentId: number) {
  const [loading] = useState(false);
  const { success, error } = useToast();

  function handleDelete({ setRefresh }: RefreshProps) {
    fetch(`${import.meta.env.VITE_API_URL}/api/parent/${parentId}`, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        success("Vos données ont été effacées avec succès");
        setRefresh(true);
      } else {
        error("La demande de suppression des données n'a pas abouti");
      }
    });
  }

  return { handleDelete, loading };
}

export default useFetch;
