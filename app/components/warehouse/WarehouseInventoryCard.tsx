"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { MoreHorizontal } from "lucide-react";
import { inventoryData } from "@/app/data/warehouseInventoryData";

export const WarehouseInventoryCard: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      {/* SVG Definitions for striped patterns */}
      <svg className="absolute h-0 w-0">
        <defs>
          <pattern
            id="stripe-purple"
            width="8"
            height="8"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#856DF3"
              strokeWidth="5"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#E3DDFF"
              strokeWidth="2"
            />
          </pattern>
          <pattern
            id="stripe-dark"
            width="8"
            height="8"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#333333"
              strokeWidth="5"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#757575"
              strokeWidth="2"
            />
          </pattern>
          <pattern
            id="stripe-gray"
            width="8"
            height="8"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#757575"
              strokeWidth="5"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
          </pattern>
        </defs>
      </svg>

      {/* Header */}
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#333333]">
          Warehouse Inventory
        </h3>
        <button className="text-[#757575] hover:text-[#333333]">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Metric Label */}
      <div className="mb-2 flex items-baseline space-x-1.5">
        <span className="text-2xl font-bold text-[#333333]">10,000</span>
        <span className="text-xs text-[#757575]">packages</span>
      </div>

      {/* Bar Chart Container */}
      <div className="h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={inventoryData}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="category"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y - 120}
                  textAnchor="middle"
                  fill="#757575"
                  className="text-[10px] font-medium"
                >
                  {payload.value.split("\n").map((line: string, i: number) => (
                    <tspan x={x} dy={i * 11} key={i}>
                      {line}
                    </tspan>
                  ))}
                </text>
              )}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded bg-[#333333] px-2 py-1 text-xs text-[#FEFEFE] shadow">
                      {data.category.replace("\n", " ")}: {data.percentage}% (
                      {data.count})
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Background pill track */}
            <Bar
              dataKey={() => 100}
              fill="#F3F4F6"
              radius={[8, 8, 8, 8]}
              barSize={38}
              isAnimationActive={false}
            />
            {/* Active percentage fill */}
            <Bar dataKey="percentage" radius={[6, 6, 6, 6]} barSize={38}>
              {inventoryData.map((entry, index) => {
                let fill = entry.color;
                if (entry.pattern) {
                  if (entry.color === "#856DF3") fill = "url(#stripe-purple)";
                  if (entry.color === "#333333") fill = "url(#stripe-dark)";
                  if (entry.color === "#757575") fill = "url(#stripe-gray)";
                }
                return <Cell key={`cell-${index}`} fill={fill} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer labels under each bar */}
      <div className="grid grid-cols-6 gap-1 border-t border-dashed border-gray-100 pt-2 text-center">
        {inventoryData.map((item, i) => (
          <div key={i} className="text-[11px]">
            <span className="font-bold text-[#333333]">{item.percentage}%</span>
            <span className="text-[10px] text-[#757575]"> · {item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
