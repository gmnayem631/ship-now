// components/dashboard/RecentShipments.tsx
import { Search } from "lucide-react";
import SortIcon from "../ui/SortIcon";
import EllipsisIcon from "../ui/EllipsisIcon";
import ArrowIcons from "../ui/ArrowIcons";

const rows = [
  {
    id: "#SH8237748",
    company: "TechGear Inc.",
    carrier: "FedEx",
    route: "Los Angeles, CA → Chicago, IL",
    date: "Mar 20, 2025",
    status: "In Transit",
  },
  {
    id: "#SH8102635",
    company: "StyleHub Co.",
    carrier: "DHL",
    route: "New York, NY → Atlanta, GA",
    date: "Mar 19, 2025",
    status: "Out for Delivery",
  },
  {
    id: "#SH8037921",
    company: "FreshNest",
    carrier: "UPS",
    route: "Dallas, TX → Miami, FL",
    date: "Mar 18, 2025",
    status: "Delivered",
  },
  {
    id: "#SH8574523",
    company: "FitPlus Gear",
    carrier: "USPS",
    route: "Seattle, WA → Denver, CO",
    date: "Mar 21, 2025",
    status: "Processing",
  },
  {
    id: "#SH8457830",
    company: "AutoParts Pro",
    carrier: "Aramex",
    route: "Detroit, MI → San Diego, CA",
    date: "Mar 20, 2025",
    status: "In Transit",
  },
];

const statusStyles: Record<string, string> = {
  "In Transit": "bg-[#E0E0E0] text-[#333]",
  "Out for Delivery": "bg-[#E3DDFF] text-[#856DF3]",
  Delivered: "bg-[#D9F9E7] text-[#007837]",
  Processing: "bg-[#E3EDFF] text-[#235BC2]",
};

export default function RecentShipments() {
  return (
    <div className="rounded-xl border border-gray-100/50 bg-[#FEFEFE] p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[#333333]">Recent Shipments</h3>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-[#F0F0F0] px-3 py-1.5 text-[#757575]">
            <Search className="h-3.5 w-3.5 text-[#757575]" />
            <input
              placeholder="Search shipment"
              className="text-xs outline-none placeholder:text-[#B9B9B9]"
            />
          </div>
          <div className="rounded-lg bg-[#F0F0F0] p-2">
            <SortIcon />
          </div>
          <div className="rounded-lg bg-[#F0F0F0] p-2 font-semibold">
            <EllipsisIcon />
          </div>
        </div>
      </div>
      <table className="mt-4 w-full text-left text-xs">
        <thead>
          <tr className="bg-[#E3DDFF] text-[#757575]">
            <th className="rounded-l-lg px-2.5 py-3.5 font-medium">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="border border-[#E0E0E0] bg-[#F0F0F0]"
                />
                <span>Shipping ID</span>
                <ArrowIcons />
              </div>
            </th>

            <th className="px-2.5 py-3.5 font-medium">
              <div className="flex items-center gap-1">
                <span>Company</span>
                <ArrowIcons />
              </div>
            </th>

            <th className="px-2.5 py-3.5 font-medium">
              <div className="flex items-center gap-1">
                <span>Carrier</span>
                <ArrowIcons />
              </div>
            </th>

            <th className="px-2.5 py-3.5 font-medium">
              <div className="flex items-center gap-1">
                <span>Route</span>
                <ArrowIcons />
              </div>
            </th>

            <th className="px-2.5 py-3.5 font-medium">
              <div className="flex items-center gap-1">
                <span>Date</span>
                <ArrowIcons />
              </div>
            </th>

            <th className="rounded-r-lg px-2.5 py-3.5 font-medium">
              <div className="flex items-center gap-1">
                <span>Status</span>
                <ArrowIcons />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="ml-2 border-t border-gray-50 text-[#333333]">
              <td className="flex items-center gap-1 py-3 font-medium text-[#856DF3]">
                <input
                  type="checkbox"
                  className="border border-[#E0E0E0] bg-[#F0F0F0]"
                />
                {r.id}
              </td>
              <td className="py-3">{r.company}</td>
              <td className="py-3">{r.carrier}</td>
              <td className="py-3 text-[#757575]">{r.route}</td>
              <td className="py-3 text-[#757575]">{r.date}</td>
              <td className="py-3">
                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-medium ${statusStyles[r.status]}`}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
