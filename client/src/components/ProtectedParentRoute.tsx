import { type ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedParentRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  // console.log(user, "user ?");
  const navigate = useNavigate();
  function checkUser() {
    useEffect(() => {
      if (!user || user.role !== "parent") {
        navigate("/search");
      }
    }, []);
  }
  setTimeout(checkUser, 3000);

  return user && children;
}

export default ProtectedParentRoute;
