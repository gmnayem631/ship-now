import React from "react";
import { Filter, ChevronDown } from "lucide-react";
import { tableData } from "@/app/data/warehouseTableData";
import ArrowIcons from "../ui/ArrowIcons";

export const WarehouseStorageTable: React.FC = () => {
  return (
    <div className="rounded-xl bg-[#FEFEFE] p-5 shadow-sm">
      <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <h3 className="font-semibold text-[#333333]">Warehouse Storage</h3>
        <div className="flex items-center space-x-2 text-xs">
          <button className="flex items-center space-x-1 rounded-lg bg-[#F0F0F0] px-3 py-1.5 text-[#333333]">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </button>
          <div className="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-[#757575]">
            <span>Sort By:</span>
            <div className="flex gap-1 rounded-lg bg-[#F0F0F0] px-3 py-1.5">
              <span className="font-semibold text-[#333333]">Section</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 pb-2 text-[#757575]">
              <th className="py-2 font-medium">
                <div className="flex gap-1">
                  Section <ArrowIcons />
                </div>
              </th>
              <th className="py-2 font-medium">
                <div className="flex gap-1">
                  Category <ArrowIcons />
                </div>
              </th>
              <th className="py-2 font-medium">
                <div className="flex gap-1">
                  Storage Level <ArrowIcons />
                </div>
              </th>
              <th className="py-2 font-medium">
                <div className="flex justify-center gap-1">
                  Percentage <ArrowIcons />
                </div>
              </th>
              <th className="py-2 text-right font-medium">
                <div className="flex justify-center gap-1">
                  Available Slots <ArrowIcons />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[#333333]">
            {tableData.map((row, i) => (
              <tr key={i} className="">
                <td className="py-3 font-medium">{row.floor}</td>
                <td className="py-3 font-semibold">{row.section}</td>
                <td className="py-3">{row.category}</td>
                <td className="w-36 py-3">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 bg-[#856DF3]"
                      style={{ width: `${row.fill}%` }}
                    />
                  </div>
                </td>
                <td className="py-3 text-center font-semibold">{row.fill}%</td>
                <td className="py-3 text-center text-[#757575]">
                  {row.available}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
