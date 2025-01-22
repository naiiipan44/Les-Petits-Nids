import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./style/globals.css";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      <Outlet />
      {isLandingPage ? "" : <NavBar />}
      <ToastContainer />
    </>
  );
}

export default App;
