"use client";

import { MoreHorizontal } from "lucide-react";
import { productCategoriesData } from "@/app/data/productCategoriesData";

export default function ProductCategories() {
  const totalProducts = productCategoriesData.reduce((sum, item) => {
    return sum + parseInt(item.count.replace(/\D/g, ""), 10);
  }, 0);

  return (
    <div className="rounded-2xl border border-gray-100/50 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Product Categories
        </h3>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F5F5] text-[#757575] transition hover:bg-gray-200">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Total */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-[#9E9E9E]">Total Products</span>
        <span className="text-2xl font-bold text-[#1A1A1A]">
          {totalProducts.toLocaleString()}
        </span>
      </div>

      {/* Color swatch bar */}
      <div className="mt-5 flex gap-1">
        {productCategoriesData.map((item, idx) => (
          <div
            key={idx}
            className={`h-14 ${idx === 0 ? "rounded-l-lg" : ""} ${idx === productCategoriesData.length - 1 ? "rounded-r-lg" : ""} `}
            style={{
              width: `${item.value}%`,
              backgroundColor: item.color,
            }}
          />
        ))}
      </div>

      {/* Legend list */}
      <div className="mt-6 space-y-4">
        {productCategoriesData.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-[#333333]">{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs text-[#757575]">
                {item.count}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A]">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
