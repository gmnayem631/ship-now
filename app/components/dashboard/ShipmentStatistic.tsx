"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { shipmentStatData } from "@/app/data/shipmentStatisticData";

// Custom Bar Shape
const CustomBar = (props: any) => {
  const { x, y, width, height, index, hoverIndex } = props;
  const isHovered = index === hoverIndex;

  if (!width || !height) return null;

  return (
    <g className="cursor-pointer transition-all duration-200">
      {/* Background Gradient Bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={isHovered ? "url(#purpleGradient)" : "url(#grayGradient)"}
        rx={2}
      />

      {/* Top Border Line */}
      <line
        x1={x}
        y1={y}
        x2={x + width}
        y2={y}
        stroke="#18181b"
        strokeWidth={2.5}
        strokeLinecap="round"
      />

      {/* Active Dot Indicator on Hover */}
      {isHovered && (
        <circle
          cx={x + width / 2}
          cy={y}
          r={6}
          fill="#18181b"
          stroke="#ffffff"
          strokeWidth={2}
        />
      )}
    </g>
  );
};

// Custom Tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="rounded-2xl border border-purple-200/50 bg-[#e4d9ff] px-4 py-2.5 text-center shadow-sm">
        <p className="text-xs font-medium text-gray-500">{item.month} 2030</p>
        <p className="mt-0.5 text-lg font-bold text-gray-900">
          {item.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function ShipmentStatisticChart() {
  // Set May (index 4) as initial active state to match original design
  const [hoverIndex, setHoverIndex] = useState<number | null>(4);

  return (
    <div className="w-full max-w-lg rounded-xl border border-gray-100 bg-white p-6 font-sans shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          Shipment Statistic
        </h2>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-xl bg-gray-100/80 px-3.5 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          Last Year
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Metric & Badge */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl font-bold tracking-tight text-[#333]">
          4,352
        </span>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-100/70 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          <ArrowUpRight className="h-3.5 w-3.5" />
          +8.7%
        </span>
      </div>

      {/* Chart */}
      <div className="h-55 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={shipmentStatData}
            margin={{ top: 45, right: 0, left: -25, bottom: 0 }}
            barCategoryGap="8%"
          >
            <defs>
              {/* Default Gray Bar Gradient */}
              <linearGradient id="grayGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e4e4e7" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#f4f4f5" stopOpacity={0.05} />
              </linearGradient>

              {/* Active Hover Purple Gradient */}
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              domain={[0, 4800]}
              ticks={[0, 1200, 2400, 3600, 4800]}
              tickFormatter={(val) => `${val / 1000}K`}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Bar
              dataKey="value"
              shape={(props: any) => (
                <CustomBar {...props} hoverIndex={hoverIndex} />
              )}
            >
              {shipmentStatData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
