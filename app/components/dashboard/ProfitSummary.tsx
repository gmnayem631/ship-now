import { profitSummaryData } from "@/app/data/profitSummaryData";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TOOLTIP_COLORS: Record<string, string> = {
  revenue: "#856DF3",
  cost: "#333333",
};

const TOOLTIP_LABELS: Record<string, string> = {
  revenue: "Revenue",
  cost: "Cost",
};

const formatTooltipValue = (value: number) => `$${(value / 1000).toFixed(0)}k`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        borderRadius: "8px",
        padding: "8px",
      }}
    >
      <p style={{ margin: 0, marginBottom: 4, fontSize: 12, color: "#757575" }}>
        {label}
      </p>
      {payload.map((entry: any) => (
        <div
          key={entry.dataKey}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 4,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: TOOLTIP_COLORS[entry.dataKey as string],
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 12, color: "#757575" }}>
            {TOOLTIP_LABELS[entry.dataKey as string]}
          </span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#333333",
              marginLeft: "auto",
            }}
          >
            {formatTooltipValue(entry.value as number)}
          </span>
        </div>
      ))}
    </div>
  );
};

const ProfitSummary = () => {
  return (
    <div className="h-auto rounded-xl border border-gray-100/50 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#333333]">
          Profit Summary
        </h3>
        <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-[#F0F0F0] px-2 py-1 text-xs font-semibold text-[#333]">
          Last 8 Months
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-[#333333]">$624,550</span>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-100/70 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          <ArrowUpRight className="h-3.5 w-3.5" />
          +5.62%
        </span>
      </div>
      <div className="mt-3">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={profitSummaryData}
          // margin={{ top: 45, right: 20, left: -25, bottom: 0 }}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"} />
          <YAxis
            width={"auto"}
            axisLine={false}
            tickLine={false}
            tickMargin={12}
            ticks={[0, 25000, 50000, 75000, 100000]}
            tickFormatter={(value) => {
              if (value === 0) return "$0";
              return `$${value / 1000}K`;
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey={"revenue"}
            fill="#E3DDFF"
            activeBar={{ fill: "#856DF3", stroke: "#856DF3" }}
            radius={[10, 10, 0, 0]}
          />{" "}
          <Bar
            dataKey={"cost"}
            fill="#F0F0F0"
            activeBar={{ fill: "#333333", stroke: "#333333" }}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default ProfitSummary;
