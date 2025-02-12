import { useEffect, useState } from "react";
import ParentFolderForm from "./ParentFolderForm";
import "./ParentFolder.css";
function ParentFolder() {
  const [edit, setEdit] = useState(false);
  const [parentId, setParentId] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((parent) => setParentId(parent.user.id));
  }, []);

  return (
    <>
      <button
        className="button-secondary"
        type="button"
        onClick={() => setEdit(!edit)}
      >
        {edit ? "Création" : "Modification"}
      </button>
      <ParentFolderForm edit={edit} parentId={parentId} />
    </>
  );
}

export default ParentFolder;
