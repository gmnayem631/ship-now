"use client";

import React from "react";
import {
  MoreHorizontal,
  Copy,
  Tag,
  RotateCcw,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface TimelineItem {
  id: string;
  icon: LucideIcon;
  iconBg: "purple" | "gray";
  role: string;
  username: string;
  actionText: string;
  time: string;
}

const activities: TimelineItem[] = [
  {
    id: "1",
    icon: Copy,
    iconBg: "purple",
    role: "User",
    username: "@TechGuru99",
    actionText: "submitted a bulk shipment request",
    time: "12:00 PM",
  },
  {
    id: "2",
    icon: Tag,
    iconBg: "gray",
    role: "Customer Support",
    username: "@SupportKen",
    actionText: "added a priority tag to Order ID 77889JKL",
    time: "11:30 AM",
  },
  {
    id: "3",
    icon: RotateCcw,
    iconBg: "purple",
    role: "User",
    username: "@SallyMae88",
    actionText: "initiated a return process for Order ID 44556GHI",
    time: "11:00 AM",
  },
  {
    id: "4",
    icon: CheckCircle2,
    iconBg: "gray",
    role: "Administrator",
    username: "@AdminLisa",
    actionText: "resolved a delivery issue for Order ID 12345XYZ",
    time: "10:15 AM",
  },
];

export const RecentActivity: React.FC = () => {
  return (
    <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#333]">Recent Activity</h3>
        <button className="rounded-md p-1 text-[#757575] transition-colors hover:bg-gray-100 hover:text-[#333]">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Timeline List */}
      <div className="relative space-y-5 pt-1">
        {activities.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === activities.length - 1;

          return (
            <div
              key={item.id}
              className="group relative flex items-start space-x-3"
            >
              {/* Vertical Connecting Line */}
              {!isLast && (
                <span
                  className="absolute top-8 bottom-[-20px] left-[15px] w-[1px] bg-gray-200"
                  aria-hidden="true"
                />
              )}

              {/* Circle Icon Badge */}
              <div
                className={`z-10 shrink-0 rounded-full p-2 text-[#333] ${
                  item.iconBg === "purple" ? "bg-[#E3DDFF]" : "bg-gray-200/80"
                }`}
              >
                <Icon className="h-3.5 w-3.5 stroke-[2]" />
              </div>

              {/* Activity Details */}
              <div className="space-y-0.5 text-xs">
                <p className="leading-relaxed text-[#333]">
                  <span className="font-normal text-[#757575]">
                    {item.role}{" "}
                  </span>
                  <span className="font-semibold text-[#856DF3]">
                    {item.username}
                  </span>{" "}
                  <span className="text-[#333]/90">{item.actionText}</span>
                </p>
                <p className="text-[10px] font-medium text-[#757575]">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
