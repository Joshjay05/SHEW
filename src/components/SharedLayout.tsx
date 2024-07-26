import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import Nav from "./Navbar";

const SharedLayout = () => {
  return (
    <div className="h-full w-full">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
