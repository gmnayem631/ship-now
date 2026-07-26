import React from "react";
import RememberCheckbox from "./RememberCheckbox";
import { Eye } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Email */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-[#333]">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter a valid email address"
          className="h-11 w-full rounded-lg border border-zinc-200 bg-[#f5f5f5] px-3 py-2.5 text-sm placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 sm:h-12"
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-[#333]">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Create a strong password"
            className="h-11 w-full rounded-lg border border-zinc-200 bg-[#f5f5f5] px-3 py-2.5 pr-10 text-sm placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 sm:h-12"
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
      <RememberCheckbox />

      {/* Login button */}
      <button
        type="button"
        className="h-11 w-full rounded-lg bg-[#333] text-sm font-semibold text-[#fefefe] sm:h-12"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
