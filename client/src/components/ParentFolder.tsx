import { useEffect, useState } from "react";
import ParentFolderCreate from "./ParentFolderCreate";
import ParentFolderEdit from "./ParentFolderEdit";

function ParentFolder() {
  const [edit, setEdit] = useState(false);
  const [parentId, setParentId] = useState<string>("");

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/me`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.status === 200) {
          const user = await response.json();
          if (user.user.id) {
            setParentId(user.user.id);
          }
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error,
        );
      }
    };

    checkUser();
  }, []);

  console.warn(parentId);
  function handleSupress() {
    fetch(`${import.meta.env.VITE_API_URL}/api/parent/${parentId}`, {
      method: "DELETE",
    });
  }

  return (
    <>
      <button
        className="button-secondary"
        type="button"
        onClick={() => setEdit(!edit)}
      >
        {edit ? "Création" : "Modification"}
      </button>
      {edit ? <ParentFolderEdit parentId={parentId} /> : <ParentFolderCreate />}
      <button
        className="button-secondary"
        type="button"
        onClick={handleSupress}
      >
        Supprimer les données
      </button>
    </>
  );
}

export default ParentFolder;
