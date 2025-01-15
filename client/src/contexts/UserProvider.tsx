import { type ReactNode, createContext, useState } from "react";

type Children = {
  children: ReactNode;
};

export type UserProps = {
  user: UserI | null;
  setUser: (user: UserI) => void;
};

export interface UserI {
  firstName: string;
  lastName: string;
  email: string;
  userPassword: string;
  role: "parent" | "nursery" | "admin";
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
