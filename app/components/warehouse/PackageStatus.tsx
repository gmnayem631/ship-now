"use client";

import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  PackageItem,
  packagesData,
  StatusType,
} from "@/app/data/packageStatusData";
import PackageIcon from "./PackageIcon";

export const PackageStatus: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StatusType>("All");

  const filteredPackages = packagesData.filter((pkg) => {
    if (activeTab === "All") return true;
    return pkg.status === activeTab;
  });

  const getStatusBadgeStyle = (status: PackageItem["status"]) => {
    switch (status) {
      case "Sent":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Received":
        return "bg-[#D9F9E7] text-[#007837]";
      case "Expected":
        return "bg-gray-100 text-[#757575]";
      default:
        return "bg-gray-100 text-[#757575]";
    }
  };

  return (
    <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#333333]">Package Status</h3>
        <button className="text-[#757575] transition-colors hover:text-[#333333]">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex rounded-xl bg-gray-100/80 p-1 text-xs font-medium text-[#757575]">
        {(["All", "Expected", "Received", "Sent"] as StatusType[]).map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-lg py-1.5 text-center transition-all ${
                activeTab === tab
                  ? "bg-[#333333] font-semibold text-[#FEFEFE] shadow-sm"
                  : "hover:text-[#333333]"
              }`}
            >
              {tab}
            </button>
          ),
        )}
      </div>

      {/* Package Items List */}
      <div className="space-y-3 pt-1">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Icon Container */}
              <div className="rounded-xl bg-[#E3DDFF] p-2.5 text-[#333]">
                <PackageIcon />
              </div>

              {/* Package Details */}
              <div>
                <p className="text-xs font-bold text-[#333333]">{pkg.id}</p>
                <p className="mt-0.5 text-[10px] text-[#757575]">{pkg.date}</p>
              </div>
            </div>

            {/* Status Badge */}
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold ${getStatusBadgeStyle(
                pkg.status,
              )}`}
            >
              {pkg.status}
            </span>
          </div>
        ))}

        {filteredPackages.length === 0 && (
          <p className="py-4 text-center text-xs text-[#757575]">
            No packages found for this status.
          </p>
        )}
      </div>
    </div>
  );
};
