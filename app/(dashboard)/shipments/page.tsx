import ShipmentsGrid from "@/app/components/shipment/ShipmentsGrid";
import ShipmentsHeader from "@/app/components/shipment/ShipmentsHeader";

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <ShipmentsHeader />
      <ShipmentsGrid />
    </div>
  );
}
