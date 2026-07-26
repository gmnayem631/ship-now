// components/hero/HeroPanel.tsx
import LoginLogoContent from "../Logo";
import HeroImages from "./HeroImages";

const HeroPanel = () => {
  return (
    <div className="lg:flex lg:w-1/2 flex-col justify-between bg-[#856DF3] px-12 py-12 relative overflow-hidden">
      {/* Logo - top left */}
      <div className="relative z-10">
        <LoginLogoContent />
      </div>

      {/* Images - centered vertically */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <HeroImages />
      </div>

      {/* Bottom text */}
      <div className=" text-center">
        <h1 className="text-[40px] font-extrabold leading-tight text-white">
          Welcome to ShipNow
        </h1>
        <p className="mt-3 text-base text-white/90">
          Manage your shipments, fleet, and warehouse in one smart dashboard.
        </p>
      </div>
    </div>
  );
};

export default HeroPanel;
