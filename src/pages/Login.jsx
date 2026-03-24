import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // connecting the  backend API here later
  };

  
  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };


  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
           <span> 
            <Leaf/>
            </span> Agrosynth
        </Link>
        <p className="text-sm text-[#666]">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#2d7a2d] font-semibold hover:underline">
            Sign up
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
              Welcome back
            </h1>
            <p className="text-[#666] text-sm">
              Log in to your Agrosynth account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#1a2e1a]">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-[#2d7a2d] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#2d7a2d] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#256325] transition-colors mt-2"
            >
              Log in
            </button>

          </form>

          {/* divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-[#dde8dd]" />
            <span className="text-xs text-[#aaa]">or continue as</span>
            <div className="flex-1 border-t border-[#dde8dd]" />
          </div>

          {/* role buttons */}
          {/* <div className="grid grid-cols-2 gap-3">
            <button className="border border-[#dde8dd] rounded-xl py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors flex items-center justify-center gap-2">
               Farmer
            </button>
            <button className="border border-[#dde8dd] rounded-xl py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors flex items-center justify-center gap-2">
               Buyer
            </button>
          </div> */}


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

          {/* Footer note */}
          <p className="text-center text-xs text-[#aaa]">
            By logging in you agree to our{" "}
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