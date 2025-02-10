import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import useToast from "../hooks/useToast";
import type { Auth } from "../types/Login";
import type { Parent } from "../types/ParentFolder";
import "./ParentFolder.css";

function ParentFolder() {
  const { success, error } = useToast();

  const [userData, setUserData] = useState<Auth | null>(null);
  const [loading, setLoading] = useState(true);
  const [parentData, setParentData] = useState<Parent | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (userData?.user.parent_id) {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/parent/${userData.user.parent_id}`,
        {
          credentials: "include",
        },
      )
        .then((res) => res.json())
        .then((data) => setParentData(data[0]))
        .catch((err) => console.error("Erreur de récupération parent:", err));
    }
  }, [userData]);

  if (loading) return <p>Chargement...</p>;
  if (!userData) return <p>Erreur lors du chargement des données.</p>;

  const isParentFilled = !!parentData;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isParentFilled) return;
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/parent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la création du dossier");
        }
        return response.json();
      })
      .then(() => {
        success("Vous avez bien complété votre dossier !");
        fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
          method: "GET",
          credentials: "include",
        });
      })
      .catch((err) => {
        error(err.message);
      });
  }

  return (
    <>
      <h3 className="title-profile-parent">Dossier Parent</h3>
      <section className="parent-folder">
        <form onSubmit={handleSubmit} className="login-form-parent">
          <input
            type="text"
            placeholder="Prénom"
            className={`input-field ${userData.user.first_name ? "valid-user-information" : ""}`}
            name="firstName"
            defaultValue={
              userData?.user.first_name || parentData?.p_first_name || ""
            }
            readOnly={true}
            required
          />
          <input
            type="text"
            placeholder="Nom"
            className={`input-field ${userData.user.last_name ? "valid-user-information" : ""}`}
            name="lastName"
            defaultValue={
              userData?.user.last_name || parentData?.p_last_name || ""
            }
            readOnly={true}
            required
          />
          <input
            type="text"
            placeholder="Métier"
            className={`input-field ${parentData?.p_job ? "valid-user-information" : ""}`}
            name="job"
            defaultValue={parentData?.p_job || ""}
            readOnly={!!parentData}
            required
          />
          <input
            type="text"
            placeholder="Adresse postale"
            className={`input-field ${parentData?.p_address ? "valid-user-information" : ""}`}
            name="adress"
            defaultValue={parentData?.p_address || ""}
            readOnly={!!parentData}
            required
          />
          <input
            type="number"
            placeholder="Département"
            className={`input-field ${parentData?.p_zip_code ? "valid-user-information" : ""}`}
            name="zipCode"
            defaultValue={parentData?.p_zip_code || ""}
            readOnly={!!parentData}
            required
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className={`input-field ${parentData?.p_num_tel ? "valid-user-information" : ""}`}
            name="numTel"
            defaultValue={
              parentData?.p_num_tel
                .toString()
                .replace(/\D/g, "")
                .replace(/(\d{2})(?=\d)/g, "$1 ") || ""
            }
            readOnly={!!parentData}
            required
          />
          <input
            type="email"
            placeholder="email"
            className={`input-field ${userData.user.email ? "valid-user-information" : ""}`}
            name="mail"
            defaultValue={userData.user.email}
            readOnly={true}
            required
          />
          <input
            type="date"
            placeholder="Date de naissance"
            className={`input-field ${parentData?.p_birth_date ? "valid-user-information" : ""}`}
            name="birthDate"
            defaultValue={
              parentData?.p_birth_date
                ? new Date(parentData.p_birth_date).toISOString().split("T")[0]
                : ""
            }
            readOnly={!!parentData}
            required
          />
          <button type="submit" className="button-secondary">
            {isParentFilled
              ? "Formulaire déjà complété"
              : "Valider le formulaire"}
          </button>
        </form>
      </section>
    </>
  );
}

export default ParentFolder;
