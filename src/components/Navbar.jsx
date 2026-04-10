import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sprout } from "lucide-react";

const navLinks = [
  { label: "Marketplace", path: "/marketplace" },
  { label: "AI Insights", path: "/ai-insights" },
  { label: "How It Works", path: "/how-it-works" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Read auth state from localStorage
  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("fullName");
  const role = localStorage.getItem("role");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setMenuOpen(false);
  };

  const getDashboardPath = () => {
    if (role === "Farmer") return "/farmer";
    if (role === "Buyer") return "/buyer";
    return "/";
  };

  const firstName = fullName ? fullName.split(" ")[0] : "";

  return (
    <nav className="bg-[#f5f5f0] px-6 py-4">
      {/* Top Row */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
          <Sprout size={22} className="text-[#2d7a2d]" /> Agrosynth
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          <Link to="/" className="px-4 py-2 rounded-full text-sm font-medium text-[#555] hover:text-[#1a2e1a] transition-colors">
            Home
          </Link>
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="px-4 py-2 rounded-full text-sm font-medium text-[#555] hover:text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors"
            >
              {label}
            </Link>
          ))}
          {/* Show dashboard link if logged in */}
          {isLoggedIn && (
            <Link
              to={getDashboardPath()}
              className="px-4 py-2 rounded-full text-sm font-medium text-[#555] hover:text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="text-sm text-[#555] font-medium">
                Hi, {firstName} 
              </span>
              <button
                onClick={handleLogout}
                className="border border-[#dde8dd] text-[#555] px-4 py-2 rounded-full text-sm font-semibold hover:border-red-300 hover:text-red-500 transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-[#555] hover:text-[#1a2e1a] transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="bg-[#1a2e1a] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2d7a2d] transition-colors"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
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
          <Link to="/" onClick={() => setMenuOpen(false)}
            className="px-4 py-2 text-sm font-medium text-[#555] hover:text-[#1a2e1a]">
            Home
          </Link>
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-full text-sm font-medium text-[#555] hover:text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors"
            >
              {label}
            </Link>
          ))}
          {isLoggedIn && (
            <Link
              to={getDashboardPath()}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-sm font-medium text-[#555] hover:text-[#1a2e1a]"
            >
              Dashboard
            </Link>
          )}

          {/* Mobile Auth */}
          <div className="flex flex-col gap-2 mt-2 px-2">
            {isLoggedIn ? (
              <>
                <p className="text-sm text-[#555] px-2">Hi, {firstName} </p>
                <button
                  onClick={handleLogout}
                  className="border border-red-200 text-red-500 px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-red-50 transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
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
                  className="bg-[#1a2e1a] text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#2d7a2d] transition-colors"
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}