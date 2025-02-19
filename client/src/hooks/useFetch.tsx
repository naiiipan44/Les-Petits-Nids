import { type FormEvent, useState } from "react";
import useToast from "./useToast";

function useFetch(parentId: number) {
  const [loading] = useState(false);
  const { success, error } = useToast();

  interface RefreshProps {
    refresh: boolean;
    setRefresh: (value: boolean) => void;
  }

  function handleEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/parent/${parentId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        success("Vous avez bien mis à jour votre dossier !");
      } else {
        error("La demande de modification n'a pas abouti");
      }
    });
  }

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

  return { handleEdit, handleDelete, loading };
}

export default useFetch;
