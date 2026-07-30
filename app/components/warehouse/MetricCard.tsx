import React from "react";
import { TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  change: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  change,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-100 bg-[#FEFEFE] p-4 shadow-sm">
      <span className="text-xs font-semibold tracking-wider text-[#757575]">
        {title}
      </span>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold text-[#333333]">{value}</span>
          {unit && <span className="text-xs text-[#757575]">{unit}</span>}
        </div>
        <div className="flex items-center space-x-1 rounded-full bg-[#D9F9E7] px-2 py-0.5 text-xs font-medium text-[#007837]">
          <TrendingUp className="h-3 w-3" />
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};
