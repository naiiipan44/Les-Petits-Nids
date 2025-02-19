export type Children = {
  children: ReactNode;
};

export type UserProps = {
  user: UserI | null;
  setUser: (user: UserI) => void;
};
