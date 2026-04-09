// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Leaf } from "lucide-react";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login data:", formData);
//     // connecting the  backend API here later
//   };

  
//   const handleRoleSelect = (role) => {
//     setFormData({ ...formData, role });
//   };


//   return (
//     <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
//         <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
//            <span> 
//             <Leaf/>
//             </span> Agrosynth
//         </Link>
//         <p className="text-sm text-[#666]">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-[#2d7a2d] font-semibold hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </nav>

//       {/* Main Content */}
//       <div className="flex flex-1 items-center justify-center px-6 py-12">
//         <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md flex flex-col gap-6">

//           {/* Header */}
//           <div className="flex flex-col gap-2">
//             <div className="bg-[#e8f0e8] w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
//                <span> 
//             <Leaf/>
//             </span>
//             </div>
//             <h1 className="text-3xl font-black text-[#1a2e1a] mt-2">
//               Welcome back
//             </h1>
//             <p className="text-[#666] text-sm">
//               Log in to your Agrosynth account
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             {/* Email */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-semibold text-[#1a2e1a]">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 required
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-semibold text-[#1a2e1a]">
//                   Password
//                 </label>
//                 <Link
//                   to="/forgot-password"
//                   className="text-xs text-[#2d7a2d] hover:underline"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-[#2d7a2d] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#256325] transition-colors mt-2"
//             >
//               Log in
//             </button>

//           </form>

//           {/* divider */}
//           <div className="flex items-center gap-3">
//             <div className="flex-1 border-t border-[#dde8dd]" />
//             <span className="text-xs text-[#aaa]">or continue as</span>
//             <div className="flex-1 border-t border-[#dde8dd]" />
//           </div>

//           {/* role buttons */}
//           {/* <div className="grid grid-cols-2 gap-3">
//             <button className="border border-[#dde8dd] rounded-xl py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors flex items-center justify-center gap-2">
//                Farmer
//             </button>
//             <button className="border border-[#dde8dd] rounded-xl py-3 text-sm font-semibold text-[#1a2e1a] hover:bg-[#e8f0e8] transition-colors flex items-center justify-center gap-2">
//                Buyer
//             </button>
//           </div> */}


//              <div className="flex flex-col gap-2">
//             {/* <label className="text-sm font-semibold text-[#1a2e1a]">
//               I am a
//             </label> */}
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 onClick={() => handleRoleSelect("farmer")}
//                 className={`border rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors
//                   ${formData.role === "farmer"
//                     ?"border-[#2d7a2d] bg-[#253825] text-[#eaf2ea]"
//                     : "border-[#dde8dd] text-[#1a2e1a] hover:bg-[#e8f0e8]"
//                   }`}
//               >
//                  Farmer
//               </button>
//               <button
//                 type="button"
//                 onClick={() => handleRoleSelect("buyer")}
//                 className={`border rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors
//                   ${formData.role === "buyer"
//                     ? "border-[#2d7a2d] bg-[#253825] text-[#eaf2ea]"
//                     : "border-[#dde8dd] text-[#1a2e1a] hover:bg-[#e8f0e8]"
//                   }`}
//               >
//                  Buyer
//               </button>
//             </div>
//           </div>

//           {/* Footer note */}
//           <p className="text-center text-xs text-[#aaa]">
//             By logging in you agree to our{" "}
//             <Link to="/terms" className="text-[#2d7a2d] hover:underline">
//               Terms
//             </Link>{" "}
//             and{" "}
//             <Link to="/privacy" className="text-[#2d7a2d] hover:underline">
//               Privacy Policy
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }




// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sprout, AlertCircle, Loader2 } from "lucide-react";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // 🔧 MOCK — remove this block once backend is ready
    setTimeout(() => {
      // Grab the user that was saved during registration
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === formData.email
      ) {
        // User found — log them in
        localStorage.setItem("token", "mock-token-123");
        if (savedUser.role === "farmer") navigate("/farmer");
        else navigate("/buyer");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 1000);

    // 🔌 REAL API — uncomment this when backend is ready
    // try {
    //   const { data } = await api.post("/auth/login", {
    //     email: formData.email,
    //     password: formData.password,
    //   });
    //   localStorage.setItem("token", data.token);
    //   localStorage.setItem("user", JSON.stringify(data.user));
    //   if (data.user.role === "farmer") navigate("/farmer");
    //   else if (data.user.role === "buyer") navigate("/buyer");
    //   else navigate("/");
    // } catch (err) {
    //   setError(err.response?.data?.message || "Invalid email or password.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
          <Sprout size={22} className="text-[#2d7a2d]" /> Agrosynth
        </Link>
        <p className="text-sm text-[#666]">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#2d7a2d] font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </nav>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#e8e8e0] w-full max-w-md p-8 flex flex-col gap-6">

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-black text-[#1a2e1a]">Welcome back</h1>
            <p className="text-[#666] text-sm mt-1">Sign in to your AgroSynth account.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#1a2e1a]">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[#1a2e1a]">Password</label>
                <Link to="/forgot-password" className="text-xs text-[#2d7a2d] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1a2e1a] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#2d7a2d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={16} className="animate-spin" /> Signing in...
                </span>
              ) : "Sign in"}
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#e8e8e0]" />
            <span className="text-xs text-[#888]">or continue as</span>
            <div className="flex-1 h-px bg-[#e8e8e0]" />
          </div>

          {/* Quick role login — helpful for hackathon demo */}
          <div className="flex gap-3">
            {[
              { label: "Demo Farmer", role: "farmer", email: "farmer@demo.com" },
              { label: "Demo Buyer", role: "buyer", email: "buyer@demo.com" },
            ].map(({ label, role, email }) => (
              <button
                key={role}
                type="button"
                onClick={() => {
                  const demoUser = { id: "demo", fullname: role === "farmer" ? "Demo Farmer" : "Demo Buyer", email, role };
                  localStorage.setItem("token", "mock-token-demo");
                  localStorage.setItem("user", JSON.stringify(demoUser));
                  navigate(role === "farmer" ? "/farmer" : "/buyer");
                }}
                className="flex-1 border border-[#dde8dd] text-[#555] py-2.5 rounded-xl text-sm font-semibold hover:border-[#2d7a2d] hover:text-[#2d7a2d] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}