import { shipments } from "@/app/data/shipmentsData";
import ShipmentCard from "./ShipmentCard";

const ShipmentsGrid = () => {
  return (
    <div>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {shipments.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          Show <span className="font-medium text-[#333]">12</span> of{" "}
          <span className="font-medium text-[#333]">520</span> results
        </p>

        <div className="flex items-center gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
            ‹
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-medium text-white">
            1
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
            2
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
            3
          </button>
          <span className="px-1 text-gray-400">...</span>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
            16
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm hover:bg-gray-50">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsGrid;
