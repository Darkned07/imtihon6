// import react-router-dom
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      {/* Navabar components start */}
      <Navbar />
      {/* Navabr components end */}
      <main className="max-container grow">
        <Outlet />
      </main>
      {/* Footer components start */}
      <Footer />
      {/* Footer components end */}
    </>
  );
}

export default RootLayout;
