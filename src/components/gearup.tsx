import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import image4 from "@/public/Image (4).png";
import image5 from "@/public/Image (5).png";
import image6 from "@/public/Image (6).png";
import image7 from "@/public/Image (7).png";

export default function Gearup() {
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-20 pt-6 px-4 sm:px-6 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h4 className="font-bold text-xl sm:text-2xl text-center md:text-left">
          Gear Up
        </h4>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Shop Men's */}
          <p className="flex items-center gap-3 text-sm md:text-base">
            Shop Men&apos;s
            <span className="rounded-xl w-6 h-6 flex items-center justify-center bg-[#F5F5F5] text-[#CCCCCC]">
              <IoIosArrowBack />
            </span>
            <span className="rounded-xl w-6 h-6 flex items-center justify-center bg-[#E5E5E5] text-[#111111]">
              <IoIosArrowForward />
            </span>
          </p>
          {/* Shop Women's */}
          <p className="flex items-center gap-3 text-sm md:text-base">
            Shop Women&apos;s
            <span className="rounded-xl w-6 h-6 flex items-center justify-center bg-[#F5F5F5] text-[#CCCCCC]">
              <IoIosArrowBack />
            </span>
            <span className="rounded-xl w-6 h-6 flex items-center justify-center bg-[#E5E5E5] text-[#111111]">
              <IoIosArrowForward />
            </span>
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {/* Product 1 */}
        <div className="flex flex-col items-center text-center">
          <Image src={image4} alt="Nike Dri-FIT ADV TechKnit Ultra" />
          <p className="font-semibold text-[#111111] mt-3 text-sm md:text-base">
            Nike Dri-FIT ADV TechKnit Ultra
            <span className="block text-base font-normal">₹ 3895</span>
          </p>
          <span className="text-[#757575] text-xs md:text-sm">
            Men&apos;s Short-Sleeve Running Top
          </span>
        </div>
        {/* Product 2 */}
        <div className="flex flex-col items-center text-center">
          <Image src={image5} alt="Nike Dri-FIT Challenger" />
          <p className="font-semibold text-[#111111] mt-3 text-sm md:text-base">
            Nike Dri-FIT Challenger
            <span className="block text-base font-normal">₹ 2495</span>
          </p>
          <span className="text-[#757575] text-xs md:text-sm">
            Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
          </span>
        </div>
        {/* Product 3 */}
        <div className="flex flex-col items-center text-center">
          <Image src={image6} alt="Nike Dri-FIT ADV Run Division" />
          <p className="font-semibold text-[#111111] mt-3 text-sm md:text-base">
            Nike Dri-FIT ADV Run Division
            <span className="block text-base font-normal">₹ 5295</span>
          </p>
          <span className="text-[#757575] text-xs md:text-sm">
            Women&apos;s Long-Sleeve Running Top
          </span>
        </div>
        {/* Product 4 */}
        <div className="flex flex-col items-center text-center">
          <Image src={image7} alt="Nike Fast" />
          <p className="font-semibold text-[#111111] mt-3 text-sm md:text-base">
            Nike Fast
            <span className="block text-base font-normal">₹ 3795</span>
          </p>
          <span className="text-[#757575] text-xs md:text-sm">
            Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
          </span>
        </div>
      </div>
    </div>
  );
}
