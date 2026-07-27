import { data } from "@/app/data/shipmentStatisticData";
import { ChevronDown, MoveUpRight } from "lucide-react";
import { BarChart, ResponsiveContainer } from "recharts";
import ShipmentStatChart from "./ShipmentStatChart";

const ShipmentStatistic = () => {
  return (
    <div className="rounded-xl border border-gray-100/50 bg-[#FEFEFE] p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#333333]">
          Shipment Statistic
        </h3>
        <div className="flex items-center rounded-lg border border-gray-200 bg-[#F0F0F0] px-2 py-1 text-xs font-semibold text-[#333333]">
          Last Year
          <ChevronDown size={24} />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-2xl font-bold text-[#333333]">4,352</span>
        <span className="flex items-center rounded-xl bg-[#D9F9E7] px-2 py-1 text-xs font-semibold text-[#007837]">
          <MoveUpRight size={16} />
          +8.7%
        </span>
      </div>

      {/* charts */}
      <div className="">
        {/* <BarChart
          style={{
            width: "100%",
            maxHeight: "auto",
            aspectRatio: 1.618,
          }}
          responsive
        ></BarChart> */}
        <ShipmentStatChart />
      </div>
    </div>
  );
};

export default ShipmentStatistic;
