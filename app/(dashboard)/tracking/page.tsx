"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Truck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Package,
  Navigation,
  ChevronRight,
  Filter,
} from "lucide-react";

interface ShipmentTracker {
  id: string;
  trackingNo: string;
  sender: string;
  destination: string;
  carrier: string;
  eta: string;
  status: "In Transit" | "Delivered" | "Delayed" | "Pending";
  currentLocation: string;
  progressPercent: number;
}

const mockShipments: ShipmentTracker[] = [
  {
    id: "1",
    trackingNo: "SH-982341-NY",
    sender: "New York Hub A",
    destination: "Boston Distribution Ctr",
    carrier: "Express Cargo #12",
    eta: "Today, 04:30 PM",
    status: "In Transit",
    currentLocation: "Hartford, CT (I-91 N)",
    progressPercent: 70,
  },
  {
    id: "2",
    trackingNo: "SH-441209-LA",
    sender: "Los Angeles Port",
    destination: "Phoenix Storage Facility",
    carrier: "Westline Freight #08",
    eta: "Tomorrow, 10:00 AM",
    status: "Delayed",
    currentLocation: "Palm Springs Rest Stop (Weather Hold)",
    progressPercent: 40,
  },
  {
    id: "3",
    trackingNo: "SH-102938-CHI",
    sender: "Chicago Depot",
    destination: "Detroit Terminal",
    carrier: "Midwest Transit #04",
    eta: "Jul 29, 02:15 PM",
    status: "Delivered",
    currentLocation: "Delivered to Dock 4",
    progressPercent: 100,
  },
];

export default function TrackingPage() {
  const [selectedShipment, setSelectedShipment] = useState<ShipmentTracker>(
    mockShipments[0],
  );

  const getStatusBadge = (status: ShipmentTracker["status"]) => {
    switch (status) {
      case "In Transit":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Delivered":
        return "bg-emerald-50 text-emerald-600";
      case "Delayed":
        return "bg-rose-50 text-rose-600";
      case "Pending":
        return "bg-amber-50 text-amber-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#333] sm:text-3xl">
            Live Shipment Tracking
          </h1>
          <p className="mt-1 text-sm text-[#757575]">
            Real-time GPS positioning, carrier status updates, and route
            progress.
          </p>
        </div>

        {/* Global Search Input */}
        <div className="relative w-full sm:w-80">
          <Search
            size={18}
            className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#757575]"
          />
          <input
            type="text"
            placeholder="Enter Tracking Number..."
            className="h-11 w-full rounded-xl border border-gray-100 bg-[#FEFEFE] pr-4 pl-10 text-sm text-[#333] placeholder-[#757575] shadow-sm transition-all outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
          />
        </div>
      </div>

      {/* Main Grid: Map & Milestone Visualizer */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Interactive GPS & Milestone Tracker */}
        <div className="space-y-6 lg:col-span-2">
          {/* Active Tracker Card */}
          <div className="space-y-6 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-[#333]">
                    {selectedShipment.trackingNo}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusBadge(
                      selectedShipment.status,
                    )}`}
                  >
                    {selectedShipment.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#757575]">
                  Carrier:{" "}
                  <span className="font-semibold text-[#333]">
                    {selectedShipment.carrier}
                  </span>
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-[#757575]">Estimated Arrival</p>
                <p className="text-sm font-bold text-[#856DF3] sm:text-base">
                  {selectedShipment.eta}
                </p>
              </div>
            </div>

            {/* Visual Route Progress Bar */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-semibold text-[#333]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-[#856DF3]" />
                  {selectedShipment.sender}
                </span>
                <span className="flex items-center gap-1.5 text-[#757575]">
                  <Navigation size={16} className="text-[#333]" />
                  {selectedShipment.destination}
                </span>
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 p-0.5">
                <div
                  className="h-full rounded-full bg-[#856DF3] transition-all duration-500"
                  style={{ width: `${selectedShipment.progressPercent}%` }}
                />
              </div>

              <p className="pt-1 text-center text-sm text-[#757575]">
                Current Location:{" "}
                <span className="font-bold text-[#333]">
                  {selectedShipment.currentLocation}
                </span>
              </p>
            </div>

            {/* Simulated Live GPS Map Window */}
            <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-gray-200/60 bg-gray-100">
              {/* Subtle Grid Background Pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Map Marker Display */}
              <div className="relative z-10 flex items-center gap-3 rounded-xl bg-[#333333] px-5 py-2.5 text-white shadow-lg">
                <Truck size={20} className="animate-pulse text-[#856DF3]" />
                <div>
                  <p className="text-sm font-bold">
                    {selectedShipment.currentLocation}
                  </p>
                  <p className="text-xs text-gray-300">Live Telemetry Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tracked Shipments List */}
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="text-base font-bold text-[#333]">
              Active Shipments
            </h3>
            <span className="rounded-full bg-[#E3DDFF]/50 px-2.5 py-1 text-xs font-bold text-[#856DF3]">
              {mockShipments.length} Total
            </span>
          </div>

          {/* List Items */}
          <div className="space-y-3">
            {mockShipments.map((item) => {
              const isSelected = selectedShipment.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedShipment(item)}
                  className={`cursor-pointer space-y-2.5 rounded-xl border p-4 transition-all ${
                    isSelected
                      ? "border-[#856DF3] bg-[#E3DDFF]/20 shadow-sm"
                      : "border-gray-100 hover:bg-gray-50/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#333]">
                      {item.trackingNo}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusBadge(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-[#757575]">
                    <p>
                      From:{" "}
                      <span className="font-medium text-[#333]">
                        {item.sender}
                      </span>
                    </p>
                    <p>
                      To:{" "}
                      <span className="font-medium text-[#333]">
                        {item.destination}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-2 text-xs font-bold text-[#856DF3]">
                    <span>ETA: {item.eta}</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
