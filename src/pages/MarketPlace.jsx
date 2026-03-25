// src/pages/Marketplace.jsx
import { useState } from "react";
import { Search, MapPin, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const crops = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    location: "Kaduna, Nigeria",
    quantity: 500,
    price: "₦1,250/kg",
    farmer: "Musa Aliyu",
    verified: true,
    icon: "🍅",
  },
  {
    id: 2,
    name: "Fresh Maize",
    category: "Grains",
    location: "Enugu, Nigeria",
    quantity: 1000,
    price: "₦800/kg",
    farmer: "Chukwu Emeka",
    verified: true,
    icon: "🌽",
  },
  {
    id: 3,
    name: "Cassava Tubers",
    category: "Tubers",
    location: "Benue, Nigeria",
    quantity: 2000,
    price: "₦550/kg",
    farmer: "Terver Iorliam",
    verified: true,
    icon: "🥔",
  },
  {
    id: 4,
    name: "Groundnut",
    category: "Nuts",
    location: "Kano, Nigeria",
    quantity: 750,
    price: "₦1,800/kg",
    farmer: "Aminu Kano",
    verified: true,
    icon: "🥜",
  },
  {
    id: 5,
    name: "Sweet Plantain",
    category: "Fruits",
    location: "Lagos, Nigeria",
    quantity: 300,
    price: "₦950/kg",
    farmer: "Bola Adeyemi",
    verified: false,
    icon: "🍌",
  },
  {
    id: 6,
    name: "Yam Tubers",
    category: "Tubers",
    location: "Oyo, Nigeria",
    quantity: 1500,
    price: "₦1,100/kg",
    farmer: "Seun Afolabi",
    verified: true,
    icon: "🫚",
  },
  {
    id: 7,
    name: "Fresh Pepper",
    category: "Vegetables",
    location: "Plateau, Nigeria",
    quantity: 200,
    price: "₦2,200/kg",
    farmer: "Danladi Musa",
    verified: true,
    icon: "🌶️",
  },
  {
    id: 8,
    name: "Soybean",
    category: "Grains",
    location: "Borno, Nigeria",
    quantity: 800,
    price: "₦1,400/kg",
    farmer: "Ibrahim Shettima",
    verified: false,
    icon: "🫘",
  },
];

const categories = ["All", "Vegetables", "Grains", "Tubers", "Fruits", "Nuts"];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = crops.filter((crop) => {
    const matchesCategory =
      activeCategory === "All" || crop.category === activeCategory;
    const matchesSearch =
      crop.name.toLowerCase().includes(search.toLowerCase()) ||
      crop.location.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="px-6 lg:px-16 py-12">
        <h1 className="text-4xl lg:text-5xl font-black text-[#1a2e1a]">
          Marketplace
        </h1>
        <p className="text-[#666] text-lg mt-2">
          Browse fresh crops from verified farmers across the country.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="px-6 lg:px-16 flex flex-col gap-5 mb-8">
        {/* Search Bar */}
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aaa]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search crops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-[#dde8dd] rounded-2xl pl-11 pr-4 py-4 text-sm text-[#1a2e1a] placeholder-[#aaa] focus:outline-none focus:border-[#2d7a2d] transition-colors"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors
                ${activeCategory === cat
                  ? "bg-[#2d7a2d] text-white"
                  : "bg-white border border-[#dde8dd] text-[#555] hover:bg-[#e8f0e8]"
                }`}
            >
              {cat}
            </button>
          ))}

          {/* Filter Button */}
          <button className="ml-auto flex items-center gap-2 border border-[#dde8dd] bg-white px-4 py-2 rounded-full text-sm font-semibold text-[#555] hover:bg-[#e8f0e8] transition-colors">
            <SlidersHorizontal size={15} />
            Filter
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="px-6 lg:px-16 mb-4">
        <p className="text-sm text-[#888]">
          Showing <span className="font-bold text-[#1a2e1a]">{filtered.length}</span> results
        </p>
      </div>

      {/* Crop Cards Grid */}
      <div className="px-6 lg:px-16 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((crop) => (
            <div
              key={crop.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Area */}
              <div className="bg-[#e8f0e8] h-48 flex items-center justify-center text-7xl">
                {crop.icon}
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3">
                {/* Name + Verified */}
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-[#1a2e1a] text-lg">
                    {crop.name}
                  </h3>
                  {crop.verified && (
                    <span className="flex items-center gap-1 text-[#2d7a2d] text-xs font-semibold bg-[#e8f0e8] px-2 py-1 rounded-full">
                      <ShieldCheck size={12} />
                      Verified
                    </span>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-[#888] text-sm">
                  <MapPin size={13} />
                  {crop.location}
                </div>

                {/* Quantity + Price */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs text-[#888]">Quantity</p>
                    <p className="text-sm font-bold text-[#1a2e1a]">
                      {crop.quantity}kg
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#888]">AI predicted</p>
                    <p className="text-sm font-bold text-[#f0a500]">
                      {crop.price}
                    </p>
                  </div>
                </div>

                {/* Farmer */}
                <div className="flex items-center gap-2 border-t border-[#f0f0f0] pt-3">
                  <div className="bg-[#2d7a2d] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">
                    {crop.farmer.charAt(0)}
                  </div>
                  <p className="text-sm text-[#555]">{crop.farmer}</p>
                </div>

                {/* CTA Button */}
                <button className="bg-[#2d7a2d] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#256325] transition-colors mt-1">
                  Place order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 flex flex-col items-center justify-center py-24 gap-4">
            <Search size={40} className="text-[#ccc]" />
            <p className="text-[#888] font-semibold">No crops found</p>
            <p className="text-[#aaa] text-sm">Try a different search or category</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}