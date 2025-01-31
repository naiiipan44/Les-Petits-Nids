import { useState } from "react";
import ParentProfile from "../components/ParentProfile";
import "./ProfilePage.css";
import NurseryProfile from "../components/NurseryProfile";
function ProfilePage() {
  const [isParent, setIsParent] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setIsParent(!isParent)}>
        Changer Parent/crèche
      </button>
      {isParent ? <ParentProfile /> : <NurseryProfile />}
    </>
  );
}

export default ProfilePage;
