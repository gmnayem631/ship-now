"use client";

import { Search, Plus, Minus, Send, Truck } from "lucide-react";

export default function Tracking() {
  return (
    <div className="mx-auto w-full max-w-xl rounded-xl bg-[#FEFEFE] p-3">
      {/* Map area */}
      <div className="relative h-55 w-full overflow-hidden rounded-2xl bg-[#EDEDED]">
        {/* Search bar */}
        <div className="absolute top-4 right-16 left-4 z-10">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-md">
            <input
              type="text"
              placeholder="Search by Shipping ID..."
              className="w-full bg-transparent text-sm text-neutral-400 outline-none placeholder:text-neutral-400"
            />
            <Search className="h-4 w-4 shrink-0 text-neutral-500" />
          </div>
        </div>

        {/* Zoom controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
          <button
            type="button"
            aria-label="Zoom in"
            className="flex h-9 w-9 items-center justify-center text-neutral-600 hover:bg-neutral-50"
          >
            <Plus className="h-4 w-4" />
          </button>
          <div className="h-px w-full bg-neutral-200" />
          <button
            type="button"
            aria-label="Zoom out"
            className="flex h-9 w-9 items-center justify-center text-neutral-600 hover:bg-neutral-50"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>

        {/* Route line */}
        <svg
          viewBox="0 0 574 288"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          {/* traveled route (dark) */}
          <line
            x1="-20"
            y1="230"
            x2="300"
            y2="171"
            stroke="#2B2B2B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* remaining route (purple) */}
          <line
            x1="300"
            y1="171"
            x2="600"
            y2="112"
            stroke="#7C6CF6"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Current position marker */}
        <div className="absolute top-30 left-51 rotate-23 rounded-full bg-[#856DF3] p-1.5">
          <Send className="h-4 w-4 text-white" fill="white" />
        </div>
      </div>

      {/* Info card */}
      <div className="mt-2 rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              #SH8743921
            </h2>
            <div className="mt-1 flex items-center gap-2">
              <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-medium text-[#7C6CF6]">
                In Transit
              </span>
              <span className="text-xs text-neutral-400">On Schedule</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-400">Courier:</p>
            <p className="text-sm font-semibold text-neutral-900">
              Daniel Cooper
            </p>
            <p className="text-xs text-neutral-400">SkyLogix Express</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative mt-5 flex items-center">
          <div className="h-2.5 w-2.5 rounded-full border-2 border-[#7C6CF6] bg-white" />
          <div className="mx-2 h-1 flex-1 rounded-full bg-[#7C6CF6]" />
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7C6CF6]">
            <Truck className="h-4 w-4 text-white" />
          </div>
          <div className="mx-2 h-1 flex-1 rounded-full bg-neutral-200" />
          <div className="h-2.5 w-2.5 rounded-full border-2 border-neutral-300 bg-white" />
        </div>

        {/* Locations */}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              San Francisco, CA, USA
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Mar 19, 2035 – 10:30 AM
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-neutral-900">
              New York, NY, USA
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Mar 23, 2035 – 03:00 PM (estimated)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
