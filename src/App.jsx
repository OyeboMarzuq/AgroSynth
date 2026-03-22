// import { useState } from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/hero';
// import Features from './components/Features';
// import HowItWorks from './components/howItWorks';
// import CTA from './components/Cta';
// import Footer from './components/footer';
// import './index.css'

// function App() {

//   return (
//      <div>
//        <Navbar />
//        <Hero />
//        <Features />
//        <HowItWorks />
//        <CTA />
//        <Footer />
//     </div>
//   );
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HowItWorksPage from "./pages/HowItWorksPage";
import AIInsights from "./pages/AiInsights";




function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <CTA />
            <Footer />
          </div>
        }
      />

      {/* Login Page */}
      <Route path="/login" element={<Login />} />
       {/* Signup Page */}
  <Route path="/register" element={<Register />} />


     {/* how it works Page not the on eon landing page */}
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/ai-insights" element={<AIInsights />} />

        </Routes>
      );
}

export default App;