// // // src/pages/Register.jsx
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Leaf } from "lucide-react";

// // export default function Register() {
// //   const [formData, setFormData] = useState({
// //     fullname: "",
// //     email: "",
// //     password: "",
// //     confirmPassword: "",
// //     role: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleRoleSelect = (role) => {
// //     setFormData({ ...formData, role });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (formData.password !== formData.confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }
// //     if (!formData.role) {
// //       alert("Please select a role");
// //       return;
// //     }
// //     console.log("Register data:", formData);
// //     // connecting the backend API here later
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f5f5f0] flex flex-col">

// //       {/* Navbar */}
// //       <nav className="flex items-center justify-between px-6 lg:px-16 py-4 bg-[#f5f5f0]">
// //         <Link
// //           to="/"
// //           className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]"
// //         >
// //            <span> 
// //             <Leaf/>
// //             </span> Agrosynth
// //         </Link>
// //         <p className="text-sm text-[#666]">
// //           Already have an account?{" "}
// //           <Link
// //             to="/login"
// //             className="text-[#2d7a2d] font-semibold hover:underline"
// //           >
// //             Log in
// //           </Link>
// //         </p>
// //       </nav>

// //       {/* Main Content */}
// //       <div className="flex flex-1 items-center justify-center px-6 py-12">
// //         <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md flex flex-col gap-6">

// //           {/* Header */}
// //           <div className="flex flex-col gap-2">
// //             <div className="bg-[#e8f0e8] w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
// //                <span> 
// //             <Leaf/>
// //             </span>
// //             </div>
// //             <h1 className="text-3xl font-black text-[#1a2e1a] mt-2">
// //               Create your account
// //             </h1>
// //             <p className="text-[#666] text-sm">
// //               Join Agrosynth and start trading smarter
// //             </p>
// //           </div>

// //           {/* Role Selector */}
// //           <div className="flex flex-col gap-2">
// //             <label className="text-sm font-semibold text-[#1a2e1a]">
// //               I am a
// //             </label>
// //             <div className="grid grid-cols-2 gap-3">
// //               <button
// //                 type="button"
// //                 onClick={() => handleRoleSelect("farmer")}
// //                 className={`border rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors
// //                   ${formData.role === "farmer"
// //                     ?"border-[#2d7a2d] bg-[#253825] text-[#eaf2ea]"
// //                     : "border-[#dde8dd] text-[#1a2e1a] hover:bg-[#e8f0e8]"
// //                   }`}
// //               >
// //                  Farmer
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => handleRoleSelect("buyer")}
// //                 className={`border rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors
// //                   ${formData.role === "buyer"
// //                     ? "border-[#2d7a2d] bg-[#253825] text-[#eaf2ea]"
// //                     : "border-[#dde8dd] text-[#1a2e1a] hover:bg-[#e8f0e8]"
// //                   }`}
// //               >
// //                  Buyer
// //               </button>
// //             </div>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

// //             {/* Full Name */}
// //             <div className="flex flex-col gap-2">
// //               <label className="text-sm font-semibold text-[#1a2e1a]">
// //                 Full name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="fullname"
// //                 value={formData.fullname}
// //                 onChange={handleChange}
// //                 placeholder="John Doe"
// //                 required
// //                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
// //               />
// //             </div>

// //             {/* Email */}
// //             <div className="flex flex-col gap-2">
// //               <label className="text-sm font-semibold text-[#1a2e1a]">
// //                 Email address
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 placeholder="you@example.com"
// //                 required
// //                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
// //               />
// //             </div>

// //             {/* Password */}
// //             <div className="flex flex-col gap-2">
// //               <label className="text-sm font-semibold text-[#1a2e1a]">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 placeholder="Create a password"
// //                 required
// //                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
// //               />
// //             </div>

// //             {/* Confirm Password */}
// //             <div className="flex flex-col gap-2">
// //               <label className="text-sm font-semibold text-[#1a2e1a]">
// //                 Confirm password
// //               </label>
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 placeholder="Repeat your password"
// //                 required
// //                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors bg-[#f9fbf9]"
// //               />
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="bg-[#2d7a2d] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#256325] transition-colors mt-2"
// //             >
// //               Create account
// //             </button>

// //           </form>

// //           {/* Footer note */}
// //           <p className="text-center text-xs text-[#aaa]">
// //             By signing up you agree to our{" "}
// //             <Link to="/terms" className="text-[#2d7a2d] hover:underline">
// //               Terms
// //             </Link>{" "}
// //             and{" "}
// //             <Link to="/privacy" className="text-[#2d7a2d] hover:underline">
// //               Privacy Policy
// //             </Link>
// //           </p>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // /


// // src/pages/Register.jsx
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Sprout, ShoppingCart, AlertCircle, Loader2 } from "lucide-react";
// import api from "../services/api";

// export default function Register() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//     // Farmer-only fields
//     farmName: "",
//     state: "",
//     lga: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleRoleSelect = (role) => {
//     setFormData({ ...formData, role });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password || !formData.confirmPassword) {
//       setError("Please fill in all fields.");
//       return;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     if (!formData.role) {
//       setError("Please select a role (Farmer or Buyer).");
//       return;
//     }
//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }
//     if (formData.role === "Farmer" && (!formData.farmName || !formData.state || !formData.lga)) {
//       setError("Please fill in your farm name, state, and LGA.");
//       return;
//     }

//     setLoading(true);
//     try {
//       if (formData.role === "Farmer") {
//         await api.post("/Auth/register/farmer", {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//           password: formData.password,
//           farmName: formData.farmName,
//           state: formData.state,
//           lGA: formData.lga,
//         });
//       } else {
//         await api.post("/Auth/register/buyer", {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phoneNumber: formData.phoneNumber,
//           password: formData.password,
//         });
//       }

//       // Registration successful — redirect to login
//       navigate("/login");

//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed. Please try again.");
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
//           Already have an account?{" "}
//           <Link to="/login" className="text-[#2d7a2d] font-semibold hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </nav>

//       {/* Form */}
//       <div className="flex-1 flex items-center justify-center px-4 py-12">
//         <div className="bg-white rounded-2xl shadow-sm border border-[#e8e8e0] w-full max-w-md p-8 flex flex-col gap-6">

//           {/* Heading */}
//           <div>
//             <h1 className="text-3xl font-black text-[#1a2e1a]">Create account</h1>
//             <p className="text-[#666] text-sm mt-1">Join AgroSynth and start trading smarter.</p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
//               <AlertCircle size={16} /> {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             {/* Role Selection — first so farmer fields show/hide early */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-semibold text-[#1a2e1a]">I am a...</label>
//               <div className="flex gap-3">
//                 {[
//                   { role: "Farmer", label: "Farmer", icon: <Sprout size={16} /> },
//                   { role: "Buyer", label: "Buyer", icon: <ShoppingCart size={16} /> },
//                 ].map(({ role: r, label, icon }) => (
//                   <button
//                     key={r}
//                     type="button"
//                     onClick={() => handleRoleSelect(r)}
//                     className={`flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-colors flex items-center justify-center gap-2
//                       ${formData.role === r
//                         ? "border-[#2d7a2d] bg-[#e8f0e8] text-[#2d7a2d]"
//                         : "border-[#dde8dd] text-[#666] hover:border-[#2d7a2d]"
//                       }`}
//                   >
//                     {icon} {label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* First & Last Name */}
//             <div className="grid grid-cols-2 gap-3">
//               <div className="flex flex-col gap-1">
//                 <label className="text-sm font-semibold text-[#1a2e1a]">First name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="Musa"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label className="text-sm font-semibold text-[#1a2e1a]">Last name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Aliyu"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//                 />
//               </div>
//             </div>

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

//             {/* Phone Number */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-semibold text-[#1a2e1a]">Phone number</label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="08012345678"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//               />
//             </div>

//             {/* Farmer-only fields */}
//             {formData.role === "Farmer" && (
//               <>
//                 <div className="flex flex-col gap-1">
//                   <label className="text-sm font-semibold text-[#1a2e1a]">Farm name</label>
//                   <input
//                     type="text"
//                     name="farmName"
//                     placeholder="e.g. Green Acres Farm"
//                     value={formData.farmName}
//                     onChange={handleChange}
//                     className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="flex flex-col gap-1">
//                     <label className="text-sm font-semibold text-[#1a2e1a]">State</label>
//                     <input
//                       type="text"
//                       name="state"
//                       placeholder="e.g. Kaduna"
//                       value={formData.state}
//                       onChange={handleChange}
//                       className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1">
//                     <label className="text-sm font-semibold text-[#1a2e1a]">LGA</label>
//                     <input
//                       type="text"
//                       name="lga"
//                       placeholder="e.g. Zaria"
//                       value={formData.lga}
//                       onChange={handleChange}
//                       className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//                     />
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* Password */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-semibold text-[#1a2e1a]">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Min. 6 characters"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-semibold text-[#1a2e1a]">Confirm password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Re-enter your password"
//                 value={formData.confirmPassword}
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
//                   <Loader2 size={16} className="animate-spin" /> Creating account...
//                 </span>
//               ) : "Create account"}
//             </button>

//           </form>

//           {/* Terms */}
//           <p className="text-xs text-center text-[#888]">
//             By registering, you agree to our{" "}
//             <Link to="/terms" className="text-[#2d7a2d] hover:underline">Terms</Link>{" "}
//             and{" "}
//             <Link to="/privacy" className="text-[#2d7a2d] hover:underline">Privacy Policy</Link>.
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sprout, ShoppingCart, AlertCircle, Loader2 } from "lucide-react";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    farmName: "",
    state: "",
    lga: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ── Validation ──
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (!formData.role) {
      setError("Please select a role — Farmer or Buyer.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.role === "Farmer" && (!formData.farmName || !formData.state || !formData.lga)) {
      setError("Please fill in your farm name, state, and LGA.");
      return;
    }

    setLoading(true);

    // ── MOCK AUTH (active now) ──
    // Saves user to localStorage so Login works immediately after
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("agrosynth_users") || "[]");
      const exists = users.find((u) => u.email === formData.email);
      if (exists) {
        setError("An account with this email already exists.");
        setLoading(false);
        return;
      }
      const newUser = {
        userId: `user_${Date.now()}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: formData.role,
        ...(formData.role === "Farmer" && {
          farmName: formData.farmName,
          state: formData.state,
          lga: formData.lga,
        }),
      };
      users.push(newUser);
      localStorage.setItem("agrosynth_users", JSON.stringify(users));
      setLoading(false);
      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    }, 1000);

    // ── REAL API (uncomment when BE is ready) ──
    // try {
    //   if (formData.role === "Farmer") {
    //     await api.post("/Auth/register/farmer", {
    //       firstName: formData.firstName,
    //       lastName: formData.lastName,
    //       email: formData.email,
    //       phoneNumber: formData.phoneNumber,
    //       password: formData.password,
    //       farmName: formData.farmName,
    //       state: formData.state,
    //       lGA: formData.lga,
    //     });
    //   } else {
    //     await api.post("/Auth/register/buyer", {
    //       firstName: formData.firstName,
    //       lastName: formData.lastName,
    //       email: formData.email,
    //       phoneNumber: formData.phoneNumber,
    //       password: formData.password,
    //     });
    //   }
    //   navigate("/login");
    // } catch (err) {
    //   setError(err.response?.data?.message || "Registration failed. Please try again.");
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
          Already have an account?{" "}
          <Link to="/login" className="text-[#2d7a2d] font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </nav>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#e8e8e0] w-full max-w-md p-8 flex flex-col gap-6">

          <div>
            <h1 className="text-3xl font-black text-[#1a2e1a]">Create account</h1>
            <p className="text-[#666] text-sm mt-1">Join AgroSynth and start trading smarter.</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
              ✅ {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Role Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1a2e1a]">I am a...</label>
              <div className="flex gap-3">
                {[
                  { role: "Farmer", label: "Farmer", icon: <Sprout size={16} /> },
                  { role: "Buyer", label: "Buyer", icon: <ShoppingCart size={16} /> },
                ].map(({ role: r, label, icon }) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => handleRoleSelect(r)}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-colors flex items-center justify-center gap-2
                      ${formData.role === r
                        ? "border-[#2d7a2d] bg-[#e8f0e8] text-[#2d7a2d]"
                        : "border-[#dde8dd] text-[#666] hover:border-[#2d7a2d]"
                      }`}
                  >
                    {icon} {label}
                  </button>
                ))}
              </div>
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#1a2e1a]">First name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Musa"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#1a2e1a]">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Aliyu"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
                />
              </div>
            </div>

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

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#1a2e1a]">Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="08012345678"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
              />
            </div>

            {/* Farmer-only fields */}
            {formData.role === "Farmer" && (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#1a2e1a]">Farm name</label>
                  <input
                    type="text"
                    name="farmName"
                    placeholder="e.g. Green Acres Farm"
                    value={formData.farmName}
                    onChange={handleChange}
                    className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#1a2e1a]">State</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="e.g. Kaduna"
                      value={formData.state}
                      onChange={handleChange}
                      className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-[#1a2e1a]">LGA</label>
                    <input
                      type="text"
                      name="lga"
                      placeholder="e.g. Zaria"
                      value={formData.lga}
                      onChange={handleChange}
                      className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#1a2e1a]">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Min. 6 characters"
                value={formData.password}
                onChange={handleChange}
                className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2d7a2d] transition-colors"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#1a2e1a]">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
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
                  <Loader2 size={16} className="animate-spin" /> Creating account...
                </span>
              ) : "Create account"}
            </button>

          </form>

          <p className="text-xs text-center text-[#888]">
            By registering, you agree to our{" "}
            <Link to="/terms" className="text-[#2d7a2d] hover:underline">Terms</Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#2d7a2d] hover:underline">Privacy Policy</Link>.
          </p>

        </div>
      </div>
    </div>
  );
}