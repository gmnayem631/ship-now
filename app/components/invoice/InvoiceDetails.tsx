import { Invoice } from "@/app/data/invoicesData";

interface InvoiceDetailsProps {
  invoice: Invoice | null;
}

const InvoiceDetails = ({ invoice }: InvoiceDetailsProps) => {
  if (!invoice) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-gray-100 bg-white p-10 text-sm text-gray-400">
        Select an invoice to view details
      </div>
    );
  }

  // Calculate totals from line items (required by the assignment)
  const subTotal = invoice.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const tax = subTotal * 0.08;
  const fee = 10;
  const total = subTotal + tax + fee;

  return (
    <div className="rounded-xl border border-gray-100 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 p-4">
        <h2 className="text-lg font-semibold text-[#333]">Invoice Details</h2>
        <div className="flex gap-2">
          <button className="h-8 rounded-lg border border-gray-200 px-3 text-sm">
            Edit
          </button>
          <button className="h-8 rounded-lg border border-gray-200 px-3 text-sm">
            Hold
          </button>
          <button className="h-8 rounded-lg bg-[#333] px-3 text-sm text-white">
            Send Invoice
          </button>
        </div>
      </div>

      <div className="space-y-6 p-5">
        {/* Invoice meta */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Invoice</p>
            <p className="text-lg font-bold text-[#333]">#{invoice.id}</p>
            <span className="mt-1 inline-block rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700">
              {invoice.status}
            </span>
          </div>
          <div className="text-right text-sm">
            <p className="text-gray-500">Issue Date: {invoice.issueDate}</p>
            <p className="text-gray-500">Due Date: {invoice.dueDate}</p>
          </div>
        </div>

        {/* Bill From / Bill To */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Bill From</p>
            <p className="font-semibold text-[#333]">{invoice.billFrom.name}</p>
            <p className="text-sm text-gray-500">{invoice.billFrom.email}</p>
            <p className="text-sm text-gray-500">{invoice.billFrom.address}</p>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Bill To</p>
            <p className="font-semibold text-[#333]">{invoice.billTo.name}</p>
            <p className="text-sm text-gray-500">{invoice.billTo.email}</p>
            <p className="text-sm text-gray-500">{invoice.billTo.address}</p>
            <p className="text-sm text-gray-500">{invoice.billTo.phone}</p>
          </div>
        </div>

        {/* Package Summary */}
        <div>
          <h3 className="mb-3 font-semibold text-[#333]">Package Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-gray-100 text-gray-500">
                <tr>
                  <th className="pb-2 font-medium">Description</th>
                  <th className="pb-2 font-medium">Shipment Type</th>
                  <th className="pb-2 font-medium">Price</th>
                  <th className="pb-2 font-medium">Qty</th>
                  <th className="pb-2 text-right font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-50">
                    <td className="py-2.5 text-[#333]">{item.description}</td>
                    <td className="py-2.5 text-gray-500">
                      {item.shipmentType}
                    </td>
                    <td className="py-2.5">${item.price}</td>
                    <td className="py-2.5">{item.qty}</td>
                    <td className="py-2.5 text-right font-medium">
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="mt-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Sub Total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Fee</span>
              <span>${fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-gray-100 pt-2 text-base font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Note */}
        {invoice.note && (
          <div>
            <p className="mb-1 text-sm font-medium text-gray-500">Note</p>
            <p className="text-sm text-gray-600">{invoice.note}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceDetails;
