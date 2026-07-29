import { Shipment } from "@/app/data/shipmentsData";
import ArrowIcons from "../ui/ArrowIcons";
import { getCompanyLogo } from "./getCompanyLogo";
import Truck from "./Truck";
import { Plane, Ship, Train } from "lucide-react";

interface ShipmentsTableProps {
  data: Shipment[];
}

const statusStyles: Record<string, string> = {
  "In Transit": "text-blue-600",
  "Out for Delivery": "text-orange-600",
  Delivered: "text-green-600",
  Processing: "text-yellow-600",
  Delivery: "text-blue-600",
  Completed: "text-green-600",
  Pending: "text-yellow-600",
};

const statusDotStyles: Record<string, string> = {
  "In Transit": "bg-[#C1B3FF]",
  "Out for Delivery": "bg-orange-500",
  Delivered: "bg-[#D9F9E7]",
  Processing: "bg-[#FEF1A7]",
  Delivery: "bg-blue-500",
  Completed: "bg-[#0BBC5C]",
  Pending: "bg-[#757575]",
};

const ShipmentsTable = ({ data }: ShipmentsTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-250 text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50/80">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-500">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-2 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Shipping ID</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-2 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Company</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-2 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Carriers</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-2 py-3 font-medium text-gray-500">
                <div className="flex items-center">
                  <span>Product Category</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-2 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Weight</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-2 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Route</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-4 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Date</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-4 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Progress</span>
                  <ArrowIcons />
                </div>
              </th>
              <th className="px-4 py-3 font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <span>Status</span>
                  <ArrowIcons />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((shipment) => (
              <tr
                key={shipment.id}
                className="border-b border-gray-50 hover:bg-gray-50/50"
              >
                {/* Checkbox */}
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    className="rounded border border-[#E0E0E0] bg-[#F0F0F0]"
                  />
                </td>

                {/* Shipping ID + small description */}
                <td className="px-2 py-4">
                  <p className="font-semibold text-[#2A1298]">#{shipment.id}</p>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    {shipment.shippingMethod === "Air" && <Plane size={12} />}
                    {shipment.shippingMethod === "Road" && <Truck />}
                    {shipment.shippingMethod === "Rail" && <Train size={12} />}
                    {shipment.shippingMethod === "Ocean" && <Ship size={12} />}
                    <span>{shipment.shippingMethod} Freight</span>{" "}
                  </div>
                </td>

                {/* Company + Logo */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                      {getCompanyLogo(shipment.company) || (
                        <span className="text-xs font-bold text-gray-400">
                          {shipment.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-[#333]">
                        {shipment.company}
                      </p>
                      <p className="text-xs text-gray-500">
                        {shipment.category}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Carrier */}
                <td className="px-2 py-4 text-gray-600">{shipment.carrier}</td>

                {/* Product Category */}
                <td className="px-2 py-4 text-gray-600">{shipment.category}</td>

                {/* Weight */}
                <td className="px-2 py-4 text-gray-600">
                  {shipment.weight} kg
                </td>

                {/* Route - Origin & Destination */}
                <td className="px-2 py-4">
                  <div className="text-xs leading-5">
                    <p>
                      <span className="text-gray-800">{shipment.origin}</span>
                      <span className="text-gray-400"> (Origin)</span>
                    </p>
                    <p>
                      <span className="font-semibold text-[#2A1298]">
                        {shipment.destination}
                      </span>
                      <span className="text-gray-400"> (Destination)</span>
                    </p>
                  </div>
                </td>

                {/* Date*/}
                <td className="px-1 py-4 text-xs leading-5">
                  <p>
                    <span className="font-semibold text-[#333]">
                      {shipment.originDate}
                    </span>
                    <span className="text-gray-400"> (ATD)</span>
                  </p>
                  <p>
                    <span className="font-semibold text-[#2A1298]">
                      {shipment.destinationDate}
                    </span>
                    <span className="text-gray-400"> (ETA)</span>
                  </p>
                </td>

                {/* Progress */}
                <td className="px-2 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-violet-500"
                        style={{ width: `${shipment.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {shipment.progress}%
                    </span>
                  </div>
                </td>

                {/* Status with colored circle */}
                <td className="px-2 py-4">
                  <div className="flex items-center justify-center gap-1 rounded-xl bg-[#F5F5F5] px-2 py-1 text-center">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        statusDotStyles[shipment.status] || "bg-gray-400"
                      }`}
                    />
                    <span className={`text-xs font-semibold text-[#333333]`}>
                      {shipment.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentsTable;
