// components/dashboard/StatCard.tsx
import React from "react";
import {
  Truck,
  TrendingUp,
  DollarSign,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface ShipmentsCardProps {
  title: string;
  count: string | number;
  unit?: string;
  percentageChange: string;
  timeframe: string;
  icon: React.ElementType;
  positive?: boolean;
}

const statCardData: ShipmentsCardProps[] = [
  {
    title: "Active Shipments",
    count: "1,284",
    unit: "shipments",
    percentageChange: "+8.7%",
    timeframe: "from last week",
    icon: Truck,
    positive: true,
  },
  {
    title: "Delivery Performance",
    count: "94.3",
    unit: "on-time",
    percentageChange: "+1.2%",
    timeframe: "from last week",
    icon: TrendingUp,
    positive: true,
  },
  {
    title: "Revenue",
    count: "$82,450",
    percentageChange: "+12.4%",
    timeframe: "from last month",
    icon: DollarSign,
    positive: true,
  },
];

export default function StatCard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {statCardData.map((card, idx) => {
        const Icon = card.icon;
        const Arrow = card.positive ? ChevronUp : ChevronDown;
        return (
          <div
            key={idx}
            className="rounded-xl border border-gray-100/50 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#757575]">
                  {card.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-[#333333]">
                    {card.count}
                  </span>
                  <span className="text-sm font-normal text-[#757575]">
                    {card.unit}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      card.positive
                        ? "bg-[#D9F9E7] text-[#007837]"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <Arrow className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      card.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {card.percentageChange}
                  </span>
                  <span className="text-sm font-normal text-[#757575]">
                    {card.timeframe}
                  </span>
                </div>
              </div>
              <div className="my-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#856DF3] text-white shadow-md shadow-indigo-200">
                <Icon className="h-6 w-6 stroke-[1.75]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
