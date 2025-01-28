import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./style/globals.css";
type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hashed_password: string;
};
type Auth = {
  user: User;
  token: string;
};
function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [auth, setAuth] = useState(null as Auth | null);

  return (
    <>
      {auth && <p>Hello {auth.user.first_name}</p>}
      <Outlet context={{ setAuth }} />
      {isLandingPage ? "" : <NavBar />}
      <ToastContainer />
    </>
  );
}

export default App;
