//1. Les imports de base
import { useEffect, useState } from "react";
// 2.Les composants et modules
// Hooks
import { toast } from "react-toastify";
import type { User } from "../types/BookingInfos";
// 3. Les Styles et assets
import "./Header.css";

function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/me`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data.user || null);
        } else {
          setUser(null);
        }
      } catch (error) {
        toast.error(
          `Erreur lors de la récupération de l'utilisateur : ${error}`,
        );
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="profil-header">
      {user ? (
        <img
          className="logo-login"
          src="/profile.svg"
          alt="Logo du profile une fois connecté"
        />
      ) : (
        <img
          className="logo-not-login"
          src="/Logo-not-login.png"
          alt="Logo du profile non connecté"
        />
      )}
      <figcaption>{`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}</figcaption>
      {user ? <img src="/chevron.png" alt="chevron pour menu déroulant" /> : ""}
    </header>
  );
}

export default Header;
