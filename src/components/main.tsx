// import Image from "next/image"

// import image from "@/public/Image (3).png"


// export default function Main(){
//     return(
//         <div className="h-[977] mx-4">
//             <h4 className="font-semibold text-lg">Featured</h4>
// <Image src={image} alt="image" className="h-[700] w- p-4" />
// {/* Text Section */}
// <div className="text-center py-8 px-4 sm:px-8 md:px-16 lg:px-32">
         
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] m-3">
//           STEP INTO WHAT FEELS GOOD
//           </h1>
//           <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl">
        
//           Cause everyone should know the feeling of running in that perfect pair.
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 space-x-4 flex justify-center">
           
//             <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
//               Find Your  Shoe
//             </button>
//           </div>
//           </div>


//         </div>
//     )
// }
import Image from "next/image";
import image from "@/public/Image (3).png";

export default function Main() {
  return (
    <div className="h-auto mx-4">
      <h4 className="font-semibold text-lg">Featured</h4>

      {/* Responsive Image */}
      <Image
        src={image}
        alt="image"
        className="h-auto w-full p-4 object-cover"
      />

      {/* Text Section */}
      <div className="text-center py-8 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] m-3">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-x-4 flex justify-center">
          <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
            Find Your Shoe
          </button>
        </div>
      </div>
    </div>
  );
}
