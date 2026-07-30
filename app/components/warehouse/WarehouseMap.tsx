"use client";

import React, { useState } from "react";

const mapSections = [
  { name: "Electronics", slots: ["A1", "A2", "A3"], space: "70/100" },
  { name: "Home & Kitchen", slots: ["C1", "C2", "C3"], space: "10/100" },
  { name: "Automotive Parts", slots: ["D1", "D2", "D3"], space: "50/100" },
  { name: "Sports Equipment", slots: ["F1", "F2", "F3"], space: "40/100" },
  {
    name: "Apparel",
    slots: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    space: "20/100",
  },
  { name: "Beauty & Health", slots: ["E1", "E2", "E3", "E4"], space: "30/100" },
];

export const WarehouseMap: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState("Floor 1");

  return (
    <div className="space-y-4 rounded-xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[#333333]">Warehouse Map</h3>
        <div className="flex space-x-1 rounded-lg bg-gray-100 p-1 text-xs">
          {["Floor 1", "Floor 2", "Floor 3"].map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`rounded-md px-3 py-1 font-medium transition-all ${
                activeFloor === floor
                  ? "bg-[#333333] text-[#FEFEFE]"
                  : "text-[#757575] hover:text-[#333333]"
              }`}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mapSections.map((sec, i) => (
          <div
            key={i}
            className={`space-y-2 rounded-xl border border-gray-100 p-3 ${
              sec.name === "Apparel" ? "md:col-span-2" : ""
            }`}
          >
            <span className="text-xs font-semibold text-[#333333]">
              {sec.name}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {sec.slots.map((slot) => (
                <div
                  key={slot}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#856DF3]/30 bg-[#E3DDFF] text-xs font-medium text-[#856DF3]"
                >
                  {slot}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#757575]">
              Available Space: {sec.space}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4 pt-2 text-xs text-[#757575]">
        <div className="flex items-center space-x-1">
          <span className="h-3 w-3 rounded-sm border border-[#856DF3]/30 bg-[#E3DDFF]" />
          <span>Available</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="h-3 w-3 rounded-sm bg-[#856DF3]" />
          <span>Full</span>
        </div>
      </div>
    </div>
  );
};
