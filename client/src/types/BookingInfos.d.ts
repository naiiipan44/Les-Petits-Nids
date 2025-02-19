export interface User {
  id: number;
  email: string;
  role: "parent" | "nursery";
  first_name: string;
  iat: number;
  exp: number;
  parent_id: number;
  children_id: number;
  last_name: string;
}
