export type Auth = {
  user: User;
  token: string;
};

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
};
