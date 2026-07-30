"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Truck,
  PackageCheck,
  AlertCircle,
  MoreHorizontal,
} from "lucide-react";
import { mockEvents, ScheduleEvent } from "@/app/data/calendarData";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [selectedView, setSelectedView] = useState<"Month" | "Week" | "Day">(
    "Month",
  );
  const [activeDate, setActiveDate] = useState(20);

  const getBadgeStyle = (status: ScheduleEvent["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-600";
      case "In Progress":
        return "bg-[#E3DDFF] text-[#856DF3]";
      case "Scheduled":
        return "bg-gray-100 text-[#757575]";
    }
  };

  const getTypeIcon = (type: ScheduleEvent["type"]) => {
    switch (type) {
      case "Delivery":
        return <PackageCheck size={14} className="text-[#856DF3]" />;
      case "Dispatch":
        return <Truck size={14} className="text-[#333]" />;
      case "Maintenance":
        return <AlertCircle size={14} className="text-amber-500" />;
      case "Audit":
        return <Clock size={14} className="text-[#757575]" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#333] sm:text-2xl">
            Logistics Calendar
          </h1>
          <p className="mt-1 text-xs text-[#757575]">
            Schedule and manage fleet dispatches, warehouse audits, and delivery
            timelines.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggles */}
          <div className="flex rounded-xl border border-gray-100 bg-[#FEFEFE] p-1 text-xs font-medium text-[#757575] shadow-sm">
            {(["Month", "Week", "Day"] as const).map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`rounded-lg px-3 py-1.5 transition-all ${
                  selectedView === view
                    ? "bg-[#333333] font-semibold text-[#FEFEFE] shadow-sm"
                    : "hover:text-[#333333]"
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <button className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#333] px-3.5 text-xs font-semibold text-white">
            <Plus size={16} />
            <span className="hidden sm:inline">Add Event</span>
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column: Interactive Month Grid */}
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm lg:col-span-2">
          {/* Month Controller Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} className="text-[#856DF3]" />
              <h2 className="text-base font-bold text-[#333]">July 2026</h2>
            </div>
            <div className="flex items-center gap-1">
              <button className="rounded-lg border border-gray-100 p-1.5 text-[#757575] hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button className="rounded-lg border border-gray-100 p-1.5 text-[#757575] hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 border-b border-gray-100 pb-2 text-center">
            {daysOfWeek.map((day) => (
              <span
                key={day}
                className="text-base font-semibold text-[#757575]"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Day Tiles */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const isSelected = activeDate === day;
              const hasEvents = [5, 12, 18, 20, 24, 28].includes(day);

              return (
                <button
                  key={day}
                  onClick={() => setActiveDate(day)}
                  className={`relative flex h-12 flex-col items-center justify-center rounded-xl border text-base font-medium transition-all sm:h-16 ${
                    isSelected
                      ? "border-[#856DF3] bg-[#E3DDFF]/40 font-bold text-[#856DF3] shadow-sm"
                      : "border-gray-50 text-[#333] hover:bg-gray-50"
                  }`}
                >
                  <span>{day}</span>
                  {hasEvents && (
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#856DF3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Schedule Details for Selected Day */}
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <h3 className="text-lg font-bold text-[#333]">
                Schedule for March {activeDate}
              </h3>
              <p className="text-sm text-[#757575]">
                {mockEvents.length} events scheduled
              </p>
            </div>
            <button className="text-[#757575] hover:text-[#333]">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-3">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="group space-y-2 rounded-xl border border-gray-100 bg-gray-50/50 p-3 transition-all hover:border-[#E3DDFF] hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg border border-gray-100 bg-white p-1.5 shadow-sm">
                      {getTypeIcon(event.type)}
                    </div>
                    <span className="text-sm font-bold text-[#333]">
                      {event.title}
                    </span>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${getBadgeStyle(
                      event.status,
                    )}`}
                  >
                    {event.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 pl-8 text-[10px] text-[#757575]">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
