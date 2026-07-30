export type StatusType = "All" | "Expected" | "Received" | "Sent";

export interface PackageItem {
  id: string;
  date: string;
  status: "Sent" | "Received" | "Expected";
}

export const packagesData: PackageItem[] = [
  {
    id: "PKG-HK77420",
    date: "March 20, 2035 – 05:30 PM",
    status: "Sent",
  },
  {
    id: "PKG-A50812",
    date: "March 21, 2035 – 01:45 PM",
    status: "Received",
  },
  {
    id: "PKG-E10293",
    date: "March 22, 2035 – 09:00 AM",
    status: "Expected",
  },
];
