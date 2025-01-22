import useUser from "../utils/useUser";

function ProfilePage() {
  const { user } = useUser();
  return (
    <>
      <h1>Page profil utilisateur</h1>
      <p>{`Connecté en temps que : ${user ? user.role : "visteur"}`}</p>
    </>
  );
}

export default ProfilePage;
