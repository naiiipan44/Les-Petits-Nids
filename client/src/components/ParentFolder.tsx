// React tools
import { useState } from "react";

//React components
import ParentFolderForm from "./ParentFolderForm";

// Style
import "./ParentFolder.css";

function ParentFolder() {
  const [edit, setEdit] = useState(false);

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
        <ParentFolderForm edit={edit} />
      </section>
    </>
  );
}

export default ParentFolder;
