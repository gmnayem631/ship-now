"use client";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import ShipmentStatistic from "../components/dashboard/ShipmentStatistic";
import ProfitSummary from "../components/dashboard/ProfitSummary";
import ShipmentType from "../components/dashboard/ShipmentType";
import ProductCategories from "../components/dashboard/ProductCategories";
import ShipmentAlerts from "../components/dashboard/ShipmentAlerts";
import RecentShipments from "../components/dashboard/RecentShipments";
import Tracking from "../components/dashboard/Tracking";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        {/* Left / main column */}
        <div className="space-y-6 xl:col-span-3">
          <StatCard />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ShipmentStatistic />
            <ProfitSummary />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <ProductCategories />
            </div>
            <div className="lg:col-span-1">
              <Tracking />
            </div>
          </div>

          <RecentShipments />
        </div>

        {/* Right column */}
        <div className="space-y-6 xl:col-span-1">
          <ShipmentType />
          <ShipmentAlerts />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
