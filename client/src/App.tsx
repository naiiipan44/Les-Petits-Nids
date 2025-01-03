import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <h1>Ici c'est App</h1>
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
