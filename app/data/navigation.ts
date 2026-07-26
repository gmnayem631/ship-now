import {
  LayoutDashboard,
  BarChart3,
  Calendar,
  Package,
  MapPin,
  Warehouse,
  Truck,
  Users,
  FileText,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

export const sidebarNavItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Calendar", href: "/calendar", icon: Calendar },
  { label: "Shipments", href: "/shipments", icon: Package },
  { label: "Tracking", href: "/tracking", icon: MapPin },
  { label: "Warehouse", href: "/warehouse", icon: Warehouse },
  { label: "Fleets", href: "/fleets", icon: Truck },
  { label: "Drivers", href: "/drivers", icon: Users },
  { label: "Invoices & Billing", href: "/invoices", icon: FileText },
  { label: "Message", href: "/messages", icon: MessageSquare, badge: 18 },
  { label: "Notification", href: "/notifications", icon: Bell, badge: 9 },
  { label: "Settings", href: "/settings", icon: Settings },
];
