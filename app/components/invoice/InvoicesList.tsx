"use client";

import { Invoice } from "@/app/data/invoicesData";
import { Search } from "lucide-react";

interface InvoicesListProps {
  invoices: Invoice[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const statusStyles: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Unpaid: "bg-orange-100 text-orange-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-700",
};

const InvoicesList = ({
  invoices,
  selectedId,
  onSelect,
}: InvoicesListProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-[#333]">Invoices</h2>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search
              size={16}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search Invoices"
              className="h-9 w-full rounded-lg border border-gray-200 bg-[#F5F5F5] pr-3 pl-9 text-sm outline-none focus:border-[#856DF3] sm:w-48"
            />
          </div>
          <button className="h-9 rounded-lg bg-[#333] px-4 text-sm font-medium text-white">
            New Invoice
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50/70 text-gray-500">
            <tr>
              <th className="px-4 py-3 font-medium">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 font-medium">Invoice ID</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Shipping ID</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                onClick={() => onSelect(invoice.id)}
                className={`cursor-pointer border-b border-gray-50 hover:bg-gray-50 ${
                  selectedId === invoice.id ? "bg-violet-50" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="px-4 py-3 font-medium text-[#2A1298]">
                  {invoice.id}
                </td>
                <td className="px-4 py-3 text-[#333]">{invoice.company}</td>
                <td className="px-4 py-3 text-gray-600">
                  {invoice.shippingId}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  <div className="text-xs">
                    <p>{invoice.issueDate} (Issue)</p>
                    <p className="text-gray-400">{invoice.dueDate} (Due)</p>
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-[#333]">
                  ${invoice.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusStyles[invoice.status]
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesList;
