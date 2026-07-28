"use client";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import ProfitSummary from "../components/dashboard/ProfitSummary";
import ShipmentStatistic from "../components/dashboard/ShipmentStatistic";
import StatCard from "../components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        {/* left column - col-span-3 */}
        <div className="space-y-6 xl:col-span-3">
          <StatCard />
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <ShipmentStatistic />
            </div>
            <div className="col-span-1">
              <ProfitSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
