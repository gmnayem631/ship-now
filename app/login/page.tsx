// app/login/page.tsx
import Image from "next/image";
import { Eye } from "lucide-react";
import Logo from "../components/Logo";
import HeroImages from "../components/HeroImages";

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
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome to ShipNow</h1>
          <p className="mt-3 text-violet-100">
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
              <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
                <path d="M6 8L16 4L26 8V16L16 28L6 16V8Z" fill="#7C3AED" />
                <path d="M16 4L26 8V16L16 12V4Z" fill="#6D28D9" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-zinc-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Form fields */}
          <div className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full h-12 px-4 rounded-lg border border-zinc-200 bg-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full h-12 px-4 pr-12 rounded-lg border border-zinc-200 bg-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded accent-violet-600"
                />
                <span className="text-sm text-zinc-600">Remember Me</span>
              </label>
              <button
                type="button"
                className="text-sm font-medium text-violet-600 hover:text-violet-700"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="button"
              className="w-full h-12 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Login
            </button>
          </div>

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
