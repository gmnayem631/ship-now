import ShipNowLogo from "../../components/ShipNowLogo";
import LoginForm from "../../components/auth/LoginForm";
import HeroPanel from "../../components/hero/HeroPanel";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      {/* Left / Top - Hero Panel */}
      <HeroPanel />

      {/* Right / Bottom - Login Form */}
      <div className="flex w-full flex-1 items-center justify-center px-6 py-10 lg:w-1/2 lg:px-12 lg:py-12">
        <div className="w-full max-w-100">
          {/* Header - only show logo on form side for tablet/desktop */}
          <div className="mb-8 text-center lg:mb-10">
            <div className="mb-5 flex justify-center lg:mb-6">
              <ShipNowLogo />
            </div>
            <h2 className="text-2xl font-bold text-[#333333]">Welcome Back</h2>
            <p className="mt-2 text-sm text-[#757575]">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          <LoginForm />

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
