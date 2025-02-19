// React tools
import { useEffect, useState } from "react";
//React components
import { useAuth } from "../contexts/AuthContext";
import ParentFolderForm from "./ParentFolderForm";

// Style
import "./ParentFolder.css";

function ParentFolder() {
  const [edit, setEdit] = useState(false);
  const [parentId, setParentId] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setParentId(user.id);
    }
  }, [user]);

  return (
    <>
      <h1 className="title-profile-parent">Dossier Parent</h1>
      <section className="parent-folder">
        <button
          className="button-modified-create"
          type="button"
          onClick={() => setEdit(!edit)}
        >
          {edit ? (
            <img src="public/add.png" alt="création de son dossier parent" />
          ) : (
            <img
              src="public/Edit.png"
              alt="modification de son dossier parent"
            />
          )}
        </button>
        <ParentFolderForm edit={edit} parentId={parentId} />
      </section>
    </>
  );
}

export default ParentFolder;
