import React from "react";
import { Truck, ChevronUp } from "lucide-react";

interface ShipmentsCardProps {
  title?: string;
  count?: string | number;
  unit?: string;
  percentageChange?: string;
  timeframe?: string;
}

export default function StatCard() {
  const statCardData: ShipmentsCardProps[] = [
    {
      title: "Active Shipments",
      count: "1,284",
      unit: "shipments",
      percentageChange: "+8.7%",
      timeframe: "from last week",
    },
    {
      title: "Delivery Performance",
      count: "94.3",
      unit: "on-time",
      percentageChange: "-1.2%",
      timeframe: "from last week",
    },
    {
      title: "Revenue",
      count: "82,450",
      percentageChange: "+12.4%",
      timeframe: "from last month",
    },
  ];

  return statCardData.map((card, idx) => {
    return (
      <div
        key={idx}
        className="rounded-xl border border-gray-100/50 bg-white p-6 shadow-sm"
      >
        <div className="flex items-start justify-between">
          {/* Content Section */}
          <div className="space-y-3">
            {/* Title */}
            <h3 className="text-base font-semibold text-[#757575]">
              {card.title}
            </h3>

            {/* Number & Unit */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight text-[#333333]">
                {card.count}
              </span>
              <span className="text-sm font-normal text-[#757575]">
                {card?.unit}
              </span>
            </div>

            {/* Metric / Indicator */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D9F9E7] text-[#007837]">
                <ChevronUp className="h-4 w-4 stroke-[2.5]" />
              </div>
              <span className="text-sm font-semibold text-emerald-600">
                {card.percentageChange}
              </span>
              <span className="text-sm font-normal text-[#757575]">
                {card.timeframe}
              </span>
            </div>
          </div>

          {/* Truck Icon Box */}
          <div className="my-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#856DF3] text-white shadow-md shadow-indigo-200">
            <Truck className="h-8 w-8 stroke-[1.75]" />
          </div>
        </div>
      </div>
    );
  });
}
