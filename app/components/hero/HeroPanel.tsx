import LoginLogoContent from "../Logo";
import HeroImages from "./HeroImages";

const HeroPanel = () => {
  return (
    <div className="relative flex w-full flex-col items-center bg-[#856DF3] px-6 py-10 lg:w-1/2 lg:justify-between lg:px-12 lg:py-12">
      {/* Logo */}
      <div className="mb-8 lg:mb-0">
        <LoginLogoContent />
      </div>

      {/* Images */}
      <div className="mb-8 w-full max-w-85 lg:mb-0 lg:flex-1 lg:flex lg:items-center lg:justify-center">
        <HeroImages />
      </div>

      {/* Bottom text */}
      <div className="text-center lg:text-left px-3">
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-[#fefefe] sm:text-[36px] lg:text-[40px]">
          Welcome to ShipNow
        </h1>
        <p className="mt-3 text-sm text-[#fefefe] sm:text-base">
          Manage your shipments, fleet, and warehouse in one smart dashboard.
        </p>
      </div>
    </div>
  );
};

export default HeroPanel;
