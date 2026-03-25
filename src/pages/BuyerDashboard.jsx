// src/pages/BuyerDashboard.jsx
import { useState } from "react";
import {
  ShoppingCart, Truck, DollarSign, Heart,
  Search, Clock, ChevronRight, MapPin,
  ShieldCheck, Package, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { label: "Orders placed", value: "15", extra: "+2 this week", icon: ShoppingCart },
  { label: "In transit", value: "3", extra: null, icon: Truck },
  { label: "Total purchases", value: "₦1.8M", extra: null, icon: DollarSign },
  { label: "Favorite farmers", value: "8", extra: null, icon: Heart },
];

const quickActions = [
  { label: "Browse marketplace", icon: Search, to: "/marketplace" },
  { label: "Track orders", icon: Truck, to: "/buyer/orders" },
  { label: "Purchase history", icon: Clock, to: "/buyer/history" },
  { label: "Favorite farmers", icon: Heart, to: "/buyer/favorites" },
];

const trackingSteps = [
  { label: "Order placed", icon: ShoppingCart, done: true },
  { label: "Payment secured", icon: DollarSign, done: true },
  { label: "Farmer preparing", icon: Package, done: true },
  { label: "In transit", icon: Truck, done: false },
  { label: "Delivered", icon: CheckCircle2, done: false },
];

const recentOrders = [
  {
    id: "ORD-101",
    farmer: "Musa Aliyu",
    crop: "Tomatoes",
    quantity: "200 kg",
    amount: "₦250,000",
    status: "Delivered",
  },
  {
    id: "ORD-102",
    farmer: "Chukwu Emeka",
    crop: "Maize",
    quantity: "500 kg",
    amount: "₦400,000",
    status: "In Transit",
  },
  {
    id: "ORD-103",
    farmer: "Terver Iorliam",
    crop: "Cassava",
    quantity: "1000 kg",
    amount: "₦550,000",
    status: "Processing",
  },
  {
    id: "ORD-104",
    farmer: "Aminu Kano",
    crop: "Groundnut",
    quantity: "150 kg",
    amount: "₦270,000",
    status: "Delivered",
  },
];

const favoriteFarmers = [
  { id: 1, name: "Musa Aliyu", location: "Kaduna, Nigeria", crops: "Tomatoes, Pepper", verified: true },
  { id: 2, name: "Chukwu Emeka", location: "Enugu, Nigeria", crops: "Maize, Soybean", verified: true },
  { id: 3, name: "Terver Iorliam", location: "Benue, Nigeria", crops: "Cassava, Yam", verified: true },
];

const statusColors = {
  Delivered: "bg-green-100 text-green-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <Navbar />

      <div className="px-6 lg:px-16 py-10 flex flex-col gap-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-[#1a2e1a]">
            Buyer dashboard
          </h1>
          <p className="text-[#666] text-lg mt-1">
            Welcome back. Track your orders and discover fresh produce.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#888]">{stat.label}</p>
                <div className="bg-[#e8f0e8] w-10 h-10 rounded-xl flex items-center justify-center text-[#2d7a2d]">
                  <stat.icon size={18} />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-black text-[#1a2e1a]">{stat.value}</p>
                {stat.extra && (
                  <p className="text-xs text-[#2d7a2d] font-semibold mb-1">{stat.extra}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.to}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:bg-[#f5f5f0] transition-all">
              <div className="bg-[#e8f0e8] w-12 h-12 rounded-xl flex items-center justify-center text-[#2d7a2d]">
                <action.icon size={20} />
              </div>
              <p className="text-sm font-semibold text-[#1a2e1a] text-center">{action.label}</p>
            </Link>
          ))}
        </div>

        {/* Order Tracking */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-[#1a2e1a]">
              Order tracking — ORD-102
            </h2>
            <Link to="/buyer/orders"
              className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline">
              View all <ChevronRight size={14} />
            </Link>
          </div>

          {/* Tracking Steps */}
          <div className="flex items-center justify-between relative">
            {trackingSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center gap-2 z-10 flex-1">
                {/* Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center
                  ${step.done
                    ? "bg-[#2d7a2d] text-white"
                    : "bg-[#e8f0e8] text-[#aaa]"
                  }`}>
                  <step.icon size={18} />
                </div>

                {/* Connector Line */}
                {i < trackingSteps.length - 1 && (
                  <div className={`absolute h-0.5 top-6 z-0
                    ${step.done ? "bg-[#2d7a2d]" : "bg-[#dde8dd]"}`}
                    style={{
                      left: `${(i + 0.8) * (100 / trackingSteps.length)}%`,
                      width: `${100 / trackingSteps.length - 10}%`,
                    }}
                  />
                )}

                {/* Label */}
                <p className={`text-xs font-semibold text-center max-w-16
                  ${step.done ? "text-[#1a2e1a]" : "text-[#aaa]"}`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Order Info */}
          <div className="bg-[#f5f5f0] rounded-xl p-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-[#888]">Crop</p>
              <p className="text-sm font-bold text-[#1a2e1a]">Maize</p>
            </div>
            <div>
              <p className="text-xs text-[#888]">Quantity</p>
              <p className="text-sm font-bold text-[#1a2e1a]">500 kg</p>
            </div>
            <div>
              <p className="text-xs text-[#888]">Amount</p>
              <p className="text-sm font-bold text-[#f0a500]">₦400,000</p>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <h2 className="text-xl font-black text-[#1a2e1a]">Recent orders</h2>
            <Link to="/buyer/orders"
              className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline">
              View all <ChevronRight size={14} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {["Order ID", "Farmer", "Crop", "Quantity", "Amount", "Status"].map((h) => (
                    <th key={h} className="text-left px-6 py-3 text-xs font-semibold text-[#888] uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={order.id}
                    className={`border-b border-[#f0f0f0] hover:bg-[#f9fbf9] transition-colors
                      ${i === recentOrders.length - 1 ? "border-0" : ""}`}>
                    <td className="px-6 py-4 font-semibold text-[#1a2e1a]">{order.id}</td>
                    <td className="px-6 py-4 text-[#555]">{order.farmer}</td>
                    <td className="px-6 py-4 text-[#555]">{order.crop}</td>
                    <td className="px-6 py-4 text-[#555]">{order.quantity}</td>
                    <td className="px-6 py-4 font-semibold text-[#1a2e1a]">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Favorite Farmers */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <h2 className="text-xl font-black text-[#1a2e1a]">Favorite farmers</h2>
            <Link to="/buyer/favorites"
              className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteFarmers.map((farmer) => (
              <div key={farmer.id}
                className="border border-[#e8f0e8] rounded-2xl p-4 flex flex-col gap-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="bg-[#2d7a2d] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                    {farmer.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-[#1a2e1a] text-sm">{farmer.name}</p>
                      {farmer.verified && <ShieldCheck size={13} className="text-[#2d7a2d]" />}
                    </div>
                    <div className="flex items-center gap-1 text-[#888] text-xs">
                      <MapPin size={11} /> {farmer.location}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#888]">Crops: <span className="text-[#555] font-medium">{farmer.crops}</span></p>
                <button className="border border-[#2d7a2d] text-[#2d7a2d] py-2 rounded-xl text-xs font-semibold hover:bg-[#e8f0e8] transition-colors">
                  View listings
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}