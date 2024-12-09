
import Image from "next/image";
import frame1 from "@/public/Frame (1).png";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg p-6 sm:p-8 rounded-lg">
        {/* Logo and Heading */}
        <div className="text-center">
          <Image src={frame1} alt="Nike Logo" className="mx-auto w-20 sm:w-24 h-auto" />
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-4">
            Become A Nike Member
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>
        </div>

        {/* Join Us Form */}
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

          {/* First Name */}
          <div>
            <input
              type="text"
              id="first-name"
              className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              id="last-name"
              className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your last name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              id="dob"
              className="w-full border-gray-300 border rounded-lg p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Country Selector */}
          <div>
            <select
              id="country"
              className="w-full border-gray-300 border rounded-lg p-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select your country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>

          {/* Gender Buttons */}
          <div className="flex space-x-2">
            <button
              type="button"
              className="w-1/2 border border-gray-300 text-gray-500 py-2 rounded-lg hover:bg-gray-100"
            >
              Male
            </button>
            <button
              type="button"
              className="w-1/2 border border-gray-300 text-gray-500 py-2 rounded-lg hover:bg-gray-100"
            >
              Female
            </button>
          </div>

          {/* Sign Up for Email */}
          <div className="flex items-center mt-4">
            <input type="checkbox" id="signup" className="mr-2" />
            <label htmlFor="signup" className="text-sm text-gray-600">
              Sign up for email to get updates from Nike on products, offers,
              and member benefits.
            </label>
          </div>

          {/* Privacy Policy and Terms */}
          <div className="mt-4 text-xs text-gray-500">
            By creating an account, you agree to Nike&apos;s{" "}
            <a href="#" className="text-gray-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-600 hover:underline">
              Terms of Use
            </a>
            .
          </div>

          {/* Join Us Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900"
            >
              Join Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
