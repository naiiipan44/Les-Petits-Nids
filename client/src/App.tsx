import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./style/globals.css";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <section className="general-section">
      <section className="outlet-section">
        <Outlet />
      </section>
      <section className="navbar-section">
        {isLandingPage ? "" : <NavBar />}
        <ToastContainer />
      </section>
      <Footer />
    </section>
  );
}

export default App;
