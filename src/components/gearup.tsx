"use client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
interface Product {
  _id: string;
  name: string;
  image?: { url: string };
  description: string;
  price: number;
  slug: { current: string }; 
  category: string | string[]; 
}

export default function Gearup() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Define the slugs for the products you want to display
        const slugs = [
          "air-jordan-1-elevate-low",
          "nike-dri-fit-uv-hyverse",
          "nike-pegasus-40",
          "nike-zoom-fly-5",
        ];
        
        const query = `*[_type == "product" && slug.current in ${JSON.stringify(slugs)}] {
          _id,
          name,
          description,
          price,
          slug,
          category,
          image {
            asset -> {
              url
            }
          }
        }`;

        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center text-center"
          >
            <Link href={`/product/${product.slug.current}`}>
            {product.image ? (
              <Image
                src={urlFor(product.image).url()}
                alt={`Image of ${product.name}`}
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            ) : (
              <div className="w-300 h-300 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
                No Image Available
              </div>
            )}
            <h2 className="mt-2 font-semibold text-lg text-center text-black">
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-center text-gray-600">
              {/* Check if category is an array */}
              {Array.isArray(product.category)
                ? product.category.join(", ")
                : product.category}
            </p>
            <span className="mt-2 font-bold text-lg text-center">
              ₹{product.price.toFixed(2)}
            </span>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}
