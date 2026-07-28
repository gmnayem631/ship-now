// components/dashboard/ShipmentType.tsx
"use client";
import { PieChart, Pie, Cell } from "recharts";
import EllipsisIcon from "../ui/EllipsisIcon";

interface Data {
  name: string;
  value: number;
  color: string;
  shipment: number;
}

const data: Data[] = [
  { name: "Road Freight", value: 46, color: "#856DF3", shipment: 1150 },
  { name: "Air Freight", value: 28, color: "#757575", shipment: 700 },
  { name: "Ocean Freight", value: 17, color: "#333", shipment: 425 },
  { name: "Rail Freight", value: 9, color: "#E0E0E0", shipment: 225 },
];

export default function ShipmentType() {
  const total = 2500;
  return (
    <div className="rounded-xl border border-gray-100/50 bg-white p-3">
      <div className="flex items-center justify-between">
        <h3 className="mb-4 text-base font-semibold text-[#333333]">
          Shipment Type
        </h3>
        <div className="rounded-lg bg-[#F0F0F0] p-2 font-semibold">
          <EllipsisIcon />
        </div>
      </div>
      <div className="relative flex justify-center">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={85}
            paddingAngle={2}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-[#757575]">Total Shipment</span>
          <span className="text-2xl font-bold text-[#333333]">{total}</span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-y-2 text-xs">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`rounded-lg p-2 font-bold ${d.color === "#E0E0E0" ? "text-[#333333]" : "text-[#FEFEFE]"}`}
              style={{ backgroundColor: `${d.color}` }}
            >
              {d.value}%
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-[#333333]">{d.name}</span>
              <span className="text-[#333333]">{d.shipment} Shipments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
