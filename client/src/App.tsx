import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./style/globals.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import type { Auth } from "./types/Login";

function App() {
  const location = useLocation();
  const isLandingPageOrNoHeader = location.pathname === "/";
  const isPageNotFound = location.key === "default";
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

  if (isPageNotFound) {
    return <NotFound />;
  }

  return (
    <section
      className={
        isLandingPageOrNoHeader ? "navbar-disabled" : "general-section"
      }
    >
      <section className="outlet-section">
        {!isLandingPageOrNoHeader && <Header />}
        {auth ? (
          <p>Bienvenue, {auth.user.first_name} !</p>
        ) : (
          <p>Vous n'êtes pas connecté.</p>
        )}
        <Outlet context={{ setAuth }} />
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
