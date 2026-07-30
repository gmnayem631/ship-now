"use client";

import React from "react";
import {
  MoreHorizontal,
  ClipboardCheck,
  Box,
  Bus,
  FileText,
  LucideIcon,
} from "lucide-react";

interface ActivityItem {
  id: string;
  icon: LucideIcon;
  iconBg: "dark" | "purple";
  user: string;
  actionText: string;
  time: string;
}

const activityData: ActivityItem[] = [
  {
    id: "1",
    icon: ClipboardCheck,
    iconBg: "dark",
    user: "Leo Fernandez",
    actionText:
      "confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)",
    time: "01:45 PM",
  },
  {
    id: "2",
    icon: Box,
    iconBg: "purple",
    user: "Ava Martinez",
    actionText:
      "added 25 units of Smart Router Kit to Section A1 (Electronics)",
    time: "09:15 AM",
  },
  {
    id: "3",
    icon: Bus,
    iconBg: "dark",
    user: "Oscar Liem",
    actionText:
      "dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)",
    time: "05:30 PM",
  },
  {
    id: "4",
    icon: FileText,
    iconBg: "purple",
    user: "Dina Choi",
    actionText:
      "created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)",
    time: "04:10 PM",
  },
];

export const WarehouseActivityLog: React.FC = () => {
  return (
    <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#333333]">
          Warehouse Activity Log
        </h3>
        <button className="text-[#757575] transition-colors hover:text-[#333333]">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activityData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="space-y-4">
              <div className="flex items-start space-x-3">
                {/* Circular Icon Wrapper */}
                <div
                  className={`mt-0.5 flex-shrink-0 rounded-full p-2 text-[#FEFEFE] ${
                    item.iconBg === "dark" ? "bg-[#333333]" : "bg-[#856DF3]"
                  }`}
                >
                  <IconComponent className="h-3.5 w-3.5 stroke-[2]" />
                </div>

                {/* Log Details */}
                <div className="space-y-1 text-xs">
                  <p className="leading-relaxed text-[#333333]">
                    <span className="font-medium text-[#856DF3]">
                      {item.user}
                    </span>{" "}
                    <span className="text-[#333333]/90">{item.actionText}</span>
                  </p>
                  <p className="text-[10px] font-medium text-[#757575]">
                    {item.time}
                  </p>
                </div>
              </div>

              {/* Separator Divider between items except the last one */}
              {index < activityData.length - 1 && (
                <div className="ml-9 border-b border-gray-100" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
