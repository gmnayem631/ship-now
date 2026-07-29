"use client";

import { useState } from "react";
import InvoiceDetails from "@/app/components/invoice/InvoiceDetails";
import InvoiceMetrics from "@/app/components/invoice/InvoiceMetrics";
import InvoicesList from "@/app/components/invoice/InvoicesList";
import { invoices } from "@/app/data/invoicesData";

export default function InvoicesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(
    invoices[2]?.id || null,
  );

  const selectedInvoice = invoices.find((inv) => inv.id === selectedId) || null;

  return (
    <div className="space-y-6 p-6">
      {/* Title */}
      <div>
        <p className="text-sm text-gray-500">Dashboard / Invoices & Billing</p>
        <h1 className="text-2xl font-bold text-[#333]">Invoices & Billing</h1>
      </div>

      {/* Metrics */}
      <InvoiceMetrics />

      {/* Master - Detail */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        {/* List - takes more space */}
        <div className="xl:col-span-3">
          <InvoicesList
            invoices={invoices}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {/* Details */}
        <div className="xl:col-span-2">
          <InvoiceDetails invoice={selectedInvoice} />
        </div>
      </div>
    </div>
  );
}
