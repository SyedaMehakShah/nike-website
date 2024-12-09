
import Image from "next/image";
import image from "@/public/Image (8).png";
import image12 from "@/public/Image (12).png";
import image10 from "@/public/Image (10).png";
import image9 from "@/public/Image (9).png";

export default function Dontmiss() {
  return (
    <div className="bg-slate-50">
      <div className="text-black m-4">
        {/* Heading and Banner Image */}
        <h3 className="m-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
          Don&apos;t Miss
        </h3>
        <Image src={image} alt="image" className="w-full h-auto" />
        
        <div className="text-center py-8 px-4 sm:px-8 md:px-16 lg:px-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] m-3">
            FLIGHT ESSENTIALS
          </h1>
          <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>

          {/* Shop Button */}
          <div className="mt-6 space-x-4 flex justify-center">
            <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
              shop
            </button>
          </div>
        </div>
      </div>

      {/* The Essentials Section */}
      <h3 className="text-center text-2xl sm:text-3xl md:text-4xl m-4 font-semibold">The Essentials</h3>
      <div className="flex flex-wrap justify-center gap-4 m-6">
        {/* Men's */}
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src={image12} alt="image8" className="w-full h-auto" />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-xl">
            Men&apos;s
          </button>
        </div>

        {/* Women's */}
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src={image9} alt="image8" className="w-full h-auto" />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-xl">
            Women&apos;s
          </button>
        </div>

        {/* Kids' */}
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Image src={image10} alt="image8" className="w-full h-auto" />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-xl">
            Kids
          </button>
        </div>
      </div>

      {/* Icons and Categories */}
      <div className="flex flex-wrap justify-center gap-8 mx-4 md:mx-16 m-4">
        <ul className="space-y-2">
          <h1 className="font-bold m-3 text-xl sm:text-2xl">Icons</h1>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
        
        <ul className="space-y-2">
          <h1 className="font-bold m-3 text-xl sm:text-2xl">Shoes</h1>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>
        
        <ul className="space-y-2">
          <h1 className="font-bold m-3 text-xl sm:text-2xl">Clothing</h1>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirts & Tops</li>
        </ul>

        <ul className="space-y-2">
          <h1 className="font-bold m-3 text-xl sm:text-2xl">Kids</h1>
          <li>Infant & Toddler Shoes</li>
          <li>Kids&apos; Shoes</li>
          <li>Kids&apos; Jordan Shoes</li>
          <li>Kids&apos; Basketball Shoes</li>
        </ul>
      </div>
    </div>
  );
}
