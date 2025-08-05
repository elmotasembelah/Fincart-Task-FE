import { Link } from "react-router-dom";
import AuthNav from "./authNav/AuthNav";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="border-b bg-white px-6 py-3 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Booking System
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/services"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Services
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <AuthNav />
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
