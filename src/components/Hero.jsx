import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f0] min-h-screen px-6 lg:px-16 py-16 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-[#e8f0e8] text-[#2d7a2d] text-sm font-medium px-4 py-2 rounded-full w-fit">
            🌱 AI-powered marketplace
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-3xl font-black text-[#1a2e1a] leading-tight">
            Connecting farmers <br />
            to markets with{" "}
            <span className="text-[#2d7a2d]">AI-powered insights</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#555] text-lg max-w-lg leading-relaxed">
            A secure agricultural marketplace where farmers sell directly to buyers
            while AI predicts crop prices and demand.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/register"
              className="bg-[#2d7a2d] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#256325] transition-colors"
            >
              Get started →
            </Link>
            <Link
              to="/marketplace"
              className="border border-[#1a2e1a] text-[#1a2e1a] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8f0e8] transition-colors"
            >
              Explore marketplace
            </Link>
          </div>

          {/* Voice onboarding note */}
          <p className="text-[#888] text-sm flex items-center gap-2">
            🎙️ Voice-guided onboarding available
          </p>
        </div>

        {/* Right Side */}
        <div className="relative">

          {/* Farm Image */}
          <div className="rounded-2xl overflow-hidden bg-[#f0e8d0]">
            <img
              src="/src/assets/farmtractor.jpg"
              alt="Farm field at sunset"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Price Prediction Floating Card */}
          <div className="absolute bottom-[-20px] right-4 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full text-orange-500 text-xl">
              📈
            </div>
            <div>
              <p className="text-xs text-[#888]">Price prediction</p>
              <p className="text-xl font-black text-[#1a2e1a]">₦2,450/kg</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}