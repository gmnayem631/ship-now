import { CapacityUsageCard } from "@/app/components/warehouse/CapacityUsageCard";
import { MetricCard } from "@/app/components/warehouse/MetricCard";
import WarehouseHeader from "@/app/components/warehouse/WarehouseHeader";
import WarehouseInventory from "@/app/components/warehouse/WarehouseInventory";
import { WarehouseMap } from "@/app/components/warehouse/WarehouseMap";
import { WarehouseStorageTable } from "@/app/components/warehouse/WarehouseStorageTable";
// Import PackageStatus and ActivityLog here if you have them as separate components
// import { PackageStatus } from "@/app/components/warehouse/PackageStatus";
// import { ActivityLog } from "@/app/components/warehouse/ActivityLog";

export default function WarehouseDashboard() {
  return (
    <div className="min-h-screen space-y-6 p-6">
      {/* Top Header Controls & Breadcrumbs */}
      <WarehouseHeader />

      {/* Main 12-Column Grid Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* LEFT MAIN AREA (8 Columns) */}
        <div className="space-y-6 lg:col-span-8">
          {/* Top Row: Metrics (Left 4 cols) + Warehouse Inventory Chart (Right 8 cols) */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-3 lg:col-span-4">
              <MetricCard title="Total SKU" value="285" change="+2.58%" />
              <MetricCard
                title="Quantity on Hand"
                value="12,450"
                unit="units"
                change="+4.37%"
              />
              <MetricCard
                title="Capacity Usage"
                value="62.5%"
                unit="Full"
                change="+1.54%"
              />
            </div>

            <div className="lg:col-span-8">
              <WarehouseInventory />
            </div>
          </div>

          {/* Warehouse Storage Table Component */}
          <WarehouseStorageTable />

          {/* Warehouse Interactive Map Component */}
          <WarehouseMap />
        </div>

        {/* RIGHT SIDEBAR (4 Columns) */}
        <div className="space-y-6 lg:col-span-4">
          {/* Capacity Usage Donut Chart */}
          <CapacityUsageCard />

          {/* Add PackageStatus and ActivityLog here once you create their components */}
          {/* <PackageStatus /> */}
          {/* <ActivityLog /> */}
        </div>
      </div>
    </div>
  );
}
