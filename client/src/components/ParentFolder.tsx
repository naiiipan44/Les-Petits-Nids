import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import ParentFolderForm from "./ParentFolderForm";

import "./ParentFolder.css";
// import { useOutletContext } from "react-router-dom";

function ParentFolder() {
  /********************************************************* */
  const [edit, setEdit] = useState(false);
  const [parentId, setParentId] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setParentId(user.id);
    }
  }, [user]);

  /************************************************** */

  return (
    <>
      <h3 className="title-profile-parent">Dossier Parent</h3>
      <section className="parent-folder">
        <button
          className="button-secondary"
          type="button"
          onClick={() => setEdit(!edit)}
        >
          {edit ? "Création" : "Modification"}
        </button>
        <ParentFolderForm edit={edit} parentId={parentId} />
      </section>
    </>
  );
}

export default ParentFolder;
