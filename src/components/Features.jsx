// src/components/Features.jsx
import { ChartArea } from "lucide-react";
import { Cloud } from "lucide-react";
import { MonitorCloud } from "lucide-react";
import { CalendarSyncIcon } from "lucide-react";

  const features = [
  {
    icon: <ChartArea/>,
    title: "AI crop price prediction",
    description:
      "Get accurate price forecasts based on market data, weather, and regional demand.",
  },
  {
    icon: <Cloud/>,
    title: "Demand forecasting",
    description:
      "Know what buyers want before you plant. Plan your harvest with data-driven insights.",
  },
  {
    icon: <MonitorCloud/>,
    title: "Secure marketplace",
    description:
      "Every transaction is protected with escrow payments and verified farmer profiles.",
  },
  {
    icon: <CalendarSyncIcon/>,
    title: "Fraud protection",
    description:
      "AI-powered fraud detection keeps your money and crops safe from bad actors.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#f0f5f0] px-6 lg:px-16 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-black text-[#1a2e1a]">
          Built for farmers and buyers
        </h2>
        <p className="text-[#555] text-lg mt-4">
          Simple tools that help you sell more, buy smarter, and stay protected.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon Box */}
            <div className="bg-[#e8f0e8] w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#1a2e1a]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[#666] text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}