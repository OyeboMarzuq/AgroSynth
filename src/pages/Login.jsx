// // src/pages/Login.jsx
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Sprout, AlertCircle, Loader2 } from "lucide-react";
// import api from "../services/api";

// export default function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Basic validation
//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);

//     // 🔧 MOCK — remove this block once backend is ready
//     setTimeout(() => {
//       // Grab the user that was saved during registration
//       const savedUser = JSON.parse(localStorage.getItem("user"));

//       if (
//         savedUser &&
//         savedUser.email === formData.email
//       ) {
//         // User found — log them in
//         localStorage.setItem("token", "mock-token-123");
//         if (savedUser.role === "farmer") navigate("/farmer");
//         else navigate("/buyer");
//       } else {
//         setError("Invalid email or password.");
//       }
//       setLoading(false);
//     }, 1000);

//     // 🔌 REAL API — uncomment this when backend is ready
//     // try {
//     //   const { data } = await api.post("/auth/login", {
//     //     email: formData.email,
//     //     password: formData.password,
//     //   });
//     //   localStorage.setItem("token", data.token);
//     //   localStorage.setItem("user", JSON.stringify(data.user));
//     //   if (data.user.role === "farmer") navigate("/farmer");
//     //   else if (data.user.role === "buyer") navigate("/buyer");
//     //   else navigate("/");
//     // } catch (err) {
//     //   setError(err.response?.data?.message || "Invalid email or password.");
//     // } finally {
//     //   setLoading(false);
//     // }
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f0] flex flex-col">

//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
//         <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
//           <Sprout size={22} className="text-[#2d7a2d]" /> Agrosynth
//         </Link>
//         <p className="text-sm text-[#666]">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-[#2d7a2d] font-semibold hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </nav>

//       {/* Form */}
//       <div className="flex-1 flex items-center justify-center px-4 py-12">
//         <div className="bg-white rounded-2xl shadow-sm border border-[#e8e8e0] w-full max-w-md p-8 flex flex-col gap-6">

//           {/* Heading */}
//           <div>
//             <h1 className="text-3xl font-black text-[#1a2e1a]">Welcome back</h1>
//             <p className="text-[#666] text-sm mt-1">Sign in to your AgroSynth account.</p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
//               <AlertCircle size={16} /> {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             {/* Email */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-semibold text-[#1a2e1a]">Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="you@email.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex flex-col gap-1">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-semibold text-[#1a2e1a]">Password</label>
//                 <Link to="/forgot-password" className="text-xs text-[#2d7a2d] hover:underline">
//                   Forgot password?
//                 </Link>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#1a2e1a] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#2d7a2d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <Loader2 size={16} className="animate-spin" /> Signing in...
//                 </span>
//               ) : "Sign in"}
//             </button>

//           </form>

//           {/* Divider */}
//           <div className="flex items-center gap-3">
//             <div className="flex-1 h-px bg-[#e8e8e0]" />
//             <span className="text-xs text-[#888]">or continue as</span>
//             <div className="flex-1 h-px bg-[#e8e8e0]" />
//           </div>

//           {/* Quick role login — helpful for hackathon demo */}
//           <div className="flex gap-3">
//             {[
//               { label: "Demo Farmer", role: "farmer", email: "farmer@demo.com" },
//               { label: "Demo Buyer", role: "buyer", email: "buyer@demo.com" },
//             ].map(({ label, role, email }) => (
//               <button
//                 key={role}
//                 type="button"
//                 onClick={() => {
//                   const demoUser = { id: "demo", fullname: role === "farmer" ? "Demo Farmer" : "Demo Buyer", email, role };
//                   localStorage.setItem("token", "mock-token-demo");
//                   localStorage.setItem("user", JSON.stringify(demoUser));
//                   navigate(role === "farmer" ? "/farmer" : "/buyer");
//                 }}
//                 className="flex-1 border border-[#dde8dd] text-[#555] py-2.5 rounded-xl text-sm font-semibold hover:border-[#2d7a2d] hover:text-[#2d7a2d] transition-colors"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // src/pages/Login.jsx
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Sprout, AlertCircle, Loader2 } from "lucide-react";
// import api from "../services/api";

// export default function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const { data } = await api.post("/Auth/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       const authData = data.data; // { accessToken, refreshToken, userId, fullName, role }
//       localStorage.setItem("token", authData.accessToken);
//       localStorage.setItem("role", authData.role);
//       localStorage.setItem("fullName", authData.fullName);
//       localStorage.setItem("userId", authData.userId);

//       if (authData.role === "Farmer") navigate("/farmer");
//       else if (authData.role === "Buyer") navigate("/buyer");
//       else navigate("/");

//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f0] flex flex-col">

//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
//         <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
//           <Sprout size={22} className="text-[#2d7a2d]" /> Agrosynth
//         </Link>
//         <p className="text-sm text-[#666]">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-[#2d7a2d] font-semibold hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </nav>

//       {/* Form */}
//       <div className="flex-1 flex items-center justify-center px-4 py-12">
//         <div className="bg-white rounded-2xl shadow-sm border border-[#e8e8e0] w-full max-w-md p-8 flex flex-col gap-6">

//           {/* Heading */}
//           <div>
//             <h1 className="text-3xl font-black text-[#1a2e1a]">Welcome back</h1>
//             <p className="text-[#666] text-sm mt-1">Sign in to your AgroSynth account.</p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
//               <AlertCircle size={16} /> {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             {/* Email */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-semibold text-[#1a2e1a]">Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="you@email.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex flex-col gap-1">
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-semibold text-[#1a2e1a]">Password</label>
//                 <Link to="/forgot-password" className="text-xs text-[#2d7a2d] hover:underline">
//                   Forgot password?
//                 </Link>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#1a2e1a] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#2d7a2d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <Loader2 size={16} className="animate-spin" /> Signing in...
//                 </span>
//               ) : "Sign in"}
//             </button>

//           </form>

//           {/* Divider */}
//           <div className="flex items-center gap-3">
//             <div className="flex-1 h-px bg-[#e8e8e0]" />
//             <span className="text-xs text-[#888]">or continue as</span>
//             <div className="flex-1 h-px bg-[#e8e8e0]" />
//           </div>

//           {/* Quick role login — for demo while auth is being built */}
//           <div className="flex gap-3">
//             {[
//               { label: "Demo Farmer", role: "Farmer" },
//               { label: "Demo Buyer", role: "Buyer" },
//             ].map(({ label, role }) => (
//               <button
//                 key={role}
//                 type="button"
//                 onClick={() => {
//                   localStorage.setItem("token", "mock-token-demo");
//                   localStorage.setItem("role", role);
//                   localStorage.setItem("fullName", label);
//                   navigate(role === "Farmer" ? "/farmer" : "/buyer");
//                 }}
//                 className="flex-1 border border-[#dde8dd] text-[#555] py-2.5 rounded-xl text-sm font-semibold hover:border-[#2d7a2d] hover:text-[#2d7a2d] transition-colors"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

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

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // ── MOCK AUTH (active now) ──
    // Reads from localStorage users saved during registration
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("agrosynth_users") || "[]");
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("token", `mock-token-${Date.now()}`);
        localStorage.setItem("role", user.role);
        localStorage.setItem("fullName", user.fullName);
        localStorage.setItem("userId", user.userId);

        if (user.role === "Farmer") navigate("/farmer");
        else if (user.role === "Buyer") navigate("/buyer");
        else navigate("/");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 1000);

    // ── REAL API (uncomment when BE is ready) ──
    // try {
    //   const { data } = await api.post("/Auth/login", {
    //     email: formData.email,
    //     password: formData.password,
    //   });
    //   const authData = data.data;
    //   localStorage.setItem("token", authData.accessToken);
    //   localStorage.setItem("role", authData.role);
    //   localStorage.setItem("fullName", authData.fullName);
    //   localStorage.setItem("userId", authData.userId);
    //   if (authData.role === "Farmer") navigate("/farmer");
    //   else if (authData.role === "Buyer") navigate("/buyer");
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

          {/* Error */}
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

          {/* Demo buttons — keep these even after BE is ready, useful for judges */}
          <div className="flex gap-3">
            {[
              { label: "Demo Farmer", role: "Farmer", fullName: "Demo Farmer" },
              { label: "Demo Buyer", role: "Buyer", fullName: "Demo Buyer" },
            ].map(({ label, role, fullName }) => (
              <button
                key={role}
                type="button"
                onClick={() => {
                  localStorage.setItem("token", `demo-token-${Date.now()}`);
                  localStorage.setItem("role", role);
                  localStorage.setItem("fullName", fullName);
                  localStorage.setItem("userId", `demo_${role.toLowerCase()}`);
                  navigate(role === "Farmer" ? "/farmer" : "/buyer");
                }}
                className="flex-1 border border-[#dde8dd] text-[#555] py-2.5 rounded-xl text-sm font-semibold hover:border-[#2d7a2d] hover:text-[#2d7a2d] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Helper text for demo */}
          <p className="text-xs text-center text-[#aaa]">
            Use demo buttons to explore without registering
          </p>

        </div>
      </div>
    </div>
  );
}