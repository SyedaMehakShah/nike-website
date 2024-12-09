import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";


export default function Footer() {
  return (
    <div className="bg-black text-[#7E7E7E] p-6">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <h1 className="font-semibold text-[#FFFFFF] mb-2">Find A Store</h1>
            <ul className="space-y-1">
              <li>Become A Member</li>
              <li>Sign Up for Email</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="font-semibold text-[#FFFFFF] mb-2">Get Help</h1>
            <ul className="space-y-1">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="font-semibold text-[#FFFFFF] mb-2">About Nike</h1>
            <ul className="space-y-1">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Right: Icons Row */}
        <div className="flex justify-center sm:justify-end space-x-4">
          <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
            <FaFacebookF />
          </div>
          <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
            <TiSocialYoutubeCircular />
          </div>
          <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
            <FaTwitter />
          </div>
          <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
            <TiSocialInstagram />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Paragraph */}
        <p className="text-sm">India © 2023 Nike, Inc. All Rights Reserved</p>

        {/* Right Links */}
        <ul className="flex space-x-4 text-sm">
          <li>Guides</li>
          <li>Terms of Sale</li>
          <li>Terms of Use</li>
          <li>Nike Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

