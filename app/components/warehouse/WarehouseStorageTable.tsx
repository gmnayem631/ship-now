import React from "react";
import { Filter, ChevronDown } from "lucide-react";
import { tableData } from "@/app/data/warehouseTableData";

export const WarehouseStorageTable: React.FC = () => {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#FEFEFE] p-5 shadow-sm">
      <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <h3 className="font-bold text-[#333333]">Warehouse Storage</h3>
        <div className="flex items-center space-x-2 text-xs">
          <button className="flex items-center space-x-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[#333333]">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </button>
          <div className="flex items-center space-x-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[#757575]">
            <span>Sort By:</span>
            <span className="font-semibold text-[#333333]">Section</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-100 pb-2 text-[#757575]">
              <th className="py-2 font-medium">Floor #</th>
              <th className="py-2 font-medium">Section #</th>
              <th className="py-2 font-medium">Category #</th>
              <th className="py-2 font-medium">Storage Level</th>
              <th className="py-2 font-medium">Percentage</th>
              <th className="py-2 text-right font-medium">Available Slots</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-[#333333]">
            {tableData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50">
                <td className="py-3 font-medium">{row.floor}</td>
                <td className="py-3 font-semibold">{row.section}</td>
                <td className="py-3">{row.category}</td>
                <td className="w-36 py-3">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-[#856DF3]"
                      style={{ width: `${row.fill}%` }}
                    />
                  </div>
                </td>
                <td className="py-3 font-semibold">{row.fill}%</td>
                <td className="py-3 text-right text-[#757575]">
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
