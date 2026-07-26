import ShipNowLogo from "../components/ShipNowLogo";
import LoginForm from "../components/auth/LoginForm";
import HeroPanel from "../components/hero/HeroPanel";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left - Hero Panel */}
      <HeroPanel />

      {/* Right - Login Form */}
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

          {/* Form */}
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
