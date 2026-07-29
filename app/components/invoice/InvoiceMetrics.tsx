import { CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react";

const metrics = [
  {
    title: "Paid Invoices",
    value: "$28,890",
    subtitle: "from 310 Invoices",
    icon: CheckCircle2,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Unpaid Invoices",
    value: "$16,700",
    subtitle: "from 120 Invoices",
    icon: XCircle,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Pending Invoices",
    value: "$8,050",
    subtitle: "from 80 Invoices",
    icon: Clock,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Overdue Invoices",
    value: "$22,110",
    subtitle: "from 245 Invoices",
    icon: AlertCircle,
    color: "text-violet-600 bg-violet-50",
  },
];

const InvoiceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-xl border border-gray-100 bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}
              >
                <Icon size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-xl font-bold text-[#333]">{item.value}</p>
                <p className="text-xs text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InvoiceMetrics;
