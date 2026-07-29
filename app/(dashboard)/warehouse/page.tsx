import WarehouseHeader from "@/app/components/warehouse/WarehouseHeader";
import { WarehouseInventoryCard } from "@/app/components/warehouse/WarehouseInventoryCard";

export default function WarehouseDashboard() {
  return (
    <div className="min-h-screen space-y-6 p-4">
      {/* Top Header*/}
      <WarehouseHeader />

      <WarehouseInventoryCard />
    </div>
  );
}
