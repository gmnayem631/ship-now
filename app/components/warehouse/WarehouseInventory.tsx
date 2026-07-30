"use client";

import { MoreHorizontal } from "lucide-react";
import {
  inventoryData,
  type InventoryData,
} from "@/app/data/warehouseInventoryData";

// Tallest bar in the set is treated as ~50% of the track height,
// everything else scales relative to it — matches the reference art
// where even the largest category doesn't fill the full track.
const MAX_FILL_PERCENT = 50;

function InventoryBar({
  item,
  maxValue,
}: {
  item: InventoryData;
  maxValue: number;
}) {
  const fillHeight = (item.percentage / maxValue) * MAX_FILL_PERCENT;

  return (
    <div className="flex flex-col items-center px-1.5 sm:px-2">
      {/* Category label */}
      <span className="mb-4 h-8 text-center text-[11px] leading-[1.15] font-medium whitespace-pre-line text-gray-400 sm:text-xs">
        {item.category}
      </span>

      {/* Bar + track */}
      <div className="relative h-28 w-9 sm:w-10">
        {/* Empty track */}
        <div className="absolute inset-0 rounded-[10px] bg-linear-to-b from-gray-50 to-gray-300" />

        {/* Filled bar */}
        <div
          className="absolute right-0 bottom-0 left-0 rounded-t-lg"
          style={{
            height: `${fillHeight}%`,
            backgroundColor: item.color,
            backgroundImage: item.pattern
              ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 1.5px, transparent 1.5px, transparent 5px)"
              : undefined,
          }}
        />
      </div>

      {/* Divider + stats */}
      <div className="mt-3 w-full pt-3 text-center">
        <span className="text-[13px] font-semibold text-gray-900 sm:text-sm">
          {item.percentage}%
        </span>
        <span className="text-[11px] text-gray-400 sm:text-xs">
          {" "}
          <span className="text-xl font-extrabold text-[#E0E0E0]">.</span>{" "}
          {item.count}
        </span>
      </div>
    </div>
  );
}

export default function WarehouseInventory() {
  const totalPackages = inventoryData
    .reduce((sum, item) => sum + Number(item.count.replace(/,/g, "")), 0)
    .toLocaleString();

  const maxValue = Math.max(...inventoryData.map((item) => item.percentage));

  return (
    <div className="w-full max-w-2xl rounded-xl bg-[#FEFEFE] p-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] sm:p-8">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#333333]">
          Warehouse Inventory
        </h2>
        <button
          type="button"
          aria-label="More options"
          className="rounded-md p-1 text-gray-300 transition-colors hover:bg-gray-50 hover:text-gray-400"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Total packages */}
      <div className="mb-7 flex items-baseline gap-1.5">
        <span className="text-2xl leading-none font-bold tracking-tight text-[#333333]">
          {totalPackages}
        </span>
        <span className="text-sm text-[#757575]">packages</span>
      </div>

      {/* Category bars */}
      <div className="grid grid-cols-6 divide-x divide-dashed divide-[#E0E0E0]">
        {inventoryData.map((item) => (
          <InventoryBar key={item.category} item={item} maxValue={maxValue} />
        ))}
      </div>
    </div>
  );
}
