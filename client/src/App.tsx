import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./style/globals.css";
import Header from "./components/Header";
import type { Auth } from "./types/Login";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <section className="general-section">
      <section className="outlet-section">
        {auth && <p>Hello {auth.user.first_name}</p>}
        <Header />
        <Outlet context={{ setAuth }} />
        <Footer />
      </section>
      <section className="navbar-section">
        {isLandingPage ? "" : <NavBar />}
        <ToastContainer />
      </section>
    </section>
  );
}

export default App;
