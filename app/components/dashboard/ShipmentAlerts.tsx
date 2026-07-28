// components/dashboard/ShipmentAlerts.tsx
import { AlertTriangle } from "lucide-react";

const alerts = [
  { count: 5, label: "Customs Clearance Delay", color: "bg-[#856DF3]" },
  { count: 4, label: "Incorrect Address Provided", color: "bg-[#F5B84E]" },
  { count: 3, label: "Weather-Related Hold", color: "bg-[#2ECC71]" },
];

const list = [
  { id: "#SH8743921", label: "Customs Clearance Delay", time: "Mar 21, 2025" },
  {
    id: "#SH8743922",
    label: "Incorrect Address Provided",
    time: "Mar 21, 2025",
  },
  { id: "#SH8743923", label: "Weather-Related Hold", time: "Mar 21, 2025" },
  {
    id: "#SH8743924",
    label: "Incorrect Address Provided",
    time: "Mar 21, 2025",
  },
];

export default function ShipmentAlerts() {
  return (
    <div className="rounded-xl border border-gray-100/50 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#333333]">
          Shipment Alerts
        </h3>
        <span className="flex items-center gap-1 text-xs font-semibold text-red-500">
          <AlertTriangle className="h-3.5 w-3.5" /> 12 Delays Detected
        </span>
      </div>
      <div className="mt-4 flex gap-2">
        {alerts.map((a, i) => (
          <div
            key={i}
            className={`flex h-14 w-14 flex-col items-center justify-center rounded-xl ${a.color} text-white`}
          >
            <span className="text-lg leading-none font-bold">{a.count}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-3">
        {list.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <div>
              <p className="font-medium text-[#333333]">{item.id}</p>
              <p className="text-[#856DF3]">{item.label}</p>
            </div>
            <span className="text-[#B9B9B9]">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
