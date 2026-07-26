import ShipNowLogo from "../ShipNowLogo";
import UserProfileCard from "../UserProfileCard";

const Sidebar = () => {
  return (
    <div className="h-screen w-55.75 border-2 bg-[#fefefe] px-4 py-5 text-center font-bold text-black">
      <div className="flex items-center gap-2 text-xl font-black text-[#333] italic">
        <ShipNowLogo />
        <span className="uppercase">ShipNow</span>
      </div>

      {/* User */}
      <UserProfileCard />
    </div>
  );
};

export default Sidebar;
