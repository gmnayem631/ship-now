import { MetricCard } from "@/app/components/warehouse/MetricCard";
import WarehouseHeader from "@/app/components/warehouse/WarehouseHeader";
import WarehouseInventory from "@/app/components/warehouse/WarehouseInventory";

export default function WarehouseDashboard() {
  return (
    <div className="min-h-screen space-y-6 p-4">
      {/* Top Header*/}
      <WarehouseHeader />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <MetricCard title="Total SKU" value="285" change="+2.8%" />
            <MetricCard
              title="Quantity on Hand"
              value="12,450"
              unit="units"
              change="+4.2%"
            />
            <MetricCard
              title="Capacity Usage"
              value="62.5%"
              unit="Full"
              change="+1.5%"
            />
          </div>
          {/* <WarehouseInventory /> */}
        </div>
      </div>
    </div>
  );
}
