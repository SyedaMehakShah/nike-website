// import Image from "next/image";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import product from "@/public/Rectangle.png";
// export default function ProductDetail() {
//   return (
//     <div className="max-w-7xl m-28 p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//         {/* Left: Product Image */}
//         <div className="flex justify-center">
//           <Image src={product} alt="product" />
//         </div>
//         <div className="mx-9">
//         <div className="flex flex-col justify-center space-y-4">
//           {/* Product Name */}
//           <h1 className="text-5xl font-bold text-[#111111]">
//             Nike Air Force 1 PLT.AF.ORM
//           </h1>

//           {/* Product Description */}
//           <p className=" text-[#111111]">
//             Turn style on its head with this crafted take on the Air Jordan 1
//             Mid. Its "inside out"-inspired construction, including unique
//             layering and exposed foam accents, ups the ante on this timeless
//             Jordan Brand silhouette. Details like the deco stitching on the
//             Swoosh add coveted appeal, while the unexpected shading, rich
//             mixture of materials and aged midsole aesthetic give this release an
//             artisan finish.
//           </p>

//           {/* Product Price */}
//           <p className="text-4xl font-semibold  text-[#111111]">₹ 8 695.00</p>

        
//           {/* Add to Cart Button */}
// <button className="bg-black text-white py-3 w-36 rounded-3xl flex items-center justify-center gap-2 hover:bg-black">
//   <HiOutlineShoppingCart className="text-lg" /> Add to Cart
// </button>

//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import product from "@/public/Rectangle.png";

export default function ProductDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <Image
            src={product}
            alt="product"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="space-y-6">
          {/* Product Name */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111]">
            Nike Air Force 1 PLT.AF.ORM
          </h1>

          {/* Product Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#111111] leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its inside &quot out-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials, and aged midsole aesthetic give this release
            an artisan finish.
          </p>

          {/* Product Price */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#111111]">
            ₹ 8,695.00
          </p>

          {/* Add to Cart Button */}
          <button className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-all">
            <HiOutlineShoppingCart className="text-lg" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
