import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="relative mx-auto h-85 w-75">
      <div className="absolute left-0 top-8 h-70 w-60 overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src="/images/delivery-truck.png"
          alt="Delivery truck"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute -right-4 top-0 h-40 w-35 overflow-hidden rounded-xl shadow-xl">
        <Image
          src="/images/customer-phone.png"
          alt="Customer with phone"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroImages;
