import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="relative mx-auto h-70 w-65 sm:h-80 sm:w-75 lg:h-90 lg:w-[320px]">
      {/* Main truck image */}
      <div className="absolute left-0 top-8 h-57.5 w-52.5 p-4 overflow-hidden rounded-2xl shadow-2xl sm:h-65 sm:w-60 lg:h-72.5 lg:w-65">
        <Image
          src="/images/delivery-truck.png"
          alt="Delivery truck"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 210px, (max-width: 1024px) 240px, 260px"
          priority
        />
      </div>

      {/* Overlapping phone image */}
      <div className="absolute -right-2 top-0 h-32.5 w-28.75 overflow-hidden rounded-xl sm:-right-4 sm:h-36.25 sm:w-32.5 lg:h-40 lg:w-35">
        <Image
          src="/images/customer-phone.png"
          alt="Customer with phone"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 115px, (max-width: 1024px) 130px, 140px"
          priority
        />
      </div>
    </div>
  );
};

export default HeroImages;
