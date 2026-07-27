"use client";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <DashboardHeader />
      <div className="grid grid-cols-12">
        <div className="col-span-8 flex gap-5">
          <StatCard />
        </div>
      </div>
    </div>
  );
}
