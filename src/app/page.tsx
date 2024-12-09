import Banner from "@/components/banner";
import Product from "@/components/product";
import Main from "@/components/main";
import Gearup from "@/components/gearup";
import Dontmiss from "@/components/dontmiss";

export default function Home() {
  return (
    <div className=" min-h-screen max-w-[1440px]">
      {/* Header Section */}
      <header>
        <Banner />
      </header>

      {/* Main Content */}
      <main className="">
        <Product />
        <Main />
        <Gearup />
        <Dontmiss />
      </main>

      {/* Footer */}
      {/* <footer className="bg-black text-white text-center p-4">

      </footer> */}
    </div>
  );
}
