
  
import Image from "next/image";
import product1 from "@/public/Frame (3).png";
import Product from "@/public/Frame (2).png";

export default function CartPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Left Spacer */}
        <div className="hidden lg:block col-span-1"></div>

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-12 lg:col-span-7 space-y-8">
          {/* Free Delivery Box */}
          <div className="bg-[#F7F7F7] p-4 shadow-md rounded-md border border-gray-200">
            <h2 className="text-lg font-semibold">Free Delivery</h2>
            <p className="text-[#111111] mt-2">
              Applies to orders of <span className="font-semibold">₹ 14 000.00</span> or more.
            </p>
            <a href="#" className="underline mt-2 block">
              View details
            </a>
          </div>

          {/* Bag Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Bag</h2>
            {/* Product 1 */}
            <div className="border-b border-gray-300 pb-6 mb-6 flex flex-wrap">
              {/* Product Image */}
              <Image
                src={Product}
                alt="product"
                className="w-24 h-24 object-cover rounded-md"
              />
              {/* Product Details */}
              <div className="flex-1 ml-6">
                <h3 className="text-lg font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-[#757575] mt-2">
                  Men&apos;s Short-Sleeve Running Top<br />Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-[#757575] mt-2">Size: L</p>
                <p className="text-[#757575] mt-2">Quantity: 1</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="text-[#757575] hover:text-red-500">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="text-[#757575] hover:text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              {/* Product Price */}
              <div className="text-right">
                <p className="text-gray-800 font-semibold">MRP: ₹ 3 895.00</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="border-b border-gray-300 pb-6 mb-6 flex flex-wrap">
              <div className="w-24 h-24 object-cover rounded-md"></div>
              {/* Product Details */}
              <div className="flex-1 ml-6">
                <h3 className="text-lg font-semibold">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-[#757575] mt-2">
                  Men&apos;s Short-Sleeve Running Top<br />Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-[#757575] mt-2">Size: L</p>
                <p className="text-[#757575] mt-2">Quantity: 1</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="text-[#757575] hover:text-red-500">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button className="text-[#757575] hover:text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              {/* Product Price */}
              <div className="text-right">
                <p className="text-gray-800 font-semibold">MRP: ₹ 3 895.00</p>
              </div>
            </div>

            {/* Favourites Section */}
            <h2 className="text-xl font-bold">Favourites</h2>
            <p className="text-gray-600 mt-2">There are no items saved in favourites.</p>

            {/* Recommendations */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold">You might also like</h3>
              <div className="mt-4">
                <Image src={product1} alt="product1" className="w-full" />
                <p className="mt-2 font-semibold">Air Jordan 1 Mid SE Craft</p>
                <p className="text-gray-600">Men&apos;s Shoes</p>
                <p>MRP : ₹ 12 295.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 sm:col-span-12 lg:col-span-4">
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="text-gray-600">
              <p className="text-sm flex gap-44">
                Subtotal <span>₹ 20 890.00</span>
              </p>
              <p className="text-sm flex gap-20">
                Estimated Delivery & Handling <span>Free</span>
              </p>

              <p className="text-sm flex gap-40 border-t-2 m-3 py-3 border-b-2">
                Total <span>₹ 20 890.00</span>
              </p>
            </div>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-full hover:bg-gray-900">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
