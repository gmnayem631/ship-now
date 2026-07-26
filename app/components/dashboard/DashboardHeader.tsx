import { Search, Plus } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left side - Greeting */}
      <div>
        <p className="text-base text-[#757575]">Hello John!</p>
        <h1 className="text-2xl font-bold text-[#333]">Good Morning</h1>
      </div>

      {/* Right side - Search + Button */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search anything"
            className="h-10 w-64 rounded-lg border border-gray-200 bg-[#FEFEFE] pr-4 pl-10 text-sm text-[#757575] outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        {/* Add New Shipping button */}
        <button className="flex items-center gap-2 rounded-lg bg-[#333] px-4 py-2.5 text-sm font-semibold text-[#fefefe]">
          <Plus size={18} />
          Add New Shipping
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
