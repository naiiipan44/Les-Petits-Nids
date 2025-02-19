export type Auth = {
  user: User;
  token: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
  parent_id: number;
  children_id?: number;
};
