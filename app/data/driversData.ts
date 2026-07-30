export interface Driver {
  id: string;
  name: string;
  avatar: string;
  licenseClass: string;
  phone: string;
  status: "On Duty" | "On Break" | "Off Duty";
  safetyScore: number;
  totalDeliveries: number;
  assignedVehicle: string;
}

export const mockDrivers: Driver[] = [
  {
    id: "1",
    name: "Marcus Vance",
    avatar: "MV",
    licenseClass: "Class A CDL",
    phone: "+1 (555) 234-5678",
    status: "On Duty",
    safetyScore: 98,
    totalDeliveries: 1420,
    assignedVehicle: "Volvo FH16 (#101)",
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    avatar: "SJ",
    licenseClass: "Class A CDL",
    phone: "+1 (555) 876-5432",
    status: "On Duty",
    safetyScore: 95,
    totalDeliveries: 1180,
    assignedVehicle: "Freightliner (#104)",
  },
  {
    id: "3",
    name: "David Chen",
    avatar: "DC",
    licenseClass: "Class B CDL",
    phone: "+1 (555) 345-6789",
    status: "On Break",
    safetyScore: 92,
    totalDeliveries: 890,
    assignedVehicle: "Rivian EV (#03)",
  },
  {
    id: "4",
    name: "Elena Rostova",
    avatar: "ER",
    licenseClass: "Class A CDL",
    phone: "+1 (555) 987-6543",
    status: "Off Duty",
    safetyScore: 99,
    totalDeliveries: 1650,
    assignedVehicle: "Unassigned",
  },
];

export const driverLeaderboardData = [
  { name: "Elena R.", score: 99 },
  { name: "Marcus V.", score: 98 },
  { name: "Sarah J.", score: 95 },
  { name: "David C.", score: 92 },
  { name: "James K.", score: 90 },
];
