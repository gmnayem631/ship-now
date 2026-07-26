import { Eye } from "lucide-react";
import Logo from "../components/Logo";
import HeroImages from "../components/HeroImages";
import ShipNowLogo from "../components/ShipNowLogo";
import RememberCheckbox from "../components/auth/RememberCheckbox";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* ========== LEFT SIDE (purple) ========== */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[#856DF3] px-10 py-12 relative overflow-hidden">
        {/* Logo */}
        <Logo />

        {/* Images */}
        <HeroImages />

        {/* Bottom text */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-extrabold text-[#fefefe]">
            Welcome to ShipNow
          </h1>
          <p className="mt-3 text-[#fefefe]">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      {/* ========== RIGHT SIDE (form) ========== */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-100">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <ShipNowLogo />
            </div>
            <h2 className="text-2xl font-bold text-[#333333]">Welcome Back</h2>
            <p className="mt-2 text-sm text-[#757575]">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Form fields */}
          <LoginForm />

          {/* Register link */}
          <p className="mt-8 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              className="font-medium text-violet-600 hover:text-violet-700"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
