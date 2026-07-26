// Mock data for Dashboard page
// This file contains all static data for KPI cards, charts, tables, alerts, and timeline

export interface KPICard {
  id: string;
  title: string;
  value: string | number;
  unit?: string;
  change: number;
  isPositive: boolean;
  icon: string;
  bgColor: string;
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface Transaction {
  id: string;
  shipmentId: string;
  destination: string;
  status: "completed" | "in-transit" | "pending" | "delivered";
  amount: number;
  date: string;
  weight: number;
}

export interface Alert {
  id: string;
  type: "warning" | "info" | "error" | "success";
  title: string;
  message: string;
  timestamp: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  status: "completed" | "in-progress" | "pending";
  icon: string;
}

// KPI Cards Data
export const kpiCards: KPICard[] = [
  {
    id: "total-shipments",
    title: "Total Shipments",
    value: 1248,
    unit: "shipments",
    change: 12.5,
    isPositive: true,
    icon: "package",
    bgColor: "bg-blue-50",
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery",
    value: 94.2,
    unit: "%",
    change: 2.3,
    isPositive: true,
    icon: "clock",
    bgColor: "bg-green-50",
  },
  {
    id: "revenue",
    title: "Revenue",
    value: "$48,250",
    unit: "USD",
    change: 8.1,
    isPositive: true,
    icon: "dollar-sign",
    bgColor: "bg-purple-50",
  },
  {
    id: "active-shipments",
    title: "Active Shipments",
    value: 342,
    unit: "shipments",
    change: -3.2,
    isPositive: false,
    icon: "truck",
    bgColor: "bg-orange-50",
  },
];

// Revenue Chart Data (Last 7 days)
export const revenueChartData: ChartDataPoint[] = [
  {
    name: "Mon",
    revenue: 4000,
    target: 3800,
  },
  {
    name: "Tue",
    revenue: 3000,
    target: 3500,
  },
  {
    name: "Wed",
    revenue: 4200,
    target: 4000,
  },
  {
    name: "Thu",
    revenue: 3800,
    target: 3600,
  },
  {
    name: "Fri",
    revenue: 5200,
    target: 4800,
  },
  {
    name: "Sat",
    revenue: 4600,
    target: 4400,
  },
  {
    name: "Sun",
    revenue: 3900,
    target: 3700,
  },
];

// Shipment Status Chart Data
export const shipmentStatusData: ChartDataPoint[] = [
  {
    name: "Delivered",
    value: 425,
  },
  {
    name: "In Transit",
    value: 342,
    color: "#8B5CF6",
  },
  {
    name: "Pending",
    value: 156,
    color: "#F59E0B",
  },
  {
    name: "Failed",
    value: 45,
    color: "#EF4444",
  },
];

// Delivery Performance by Region
export const deliveryPerformanceData: ChartDataPoint[] = [
  {
    name: "North",
    performance: 92,
    target: 95,
  },
  {
    name: "South",
    performance: 85,
    target: 90,
  },
  {
    name: "East",
    performance: 88,
    target: 92,
  },
  {
    name: "West",
    performance: 94,
    target: 93,
  },
  {
    name: "Central",
    performance: 90,
    target: 94,
  },
];

// Recent Transactions Data
export const recentTransactions: Transaction[] = [
  {
    id: "TXN001",
    shipmentId: "SHP-2024-001",
    destination: "New York, NY",
    status: "delivered",
    amount: 2450,
    date: "2024-01-15",
    weight: 12.5,
  },
  {
    id: "TXN002",
    shipmentId: "SHP-2024-002",
    destination: "Los Angeles, CA",
    status: "in-transit",
    amount: 3200,
    date: "2024-01-14",
    weight: 18.3,
  },
  {
    id: "TXN003",
    shipmentId: "SHP-2024-003",
    destination: "Chicago, IL",
    status: "completed",
    amount: 1850,
    date: "2024-01-13",
    weight: 8.7,
  },
  {
    id: "TXN004",
    shipmentId: "SHP-2024-004",
    destination: "Houston, TX",
    status: "pending",
    amount: 2100,
    date: "2024-01-12",
    weight: 14.2,
  },
  {
    id: "TXN005",
    shipmentId: "SHP-2024-005",
    destination: "Phoenix, AZ",
    status: "delivered",
    amount: 1650,
    date: "2024-01-11",
    weight: 10.1,
  },
];

// Alerts Data
export const alerts: Alert[] = [
  {
    id: "ALT001",
    type: "warning",
    title: "Delayed Shipment",
    message: "Shipment SHP-2024-002 is 2 hours behind schedule",
    timestamp: "2024-01-15 10:30 AM",
  },
  {
    id: "ALT002",
    type: "info",
    title: "New Order Received",
    message: "3 new orders received from premium customers",
    timestamp: "2024-01-15 09:45 AM",
  },
  {
    id: "ALT003",
    type: "success",
    title: "Delivery Completed",
    message: "Shipment SHP-2024-001 delivered successfully",
    timestamp: "2024-01-15 08:20 AM",
  },
];

// Activity Timeline Data
export const activityTimeline: TimelineEvent[] = [
  {
    id: "EVT001",
    title: "Package Picked Up",
    description: "Order picked up from warehouse in Atlanta, GA",
    time: "2024-01-15 07:00 AM",
    status: "completed",
    icon: "check-circle",
  },
  {
    id: "EVT002",
    title: "In Transit",
    description: "Package on the way to destination",
    time: "2024-01-15 09:30 AM",
    status: "in-progress",
    icon: "truck",
  },
  {
    id: "EVT003",
    title: "Delivery Attempt",
    description: "Attempted delivery at destination",
    time: "2024-01-15 11:00 AM",
    status: "completed",
    icon: "check-circle",
  },
  {
    id: "EVT004",
    title: "Out for Delivery",
    description: "Package out for delivery with local courier",
    time: "2024-01-15 01:00 PM",
    status: "in-progress",
    icon: "truck",
  },
  {
    id: "EVT005",
    title: "Delivered",
    description: "Package delivered and signed for",
    time: "2024-01-15 03:30 PM",
    status: "pending",
    icon: "package",
  },
];

// Top Routes Data
export const topRoutesData: ChartDataPoint[] = [
  {
    name: "NY → LA",
    shipments: 125,
    revenue: 18500,
  },
  {
    name: "Chicago → Houston",
    shipments: 98,
    revenue: 14200,
  },
  {
    name: "LA → San Francisco",
    shipments: 87,
    revenue: 12800,
  },
  {
    name: "Boston → Miami",
    shipments: 76,
    revenue: 11200,
  },
  {
    name: "Seattle → Portland",
    shipments: 65,
    revenue: 9800,
  },
];

// Live Tracking Data - Sample shipment being tracked
export const liveTrackingData = {
  shipmentId: "SHP-2024-042",
  from: {
    city: "Atlanta",
    state: "GA",
    address: "123 Warehouse Ave",
    timestamp: "2024-01-15 07:00 AM",
  },
  to: {
    city: "New York",
    state: "NY",
    address: "456 Delivery Street",
    estimatedTime: "2024-01-15 11:30 PM",
  },
  currentLocation: {
    lat: 34.05,
    lng: -83.67,
    address: "I-85 North near Greensboro, NC",
    timestamp: "2024-01-15 02:45 PM",
  },
  status: "in-transit",
  progress: 45,
  driver: {
    name: "John Smith",
    phone: "+1-800-SHIP-NOW",
    vehicle: "Truck #12345",
  },
  weight: 42.5,
  dimensions: "24x18x12 inches",
  temperature: "22°C",
};
