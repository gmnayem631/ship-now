import { ReactNode } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Footer } from "../components/ui/Footer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F0F0F0]">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
