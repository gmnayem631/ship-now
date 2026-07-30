export interface ShipmentTracker {
  id: string;
  trackingNo: string;
  sender: string;
  destination: string;
  carrier: string;
  eta: string;
  status: "In Transit" | "Delivered" | "Delayed" | "Pending";
  currentLocation: string;
  progressPercent: number;
}

export const mockShipments: ShipmentTracker[] = [
  {
    id: "1",
    trackingNo: "SH-982341-NY",
    sender: "New York Hub A",
    destination: "Boston Distribution Ctr",
    carrier: "Express Cargo #12",
    eta: "Today, 04:30 PM",
    status: "In Transit",
    currentLocation: "Hartford, CT (I-91 N)",
    progressPercent: 70,
  },
  {
    id: "2",
    trackingNo: "SH-441209-LA",
    sender: "Los Angeles Port",
    destination: "Phoenix Storage Facility",
    carrier: "Westline Freight #08",
    eta: "Tomorrow, 10:00 AM",
    status: "Delayed",
    currentLocation: "Palm Springs Rest Stop (Weather Hold)",
    progressPercent: 40,
  },
  {
    id: "3",
    trackingNo: "SH-102938-CHI",
    sender: "Chicago Depot",
    destination: "Detroit Terminal",
    carrier: "Midwest Transit #04",
    eta: "Jul 29, 02:15 PM",
    status: "Delivered",
    currentLocation: "Delivered to Dock 4",
    progressPercent: 100,
  },
];
