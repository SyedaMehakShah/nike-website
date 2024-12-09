 
import Image from "next/image";
import frame1 from "@/public/Frame (1).png";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg p-6 sm:p-8 rounded-lg">
        {/* Logo and Heading */}
        <div className="text-center">
          <Image
            src={frame1}
            alt="Nike Logo"
            className="mx-auto w-20 sm:w-24 h-auto"
          />
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold text-[#111111] mt-4">
            Your Account for Everything Nike
          </h1>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Email Address */}
          <div>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Email address"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Password"
            />
          </div>

          {/* Checkbox and Forgotten Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-[#8D8D8D]">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <a href="#" className="text-[#8D8D8D] hover:underline">
              Forgotten your password?
            </a>
          </div>

          {/* Terms and Privacy Policy */}
          <p className="text-xs text-[#8D8D8D] mt-4">
            By logging in, you agree to Nike&apos;s{" "}
            <a href="#" className="text-[#8D8D8D] hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#8D8D8D] hover:underline">
              Terms of Use
            </a>
            .
          </p>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
          >
            Sign In
          </button>
        </form>

        {/* Join Us Section */}
        <p className="text-center text-sm text-[#8D8D8D] mt-6">
          Not a member?{" "}
          <a href="#" className="text-black font-semibold hover:underline">
            Join us
          </a>
        </p>
      </div>
    </div>
  );
}
