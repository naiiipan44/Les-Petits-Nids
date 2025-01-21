export interface UserI {
  firstName: string;
  lastName: string;
  email: string;
  userPassword: string;
  role: "parent" | "nursery" | "admin";
}
