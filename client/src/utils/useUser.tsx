import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("This context cannot be null!");
  }

  return context;
}

export default useUser;
