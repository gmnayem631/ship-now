import { ReactNode } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Footer } from "../components/ui/Footer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#F0F0F0] md:flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col md:pl-16 xl:pl-56">
        <main className="w-full min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
