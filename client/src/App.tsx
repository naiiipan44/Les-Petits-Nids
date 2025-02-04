import { useEffect, useState } from "react";
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

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/me`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.status === 200) {
          const user = await response.json();
          setAuth(user);
        } else {
          setAuth(null);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error,
        );
      }
    };

    checkUser();
  }, []);
  return (
    <section className="general-section">
      <section className="outlet-section">
        <Header />
        {auth ? (
          <p>Bienvenue, {auth.user.first_name} !</p>
        ) : (
          <p>Vous n'êtes pas connecté.</p>
        )}
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
