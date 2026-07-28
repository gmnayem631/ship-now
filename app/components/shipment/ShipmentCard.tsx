import { Shipment } from "@/app/data/shipmentsData";
import {
  Truck,
  Package,
  Shirt,
  Home,
  Dumbbell,
  Car,
  Leaf,
  ShoppingBag,
} from "lucide-react";
import { getCompanyLogo } from "./getCompanyLogo";

const statusStyles: Record<string, string> = {
  "In Transit": "bg-blue-100 text-blue-700",
  "Out for Delivery": "bg-orange-100 text-orange-700",
  Delivered: "bg-green-100 text-green-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

// Choose icon based on category
const getCategoryIcon = (category: string) => {
  const cat = category.toLowerCase();

  if (cat.includes("electronic")) return Package;
  if (cat.includes("apparel") || cat.includes("fashion")) return Shirt;
  if (cat.includes("home") || cat.includes("kitchen") || cat.includes("garden"))
    return Home;
  if (cat.includes("sport")) return Dumbbell;
  if (cat.includes("auto")) return Car;
  if (cat.includes("food") || cat.includes("beverage")) return Leaf;

  return Truck; // default
};

const ShipmentCard = ({ shipment }: { shipment: Shipment }) => {
  const Icon = getCategoryIcon(shipment.category);

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-[#333]">#{shipment.id}</p>
          <span
            className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
              statusStyles[shipment.status]
            }`}
          >
            {shipment.status}
          </span>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
          <Icon size={18} className="text-gray-500" />
        </div>
      </div>

      {/* Company */}
      {/* Company */}
      <div className="mb-4 flex items-center gap-3">
        {/* Logo */}
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gray-50">
          {getCompanyLogo(shipment.company) || (
            <span className="text-xs font-bold text-gray-400">
              {shipment.company.charAt(0)}
            </span>
          )}
        </div>

        <div>
          <p className="font-semibold text-[#333]">{shipment.company}</p>
          <p className="text-sm text-gray-500">{shipment.category}</p>
        </div>
      </div>

      {/* Route */}
      <div className="mb-4 space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-violet-500" />
          <div>
            <p className="text-gray-500">Origin</p>
            <p className="font-medium text-[#333]">{shipment.origin}</p>
            <p className="text-xs text-gray-400">{shipment.originDate}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-300" />
          <div>
            <p className="text-gray-500">Destination</p>
            <p className="font-medium text-[#333]">{shipment.destination}</p>
            <p className="text-xs text-gray-400">{shipment.destinationDate}</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-3">
        <div className="mb-1 flex justify-between text-xs">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium text-[#333]">{shipment.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-violet-500"
            style={{ width: `${shipment.progress}%` }}
          />
        </div>
      </div>

      {/* Carrier */}
      <p className="text-sm text-gray-500">
        Carrier:{" "}
        <span className="font-medium text-[#333]">{shipment.carrier}</span>
      </p>
    </div>
  );
};

export default ShipmentCard;
