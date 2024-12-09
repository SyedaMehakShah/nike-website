
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import image1 from "@/public/Image (1).png";
import image2 from "@/public/Image (2).png";

export default function Product() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg sm:text-xl">Best Of Air Max</p>
        <div className="flex items-center gap-3">
          <p className="text-sm sm:text-base">Shop</p>
          <button className="rounded-lg w-8 h-8 flex items-center justify-center bg-[#F5F5F5] text-[#CCCCCC]">
            <IoIosArrowBack />
          </button>
          <button className="rounded-lg w-8 h-8 flex items-center justify-center bg-[#E5E5E5] text-[#111111]">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Product Card 1 */}
        <div className="bg-white shadow-sm p-4 rounded-lg">
          <Image
            src={image1}
            alt="Nike Air Max Pulse"
            className="w-full rounded-md"
          />
          <p className="flex justify-between font-semibold text-[#111111] mt-3">
            Nike Air Max Pulse <span>₹ 13,995</span>
          </p>
          <span className="text-sm text-[#757575]">Women&apos;s Shoes</span>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white shadow-sm p-4 rounded-lg">
          <Image
            src={image1}
            alt="Nike Air Max Pulse (Men)"
            className="w-full rounded-md"
          />
          <p className="flex justify-between font-semibold text-[#111111] mt-3">
            Nike Air Max Pulse <span>₹ 13,995</span>
          </p>
          <span className="text-sm text-[#757575]">Men&apos;s Shoes</span>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white shadow-sm p-4 rounded-lg">
          <Image
            src={image2}
            alt="Nike Air Max 97 SE"
            className="w-full rounded-md"
          />
          <p className="flex justify-between font-semibold text-[#111111] mt-3">
            Nike Air Max 97 SE <span>₹ 16,995</span>
          </p>
          <span className="text-sm text-[#757575]">Men&apos;s Shoes</span>
        </div>
      </div>
    </div>
  );
}
