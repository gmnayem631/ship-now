"use client";

import CreateShipmentForm from "@/app/components/shipment/CreateShipmentForm";
import Link from "next/link";

export default function CreateShipmentPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb / Title */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          <Link href={"/"} className="font-semibold text-[#2A1298]">
            Dashboard
          </Link>{" "}
          /{" "}
          <Link href={"/shipments"} className="font-semibold text-[#2A1298]">
            Shipments
          </Link>{" "}
          / Create New Shipment
        </p>
        <h1 className="text-2xl font-bold text-[#333]">Create New Shipment</h1>
      </div>

      <CreateShipmentForm />
    </div>
  );
}
