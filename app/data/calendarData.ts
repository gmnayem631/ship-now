export interface ScheduleEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  type: "Delivery" | "Dispatch" | "Maintenance" | "Audit";
  status: "Completed" | "In Progress" | "Scheduled";
}

export const mockEvents: ScheduleEvent[] = [
  {
    id: "1",
    title: "Batch Delivery - North District",
    time: "09:00 AM - 11:30 AM",
    location: "Hub A (Section B2)",
    type: "Delivery",
    status: "Completed",
  },
  {
    id: "2",
    title: "Fleet Maintenance Check (Truck #4)",
    time: "01:00 PM - 02:30 PM",
    location: "Main Service Center",
    type: "Maintenance",
    status: "In Progress",
  },
  {
    id: "3",
    title: "Regional Dispatch - Cargo Container 8",
    time: "03:30 PM - 05:00 PM",
    location: "Warehouse Central",
    type: "Dispatch",
    status: "Scheduled",
  },
  {
    id: "4",
    title: "Quarterly Inventory Audit",
    time: "05:15 PM - 06:45 PM",
    location: "Section C3 (Electronics)",
    type: "Audit",
    status: "Scheduled",
  },
];
