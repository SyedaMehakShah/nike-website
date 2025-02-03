"use client";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; 
import { urlFor } from "@/sanity/lib/image"; 

interface Product {
  _id: string;
  name: string;
  image?: { url: string };
  price: number;
  category: string;
  slug: { current: string };
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
       
        const slugs = [
          "air-jordan-1-elevate-low",
          "nike-dri-fit-uv-hyverse",
          "nike-pegasus-40",
        ];

        const query = `*[_type == "product" && slug.current in ${JSON.stringify(slugs)}] {
          _id,
          name,
          price,
          category,
          slug,
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
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg sm:text-xl">Best Of Air Max</p>
        <div className="flex items-center gap-3">
          <p className="text-sm sm:text-base">Shop</p>
          <button className="rounded-lg w-8 h-8 flex items-center justify-center bg-[#F5F5F5] text-[#CCCCCC]">
            <IoIosArrowBack />
          </button>
          <button className="rounded-lg w-8 h-8 flex items-center justify-center bg-[#E5E5E5] text-[#111111]">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-sm p-4 rounded-lg">
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
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
                No Image Available
              </div>
            )}
            <p className="flex justify-between font-semibold text-[#111111] mt-3">
              {product.name} <span>₹ {product.price}</span>
            </p>
            <span className="text-sm text-[#757575]">{product.category}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
