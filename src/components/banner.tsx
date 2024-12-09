
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