// src/pages/Register.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.role) {
      alert("Please select a role");
      return;
    }
    console.log("Register data:", formData);
    // connecting the backend API here later
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]"
        >
           <span> 
            <Leaf/>
            </span> Agrosynth
        </Link>
        <p className="text-sm text-[#666]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#2d7a2d] font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="bg-[#e8f0e8] w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
               <span> 
            <Leaf/>
            </span>
            </div>
            <h1 className="text-3xl font-black text-[#1a2e1a] mt-2">
              Create your account
            </h1>
            <p className="text-[#666] text-sm">
              Join Agrosynth and start trading smarter
            </p>
          </div>

          {/* Role Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#1a2e1a]">
              I am a
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleRoleSelect("farmer")}
                className={`border rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors
                  ${formData.role === "farmer"
                    ?"border-[#2d7a2d] bg-[#253825] text-[#eaf2ea]"
                    : "border-[#dde8dd] text-[#1a2e1a] hover:bg-[#e8f0e8]"
                  }`}
              >
                 Farmer
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("buyer")}
                className={`border rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors
                  ${formData.role === "buyer"
                    ? "border-[#2d7a2d] bg-[#253825] text-[#eaf2ea]"
                    : "border-[#dde8dd] text-[#1a2e1a] hover:bg-[#e8f0e8]"
                  }`}
              >
                 Buyer
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1a2e1a]">
                Full name
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1a2e1a]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1a2e1a]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1a2e1a]">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                required
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#2d7a2d] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#256325] transition-colors mt-2"
            >
              Create account
            </button>

          </form>

          {/* Footer note */}
          <p className="text-center text-xs text-[#aaa]">
            By signing up you agree to our{" "}
            <Link to="/terms" className="text-[#2d7a2d] hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#2d7a2d] hover:underline">
              Privacy Policy
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}