import { type ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedNurseryRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  const navigate = useNavigate();
  function checkUser() {
    useEffect(() => {
      if (!user) {
        navigate("/search");
      }
    }, []);
  }
  setTimeout(checkUser, 3000);

  return user && children;
}

export default ProtectedNurseryRoute;
