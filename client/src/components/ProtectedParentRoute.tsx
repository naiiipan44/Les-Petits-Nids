import { type ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedParentRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user.role !== "parent") {
      navigate("/search");
    }
  }, [user, navigate]);

  return user && children;
}

export default ProtectedParentRoute;
