"use client";

import React, { useState } from "react";
import {
  Truck,
  Wrench,
  Fuel,
  Activity,
  Plus,
  Search,
  User,
  Gauge,
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

interface Vehicle {
  id: string;
  name: string;
  plate: string;
  type: "Heavy Semi" | "Medium Freight" | "Electric Cargo";
  driver: string;
  status: "Active" | "In Service" | "Idle" | "Offline";
  mileage: string;
  fuelLevel: number;
  lastService: string;
}

const mockVehicles: Vehicle[] = [
  {
    id: "1",
    name: "Volvo FH16 - Unit #101",
    plate: "TX-8921-TR",
    type: "Heavy Semi",
    driver: "Marcus Vance",
    status: "Active",
    mileage: "124,500 mi",
    fuelLevel: 82,
    lastService: "Jul 10, 2026",
  },
  {
    id: "2",
    name: "Freightliner Cascadia - Unit #104",
    plate: "CA-4029-FR",
    type: "Heavy Semi",
    driver: "Sarah Jenkins",
    status: "In Service",
    mileage: "98,200 mi",
    fuelLevel: 45,
    lastService: "Yesterday",
  },
  {
    id: "3",
    name: "Rivian Commercial Van - EV #03",
    plate: "NY-1029-[#]",
    type: "Electric Cargo",
    driver: "David Chen",
    status: "Active",
    mileage: "32,100 mi",
    fuelLevel: 94,
    lastService: "Jun 28, 2026",
  },
  {
    id: "4",
    name: "Isuzu NPR - Unit #208",
    plate: "IL-9921-IS",
    type: "Medium Freight",
    driver: "Unassigned",
    status: "Idle",
    mileage: "64,800 mi",
    fuelLevel: 60,
    lastService: "Jul 01, 2026",
  },
];

const fleetCompositionData = [
  { type: "Heavy Semi", count: 24 },
  { type: "Medium Freight", count: 18 },
  { type: "Electric Cargo", count: 12 },
  { type: "Sprinter Vans", count: 15 },
];

export default function FleetsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const getStatusStyle = (status: Vehicle["status"]) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "In Service":
        return "bg-rose-50 text-rose-600 border-rose-100";
      case "Idle":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "Offline":
        return "bg-gray-100 text-[#757575] border-gray-200";
    }
  };

  const filteredVehicles =
    selectedStatus === "All"
      ? mockVehicles
      : mockVehicles.filter((v) => v.status === selectedStatus);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#333] sm:text-3xl">
            Fleet Management
          </h1>
          <p className="mt-1 text-sm text-[#757575]">
            Monitor vehicle health, driver assignments, telemetry, and service
            schedules.
          </p>
        </div>

        <button className="flex h-11 items-center justify-center gap-2 self-start rounded-xl bg-[#333] px-4 text-sm font-semibold text-[#FEFEFE] sm:self-auto">
          <Plus size={18} />
          <span>Add New Vehicle</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Active Fleet
            </span>
            <div className="rounded-xl bg-[#E3DDFF]/60 p-2 text-[#856DF3]">
              <Truck size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">54 / 69</p>
          <p className="text-xs font-semibold text-emerald-600">
            78.2% Active Rate
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              In Service
            </span>
            <div className="rounded-xl bg-rose-50 p-2 text-rose-600">
              <Wrench size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">6 Vehicles</p>
          <p className="text-xs text-[#757575]">Scheduled maintenance</p>
        </div>

        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Avg. Fuel Level
            </span>
            <div className="rounded-xl bg-gray-100 p-2 text-[#333]">
              <Fuel size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">76.5%</p>
          <p className="text-xs font-semibold text-emerald-600">
            +2.1% efficiency
          </p>
        </div>

        <div className="space-y-2 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#757575]">
              Fleet Utilization
            </span>
            <div className="rounded-xl bg-[#E3DDFF]/60 p-2 text-[#856DF3]">
              <Activity size={18} />
            </div>
          </div>
          <p className="text-2xl font-bold text-[#333]">92.4%</p>
          <p className="text-xs text-[#757575]">Peak capacity</p>
        </div>
      </div>

      {/* Main Grid: Composition Chart & Search Controls */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Fleet Composition Chart */}
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm lg:col-span-1">
          <div>
            <h3 className="text-base font-bold text-[#333]">
              Fleet Composition
            </h3>
            <p className="text-xs text-[#757575]">
              Vehicle inventory breakdown by class
            </p>
          </div>

          <div className="h-96 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fleetCompositionData} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#f0f0f0"
                />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="type"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#757575" }}
                  width={95}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FEFEFE",
                    borderRadius: "12px",
                    border: "1px solid #f0f0f0",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="count" fill="#856DF3" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vehicle List Filter & Cards */}
        <div className="space-y-4 lg:col-span-2">
          {/* Controls Bar */}
          <div className="flex flex-col items-stretch justify-between gap-3 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-3 shadow-sm sm:flex-row sm:items-center">
            <div className="relative flex-1 rounded-lg bg-[#F0F0F0]">
              <Search
                size={16}
                className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#757575]"
              />
              <input
                type="text"
                placeholder="Search vehicle name or plate..."
                className="h-10 w-full rounded-xl border border-transparent bg-gray-50/60 pr-4 pl-10 text-xs text-[#333] outline-none focus:border-[#856DF3] focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {["All", "Active", "In Service", "Idle"].map((status) => (
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

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm transition-all hover:border-[#E3DDFF]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#333]">
                      {vehicle.name}
                    </h4>
                    <p className="mt-0.5 font-mono text-xs text-[#757575]">
                      {vehicle.plate}
                    </p>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusStyle(vehicle.status)}`}
                  >
                    {vehicle.status}
                  </span>
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-[#757575]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-[#333]" />
                      Driver:
                    </span>
                    <span className="font-semibold text-[#333]">
                      {vehicle.driver}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Gauge size={14} className="text-[#333]" />
                      Odometer:
                    </span>
                    <span className="font-semibold text-[#333]">
                      {vehicle.mileage}
                    </span>
                  </div>
                </div>

                {/* Fuel/Battery Gauge Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#757575]">Fuel / Charge Level</span>
                    <span className="font-bold text-[#856DF3]">
                      {vehicle.fuelLevel}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#856DF3]"
                      style={{ width: `${vehicle.fuelLevel}%` }}
                    />
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
