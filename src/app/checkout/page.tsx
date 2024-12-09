
import Image from "next/image";
import image from "@/public/Image (2).png";
import product from "@/public/Frame (2).png";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 gap-12">
        {/* Left Section (Full Width on Small Screens, 5/8 width on large) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Delivery Info */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              How would you like to get your order?
            </h1>
            <p className="text-gray-600 mt-4">
              Customs regulations for India require a copy of the recipient&apos;s
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.{" "}
              <a href="#" className="underline">
                Learn More
              </a>
            </p>
          </div>

          {/* Delivery Options */}
          <div className="border p-4 bg-white border-black">
            <button className="font-semibold text-gray-800">Deliver It</button>
          </div>

          {/* Form Section */}
          <form className="space-y-8 bg-white p-6 border rounded-md">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Enter your name and address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="border p-2 w-full rounded-md"
                />
                <p className="text-sm text-gray-500 mt-1">
                  We don’t ship to P.O. boxes
                </p>
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="border p-2 w-full mt-2 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="State/Territory"
                  className="border p-2 rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Country"
                className="border p-2 w-full mt-2 rounded-md"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                What’s your contact information?
              </h2>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 w-full rounded-md"
                />
                <p className="text-sm text-gray-500 mt-1">
                  A confirmation email will be sent after checkout
                </p>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border p-2 w-full mt-2 rounded-md"
                />
                <p className="text-sm text-gray-500 mt-1">
                  A carrier might contact you to confirm delivery
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                What’s your PAN?
              </h2>
              <input
                type="text"
                placeholder="PAN"
                className="border p-2 w-full mt-2 rounded-md"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter your PAN to enable payment with UPI, Net Banking, or local
                card methods
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <input type="checkbox" id="save-pan" className="border" />
                <label htmlFor="save-pan" className="text-gray-600">
                  Save PAN details to Nike Profile
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <input type="checkbox" id="consent" className="border" />
                <label htmlFor="consent" className="text-gray-600">
                  I have read and consent to eShopWorld processing my
                  information in accordance with the Privacy Statement and
                  Cookie Policy.
                </label>
              </div>
            </div>

            <button className="bg-black text-white py-3 px-6 rounded-md w-full mt-4 hover:bg-gray-800">
              Continue
            </button>
          </form>

          {/* Section Headers */}
          {["Delivery", "Shipping", "Billing", "Payment"].map((section) => (
            <div key={section} className="border-t pt-4">
              <h2 className="text-lg font-semibold text-[#757575]">{section}</h2>
            </div>
          ))}
        </div>

        {/* Right Section (Full Width on Small Screens, 3/8 width on large) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white p-6 border rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              (The total reflects the price of your order, including all duties
              and taxes)
            </p>
          </div>

          <div className="bg-white p-6 border rounded-md">
            <h2 className="text-md font-semibold text-gray-800">
              Arrives Mon, 27 Mar - Wed, 12 Apr
            </h2>
            <div className="flex items-center mt-4">
              <Image src={product} alt="product" />
              <div className="ml-4">
                <p className="text-gray-800 font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top
                </p>
                <p className="text-gray-600">Qty: 1</p>
                <p className="text-gray-600">Size: L</p>
                <p className="text-gray-800 font-semibold">₹ 3,895.00</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mt-4">
                <Image src={image} alt="image" className="h-40 w-40" />
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">
                    Nike Air Max 97 SE Men&apos;s Shoes
                  </p>
                  <p className="text-gray-600">Qty: 1</p>
                  <p className="text-gray-600">Size: Uk 8</p>
                  <p className="text-gray-800 font-semibold">
                    ₹ 16,995.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
