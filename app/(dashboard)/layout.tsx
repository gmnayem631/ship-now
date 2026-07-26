import { ReactNode } from "react";
import Sidebar from "../components/layouts/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FEFEFE]">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-6">{children}</main>
        {/* Footer */}
      </div>
    </div>
  );
}
