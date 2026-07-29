import { Truck, Train, Ship, Plane } from "lucide-react";

const WarehouseHeader = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-2xl font-bold text-[#333333]">Warehouse</h1>
        <p className="text-xs text-[#757575]">Dashboard / Warehouse</p>
      </div>

      <div className="flex space-x-1 rounded-xl bg-gray-100 p-1 text-xs font-medium text-[#757575]">
        <button className="flex items-center space-x-1.5 rounded-lg bg-[#333333] px-3 py-1.5 text-[#FEFEFE] shadow-sm">
          <Truck className="h-4 w-4" />
          <span>Road Freight</span>
        </button>
        <button className="flex items-center space-x-1.5 px-3 py-1.5 hover:text-[#333333]">
          <Train className="h-4 w-4" />
          <span>Rail Freight</span>
        </button>
        <button className="flex items-center space-x-1.5 px-3 py-1.5 hover:text-[#333333]">
          <Ship className="h-4 w-4" />
          <span>Ocean Freight</span>
        </button>
        <button className="flex items-center space-x-1.5 px-3 py-1.5 hover:text-[#333333]">
          <Plane className="h-4 w-4" />
          <span>Air Freight</span>
        </button>
      </div>
    </div>
  );
};

export default WarehouseHeader;
