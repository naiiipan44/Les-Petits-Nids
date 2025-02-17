export type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
};

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: "parent" | "nursery";
  nursary_id?: number;
} | null;
