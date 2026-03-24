import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Loader } from "lucide-react";
import { CloudCheckIcon } from "lucide-react";
import { Crop } from "lucide-react";

const crops = [
  "Maize", "Yam", "Cassava", "Tomatoes", "Rice",
  "Sorghum", "Millet", "Groundnut", "Soybean", "Pepper",
  "Onion", "Plantain", "Cocoa", "Palm Oil", "Cowpea",
];

export default function AIInsights() {
  const [formData, setFormData] = useState({ crop: "", location: "", quantity: "", season: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePredict = async () => {
    if (!formData.crop || !formData.location || !formData.quantity) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `You are an agricultural market AI for Nigeria. A farmer wants to sell ${formData.quantity}kg of ${formData.crop} in ${formData.location} during ${formData.season || "current season"}.

Respond ONLY in this exact JSON format with no extra text:
{
  "predictedPrice": "₦X,XXX/kg",
  "totalValue": "₦X,XXX,XXX",
  "demandLevel": "High|Medium|Low",
  "bestTimeToSell": "e.g. In 2 weeks",
  "marketTrend": "Rising|Stable|Falling",
  "confidence": "X%",
  "insight": "One sentence market insight",
  "tips": ["tip 1", "tip 2", "tip 3"]
}`
            }
          ]
        })
      });

      const data = await response.json();
      const text = data.content[0].text;
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
    } catch (err) {
      console.error(err);
      alert("Prediction failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="px-6 lg:px-16 py-12">
        <div className="bg-[#e8f0e8] text-[#2d7a2d] text-sm font-medium flex gap-2 px-4 py-2 rounded-full w-fit mb-4">
         <span><CloudCheckIcon/></span>  AI-powered insights
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-[#1a2e1a]">
          AI price prediction
        </h1>
        <p className="text-[#666] text-lg mt-2">
          Get AI-powered price forecasts to sell your crops at the best time.
        </p>
      </div>

      {/* Main Grid */}
      <div className="px-6 lg:px-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">

        {/* Left Form */}
        <div className="bg-white rounded-2xl p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#e8f0e8] w-11 h-11 rounded-xl flex items-center justify-center text-xl"> <Crop/></div>
            <h2 className="text-xl font-black flex gap-1 text-[#1a2e1a]">Enter crop details</h2>
          </div>

          {/* Crop Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#1a2e1a]">Crop type</label>
            <select name="crop" value={formData.crop} onChange={handleChange}
              className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm bg-[#f9fbf9] focus:outline-none focus:border-[#2d7a2d] transition-colors">
              <option value="">Select a crop</option>
              {crops.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#1a2e1a]">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange}
              placeholder="e.g. Kaduna, Nigeria"
              className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm bg-[#f9fbf9] focus:outline-none focus:border-[#2d7a2d] transition-colors" />
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#1a2e1a]">Quantity (kg)</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange}
              placeholder="e.g. 500"
              className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm bg-[#f9fbf9] focus:outline-none focus:border-[#2d7a2d] transition-colors" />
          </div>

          {/* Season */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#1a2e1a]">Current season</label>
            <select name="season" value={formData.season} onChange={handleChange}
              className="border border-[#dde8dd] rounded-xl px-4 py-3 text-sm bg-[#f9fbf9] focus:outline-none focus:border-[#2d7a2d] transition-colors">
              <option value="">Select season</option>
              <option>Dry season</option>
              <option>Rainy season</option>
              <option>Harmattan</option>
            </select>
          </div>

          <button onClick={handlePredict} disabled={loading}
            className="bg-[#2d7a2d] disabled:bg-[#88bb88] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#256325] transition-colors">
            {loading ? " Predicting..." : "Predict price →"}
          </button>
        </div>

        {/* Right Result */}
        <div className="bg-white rounded-2xl p-8 flex flex-col gap-6">
          {!result && !loading && (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center h-full py-16">
              <div className="bg-[#e8f0e8] w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"> <CloudCheckIcon/></div>
              <h3 className="text-xl font-black text-[#1a2e1a]">Enter crop details to get started</h3>
              <p className="text-[#888] text-sm max-w-xs leading-relaxed">
                Fill in the form on the left and our AI will predict the best price for your crop.
              </p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center h-full py-16">
              <div className="text-5xl animate-bounce">
                <span> <Loader/> </span>
              </div>
              <h3 className="text-lg font-bold text-[#1a2e1a]">Analyzing market data...</h3>
              <p className="text-[#888] text-sm">Checking current prices and demand trends</p>
            </div>
          )}

          {result && (
            <div className="flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black text-[#1a2e1a]">Prediction result</h3>
                <span className="bg-[#e8f0e8] text-[#2d7a2d] text-xs font-semibold px-3 py-1 rounded-full">
                  {result.confidence} confidence
                </span>
              </div>

              {/* Price Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f5f5f0] rounded-2xl p-4">
                  <p className="text-xs text-[#888] mb-1">Predicted price</p>
                  <p className="text-2xl font-black text-[#1a2e1a]">{result.predictedPrice}</p>
                </div>
                <div className="bg-[#f5f5f0] rounded-2xl p-4">
                  <p className="text-xs text-[#888] mb-1">Total value</p>
                  <p className="text-2xl font-black text-[#2d7a2d]">{result.totalValue}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#f5f5f0] rounded-xl p-3 text-center">
                  <p className="text-xs text-[#888] mb-1">Demand</p>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    result.demandLevel === "High" ? "bg-green-100 text-green-700" :
                    result.demandLevel === "Medium" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"}`}>
                    {result.demandLevel}
                  </span>
                </div>
                <div className="bg-[#f5f5f0] rounded-xl p-3 text-center">
                  <p className="text-xs text-[#888] mb-1">Trend</p>
                  <p className={`text-xs font-bold ${
                    result.marketTrend === "Rising" ? "text-green-600" :
                    result.marketTrend === "Stable" ? "text-yellow-600" : "text-red-600"}`}>
                    {result.marketTrend === "Rising" ? <CloudCheckIcon/> : result.marketTrend === "Stable" ? "➡️" : "📉"} {result.marketTrend}
                  </p>
                </div>
                <div className="bg-[#f5f5f0] rounded-xl p-3 text-center">
                  <p className="text-xs text-[#888] mb-1">Best time</p>
                  <p className="text-xs font-bold text-[#1a2e1a]">{result.bestTimeToSell}</p>
                </div>
              </div>

              {/* Insight */}
              <div className="bg-[#e8f0e8] rounded-xl p-4 flex gap-3">
                <span> <CloudCheckIcon/></span>
                <p className="text-sm text-[#2d5a2d] leading-relaxed">{result.insight}</p>
              </div>

              {/* Tips */}
              <div className="flex flex-col gap-3">
                <p className="text-sm font-bold text-[#1a2e1a]">Selling tips</p>
                {result.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-[#2d7a2d] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                    <p className="text-sm text-[#555] leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <button onClick={() => { setResult(null); setFormData({ crop: "", location: "", quantity: "", season: "" }); }}
                className="border border-[#dde8dd] text-[#555] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f5f5f0] transition-colors">
                Run another prediction
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}