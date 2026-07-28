import ShipmentsGrid from "@/app/components/shipment/ShipmentsGrid";

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#333]">Shipments</h1>
      <ShipmentsGrid />
    </div>
  );
}
