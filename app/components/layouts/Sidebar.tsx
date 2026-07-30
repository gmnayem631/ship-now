"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import ShipNowLogo from "../ShipNowLogo";
import UserProfileCard from "./UserProfileCard";
import SidebarNav from "./SidebarNav";
import SidebarPromo from "./SidebarPromo";
import { sidebarNavItems } from "../../data/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* -------------------------------------------------------------
          1. MOBILE TOP NAVIGATION BAR (Visible on < md screens)
         ------------------------------------------------------------- */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <ShipNowLogo />
          <span className="text-base font-black tracking-tight text-[#333] uppercase">
            ShipNow
          </span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-[#333] hover:text-[#856DF3]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* -------------------------------------------------------------
          2. MOBILE DRAWER SLIDEOVER MENU (Visible when toggled on mobile)
         ------------------------------------------------------------- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative flex w-4/5 max-w-xs flex-col bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <ShipNowLogo />
                <span className="text-base font-black tracking-tight text-[#333] uppercase">
                  ShipNow
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#757575] hover:text-[#333]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-4">
              <UserProfileCard />
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              <SidebarNav />
            </div>

            <div className="mt-auto pt-4">
              <SidebarPromo />
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          3. RESPONSIVE SIDEBAR (COLLAPSED ON TABLET, EXPANDED ON DESKTOP)
         ------------------------------------------------------------- */}
      <aside className="sticky top-0 hidden h-screen w-16 shrink-0 flex-col border-r border-gray-100 bg-white px-2 py-5 transition-all duration-300 md:flex xl:w-56 xl:px-4">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2.5 xl:justify-start">
          <ShipNowLogo />
          <span className="hidden text-lg font-black tracking-tight text-[#333] uppercase xl:inline">
            ShipNow
          </span>
        </div>

        {/* User Profile Card */}
        <div className="mt-5">
          {/* Expanded View for Desktop */}
          <div className="hidden xl:block">
            <UserProfileCard />
          </div>

          {/* Collapsed Icon-Only View for Tablet */}
          <div className="flex justify-center xl:hidden">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-gray-200">
              <Image
                src="/images/Avatar.png"
                alt="John Doe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Area */}
        <div className="mt-6 flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {sidebarNavItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  title={item.label}
                  className={`group relative flex items-center justify-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all xl:justify-start ${
                    isActive
                      ? "bg-[#E3DDFF] text-[#856DF3]"
                      : "text-[#757575] hover:bg-gray-100 hover:text-[#333]"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`shrink-0 ${
                      isActive
                        ? "text-[#856DF3]"
                        : "text-[#757575] group-hover:text-[#333]"
                    }`}
                  />

                  {/* Label (Desktop Only) */}
                  <span className="hidden flex-1 text-left xl:inline">
                    {item.label}
                  </span>

                  {/* Badge (Desktop) */}
                  {item.badge && (
                    <span className="hidden h-5 min-w-5 items-center justify-center rounded-full bg-[#856DF3] px-1.5 text-xs font-semibold text-white xl:flex">
                      {item.badge}
                    </span>
                  )}

                  {/* Badge Indicator Dot (Tablet Only) */}
                  {item.badge && (
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#856DF3] xl:hidden" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Promo Card (Desktop Only) */}
        <div className="mt-4 hidden xl:block">
          <SidebarPromo />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
