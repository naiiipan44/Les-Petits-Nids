import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./style/globals.css";
import Header from "./components/Header";
import { useAuth } from "./contexts/AuthContext";
import type { Auth } from "./types/Login";

function App() {
  const location = useLocation();
  const isLandingPageOrNoHeader = location.pathname === "/";
  const isLogin = location.pathname === "/login";

  const [auth, setAuth] = useState<Auth | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setAuth(user);
    }
  }, [user]);

  return (
    <section
      className={
        isLandingPageOrNoHeader ? "navbar-disabled" : "general-section"
      }
    >
      <section className="outlet-section">
        {isLandingPageOrNoHeader || isLogin ? "" : <Header />}
        <Outlet context={{ auth }} />
        <Footer />
      </section>
      <section className="navbar-section">
        {isLandingPageOrNoHeader ? "" : <NavBar />}
        <ToastContainer />
      </section>
    </section>
  );
}

export default App;
