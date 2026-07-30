"use client";

import { Search, Plus } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left side - Greeting */}
      <div>
        <p className="text-xs font-medium text-[#757575]">Hello John!</p>
        <h1 className="text-xl font-bold tracking-tight text-[#333] sm:text-2xl">
          Good Morning
        </h1>
      </div>

      {/* Right side - Search + Action Button */}
      <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#757575]"
          />
          <input
            type="text"
            placeholder="Search anything"
            className="h-10 w-full rounded-xl border border-gray-100 bg-[#FEFEFE] pr-4 pl-10 text-sm font-semibold text-[#757575] transition-all outline-none focus:border-[#856DF3] focus:ring-2 focus:ring-[#856DF3]/20"
          />
        </div>

        {/* Add New Shipping Button */}
        <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#333] px-4 text-sm font-semibold text-[#FEFEFE]">
          <Plus size={16} className="stroke-[2.5]" />
          <span>Add New Shipping</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
