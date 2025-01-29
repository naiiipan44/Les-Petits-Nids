import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./style/globals.css";
import type { Auth } from "./types/Login";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [auth, setAuth] = useState<Auth | null>(null);

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
