"use client";

import React from "react";
import {
  MoreHorizontal,
  FileX,
  MapPin,
  CloudRain,
  ArrowUpRight,
} from "lucide-react";

interface SummaryBox {
  count: number;
  label: string;
}

interface AlertItem {
  id: string;
  title: string;
  trackingId: string;
  freightType: string;
  date: string;
  icon: React.ElementType;
}

const summaryBoxes: SummaryBox[] = [
  { count: 5, label: "Customs Clearance Delay" },
  { count: 4, label: "Incorrect Address Provided" },
  { count: 3, label: "Weather-Related Hold" },
];

const alertItems: AlertItem[] = [
  {
    id: "1",
    title: "Customs Clearance Delay",
    trackingId: "#SH8743921",
    freightType: "Ocean Freight",
    date: "Mar 20",
    icon: FileX,
  },
  {
    id: "2",
    title: "Incorrect Address Provided",
    trackingId: "#SH8725810",
    freightType: "Road Freight",
    date: "Mar 20",
    icon: MapPin,
  },
  {
    id: "3",
    title: "Weather-Related Hold",
    trackingId: "#SH8790043",
    freightType: "Air Freight",
    date: "Mar 19",
    icon: CloudRain,
  },
  {
    id: "4",
    title: "Incorrect Address Provided",
    trackingId: "#SH8716654",
    freightType: "Rail Freight",
    date: "Mar 18",
    icon: FileX,
  },
];

export const ShipmentAlerts: React.FC = () => {
  return (
    <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#333]">Shipment Alerts</h3>
        <button className="rounded-md p-1 text-[#757575] transition-colors hover:bg-gray-100 hover:text-[#333]">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Main Stat */}
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-[#333]">12</span>
        <span className="text-xs font-medium text-[#757575]">
          Delays Detected
        </span>
      </div>

      {/* Top 3 Alert Cards */}
      <div className="grid grid-cols-3 gap-2">
        {summaryBoxes.map((box, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center space-y-1 rounded-xl bg-[#E3DDFF] p-3 text-center"
          >
            <span className="text-2xl font-bold text-[#333]">{box.count}</span>
            <span className="text-[12px] leading-tight font-medium text-[#333]">
              {box.label}
            </span>
          </div>
        ))}
      </div>

      {/* Alert List */}
      <div className="space-y-3 pt-2">
        {alertItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="group flex cursor-pointer items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                {/* Icon Container */}
                <div className="shrink-0 rounded-xl bg-gray-100 p-2.5 text-[#333]">
                  <Icon className="h-4 w-4 stroke-2" />
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-sm font-bold text-[#333]">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-[10px] text-[#757575]">
                    <span className="font-semibold text-[#856DF3]">
                      {item.trackingId}
                    </span>
                    {" · "}
                    {item.freightType}
                    {" · "}
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Arrow Action */}
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[#757575] transition-colors group-hover:text-[#333]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShipmentAlerts;
