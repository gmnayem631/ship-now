export interface PerformanceData {
  month: string;
  shipments: number;
  revenue: number;
}

export interface RegionData {
  name: string;
  value: number;
  color: string;
}

export const performanceData: PerformanceData[] = [
  { month: "Jan", shipments: 1200, revenue: 48000 },
  { month: "Feb", shipments: 1900, revenue: 62000 },
  { month: "Mar", shipments: 1500, revenue: 54000 },
  { month: "Apr", shipments: 2200, revenue: 78000 },
  { month: "May", shipments: 2800, revenue: 92000 },
  { month: "Jun", shipments: 2400, revenue: 85000 },
  { month: "Jul", shipments: 3100, revenue: 105000 },
];

export const regionData: RegionData[] = [
  { name: "North America", value: 45, color: "#856DF3" },
  { name: "Europe", value: 25, color: "#E3DDFF" },
  { name: "Asia Pacific", value: 20, color: "#333333" },
  { name: "Latin America", value: 10, color: "#757575" },
];
