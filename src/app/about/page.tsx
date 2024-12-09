
import Image from "next/image";
import phone from "@/public/Image (18).png";
import location from "@/public/Image (15).png";
import message from "@/public/Image (14).png";
import text from "@/public/Image (13).png";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800">Get Help</h1>
          <input
            type="text"
            className="mt-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Search for help..."
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-12">

          {/* Left Section (70%) */}
          <div className="sm:col-span-2 lg:col-span-7 space-y-8">
            {/* Payment Options */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">What Payment Options Can I Use on Nike Orders?</h2>
              <p className="text-gray-600 mt-4">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro.
                If you enter your PAN information at checkout, you &apos;ll be able to pay for your order with PayTM or a local credit or debit card.
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Apple Pay:</strong> Nike Members can store multiple debit or credit cards in their profile for faster checkout.
                If you&apos;re not already a Member, join us today.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="w-28 bg-black text-white py-3 rounded-xl hover:bg-gray-900">
                Join Us
              </button>
              <button className="w-28 bg-black text-white py-3 rounded-xl hover:bg-gray-300">
                Shop Nike
              </button>
            </div>

            {/* FAQs */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">FAQs</h3>
              <div className="space-y-4 mt-4 text-gray-600">
                <p><strong>Does my card need international purchases enabled?</strong><br />
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </p>
                <p><strong>Can I pay for my order with multiple methods?</strong><br />
                  No, payment for Nike orders can&apos;t be split between multiple payment methods.
                </p>
                <p><strong>What payment method is accepted for SNKRS orders?</strong><br />
                  You can use any accepted credit card to pay for your SNKRS order.
                </p>
                <p><strong>Why don&apos;t I see Apple Pay as an option?</strong><br />
                  To see Apple Pay as an option in the Nike App or on Nike.com you&apos;ll need to use a compatible Apple device running the latest OS be signed in to your iCloud account and have a supported card in your Wallet. Additionally you&apos;ll need to use Safari to use Apple Pay on Nike.com.
                </p>
                <p className="font-semibold">Was this answer helpful?</p>
                <div className="flex gap-4 text-black">
                  <IoMdThumbsUp />
                  <IoMdThumbsDown />
                </div>
                <p>Related</p>
                <p className="ml-14">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                <p className="ml-14">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
              </div>
            </div>
          </div>

          {/* Right Section (30%) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 border-l-2 border-[#dfdada] space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 ml-24">Contact Us</h2>

            {/* Contact Items */}
            <div className="space-y-8">
              <div className="flex flex-col items-center text-center">
                <Image src={phone} alt="Phone Icon" className="w-12 h-12 mb-5" />
                <p>Phone: 000 800 919 0566</p>
                <p className="mt-4">Products & Orders: 24 hours a day, 7 days a week</p>
                <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </div>

              {/* Text Contact */}
              <div className="flex flex-col items-center text-center">
                <Image src={text} alt="Text Icon" className="w-12 h-12" />
                <p className="mt-4">24 hours a day</p>
                <p>7 days a week</p>
              </div>

              {/* Message Contact */}
              <div className="flex flex-col items-center text-center">
                <Image src={message} alt="Message Icon" className="w-12 h-12" />
                <p className="font-semibold mt-4">Company Info & Enquiries</p>
                <p className="text-gray-600">07:30 - 16:30, Monday - Friday</p>
                <p className="text-gray-600">Email: support@nike.com</p>
              </div>

              {/* Location Contact */}
              <div className="flex flex-col items-center text-center">
                <Image src={location} alt="Location Icon" className="w-12 h-12" />
                <p className="font-semibold mt-4">Nike Headquarters</p>
                <p className="text-gray-600">1 Nike Drive, Beaverton, OR, 97005</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
