import image3 from "@/public/Rectangle (10).png";
import image4 from "@/public/Rectangle (11).png";
import image5 from "@/public/Rectangle (12).png";
import image6 from "@/public/Rectangle (5).png";
import image0 from"@/public/Image (6).png"
import image8 from "@/public/Rectangle (9).png";
import image7 from "@/public/Rectangle (7).png"

import Image from "next/image";
import image1 from "@/public/Image (1).png";
import image2 from "@/public/Image (2).png";

export default function Product() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-semibold text-lg sm:text-xl">New (500)</p>
        <div className="flex items-center gap-3">
          <button className="text-sm sm:text-base">Hide Filters</button>
          <button className="text-sm sm:text-base">Sort By</button>
        </div>
      </div>

      {/* Filters and Categories */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Categories */}
        <div className="col-span-1 md:w-[55%] space-y-4">
          <p className="font-semibold text-xl mb-4">Categories</p>
          <div className="space-y-2">
            <p>Shoes</p>
            <p>Sport Bras</p>
            <p>Tops & T-Shirts</p>
            <p>Jackets</p>
            <p>Trousers & Tights</p>
            <p>Shorts</p>
            <p>Tracksuits</p>
            <p>Jumpsuits & Rompers</p>
            <p>Skirts & Dresses</p>
            <p>Socks</p>
            <p>Accessories & Equipment</p>
          </div>
        </div>

        {/* Main Products Area */}
        <div className="col-span-4 flex justify-end">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Product Detail 1 */}
            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image2}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>

            {/* Product Detail 2 */}
            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image1}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>

            {/* Product Detail 3 */}
            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image3}
                alt="Nike Air Max 97"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Max 97</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 16,995</p>
              </div>
            </div>
</div>
            {/* Add more products similarly */}
        
        <div className="col-span-4 flex justify-end">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Product Detail 1 */}
            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image4}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>


            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image0}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>


            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image2}
                alt="Nike Air Max 97"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Max 97</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 16,995</p>
              </div>
            </div>
</div>
{/* mmmmmmmmmm */}
<div className="col-span-4 flex justify-end">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Product Detail 1 */}
            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image8}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>


            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image6}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>


            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image7}
                alt="Nike Air Max 97"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Max 97</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 16,995</p>
              </div>
            </div>
</div>
          </div>
          <div className="col-span-4 flex justify-end">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Product Detail 1 */}
            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image8}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>


            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image5}
                alt="Nike Air Max 1"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Force 1 MKI</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 10,988</p>
              </div>
            </div>


            <div className="bg-white shadow-sm p-4 rounded-lg w-64">
              <Image
                src={image8}
                alt="Nike Air Max 97"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold text-[#111111]">Nike Air Max 97</p>
                <p className="text-xs text-[#757575]">Men&apos;s Shoes</p>
                <p className="text-sm font-semibold">₹ 16,995</p>
              </div>
            </div>
</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

