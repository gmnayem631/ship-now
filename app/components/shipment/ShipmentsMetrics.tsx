import { ChevronUp, ChevronDown } from "lucide-react";
import EllipsisIcon from "../ui/EllipsisIcon";
import TotalShipments from "./TotalShipments";
import PendingIcon from "./PendingIcon";
import DeliveryIcon from "./DeliveryIcon";
import CompletedIcon from "./CompletedIcon";

const metrics = [
  {
    title: "Total Shipments",
    value: "1,284",
    change: "4.6%",
    timeframe: "this week",
    changeType: "positive" as const,
    icon: TotalShipments,
  },
  {
    title: "Pending",
    value: "285",
    change: "8.7%",
    timeframe: "this week",
    changeType: "positive" as const,
    icon: PendingIcon,
  },
  {
    title: "Delivery",
    value: "594",
    change: "4.2%",
    timeframe: "from last week",
    changeType: "negative" as const,
    icon: DeliveryIcon,
  },
  {
    title: "Completed",
    value: "405",
    change: "3.9%",
    timeframe: "this week",
    changeType: "positive" as const,
    icon: CompletedIcon,
  },
];

const ShipmentsMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3DDFF] text-[#856DF3]">
                  <Icon />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {metric.title}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <EllipsisIcon />
              </button>
            </div>

            <div className="flex items-center justify-between">
              {" "}
              <p className="mt-4 text-2xl font-bold text-[#333]">
                {metric.value}
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-sm">
                <div className="flex justify-between gap-1">
                  <span className="flex items-center gap-1 rounded-full">
                    {metric.changeType === "positive" ? (
                      <ChevronUp className="rounded-full bg-[#D9F9E7] p-1 text-[#007837]" />
                    ) : (
                      <ChevronDown className="rounded-full bg-[#F4F2FC] p-1 text-[#2A1298]" />
                    )}
                  </span>
                  <div className="flex flex-col">
                    <p>
                      {metric.changeType === "positive" ? "Up by" : "Down"}
                      <span
                        className={
                          metric.changeType === "positive"
                            ? "text-[#007837]"
                            : "text-[#2A1298]"
                        }
                        style={{
                          backgroundColor: "#F0F0F0",
                          paddingRight: "4px",
                          paddingLeft: "1px",
                          borderRadius: "10px",
                        }}
                      >
                        {" "}
                        {metric.change}
                      </span>
                    </p>
                    <p className="">{metric.timeframe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShipmentsMetrics;
