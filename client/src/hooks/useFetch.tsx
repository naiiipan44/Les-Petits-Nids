import { type FormEvent, useState } from "react";
import useToast from "./useToast";

function useFetch(parentId: number) {
  const [loading, setLoading] = useState(false);
  const { success, error } = useToast();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setLoading(true);

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/parent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((message) => {
        if (!message.errors) {
          success("Vous avez bien complété votre dossier !");
        } else {
          error("Le dossier est invalide");
        }
        setLoading(false);
      });
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
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        success("Vous avez bien mis à jour votre dossier !");
      } else {
        error("La demande de modification n'a pas abouti");
      }
    });
  }

  function handleSupress() {
    fetch(`${import.meta.env.VITE_API_URL}/api/parent/${parentId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        success("Vos données ont été effacées avec succès");
      } else {
        error("La demande de suppression des données n'a pas abouti");
      }
    });
  }

  return { handleEdit, handleSupress, handleSubmit, loading };
}

export default useFetch;
