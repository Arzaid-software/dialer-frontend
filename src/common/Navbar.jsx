import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  // Extract common NavLink styles to a function
  const getNavLinkClass = ({ isActive }) =>
    `font-medium text-[#2D2E2E] font-inter text-base tracking-wide pb-1 hover:border-b-2 hover:border-[#1B59F8] transition-colors ${
      isActive ? "border-b-2 border-[#1B59F8]" : ""
    }`;

  return (
    <nav className="border-b border-b-black border-solid">
      <div className="max-w-7xl p-4 mx-auto ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl text-[#1B59F8] font-semibold tracking-wider"
          >
            Cat Dialer
          </Link>

          {/* Nav Menu */}
          <div className="flex gap-12 text-semibold">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>

            <NavLink to="/call-reports" className={getNavLinkClass}>
              Call Reports
            </NavLink>

            <NavLink to="/create-subadmin" className={getNavLinkClass}>
              Create Subadmin
            </NavLink>

            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>

            <NavLink to="/about" className={getNavLinkClass}>
              About us
            </NavLink>
          </div>

          {/* Logout Button */}
          <div className="flex gap-3 items-center justify-center">
            <Button className="bg-[#1B59F8] hover:bg-[#1B59F8]/90 transition-colors border text-base  border-[#1B59F8]">
              Logout
            </Button>

            <div className="border-2 border-black/30 rounded-full p-2 hover:bg-gray-100 cursor-pointer transition-colors">
              <User size={20} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
