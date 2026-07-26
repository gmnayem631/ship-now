import ShipNowLogo from "../ShipNowLogo";
import UserProfileCard from "./UserProfileCard";
import SidebarNav from "./SidebarNav";
import SidebarPromo from "./SidebarPromo";
const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen w-[222px] flex-col border-r border-gray-100 bg-white px-4 py-5">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <ShipNowLogo />
        <span className="text-lg font-black tracking-tight text-[#333] uppercase">
          ShipNow
        </span>
      </div>

      {/* User */}
      <div className="mt-5">
        <UserProfileCard />
      </div>

      {/* Navigation - make it scrollable if needed */}
      <div className="flex-1 overflow-y-auto">
        <SidebarNav />
      </div>

      {/* Promo Card */}
      <div className="mt-4">
        <SidebarPromo />
      </div>
    </aside>
  );
};

export default Sidebar;
