// src/components/Footer.jsx
import { Link } from "react-router-dom";

const footerLinks = {
  Platform: [
    { label: "Marketplace", to: "/marketplace" },
    { label: "AI Insights", to: "/ai-insights" },
    { label: "How It Works", to: "/how-it-works" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  Legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Security", to: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f0] px-6 lg:px-16 py-16">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-xl text-[#1a2e1a]">
            🌱 Agrosynth
          </div>
          <p className="text-[#666] text-sm leading-relaxed max-w-xs">
            Connecting farmers to markets with AI-powered insights.
          </p>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1a2e1a] text-base">{category}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[#666] text-sm hover:text-[#2d7a2d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#dde8dd] pt-8">
        <p className="text-center text-[#888] text-sm">
          © 2026 Agrosynth. All rights reserved.
        </p>
      </div>

    </footer>
  );
}