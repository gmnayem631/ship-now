import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="relative mr-28 h-85 w-75 mb-16">
      <div className="absolute left-0 top-8 h-96.5 w-102.5 overflow-hidden rounded-xl">
        <Image
          src="/images/delivery-truck.png"
          alt="Delivery truck"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute -right-38 -top-6 h-57 w-44.5 overflow-hidden rounded-lg">
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
