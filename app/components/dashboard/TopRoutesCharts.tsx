"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "../../data/dashboardMockData";

interface TopRoutesChartProps {
  data: ChartDataPoint[];
  title?: string;
}

export const TopRoutesChart: React.FC<TopRoutesChartProps> = ({
  data,
  title = "Top Routes",
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">Revenue by route</p>
      </div>

      {/* Chart */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              type="number"
              stroke="#9CA3AF"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#9CA3AF"
              style={{ fontSize: "12px" }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFF",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value: any) => [
                `$${(value as number).toLocaleString()}`,
                "Revenue",
              ]}
            />
            <Bar dataKey="revenue" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopRoutesChart;
