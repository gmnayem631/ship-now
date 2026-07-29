"use client";

import { Search, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import ViewSwitcher from "./ViewSwitcher";
import ShipmentsMetrics from "./ShipmentsMetrics";

const statusTabs = [
  "All",
  "Delivered",
  "In Transit",
  "Processing",
  "Out for Delivery",
];

interface ShipmentsHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  view: "grid" | "table";
  setView: (view: "grid" | "table") => void;
}

const ShipmentsHeader = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  view,
  setView,
}: ShipmentsHeaderProps) => {
  return (
    <div className="space-y-5">
      {/* Title + Add button */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#333]">Shipments</h1>
          <p className="text-sm text-gray-500">
            <Link href={"/"} className="font-bold">
              Dashboard
            </Link>
            / Shipments
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ViewSwitcher view={view} onChange={setView} />
          <button className="flex h-10 items-center gap-2 rounded-lg bg-[#333] px-4 text-sm font-medium text-white hover:bg-[#222]">
            + New Shipment
          </button>
        </div>
      </div>
      {view === "table" && <ShipmentsMetrics />}

      {/* Status Tabs + Search + Filter + Sort  */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Status Tabs */}
        <nav className="flex items-center gap-1 rounded-xl bg-[#FEFEFE] p-1">
          {statusTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                tab === activeTab
                  ? "bg-[#333] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Search + Filter + Sort */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Shipment"
              className="h-10 w-full rounded-lg border border-gray-200 bg-white pr-4 pl-10 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 sm:w-64"
            />
          </div>

          {/* Filter */}
          <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter size={16} />
            Filter
          </button>

          {/* Sort */}
          <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Sort by: Newest
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsHeader;
