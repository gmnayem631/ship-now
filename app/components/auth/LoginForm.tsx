import React from "react";
import RememberCheckbox from "./RememberCheckbox";
import { Eye } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="space-y-5">
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-[#333] mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter a valid email address"
          className="w-full h-12 px-3 py-2.25 rounded-lg border border-zinc-200 bg-[#f5f5f5] text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-[#333] mb-1.5">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full h-12 px-3 py-2.25 rounded-lg border border-zinc-200 bg-[#f5f5f5] text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500"
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
        className="w-full h-12 rounded-lg bg-[#333] text-[#fefefe] text-sm font-semibold"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
