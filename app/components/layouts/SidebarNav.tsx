"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarNavItems } from "../../data/navigation";

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-6 flex flex-col gap-1">
      {sidebarNavItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#F0EFFF] text-[#7C3AED]"
                : "text-[#555] hover:bg-gray-100"
            }`}
          >
            <Icon
              size={20}
              className={isActive ? "text-[#7C3AED]" : "text-[#666]"}
            />
            <span className="flex-1 text-left">{item.label}</span>

            {/* Badge */}
            {item.badge && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7C3AED] px-1.5 text-xs font-semibold text-white">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarNav;
