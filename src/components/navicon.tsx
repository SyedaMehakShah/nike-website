


import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";

export default function Navicon() {
  return (
    <div className="flex items-center space-x-2 md:space-x-4 m-4 md:m-9">
      {/* Search Bar */}
      <div className="rounded-lg border h-10 bg-[#F5F5F5] flex items-center px-3 w-20 sm:w-28 md:w-48">
        <IoMdSearch className="text-lg sm:text-xl text-black cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F5F5F5] text-[#CCCCCC] w-full outline-none px-2 text-xs sm:text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex gap-2 sm:gap-3">
        <CiHeart className="text-lg sm:text-xl md:text-2xl" />
        <AiOutlineShopping className="text-lg sm:text-xl md:text-2xl" />
      </div>
    </div>
  );
}