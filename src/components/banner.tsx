
// // import Image from "next/image";
// // import banner from "../public/Image.png";

// // export default function Banner() {
// //   return (
// //     <div className="w-full">
// //       {/* Header Section */}
// //       <div className="w-full h-auto bg-[#F5F5F5] text-[#111111] flex flex-col items-center py-6 sm:py-8 md:py-10">
// //         <h2 className="text-center font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
// //           Hello Nike App
// //         </h2>
// //         <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
// //           Download the app to access everything Nike.{" "}
// //           <span className="underline">Get Your Great</span>
// //         </p>
// //       </div>

// //       {/* Banner Image and Text Section */}
// //       <div className="bg-[#FFFFFF] px-6 sm:px-8 md:px-16 lg:px-32">
// //         {/* Banner Image */}
// //         <Image
// //           src={banner}
// //           alt="banner"
// //           className="w-full h-auto"
// //           layout="responsive"
// //           width={1344}
// //           height={700}
// //         />

// //         {/* Text Section */}
// //         <div className="text-center py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-32">
// //           <h3 className="font-semibold text-[#111111] mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
// //             First Look
// //           </h3>
// //           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] m-3">
// //             NIKE AIR MAX PULSE
// //           </h1>
// //           <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl">
// //             Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
// //             Pulse
// //             <br />
// //             —designed to push you past your limits and help you go to the max.
// //           </p>

// //           {/* Buttons */}
// //           <div className="mt-6 space-x-4 flex justify-center">
// //             <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
// //               Notify Me
// //             </button>
// //             <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
// //               Shop Air Max
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import Image from "next/image";
// import banner from "../public/Image.png";

// export default function Banner() {
//   return (
//     <div className="w-full">
//       {/* Header Section */}
//       <div className="w-full max-w-screen-xl mx-auto h-auto bg-[#F5F5F5] text-[#111111] flex flex-col items-center py-4 sm:py-6 md:py-8 lg:py-10">
//         <h2 className="text-center font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//           Hello Nike App
//         </h2>
//         <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2">
//           Download the app to access everything Nike.{" "}
//           <span className="underline font-medium">Get Your Great</span>
//         </p>
//       </div>

//       {/* Banner Image and Text Section */}
//       <div className="bg-white w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//         {/* Banner Image */}
//         <Image
//           src={banner}
//           alt="banner"
//           className="w-full h-auto rounded-lg"
//           layout="responsive"
//           width={1344}
//           height={700}
//           priority
//         />

//         {/* Text Section */}
//         <div className="text-center py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//           <h3 className="font-semibold text-[#111111] mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
//             First Look
//           </h3>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111111] mt-3">
//             NIKE AIR MAX PULSE
//           </h1>
//           <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 leading-relaxed">
//             Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
//             Pulse
//             <br />
//             —designed to push you past your limits and help you go to the max.
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
//             <button className="text-white bg-[#111111] py-2 px-6 sm:px-8 rounded-lg text-sm sm:text-base lg:text-lg w-full sm:w-auto">
//               Notify Me
//             </button>
//             <button className="text-white bg-[#111111] py-2 px-6 sm:px-8 rounded-lg text-sm sm:text-base lg:text-lg w-full sm:w-auto">
//               Shop Air Max
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import banner from "../public/Image.png";

export default function Banner() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full max-w-screen-xl mx-auto h-auto bg-[#F5F5F5] text-[#111111] flex flex-col items-center py-4 sm:py-6 md:py-8 lg:py-10">
        <h2 className="text-center font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
          Hello Nike App
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mt-2">
          Download the app to access everything Nike.{" "}
          <span className="underline font-medium">Get Your Great</span>
        </p>
      </div>

      {/* Banner Image and Text Section */}
      <div className="w-full bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Banner Image */}
          <div className="w-full">
            <Image
              src={banner}
              alt="banner"
              layout="responsive"
              className="rounded-lg"
              width={1344}
              height={700}
              priority
            />
          </div>

          {/* Text Section */}
          <div className="text-center py-6 sm:py-8 md:py-12 lg:py-16">
            <h3 className="font-semibold text-[#111111] mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
              First Look
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mt-3">
              NIKE AIR MAX PULSE
            </h1>
            <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl mt-4 leading-relaxed">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse
              <br />
              —designed to push you past your limits and help you go to the max.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="text-white bg-[#111111] py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-base lg:text-lg w-full sm:w-auto">
                Notify Me
              </button>
              <button className="text-white bg-[#111111] py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-base lg:text-lg w-full sm:w-auto">
                Shop Air Max
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}