import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function DefaultLayout() {
  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="text-bg-dark bg-gradient py-3">
        <div className="container">Footer</div>
      </footer>
    </div>
  );
}
