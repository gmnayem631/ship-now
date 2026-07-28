"use client";

import { useMemo, useState } from "react";

import { shipments } from "@/app/data/shipmentsData";
import ShipmentsHeader from "@/app/components/shipment/ShipmentsHeader";
import ShipmentCard from "@/app/components/shipment/ShipmentCard";

const ShipmentsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShipments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return shipments.filter((shipment) => {
      const matchesTab = activeTab === "All" || shipment.status === activeTab;

      const matchesSearch =
        query === "" ||
        shipment.id.toLowerCase().includes(query) ||
        shipment.company.toLowerCase().includes(query) ||
        shipment.category.toLowerCase().includes(query) ||
        shipment.origin.toLowerCase().includes(query) ||
        shipment.destination.toLowerCase().includes(query) ||
        shipment.carrier.toLowerCase().includes(query);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-6 p-6">
      <ShipmentsHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {filteredShipments.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredShipments.map((shipment) => (
            <ShipmentCard key={shipment.id} shipment={shipment} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white p-10 text-center text-sm text-gray-500">
          No shipments match your search or filter.
        </div>
      )}
    </div>
  );
};

export default ShipmentsPage;
