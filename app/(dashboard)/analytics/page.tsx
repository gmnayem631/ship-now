"use client";

import { performanceData, regionData } from "@/app/data/analyticsData";
import {
  TrendingUp,
  Clock,
  DollarSign,
  Fuel,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#333] sm:text-2xl">
            Analytics & Insights
          </h1>
          <p className="mt-1 text-xs text-[#757575]">
            Real-time logistical performance, delivery efficiency, and cost
            metrics.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Metric 1 */}
        <div className="space-y-3 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#757575]">
              Delivery Success Rate
            </span>
            <div className="rounded-xl bg-[#E3DDFF]/60 p-2 text-[#856DF3]">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-[#333]">98.4%</span>
            <span className="flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              <ArrowUpRight size={12} className="mr-0.5" /> +1.2%
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="space-y-3 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#757575]">
              Avg. Transit Time
            </span>
            <div className="rounded-xl bg-gray-100 p-2 text-[#333]">
              <Clock size={16} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-[#333]">1.8 Days</span>
            <span className="flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              <ArrowDownRight size={12} className="mr-0.5" /> -0.3d
            </span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="space-y-3 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#757575]">
              Cost Per Shipment
            </span>
            <div className="rounded-xl bg-[#E3DDFF]/60 p-2 text-[#856DF3]">
              <DollarSign size={16} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-[#333]">$14.20</span>
            <span className="flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
              <ArrowUpRight size={12} className="mr-0.5" /> +$0.45
            </span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="space-y-3 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#757575]">
              Fuel Burn Efficiency
            </span>
            <div className="rounded-xl bg-gray-100 p-2 text-[#333]">
              <Fuel size={16} />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-[#333]">8.2 L/100km</span>
            <span className="flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
              <ArrowDownRight size={12} className="mr-0.5" /> -4.1%
            </span>
          </div>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Combined Bar & Line Chart */}
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#333]">
                Shipment Volume vs. Logistics Revenue
              </h3>
              <p className="text-sm text-[#757575]">
                Monthly breakdown of completed orders and generated revenue
              </p>
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={performanceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#757575" }}
                />
                <YAxis
                  yAxisId="left"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#757575" }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#757575" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FEFEFE",
                    borderRadius: "12px",
                    border: "1px solid #f0f0f0",
                    fontSize: "12px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="shipments"
                  fill="#E3DDFF"
                  radius={[6, 6, 0, 0]}
                  name="Shipments"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#856DF3"
                  strokeWidth={2.5}
                  dot={{ fill: "#856DF3" }}
                  name="Revenue ($)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Region Donut Chart */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-[#333]">
              Regional Market Share
            </h3>
            <p className="text-sm text-[#757575]">
              Percentage of shipments by region
            </p>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FEFEFE",
                    borderRadius: "8px",
                    border: "1px solid #f0f0f0",
                    fontSize: "11px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-[11px] font-medium text-[#333]">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between border-t border-gray-100 pt-2 text-xs text-[#757575]">
            <span>Top Performing:</span>
            <span className="font-semibold text-[#856DF3]">
              North America (45%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
