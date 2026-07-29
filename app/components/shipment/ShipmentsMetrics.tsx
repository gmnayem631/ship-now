import { Clock, Truck, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    title: "Total Shipments",
    value: "1,284",
    change: "Up by 4.6%",
    timeframe: "this week",
    changeType: "positive" as const,
    icon: Truck,
  },
  {
    title: "Pending",
    value: "285",
    change: "Up by 8.7%",
    timeframe: "this week",
    changeType: "positive" as const,
    icon: Clock,
  },
  {
    title: "Delivery",
    value: "594",
    change: "Down 4.2%",
    timeframe: "from last week",
    changeType: "negative" as const,
    icon: Truck,
  },
  {
    title: "Completed",
    value: "405",
    change: "Up by 3.9%",
    timeframe: "this week",
    changeType: "positive" as const,
    icon: CheckCircle2,
  },
];

const ShipmentsMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const isPositive = metric.changeType === "positive";

        return (
          <div
            key={metric.title}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Icon size={16} />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {metric.title}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>

            <p className="mt-4 text-2xl font-bold text-[#333]">
              {metric.value}
            </p>

            <div className="mt-2 flex items-center gap-1.5 text-sm">
              <span
                className={isPositive ? "text-emerald-600" : "text-red-500"}
              >
                {isPositive ? "↑" : "↓"} {metric.change}
              </span>
              <span className="text-gray-400">{metric.timeframe}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipmentsMetrics;
