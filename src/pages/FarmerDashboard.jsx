// src/pages/FarmerDashboard.jsx
import { useState } from "react";
import {
  Package, ShoppingCart, DollarSign, Brain,
  Plus, Camera, BarChart2, ClipboardList,
  Wallet, MapPin, ShieldCheck, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  {
    label: "Crops listed",
    value: "12",
    extra: "+3 this month",
    icon: Package,
  },
  {
    label: "Orders received",
    value: "47",
    extra: "+8 this week",
    icon: ShoppingCart,
  },
  {
    label: "Total revenue",
    value: "₦2.4M",
    extra: "+15%",
    icon: DollarSign,
  },
  {
    label: "AI predictions used",
    value: "28",
    extra: null,
    icon: Brain,
  },
];

const quickActions = [
  { label: "Add crop", icon: Plus, to: "/farmer/add-crop" },
  { label: "Upload photo", icon: Camera, to: "/farmer/upload" },
  { label: "AI prediction", icon: BarChart2, to: "/ai-insights" },
  { label: "View orders", icon: ClipboardList, to: "/farmer/orders" },
  { label: "Withdraw", icon: Wallet, to: "/farmer/withdraw" },
];

const recentOrders = [
  {
    id: "ORD-001",
    buyer: "Lagos Fresh Foods",
    crop: "Tomatoes",
    quantity: "200 kg",
    status: "Delivered",
    delivery: "Completed",
  },
  {
    id: "ORD-002",
    buyer: "Abuja Grocers",
    crop: "Maize",
    quantity: "500 kg",
    status: "In Transit",
    delivery: "Pending",
  },
  {
    id: "ORD-003",
    buyer: "Kano Traders",
    crop: "Groundnut",
    quantity: "150 kg",
    status: "Processing",
    delivery: "Pending",
  },
  {
    id: "ORD-004",
    buyer: "PH Markets",
    crop: "Yam",
    quantity: "300 kg",
    status: "Delivered",
    delivery: "Completed",
  },
  {
    id: "ORD-005",
    buyer: "Ibadan Foods Ltd",
    crop: "Cassava",
    quantity: "1000 kg",
    status: "Processing",
    delivery: "Pending",
  },
];

const myListings = [
  {
    id: 1,
    name: "Organic Tomatoes",
    location: "Kaduna, Nigeria",
    quantity: "500kg",
    price: "₦1,250/kg",
    verified: true,
  },
  {
    id: 2,
    name: "Fresh Maize",
    location: "Kaduna, Nigeria",
    quantity: "1000kg",
    price: "₦800/kg",
    verified: true,
  },
  {
    id: 3,
    name: "Groundnut",
    location: "Kaduna, Nigeria",
    quantity: "750kg",
    price: "₦1,800/kg",
    verified: false,
  },
];

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};


export default function FarmerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [activeTab, setActiveTab] = useState("overview");
  

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <Navbar />

      <div className="px-6 lg:px-16 py-10 flex flex-col gap-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-[#1a2e1a]">
            Farmer dashboard
          </h1>
          <p className="text-[#666] text-lg mt-1">
  Welcome back, {user?.fullname?.split(" ")[0]}. Here is your farm overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#888]">{stat.label}</p>
                <div className="bg-[#e8f0e8] w-10 h-10 rounded-xl flex items-center justify-center text-[#2d7a2d]">
                  <stat.icon size={18} />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-black text-[#1a2e1a]">
                  {stat.value}
                </p>
                {stat.extra && (
                  <p className="text-xs text-[#2d7a2d] font-semibold mb-1">
                    {stat.extra}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:bg-[#f5f5f0] transition-all"
            >
              <div className="bg-[#e8f0e8] w-12 h-12 rounded-xl flex items-center justify-center text-[#2d7a2d]">
                <action.icon size={20} />
              </div>
              <p className="text-sm font-semibold text-[#1a2e1a] text-center">
                {action.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <h2 className="text-xl font-black text-[#1a2e1a]">
              Recent orders
            </h2>
            <Link
              to="/farmer/orders"
              className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline"
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {["Order ID", "Buyer", "Crop", "Quantity", "Status", "Delivery"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-3 text-xs font-semibold text-[#888] uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr
                    key={order.id}
                    className={`border-b border-[#f0f0f0] hover:bg-[#f9fbf9] transition-colors ${
                      i === recentOrders.length - 1 ? "border-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1a2e1a]">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-[#555]">{order.buyer}</td>
                    <td className="px-6 py-4 text-[#555]">{order.crop}</td>
                    <td className="px-6 py-4 text-[#555]">{order.quantity}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#555]">{order.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* My Listings */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <h2 className="text-xl font-black text-[#1a2e1a]">My listings</h2>
            <Link
              to="/farmer/add-crop"
              className="bg-[#2d7a2d] text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-[#256325] transition-colors"
            >
              <Plus size={15} /> Add crop
            </Link>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {myListings.map((listing) => (
              <div
                key={listing.id}
                className="border border-[#e8f0e8] rounded-2xl p-4 flex flex-col gap-3 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1a2e1a] text-base">
                    {listing.name}
                  </h3>
                  {listing.verified && (
                    <span className="flex items-center gap-1 text-[#2d7a2d] text-xs font-semibold bg-[#e8f0e8] px-2 py-1 rounded-full">
                      <ShieldCheck size={11} /> Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[#888] text-xs">
                  <MapPin size={12} /> {listing.location}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs text-[#888]">Quantity</p>
                    <p className="text-sm font-bold text-[#1a2e1a]">
                      {listing.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#888]">Price</p>
                    <p className="text-sm font-bold text-[#f0a500]">
                      {listing.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}