import Image from "next/image";
import { ChevronDown } from "lucide-react";

const UserProfileCard = () => {
  return (
    <div className="group flex w-full items-center gap-3 rounded-lg border border-transparent bg-[#f0f0f0] p-2">
      {/* Avatar Image */}
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/images/Avatar.png"
          alt="John Doe"
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-1 flex-col items-start">
        <h3 className="text-base font-semibold text-[#333]">John Doe</h3>
        <p className="text-sm font-normal text-[#757575]">Admin</p>
      </div>

      {/* Chevron Icon */}
      <ChevronDown className="h-5 w-5 shrink-0 text-gray-800" />
    </div>
  );
};

export default UserProfileCard;
