import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./style/globals.css";
import type { Auth } from "./types/Login";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <section className="general-section">
      <section className="outlet-section">
        {auth && <p>Hello {auth.user.first_name}</p>}
        <Outlet context={{ setAuth }} />
      </section>
      <section className="navbar-section">
        {isLandingPage ? "" : <NavBar />}
        <ToastContainer />
      </section>
      <Footer />
    </section>
  );
}

export default App;
