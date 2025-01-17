import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./style/globals.css";

function App() {
  return (
    <>
      <Outlet />
      <NavBar />
      <ToastContainer />
    </>
  );
}

export default App;
