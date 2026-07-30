"use client";

import { useState } from "react";
import {
  Users,
  ShieldCheck,
  Clock,
  Award,
  Search,
  Plus,
  Phone,
  Star,
  Truck,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  Driver,
  driverLeaderboardData,
  mockDrivers,
} from "@/app/data/driversData";

export default function DriversPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const getStatusBadge = (status: Driver["status"]) => {
    switch (status) {
      case "On Duty":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "On Break":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "Off Duty":
        return "bg-gray-100 text-[#757575] border-gray-200";
    }
  };

  const filteredDrivers =
    selectedStatus === "All"
      ? mockDrivers
      : mockDrivers.filter((d) => d.status === selectedStatus);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#333] sm:text-3xl">
            Driver Management
          </h1>
          <p className="mt-1 text-sm text-[#757575]">
            Track driver safety scores, dispatch availability, and duty logs.
          </p>
        </div>

        <button className="flex h-11 items-center justify-center gap-2 self-start rounded-xl bg-[#333] px-4 text-sm font-semibold text-[#FEFEFE] sm:self-auto">
          <Plus size={18} />
          <span>Add New Driver</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Total Roster
            </span>
            <div className="rounded-xl bg-[#E3DDFF]/60 p-2 text-[#856DF3]">
              <Users size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">48 Drivers</p>
          <p className="text-xs font-semibold text-emerald-600">
            100% Certified
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Active On Duty
            </span>
            <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600">
              <Clock size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">32 Active</p>
          <p className="text-xs text-[#757575]">66.7% Fleet Coverage</p>
        </div>

        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Avg Safety Score
            </span>
            <div className="rounded-xl bg-[#E3DDFF]/60 p-2 text-[#856DF3]">
              <ShieldCheck size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">96.2 / 100</p>
          <p className="text-xs font-semibold text-emerald-600">
            +1.8 pts this month
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Top Performer
            </span>
            <div className="rounded-xl bg-amber-50 p-2 text-amber-500">
              <Award size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">Elena Rostova</p>
          <p className="text-xs text-[#757575]">99 Safety Rating</p>
        </div>
      </div>

      {/* Main Grid: Performance Leaderboard & Driver List */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Leaderboard Chart */}
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm lg:col-span-1">
          <div>
            <h3 className="text-base font-bold text-[#333]">Safety Ratings</h3>
            <p className="text-xs text-[#757575]">
              Top drivers by safety index score
            </p>
          </div>

          <div className="h-96 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={driverLeaderboardData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#757575" }}
                />
                <YAxis
                  domain={[80, 100]}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#757575" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FEFEFE",
                    borderRadius: "12px",
                    border: "1px solid #f0f0f0",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="score"
                  fill="#856DF3"
                  radius={[6, 6, 0, 0]}
                  name="Safety Index"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Drivers Cards Grid */}
        <div className="space-y-4 lg:col-span-2">
          {/* Filters Bar */}
          <div className="flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-3 shadow-sm sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#757575]"
              />
              <input
                type="text"
                placeholder="Search driver by name or phone..."
                className="h-10 w-full rounded-xl border border-transparent bg-gray-50/60 pr-4 pl-10 text-xs text-[#333] outline-none focus:border-[#856DF3] focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              {["All", "On Duty", "On Break", "Off Duty"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedStatus === status
                      ? "bg-[#333333] text-white"
                      : "text-[#757575] hover:bg-gray-100"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredDrivers.map((driver) => (
              <div
                key={driver.id}
                className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm transition-all hover:border-[#E3DDFF]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E3DDFF] text-sm font-bold text-[#856DF3]">
                      {driver.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#333]">
                        {driver.name}
                      </h4>
                      <p className="text-xs text-[#757575]">
                        {driver.licenseClass}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusBadge(driver.status)}`}
                  >
                    {driver.status}
                  </span>
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-[#757575]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Truck size={14} className="text-[#333]" />
                      Assigned Vehicle:
                    </span>
                    <span className="font-semibold text-[#333]">
                      {driver.assignedVehicle}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone size={14} className="text-[#333]" />
                      Contact:
                    </span>
                    <span className="font-medium text-[#333]">
                      {driver.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100/60 pt-2 text-xs">
                  <span className="text-[#757575]">
                    Deliveries:{" "}
                    <strong className="text-[#333]">
                      {driver.totalDeliveries}
                    </strong>
                  </span>
                  <div className="flex items-center gap-1 font-bold text-[#856DF3]">
                    <Star size={14} className="fill-[#856DF3]" />
                    <span>{driver.safetyScore} / 100</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
