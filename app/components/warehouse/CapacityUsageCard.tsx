"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";

const data = [
  { name: "Used", value: 62.5, color: "#856DF3" },
  { name: "Available", value: 37.5, color: "#FEFEFE" },
];

export const CapacityUsageCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#333333] p-5 text-[#FEFEFE] shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Capacity Usage</h3>
        <button className="text-[#757575] hover:text-[#FEFEFE]">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex h-44 w-full items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex flex-col items-center">
          <span className="text-xs text-[#757575]">Total Usage</span>
          <span className="text-2xl font-bold text-[#FEFEFE]">62.5%</span>
        </div>
      </div>

      <div className="flex justify-between border-t border-[#757575]/20 pt-2 text-xs text-[#757575]">
        <div>
          <span className="block font-bold text-[#FEFEFE]">40 shelves</span>
          <span>Loaded</span>
        </div>
        <div className="text-right">
          <span className="block font-bold text-[#FEFEFE]">24 shelves</span>
          <span>Empty</span>
        </div>
      </div>
    </div>
  );
};
