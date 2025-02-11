import { useEffect, useState } from "react";
import type { User } from "../types/AuthContext";
import "./Header.css";

function Header() {
  const [user, setUser] = useState<User>(null);

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
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error,
        );
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="profil-header">
      <img src="/profile.svg" alt="profile-picture" />
      <figcaption>{`${user?.first_name} ${user?.last_name}`}</figcaption>
      <img src="/chevron.png" alt="chevron pour menu déroulant" />
    </header>
  );
}

export default Header;
