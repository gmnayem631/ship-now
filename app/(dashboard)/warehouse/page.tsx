import WarehouseHeader from "@/app/components/warehouse/WarehouseHeader";
import WarehouseInventory from "@/app/components/warehouse/WarehouseInventory";

export default function WarehouseDashboard() {
  return (
    <div className="min-h-screen space-y-6 p-4">
      {/* Top Header*/}
      <WarehouseHeader />

      <WarehouseInventory />
    </div>
  );
}
