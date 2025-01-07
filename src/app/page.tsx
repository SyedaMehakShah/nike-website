
import Banner from "@/components/banner";
import Product from "@/components/product";
import Main from "@/components/main";
import Gearup from "@/components/gearup";
import Dontmiss from "@/components/dontmiss";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      {/* Header Section */}
      <header>
        <Banner />
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Product Section */}
        
        <section className="mb-12">
          <Product />
        </section>

        {/* Main Section */}
        <section className="mb-12">
          <Main />
        </section>

        {/* Gearup Section */}
        <section className="mb-12">
          <Gearup />
        </section>

        {/* Don't Miss Section */}
        <section className="mb-12">
          <Dontmiss />
        </section>
      </main>

      {/* Footer (Uncomment if you want to add it) */}
      {/* <footer className="bg-black text-white text-center p-4">Footer Content</footer> */}
    </div>
  );
}
