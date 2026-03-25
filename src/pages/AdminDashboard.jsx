// src/pages/AdminDashboard.jsx
import {
  Users, Sprout, ShoppingCart, AlertTriangle,
  UserCheck, Eye, Ban, ChevronRight,
  ShieldCheck, ShieldAlert, MapPin, CheckCircle2, XCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { label: "Total users", value: "1,247", extra: "+89 this month", extraColor: "text-[#2d7a2d]", icon: Users },
  { label: "Active farmers", value: "342", extra: "+12%", extraColor: "text-[#2d7a2d]", icon: Sprout },
  { label: "Total orders", value: "3,891", extra: null, icon: ShoppingCart },
  { label: "Suspicious accounts", value: "7", extra: "Needs review", extraColor: "text-red-500", icon: AlertTriangle },
];

const quickActions = [
  { label: "Verify farmers", icon: UserCheck, to: "/admin/verify" },
  { label: "Monitor orders", icon: Eye, to: "/admin/orders" },
  { label: "Fraud detection", icon: AlertTriangle, to: "/admin/fraud" },
  { label: "Manage bans", icon: Ban, to: "/admin/bans" },
];

const users = [
  { id: 1, name: "Musa Aliyu", email: "musa@email.com", role: "Farmer", location: "Kaduna", status: "Verified", joined: "Jan 12, 2026" },
  { id: 2, name: "Bola Adeyemi", email: "bola@email.com", role: "Buyer", location: "Lagos", status: "Active", joined: "Jan 15, 2026" },
  { id: 3, name: "Chukwu Emeka", email: "emeka@email.com", role: "Farmer", location: "Enugu", status: "Verified", joined: "Feb 2, 2026" },
  { id: 4, name: "Aminu Kano", email: "aminu@email.com", role: "Farmer", location: "Kano", status: "Pending", joined: "Feb 10, 2026" },
  { id: 5, name: "Terver Iorliam", email: "terver@email.com", role: "Buyer", location: "Benue", status: "Active", joined: "Mar 1, 2026" },
  { id: 6, name: "Unknown User", email: "xx123@temp.com", role: "Buyer", location: "Unknown", status: "Suspicious", joined: "Mar 20, 2026" },
];

const recentOrders = [
  { id: "ORD-201", farmer: "Musa Aliyu", buyer: "Lagos Fresh Foods", crop: "Tomatoes", amount: "₦250,000", status: "Delivered" },
  { id: "ORD-202", farmer: "Chukwu Emeka", buyer: "Abuja Grocers", crop: "Maize", amount: "₦400,000", status: "In Transit" },
  { id: "ORD-203", farmer: "Aminu Kano", buyer: "Kano Traders", crop: "Groundnut", amount: "₦270,000", status: "Processing" },
  { id: "ORD-204", farmer: "Terver Iorliam", buyer: "PH Markets", crop: "Cassava", amount: "₦550,000", status: "Delivered" },
];

const flaggedAccounts = [
  { id: 1, name: "Unknown User", email: "xx123@temp.com", reason: "Fake account suspected", risk: "High" },
  { id: 2, name: "John Doe", email: "johndoe99@mail.com", reason: "Multiple failed payments", risk: "Medium" },
  { id: 3, name: "Test Account", email: "test@test.com", reason: "Bot-like activity detected", risk: "High" },
];

const statusColors = {
  Verified: "bg-green-100 text-green-700",
  Active: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Suspicious: "bg-red-100 text-red-700",
  Delivered: "bg-green-100 text-green-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

const riskColors = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col">
      <Navbar />

      <div className="px-6 lg:px-16 py-10 flex flex-col gap-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-[#1a2e1a]">Admin dashboard</h1>
          <p className="text-[#666] text-lg mt-1">Platform overview and management tools.</p>
        </div>

        {/* Stats */}
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
                  <p className={`text-xs font-semibold mb-1 ${stat.extraColor}`}>{stat.extra}</p>
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

        {/* User Management */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <div>
              <h2 className="text-xl font-black text-[#1a2e1a]">User management</h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-[#888]">1,247 total users</p>
              <Link to="/admin/users"
                className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline">
                View all <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {["Name", "Email", "Role", "Location", "Status", "Joined", "Action"].map((h) => (
                    <th key={h} className="text-left px-6 py-3 text-xs font-semibold text-[#888] uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user.id}
                    className={`border-b border-[#f0f0f0] hover:bg-[#f9fbf9] transition-colors
                      ${i === users.length - 1 ? "border-0" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#2d7a2d] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <p className="font-semibold text-[#1a2e1a]">{user.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#555]">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${user.role === "Farmer" ? "bg-[#e8f0e8] text-[#2d7a2d]" : "bg-blue-50 text-blue-700"}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-[#555]">
                        <MapPin size={12} /> {user.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[user.status]}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#555]">{user.joined}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="text-[#2d7a2d] hover:text-[#256325]">
                          <CheckCircle2 size={18} />
                        </button>
                        <button className="text-red-400 hover:text-red-600">
                          <XCircle size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <h2 className="text-xl font-black text-[#1a2e1a]">Recent orders</h2>
            <Link to="/admin/orders"
              className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f0f0f0]">
                  {["Order ID", "Farmer", "Buyer", "Crop", "Amount", "Status"].map((h) => (
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
                    <td className="px-6 py-4 text-[#555]">{order.buyer}</td>
                    <td className="px-6 py-4 text-[#555]">{order.crop}</td>
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

        {/* Flagged Accounts */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-black text-[#1a2e1a]">Flagged accounts</h2>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                {flaggedAccounts.length} alerts
              </span>
            </div>
            <Link to="/admin/fraud"
              className="text-sm text-[#2d7a2d] font-semibold flex items-center gap-1 hover:underline">
              View all <ChevronRight size={14} />
            </Link>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {flaggedAccounts.map((account) => (
              <div key={account.id}
                className="flex items-center justify-between border border-red-100 bg-red-50 rounded-2xl p-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center text-red-500">
                    <ShieldAlert size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a2e1a] text-sm">{account.name}</p>
                    <p className="text-xs text-[#888]">{account.email}</p>
                    <p className="text-xs text-red-500 mt-1">{account.reason}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${riskColors[account.risk]}`}>
                    {account.risk} risk
                  </span>
                  <button className="border border-red-300 text-red-500 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-red-100 transition-colors">
                    Ban user
                  </button>
                  <button className="border border-[#dde8dd] text-[#555] px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-[#e8f0e8] transition-colors">
                    Review
                  </button>
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