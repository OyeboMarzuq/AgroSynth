// src/components/CTA.jsx
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#2d7a2d] px-6 lg:px-16 py-24 flex flex-col items-center justify-center text-center gap-8">
      
      {/* Heading */}
      <h2 className="text-4xl lg:text-6xl font-black text-white max-w-3xl leading-tight">
        Sell your harvest for the best price
      </h2>

      {/* Subtext */}
      <p className="text-green-100 text-lg max-w-xl leading-relaxed">
        Join thousands of farmers already using AI to maximize their earnings.
      </p>

      {/* Button */}
      <Link
        to="/register"
        className="bg-[#f0a500] text-[#1a2e1a] px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-[#e09400] transition-colors"
      >
        Start selling today →
      </Link>

    </section>
  );
}