"use client";

import { LayoutGrid, List } from "lucide-react";

interface ViewSwitcherProps {
  view: "grid" | "table";
  onChange: (view: "grid" | "table") => void;
}

const ViewSwitcher = ({ view, onChange }: ViewSwitcherProps) => {
  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-1">
      <button
        onClick={() => onChange("grid")}
        className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
          view === "grid"
            ? "bg-[#333] text-white"
            : "text-gray-500 hover:bg-gray-100"
        }`}
        title="Grid view"
      >
        <LayoutGrid size={16} />
      </button>

      <button
        onClick={() => onChange("table")}
        className={`flex h-8 w-8 items-center justify-center rounded-md transition ${
          view === "table"
            ? "bg-[#333] text-white"
            : "text-gray-500 hover:bg-gray-100"
        }`}
        title="Table view"
      >
        <List size={16} />
      </button>
    </div>
  );
};

export default ViewSwitcher;
