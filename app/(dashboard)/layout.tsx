import React from "react";
import Footer from "../components/layouts/Footer";
import Sidebar from "../components/layouts/Sidebar";

// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* Top header will go here later */}
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
