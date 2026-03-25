
import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const navLinks = ["Marketplace", "AI Insights", "How It Works", "Farmer", "Buyer", "Admin"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f5f5f0] px-6 py-4">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
           <span> 
            <Leaf/>
            </span> Agrosynth
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
           <Link to="/" className="text-sm font-medium text-[#1a2e1a]">
            Home
          </Link>
          {navLinks.map(link => (
            <Link
              key={link}
              to={`/${link.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setActive(link)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${active === link
                  ? "bg-[#e8f0e8] text-[#1a2e1a]"
                  : "text-[#555] hover:text-[#1a2e1a]"
                }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-[#1a2e1a]">
            Log in
          </Link>
          <Link
            to="/register"
            className="bg-[#2d7a2d] text-white px-5 py-2 rounded-full text-sm font-semibold"
          >
            Get started
          </Link>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#1a2e1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a2e1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a2e1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-2 pb-4 border-t border-[#dde8dd] pt-4">
             <Link to="/" className="text-sm font-medium ml-4  text-[#1a2e1a] text-[#555] hover:text-[#1a2e1a] ">
            Home
          </Link>
          {navLinks.map(link => (
            <Link
              key={link}
              to={`/${link.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${active === link
                  ? "bg-[#e8f0e8] text-[#1a2e1a]"
                  : "text-[#555] hover:text-[#1a2e1a]"
                }`}
            >
              {link}
            </Link>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-2 mt-2">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1a2e1a] px-4 py-2"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="bg-[#2d7a2d] text-white px-5 py-2 rounded-full text-sm font-semibold text-center"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}