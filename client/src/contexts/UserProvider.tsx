import { type ReactNode, createContext, useState } from "react";

type Children = {
  children: ReactNode;
};

type UserProps = {
  user: UserI | null;
  setUser: (user: UserI) => void;
};

interface UserI {
  userType: "parent" | "nursery" | "admin";
}

export const UserContext = createContext<UserProps | null>(null);

export default function UserProvider({ children }: Children) {
  const [user, setUser] = useState<UserI | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
