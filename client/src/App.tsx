//1. Les imports de base
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// 2.Les composants et modules
//Composant enfants
//Composant parents
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// Context
import { useAuth } from "./contexts/AuthContext";
// Type
import type { Auth } from "./types/Login";
// 3. Les Styles et assets
import "./style/globals.css";

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
