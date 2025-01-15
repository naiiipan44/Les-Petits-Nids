import { createContext, useState } from "react";
import type { Children, UserProps } from "../types/UserContext";
import type { UserI } from "../types/UserI";

export const UserContext = createContext<UserProps | null>(null);

export default function UserProvider({ children }: Children) {
  const [user, setUser] = useState<UserI | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
